-- ============================================================================
--  Arnisound Tools — Table des licences (Supabase / Postgres)
--  Idempotent : peut être relancé sans erreur.
-- ============================================================================

-- Table (ne recrée rien si elle existe déjà)
create table if not exists public.licenses (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  product     text not null,               -- 'speed-rf' | 'rf-shot' | 'reperages'
  active      boolean not null default true,
  order_id    text,                         -- id de commande Lemon Squeezy
  created_at  timestamptz not null default now()
);

-- Colonnes manquantes si la table préexistait dans une version plus ancienne
alter table public.licenses add column if not exists order_id   text;
alter table public.licenses add column if not exists active     boolean not null default true;
alter table public.licenses add column if not exists created_at timestamptz not null default now();
-- Date d'expiration : NULL = licence permanente ; une date = licence temporaire.
alter table public.licenses add column if not exists expires_at timestamptz;

-- Contrainte « 1 licence par produit et par personne » (indispensable pour le
-- upsert onConflict du webhook). Ajoutée seulement si absente.
do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'licenses_user_product_unique'
  ) then
    alter table public.licenses
      add constraint licenses_user_product_unique unique (user_id, product);
  end if;
end $$;

-- Row Level Security
alter table public.licenses enable row level security;

-- Le client (clé anon) peut LIRE ses propres licences uniquement.
-- Aucune policy d'INSERT/UPDATE : seul le webhook (clé service_role) écrit.
drop policy if exists "read own licenses" on public.licenses;
create policy "read own licenses" on public.licenses
  for select using (auth.uid() = user_id);

-- ============================================================================
--  Licences temporaires / cadeaux
--  Fonctions à appeler depuis le SQL Editor (droits admin).
-- ============================================================================

-- Offrir une licence à quelqu'un par son email.
--   p_days = NULL  → licence permanente (cadeau définitif)
--   p_days = 14    → licence temporaire valable 14 jours (essai)
-- Exemples :
--   select public.grant_license('jean@exemple.fr', 'speed-rf', 14);
--   select public.grant_license('presse@media.fr', 'rf-shot', 30);
--   select public.grant_license('ami@exemple.fr', 'speed-rf');         -- permanente
create or replace function public.grant_license(
  p_email   text,
  p_product text,
  p_days    int default null
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid;
begin
  select id into uid from auth.users where lower(email) = lower(p_email);
  if uid is null then
    raise exception 'Aucun compte pour l''email %', p_email;
  end if;

  insert into public.licenses (user_id, product, active, order_id, expires_at)
  values (
    uid, p_product, true, 'offert',
    case when p_days is null then null else now() + make_interval(days => p_days) end
  )
  on conflict (user_id, product) do update
    set active     = true,
        order_id   = 'offert',
        expires_at = case when p_days is null then null
                          else now() + make_interval(days => p_days) end;
end;
$$;

-- Révoquer une licence (ex. fin d'essai anticipée).
--   select public.revoke_license('jean@exemple.fr', 'speed-rf');
create or replace function public.revoke_license(
  p_email   text,
  p_product text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid;
begin
  select id into uid from auth.users where lower(email) = lower(p_email);
  if uid is null then
    raise exception 'Aucun compte pour l''email %', p_email;
  end if;
  update public.licenses set active = false
   where user_id = uid and product = p_product;
end;
$$;

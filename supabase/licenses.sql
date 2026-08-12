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

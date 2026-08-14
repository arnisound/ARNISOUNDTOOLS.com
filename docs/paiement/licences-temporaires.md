# Licences temporaires & cadeaux

Permet d'offrir un accès à un outil payant — pour un essai, une démo, la presse,
un partenaire ou un ami — soit **pour une durée limitée**, soit **définitivement**.

## Comment ça marche

La table `licenses` a une colonne `expires_at` :
- **`NULL`** → licence **permanente** (achat normal ou cadeau définitif).
- **une date** → licence **temporaire** : l'accès s'arrête automatiquement à cette
  date (le tableau de bord et les apps la vérifient).

Un **achat** (via Lemon Squeezy) crée toujours une licence permanente et écrase
un éventuel essai en cours.

## Offrir une licence (depuis Supabase → SQL Editor)

La personne doit **déjà avoir un compte** sur arnisoundtools.com (avec l'email visé).

```sql
-- Essai de 14 jours de Speed RF
select public.grant_license('jean@exemple.fr', 'speed-rf', 14);

-- Accès presse à RF Shot pendant 30 jours
select public.grant_license('presse@media.fr', 'rf-shot', 30);

-- Cadeau permanent (pas de durée)
select public.grant_license('ami@exemple.fr', 'speed-rf');
```

Produits possibles : `speed-rf`, `rf-shot`, `reperages`.

## Retirer une licence (fin d'essai anticipée)

```sql
select public.revoke_license('jean@exemple.fr', 'speed-rf');
```

## Voir les licences en cours

```sql
select u.email, l.product, l.active, l.expires_at, l.order_id
from public.licenses l
join auth.users u on u.id = l.user_id
order by l.created_at desc;
```

## Essai en self-service via un code Lemon Squeezy

En plus du SQL manuel, un **essai du bundle** (Speed RF + RF Shot) est distribuable
par **code** :

- Produit d'essai Lemon Squeezy — variant `2018257`.
- Le webhook le mappe sur `speed-rf` + `rf-shot`, **valable 15 jours**.
- Tu crées un **code de réduction 100 %** dans Lemon Squeezy (limité en nombre
  d'usages / date si tu veux) et tu le diffuses. La personne l'utilise au
  checkout → les deux outils s'activent 15 jours sur son compte.

Garde-fou : si la personne possède déjà une licence **permanente** sur un de ces
outils, l'essai ne la rétrograde pas (elle reste permanente).

Pour changer la durée : `days: 15` dans `VARIANT_MAP`
(`supabase/functions/lemonsqueezy-webhook/index.ts`), puis redéploie la fonction.

## Bon à savoir

- L'utilisateur voit **« Essai — jusqu'au JJ/MM/AAAA »** sur son tableau de bord.
- À l'expiration, l'outil se reverrouille tout seul (redirection vers la page
  d'achat). Le contrôle est côté client (comme tout le système de gate) : c'est
  un garde-fou, pas une forteresse — largement suffisant pour des essais offerts.
- Pour offrir un essai en self-service (bouton « Essayer 7 jours » sur le site),
  c'est une évolution possible : il faudrait une petite fonction serveur qui
  appelle `grant_license` pour l'utilisateur connecté (à faire plus tard).

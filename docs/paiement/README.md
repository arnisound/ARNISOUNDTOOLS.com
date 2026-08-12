# Paiement des licences — Lemon Squeezy + Supabase

Ce dossier contient tout ce qu'il faut pour vendre les outils payants et
débloquer automatiquement les licences.

## Le principe

```
Client connecté clique « Acheter »
  → Checkout Lemon Squeezy (email + user_id Supabase pré-remplis)
  → Paiement
  → Lemon Squeezy envoie le webhook « order_created »
  → l'Edge Function vérifie la signature
  → elle écrit une ligne dans la table « licenses » (active = true) via service_role
  → le tableau de bord + le gate de l'app voient la licence → outil débloqué ✅
```

Règle d'or : **c'est le serveur (webhook) qui crée la licence**, jamais le
navigateur. La clé `service_role` vit uniquement dans l'Edge Function.

## Les fichiers

| Fichier | Rôle |
|---|---|
| `supabase/licenses.sql` | Schéma de la table `licenses` (idempotent) |
| `supabase/functions/lemonsqueezy-webhook/index.ts` | Le webhook qui crée les licences |
| `src/lib/checkout.ts` | Config boutique + URL de checkout (front) |

## Variant IDs Lemon Squeezy

| Produit | Prix | Variant ID |
|---|---|---|
| Speed RF | 9,99 € | `2009773` |
| RF Shot | 24,99 € | `2009790` |
| Bundle Speed RF + RF Shot | 29,99 € | `2009850` |
| Repérages | 19,99 € | *(à créer quand l'app sera en ligne)* |

Le mapping variant → produit(s) est dans `lemonsqueezy-webhook/index.ts`
(`VARIANT_TO_PRODUCTS`). Le bundle débloque **deux** licences.

---

## Checklist de mise en place

- [x] **1. Produits créés** dans Lemon Squeezy
- [x] **2. Variant IDs** récupérés (ci-dessus)
- [ ] **3. Table Supabase** : lancer `supabase/licenses.sql` dans le SQL Editor
- [ ] **4. Déployer le webhook** (voir ci-dessous)
- [ ] **5. Enregistrer le webhook** dans Lemon Squeezy + signing secret
- [ ] **6. Tester** un achat en **mode Test**
- [ ] **7. Activer les boutons « Acheter »** (renseigner `LEMONSQUEEZY_STORE`)
- [ ] **8. Activer la boutique** (SIRET + compte de versement) pour encaisser en vrai

### 4. Déployer le webhook (Supabase CLI)

```bash
supabase functions deploy lemonsqueezy-webhook --no-verify-jwt
supabase secrets set LEMONSQUEEZY_WEBHOOK_SECRET=<ton-secret-aléatoire>
# SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY sont fournis automatiquement.
```

`--no-verify-jwt` : c'est Lemon Squeezy qui appelle, pas un utilisateur. La
sécurité vient de la vérification de signature HMAC.

### 5. Enregistrer le webhook dans Lemon Squeezy

Lemon Squeezy → **Settings → Webhooks → New** :
- **URL** : `https://knudezgfliycmakdpdmg.functions.supabase.co/lemonsqueezy-webhook`
- **Événements** : coche **order_created**
- **Signing secret** : une chaîne aléatoire — la même que `LEMONSQUEEZY_WEBHOOK_SECRET`.

### 6. Tester en mode Test

Lemon Squeezy propose un **Test mode** (pas besoin du SIRET). Utilise une carte
de test (ex. `4242 4242 4242 4242`, date future, CVC quelconque), passe une
commande, et vérifie qu'une ligne apparaît dans la table `licenses`.
Astuce : si tu ne connais pas un Variant ID, fais un achat test et lis le
`variant_id` dans les **logs de la fonction**.

### 7. Activer les boutons « Acheter » sur le site

Dans `src/lib/checkout.ts`, renseigne le sous-domaine de ta boutique :

```ts
export const LEMONSQUEEZY_STORE = 'arnisound'; // → arnisound.lemonsqueezy.com
```

Tant que c'est vide, les boutons « Acheter » renvoient vers `/login`
(comportement actuel). Une fois renseigné, ils pointent vers le checkout, avec
l'email + le user_id pré-remplis pour les personnes connectées.

### 8. Passer en réel

Active la boutique Lemon Squeezy (identité pro / SIRET + compte de versement),
recrée/duplique les produits en mode **Live**, mets à jour les Variant IDs si
besoin, et repointe le webhook sur l'URL de production.

---

## Cas limites

- **Possède déjà Speed RF puis achète le bundle** → le `upsert` réactive
  Speed RF (pas de doublon grâce à la contrainte `unique(user_id, product)`) et
  ajoute RF Shot. Il paie le bundle plein tarif (Lemon Squeezy ne déduit pas).
- **Remboursement** → à gérer plus tard en écoutant `order_refunded` pour passer
  `active = false`.
- **Achat avec un autre email que le compte** → le webhook retrouve le compte par
  email ; s'il n'existe pas, la licence n'est pas créée. Les messages de
  confirmation demandent d'utiliser / créer le compte avec l'email de l'achat.

---

## Contenus prêts à coller (fiches, emails)

Les descriptions de fiches produit et les textes d'emails de confirmation /
reçus sont dans `contenus-lemonsqueezy.md`.

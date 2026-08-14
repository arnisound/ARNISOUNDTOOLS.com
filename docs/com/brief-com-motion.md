# Brief — Communication & Motion Design · Arnisound Tools

> **Comment l'utiliser :** ouvre une nouvelle conversation dédiée à la com / au
> motion design et **colle ce document en premier message**. L'assistant aura
> alors tout le contexte de la marque, sans avoir à tout réexpliquer.

---

## 1. La marque

- **Nom** : Arnisound Tools
- **Baseline** : « Les outils du terrain, par des gens du terrain. »
- **Site** : https://arnisoundtools.com
- **Contact** : contact@arnisoundtools.com
- **Réseaux** : Instagram + Facebook (récents, à faire grandir)
- **Derrière la marque** : Théo Arnissolle, technicien du spectacle, micro-entreprise.
- **Mission** : des outils web pros pour le son, la lumière, la vidéo et la régie —
  simples, en français, sans usine à gaz, accessibles à tous les budgets.

## 2. Cible

Professionnels du **spectacle vivant, de l'audiovisuel et de l'événementiel** :
techniciens, régisseurs, intermittents, prestataires son/lumière/vidéo. Public de
terrain, pressé, allergique au jargon inutile et aux logiciels hors de prix.

## 3. Ton de voix

- **Pro du terrain, direct, chaleureux.** On parle « à un collègue ».
- **En français**, sans jargon inutile (mais le vocabulaire métier juste est bienvenu).
- Orienté **problème → solution** : « micro qui grésille ? → fréquences propres en 30 s ».
- Pas de survente : concret, honnête, utile.

## 4. Identité visuelle

**Couleurs**
- Or (accent) : `#c2832c` et `#cb8a27`
- Fonds sombres : `#0c0c0e`, `#171310`, `#060607`
- Textes : `#f4f0e8` (clair), `#a9a29a` (atténué), `#8f887e` (discret)

**Logo**
- Badge : disque noir + anneau blanc + **forme d'onde (waveform) dorée**.
- Version complète : le badge + le texte « ARNISOUND TOOLS ».
- Le **favicon** = le badge seul (sans texte).
- Fichiers dans le dépôt : `public/favicon.svg`, `public/logo.svg`,
  logos produits dans `public/products/*.svg`.

**Typo**
- Site : Inter (titres 700–800), JetBrains Mono pour le mono.
- Sur les visuels rendus : sans-serif lourde (Helvetica/Arial Black-like), titres très gras.

**Style visuel** : sombre et premium, lueur dorée, contrastes forts, beaucoup d'espace,
un léger cadre doré fin, coins arrondis. Sobre mais chaud.

## 5. Les produits (catalogue)

| Outil | Prix | En une phrase |
|---|---|---|
| **Speed RF** | 9,99 € | Plan de fréquences fiable pour micros & retours HF, en 30 s, depuis le téléphone. |
| **RF Shot** | 24,99 € | Coordination avancée : 100+ fréquences, intermodulations jusqu'à l'ordre 7, multi-bandes, sessions. |
| **AV Calc** | Gratuit | 71 calculateurs métier en 8 catégories (son, vidéo, élec, réseau, structure…). |
| **Fiche Tech Creator** | Gratuit | Fiches techniques propres, structurées, exportables en PDF. |
| **Repérages** | 19,99 € *(bientôt)* | Du repérage GPS terrain au dossier technique (plan à l'échelle, câblage, DXF/PDF). |
| **Bundle Speed RF + RF Shot** | 29,99 € (au lieu de 34,98 €) | Les deux outils fréquences, un seul achat. |
| **Essai bundle** | Gratuit 15 j (code promo) | Tester Speed RF + RF Shot pendant 15 jours. |

Modèle : **paiement unique, licence perpétuelle, sans abonnement**. Outils dans le
navigateur, rien à installer, en français.

## 6. Messages clés / angles de com

- « Des micros HF qui marchent **du premier coup**. »
- « La puissance d'un logiciel pro, **sans le prix ni la prise de tête**. »
- « Tout ce qu'on cherche sur un coin de table, **réuni au même endroit**. » (AV Calc)
- « Pensé pour la France » (TNT / ANFR / bandes PMSE).
- « Paiement unique, **à toi pour toujours**. »
- Preuve sociale / démos courtes (Reels de 15 s) cartonnent dans ce milieu.

## 7. Hashtags

**Base :** `#spectaclevivant #evenementiel #regie #technicienduspectacle #sonorisation #sono #lumiere #video #intermittent #prestataire #backstage #liveevent #arnisoundtools`

**Spécial HF/RF :** `#microHF #frequences #sansfil #wireless #PMSE #sonlive`

## 8. Formats à produire

- **Post feed** : 1080×1350 (4:5, recommandé) ou 1080×1080 (carré).
- **Story / Reel** : 1080×1920 (9:16).
- **Image de partage (OG)** : 1200×630.
- Toujours prévoir la version **mobile-first**, texte lisible en petit.

## 9. Méthode de motion design utilisée (reproductible)

Les visuels et vidéos sont générés **par code**, sans logiciel externe :

1. **HTML/CSS** : on met en page le visuel (mêmes couleurs/typo que la charte),
   avec les SVG du logo inline.
2. **Playwright (Chromium headless)** rend la page à la taille exacte (ex. 1080×1920).
   - Image fixe → une capture d'écran PNG.
   - Motion → une fonction déterministe `renderFrame(t)` qui pilote opacité/déplacements
     de chaque élément ; on capture ~30 images/s.
3. **Encodage** : `imageio` + `imageio-ffmpeg` (libx264, `-pix_fmt yuv420p`,
   `macro_block_size=None`). Sortie MP4 (ou WebM alpha pour un logo sur fond transparent).

Animations typiques : apparition en fondu + léger glissement (translateY), lueur
dorée qui pulse, logo qui « respire », révélation de texte séquencée.

## 10. Assets déjà produits (dans le dépôt / livrés)

- `public/favicon.svg`, `public/logo.svg`, `public/og.png`, `public/products/*.svg`
- **Motion logo « pièce »** (le favicon qui roule/se retourne pour révéler le logo) —
  MP4 fond sombre + WebM fond transparent.
- **Posts de lancement** : image fixe 4:5 « C'EST EN LIGNE » + Reel 9:16 motion.
- **Kit réseaux** : `docs/social/posts.md` (7 posts + hashtags + conseils).

## 11. Idées / backlog de contenu

- Reel démo 15 s d'un outil (avant/après : « micro qui grésille » → plan propre).
- Carrousel « 5 calculs qu'on refait tout le temps » (AV Calc).
- Post offre : bundle 29,99 € / essai 15 jours (quand on veut pousser).
- Teaser Repérages (« bientôt ») avec le motion.
- Format « le problème / la solution » décliné par outil.
- Motion d'ouverture (logo animé) à réutiliser en intro de chaque Reel.

## 12. Règles / limites

- Ne pas inventer de chiffres ou de fonctionnalités : s'en tenir à ce catalogue.
- Le **texte à l'écran et le logo** : ne pas les faire générer par une IA d'image/vidéo
  (rendu illisible) — les incruster au montage / via le rendu HTML.
- Rester sobre et pro : pas de surcharge, la lueur dorée en touche, pas partout.

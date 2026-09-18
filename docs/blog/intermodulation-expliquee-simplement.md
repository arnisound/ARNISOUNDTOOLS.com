---
title: "L'intermodulation expliquée simplement (et pourquoi vos micros se gênent)"
description: "Vos micros HF grésillent quand ils sont tous allumés, alors qu'ils vont bien séparément ? C'est l'intermodulation. Explication simple, exemples et solutions, sources à l'appui."
slug: intermodulation-expliquee-simplement
keywords: [intermodulation, IM3, micro HF, coordination de fréquences, produits d'intermodulation, PMSE, RF]
statut: publie
date: 2026-09-12
---

# L'intermodulation expliquée simplement (et pourquoi vos micros se gênent)

Voici une situation que tout sondier a vécue, et moi le premier : on teste ses micros
HF un par un, tout est propre. On les allume tous ensemble… et certains grésillent.
Pourtant les fréquences sont « libres ». Que se passe-t-il ?

La réponse tient en un mot : l'**intermodulation**. C'est le phénomène le plus mal
compris de la HF, et pourtant la cause n°1 des ennuis sur les gros plateaux. La bonne
nouvelle, c'est que le principe est simple à comprendre.

---

## Le principe : quand deux fréquences en fabriquent une troisième

Quand plusieurs signaux radio **puissants** se retrouvent dans un même circuit
électronique (l'étage d'entrée d'un récepteur, ou l'étage de sortie d'un émetteur), ce
circuit n'est jamais parfaitement « linéaire ». Résultat : il **mélange** les signaux
et en **crée de nouveaux**, à des fréquences qui n'existaient pas au départ.

Ces nouvelles fréquences s'appellent des **produits d'intermodulation** (IM), des
« fréquences fantômes » [1][2].

Le problème surgit quand l'un de ces produits tombe **pile sur la fréquence d'un
micro**. Le récepteur ne fait pas la différence : il reçoit un parasite en plein sur
son canal → grésillement, souffle, décrochage.

---

## Un peu de calcul (le strict nécessaire)

Prenons deux émetteurs, aux fréquences **f1** et **f2**. Les produits d'intermodulation
les plus gênants sont ceux du **3ᵉ ordre**, calculés ainsi :

- **2·f1 − f2**
- **2·f2 − f1**

**Exemple concret :**
- f1 = 500 MHz
- f2 = 502 MHz
- Produits : 2×500 − 502 = **498 MHz**, et 2×502 − 500 = **504 MHz**

Un troisième micro prévu à **498 MHz** ou **504 MHz** va souffrir, alors que « sur le
papier », cette fréquence était libre.

Ce « 2 » et ce « −1 » ne sortent pas de nulle part : ce sont les **coefficients** de la
combinaison. Leur somme définit l'**ordre** du produit. Ici, 2 + 1 = 3 : on est au
3ᵉ ordre, l'IM3. C'est le plus fort et, de loin, le plus gênant, mais il n'est pas seul
en jeu. Voyons les autres ordres, puis les produits qui mettent **trois émetteurs** en
cause.

<figure class="schema">
  <iframe class="schema-embed" src="/blog/schemas/intermodulation-spectre.html" title="Spectre d'intermodulation, 8 micros" loading="lazy" scrolling="no"></iframe>
  <figcaption>Schéma interactif : Spectre d'intermodulation, 8 micros</figcaption>
</figure>

---

## Les ordres d'intermodulation : IM2, IM3, IM5, IM7

L'ordre d'un produit, c'est la **somme des coefficients** de la combinaison qui le
génère. Deux règles simples, qui expliquent presque tout [1] :

- **Plus l'ordre est élevé, plus le produit est faible.** Un IM3 est bien plus puissant
  qu'un IM5, lui-même plus fort qu'un IM7. C'est pour cette raison qu'on se concentre
  d'abord sur les ordres bas.
- **Les ordres impairs (3, 5, 7) tombent *près* des porteuses ; les ordres pairs
  (2, 4, 6) tombent *loin*.** C'est décisif : un produit qui tombe près de vos micros
  est dans la bande utile, donc dangereux. Un produit qui tombe loin sort généralement
  de la bande.

Reprenons deux émetteurs, **f1 = 500 MHz** et **f2 = 502 MHz** (écart de 2 MHz), pour
voir concrètement où atterrit chaque ordre.

### IM2, le 2ᵉ ordre (pair)

Les produits du 2ᵉ ordre sont la **somme** et la **différence** des deux fréquences,
plus leurs harmoniques :

- f1 + f2 = **1002 MHz**
- f2 − f1 = **2 MHz**
- 2·f1 = **1000 MHz**, 2·f2 = **1004 MHz**

Tous **très loin** de la bande de travail (autour de 500 MHz). En pratique, sur un
groupe de micros resserré en UHF, l'IM2 ne vient donc **pas** se poser sur un canal
voisin. Faut-il l'ignorer pour autant ? Non, dans deux cas :

1. **Les systèmes large bande** ou multi-octaves, où une différence peut retomber dans
   une bande utilisée.
2. **La saturation d'un étage d'entrée** (récepteur, ampli d'antenne, splitter) : un
   IM2 puissant peut surcharger le front-end, qui se met alors à fabriquer *lui-même*
   des produits d'ordre supérieur. C'est un piège classique des distributions
   d'antennes mal dimensionnées.

À retenir : l'IM2 est rarement une menace directe en bande étroite, mais il compte pour
la **santé des étages d'entrée** et sur les configurations large bande.

### IM3, le 3ᵉ ordre (impair) : l'ennemi n°1

C'est celui de l'exemple plus haut :

- 2·f1 − f2 = **498 MHz**
- 2·f2 − f1 = **504 MHz**

Deux produits qui tombent **juste à côté** des porteuses (498 et 504, pour des micros à
500 et 502). Ils sont à la fois **les plus puissants** et **dans la bande utile** : le
pire des deux mondes. Neuf ennuis d'intermodulation sur dix viennent de là. Un plan de
fréquences digne de ce nom commence toujours par écarter les IM3.

### IM5, le 5ᵉ ordre (impair)

Le cran au-dessus. Les produits à deux émetteurs s'écrivent :

- 3·f1 − 2·f2 = 3×500 − 2×502 = **496 MHz**
- 3·f2 − 2·f1 = 3×502 − 2×500 = **506 MHz**

Encore **dans la bande**, un peu plus écartés des porteuses que les IM3, et surtout
**plus faibles**. Sur un plan léger, ils passent souvent inaperçus. Mais dès que la
densité et la puissance montent (beaucoup d'émetteurs, packs collés), ils redeviennent
audibles, et une coordination sérieuse les prend en compte.

### IM7, le 7ᵉ ordre (impair)

Un cran plus loin encore :

- 4·f1 − 3·f2 = 4×500 − 3×502 = **494 MHz**
- 4·f2 − 3·f1 = 4×502 − 3×500 = **508 MHz**

Toujours dans la bande, encore plus faibles. En temps normal, on peut les négliger.
Ils ne deviennent gênants que sur les **très grosses configurations**, à forte
puissance et à faible espacement, exactement les plateaux où l'on ne peut se permettre
aucune surprise. C'est pourquoi un outil de coordination pousse le calcul jusqu'à
l'ordre 7 : au-delà, l'énergie des produits devient négligeable.

> **En résumé :** on traite d'abord les **impairs** (IM3, puis IM5, puis IM7, par ordre
> d'importance décroissante), parce qu'ils tombent dans la bande. Les **pairs** (IM2…)
> se surveillent surtout pour éviter la saturation des étages d'entrée.

---

## Les produits à trois émetteurs (3TX)

Jusqu'ici, deux émetteurs. Mais dès qu'il y en a **trois**, une nouvelle famille de
produits du 3ᵉ ordre apparaît, les **triple-beats**, souvent aussi forts que les IM3 à
deux émetteurs, et bien plus nombreux :

- f1 + f2 − f3
- f1 − f2 + f3
- −f1 + f2 + f3

**Exemple** avec f1 = 500, f2 = 502, f3 = 506 MHz :

- 500 + 502 − 506 = **496 MHz**
- 500 − 502 + 506 = **504 MHz**
- −500 + 502 + 506 = **508 MHz**

Trois produits qui tombent **en plein milieu du plan**, entre et autour des porteuses.
Voilà pourquoi le nombre de canaux compte autant : à deux émetteurs, on gère quelques
produits ; à trois, les combinaisons se multiplient ; à vingt ou quarante, le nombre de
triple-beats **explose** (il croît grossièrement comme le cube du nombre de porteuses).
C'est la vraie raison pour laquelle un plan qui tient à 8 fréquences peut s'effondrer à
20 ou 30.

Sur le schéma plus haut, la bascule « plan naïf / plan coordonné » montre justement ces
produits à deux et trois émetteurs, et comment un plan coordonné les écarte tous des
canaux utilisés.

---

## Pourquoi ça empire sur les gros plateaux

Deux facteurs aggravants [1][2] :

1. **Le nombre d'émetteurs.** Plus il y a de fréquences en jeu, plus il y a de
   combinaisons possibles, et donc de produits d'intermodulation. Le nombre de
   combinaisons croît très vite : quelques micros, cela passe ; quarante micros et
   ears, c'est une autre affaire.
2. **La proximité des émetteurs.** Plus les émetteurs sont **proches physiquement** les
   uns des autres (des HF empilés dans un même rack, des packs ceinture côte à côte sur
   un plateau), plus les signaux se mélangent fort. L'intensité des produits
   d'intermodulation **augmente quand la distance diminue** [2].

C'est la raison pour laquelle un plan qui fonctionne à 8 fréquences peut s'effondrer à
20.

---

## Les solutions

### 1. Espacer physiquement les émetteurs
Éviter de coller tous les émetteurs HF les uns contre les autres. Un peu de distance
entre les racks d'émission et de réception réduit déjà les produits.

### 2. Choisir un plan de fréquences « compatible »
C'est le cœur du sujet : il faut sélectionner des fréquences telles qu'**aucun produit
d'intermodulation ne tombe sur un canal utilisé**. Les fabricants (Shure,
Sennheiser…) proposent pour cela des **groupes de fréquences pré-calculés** et des
logiciels de coordination [1][3].

### 3. Utiliser un outil de coordination
Dès qu'on dépasse une poignée de canaux, le calcul à la main devient impraticable : les
professionnels recommandent un **logiciel de coordination** qui teste toutes les
intermodulations [3][4]. C'est précisément le rôle de
[RF Shot](https://arnisoundtools.com/rf-shot) : il coordonne 100+ fréquences et calcule
les intermodulations **jusqu'à l'ordre 7**, plus les produits à 3 émetteurs (3TX). Pour
des besoins plus simples, [Speed RF](https://arnisoundtools.com/speed-rf) suffit.

---

## À retenir

- L'intermodulation, ce sont **vos propres émetteurs qui fabriquent des fréquences
  parasites** en se mélangeant.
- Les produits **impairs** (IM3, IM5, IM7) tombent **dans la bande** : ce sont eux qu'on
  traite en priorité. L'**IM3** (2·f1 − f2) est le plus fort ; l'IM5 et l'IM7 comptent
  sur les plans denses. Les produits **pairs** (IM2) tombent loin, mais surveillent la
  **saturation des étages d'entrée**.
- Dès **trois émetteurs**, les produits **3TX** (f1 + f2 − f3) s'ajoutent, nombreux et
  souvent aussi forts que les IM3.
- Le phénomène empire avec le **nombre** et la **proximité** des émetteurs.
- La parade : un **plan de fréquences coordonné**, calculé pour qu'aucun produit ne
  tombe sur un canal utilisé.

Les micros ne sont pas « capricieux » : ils obéissent à la physique. Une fois le plan
bien coordonné, tout rentre dans l'ordre.

---

## Sources

1. Shure, « All About Wireless: Intermodulation Distortion » : https://www.shure.com/en-EU/insights/all-about-wireless-intermodulation-distortion
2. Sennheiser, Frequency Management / coordination des fréquences (documentation constructeur).
3. RF Venue, « Why You Should Use Frequency Coordination Software Every Time » : https://www.rfvenue.com/blog/2017/03/31/why-you-should-use-frequency-coordination-software-every-time
4. Sweetwater, « RF 101: The Basics of Wireless Mics and In-ear Systems » : https://www.sweetwater.com/insync/rf101-basics-wireless-mics-in-ear-systems/

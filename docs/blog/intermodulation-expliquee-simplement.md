---
title: "L'intermodulation expliquée simplement (et pourquoi vos micros se gênent)"
description: "Vos micros HF grésillent quand ils sont tous allumés, alors qu'ils vont bien séparément ? C'est l'intermodulation. Explication simple, exemples et solutions, sources à l'appui."
slug: intermodulation-expliquee-simplement
keywords: [intermodulation, IM3, micro HF, coordination de fréquences, produits d'intermodulation, PMSE, RF]
statut: brouillon
date: 2026-08-20
---

# L'intermodulation expliquée simplement (et pourquoi vos micros se gênent)

Voici une situation que tout sondier a vécue : vous testez vos micros HF un par un,
tout est nickel. Vous les allumez tous ensemble… et là, ça grésille. Pourtant vos
fréquences sont « libres ». Que se passe-t-il ?

Réponse : l'**intermodulation**. C'est le phénomène le plus mal compris de la HF, et
pourtant la cause n°1 des ennuis sur les gros plateaux. Bonne nouvelle : le principe
est simple à comprendre.

---

## Le principe : quand deux fréquences en fabriquent une troisième

Quand plusieurs signaux radio **puissants** se retrouvent dans un circuit
électronique (l'étage d'entrée d'un récepteur, ou l'étage de sortie d'un émetteur),
ce circuit n'est jamais parfaitement « linéaire ». Résultat : il **mélange** les
signaux et en **crée de nouveaux**, à des fréquences qui n'existaient pas au départ.

Ces nouvelles fréquences s'appellent des **produits d'intermodulation** (IM). Ce
sont des « fréquences fantômes » [1][2].

Le problème, c'est quand un de ces produits tombe **pile sur la fréquence d'un de
vos micros**. Votre récepteur ne fait pas la différence : il reçoit un parasite
en plein sur son canal → grésillement, souffle, décrochage.

---

## Un peu de maths (rassurez-vous, c'est simple)

Prenons deux émetteurs, aux fréquences **f1** et **f2**. Les produits
d'intermodulation les plus gênants sont ceux du **3ᵉ ordre**, calculés ainsi :

- **2·f1 − f2**
- **2·f2 − f1**

**Exemple concret :**
- f1 = 500 MHz
- f2 = 502 MHz
- Produit : 2×500 − 502 = **498 MHz**, et 2×502 − 500 = **504 MHz**

Si vous aviez prévu un troisième micro à **498 MHz** ou **504 MHz**… il va souffrir,
alors que « sur le papier » cette fréquence était libre !

On parle d'**ordre** : le 3ᵉ ordre (IM3) est le plus fort et le plus problématique,
mais il existe aussi des produits d'ordre 5, 7… plus faibles mais bien réels, et il
faut en tenir compte dès qu'on empile beaucoup d'émetteurs. Il existe même des
produits impliquant **3 émetteurs** (ex. f1 + f2 − f3).

---

## Pourquoi ça empire sur les gros plateaux

Deux facteurs aggravants [1][2] :

1. **Le nombre d'émetteurs.** Plus il y a de fréquences en jeu, plus il y a de
   combinaisons possibles — et donc de produits d'intermodulation. Le nombre de
   combinaisons explose : quelques micros, ça va ; 40 micros + ears, c'est un champ
   de mines.
2. **La proximité des émetteurs.** Plus les émetteurs sont **proches physiquement**
   les uns des autres (des HF empilés dans un même rack, des packs ceinture côte à
   côte sur un plateau), plus les signaux se mélangent fort. L'intensité des
   produits d'intermodulation **augmente quand la distance diminue** [2].

C'est pour ça qu'un plan qui marche à 8 fréquences peut s'effondrer à 20.

---

## Les solutions

### 1. Espacer physiquement les émetteurs
Ne collez pas tous vos émetteurs HF les uns contre les autres. Un peu de distance
entre les racks d'émission et de réception réduit déjà les produits.

### 2. Choisir un plan de fréquences « compatible »
C'est le cœur du sujet : il faut sélectionner des fréquences telles qu'**aucun
produit d'intermodulation ne tombe sur un canal utilisé**. Les fabricants (Shure,
Sennheiser…) proposent pour ça des **groupes de fréquences pré-calculés** et des
logiciels de coordination [1][3].

### 3. Utiliser un outil de coordination
Dès qu'on dépasse une poignée de canaux, le calcul à la main devient impossible :
les professionnels recommandent un **logiciel de coordination** qui teste toutes les
intermodulations [3][4]. C'est précisément le rôle de
[RF Shot](https://arnisoundtools.com/rf-shot) : il coordonne 100+ fréquences et
calcule les intermodulations **jusqu'à l'ordre 7**, plus les produits à 3
émetteurs (3TX). Pour des besoins plus simples,
[Speed RF](https://arnisoundtools.com/speed-rf) suffit.

---

## À retenir

- L'intermodulation, c'est **vos propres émetteurs qui fabriquent des fréquences
  parasites** en se mélangeant.
- Les produits du **3ᵉ ordre** (2·f1 − f2) sont les plus gênants.
- Ça empire avec le **nombre** et la **proximité** des émetteurs.
- La parade : un **plan de fréquences coordonné**, calculé pour qu'aucun produit ne
  tombe sur un canal utilisé.

Vos micros ne sont pas « capricieux » : ils obéissent à la physique. Une fois le
plan bien coordonné, tout rentre dans l'ordre.

---

## Sources

1. Shure — « All About Wireless: Intermodulation Distortion » : https://www.shure.com/en-EU/insights/all-about-wireless-intermodulation-distortion
2. Sennheiser — Frequency Management / coordination des fréquences (documentation constructeur).
3. RF Venue — « Why You Should Use Frequency Coordination Software Every Time » : https://www.rfvenue.com/blog/2017/03/31/why-you-should-use-frequency-coordination-software-every-time
4. Sweetwater — « RF 101: The Basics of Wireless Mics and In-ear Systems » : https://www.sweetwater.com/insync/rf101-basics-wireless-mics-in-ear-systems/

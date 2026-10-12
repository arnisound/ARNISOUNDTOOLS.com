---
title: "Régler sa sono : les calculs qui comptent vraiment"
seoTitle: "Régler sa sono : les calculs utiles"
description: "Niveau sonore, distance, headroom, delay, puissance : les quelques calculs de sonorisation qui évitent les erreurs sur le terrain, expliqués simplement."
slug: regler-sono-calculs-essentiels
keywords: [calcul sonorisation, SPL, loi inverse carré, headroom, bilan de puissance, delay enceinte]
statut: brouillon
date: 2026-10-06
---
On peut faire de la bonne sono à l'oreille. Mais quelques calculs simples évitent les
erreurs qui coûtent cher : sous-dimensionner la diffusion, cramer un ampli, ou poser des
rappels qui font de l'écho. Voici ceux que j'utilise vraiment, sans sortir un cours de
physique.

## 1. Le niveau baisse avec la distance : −6 dB par doublement

En champ libre, chaque fois que vous **doublez la distance** à l'enceinte, le niveau
perd environ **6 dB** [1]. 100 dB à 1 m, c'est ~94 dB à 2 m, ~88 dB à 4 m. C'est ce qui
décide si une seule diffusion couvre la salle ou s'il faut des rappels.

## 2. Fixez un SPL cible réaliste

Un cocktail, une conférence et un concert n'ont pas la même cible. Partez du **niveau
voulu à la dernière rangée**, ajoutez la perte de distance (point 1), et vous savez le
niveau nécessaire en façade. Inutile de viser 110 dB partout « au cas où ».

## 3. Gardez du headroom

Visez un niveau moyen, pas le maximum de votre système. Une marge de **6 à 10 dB** entre
le niveau moyen et la saturation absorbe les crêtes (une percussion, un larsen évité) sans
distordre ni déclencher les limiteurs en permanence.

## 4. Calez vos rappels avec le delay

Une enceinte de rappel non retardée fait de l'écho. Le son met ~2,9 ms par mètre : une
enceinte à 30 m de la scène demande ~87 ms de delay, plus un petit décalage pour que
l'oreille localise la scène (effet Haas). Le détail est dans notre article dédié :
[calculer le delay d'une enceinte](https://arnisoundtools.com/blog/calculer-delay-enceinte-methode).

## 5. Vérifiez le couple ampli / enceinte

Côté puissance, la règle de base : un ampli qui délivre **1,5 à 2 fois** la puissance
nominale (RMS) de l'enceinte donne du headroom sans la mettre en danger, à condition de
ne pas pousser dans le rouge. Sous-dimensionner et pousser l'ampli en écrêtage abîme plus
les HP qu'un ampli puissant bien géré.

## 6. N'oubliez pas la section de câble HP

Sur de longues liaisons haut-parleur, un câble trop fin fait chuter la puissance utile.
Plus la distance est longue et la puissance élevée, plus il faut une **grosse section**.
Un bilan rapide évite de perdre des watts dans le câble.

## 7. Posez tout ça à plat avant de monter

Distances, niveaux, delays, puissances : cinq minutes de calcul avant le montage vous
évitent de tout refaire sur place. C'est exactement ce que réunit
[AV Calc](https://arnisoundtools.com/av-calc) : plus de 70 calculateurs du métier (SPL,
delay, puissance, câble…) dans une seule appli, gratuite et en français.

## Sources

1. Acoustique, loi de l'inverse du carré de la distance (−6 dB par doublement en champ libre) : https://fr.wikipedia.org/wiki/Loi_en_carr%C3%A9_inverse
2. Vitesse du son et calcul de delay : https://big-rig.co/audio-delay-time-calculator/

---
title: "L'oreille ne dimensionne pas une diffusion"
seoTitle: "Régler sa sono : les calculs utiles"
description: "Niveau sonore, distance, headroom, delay, puissance : les quelques calculs de sonorisation qui évitent les erreurs sur le terrain, expliqués simplement."
slug: regler-sono-calculs-essentiels
keywords: [calcul sonorisation, SPL, loi inverse carré, headroom, bilan de puissance, delay enceinte]
statut: publie
date: 2026-10-28
---

On mixe à l'oreille, et c'est très bien ainsi. Mais sous-dimensionner une
diffusion, cramer un ampli ou poser des rappels qui font de l'écho, ça ne s'entend
qu'une fois qu'il est trop tard.

Il y a une frontière nette entre deux moments du métier. Le mix se fait à l'oreille,
personne ne discute ça : c'est du goût, de l'écoute, de l'expérience. Mais ce qui se
décide avant, la taille de la diffusion, le couple ampli-enceinte, la position des
rappels, ne s'entend pas tant qu'on ne l'a pas monté. Et quand on l'entend, c'est souvent
pour constater une erreur qu'on ne peut plus corriger sur place.

Quelques calculs simples suffisent à l'éviter. Pas un cours de physique, juste les
chiffres qui changent une décision.

## Le son s'épuise avec la distance

En champ libre, chaque fois qu'on double la distance à l'enceinte, le niveau perd environ
6 dB [1]. Cent décibels à un mètre, c'est à peu près 94 à deux mètres, 88 à quatre. C'est
ce simple chiffre qui décide si une seule diffusion couvre la salle ou s'il faut des
rappels, et c'est lui qu'on oublie quand on promet à la dernière rangée le niveau qu'on
entend en régie.

D'où le réflexe utile : partir du niveau voulu à la dernière rangée, y ajouter la perte de
distance, et en déduire ce qu'il faut en façade. Un cocktail, une conférence et un concert
n'ont pas la même cible, et viser 110 dB partout « au cas où » ne fait que fatiguer le
public et le système.

## Garder de la marge, toujours

Un système réglé au maximum de ce qu'il peut sortir n'a plus rien pour encaisser une
crête. On vise donc un niveau moyen, pas le plafond, et on se garde six à dix décibels de
marge entre ce moyen et la saturation. Cette marge absorbe une percussion, un larsen
rattrapé, un éclat de voix, sans distordre ni coller les limiteurs en permanence.

La même prudence vaut pour la puissance. Un ampli qui délivre une fois et demie à deux fois
la puissance nominale de l'enceinte donne du headroom sans la mettre en danger, à condition
de ne pas pousser dans le rouge. C'est contre-intuitif, mais c'est le sous-dimensionnement
qui tue les haut-parleurs : un petit ampli poussé en écrêtage les abîme bien plus qu'un
ampli puissant tenu en main. Et sur une longue liaison, un câble HP trop fin fait chuter la
puissance utile, autant de watts perdus en chaleur dans le câble.

## Les rappels ne se posent pas au hasard

Une enceinte de rappel qu'on allume telle quelle fait de l'écho. Le son se traîne, environ
2,9 millisecondes par mètre, donc une enceinte à trente mètres de la scène demande à peu
près 87 ms de retard, plus un petit décalage pour que l'oreille continue de localiser la
scène et non l'enceinte. C'est l'effet Haas, et il mérite son propre article : j'y reviens
en détail dans [calculer le delay d'une enceinte](https://arnisoundtools.com/blog/calculer-delay-enceinte-methode).

Aucun de ces calculs ne prend plus de quelques minutes, et tous se font mieux à plat, avant
le montage, qu'en catastrophe une fois le matériel accroché. C'est exactement ce que réunit
[AV Calc](https://arnisoundtools.com/av-calc) : plus de soixante-dix calculateurs du métier,
du SPL au delay en passant par la puissance et la section de câble, dans une seule appli
gratuite et en français.

## Sources

1. Acoustique, loi de l'inverse du carré de la distance (−6 dB par doublement en champ
   libre) : https://fr.wikipedia.org/wiki/Loi_en_carr%C3%A9_inverse
2. Vitesse du son et calcul de delay : https://big-rig.co/audio-delay-time-calculator/

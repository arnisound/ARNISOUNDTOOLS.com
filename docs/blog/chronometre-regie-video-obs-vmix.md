---
title: "Un chrono dans OBS ou vMix, sans le fond noir"
seoTitle: "Chronomètre dans OBS ou vMix"
description: "Ajouter un compte à rebours propre dans votre régie vidéo OBS, vMix ou autre : source navigateur, canal alpha, fond d'incrustation. Le tuto pas à pas."
slug: chronometre-regie-video-obs-vmix
keywords: [chronomètre OBS, timer vMix, source navigateur, canal alpha, incrustation, régie vidéo, chronomètre streaming]
statut: brouillon
date: 2026-10-12
---

Afficher un compte à rebours dans un flux vidéo paraît trivial, jusqu'au
moment où on se retrouve avec un fond noir à détourer et un chrono qui saute d'une
seconde sur deux.

La demande arrive toujours au dernier moment : « on peut mettre un chrono sur l'écran ? ».
Et la première idée, celle qui semble la plus simple, est précisément celle qui pose
problème. On attrape une fenêtre de chronomètre quelque part, on la capture dans le
mélangeur, et on hérite d'un fond noir, d'une barre de titre, parfois d'un curseur qui
traverse l'image, et d'un affichage qui saccade.

Le problème n'est pas le chronomètre, c'est la façon de l'amener dans la régie. Voici
comment je l'intègre proprement dans OBS, vMix ou n'importe quel mélangeur qui accepte une
source navigateur.

## Une page, pas une capture

Capturer une fenêtre à l'écran est fragile par nature : ça dépend de la résolution, des
bordures de fenêtre, de ce qui passe au premier plan sur le bureau. La bonne méthode est
tout autre. On part d'une URL d'affichage dédiée, conçue pour être vue, et on l'ajoute
comme source navigateur dans le mélangeur. Dans OBS, c'est « + » puis Navigateur ; dans
vMix, une entrée Web Browser ; les autres mélangeurs ont leur équivalent. On règle la
largeur et la hauteur sur la résolution du projet, 1920 par 1080 le plus souvent, et le
rendu devient net, stable, indépendant du bureau.

## La transparence règle le vrai problème

C'est là que se joue la propreté de l'incrustation. Une bonne page de chrono pour la vidéo
affiche ses chiffres sur fond réellement transparent, en canal alpha, et OBS comme vMix
gèrent nativement cette transparence pour une source navigateur. Résultat : le chrono se
pose directement sur l'image, sans fond à découper, sans bricolage.

Quand le mélangeur ne sait pas gérer l'alpha, on bascule sur l'autre méthode : un fond
d'incrustation uni, vert, magenta ou bleu, sur lequel on applique un chroma key. Le seul
soin à prendre est de choisir une couleur absente du reste de l'image, pour que le
détourage ne vienne pas manger un élément du décor ou un vêtement d'intervenant.

## Lisible, placé, synchronisé

Restent les détails qui font qu'un chrono est utilisable en direct ou pas. On le place là
où il ne gêne pas, souvent dans un coin, à une taille lisible sur l'écran final et pas
seulement sur le moniteur de régie. Sur une image claire, des chiffres blancs disparaissent
: une ombre portée ou un léger contour les sauve. Selon l'effet voulu, le chrono passe au
premier plan ou derrière un autre élément, ce qui n'est qu'une question d'ordre des calques
dans le mélangeur.

Le dernier test est le plus important, et c'est celui qu'on saute par manque de temps :
vérifier la synchro avant le direct. On ouvre la même session sur l'écran de régie et dans
le mélangeur, et on s'assure qu'ils affichent la même valeur. Un bon système dérive le
temps depuis une horloge commune, les deux doivent coïncider à la milliseconde, sans
décalage visible entre ce que voit l'orateur et ce que voit le public.

C'est exactement pour ça que [TimeStage](https://arnisoundtools.com/timestage) propose une
fenêtre vidéo dédiée : le chronomètre seul, sur fond transparent en alpha réel, à ouvrir
comme source navigateur dans le
mélangeur, avec un fond d'incrustation uni disponible pour les régies sans alpha. Vous
décidez de ce qui l'accompagne, titre, barre de progression, message, et de la régie à
l'antenne, c'est le même chrono, à la milliseconde.

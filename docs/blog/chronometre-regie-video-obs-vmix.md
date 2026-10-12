---
title: "Incruster un chronomètre dans OBS ou vMix (source navigateur)"
seoTitle: "Chronomètre dans OBS ou vMix"
description: "Ajouter un compte à rebours propre dans votre régie vidéo OBS, vMix ou autre : source navigateur, canal alpha, fond d'incrustation. Le tuto pas à pas."
slug: chronometre-regie-video-obs-vmix
keywords: [chronomètre OBS, timer vMix, source navigateur, canal alpha, incrustation, régie vidéo, chronomètre streaming]
statut: brouillon
date: 2026-10-12
---
Afficher un compte à rebours propre dans un flux vidéo ou sur un écran de scène piloté
par un mélangeur, ça semble simple… jusqu'au moment où on se retrouve avec un fond noir à
découper et un chrono qui saute. Voici comment je l'intègre proprement dans OBS, vMix ou
n'importe quel mélangeur qui accepte une **source navigateur**.

## 1. Utilisez une page dédiée, pas une capture d'écran

Capturer une fenêtre de chrono à l'écran, c'est fragile (résolution, barres de fenêtre,
curseur). La bonne méthode : une **URL d'affichage dédiée** que vous ajoutez comme
**source navigateur** dans le mélangeur. Le rendu est net et indépendant de votre bureau.

## 2. Ajoutez-la en source navigateur

Dans OBS : « + » → **Navigateur** → collez l'URL, réglez la largeur et la hauteur à la
résolution de votre projet (1920×1080 par exemple). Dans vMix : ajoutez une entrée
**Web Browser** avec la même URL. Les autres mélangeurs ont un équivalent.

## 3. Profitez du canal alpha (fond transparent)

Une bonne page de chrono pour la vidéo affiche les chiffres sur **fond transparent**
(canal alpha réel). Résultat : le chrono s'incruste directement sur votre image, **sans
fond à découper**. OBS et vMix gèrent nativement la transparence d'une source navigateur.

## 4. Pas d'alpha ? Passez par un fond d'incrustation

Si votre mélangeur ne gère pas la transparence, utilisez un **fond d'incrustation uni**
(vert, magenta, bleu…) et appliquez un **chroma key** par-dessus. Choisissez une couleur
absente du reste de votre image pour un détourage propre.

## 5. Réglez taille, position et lisibilité

Mettez le chrono là où il ne gêne pas (souvent un coin), à une taille lisible à l'écran
final. Pensez à une **ombre portée** ou un léger contour si l'image du dessous est claire :
des chiffres blancs sur fond clair disparaissent.

## 6. Avant-plan ou arrière-plan

Selon l'effet voulu, le chrono peut passer **au premier plan** (toujours visible) ou
**derrière** un autre élément. Dans le mélangeur, c'est juste l'ordre des calques ; côté
page, vérifiez que seul le chrono (et ce que vous voulez) est affiché.

## 7. Testez la synchro avant le direct

Ouvrez la même session sur l'écran de régie et dans le mélangeur, et vérifiez qu'ils
affichent **la même valeur**. Un bon système dérive le temps d'une horloge commune : les
deux doivent être synchronisés à la milliseconde, sans décalage visible.

---

C'est exactement pour ça que [TimeStage](https://arnisoundtools.com/timestage) propose
une **fenêtre vidéo dédiée** : le chronomètre seul, sur fond transparent (alpha réel), à
ouvrir comme source navigateur dans votre mélangeur, avec un fond d'incrustation uni
disponible pour les régies sans alpha. Vous décidez aussi de ce qui l'accompagne : titre,
barre de progression, message. De la régie à l'antenne, le même chrono, à la milliseconde.

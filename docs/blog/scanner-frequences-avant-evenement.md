---
title: "Le spectre de ce soir n'est pas celui de cet après-midi"
seoTitle: "Scanner les fréquences avant un événement"
description: "Un scan RF sur place évite la plupart des mauvaises surprises HF. Quand le faire, quoi regarder, quoi éviter : la check-list avant d'arrêter votre plan de fréquences."
slug: scanner-frequences-avant-evenement
keywords: [scan RF, repérage fréquences, plan de fréquences, micro HF, TNT, PMSE]
statut: brouillon
date: 2026-10-02
---

**Chapô :** Le plan de fréquences qui tenait hier dans une autre ville n'a aucune raison
de tenir ici. Dix minutes de scan sur place valent mieux qu'une certitude recopiée.

La tentation est permanente, surtout en fin de tournée quand on est fatigué : rejouer le
plan de la veille. Il a marché hier, les micros étaient propres, pourquoi recommencer ?
Parce que l'environnement radio, lui, n'a pas fait le déplacement avec vous. Il change
d'une ville à l'autre, d'un bâtiment à l'autre, parfois d'une salle à l'autre dans le
même bâtiment.

Un scan, c'est dix minutes pour remplacer une supposition par une mesure. Voici ce que je
regarde, et dans quel ordre.

## Scanner là où ça se passe, quand ça se passe

Deux détails décident de la validité d'un scan, et on les néglige souvent par commodité.

Le premier, c'est l'endroit. Le relevé doit se faire là où les récepteurs seront
installés, pas sur le parking ni depuis le camion. Quelques murs porteurs suffisent à
changer complètement ce que l'antenne voit.

Le second, c'est l'heure. Le spectre d'une salle vide à dix heures du matin n'a rien à
voir avec celui de vingt heures, public présent, murs de LED allumés et prestataires
voisins en service. Quand c'est possible, je refais un scan juste avant l'ouverture : c'est
celui-là qui compte, parce que c'est l'état réel pendant le show.

## Repérer d'abord ce qu'il faut fuir

Avant de chercher la place, on élimine les zones interdites. La TNT d'abord : la bande UHF
est partagée avec la télévision, on repère les canaux occupés par les émetteurs locaux et
on s'en écarte franchement [1]. Face à un émetteur de plusieurs kilowatts, un micro de
quelques milliwatts ne fait pas le poids, et c'est la première source de grésillements
évitables.

La bande 700 ensuite, c'est-à-dire 694 à 790 MHz, réattribuée à la téléphonie mobile et
interdite aux micros [1]. Sur du matériel ancien, ça se vérifie avant même de scanner : si
le rack émet là-dedans, il brouille et se fait brouiller, et son usage est illégal. La
plage de fréquences d'un vieux système se regarde toujours en premier.

## Lire les creux, puis les remplir proprement

Un bon scan ne sert pas qu'à voir les pics, il sert surtout à voir où il n'y a rien. Ces
creux sont vos zones de travail. J'en note plusieurs, répartis dans la bande, pour ne pas
tout entasser au même endroit, parce que des émetteurs trop resserrés se gênent entre eux.

Et c'est là que le scan montre sa limite : trouver des fréquences libres ne suffit pas,
encore faut-il qu'elles ne fabriquent pas d'intermodulation entre elles [2]. Le scan
donne les zones propres, la coordination décide des canaux à poser à l'intérieur. Les deux
ne se remplacent pas.

Dernier réflexe, garder une trace. Je sauvegarde le scan et le plan : si un problème
surgit en cours de soirée, je sais ce qui a changé. Et je garde toujours deux ou trois
fréquences de secours déjà validées, à l'écart du plan principal.

Le scan vous dit où est la place. Encore faut-il bien la remplir, et c'est exactement ce
que fait Speed RF : à partir de votre matériel et de votre ville, il calcule des
fréquences propres, compatibles, qui évitent la TNT française, en quelques secondes.

## Sources

1. ANFR, Tableau national de répartition des bandes de fréquences :
   https://www.anfr.fr/gestion-des-frequences-sites/le-tableau-national-de-repartition-des-bandes-de-frequences
2. Shure, « All About Wireless: Intermodulation Distortion » :
   https://www.shure.com/en-EU/insights/all-about-wireless-intermodulation-distortion

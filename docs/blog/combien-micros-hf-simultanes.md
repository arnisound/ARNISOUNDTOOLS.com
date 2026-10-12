---
title: "Combien de micros HF peut-on utiliser en même temps ?"
seoTitle: "Combien de micros HF en même temps ?"
description: "La vraie limite n'est pas le nombre de canaux annoncé, mais la bande disponible et l'intermodulation. Nos repères pour savoir combien de micros HF faire tourner ensemble."
slug: combien-micros-hf-simultanes
keywords: [micros HF simultanés, nombre de fréquences, intermodulation, coordination, bande UHF, PMSE]
statut: brouillon
date: 2026-09-25
---
« On peut en mettre combien ensemble ? » C'est une des premières questions que
j'entends dès qu'un plateau grossit. La réponse honnête : pas le chiffre inscrit sur la
boîte. La vraie limite, c'est la place réellement disponible dans la bande et
l'intermodulation. Voici comment j'y réfléchis, en pratique.

## 1. Comptez la bande réellement libre, pas la bande totale

La bande principale des micros (UHF 470–694 MHz) est partagée avec la TNT [1]. Dans une
ville donnée, une partie est occupée par les émetteurs de télévision locaux : la place
exploitable est donc plus petite que la bande entière, et elle **change d'une ville à
l'autre**. C'est le premier facteur qui plafonne votre nombre de canaux.

## 2. L'intermodulation mange de la place

Deux émetteurs proches en créent un troisième « fantôme » (intermodulation) qui peut
tomber sur un canal utilisé [2]. Plus vous ajoutez d'émetteurs, plus ces produits se
multiplient : le nombre de canaux réellement compatibles grimpe donc **beaucoup moins
vite** que le nombre de fréquences théoriques. C'est pour ça qu'un plan à 8 peut
s'effondrer à 20.

## 3. Comptez TOUT ce qui émet

Micros main, micros cravate, mais aussi **ears / in-ears**, systèmes de retour,
intercoms HF, régie déportée… Tout ce qui émet occupe une fréquence et participe à
l'intermodulation. L'erreur classique : coordonner les micros, oublier les ears.

## 4. Au-delà d'une poignée, passez au logiciel

À quelques canaux, un plan manuel avec les groupes du fabricant suffit. Dès qu'on
empile, le calcul à la main devient impraticable : les constructeurs eux-mêmes
recommandent un **logiciel de coordination** qui teste toutes les intermodulations [3].

## 5. Espacez physiquement les émetteurs

Deux packs ceinture collés l'un à l'autre, ou des émetteurs empilés dans un rack,
génèrent des produits d'intermodulation plus forts. Un peu de distance entre les racks
d'émission et de réception libère de la marge [2].

## 6. Gardez des fréquences de secours

Un plan « au taquet » n'a aucune réserve le jour où un émetteur TNT change ou qu'un
prestataire voisin arrive. Gardez toujours **deux ou trois fréquences propres** de côté.

## 7. Pensez antennes et distribution

Au-delà de quelques récepteurs, une **distribution d'antennes** (un seul couple
d'antennes réparti vers tous les récepteurs) évite la forêt d'antennes et les
problèmes de saturation. C'est souvent ce qui débloque les grosses configs.

---

En résumé : le nombre de micros HF simultanés dépend de votre **ville**, de votre
**matériel** et de la **coordination**, pas d'un chiffre universel. Pour une petite
config propre en quelques secondes, [Speed RF](https://arnisoundtools.com/speed-rf)
suffit. Dès que ça devient dense, [RF Shot](https://arnisoundtools.com/rf-shot)
coordonne 100+ fréquences et calcule les intermodulations pour vous.

## Sources

1. ANFR, Tableau national de répartition des bandes de fréquences : https://www.anfr.fr/gestion-des-frequences-sites/le-tableau-national-de-repartition-des-bandes-de-frequences
2. Shure, « All About Wireless: Intermodulation Distortion » : https://www.shure.com/en-EU/insights/all-about-wireless-intermodulation-distortion
3. RF Venue, « Why You Should Use Frequency Coordination Software Every Time » : https://www.rfvenue.com/blog/2017/03/31/why-you-should-use-frequency-coordination-software-every-time

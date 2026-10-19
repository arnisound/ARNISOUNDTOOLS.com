---
title: "Combien de micros HF en même temps ? Pas le chiffre sur la boîte"
seoTitle: "Combien de micros HF en même temps ?"
description: "La vraie limite n'est pas le nombre de canaux annoncé, mais la bande disponible et l'intermodulation. Nos repères pour savoir combien de micros HF faire tourner ensemble."
slug: combien-micros-hf-simultanes
keywords: [micros HF simultanés, nombre de fréquences, intermodulation, coordination, bande UHF, PMSE]
statut: brouillon
date: 2026-09-25
---

**Chapô :** La fiche annonce soixante canaux. Sur le terrain, vous en ferez tourner
bien moins, et ça n'a rien à voir avec la qualité du matériel.

« On peut en mettre combien ensemble ? » C'est une des premières questions qui tombe
dès qu'un plateau grossit. Le commercial a répondu avant même qu'on la pose : c'est
écrit sur la boîte, sur la fiche technique, dans le nom de la gamme. Un nombre rond et
rassurant.

Ce nombre est un maximum théorique, mesuré dans des conditions qui ne sont jamais les
vôtres. La vraie limite se trouve ailleurs, et elle se découvre rarement au bon moment.

## La bande n'est pas à vous

La bande principale des micros, l'UHF entre 470 et 694 MHz, est partagée avec la TNT
[1]. Dans chaque ville, une partie est occupée par les émetteurs de télévision locaux.
La place réellement exploitable n'est donc pas la bande entière : c'est ce qu'il en
reste une fois la télévision retirée, et ce reste change d'une ville à l'autre.

C'est le premier plafond, et le plus ignoré. On raisonne sur la largeur de la bande
comme si elle était vide, alors qu'on travaille dans ses trous. À Lyon et à Marseille,
ces trous ne sont ni aux mêmes endroits, ni de la même taille.

## L'intermodulation mange ce qui reste

Même en ne comptant que la place libre, on ne peut pas la remplir à ras bord. Dès que
deux émetteurs puissants cohabitent, ils fabriquent dans l'électronique des fréquences
parasites qui n'existaient pas au départ, et l'une d'elles peut tomber pile sur un canal
qu'on comptait utiliser [2].

Le piège, c'est que ces produits se multiplient bien plus vite que les micros. Le nombre
de canaux réellement compatibles grimpe donc beaucoup moins vite que le nombre de
fréquences qu'on croit avoir. C'est la raison pour laquelle un plan parfaitement propre
à huit micros peut devenir inexploitable à vingt, sans que rien d'autre ait changé.

## Tout ce qui émet occupe une place

L'erreur de comptage la plus fréquente n'est pas dans les micros, elle est dans ce qu'on
oublie de compter. Les mains et les cravates, bien sûr, mais aussi les ears, les
systèmes de retour, les intercoms HF, la régie déportée. Tout ce qui émet occupe une
fréquence et participe à l'intermodulation au même titre qu'un micro.

On coordonne soigneusement les douze micros du plateau, on allume les huit ears des
musiciens à la dernière minute, et le plan propre s'effondre. Les ears étaient dans le
même spectre depuis le début, personne ne les avait mis dans le calcul.

## Le moment où le calcul à la main lâche

Pour une poignée de canaux, les groupes de fréquences pré-calculés du fabricant suffisent
et le calcul manuel reste faisable. Mais le nombre de combinaisons à vérifier croît très
vite, et il dépasse bientôt ce qu'on peut contrôler dans le temps d'un montage. Les
constructeurs eux-mêmes recommandent alors un logiciel de coordination qui teste toutes
les intermodulations [3].

Deux réflexes physiques prolongent ce que le calcul autorise. Espacer les émetteurs, car
des packs collés ou empilés dans un rack génèrent des produits plus intenses [2]. Et
garder deux ou trois fréquences propres en réserve, parce qu'un plan au taquet n'a aucun
filet le jour où un émetteur TNT change ou qu'un prestataire voisin arrive avec son
propre matériel.

## La question d'avant la question

Au-delà de quelques récepteurs, ce n'est plus seulement une affaire de fréquences mais
de distribution d'antennes : un seul couple d'antennes réparti vers tous les récepteurs,
plutôt qu'une forêt d'antennes qui se saturent entre elles. C'est souvent ce qui débloque
vraiment les grosses configurations.

Au fond, le nombre de micros HF que vous pouvez faire tourner ensemble dépend de votre
ville, de votre matériel et de votre coordination, pas d'un chiffre universel. Pour une
petite configuration propre en quelques secondes, Speed RF suffit. Dès que ça devient
dense, [RF Shot](https://arnisoundtools.com/rf-shot) coordonne plus de cent fréquences et
calcule les intermodulations à votre place, produits à trois émetteurs compris.

## Sources

1. ANFR, Tableau national de répartition des bandes de fréquences :
   https://www.anfr.fr/gestion-des-frequences-sites/le-tableau-national-de-repartition-des-bandes-de-frequences
2. Shure, « All About Wireless: Intermodulation Distortion » :
   https://www.shure.com/en-EU/insights/all-about-wireless-intermodulation-distortion
3. RF Venue, « Why You Should Use Frequency Coordination Software Every Time » :
   https://www.rfvenue.com/blog/2017/03/31/why-you-should-use-frequency-coordination-software-every-time

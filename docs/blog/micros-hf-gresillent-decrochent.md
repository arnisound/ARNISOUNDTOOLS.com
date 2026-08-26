---
title: "Micros HF qui grésillent ou décrochent : les vraies causes et comment les régler"
description: "Pourquoi un micro sans fil grésille ou décroche ? Les cinq causes principales, expliquées par un technicien, avec les solutions concrètes et le cadre légal des fréquences en France."
slug: micros-hf-gresillent-decrochent
keywords: [micro HF, micro sans fil, grésillement, décrochage, fréquences, intermodulation, PMSE, ANFR, TNT]
statut: brouillon
date: 2026-08-20
---

# Micros HF qui grésillent ou décrochent : les vraies causes et comment les régler

> ✏️ *Emplacement idéal pour une courte anecdote personnelle en ouverture —
> à ajouter pour ancrer l'article dans le vécu.*

Un micro qui se met à grésiller pendant un discours, un retour in-ear qui décroche en
plein morceau : c'est le genre d'incident qui gâche une prestation autrement réussie.
Après plusieurs années en régie, j'en ai tiré une conviction : quand une liaison HF
défaille, c'est rarement un hasard, et rarement le micro lui-même. Neuf fois sur dix,
c'est une question de fréquences.

Voici les cinq causes que je rencontre le plus souvent, et la façon de les traiter.

## Rappel utile : comment fonctionne une liaison sans fil

Un micro HF est une liaison radio. L'émetteur transmet le son sur une fréquence
précise, en mégahertz ; le récepteur, réglé sur la même fréquence, le récupère.

L'essentiel à retenir : cette fréquence n'est pas exclusive. La télévision (TNT), les
autres prestataires, les téléphones et le Wi-Fi occupent aussi le spectre radio. En
France, c'est l'Agence nationale des fréquences (ANFR) qui organise ce partage [1].
Tout l'enjeu consiste à se placer sur les créneaux réellement disponibles.

## 1. Un conflit avec la télévision (TNT)

C'est la cause la plus fréquente. Les micros travaillent principalement dans la bande
**470–694 MHz**, partagée avec la TNT [2][3]. Il faut donc se placer dans les canaux
télévisés **non utilisés localement** — et ces canaux libres varient d'une ville à
l'autre.

L'erreur classique consiste à rejouer le plan de fréquences de la veille dans une
autre ville, et à tomber sur un émetteur TNT local. Face à un émetteur de télévision
de plusieurs kilowatts, un micro de quelques milliwatts ne fait pas le poids : le
résultat est immédiat.

La bonne pratique est de choisir ses fréquences en fonction du lieu. C'est le rôle de
[Speed RF](https://arnisoundtools.com/speed-rf), mais l'analyse des émetteurs TNT de
la zone peut aussi se faire manuellement, si l'on en a le temps.

Un point de vigilance : la bande **694–790 MHz** (« bande 700 ») a été réattribuée à
la téléphonie mobile (4G/5G). Son usage est désormais interdit pour les micros et
source de brouillage [2]. Sur du matériel ancien, il est indispensable de vérifier la
plage de fréquences avant toute utilisation.

## 2. L'intermodulation : quand vos émetteurs se gênent entre eux

Voici un cas déroutant : testés séparément, tous les micros fonctionnent ; allumés
ensemble, certains grésillent — alors même que leurs fréquences sont « libres ». Le
phénomène en cause est l'**intermodulation**.

Lorsque plusieurs émetteurs puissants et proches fonctionnent simultanément, leurs
signaux se combinent dans l'électronique et génèrent de nouvelles fréquences
parasites, absentes au départ [4]. Si l'une d'elles tombe sur un canal utilisé, elle
le perturbe. Plus les émetteurs sont nombreux et rapprochés, plus le phénomène
s'intensifie [4][5].

C'est pourquoi un plan qui fonctionne à huit fréquences peut se dégrader nettement à
vingt-cinq. Au-delà de quelques canaux, le calcul manuel atteint vite ses limites :
les fabricants eux-mêmes recommandent un logiciel de coordination [5]. Sur les
configurations importantes, c'est précisément la fonction de
[RF Shot](https://arnisoundtools.com/rf-shot).

## 3. Une antenne mal placée

Une liaison radio a besoin d'une ligne de vue dégagée entre l'émetteur et l'antenne
du récepteur. De nombreux décrochages proviennent d'antennes mal positionnées :
dissimulées dans un flight case, repliées contre une surface métallique, ou trop
éloignées de la scène.

La recommandation de Shure est claire : l'antenne doit se trouver dans le même espace
que le micro et « voir » l'artiste [6]. En pratique : antenne en hauteur, dégagée,
éloignée du métal et des structures ; et, si la scène est distante, antennes
déportées vers l'avant, avec un câblage adapté et, au-delà d'une certaine longueur, un
amplificateur d'antenne.

## 4. Une alimentation faible

Le point paraît évident, mais il reste une cause fréquente de décrochages : un
émetteur dont la batterie faiblit émet un signal plus faible, donc plus sensible aux
interférences [6].

La règle que j'applique : remplacer les accus **avant** chaque service plutôt
qu'attendre le témoin de fin de charge, et surveiller les niveaux affichés par les
récepteurs tout au long de la prestation.

## 5. Les interférences extérieures et les obstacles

Les micros partagent l'espace radio avec de nombreux appareils : téléphones, Wi-Fi,
murs de LED, gradateurs, autres prestataires [6]. À cela s'ajoutent les obstacles
physiques — murs porteurs, public dense, grandes distances — qui atténuent le signal
et créent des zones mortes.

Les solutions sont simples : éloigner les antennes des routeurs Wi-Fi et des murs de
LED, conserver une marge de distance, et, en cas de doute sur un lieu, réaliser un
scan RF avant la représentation.

## Méthode de dépannage en direct

Le principe, recommandé par Shure, consiste à isoler les variables une à une [6].
Concrètement :

1. **Observer l'indicateur RF du récepteur.** S'il chute au moment du grésillement,
   le problème est radio (fréquence, antenne, distance) ; s'il reste stable, il se
   situe ailleurs dans la chaîne audio (câble, gain, console).
2. **Éteindre les autres émetteurs un par un.** Si le grésillement disparaît, il
   s'agit d'une intermodulation.
3. **Se rapprocher de l'antenne.** Une amélioration indique un problème de portée ou
   de ligne de vue.
4. **Changer la batterie, puis la fréquence** vers un canal propre.

En quatre étapes, l'origine est généralement identifiée.

## Quelles fréquences a-t-on le droit d'utiliser en France ?

En France, l'usage des micros sans fil (PMSE) relève d'un régime sans licence
individuelle, réservé à un usage professionnel et encadré par l'ARCEP [2] :

- **470–694 MHz** : bande principale, partagée avec la TNT.
- **823–832 MHz** et **1785–1805 MHz** : bandes dédiées, à puissance limitée [3].
- **694–790 MHz** : interdite (réattribuée à la téléphonie mobile).

Le cadre est fixé par la décision ARCEP n° 2015-0830 [3]. Ces bandes et ces
puissances évoluant régulièrement, il est prudent de vérifier leur état à jour auprès
de l'ANFR et de l'ARCEP avant tout événement d'ampleur.

## En résumé

Un micro HF qui grésille ou décroche s'explique presque toujours par l'une de ces cinq
causes : une fréquence en conflit avec la TNT, une intermodulation, une antenne mal
placée, une alimentation faible ou une interférence extérieure. Aucune n'est
insurmontable, à condition de savoir où regarder — et surtout de partir d'un plan de
fréquences propre plutôt que d'un réglage approximatif.

C'est toute la logique de [Speed RF](https://arnisoundtools.com/speed-rf) et de
[RF Shot](https://arnisoundtools.com/rf-shot) : obtenir en quelques secondes un plan
fiable, là où la compréhension du sujet demande des années d'expérience.

---

## Sources

1. ANFR — Agence nationale des fréquences : https://www.anfr.fr
2. ANFR — Tableau national de répartition des bandes de fréquences (TNRBF) : https://www.anfr.fr/gestion-des-frequences-sites/le-tableau-national-de-repartition-des-bandes-de-frequences
3. Légifrance — Décision ARCEP n° 2015-0830 du 2 juillet 2015 : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000030959580
4. Shure — « All About Wireless: Intermodulation Distortion » : https://www.shure.com/en-EU/insights/all-about-wireless-intermodulation-distortion
5. RF Venue — « Why You Should Use Frequency Coordination Software Every Time » : https://www.rfvenue.com/blog/2017/03/31/why-you-should-use-frequency-coordination-software-every-time
6. Shure — « Troubleshooting Wireless Dropouts in 10 Simple Steps » : https://www.shure.com/en-EU/insights/troubleshooting-wireless-dropouts-10-simple-steps

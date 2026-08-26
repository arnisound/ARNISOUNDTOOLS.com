---
title: "Micros HF qui grésillent ou décrochent : ce que j'ai appris à la dure"
description: "Pourquoi un micro sans fil grésille ou décroche, expliqué par un technicien du spectacle. Les vraies causes, mes solutions de terrain, et le cadre légal des fréquences en France."
slug: micros-hf-gresillent-decrochent
keywords: [micro HF, micro sans fil, grésillement, décrochage, fréquences, intermodulation, PMSE, ANFR, TNT]
statut: brouillon
date: 2026-08-20
---

# Micros HF qui grésillent ou décrochent : ce que j'ai appris à la dure

> ✏️ *L'anecdote d'intro ci-dessous est un exemple — remplace-la par une des tiennes,
> c'est ce qui rendra l'article inimitable.*

Je me souviens encore de ce mariage. Discours du témoin, salle des fêtes pleine, et
le micro main qui se met à cracher un grésillement dégueulasse pile au moment de la
blague. Tout le monde me regarde. Moi je suis derrière ma console à transpirer, à me
demander ce qui cloche alors que « tout marchait » à la balance deux heures avant.

Ce jour-là j'ai compris un truc : quand un micro HF déconne, ce n'est presque jamais
un hasard. Et surtout, ce n'est presque jamais le micro. C'est une histoire de
fréquences. Depuis, j'en ai bavé assez souvent pour savoir où regarder. Je te
partage ça.

## D'abord, deux minutes de théorie (pas plus)

Un micro sans fil, c'est une petite radio. L'émetteur envoie le son sur une
fréquence — disons 502 MHz — et le récepteur, calé sur la même fréquence, le récupère.

Le truc à piger, c'est que cette fréquence, tu ne l'as pas pour toi tout seul. La
télé (la TNT), les autres prestataires du coin, ton voisin qui fait la noce dans la
salle d'à côté… tout le monde se partage le même « air ». En France, c'est l'ANFR qui
organise ce partage [1]. Ton boulot à toi, c'est de trouver les créneaux libres. Rate
ça, et c'est le grésillement assuré.

Voilà. Maintenant, les causes concrètes.

## 1. Tu es tombé sur une chaîne de télé

C'est la plus fréquente, et de loin. Les micros travaillent surtout dans la bande
**470–694 MHz**, celle-là même qu'utilise la TNT [2][3]. Tu dois donc te glisser dans
les canaux télé **non utilisés chez toi** — et le piège, c'est que ces canaux libres
**changent d'une ville à l'autre**.

Combien de fois j'ai vu un collègue rejouer bêtement son plan de fréquences de la
veille dans une autre ville, et se manger un émetteur TNT local en pleine face… Un
émetteur télé, c'est des milliers de watts. Ton micro, quelques milliwatts. Le combat
est vite plié.

La parade : choisir tes fréquences en fonction de **ta ville**. C'est exactement ce
que fait [Speed RF](https://arnisoundtools.com/speed-rf), mais tu peux aussi éplucher
les émetteurs TNT de ta zone à la main si tu as le temps (spoiler : tu ne l'as jamais).

Et méfie-toi d'un truc : la bande **694–790 MHz**, la fameuse « bande 700 ». Avant on
y allait tranquille. Aujourd'hui elle est passée à la téléphonie mobile (4G/5G), donc
c'est **interdit** et ça brouille [2]. Si tu tournes avec du vieux matos, vérifie sa
plage de fréquences avant de t'en servir. J'ai un pote qui a jeté deux ceintures
comme ça — plus utilisables.

## 2. Tes micros se bouffent entre eux (l'intermodulation)

Celle-là, elle m'a rendu fou avant que je comprenne. Tu testes tes micros un par un :
nickel. Tu les allumes tous ensemble : ça grésille. Alors que tes fréquences sont
« libres ». Magie noire ? Non. **Intermodulation.**

En gros : quand plusieurs émetteurs balancent fort et sont proches, leurs signaux se
mélangent dans l'électronique et **fabriquent de nouvelles fréquences parasites** qui
n'existaient pas [4]. Et si une de ces fréquences fantômes tombe pile sur un de tes
micros… tu as ton grésillement.

Plus tu as d'émetteurs, plus tu en empiles côte à côte, pire c'est [4][5]. C'est pour
ça qu'un plan qui passe crème à 8 micros peut s'écrouler à 25. À la main, tu ne t'en
sors pas — même les fabricants recommandent un logiciel de coordination dès que ça
monte [5]. Sur les gros plateaux, c'est là que
[RF Shot](https://arnisoundtools.com/rf-shot) bosse pour toi.

## 3. Ton antenne est mal placée

Une liaison radio, ça a besoin de « se voir ». L'antenne du récepteur doit avoir une
vue dégagée sur la scène. Or je ne compte plus les récepteurs planqués au fond d'un
flight, antenne repliée contre une plaque de métal… et le mec qui s'étonne que ça
décroche au fond de la salle.

Shure le dit sans détour : l'antenne doit être dans la même pièce que le micro et
« voir » celui qui parle [6]. Donc : antenne en hauteur, dégagée, à l'écart du métal
et des structures. Et si ta scène est loin, déporte tes antennes vers l'avant (avec le
bon câble, et un ampli au-delà d'une certaine longueur).

## 4. La batterie (oui, encore)

Ça a l'air con dit comme ça, mais un émetteur qui faiblit, c'est un signal qui faiblit,
donc plus sensible aux parasites [6]. J'ai passé un temps fou à chercher des « bugs »
qui n'étaient que des piles fatiguées.

Ma règle depuis : je change les accus **avant** chaque service, pas quand le voyant
rouge s'allume en plein show. Ça coûte trois fois rien et ça évite bien des sueurs.

## 5. Tout le reste qui traîne dans l'air

Téléphones, Wi-Fi, murs de LED, gradateurs, l'autre presta à 30 mètres… tout ça pollue
la bande [6]. Ajoute à ça les murs porteurs, une foule dense, une grande distance, et
tu crées des zones mortes.

Rien de magique : éloigne tes antennes des routeurs et des murs de LED, garde de la
marge, et si tu as le moindre doute sur un lieu, un scan RF avant le show reste la
référence.

## Quand ça grésille en plein direct : ma checklist

Le réflexe, c'est d'isoler les variables une par une [6]. Concrètement, dans l'ordre :

- **Je regarde l'indicateur RF du récepteur.** Il plonge au moment du grésil ? C'est
  radio (fréquence, antenne, distance). Il ne bouge pas ? Le problème est ailleurs
  (câble, gain, console), pas dans la HF.
- **J'éteins les autres émetteurs un par un.** Si le grésil disparaît quand j'en coupe
  un, j'ai mon intermodulation.
- **Je me rapproche de l'antenne.** Ça s'arrange ? Portée / ligne de vue.
- **Je change la batterie, puis la fréquence** vers un canal propre.

Neuf fois sur dix, en quatre étapes, c'est réglé.

## Au fait, on a le droit d'utiliser quelles fréquences ?

Vite fait, parce que ça compte. En France, les micros (PMSE) tournent sans licence
individuelle, en usage pro, encadrés par l'ARCEP [2]. En pratique :

- **470–694 MHz** : la bande principale, partagée avec la TNT.
- **823–832 MHz** et **1785–1805 MHz** : deux bandes dédiées, puissances limitées [3].
- **694–790 MHz** : interdite (passée au mobile).

Le cadre vient de la décision ARCEP n° 2015-0830 [3]. Un conseil : ces bandes et ces
puissances **bougent** avec le temps — vérifie toujours l'état à jour sur l'ANFR et
l'ARCEP avant un gros événement.

## Ce que je retiens

Un micro qui grésille, c'est presque toujours l'un de ces cinq trucs : une fréquence
qui tape dans la TNT, une intermodulation, une antenne mal foutue, une batterie
fatiguée, ou un parasite extérieur. Rien d'insurmontable quand tu sais où regarder —
et surtout quand tu pars avec un plan de fréquences propre plutôt que réglé au pif.

C'est toute la logique derrière [Speed RF](https://arnisoundtools.com/speed-rf) et
[RF Shot](https://arnisoundtools.com/rf-shot) : faire en trente secondes ce qui m'a
coûté des années de galères à comprendre.

---

## Sources

1. ANFR — Agence nationale des fréquences : https://www.anfr.fr
2. ANFR — Tableau national de répartition des bandes de fréquences (TNRBF) : https://www.anfr.fr/gestion-des-frequences-sites/le-tableau-national-de-repartition-des-bandes-de-frequences
3. Légifrance — Décision ARCEP n° 2015-0830 du 2 juillet 2015 : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000030959580
4. Shure — « All About Wireless: Intermodulation Distortion » : https://www.shure.com/en-EU/insights/all-about-wireless-intermodulation-distortion
5. RF Venue — « Why You Should Use Frequency Coordination Software Every Time » : https://www.rfvenue.com/blog/2017/03/31/why-you-should-use-frequency-coordination-software-every-time
6. Shure — « Troubleshooting Wireless Dropouts in 10 Simple Steps » : https://www.shure.com/en-EU/insights/troubleshooting-wireless-dropouts-10-simple-steps

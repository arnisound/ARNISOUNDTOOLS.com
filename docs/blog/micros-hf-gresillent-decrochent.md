---
title: "Pourquoi vos micros HF grésillent ou décrochent — et comment l'éviter"
description: "Les 5 vraies causes des grésillements et décrochages de micros sans fil, expliquées simplement, avec les solutions et le cadre réglementaire français (ANFR/ARCEP)."
slug: micros-hf-gresillent-decrochent
keywords: [micro HF, micro sans fil, grésillement, décrochage, fréquences, intermodulation, PMSE, ANFR, TNT]
statut: brouillon
date: 2026-08-20
---

# Pourquoi vos micros HF grésillent ou décrochent — et comment l'éviter

Un micro qui grésille pendant un discours, un retour in-ear qui décroche en plein
refrain : sur le terrain, c'est le genre de galère qui transforme une belle presta
en sueurs froides. La bonne nouvelle, c'est que **9 fois sur 10, ce n'est ni la
faute du micro, ni de la malchance** : c'est une histoire de fréquences.

Dans cet article, on explique **simplement comment fonctionne une liaison sans
fil**, puis on passe en revue les **5 causes** les plus fréquentes de grésillements
et de décrochages — avec, à chaque fois, la solution concrète.

---

## Petit rappel : comment marche un micro sans fil ?

Un micro HF (ou un ear-monitor) est une **liaison radio**. L'émetteur (le micro
main, l'émetteur de poche) envoie le son sur une **fréquence** précise, exprimée en
mégahertz (MHz) ; le récepteur, réglé sur la même fréquence, la capte et la
retransmet à la console.

Deux idées à retenir :

1. **Une fréquence, c'est une « voie » de circulation.** Si deux appareils roulent
   sur la même voie — ou sur des voies trop proches — ils se gênent. C'est la
   base des interférences.
2. **L'air est un espace partagé.** Vos micros ne sont pas seuls : la télévision
   (TNT), d'autres prestataires, les téléphones et le Wi-Fi occupent aussi le
   spectre radio. Un plan de fréquences, c'est l'art de se garer sur les voies
   libres.

C'est l'**Agence nationale des fréquences (ANFR)** qui planifie et gère ce spectre
en France [1].

---

## Les 5 causes d'un micro HF qui grésille ou décroche

### 1. Une fréquence mal choisie (conflit avec la TNT)

En France, les micros sans fil utilisent principalement la bande **UHF 470–694
MHz**, qui est **partagée avec la télévision numérique terrestre (TNT)** [2][3].
Concrètement : vos micros doivent se glisser dans les **canaux TV non utilisés**
dans votre région — et ces canaux **changent d'une ville à l'autre**.

Si vous réglez un micro « au pif » ou que vous rejouez le plan de fréquences d'une
autre ville, vous risquez de tomber pile sur un émetteur TNT local, très puissant :
résultat, grésillements et coupures assurés.

> **La solution :** choisir des fréquences dans les trous TNT **de votre lieu**.
> Un outil comme [Speed RF](https://arnisoundtools.com/speed-rf) fait ce calcul
> automatiquement selon votre ville.

⚠️ **Piège à connaître :** la bande **694–790 MHz (dite « bande 700 »)** a été
réattribuée à la téléphonie mobile (4G/5G) : elle **n'est plus utilisable** pour
les micros. Du matériel ancien réglé dans cette bande brouillera… et sera hors la
loi [2].

### 2. L'intermodulation (quand vos propres micros se gênent)

C'est la cause n°1 sur les **gros plateaux**, et la plus contre-intuitive : même
avec des fréquences toutes « libres », **vos émetteurs peuvent créer eux-mêmes de
nouvelles fréquences parasites**.

Le phénomène s'appelle l'**intermodulation** (IMD). Quand plusieurs signaux radio
puissants se mélangent dans les circuits des émetteurs/récepteurs, ils génèrent des
**produits d'intermodulation** — des fréquences « fantômes » qui peuvent tomber pile
sur un de vos canaux [4]. Plus les émetteurs sont **nombreux et proches** les uns
des autres, plus ces parasites sont forts [5].

C'est pour ça que deux micros parfaitement réglés séparément peuvent grésiller une
fois allumés ensemble : ce ne sont pas eux, c'est leur **produit d'intermodulation**.

> **La solution :** utiliser un plan **coordonné**, qui calcule les
> intermodulations et écarte les fréquences à risque. Les fabricants recommandent
> un logiciel de coordination dès qu'on gère beaucoup de canaux [4][5]. C'est
> exactement le rôle de [RF Shot](https://arnisoundtools.com/rf-shot) (jusqu'à
> l'ordre 7).

### 3. Un problème d'antenne (placement, ligne de vue, câblage)

Une liaison radio a besoin d'une **ligne de vue** dégagée entre l'émetteur et
l'antenne du récepteur. Beaucoup de décrochages viennent d'erreurs d'antenne :
antenne cachée derrière un mur, dans un flight case, trop loin, ou reliée par un
câble trop long et non compensé [6].

Shure le formule simplement : les antennes doivent être **dans la même pièce** que
les micros et « voir » l'artiste ; dès qu'elles sont dans une autre pièce, le signal
est compromis [6].

> **La solution :** antennes en **vue directe** de la scène, en hauteur, écartées
> du métal et des structures ; déportez-les vers la scène si besoin (avec le bon
> câble et, au-delà d'une certaine longueur, un ampli d'antenne).

### 4. Des piles / batteries faibles

Ça paraît bête, mais c'est une cause **très fréquente** de décrochages : un
émetteur qui faiblit émet un signal plus faible, plus sensible aux interférences [6].

> **La solution :** batteries chargées, piles fraîches, et **surveiller les niveaux**
> (la plupart des récepteurs affichent l'autonomie). En tournée, on change les
> accus avant chaque service plutôt que d'attendre le voyant rouge.

### 5. Les interférences externes (et les obstacles)

Vos micros partagent l'air avec un tas d'autres appareils : **téléphones, Wi-Fi,
LED, gradateurs, écrans, autres prestataires** [6]. Un mur porteur, une foule dense
ou une grande distance atténuent aussi le signal et créent des **zones mortes**.

> **La solution :** repérer les sources d'interférence, éloigner les antennes des
> routeurs Wi-Fi et des murs de LED, et garder une marge de distance. En cas de
> doute, un scan RF du lieu avant le show reste la référence.

---

## La méthode de dépannage (quand ça grésille en live)

Le réflexe pro, d'après Shure : **isoler et éliminer les variables une par une**
[6].

1. **Regardez l'indicateur RF du récepteur.** Il chute au moment du grésillement ?
   → problème radio (fréquence, antenne, distance). Il reste stable ? → le souci est
   ailleurs dans la chaîne audio (câble, gain, console).
2. **Coupez les autres émetteurs** un par un : si le grésillement disparaît quand
   vous éteignez un autre micro, vous tenez une **intermodulation**.
3. **Rapprochez-vous de l'antenne** : si ça s'arrange, c'est une question de
   **portée / ligne de vue**.
4. **Changez la batterie**, puis **changez de fréquence** vers un canal propre.

---

## Encadré : quelles fréquences a-t-on le droit d'utiliser en France ?

En France, l'usage des micros sans fil (PMSE) relève d'un **régime sans licence
individuelle** encadré par l'**ARCEP**, réservé à un usage professionnel [2]. Les
principales ressources :

- **470–694 MHz** : bande UHF principale, **partagée avec la TNT** (à utiliser dans
  les canaux libres localement) [2][3].
- **823–832 MHz** : bande dédiée PMSE (puissances limitées) [3].
- **1785–1805 MHz** : bande PMSE (puissances plus faibles) [3].

Le cadre est fixé par la **décision ARCEP n° 2015-0830** [3] et la décision
européenne 2014/641/UE. ⚠️ Ces bandes et puissances **évoluent** (réattribution de
la bande 700, JO, etc.) : **vérifiez toujours l'état à jour auprès de l'ANFR et de
l'ARCEP** avant un événement.

---

## En résumé

Un micro HF qui grésille ou décroche, c'est presque toujours **une fréquence mal
choisie, une intermodulation, une antenne mal placée, une batterie faible ou une
interférence externe**. Les cinq se règlent avec un peu de méthode — et surtout un
**bon plan de fréquences dès le départ**.

C'est précisément ce que font nos outils : [Speed RF](https://arnisoundtools.com/speed-rf)
pour un plan propre en quelques secondes, et [RF Shot](https://arnisoundtools.com/rf-shot)
pour coordonner les gros plateaux sans intermodulation.

---

## Sources

1. ANFR — Agence nationale des fréquences (gestion du spectre) : https://www.anfr.fr
2. ANFR — Tableau national de répartition des bandes de fréquences (TNRBF) : https://www.anfr.fr/gestion-des-frequences-sites/le-tableau-national-de-repartition-des-bandes-de-frequences
3. Légifrance — Décision ARCEP n° 2015-0830 du 2 juillet 2015 (bandes 470-789, 823-832 et 1785-1805 MHz) : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000030959580
4. Shure — « All About Wireless: Intermodulation Distortion » : https://www.shure.com/en-EU/insights/all-about-wireless-intermodulation-distortion
5. Sennheiser — Frequency Management / coordination des fréquences (documentation constructeur).
6. Shure — « Troubleshooting Wireless Dropouts in 10 Simple Steps » : https://www.shure.com/en-EU/insights/troubleshooting-wireless-dropouts-10-simple-steps
7. SoundLightUp — « HF et WMAS, l'enjeu des fréquences pour les PMSE » : https://www.soundlightup.com/archives/comprendre/shure-hf-et-wmas-lenjeu-des-frequences-pour-les-pmse.html

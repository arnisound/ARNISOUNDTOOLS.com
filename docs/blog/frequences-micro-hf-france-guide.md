---
title: "Fréquences micro HF autorisées en France : le guide clair (2026)"
description: "Quelles bandes de fréquences a-t-on le droit d'utiliser pour ses micros sans fil en France ? UHF/TNT, 823-832 MHz, 1785-1805 MHz : le point complet et sourcé (ANFR/ARCEP)."
slug: frequences-micro-hf-france-guide
keywords: [fréquences micro HF, PMSE, France, ANFR, ARCEP, TNT, UHF, bande 700, micro sans fil légal]
statut: brouillon
date: 2026-08-20
---

# Fréquences micro HF autorisées en France : le guide clair (2026)

« J'ai le droit d'utiliser quelle fréquence pour mes micros ? » C'est LA question
que tout technicien se pose un jour — souvent au mauvais moment, la veille d'un
événement. Entre la TNT, la « bande 700 » disparue et les histoires de licence, le
sujet a de quoi perdre. Voici le point **clair, à jour et sourcé**.

> ⚠️ **Avertissement :** la réglementation évolue. Cet article donne les repères
> essentiels, mais **vérifiez toujours l'état à jour auprès de l'ANFR et de
> l'ARCEP** avant un événement (voir sources en bas).

---

## D'abord, comprendre le système

Le spectre radio est une ressource **publique et limitée**. En France, c'est
l'**Agence nationale des fréquences (ANFR)** qui le planifie et le répartit entre
tous les usages (télévision, mobile, aéronautique… et micros sans fil) [1].

Les micros HF, ears-monitors et autres liaisons audio de spectacle entrent dans une
catégorie appelée **PMSE** (*Programme Making and Special Events*). En France, leur
usage relève d'un **régime sans licence individuelle**, encadré par l'**ARCEP**, et
réservé à un **usage professionnel** [2][3].

Autrement dit : **pas de démarche administrative** pour un usage classique, **à
condition** de rester dans les bonnes bandes et les bonnes puissances.

---

## Les bandes utilisables (l'essentiel)

### 1. La bande reine : UHF 470–694 MHz (partagée avec la TNT)

C'est la bande principale des micros HF. **Mais elle est partagée avec la
télévision numérique terrestre (TNT)** [2][4]. Vos micros doivent donc se placer
dans les **canaux TV libres** — ceux qui ne sont **pas** utilisés par un émetteur
de télévision **dans votre zone**.

Point crucial : **ces canaux libres changent d'une région à l'autre**. Un plan qui
marche à Lyon peut tomber en plein sur un émetteur TNT à Marseille. C'est la source
n°1 de grésillements évitables.

### 2. Le piège : la « bande 700 » (694–790 MHz) — INTERDITE aux micros

Historiquement, les micros montaient jusqu'à ~790 MHz. Mais la bande **694–790 MHz
a été réattribuée à la téléphonie mobile (4G/5G)** [2]. Conséquence :

- Du matériel HF **ancien** réglé dans cette bande va **brouiller et être brouillé**.
- Son usage y est désormais **illégal**.

Si vous avez un vieux système, **vérifiez sa plage de fréquences** avant de
l'utiliser.

### 3. Les bandes « refuge » sans licence

Deux bandes dédiées PMSE complètent l'UHF, utiles quand l'UHF est saturée [3] :

- **823–832 MHz** — puissances limitées (de l'ordre de 20 à 100 mW selon le type de
  matériel).
- **1785–1805 MHz** — puissances plus faibles (de l'ordre de 20 à 50 mW), donc
  portée plus courte.

Le cadre technique est fixé par la **décision ARCEP n° 2015-0830 du 2 juillet
2015** [3] et la décision européenne 2014/641/UE.

---

## Cas particuliers : les grands événements

Pour les très gros événements (festivals, JO…), l'ANFR peut délivrer des
**autorisations temporaires** ouvrant des bandes supplémentaires. Par exemple, pour
les **Jeux de Paris 2024**, des bandes comme 1240–1260 MHz et 1350–1400 MHz ont été
temporairement ouvertes pour la PMSE [4]. Ce sont des cas encadrés, hors usage
courant.

---

## En pratique : comment choisir ses fréquences

1. **Restez dans les bandes autorisées** (UHF 470–694, 823–832, 1785–1805).
2. **Évitez la TNT locale** : repérez les canaux TV occupés dans votre ville.
3. **Coordonnez** vos fréquences entre elles pour éviter l'intermodulation (voir
   notre article dédié).
4. **Vérifiez la plage de votre matériel** — surtout l'ancien (bande 700 !).

C'est exactement ce que fait [Speed RF](https://arnisoundtools.com/speed-rf) :
vous indiquez votre matériel et votre ville, il calcule des fréquences propres,
compatibles et qui évitent la TNT française. Pour les grosses configs,
[RF Shot](https://arnisoundtools.com/rf-shot) ajoute la coordination des
intermodulations.

---

## Récapitulatif express

| Bande | Statut | Remarque |
|---|---|---|
| **470–694 MHz** | ✅ Autorisée (sans licence, pro) | Partagée avec la TNT — éviter les canaux occupés localement |
| **694–790 MHz** | ❌ Interdite | Réaffectée au mobile (4G/5G) |
| **823–832 MHz** | ✅ Autorisée | Puissance limitée |
| **1785–1805 MHz** | ✅ Autorisée | Puissance plus faible, portée courte |

---

## Sources

1. ANFR — Agence nationale des fréquences : https://www.anfr.fr
2. ANFR — Tableau national de répartition des bandes de fréquences (TNRBF) : https://www.anfr.fr/gestion-des-frequences-sites/le-tableau-national-de-repartition-des-bandes-de-frequences
3. Légifrance — Décision ARCEP n° 2015-0830 du 2 juillet 2015 (bandes 470-789, 823-832 et 1785-1805 MHz) : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000030959580
4. SoundLightUp — « HF et WMAS, l'enjeu des fréquences pour les PMSE » : https://www.soundlightup.com/archives/comprendre/shure-hf-et-wmas-lenjeu-des-frequences-pour-les-pmse.html
5. APWPT — Association of Professional Wireless Production Technologies (documentation PMSE) : https://apwpt.org

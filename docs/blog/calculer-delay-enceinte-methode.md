---
title: "Calculer le delay d'une enceinte : la méthode simple (et pourquoi ça marche)"
description: "Comment régler le delay de vos enceintes de rappel pour un son net et localisé ? La formule, la vitesse du son, l'effet Haas, expliqués simplement, avec les sources."
slug: calculer-delay-enceinte-methode
keywords: [calcul delay enceinte, delay speaker, vitesse du son, effet Haas, effet de précédence, sonorisation, time alignment]
statut: brouillon
date: 2026-08-20
---

# Calculer le delay d'une enceinte : la méthode simple (et pourquoi ça marche)

Dès qu'une salle ou un plein air dépasse quelques dizaines de mètres, il faut des
**enceintes de rappel** (delays) pour que le fond de public entende correctement. Le
piège, que j'ai vu se refermer plus d'une fois : on les allume telles quelles, et le
résultat est brouillon. On entend un **écho**, et le son semble venir des enceintes de
rappel, plus de la scène.

La solution tient en un mot : le **delay**. Voici comment je le calcule, et surtout
**pourquoi** cela fonctionne.

---

## Le principe : le son met du temps à voyager

La lumière est quasi instantanée, mais **le son est lent** : il se déplace dans l'air à
environ **343 mètres par seconde** (à 20 °C) [1].

Quand le son de la scène arrive au fond de la salle, il a donc déjà mis un certain
temps. L'enceinte de rappel, elle, est juste à côté du public du fond : son son arrive
**beaucoup plus tôt** que celui de la scène. D'où l'effet d'écho et la mauvaise
localisation.

**L'idée du delay :** retarder électroniquement l'enceinte de rappel pour que son son
arrive **en même temps** (ou juste après) celui de la scène.

---

## La formule (toute simple)

Le temps que met le son pour parcourir une distance :

> **temps (en secondes) = distance (en mètres) ÷ vitesse du son**

En millisecondes (l'unité des consoles) :

> **delay (ms) = distance (m) ÷ 343 × 1000**

Le raccourci que je garde en tête : à 20 °C, le son parcourt environ **0,343 m par
milliseconde**. Autrement dit, **≈ 1 ms tous les 34 cm**, soit **≈ 2,9 ms par
mètre** [1].

**Exemple :** l'enceinte de rappel est à **30 mètres** de la scène.
→ 30 ÷ 343 × 1000 ≈ **87 ms** de delay.

---

## Le détail qui change tout : l'effet Haas

En alignant au millimètre, le son de la scène et celui du rappel arrivent
**exactement en même temps**. C'est déjà satisfaisant. Mais on ajoute généralement
**quelques millisecondes de plus** (typiquement **10 à 15 ms**). Pourquoi ?

À cause de l'**effet Haas** (ou **effet de précédence**) : quand deux sons identiques
arrivent à très peu d'intervalle, le cerveau **localise la source sur le premier son
entendu**, et fusionne le second avec [2][3].

Concrètement : en faisant arriver le rappel **juste après** la scène (quelques
millisecondes de retard en plus), le spectateur **entend** l'enceinte de rappel, mais
**perçoit** que le son vient de la **scène**. C'est exactement l'effet recherché,
l'image sonore reste sur les artistes.

Un point remarquable : cet effet fonctionne même si le son retardé est **jusqu'à ~10 dB
plus fort** que le premier ; la localisation reste sur le son arrivé en premier [2].

**En pratique :** je calcule le delay de la distance, puis j'ajoute **~10–15 ms**. Dans
l'exemple : 87 ms + 12 ms ≈ **99 ms**.

<!-- SCHÉMA INTERACTIF : docs/blog/schemas/delay-haas.html
     Réglage du delay d'une enceinte de rappel : distance, température, offset Haas,
     avec la vitesse du son, le delay de base et la perception au fond de la salle.
     → à intégrer ici (iframe ou inline) lors de la mise en ligne du blog. -->
> 📊 **[Schéma interactif à insérer ici : « Delay d'une enceinte de rappel & effet Haas »]**

---

## Le piège de la température

La vitesse du son **dépend de la température de l'air** : elle augmente avec la chaleur,
selon la formule **c ≈ 331,3 + 0,606 × T** (T en °C) [1].

- À 0 °C : ≈ 331 m/s
- À 20 °C : ≈ 343 m/s
- À 30 °C : ≈ 349 m/s

En clair : sur un plein air en pleine chaleur, le son va **un peu plus vite**, et la
même distance demande **un peu moins de delay**. Sur de grandes distances, cela se
remarque, d'où l'intérêt de recaler ses delays quand la température varie fortement
entre les balances (après-midi) et le show (nuit). C'est une correction que je fais
systématiquement en extérieur.

---

## La méthode, étape par étape

1. **Mesurer la distance** entre la source principale (scène / cluster principal) et
   l'enceinte de rappel.
2. **Calculer le delay de base** : distance ÷ 343 × 1000 (en ms).
3. **Ajouter ~10–15 ms** (effet Haas) pour ancrer l'image sur la scène.
4. **Ajuster selon la température** en extérieur.
5. **Vérifier à l'oreille** en marchant dans la zone de rappel.

Tous ces calculs (delay, vitesse du son selon la température, et bien d'autres) sont
intégrés dans [AV Calc](https://arnisoundtools.com/av-calc), gratuit, pour ne plus
sortir la calculette du téléphone sur le terrain.

---

## À retenir

- Le son voyage à **~343 m/s** → **≈ 2,9 ms par mètre**.
- **delay = distance ÷ 343 × 1000** (ms).
- Ajouter **10–15 ms** (effet Haas) pour que le public localise la **scène**.
- Recaler si la **température** varie beaucoup (extérieur).

---

## Sources

1. Vitesse du son dans l'air (acoustique), formule c = 331,3 + 0,606·T ; calculateur de delay live : https://big-rig.co/audio-delay-time-calculator/
2. Effet de précédence (Haas), J. Blauert, *The Precedence Effect* (Springer) : https://link.springer.com/chapter/10.1007/978-1-4615-2027-6_151
3. ProSoundTraining, « It's About Time… The Effective Haas Effect » : https://www.prosoundtraining.com/2010/03/15/its-about-time-the-effective-haas-effect/
4. Tecnare Sound Systems, « The Haas Effect and its application in sound localization » : https://www.tecnare.com/article/the-haas-effect/

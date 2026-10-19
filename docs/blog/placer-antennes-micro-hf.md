---
title: "L'antenne, ce détail qu'on installe en dernier"
seoTitle: "Bien placer ses antennes micro HF"
description: "La moitié des décrochages HF viennent d'une antenne mal placée. Ligne de vue, hauteur, antennes déportées, câblage : nos tips pour une liaison stable."
slug: placer-antennes-micro-hf
keywords: [antenne micro HF, portée micro sans fil, décrochage, ligne de vue, antenne déportée, diversité]
statut: brouillon
date: 2026-09-29
---

**Chapô :** On change la fréquence, on change l'émetteur, on accuse le matériel. On
regarde l'antenne en dernier, alors que c'est souvent là que tout se joue.

Il y a un ordre naturel dans lequel on cherche la panne quand une liaison décroche, et
cet ordre est presque toujours le mauvais. On commence par ce qu'on tient dans la main,
le micro, puis par ce qui se règle d'un bouton, la fréquence. L'antenne vient en dernier,
parce qu'elle est à l'autre bout, en hauteur, câblée, bref pénible à atteindre.

C'est pourtant par là que je commence, parce qu'une bonne partie des décrochages vient
d'elle : une antenne cachée, collée au métal, ou restée trop loin de la scène.

## Une liaison radio a besoin de voir

Le principe est bête, et c'est pour ça qu'on l'oublie : une antenne doit voir l'émetteur.
Les constructeurs le disent sans détour, elle doit se trouver dans le même espace que le
micro et avoir vue sur l'artiste [1]. Une antenne dissimulée au fond d'un flight case,
repliée contre un pied de structure ou laissée en régie pendant que la scène est à
quarante mètres perd énormément, et aucun réglage ne rattrapera ça.

La hauteur relève de la même logique. Au sol, derrière le public, une antenne est masquée
par les corps, et l'eau du corps humain absorbe la HF. Au-dessus des têtes, dégagée, elle
change souvent tout. Il faut aussi la tenir à distance du métal et des écrans :
structures, racks, grilles, murs de LED perturbent dès qu'ils sont trop proches, quelques
dizaines de centimètres font déjà la différence.

## Rapprocher l'antenne, pas le récepteur

C'est l'erreur de distance la plus courante. La régie est au fond de la salle, et on
compte sur les petites antennes vissées au dos du récepteur pour couvrir toute la
profondeur. Ça ne marche pas. Ce qu'il faut rapprocher de la scène, ce n'est pas le
récepteur, ce sont les antennes : des antennes déportées vers l'avant, reliées par du
câble, raccourcissent la distance radio là où elle compte vraiment.

Encore faut-il que le câble ne ruine pas ce qu'on vient de gagner. Un câble d'antenne
atténue le signal, d'autant plus qu'il est long. Au-delà de quelques mètres, il faut du
câble faible perte, et au-delà d'une certaine longueur un amplificateur d'antenne pour
compenser. Un long câble sans ampli, c'est une portée qui s'effondre en silence : rien ne
prévient, la liaison est juste plus fragile qu'elle ne devrait l'être.

## La diversité ne sert que si on la laisse travailler

La plupart des récepteurs sont « true diversity » : deux antennes, et le récepteur choisit
en continu celle qui reçoit le mieux, de quoi encaisser les creux quand l'artiste se
déplace. Mais coller les deux antennes l'une à l'autre revient à n'en avoir qu'une. Il
faut les espacer pour que la diversité ait quelque chose à comparer.

Reste l'environnement, qu'on ne choisit pas toujours mais qu'on peut éviter. Routeurs
Wi-Fi, murs de LED, gradateurs bon marché rayonnent du bruit radio ; on éloigne les
antennes de ces sources [1], et un scan avant le show repère vite une zone polluée.

Une antenne bien placée vous rapporte plus de portée et de stabilité qu'un changement de
fréquence. Et une fois l'antenne réglée, autant partir d'un plan de fréquences propre :
c'est le travail de Speed RF, qui vous donne des canaux compatibles pour votre matériel
et votre ville.

## Sources

1. Shure, « Troubleshooting Wireless Dropouts in 10 Simple Steps » :
   https://www.shure.com/en-EU/insights/troubleshooting-wireless-dropouts-10-simple-steps
2. RF Venue, ressources sur les antennes et la distribution PMSE :
   https://www.rfvenue.com/blog

# Herbier intéractif, immersif 

## Présentation 

**Groupe 4 - Botanique, Distance - Projection**

**EDNA** | **Polytech**
| --- | --- |
Elise Croguennoc | Antoine Zuber
Juliette Rosenbaum | Antoine Eluere
Marie Sambron | Houssem Kacemi
Owen Schneider | Iheb Landoulsi
Paul Maurin | - 
Sophie Lambert |  -


## Introduction 

Cette documentation indique l'essentiel de ce qu'il faut savoir pour pouvoir reproduire le projet developpé pour le Terr-Ligeria. 
L'ensemble du code officiel pour tous les projets, ce lien de Github et est tenu par un professeur de Polytech Nantes : https://github.com/mperreir/TerrA-LigeriA .

Le lien du groupe sur lequel ont à pu developper est celui ci : https://github.com/Antoine-Zuber/TerrA-LigeriA . C'est un fork (une branche parallèle en quelque sorte) qui sera ensuite refusionner avec l'original. 

La récupération du code source ce fait en téléchargeant un dossier zip gràce au bouton **Code** en vert sur la page principale du lien <a href="https://github.com/Antoine-Zuber/TerrA-LigeriA"> ici</a>  (voir photo ci dessous).

<img src="./img-doc/bouton-code.png"/>  

Pour trouver le dossier avec le code source il est nécessaire de se retrouver au bonne endroit qui est donc : 
```
Terra-Ligeria/musee-botanique/groupe-4/
``` 

De là, vous devriez avoir l'ensemble des dossiers et fichiers nécéssaire pour lancer les 2 vues du projet dans le dossier `src` :  `VueVivant.html`, qui se place avec à gauche l'environnement et à droite le panneau avec le tulle. Et `VueHerbier.html` qui se place directement sur le pan du module à droite. 

Pour une meilleur appréciation et immersion, il faut entrer en mode plein écran avec la touche **F11** (Fn + F11 si le FnLock est activé)

Les différentes librairie utilisé dans ce projet ont été téléchargé pour éviter les problème de connexion qui pourrait apparaitre en Septembre lors de la présentation au musée, c'est pourquoi le dossier `lib` existe.

## Installation
### Leap Motion
Téléchargement du Leap SDK selon la plateforme :
* Pour windows: https://developer-archive.leapmotion.com/downloads/external/v4-1-hand-tracking/windows?version=4.1.0
* Pour Ubuntu: https://developer.leapmotion.com/tracking-software-download

Brancher le Leap Motion en USB.

Sur Ubuntu, ouvrir un terminal et executer: 
```
sudo leapd;
```
Sur Windows, dans le menu recherche de la barre des tâches, taper **Leap Motion Control Panel** et executer le.

### Projet
1- Décompresser le fichier zip du projet.  
2- Accéder à **museum-botanique/groupe-4**  
3- Executer (Double-clique) les fichiers **VueVivant.html** et **VueHerbier.html** dans le dossier **src**
(Pour tester le bon fonctionnement du Leap Motion, executer **threejs-bones.html**)

### Mapping
Pour le mapping, cliquer sur la page et appuyer sur `SHIFT` + `Espace` pour entrer en mode édition.  
Pour la rotation des images, appuyer sur `R` en mode édition.  
Pour revenir au mode classique, appuyer à nouveau sur `SHIFT` + `Espace`.  
Documentation complète: https://github.com/glowbox/maptasticjs
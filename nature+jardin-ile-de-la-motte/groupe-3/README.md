# Projet Mottif

Notre projet utilise une caméra logitech (sans grand angle) et une carte son ainsi que des enceintes. En effet, notre contrainte d'entrée était la  caméra et notre contrainte de sortie le son.
Le projet ce décompose en plusieurs script python qui communique entre eux grâce à des sockets TCP.

## Prérequis
Nous avons utilisé Python 3.9 pour le projet, une utilisation plus ancienne de Python peut poser des problèmes.
Avoir installé les libraires Python suivantes :
 - Numpy ->`pip install numpy`
 - Open CV -> `pip install opencv-python`
 - Mediapipe -> `pip install mediapipe`
 - Json
 - Socket
 - Pygame -> `pip install pygame`

Avoir installé le logiciel de paramètre de webcam logitech (https://www.touslesdrivers.com/index.php?v_page=23&v_code=58104)


## Lancement des scripts
Le premier script à lancer est gestionCamera.py . Une fois lancé, il faut vérifier que la caméra est bien calibrée en fonction des zones des plaques.
Ensuite, il faut lancer le logiciel logitech de façon à enlever l'auto-focus. Puis lancer les scripts managesounds.py et AffichageDesVideos.py . 
Pour finir, il suffit d'appuyer sur "q" en sélectionnant la fenêtre de calibrage pour lancer la connexion entre les différents scripts, et ainsi lancer le projet.

## Génération des zones
Si le fichier zones.txt venait à être supprimé, il est possible de regénérer les zones grâce au script genZones.py .
Il faut ainsi bien placer la caméra, colorier les différentes zones avec la souris et appuyer sur "n" pour changer de zone. Une fois les 5 zones choisies, appuyer sur "q" pour quitter.
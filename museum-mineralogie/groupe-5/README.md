# Icreate Groupe 5

### Prérequis

* Ordinateur avec installation python 3.8.10 (le podule pyo n'est pas compatible avec les versions les plus récentes)  
* Arduino uno (ou équivalent) avec le code présent dans le répertoire src/arduino téléversé et les connexions comme décrites. Faire correspondre les numéros de port du arduino avec le numéro de son (cf : le bouton branché sur le port numéro **5** lit quand il est activé le fichier DUBUISOUND**5**.wav dans le dossier records)


### Installation

1. Cloner/télécharger le repertoire
2. Naviguer jusqu'à la racine du dossier
3. Créer un environnement virtuel (préciser dans la deuxième commande le path vers la bonne version de python si plusieurs versions de python sur le PC)
   > python -m pip install virtualenv  
   > python -m venv env
4. Activer l'environnement virtuel
   > env\Scripts\activate
5. Installer les dépendances
   > python -m pip install -r requirements.txt
6. Configurer les variables du fichier .env au besoin (normalement rien à faire)  

### Lancer le programme

> python main.py

Au lancement, une étape de calibrage est nécessaire.
Au moment où le fenêtre avec l'image de la webcam s'ouvre, appuyer sur la touche R.
Ensuite sélectionner avec la souris la partie de l'image contenant le spectre.
Enfin appuyer sur Entrée.

### Quitter le programme

Le programme ne s'arrête pas et doit être tué avec Ctl+C.

# Icreate Groupe 5

### Installation

Fonctionne sous python 3.8.10

1. Cloner/télécharger le repertoire
2. Naviguer jusqu'à la racine du dossier
3. Créer un environnement virtuel
   > python -m pip install virtualenv
   > python -m venv env
4. Activer l'environnement virtuel
   > env\Scripts\activate
5. Installer les dépendances
   > python -m pip install -r requirements.txt
6. Configurer les variables du fichier .env
   Normalement rien à faire

### Lancer le programme

Si pas déjà fait, activer l'environnement virtuel.

> env\Scripts\activate

Puis:

> python main.py

Au lancement, une étape de calibrage est nécessaire.
Au moment où le fenêtre avec l'image de la webcam s'ouvre, appuyer sur la touche R.
Ensuite sélectionner avec la souris la partie de l'image contenant le spectre.
Enfin appuyer sur Entrée.

### Quitter le programme

Le programme ne s'arrête pas et doit être tué avec Ctl+C.

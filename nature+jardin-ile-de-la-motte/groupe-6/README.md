# iCreate

iCreate : Projet sur l'île de la Motte

Pour faire tourner le programme :

###1- Installation de Python et des modules nécessaires :
* Installer Python 3.10.2 (dernière version)

**/!\\ Cocher la case ADD PYTHON TO PATH /!\\**
>https://www.python.org/downloads/



* Aller en ligne de commande dans le repertoire du projet

* Taper 
>pip install -r requirements.txt 

###2- Connecter le hardware :
* Connecter une mannette de switch (gauche ou droite) en Bluetooth à l'ordinateur

* Brancher l'arduino à l'ordinateur

* Brancher le vidéo projecteur à l'ordinateur

###3- Démarrer le programme :
* Taper :
>python main.py

###4- Qualibrer l'écran et les jumelles :
* Pour régler le video projecteur aller dans Menu / projection et selectionner la position du video (en bas derrière l'écran)
* Pointer avec la manette les cibles a l'écran et appuyer sur ZL ou ZR (les gachettes)

###5- Jouer :
* Pour recalibrer, si le viseur est mauvais, appuyer sur le bouton - ou +
* Pour démarrer ou relancer le jeu, appuyer sur l'interrupteur
* Une fois le jeu lancé, appuyer sur ZL ou ZR (les gachettes) pour prendre la photo

+ S'il y a une erreur qui parle de port serie non définie c'est que l'arduino est mal branché
+ S'il y a une erreur de "vecteur id" qui ne peut être null c'est que les manettes ne sont pas connectées

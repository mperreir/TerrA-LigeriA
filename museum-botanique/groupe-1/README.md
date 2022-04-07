# Terra Ligeria

## Installation 

Prérequis :
* NodeJS et NPM

Installation :

* Cloner le repo git
* executer `npm i`
* executer `npm start`

Le serveur web se lance sur le port 8080. Pour acceder à une page web (contenue dans `/public/*.html`), aller sur https://localhost:8080

Attention, les HTTP**S** est obligatoire

Chaque tablette doit se connecter au serveur, il faut donc récuperer l'IP du serveur grace à `ipconfig` dans une cmd ou `ip a` dans un terminal linux.

Pour les afficheurs : 
* https://\<IP>:\<PORT>/afficheur.html
* https://\<IP>:\<PORT>/instruction.html

Pour l'hologramme :
* https://\<IP>:\<PORT>/hologramme.html

Pour le téléphone : 
* https://\<IP>:\<PORT>/telephone.html

Pour l'hologramme : 
* Télécharger les images des hologrammes (disponible sur le drive du projet)
* Décompresser les images sous /public/images/hologramme/\<angelica | ornithopus>

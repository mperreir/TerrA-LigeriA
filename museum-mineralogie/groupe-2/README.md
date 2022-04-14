# Voyage au centre de la pierre

Du 21 au 25 février 2022 et au cours du mini-projet 'TerrA-LigeriA', une équipe de l'école d'ingénieur en informatique Polytech et une équipe de designeurs d'EDNA ont élaborés ensemble 'Voyage au centre de la pierre'.

# Requirements

## Données

Les données de ce projet sont trop volumineuses pour être stockées sur le git. Il faut les télécharger depuis le lien [icreate – Google Drive](https://drive.google.com/drive/folders/1aVGkfSxMyzqWEZY4ZOCxmShF0qX8ln0n?usp=sharing "https://drive.google.com/drive/folders/1aVGkfSxMyzqWEZY4ZOCxmShF0qX8ln0n?usp=sharing") puis placer le dossier `ressources` obtenu dans le dossier `public` du dépôt.

## NodeJS

Le serveur tourne sous NodeJS. Il faudra donc télécharger la version v17.6.0 qui est ka version utilisée pour le développement. Une version antérieure peut être utilisée, mais nous ne garantissons pas son fonctionnement.

Les liens officiels sont pour le moment :
https://nodejs.org/en/

### Sous Windows

https://nodejs.org/dist/v17.6.0/node-v17.6.0-x64.msi

## Installation

### Préparer le serveur nodeJS

Après avoir cloné le projet git, allez au niveau de la racine (le dossier icreate), puis lancer la commande :

##### npm install

Ensuite, vous pourrez lancer le serveur avec la commande :

##### npm run test

### Connaître son IP

Veuillez dans un premier temps trouver votre adresse ip de votre réseau local.

#### Sous Windows :

Ouvrez une console cmd
Tapez 'ipconfig /all'
Vous trouverez ensuite votre IP, souvent quelque chose comme 192.168.X.Y.

#### Sous Linux :

Ouvrez un terminal
Tapez 'ip a'
Vous trouverez ensuite votre IP, souvent quelque chose comme 192.168.X.Y.

### Mise en réseau

Pour faire fonctionnner l'application, vous devrez donc faire un réseau 'Hotspot' WiFi. Pour cela, vous pouvez utiliser le WiFi de l'ordinateur qui le permet, par un téléphone en partage de connexion (pas besoin d'activer les données mobiles), ou une autre solution serait si l'ordinateur est remplacé par une raspberry avec WiFi.

Indifféremment de la configuration donnée ci-dessus, vous devrez donc avoir l'ordinateur et la tablette sur le même réseau WiFi.

## Manuel

### L'accès aux pages

Dans un navigateur, vous pourrez trouver les pages suivantes :
192.168.X.Y:3000 -> Vous arriverez sur la page d'administration
192.168.X.Y:3000/accueil.html -> Vous arriverez sur la page de la carte
192.168.X.Y:3000/hologramme.html -> Vous arriverez sur la page hologramme

### Les pages

La page d'administration sert donc à configurer l'application.
La page de la carte est à affichée sur un écran branché sur l'ordinateur.
La page de l'hologramme est donc à afficher sur la tablette en plein écran.

### Page administration

Pour utiliser la page administration, vous devez tout d'abord autoriser la caméra.
Ensuite, vous pouvez par deux clic gauches, sur la caméra, dessiner des rectangles correspondant aux zones d'activation.
Enfin, vous devez nommer les zones pour correspondre aux différents types de pierre.

##### 1 -> Michaschiste

##### 2 -> Granite

##### 3 -> Phyllade

##### 4 -> Quartz

##### 5 -> Amphibolite

## Aide

### Sur Firefox

Étant donné que le site est hébergé en local (et non sur Internet), nous devons configurer Firefox pour donner confiance pour l'accès à la caméra.
Pour cela :
"go to `about:config` set to true `media.devices.insecure.enabled` and `media.getusermedia.insecure.enabled`"
Source : https://stackoverflow.com/questions/60957829/navigator-mediadevices-is-undefined

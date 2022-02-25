/**
 * Initialisation de l'afficheur grace à reveal.js
 */
Reveal.initialize({
    progress: true,
    loop: false,
    controls:false,   
});

// Connexion au serveur en socketio
const socket = io();

// on écoute l'événement tablete
socket.on("afficheur", (data) => {
    // quand on recois le changement d'une fleur
    if (data.action == 'flowerChange') {
        // TODO : changer les slides
    }
})
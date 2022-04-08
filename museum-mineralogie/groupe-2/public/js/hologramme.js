const socket = io();

/* Connexion au backend */
socket.on("connect", () => {
    console.log(socket.id);
});

/* Activation, on montre l'hologramme */
socket.on("activate", () => {
    changeHolo('dubuisson.gif');
})

/* Connexion au backend */
socket.on('updateInfo', data => {
    if (data) {
        changeHolo(data['hologramme'])
    } else {
        hideHolo();
    }
});

/* On change l'hologramme */
function changeHolo(filename) {
    document.querySelector('.hologramme').setAttribute('style', `background-image : url('/ressources/hologramme/${filename}');`);
}

/* On cache l'hologramme (standby) */
function hideHolo() {
    document.querySelector('.hologramme').removeAttribute('style');
}
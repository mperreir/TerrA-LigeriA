window.onload = () => {

    // Initialisation du swipe
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // connexion en socketio
    const socket = io();

    // quand on appuis sur le bouton recommencer, on envoie l'événement au téléphone
    const restart = document.querySelector('.restart');
    restart.addEventListener('click', () => {
        socket.emit("telephone", {
            action: "refresh",
            value: true
        });
    });

    // Quand le slider change, on envoie la nouvelle séléction à l'afficheur
    swiper.on('transitionEnd', () => {
        socket.emit("afficheur", {
            action: "flowerChange",
            value: document.querySelector('.swiper-slide-active').dataset.id
        });

        socket.emit("hologramme", {
            action: "hologrammeChange",
            value: document.querySelector('.swiper-slide-active').dataset.id
        });

        socket.emit("telephone", {
            action: "refresh",
            value: true
        });

    });
}
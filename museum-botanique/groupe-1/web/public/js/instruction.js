
window.onload = () => {

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

    const socket = io();

    const restart = document.querySelector('.restart');
    restart.addEventListener('click', () => {
        socket.emit("telephone", {
            action: "refresh",
            value: true
        });
    });

    swiper.on('slideChange', () => {
        socket.emit("tablette", {
            action: "new_flower",
            value: document.querySelector('.swiper-slide-active').dataset.id
        });
      });
}
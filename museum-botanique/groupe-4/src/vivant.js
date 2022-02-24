var configObject = {
    autoSave: false,
    autoLoad: false,
    layers: ["divimage","environement"]
};
var maptastic = Maptastic(configObject);

const swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    loop: true,
    fadeEffect: {
        crossFade: true
    }})
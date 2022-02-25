var configObject = {
    autoSave: false,
    autoLoad: false,
    layers: ["divimage","environement"]
};
var maptastic = Maptastic(configObject);

const swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    loop: false,
    fadeEffect: {
        crossFade: true
}})

let currentPage = 1

    
document.addEventListener('slideLeft', (evt) => {
    swiper.slidePrev(1250);
    if (currentPage > 1){
        $('.flipped')
            .last()
            .toggleClass('flipped active')
            .siblings('.page')
            .removeClass('active');
        currentPage--;
    }
})
    
document.addEventListener('slideRight', (evt) => {
    swiper.slideNext(1250);
    if (currentPage < 3){
        $('.active')
            .toggleClass('active flipped')
            .next('.page')
            .addClass('active');
        currentPage++;
    }
})
    
    
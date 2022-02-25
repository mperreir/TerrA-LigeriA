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
let inDetails = false;
    
document.addEventListener('slideLeft', (evt) => {
    if (!inDetails){
        swiper.slidePrev(1250);
        if (currentPage > 1){
            $('.flipped')
                .last()
                .toggleClass('flipped active')
                .siblings('.page')
                .removeClass('active');
            currentPage--;
        }
    }
    else {
        inDetails = false;
    }
})
    
document.addEventListener('slideRight', (evt) => {
    if (!inDetails){
        swiper.slideNext(1250);
        if (currentPage < 5){
            $('.active')
                .toggleClass('active flipped')
                .next('.page')
                .addClass('active');
            currentPage++;
        }
    }
    else {
        inDetails = false;
    }
})

document.addEventListener('slideUp', (evt) => {
    inDetails = !inDetails;
})
    
    
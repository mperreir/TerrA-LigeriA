var configObject = {
    autoSave: false,
    autoLoad: false,
    layers: ["divimage","environement"]
};
var maptastic = Maptastic(configObject);

const swiper1 = new Swiper('#milieux', {
    effect: 'fade',
    loop: false,
    fadeEffect: {
        crossFade: true
}})
const swiper2 = new Swiper('#divimage', {
    effect: 'fade',
    loop: false,
    fadeEffect: {
        crossFade: true
    }})

let currentPage = 0;
let inDetails = false;
    
document.addEventListener('slideLeft', (evt) => {
    if (!inDetails){
        if (currentPage > 0){
            if (currentPage - 1 > 0) {
                const audioActive = $('#audio' + currentPage)[0];
                const audioPrecedent = $('#audio' + (currentPage - 1))[0];

                $(audioActive).animate({volume:0.0}, 750);
                setTimeout(()=>{
                    audioActive.pause();
                    audioPrecedent.play();
                    $(audioPrecedent).animate({volume:1.0},750);
                },750);
            }
            currentPage--;
        }
        swiper1.slidePrev(1250);
        swiper2.slidePrev(1250);
    }
    else {
        inDetails = false;
    }
})
    
document.addEventListener('slideRight', (evt) => {
    if (!inDetails){
        if (currentPage < 4){
            if (currentPage + 1 < 4) {
                const audioActive = $('#audio' + currentPage)[0];
                const audioSuivant = $('#audio' + (currentPage + 1))[0];
                $(audioActive).animate({volume:0.0},750);
                setTimeout(()=>{
                    audioActive.pause();
                    audioSuivant.play();
                    $(audioSuivant).animate({volume:1.0},750);
                },750);
            }
            currentPage++;
        }
        swiper1.slideNext(1250);
        swiper2.slideNext(1250);
    }
    else {
        inDetails = false;
    }
})

document.addEventListener('slideUp', (evt) => {
    inDetails = !inDetails;
})
    
    
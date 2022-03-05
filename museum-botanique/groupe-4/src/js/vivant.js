var configObject = {
    autoSave: false,
    autoLoad: false,
    layers: ["divimage","environement"]
};
var maptastic = Maptastic(configObject);

const swiper1 = new Swiper('#milieux', {
    effect: 'fade',
    loop: true,
    fadeEffect: {
        crossFade: true
}})
const swiper2 = new Swiper('#divimage', {
    effect: 'fade',
    loop: true,
    fadeEffect: {
        crossFade: true
    }})

var etatInitial = document.getElementById("main").cloneNode(true);

let niveauDetails = 0;

var currentPage = 1;

function onSlideLeft() {
    if (niveauDetails==0){
        if (currentPage > 0){
            if (currentPage > 1) {
                const audioActive = $('#audio' + currentPage)[0];
                const audioPrecedent = $('#audio' + (currentPage - 1))[0];

                $(audioActive).animate({volume:0.0}, 750);
                setTimeout(()=>{
                    audioActive.pause();
                    audioPrecedent.play();
                    $(audioPrecedent).animate({volume:1.0},750);
                },750);
                currentPage--;
            }
            else{
                const audioActive = $('#audio' + currentPage)[0];
                const audioPrecedent = $('#audio' + maxIndexPage)[0];

                $(audioActive).animate({volume:0.0}, 750);
                setTimeout(()=>{
                    audioActive.pause();
                    audioPrecedent.play();
                    $(audioPrecedent).animate({volume:1.0},750);
                },750);
                currentPage = maxIndexPage
            }
        }
        swiper1.slidePrev(1250);
        swiper2.slidePrev(1250);
    }
}
    
function onSlideRight() {
    if (niveauDetails == 0){
        if (currentPage < maxIndexPage){
                const audioActive = $('#audio' + currentPage)[0];
                const audioSuivant = $('#audio' + (currentPage + 1))[0];
                $(audioActive).animate({volume:0.0},750);
                setTimeout(()=>{
                    audioActive.pause();
                    audioSuivant.play();
                    $(audioSuivant).animate({volume:1.0},750);
                },750);
            currentPage++;
        }
        else{
            const audioActive = $('#audio' + maxIndexPage)[0];
            const audioSuivant = $('#audio1')[0];
            $(audioActive).animate({volume:0.0},750);
            setTimeout(()=>{
                audioActive.pause();
                audioSuivant.play();
                $(audioSuivant).animate({volume:1.0},750);
            },750);
        currentPage=1;
        }
        swiper1.slideNext(1500);
        swiper2.slideNext(1500);
    }
}


function onSlideUp() {
    niveauDetails = Math.min(niveauDetails+1,2);
}

function onSlideDown() {
    niveauDetails = Math.max(niveauDetails-1,0);
}

function resetAudio(){
    /*const audios = document.getElementsByTagName("audio");
    for (let i = 1; i<audios.length;i++){
        audios[i].pause();
        audios[i].volume = 0.0;
    }
    audios[0].volume=1.0;
    audios[0].play();*/
}

function onRefresh(){
   /* document.getElementById("main").remove();
    document.getElementById("body").appendChild(etatInitial);
    etatInitial = etatInitial.cloneNode(true);
    currentPage = 1;
    resetAudio();*/
    location.reload();

}
    
window.addEventListener("message", (event) => {
    if (event.data == "slideLeft"){
        onSlideLeft();
    }
    if (event.data == "slideRight"){
        onSlideRight();
    }
    if (event.data == "slideUp"){
        onSlideUp();
    }
    if (event.data == "slideDown"){
        onSlideDown();
    }
    if (event.data == "refresh"){
        onRefresh();
    }
  }, false);
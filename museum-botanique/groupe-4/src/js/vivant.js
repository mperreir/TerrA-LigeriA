// Configuration de Maptastic
var configObject = {
    autoSave: true,
    autoLoad: true,
    layers: ["divimage", "environement"]
};
var maptastic = Maptastic(configObject);

var etatInitial = document.getElementById("main").cloneNode(true);

let niveauDetails = 0;

var currentPage = 1;

/**
 * Fonction qui s'occupe de la transition vers la plante précédente
 * Commence par arrêter l'audio d'ambiance actuel et lance l'audio précédente
 * Affiche l'environnement et la plante vivante précédents
 */
function onSlideLeft() {
    if (currentPage > 0) {
        if (currentPage > 1) {
            const audioActive = $('#audio' + currentPage)[0];
            const audioPrecedent = $('#audio' + (currentPage - 1))[0];

            $(audioActive).animate({ volume: 0.0 }, 750);
            setTimeout(() => {
                audioActive.pause();
                audioPrecedent.play();
                $(audioPrecedent).animate({ volume: 1.0 }, 750);
            }, 750);
            currentPage--;
        }
        else {
            const audioActive = $('#audio' + currentPage)[0];
            const audioPrecedent = $('#audio' + maxIndexPage)[0];

            $(audioActive).animate({ volume: 0.0 }, 750);
            setTimeout(() => {
                audioActive.pause();
                audioPrecedent.play();
                $(audioPrecedent).animate({ volume: 1.0 }, 750);
            }, 750);
            currentPage = maxIndexPage
        }
    }
    swiper1.slidePrev(1250);
    swiper2.slidePrev(1250);
}

/**
 * Fonction qui s'occupe de la transition vers la plante suivante
 * Commence par arrêter l'audio d'ambiance actuel et lance l'audio suivante
 * Affiche l'environnement et la plante vivante suivants
 */
function onSlideRight() {
    if (currentPage < maxIndexPage) {
        const audioActive = $('#audio' + currentPage)[0];
        const audioSuivant = $('#audio' + (currentPage + 1))[0];
        $(audioActive).animate({ volume: 0.0 }, 750);
        setTimeout(() => {
            audioActive.pause();
            audioSuivant.play();
            $(audioSuivant).animate({ volume: 1.0 }, 750);
        }, 750);
        currentPage++;
    }
    else {
        const audioActive = $('#audio' + maxIndexPage)[0];
        const audioSuivant = $('#audio1')[0];
        $(audioActive).animate({ volume: 0.0 }, 750);
        setTimeout(() => {
            audioActive.pause();
            audioSuivant.play();
            $(audioSuivant).animate({ volume: 1.0 }, 750);
        }, 750);
        currentPage = 1;
    }
    swiper1.slideNext(1500);
    swiper2.slideNext(1500);
}


function onSlideUp() {
    niveauDetails = Math.min(niveauDetails + 1, 2);
}

function onSlideDown() {
    niveauDetails = Math.max(niveauDetails - 1, 0);
}

function onRefresh() {
    location.reload();
}

window.addEventListener("message", (event) => {
    if (event.data == "slideLeft") {
        onSlideLeft();
    }
    if (event.data == "slideRight") {
        onSlideRight();
    }
    if (event.data == "slideUp") {
        onSlideUp();
    }
    if (event.data == "slideDown") {
        onSlideDown();
    }
    if (event.data == "refresh") {
        onRefresh();
    }
}, false);

/**
 * Fonction qui crée l'élément HTML correspondant à l'environnement passé en paramètre
 */
function creerEnv(pathEnv) {
    const env = document.createElement("div");
    env.className = "swiper-slide";
    const image = document.createElement("img");
    image.src = pathEnv;
    env.appendChild(image);
    return env;
}

/**
 * Fonction qui crée l'élément HTML correspondant à la plante vivante passé en paramètre
 */
function creerVivant(pathVivant) {
    const vivant = document.createElement("div");
    vivant.className = "swiper-slide";
    const image = document.createElement("img");
    image.src = pathVivant;
    vivant.appendChild(image);
    return vivant;
}

/**
 * Fonction qui crée l'élément HTML correspondant à l'audio d'ambiance passé en paramètre
 */
function creerAudio(audioPath) {
    const audio = document.createElement("audio");
    audio.volume = 0.0;
    audio.loop = true;
    audio.src = audioPath;
    return audio;
}

/**
 * Initialisation de la page de vue du vivant
 */
function init() {
    const audioDiv = document.getElementById("div-audio");
    let vivantSommaire = document.getElementById("sommaire-vivant");
    let envSommaire = document.getElementById("sommaire-environnement")
    for (let i = 0; i < data.length; i++) {
        const audio = creerAudio(data[i].audio);
        audio.id = `audio${i + 2}`;
        audioDiv.appendChild(audio);
        const vivant = creerVivant(data[i]["image-vivant"]);
        vivantSommaire.after(vivant);
        vivantSommaire = vivant;
        const env = creerEnv(data[i].env);
        envSommaire.after(env);
        envSommaire = env;
    }
    const audioFin = creerAudio(document.getElementById("audio1").src);
    audioFin.id = `audio${data.length + 2}`;
    audioDiv.appendChild(audioFin);

}

init();
const swiper1 = new Swiper('#milieux', {
    effect: 'fade',
    loop: true,
    fadeEffect: {
        crossFade: true
    }
})
const swiper2 = new Swiper('#divimage', {
    effect: 'fade',
    loop: true,
    fadeEffect: {
        crossFade: true
    }
})
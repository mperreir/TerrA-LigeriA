// Configuration de Maptastic
var configObject = {
    autoSave: true,
    autoLoad: true,
    layers: ["scene"]
};
var maptastic = Maptastic(configObject);

//On ouvre la page de vue vivant
var vueVivant = window.open("./VueVivant.html");

var etatInitial = document.getElementById("scene").cloneNode(true);


document.addEventListener('slideLeft', (evt) => {
    // On envoie l'événement à la page de vue vivant
    vueVivant.postMessage("slideLeft","*");
    // On passe à la page précédente si on n'est pas dans la première page sinon on va à la page de fin
    if (currentPage > 1){
        $('.flipped')
            .last()
            .toggleClass('flipped active')
            .siblings('.page')
            .removeClass('active');
        currentPage--;
    }
    else{
        currentPage = maxIndexPage;
        allerFin();
    }
})

document.addEventListener('slideRight', (evt) => {
    // On envoie l'événement à la page de vue vivant
    vueVivant.postMessage("slideRight","*");
    // On passe à la page suivante si on n'est pas dans la dernière page sinon on retourne au sommaire
    if (currentPage < maxIndexPage){
        $('.active')
            .toggleClass('active flipped')
            .next('.page')
            .addClass('active');
        currentPage++;
    }
    else{
        currentPage = 1;
        retourDebut();
    }
})

function retourDebut(){
    const first = $(".page").first()[0].cloneNode(true);
    $(".page").last().toggleClass('active flipped');
    $(".book")[0].appendChild(first);
    $(".page").first().toggleClass('active flipped');
    $(".book .page:not(:first)").toggleClass("flipped");
    first.remove();   
}

function allerFin(){
    const last = $(".page").last()[0].cloneNode(true);
    const first = $(".page").first()[0]
    $(".book")[0].insertBefore(last,first);
    $(".book .page:not(:first):not(:last)").toggleClass("flipped");
    $(".page.active").toggleClass("active");
    $(".page").last().toggleClass("active");
    last.remove();
}

document.addEventListener('slideUp', (evt) => {
    vueVivant.postMessage("slideUp","*");
    $(`.details[slide="${active_slide}"]`).addClass("animate");
})


document.addEventListener('slideDown', (evt) => {
    vueVivant.postMessage("slideDown","*");
    $(`.details[slide="${active_slide}"]`).removeClass("animate")
})

/**
 * Après un certain temps d'inactivité, on rafraichit (revient au sommaire)
 */
document.addEventListener('refresh',(evt)=>{
    vueVivant.postMessage("refresh","*");
    const body = document.getElementsByTagName("body")[0];
    document.getElementById("scene").remove();
    body.appendChild(etatInitial);
    etatInitial = etatInitial.cloneNode(true);
    currentPage = 1;
    configObject.layers=['scene'];
    maptastic = Maptastic(configObject);
})

/**
 * Fonction qui crée une page de l'herbier
 * Prend en paramètres les slides (page herbier + détails)
 */
function creerPage(details){
    const page = document.createElement("div");
    page.className = "page";
    const herbier = document.createElement("div");
    herbier.className = "herbier";
    herbier.slide = "1";
    const imageHerbier = document.createElement("img");
    imageHerbier.src = details[0];
    herbier.appendChild(imageHerbier);
    page.appendChild(herbier);
    for(let i = 1; i<details.length;i++){
        const slide = document.createElement("div");
        slide.className = "details";
        slide.style.zIndex = i + 3;
        slide.setAttribute("slide",i+1);
        const image = document.createElement("img");
        image.src = details[i];
        slide.appendChild(image);
        page.appendChild(slide);
    }
    return page;
}


/**
 * Initialisation de la page d'herbier
 */
function init(){
    let node = document.getElementById("sommaire");
    data.forEach(element => {
        const page = creerPage(element.details);
        node.after(page);
        node = page;
    });
}

init();
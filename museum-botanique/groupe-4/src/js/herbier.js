var configObject = {
    autoSave: true,
    autoLoad: true,
    layers: ["scene"]
};
var maptastic = Maptastic(configObject);

var vueVivant = window.open("./VueVivant.html");

var etatInitial = document.getElementById("scene").cloneNode(true);


document.addEventListener('slideLeft', (evt) => {
    vueVivant.postMessage("slideLeft","*");
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
    vueVivant.postMessage("slideRight","*");
    window.postMessage("Prev","*")
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

document.addEventListener('slideUp', (evt) => {
    vueVivant.postMessage("slideUp","*");
    $(`.details[slide="${active_slide}"]`).addClass("animate");
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

document.addEventListener('slideDown', (evt) => {
    vueVivant.postMessage("slideDown","*");
    $(`.details[slide="${active_slide}"]`).removeClass("animate")
})

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
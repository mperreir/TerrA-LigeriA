var configObject = {
    autoSave: false,
    autoLoad: false,
    layers: ["scene"]
};
var maptastic = Maptastic(configObject);

document.addEventListener('slideLeft', (evt) => {
    if (currentPage > 1){
        console.log($(".flipped"));
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
    $(`.details[slide="${active_slide}"]`).addClass("animate");
})

function retourDebut(){
    const first = $(".page").first()[0].cloneNode(true);
    $(".book")[0].appendChild(first);
    $(".page").last().toggleClass('active flipped')
    .next('.page')
    .addClass('active');
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
    $(`.details[slide="${active_slide}"]`).removeClass("animate")
})

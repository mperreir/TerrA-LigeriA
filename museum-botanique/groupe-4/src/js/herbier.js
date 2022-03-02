var configObject = {
    autoSave: false,
    autoLoad: false,
    layers: ["scene"]
};
var maptastic = Maptastic(configObject);

document.addEventListener('slideLeft', (evt) => {
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
    console.log("here");
    const first = $(".page").first()[0].cloneNode(true);
    $(".book")[0].appendChild(first);
    $(".page").last().toggleClass('active flipped')
    .next('.page')
    .addClass('active');
    $(".page").first().toggleClass('active flipped');
    $(".book div:not(:first)").toggleClass("flipped");
    first.remove();
    
}
document.addEventListener('slideDown', (evt) => {
    $(`.details[slide="${active_slide}"]`).removeClass("animate")
})

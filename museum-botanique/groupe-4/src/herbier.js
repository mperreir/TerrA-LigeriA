let currentPage = 1
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
    if (currentPage < 5){
        $('.active')
            .toggleClass('active flipped')
            .next('.page')
            .addClass('active');
        currentPage++;
    }
})

document.addEventListener('slideUp', (evt) => {
    $(".details").toggleClass("animate");
})

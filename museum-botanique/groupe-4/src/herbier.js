let currentPage = 1


const options = {
    keepalive: 60,
    clientId: 1,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    will: {
        topic: 'WillMsg',
        payload: 'Connection Closed abnormally..!',
        qos: 0,
        retain: false
    },
}

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
    if (currentPage < 3){
        $('.active')
            .toggleClass('active flipped')
            .next('.page')
            .addClass('active');
        currentPage++;
    }
})

document.addEventListener('slideUp', (evt) => {
    // speed of animations (ms)
    let speed = 250;
    // non active slides moved down so they can slide up when activated
    $(".slide[pos!='" + active_slide + "']").each(function() {
        $(this).css("top", "10px");
    })

    if (active_slide === 1) {

        /*
          Note: delay only works if .hide() or .show() are in its internal queue. Therefore you need to pass an argument to it, even if it's 0. (praise be to stackoverflow)
        */

        $(".slide[pos='" + active_slide + "']").animate({opacity:0, top: "-10px"}, {duration: speed}).hide(0).animate({top: "10px"});
        active_slide = 2;
        var slide = $(".slide[pos='" + active_slide + "']");
        slide.delay(speed).show(0).animate({opacity:1, top: "0px"}, {duration: speed});
        slide.html("")
        slide.append(generate_table(currentPage -1))

    } else {
        $(".slide[pos='" + active_slide + "']").animate({opacity:0, top: "-10px"}, {duration: speed}).hide(0).animate({top: "10px"});
        active_slide = 1;
        $(".slide[pos='" + active_slide + "']").delay(speed).show(0).animate({opacity: 1, top: "0px"});
    }

})

document.getElementById("BT_LEFT").addEventListener('click', (e) => {
    console.log("bt pressed")
    document.dispatchEvent(evtLeft)
})
document.getElementById("BT_RIGHT").addEventListener('click', (e) => {
    console.log("bt pressed")
    document.dispatchEvent(evtRight)
})
document.getElementById("BT_UP").addEventListener('click', (e) => {
    console.log("bt pressed")
    document.dispatchEvent(evtUp)
})
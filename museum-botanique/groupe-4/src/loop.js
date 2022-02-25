const seuilMouvementHorizontal = 500;
const seuilMouvementVertical = 1300
const tempsAttente = 75;
var doitAttendre = false;
var compteur = 0;
var active_slide = 1;


const evtLeft = new CustomEvent('slideLeft')
const evtRight = new CustomEvent('slideRight')
const evtUp = new CustomEvent('slideUp')
const evtDown = new CustomEvent('slideDown')


const controller = new Leap.Controller();
controller.loop(function(frame) {
    if(!doitAttendre){
        if (frame.hands[0]){
            const actionRealisee = gererMouvement(frame.hands[0]);
            if (actionRealisee) {
                doitAttendre = true;
                compteur = 0;
            }
        }
    }
    else {
        compteur++;
        if (compteur >= tempsAttente){
            doitAttendre = false;
        }
    }

});


function gererMouvement(hand){
    const xVelocity = hand.palmVelocity[0];
    const yVelocity = hand.palmVelocity[1];

    if ((Math.abs(xVelocity) >= seuilMouvementHorizontal) && (Math.abs(xVelocity) / seuilMouvementHorizontal ) >= ( Math.abs(yVelocity) / seuilMouvementVertical )){
        if (active_slide === 2)
            document.dispatchEvent(evtUp);
        else if (xVelocity>0)
            document.dispatchEvent(evtLeft);
        else
            document.dispatchEvent(evtRight);
        return true;
    }
    else if (Math.abs(yVelocity) >= seuilMouvementVertical){
        document.dispatchEvent(evtUp);
        return true;
    }
    return false;
}
document.onkeydown = e => {
    e = e || window.event;

    if (e.keyCode == '38') {
            if (currentPage != 1) { 
            //up arrow
            active_slide = active_slide + 1;
            if (active_slide >= 3) active_slide = 3
            document.dispatchEvent(evtUp);
        }
    }
    else if (e.keyCode == '40') {
        if (currentPage != 1) {
            //down arrow
            document.dispatchEvent(evtDown);
            active_slide = active_slide - 1;
            if (active_slide <= 1) active_slide = 1
        }
    }
    else if (e.keyCode == '37') {
       //left arrow
       if (active_slide == 1){
        document.dispatchEvent(evtLeft);
       }
    }
    else if (e.keyCode == '39') {
       //right arrow
       if (active_slide == 1){
        document.dispatchEvent(evtRight);

       }
    }    
}
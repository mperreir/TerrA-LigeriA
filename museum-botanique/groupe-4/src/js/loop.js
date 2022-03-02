const seuilMouvementHorizontal = 200;
const seuilMouvementVertical = 350
const tempsAttente = 100;
const xLimit = 150;
const yLimit = 600;
const zLimit = 150;
var doitAttendre = false;
var compteur = 0;
var active_slide = 1;
var tps_inactif
var currentPage = 1;
const maxIndexPage = 7;

const evtLeft = new CustomEvent('slideLeft')
const evtRight = new CustomEvent('slideRight')
const evtUp = new CustomEvent('slideUp')
const evtDown = new CustomEvent('slideDown')


const controller = new Leap.Controller();
controller.loop(function(frame) {
    const d = new Date();

    if(!doitAttendre){
        if (frame.hands[0] && isInPosition(frame.hands[0].palmPosition)){
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

    //Compteur pour reset 
    if (frame.hands.length > 0) {
        tps_inactif = d.getTime();
    }
    if (d.getTime() - tps_inactif > 20 * 1000) {
        history.go(0)
    }
});



function isInPosition(position){
    return (Math.abs(position[0]) < xLimit) && (Math.abs(position[1]) < yLimit) && (Math.abs(position[2]) < zLimit)
}

function gererMouvement(hand){
    const xVelocity = hand.palmVelocity[0];
    const yVelocity = hand.palmVelocity[1];

    if ((Math.abs(xVelocity) >= seuilMouvementHorizontal) && (Math.abs(xVelocity) / seuilMouvementHorizontal ) >= ( Math.abs(yVelocity) / seuilMouvementVertical )){
        if (active_slide == 1){
            if (xVelocity>0)
                document.dispatchEvent(evtLeft);
            else
                document.dispatchEvent(evtRight);
            return true;
        }
    }
    else if (Math.abs(yVelocity) >= seuilMouvementVertical){
        if (currentPage > 1 && currentPage < 5){
            if (yVelocity > 0) {
                    active_slide = active_slide + 1;
                    if (active_slide >= 3) active_slide = 3;
                    document.dispatchEvent(evtUp);
            }
            else {
                document.dispatchEvent(evtDown);
                active_slide = active_slide - 1;
                if (active_slide <= 1) active_slide = 1
            }
            return true;
        }
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
const seuilMouvementHorizontal = 750;
const seuilMouvementVertical = 1250
const tempsAttente = 75;
var doitAttendre = false;
var compteur = 0;
var active_slide = 1;


const evtLeft = new CustomEvent('slideLeft')
const evtRight = new CustomEvent('slideRight')
const evtUp = new CustomEvent('slideUp')


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

    if ((Math.abs(xVelocity) >= seuilMouvementHorizontal) && Math.abs(xVelocity) >= Math.abs(yVelocity)){
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
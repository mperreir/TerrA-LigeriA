//A partir de quelle vélocité on considère qu'il y ait eu un mouvement horizontal ou vertical
//(on fait la différence entre vertical vers le haut et le bas)
const seuilMouvementHorizontal = 200;
const seuilMouvementVerticalHaut = 350;
const seuilMouvementVerticalBas = -450;

//Le temps d'attente après la détéction d'un mouvement (en frames)
const tempsAttente = 110;
var doitAttendre = false;
var compteur = 0;


// Les limites de la zone de détection
const xLimit = 1000;
const yLimit = 1000;
const zLimit = 1000;
var active_slide = 1;
var tps_inactif
var currentPage = 1;
const maxIndexPage = 7;
const maxSlides = 4;

const evtLeft = new CustomEvent('slideLeft')
const evtRight = new CustomEvent('slideRight')
const evtUp = new CustomEvent('slideUp')
const evtDown = new CustomEvent('slideDown')
const evtRefresh = new CustomEvent('refresh');


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

    //Si un mouvement a déjà été fait et que le temps d'attente ne s'est pas écoulé
    else {
        compteur++;
        if (compteur >= tempsAttente){
            doitAttendre = false;
        }
    }

    //Compteur pour reset (retour au sommaire)
    if (frame.hands.length > 0) {
        tps_inactif = d.getTime();
    }
    if (d.getTime() - tps_inactif > 60 * 1000) {
        document.dispatchEvent(evtRefresh);
        tps_inactif = d.getTime();
    }
});


/**
 * Fonction pour déterminer si la main se trouve dans la zone de détection
 */
function isInPosition(position){
    return (Math.abs(position[0]) < xLimit) && (Math.abs(position[1]) < yLimit) && (Math.abs(position[2]) < zLimit)
}

function gererMouvement(hand){
    const xVelocity = hand.palmVelocity[0];
    const yVelocity = hand.palmVelocity[1];

    // Si la vélocité horizontale est supérieure au seuil et le mouvement est "plus horizontal que vertical"
    if ((Math.abs(xVelocity) >= seuilMouvementHorizontal) && (Math.abs(xVelocity) / seuilMouvementHorizontal ) >= ( Math.abs(yVelocity) / seuilMouvementVerticalHaut )){
            if (xVelocity>0)
                document.dispatchEvent(evtLeft);
            else
                document.dispatchEvent(evtRight);
            return true;
    }
    else if (yVelocity >= seuilMouvementVerticalHaut){
        if (currentPage > 1 && currentPage < maxIndexPage){
            active_slide = active_slide + 1;
            if (active_slide >= maxSlides) active_slide = maxSlides;
            document.dispatchEvent(evtUp);
            return true;
        }
    }
    else if (yVelocity <= seuilMouvementVerticalBas){
        if (currentPage > 1 && currentPage < maxIndexPage){
            document.dispatchEvent(evtDown);
            active_slide = active_slide - 1;
            if (active_slide <= 1) active_slide = 1
        }
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
            if (active_slide >= maxSlides) active_slide = maxSlides
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
        document.dispatchEvent(evtLeft);
    }
    else if (e.keyCode == '39') {
       //right arrow
        document.dispatchEvent(evtRight)
    }    
}
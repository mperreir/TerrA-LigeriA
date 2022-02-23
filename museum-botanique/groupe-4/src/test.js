import {data_json} from "./data.js";

const data = data_json
const seuilMouvement = 1000;
const tempsAttente = 60;
const values = Object.values(data);
var index = 0;
var doitAttendre = false;
var compteur = 0;
let image = document.getElementById("img")

const controller = new Leap.Controller();
controller.loop(function(frame) {
    if(!doitAttendre){
    if (frame.hands[0]){
      //console.log(frame.hands[0].palmVelocity);
      //haveLoggedFrame = true;
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

    //console.log(hand.palmVelocity);
    if ((Math.abs(xVelocity) >= seuilMouvement) && Math.abs(xVelocity) >= Math.abs(yVelocity)){
        if (xVelocity>0)
            defilerVersDroite();
        else
            defilerVersGauche();
        return true;
        
    }
    else if (Math.abs(yVelocity) >= seuilMouvement){
        if (yVelocity>0)
            console.log("Détails");
        
        return true;
    }
    return false;
}

function defilerVersGauche(){
    console.log("défiler gauche");
    index = Math.abs((index - 1) % values.length);
    image.src = values[index].Image
}

function defilerVersDroite(){
    console.log("défiler droite");
    index = (index + 1) % values.length;
    image.src = values[index].Image
}

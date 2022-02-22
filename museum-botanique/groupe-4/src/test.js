
const data = {
    "MHNN.B.010101.009":{
        "Collection":"BOURGAULT DUCOUDRAY",
        "DateEntree:":1977,
        "LieuCollecte":"Nantes",
        "DateCollecte":"1851",
        "NomScientifique":"Clematis smilacifolia Wall.",
        "Famille":"Ranunculaceae",
        "PartieConserve":"HerbierFeuille",
        "Rarete":"",
        "Image": "../data/mhnn.b.10101.009.jpg"
    },
    "MHNN.B.010101.013":{
        "Collection":"BOURGAULT DUCOUDRAY",
        "DateEntree:":1977,
        "LieuCollecte":"Nantes",
        "DateCollecte":"00.07.184",
        "NomScientifique":"Clematis bicolor Steud",
        "Famille":"Ranunculaceae",
        "PartieConserve":"Inflorescence",
        "Rarete":"",
        "Image": "../data/mhnn.b.10101.013.jpg"
    },
    "MHNN.B.010101.038":{
        "Collection":"BOURGAULT DUCOUDRAY",
        "DateEntree:":1877,
        "LieuCollecte":"Nantes",
        "DateCollecte":"00.04.1848",
        "NomScientifique":"Anemone stellata Lam. Anemone hortensis L. var. stellata (Lam.) Gren. & Godr.",
        "Famille":"Ranunculaceae",
        "PartieConserve":"InflorescenceFeuille",
        "Rarete":"",
        "Image": "../data/mhnn.b.10101.038.jpg"
    }
}

const seuilMouvement = 1000;
const tempsAttente = 80;
const values = Object.values(data)
var index = 0;
var doitAttendre = false;
var compteur = 0;

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

bouton = document.getElementById("BT")
image = document.getElementById("img")
i = 0
bouton.addEventListener("click", (evt) => {
    i = (i+1)%values.length
    image.src = values[i].Image
})

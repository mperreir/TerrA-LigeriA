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
const values = Object.values(data);
var index = 0;
var doitAttendre = false;
var compteur = 0;

init();

console.log(data)
image = document.getElementById("img")
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

    //console.log(hand.palmVelocity);
    if ((Math.abs(xVelocity) >= seuilMouvement) && Math.abs(xVelocity) >= Math.abs(yVelocity)){
        if (xVelocity>0)
            prevPage();
        else
            nextPage();
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

function init(){
    const book = document.getElementById("book");
    if (values.length>0){
        let div = document.createElement("div");
        div.className="page active";
        div.id = 1;
        div.style="height:100%; width:100%"
        const img = document.createElement("img");
        img.style="display: flex;align-items: center; margin-left: auto; margin-right: auto; height: 100%;width:100%; margin-top: 0; margin-bottom: 0;";
        img.src=values[0].Image;
        div.appendChild(img);
        book.appendChild(div);
    }
    for(let i=1;i<values.length;i++) {
        const div = document.createElement("div");
        div.id = i+1;
        div.className="page";
        div.style="height:100%;width:100%"

        const img = document.createElement("img");
        img.style="display: flex;align-items: center; margin-left: auto; margin-right: auto; height: 100%; width:100%; margin-top: 0; margin-bottom: 0;";
        img.src=values[i].Image;
        div.appendChild(img);
        book.appendChild(div);
    };
}

var currentPage = 1;

function prevPage() {
    if (currentPage > 1){

 /* $("#"+(currentPage-1))
    .toggle();*/

  $('.flipped')
    .last()
    .toggle()
    .toggleClass('flipped active')
    .siblings('.page')
    .removeClass('active');
    currentPage--;
    }
}

function nextPage() {
    if (currentPage < values.length){
  $('.active')
    .toggleClass('active flipped')
    .next('.page')
    .addClass('active');
    setTimeout( ()=>{$('.flipped').last().toggle()} ,1200);

  //$('#'+currentPage).toggle();
    currentPage++;
    }
}
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
var active_slide = 1;

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
        if (active_slide == 2) 
            document.dispatchEvent(new CustomEvent('evtDetails'));
        else if (xVelocity>0)
            document.dispatchEvent(new CustomEvent('prevPage'));
        else
            document.dispatchEvent(new CustomEvent('nextPage'));
        return true;
    }
    else if (Math.abs(yVelocity) >= seuilMouvement){
            document.dispatchEvent(new CustomEvent('evtDetails'));
        return true;
    }
    return false;
}

var currentPage = 1;

document.addEventListener('prevPage', (evt) => {
    if (currentPage > 1){
  $('.flipped')
    .last()
    .toggleClass('flipped active')
    .siblings('.page')
    .removeClass('active');
    currentPage--;
    }
})

document.addEventListener('nextPage', (evt) => {
    if (currentPage < values.length){
  $('.active')
    .toggleClass('active flipped')
    .next('.page')
    .addClass('active');
    currentPage++;
    }
})
let active_slide = 1;

document.addEventListener('evtDetails', (evt) => {
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
        slide.append(generate_table(index))
        
        } else {
            $(".slide[pos='" + active_slide + "']").animate({opacity:0, top: "-10px"}, {duration: speed}).hide(0).animate({top: "10px"});
            active_slide = 1;
            $(".slide[pos='" + active_slide + "']").delay(speed).show(0).animate({opacity: 1, top: "0px"});  
        }
        
})

function  generate_table(ind) {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // creating all cells
    var planteValues = Object.values(values[ind])
    var planteKeys = Object.keys(values[ind])
    for (var i = 0; i < planteValues.length; i++) {
      // creates a table row
      var row = document.createElement("tr");
  
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cellLabel = document.createElement("td");
        var cellText = document.createTextNode(planteKeys[i]);
        cellLabel.appendChild(cellText);
        row.appendChild(cellLabel);

        var cell = document.createElement("td");
        cellText = document.createTextNode(planteValues[i]);
        cell.appendChild(cellText);
        row.appendChild(cell);
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    return tbl;
  }


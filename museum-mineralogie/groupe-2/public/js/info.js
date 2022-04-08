var mydata = JSON.parse(data);
const socket = io();

socket.on("connect", () => {  console.log(socket.id);});

let idPierre;
socket.on('updateInfo', data => {
    console.log(data);
    idPierre = 0; //recuperer la zone dans data
    changePierre(idPierre)

});


function changePierre(idPierre) {
    document.getElementById("nomPierre").innerText = mydata.name;
    document.getElementById("caracteristiques").innerText = mydata.caracteristiques.texture;
    document.getElementById("caracteristiques").innerText = " ";
    document.getElementById("caracteristiques").innerText = mydata.caracteristiques.composition;
    document.getElementById("formation").innerText = mydata.formation;
    document.getElementById("typeDeRoche").innerText = mydata.type;
    document.getElementById("couleur").innerText = mydata.couleur;
    document.getElementById("utilisation").innerText = mydata.utilisation;
}
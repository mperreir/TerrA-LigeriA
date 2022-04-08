const socket = io();

socket.on("connect", () => {  console.log(socket.id);});

let activated = false;

let disappearTimeout = null;

/* On reveille l'appareil */
socket.on('activate', () => {
    activate();
    resetTimeout();
})

/* On met à jour les informations */
socket.on('updateInfo', data => {
    console.log(data);
    if (data && activated) {
        resetTimeout();
        setStoneScreen();
        addDatastone(data);//recuperer le numero de la pierre
        changeBackground(data['carte'])
    }
});

/* Reset le timeout avant standby */
function resetTimeout() {
    if (disappearTimeout)
        clearTimeout(disappearTimeout);
    disappearTimeout = setTimeout(()=> {
        disactivate();
    }, 30000)
}

/* Activation */
function activate() {
    activated = true;
    removeStoneScreen();
    document.querySelector('.carte').setAttribute('style', `background-image : url('/ressources/media/principal.gif');`)
}

/* Desactivation */
function disactivate() {
    removeStoneScreen()
    activated = false;
    document.querySelector('.carte').removeAttribute('style')
}

function setStoneScreen(){
    document.querySelector('.container').classList.add("activated"); 
}

function removeStoneScreen(){
    document.querySelector('.container').classList.remove("activated"); 
}

function addDatastone(mydata){
    document.getElementById("nomPierre").innerText = mydata.name;
    document.getElementById("caracteristiques").innerText = `Texture : ${mydata.caracteristiques.texture}
        Caractéristique : ${mydata.caracteristiques.caracteristiques}
    `
    document.getElementById("formation").innerText = mydata.formation;
    document.getElementById("typeDeRoche").innerText = mydata.type;
    document.getElementById("couleur").innerText = mydata.couleur;
    document.getElementById("utilisation").innerText = mydata.utilisation;
}

function changeBackground(filename){
    document.querySelector('.overlay').setAttribute('style', `background-image : url('/ressources/parts/${filename}');`, );

}

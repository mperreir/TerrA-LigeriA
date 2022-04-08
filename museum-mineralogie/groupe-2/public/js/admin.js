//une variable global qui contient l'heure de la dernière modification
var derniereModif;

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

// Zone methods

function zoneDraw(zone) {
  const label = zoneCreateLabel(zone);
  const rect = zoneCreateRect(zone);

  label.querySelector('.zone-delete').addEventListener('click', () => {
    label.remove();
    rect.remove();
    removeZone(zone);
  });
}

function zoneCreateLabel(zone) {
  let node = document.querySelector('.zone-item.template').cloneNode(true);
  node.querySelector('.zone-color').setAttribute('style', 'background-color : '+zone.color+ ';');
  
  node.querySelector('.zone-stone-id').setAttribute("value", zone.id || "");

  node.setAttribute('data-color', zone.color);

  node.querySelector('.zone-stone-id').addEventListener('input', (e) => {
    zone.id = e.target.value;
    updateZoneId(zone);
  })
  
  node.classList.remove('template')

  document.querySelector('#zone-label').append(node);

  return node;
}

function zoneCreateRect(zone) {
  let rect = document.querySelector('#rect-container > .template').cloneNode(true);
  placeRect(rect, zone.pos, zone.size, zone.color);
  rect.classList.remove('template');
  document.querySelector('#rect-container').append(rect);
  return rect;
}

function zoneGetOverlap(zone, hand) {
  //Convertisseur
  hand.forEach((v) => {
    if (v<0) v = 0;
    if (v>1) v = 1;
  });
  let handPos = [];
  handPos.push((1-hand[1])*600); //handxmin
  handPos.push((1-hand[0])*600); //handxmax
  handPos.push(hand[2]*450); //handymin
  handPos.push(hand[3]*450); //handymax
  let zonePos = [];
  zonePos.push(zone.pos[0]); //zonexmin
  zonePos.push(zone.pos[0]+zone.size[0]); //zonexmax
  zonePos.push(zone.pos[1]); //zoneymin
  zonePos.push(zone.pos[1]+zone.size[1]); //zoneymax

  //Comparateur
  let dx = Math.min.apply(Math, [zonePos[1], handPos[1]]) - Math.max.apply(Math, [zonePos[0], handPos[0]]);
  let dy = Math.min.apply(Math, [zonePos[3], handPos[3]]) - Math.max.apply(Math, [zonePos[2], handPos[2]]);

  if ((dx<0) || (dy<0))
    return 0;
  else
    return (dx*dy) * 100 / (zone.size[0]*zone.size[1]); //Le pourcentage (entre 0 et 100 +/- 1)
}

const randomColor = () => '#'+Math.floor(Math.random()*16777215).toString(16)
  
function placeRect(rect, pos, size, color="white") {
  rect.setAttribute('style', `
    left:${pos[0]}px;
    top:${pos[1]}px;
    width:${size[0]}px;
    height:${size[1]}px;
    border-color:${color};
  `)
}

// Local Storage

const setZone = (d) => window.localStorage.setItem('zones', JSON.stringify(d));
const getZone = () => window.localStorage.getItem('zones')? 
  JSON.parse(window.localStorage.getItem('zones')) : [];
const setZonesActives = (d) => window.localStorage.setItem('actives_zones', JSON.stringify(d));
const getZonesActives = () => window.localStorage.getItem('actives_zones')? 
  JSON.parse(window.localStorage.getItem('actives_zones')) : [];
const clearZonesActives = () => window.localStorage.removeItem('actives_zones');


function addZone(z) {
  const zones = getZone();
  zones.push(z);
  setZone(zones);
}

function removeActiveZone(z) {
  const zones = getZone().filter((e) => e.color !== z.color);
  setZonesActives(zones);
}

function removeZone(z) {
  const zones = getZone().filter((e) => e.color !== z.color);
  setZone(zones);
  clearZonesActives();
}

function updateZoneId(z) {
  const zones = getZone().map((e) => {
    if (e.color === z.color) 
      e["id"] = z.id;
    return e;
  });
  setZone(zones);
}

// Drawing zones

function onPressDrawRectangle(pos) {
  if (firstPos) {
    const zone = {
      color:randomColor(),
      pos:[
        Math.min(firstPos[0], pos[0]),
        Math.min(firstPos[1], pos[1])
      ],
      size:[
        Math.abs(firstPos[0] - pos[0]),
        Math.abs(firstPos[1] - pos[1])
      ],
      id : "-1"
    };

    addZone(zone);

    zoneDraw(zone);

    firstPos = null;
  } else {
    firstPos = pos;
  }
}

// Initialization

const socket = io();
socket.on("connect", () => {
  console.log(socket.id);

  document.getElementById("stone1").addEventListener("click", () => {
    socket.emit("updateStone", {stone:2});
  });
});

// Constants

const video = document.getElementById("myvideo");
const handimg = document.getElementById("handimage");

const canvas = document.getElementById("canvas-video");

let trackButton = document.getElementById("trackbutton");
let nextImageButton = document.getElementById("nextimagebutton");
let updateNote = document.getElementById("updatenote");

video.width = 600
video.height = 450

const modelParams = {
  flipHorizontal: true, // flip e.g for video
  maxNumBoxes: 20, // maximum number of boxes to detect
  iouThreshold: 0.5, // ioU threshold for non-max suppression
  scoreThreshold: 0.6, // confidence threshold for predictions.
};

let firstPos = null;

// Listen when user draw zone
document.querySelector('video').addEventListener('mousedown',(e) => {
  const rect = e.target.getBoundingClientRect();
  const pos = [e.clientX - rect.left, e.clientY - rect.top];
  onPressDrawRectangle(pos);
});

function getZoneFromUnknown(zoneU) {
  return (Array.isArray(zoneU)) ? zoneU[1] : zoneU;
}

function isZoneInsideArray(zoneU,zarray) {
  let zone = getZoneFromUnknown(zoneU);
  zarray.forEach((el) => {
    if(zoneEquals(zone,el[1]))
      return true;
  });
  return false;
}

//Pour chaque main on prend la zone la plus recouverte
function handZoneController(tabHand,tabZone){
  let seuil = 1; // Seuil à partir duquel on change, entre 0 et 40 pour donner une idée
  let tabZonesActives = [] // tableau à retourner
  tabHand.forEach((hand) => {
    let zoneLaPlusCouverte = null;
    tabZone.forEach((zone) => {
      let areaZone = zoneGetOverlap(zone,hand);
      if(areaZone > seuil) {
        if(zoneLaPlusCouverte == null)
          zoneLaPlusCouverte = [areaZone, zone];
        else {
          if((areaZone > zoneLaPlusCouverte[0]))
            zoneLaPlusCouverte = [areaZone, zone];
        }
      }
    });
    if((zoneLaPlusCouverte != null) && !isZoneInsideArray(zoneLaPlusCouverte, tabZonesActives)) {
      tabZonesActives.push(zoneLaPlusCouverte);
    }
  });
  return tabZonesActives;
}

function highlightZone(zone) {
  let zone_items = document.querySelectorAll('.zone-item');

  zone_items.forEach(zi => {
    if (zi.getAttribute('data-color') === zone.color) {
      zi.classList.add('selected');
    } else {
      zi.classList.remove('selected')
    }
  })
}

// Récupère la zone avec la plus grande area
function retrieveMaxArea(newZones){
  let zoneAchanger = null;
  let area = -1;
  newZones.forEach(element => {
    if (zoneAchanger == null){
      zoneAchanger = element[1];
      area = element[0]
    } else {
      if (area < element[0])
        zoneAchanger = element[1];
        area = element[0];
    }
  });
  return zoneAchanger;
}

// Teste l'égalité de deux zones
function zoneEquals(zone1,zone2) {
  return (zone1["id"] === zone2["id"]);
}

// Récupère les nouvelles zones actives
function getDiffZones(zoneActivesActuellement, anciennesZonesActives) {
  let nouvellesZones = [];
  zoneActivesActuellement.forEach((zoneActive) => {
    let possibleRentrer = true;
      anciennesZonesActives.forEach((ancienneZone) => {
        if (zoneEquals(zoneActive[1], ancienneZone))
          possibleRentrer = false;
      });

      if(possibleRentrer) {
        nouvellesZones.push(zoneActive);
      }
        
  });
  return nouvellesZones;
}

/* Event when a hand move*/
document.addEventListener('handsfree-data', event => {
  const data = event.detail;
  if (!data.hands) return;

  let listeCoordonnees = [];
  data.hands.multiHandedness.forEach((item,index) => {
    
    let ys = [handsfree.data.hands.multiHandLandmarks[index][4].y,handsfree.data.hands.multiHandLandmarks[index][12].y,handsfree.data.hands.multiHandLandmarks[index][20].y,handsfree.data.hands.multiHandLandmarks[index][21].y]
    let xs = [handsfree.data.hands.multiHandLandmarks[index][4].x,handsfree.data.hands.multiHandLandmarks[index][12].x,handsfree.data.hands.multiHandLandmarks[index][20].x,handsfree.data.hands.multiHandLandmarks[index][21].x]
    yMin = Math.min.apply(Math, ys);
    yMax = Math.max.apply(Math, ys);
    xMin = Math.min.apply(Math, xs);
    xMax = Math.max.apply(Math, xs);
    listeCoordonnees.push([xMin,xMax,yMin,yMax]);
    //console.log(derniereModif);
  });
  //Récupération des zones
  let zones = getZone();

  //Récupération des zones actives
  let zoneActivesActuellement = handZoneController(listeCoordonnees, zones);
  let anciennesZonesActives = getZonesActives();
  let nouvellesZonesActives = getDiffZones(zoneActivesActuellement,anciennesZonesActives);

  if(nouvellesZonesActives.length <= 0) {
    return;
  }
  
  setZonesActives(zoneActivesActuellement.map((a) => a[1])); // Stocker en cache la zone active
  
  // On prend la zone avec la plus grande zone contact
  let zoneTrigger = {};
  if(nouvellesZonesActives.length == 1) zoneTrigger = nouvellesZonesActives[0][1]
  else {
    let maxArea = retrieveMaxArea(nouvellesZonesActives);
    if(maxArea.length < 1) return;
    zoneTrigger =  maxArea;
  }
  // On affiche la couleur sélectionnée
  highlightZone(zoneTrigger);
  
  // On envoie le signal au serveur
  socket.emit("updateStone", {stone:zoneTrigger["id"]});
});

/* Initialisation Handsfree */
const handsfree = new Handsfree({
  showDebug: false,
  setup: {
    canvas: {
      hands: {
        width: 800,
        height: 450
      }
    },
    video: {
      width: 800,
      height: 450
    }
  },
  hands: { enabled: true,
          // The maximum number of hands to detect [0 - 4]
          maxNumHands: 4,
          // Minimum confidence [0 - 1] for a hand to be considered detected
          minDetectionConfidence: 0.5,
          // Minimum confidence [0 - 1] for the landmark tracker to be considered detected
          // Higher values are more robust at the expense of higher latency
          minTrackingConfidence: 0.5
  }
})

handsfree.start()
window.localStorage.removeItem('actives_zones');

getZone().forEach(z => zoneDraw(z));
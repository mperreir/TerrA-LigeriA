const socket = io();
socket.on("connect", () => {
    console.log("Connecté");
})
const angle_g = document.querySelector('.angle_g');
let last = 43434;

function handleOrientation(event) {

    const angle1 = Math.round(event.alpha); // In degree in the range [0;360]
    angle_g.textContent = `angle: ${angle1}\n`;

    if (last != angle1) {
        socket.emit("hologramme", {
            action: "angle",
            value: angle1
        });
        last = angle1;
    }

}
socket.on("telephone", (data) => {
    if (data.action == 'refresh') {
        window.location.reload(true);
    }
})

window.addEventListener('deviceorientation', handleOrientation);
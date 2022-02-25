window.onload = () => {
    const socket = io();
    
    const nbImageOnithopus = 250;
    const nbImageAngelica = 240;

    const ImagePerAngleOnithopus = nbImageOnithopus / 360;
    const ImagePerAngleAngelica = nbImageAngelica / 360;

    let imagesOrni = [];
    let imagesAngelica = [];

    for (let i = 0; i < nbImageOnithopus; i++) {
        let numImg = "";
        let img = new Image(1920, 1080);
        const basePathOrni = 'images/hologramme/ornithopus/';

        if (i < 10) {
            numImg = "000" + i;
        } else if (i < 100) {
            numImg = "00" + i;
        } else if (i < 1000) {
            numImg = "0" + i;
        } else {
            numImg = "" + i;
        }

        img.src = basePathOrni + numImg + '.png';
        imagesOrni.push(img);
    }

    for (let i = 0; i < nbImageAngelica; i++) {
        let numImg = "";
        let img = new Image(1920, 1080);
        const basePathAngelica = 'images/hologramme/angelica/';

        if (i < 10) {
            numImg = "000" + i;
        } else if (i < 100) {
            numImg = "00" + i;
        } else if (i < 1000) {
            numImg = "0" + i;
        } else {
            numImg = "" + i;
        }

        img.src = basePathAngelica + numImg + '.png';
        imagesAngelica.push(img);
    }

    socket.on('hologramme', (data) => {
        let angle = data.value;
        let numImageToShow = Math.round(angle * ImagePerAngleAngelica);
        document.querySelector('img').src = imagesAngelica[numImageToShow].src;
    })
}
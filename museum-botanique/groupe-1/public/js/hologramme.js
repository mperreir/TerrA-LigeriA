window.onload = () => {
    const socket = io();

    const nbImageOnithopus = 251;
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

    let currentHologramme = "ornithopus";

    socket.on('hologramme', (data) => {

        if (data.action === "hologrammeChange") {

            currentHologramme = data.value;
            document.querySelector('img').src = imagesOrni[0].src;

        } else if (data.action === "angle") {
            let angle = data.value;
            switch (currentHologramme) {
                case "ornithopus":
                    let numImageToShowOrnithopus = Math.round(angle * ImagePerAngleOnithopus);
                    document.querySelector('img').src = imagesOrni[numImageToShowOrnithopus - 1].src;
                    break;
                case "angelica":
                    let numImageToShowAngelica = Math.round(angle * ImagePerAngleAngelica);
                    document.querySelector('img').src = imagesAngelica[numImageToShowAngelica - 1].src;
                    break;
            }

        }

    });

    socket.on('telephone', data => {
        if (data.action = "refresh") {
            switch (currentHologramme) {
                case "ornithopus":
                    document.querySelector('img').src = imagesOrni[0].src;
                    break;
                case "angelica":
                    document.querySelector('img').src = imagesAngelica[0].src;
                    break;
            }
        }
    })
}
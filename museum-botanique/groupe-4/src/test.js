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
    }
}

bouton = document.getElementById("BT")
image = document.getElementById("img")
values = Object.values(data)
i = 0
bouton.addEventListener("click", (evt) => {
    i = (i+1)%values.length
    image.src = values[i].Image
})

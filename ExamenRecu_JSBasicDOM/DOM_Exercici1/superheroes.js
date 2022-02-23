document.addEventListener("DOMContentLoaded", function(event) {
    let jsonObj = {
        "squadName": "Super hero squad",
        "homeTown": "Metro City",
        "formed": 2020,
        "secretBase": "Super tower",
        "active": true,
        "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
            "Immortality",
            "Heat Immunity",
            "Inferno",
            "Teleportation",
            "Interdimensional travel"
            ]
        }
        ]
    };

    let header = document.getElementsByTagName("header")[0]

    let h1 = document.createElement("h1")

    let txt = document.createTextNode(jsonObj.squadName)

    h1.appendChild(txt)

    header.appendChild(h1)

    let p = document.createElement("p")

    let txt2 = document.createTextNode(`Hometown: ${jsonObj.homeTown} // Formed ${jsonObj.formed}`)

    p.appendChild(txt2)

    header.appendChild(p)

});
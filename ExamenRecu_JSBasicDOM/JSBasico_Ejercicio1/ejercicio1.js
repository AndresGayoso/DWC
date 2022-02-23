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
console.log(`-------------------------${jsonObj.squadName}-------------------------`)
console.log(`--------Ciudad de origen: ${jsonObj.homeTown} // Fecha origen: ${jsonObj.formed}--------`)
for(let i = 0; i < jsonObj.members.length;i++){
    console.log(`Nombre: ${jsonObj.members[i].name}`)
    console.log(`Edad: ${jsonObj.members[i].age}`)
    console.log(`Identidad secreta: ${jsonObj.members[i].secretIdentity}`)
    let stringPoderes = ""
    for(let x = 0; x < jsonObj.members[i].powers.length - 1; x++){
        stringPoderes += jsonObj.members[i].powers[x] + ", "
    }
    console.log(`Poderes: ${stringPoderes}${jsonObj.members[i].powers[jsonObj.members[i].powers.length - 1]}`)
    console.log("--------------------------")
}


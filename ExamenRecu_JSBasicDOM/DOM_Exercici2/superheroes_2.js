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

    function insertarSuperheroes(sectionId){
        
        let section = document.getElementById(sectionId)

        for(let i = 0; i < jsonObj.members.length;i++){

            let article = document.createElement("article")

            let h2 = document.createElement("h2")

            let txt = document.createTextNode(jsonObj.members[i].name)

            h2.appendChild(txt)

            let p = document.createElement("p")

            let txt2 = document.createTextNode(`Secret identity: ${jsonObj.members[i].secretIdentity}`)

            p.appendChild(txt2)

            let p2 = document.createElement("p")

            let txt3 = document.createTextNode(`Age: ${jsonObj.members[i].age}`)

            p2.appendChild(txt3)

            let p3 = document.createElement("p")

            let txt4 = document.createTextNode("Superpowers:")

            let ul =  document.createElement("ul")
            for(let x = 0; x < jsonObj.members[i].powers.length;x++){

                let li = document.createElement("li")

                let txt5 = document.createTextNode(jsonObj.members[i].powers[x])

                li.appendChild(txt5)

                ul.appendChild(li)
            }

            p3.appendChild(txt4)
            p3.appendChild(ul)

            article.appendChild(h2)
            article.appendChild(p)
            article.appendChild(p2)
            article.appendChild(p3)

            section.appendChild(article)

        }

        borrarBotonInsertar()

    }


    function borrarBotonInsertar() {
        let boton = document.getElementById('insertar');
        boton.parentNode.removeChild(boton);
    }
function CrearObjeto() {
    var tipoVia;
    var nombreVia;
    var numeroEdificio;
    var codigoPostal;

    while (tipoVia == null) {
        tipoVia = prompt("Introduce el tipo de via:");
        if (tipoVia != null) {
            alert("El dato se ha introducido correctamente");
        } else if (tipoVia == null) {
            alert("Debes introducir un dato");
        }
    }

    while (nombreVia == null) {
        nombreVia = prompt("Introduce el nombre de la via: ");
        if (nombreVia != null) {
            alert("El dato se ha introducido correctamente");
        } else if (nombreVia == null) {
            alert("Debes introducir un dato");
        }
    }

    while (numeroEdificio == null) {
        numeroEdificio = prompt("Introduce el numero del edificio: ");
        if (numeroEdificio != null) {
            alert("El dato se ha introducido correctamente");
        } else if (numeroEdificio == null) {
            alert("Debes introducir un dato");
        }
    }

    while (codigoPostal == null) {
        codigoPostal = prompt("Introduce el codigo postal: ");
        if (codigoPostal != null) {
            alert("El dato se ha introducido correctamente");
        } else if (codigoPostal == null) {
            alert("Debes introducir un dato");
        }
    }

    var edificio = new Edificio(tipoVia, nombreVia, numeroEdificio, codigoPostal);

    return edificio;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColor() {
    document.body.style.backgroundColor = getRandomColor();
}
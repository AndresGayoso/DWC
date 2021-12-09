//Crear el objeto Paciente
function Paciente(numeroRegistro, nombreCompleto, numeroSS, direccion) {
    //Comprobar el numero de registro(si esta mal se deja vacio)
    if (comprobarPatrones(numeroRegistro, "numeroRegistro") == true) {
        this.numeroRegistro = numeroRegistro;
    } else {
        this.numeroRegistro = "";
    }
    //Comprobar el nombre completo(si esta mal se deja vacio)
    if (comprobarPatrones(nombreCompleto, "nombre") == true) {
        this.nombreCompleto = nombreCompleto;
    } else {
        this.nombreCompleto = "";
    }
    //Comprobar el numero de la seguridad social(si esta mal se deja vacio)
    if (comprobarPatrones(numeroSS, "numeroSS") == true) {
        this.numeroSS = numeroSS;
    } else {
        this.numeroSS = "";
    }
    //Comprobar la direccion(si esta mal se deja vacio)
    if (comprobarPatrones(direccion, "direccion") == true) {
        this.direccion = direccion;
    } else {
        this.direccion = "";
    }

    //Modificar y comprobar el numero de registro
    this.modificarNumeroRegistro = (nuevoNumeroRegistro) => {
        if (comprobarPatrones(nuevoNumeroRegistro, "numeroRegistro") == true) {
            this.numeroRegistro = nuevoNumeroRegistro;
        } else {
            this.numeroRegistro = "";
        }
    };
    //Modificar y comprobar el nombre completo
    this.modificarNombreCompleto = (nuevoNombreCompleto) => {
        if (comprobarPatrones(nuevoNombreCompleto, "nombre") == true) {
            this.nombreCompleto = nuevoNombreCompleto;
        } else {
            this.nombreCompleto = "";
        }
    };
    //Modificar y comprobar el numero seguridad social
    this.modificarNumeroSS = (nuevoNumeroSS) => {
        if (comprobarPatrones(nuevoNumeroSS, "numeroSS") == true) {
            this.numeroSS = nuevoNumeroSS;
        } else {
            this.numeroSS = "";
        }
    };
    //Modificar y comprobar la direccion
    this.modificaDireccion = (nuevaDireccion) => {
        if (comprobarPatrones(nuevaDireccion, "direccion") == true) {
            this.direccion = nuevaDireccion;
        } else {
            this.direccion = "";
        }
    };

    //imprimir el numero de registro
    this.imprimirNumeroRegistro = () => console.log(this.numeroRegistro);
    //imprimir el nombre completo
    this.imprimirNombreCompleto = () => console.log(this.nombreCompleto);
    //imprimir el numero de la seguridad social
    this.imprimirNumeroSS = () => console.log(this.numeroSS);
    //imprimir la direccion
    this.imprimirDireccion = () => console.log(this.direccion);

}

const comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {
    let patronNumeroRegistro = /^[A-Z]{3}[0-9]{3}$/; // Contiene el patrón para comprobar el número de registro
    let patronNombreCompleto = /(^[A-Z]{1}[a-z]+)\s[A-Z]{1,2}.$/; // Contiene el patrón para comprobar el nombre
    let patronNumeroSS = /^[0-9]{0,9}$/; // Contiene el patrón para comprobar el número de la seguridad social
    let patronDireccion = /^(C\/|Av\.)[A-Z]{1}[a-z\s]+\,[0-9]+$/; // Contiene el patrón para comprobar la dirección

    //Mapa que contiene los patrones
    let patrones = new Map([
        ['numeroRegistro', patronNumeroRegistro],
        ['nombre', patronNombreCompleto],
        ['numeroSS', patronNumeroSS],
        ['direccion', patronDireccion]
    ]);

    //Segun lo que el usuario pase por parametro en tipoComprobacion, coge una clave y nos da su valor(el patron que debe de seguir) y lo comprueba(devuelve true o false)
    let comprobacion = patrones.get(tipoComprobacion).test(elementoAComprobar);

    //Retornamos lo que nos devuelve la variable comprobacion(true/false)
    return comprobacion //Devolver el valor true si se cumple el patrón y false si no se cumple
}
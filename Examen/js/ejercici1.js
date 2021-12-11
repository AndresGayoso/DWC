/**
 * Función que comprueba si se cumple un patrón de los que tiene almacenados. Es necesario indicar que patrón vamos a 
 * escoger para realizar la comprobación con las siguientes etiquetas: 
 *      1. Si es un número de registro: numeroRegistro
 *      2. Si es un nombre: nombre
 *      3. Si es un número de la seguridad social: numeroSS
 *      4. Si es una dirección: direccion
 * @param {*} elementoAComprobar - Elemento que debe cumplir el patrón que se indique.
 * @param {String} tipoComprobacion - Indica que tipo de elemento se quiere comprobar: numeroRegistro, nombre, numeroSS o direccion
 * @returns {boolean} - Devuelve true si se cumple el patrón y false si no se cumple.
 */
const comprobarPatrones = function (elementoAComprobar,tipoComprobacion) {
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
    return console.log(comprobacion)//Devolver el valor true si se cumple el patrón y false si no se cumple
}

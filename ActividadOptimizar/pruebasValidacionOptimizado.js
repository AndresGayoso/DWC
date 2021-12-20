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

comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {
        let patronNumeroRegistro = /^[0-9]{0,6}$/;
        let patronNombreCompleto = /^[A-ZÁÉÍÓÚÇ][a-záéíóúü]+ [A-ZÁÉÍÓÚÇ]{1,2}\.$/;
        let patronNumeroSS = /^[0-9]{1,9}$/;
        let patronDireccion = /^(C\/|Av\.)[A-ZÁÉÍÓÚÇ][a-záéíóúü]+ ?[a-záéíóúü ]*, [0-9]+$/;

        let patrones = new Map([
                ['numeroRegistro', patronNumeroRegistro],
                ['nombre', patronNombreCompleto],
                ['numeroSS', patronNumeroSS],
                ['direccion', patronDireccion]
        ]);

        return patrones.get(tipoComprobacion).test(elementoAComprobar);
}

var tipo;
var elemento;
var resultadoCorrecto;

var comprobacion = [
        ["numeroRegistro", [
                ["ACD123", true],
                ["AC123", false],
                ["ACGTHT123", false],
                ["145265", false],
                ["ACG124w", false]
        ], ],
        ["nombre", [
                ["Fernández J.", true],
                ["López Ariadna M.", false],
                ["Castillo JL.", true],
                ["Castillo JSL.", false],
                ["López M", false],
                ["Martinez", false],
                ["J.", false]
        ], ],
        ["numeroSS", [
                ["010125789", true],
                ["a14568892", false],
                ["A14589789", false],
                ["0148796", true]
        ], ],
        ["direccion", [
                ["C/Federico lorca, 50", true],
                ["Av.Argentina, 123", true],
                ["C/lorenzo, 3", false],
                ["Av.Gimenez Losantos, 40", true],
                ["C/Almirante 45", false],
                ["C/Almirante", false],
                ["C/45, 45", false]
        ], ]
];

for (let i = 0; i < comprobacion.length; i++) {
        tipo = comprobacion[i][0];
        for (let x = 0; x < comprobacion[i][1].length; x++) {
                elemento = comprobacion[i][1][x][0];
                resultadoCorrecto = comprobacion[i][1][x][1];
                console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` +
                        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
                console.log(`\n`);
        }
}
/**
 * Crea un edificio 
 * @constructor
 * @param {String} tipoVia - Tipo de vía donde se encuentra el edificio
 * @param {String} nombreVia - Nombre de la vía donde se encuentra el edificio
 * @param {Number|String} numeroEdificio - Número del edificio en la vía
 * @param {String} codigoPostal - Código postal en el que se encuentra la vía
 * @property {String} tipoVia - Tipo de vía donde se encuentra el edificio
 * @property {String} nombreVia - Nombre de la vía donde se encuentra el edificio
 * @property {Number|String} numeroEdificio - Número del edificio en la vía
 * @property {String} codigoPostal - Código postal en el que se encuentra la vía
 * @property {Map} mapaPropietariosEdificio - Almacena los propietarios por piso y por planta
 */
function Edificio(tipoVia, nombreVia, numeroEdificio, codigoPostal) {
    this.tipoVia = tipoVia;
    this.nombreVia = nombreVia;
    this.numeroEdificio = numeroEdificio;
    this.codigoPostal = codigoPostal;
    this.mapaPropietariosEdificio = new Map();

    /**
     * Modifica el tipo de vía
     * @param {String} nuevoTipoVia - Tipo de vía nuevo que se va a utilizar
     * @returns {void}
     */
    this.modificarTipoVia = (nuevoTipoVia) => this.tipoVia = nuevoTipoVia;

    /**
     * Modifica el nombre de la vía
     * @param {String} nuevoNombreVia - Nombre de la vía nueva que se va a utilizar
     * @returns {void}
     */
    this.modificarNombreVia = (nuevoNombreVia) => this.nombreVia = nuevoNombreVia;

    /**
     * Modifica el número del edificio en la vía
     * @param {String|Number} nuevoNumeroEdificio - Número del edificio en la vía nuevo que se va a utilizar
     * @returns {void}
     */
    this.modificarNumeroEdificio = (nuevoNumeroEdificio) => this.numeroEdificio = nuevoNumeroEdificio;

    /**
     * Modifica el código postal
     * @param {Number} nuevoCodigoPostal - Código postal nuevo que se va a utilizar
     * @returns {void}
     */
    this.modificarCodigoPostal = (nuevoCodigoPostal) => this.codigoPostal = nuevoCodigoPostal;

    /**
     * Muestra por pantalla el tipo de vía donde se encuentra el edificio
     * @returns {String} 
     */
    this.imprimirTipoVia = () => "Tipo de via: " + this.tipoVia;

    /**
     * Muestra por pantall el nombre de la vía donde se encuentra el edificio
     * @returns {String}
     */
    this.imprimirNombreVia = () => "Nombre de la vía: " + this.nombreVia;

    /**
     * Muestra por pantalla el número del edificio en la vía
     * @returns {String}
     */
    this.imprimirNumeroEdificio = () => "Número del edificio: " + this.numeroEdificio;

    /**
     * Muestra por pantalla el código postal del edificio
     * @returns {String}
     */
    this.imprimirCodigoPostal = () => "Código Postal(CP): " + this.codigoPostal;

    /**
     * Agrega una planta nueva al edificio
     * @param {String|Number} numeroPlanta - Nombre, número o identificador de la planta
     * @returns {void}
     */
    this.agregarPlanta = (numeroPlanta) => {
        if (!this.mapaPropietariosEdificio.has(numeroPlanta)) {
            this.mapaPropietariosEdificio.set(numeroPlanta, new Map())
        };
    }

    /**
     * Agrega una puerta en una planta concreta
     * @param {String|Number} - numeroPlanta Nombre, número o identificador de la planta
     * @param {String|Number} - numeroPuerta Nombre, número o identificador de la puerta
     * @returns {void}
     */
    this.agregarPuerta = (numeroPlanta, numeroPuerta) => {
        if (this.mapaPropietariosEdificio.has(numeroPlanta)) {
            if (!this.mapaPropietariosEdificio.get(numeroPlanta).has(numeroPuerta)) {
                this.mapaPropietariosEdificio.set(numeroPlanta, this.mapaPropietariosEdificio.get(numeroPlanta).set(numeroPuerta, []));
            }
        }

    }


    /**
     * Agrega propietarios al edificio
     * @param {String} nombrePropietario - Nombre del propietario del piso en la puerta y planta indicadas
     * @param {Number|String} numeroPlanta - Número, nombre o identificador de la planta donde se encuentra el piso del propietario a agregar
     * @param {Number|String} numeroPuerta - Número, nombre o identificador de la puerta del piso del propietario a agregar
     */
    this.agregarPropietario = function (nombrePropietario, numeroPlanta, numeroPuerta) {
        if (this.mapaPropietariosEdificio.has(numeroPlanta)) {
            if (this.mapaPropietariosEdificio.get(numeroPlanta).has(numeroPuerta)) {
                if (!this.mapaPropietariosEdificio.get(numeroPlanta).get(numeroPuerta).includes(nombrePropietario)) {
                    this.mapaPropietariosEdificio.get(numeroPlanta).get(numeroPuerta).push(nombrePropietario);
                }
            }
        }
    };

    /**
     * Muestra todos los propietarios del edificio
     * @returns {String} Listado de los propietarios por planta y puerta
     */
    this.imprimirTodosPropietarios = function () {
        let salida = "LISTADO DE PROPIETARIOS: \n";
        for (let [identificadorPlanta, elementosPlanta] of this.mapaPropietariosEdificio) {
            salida = salida.concat(`Planta: ${identificadorPlanta}\n`)
            for (let [identificadorPuerta, elementosPuerta] of elementosPlanta) {
                salida = salida.concat(`\tPuerta: ${identificadorPuerta}\n`);
                for (let propietario in elementosPuerta) {
                    salida = salida.concat(`\t\t${elementosPuerta[propietario]}\n`);
                }
            }
        }
        return salida;
    }
}

//export {Edificio};

/*
const edificio1 = new Edificio('calle', 'marques rubio', 70, '07005');
console.log(edificio1)
edificio1.agregarPlanta('1A');
edificio1.agregarPlanta('1B');
console.log(edificio1);
edificio1.agregarPuerta('1A','3');
edificio1.agregarPuerta('1A','2');
edificio1.agregarPuerta('1B','1')
console.log(edificio1);
edificio1.agregarPropietario('Belén Laserna Belenguer','1A','3');
edificio1.agregarPropietario('Pedro Jimenez Vázquez','1A','3');
edificio1.agregarPropietario('Ana María Rodriguez Figuerola', '1A','2');
edificio1.agregarPropietario('Miguel López López','1B','1');
console.log(edificio1);
console.log(edificio1.imprimirTodosPropietarios());
edificio1.modificarTipoVia('avenida');
edificio1.modificarNombreVia('Marques de la Fontsanta');
edificio1.modificarNumeroEdificio('60A');
edificio1.modificarCodigoPostal('007005');
console.log(edificio1.imprimirTipoVia());
console.log(edificio1.imprimirNombreVia());
console.log(edificio1.imprimirNumeroEdificio());
console.log(edificio1.imprimirCodigoPostal());
*/
//Constructor
function Edificio(tipoVia, nombreVia, numeroEdificio, codigoPostal){
        this.tipoVia = tipoVia;
        this.nombreVia = nombreVia;
        this.numeroEdificio = numeroEdificio;
        this.codigoPostal = codigoPostal;
        this.mapaPropietariosEdificio = new Map();
}

//Agregar la planta al edificio en el mapa
Edificio.prototype.agregarPlanta = function (numeroPlanta) {
    let mapaPlanta = new Map();
    this.mapaPropietariosEdificio.set(numeroPlanta,mapaPlanta);
}

//Agregar la puerta a la planta en el mapa
Edificio.prototype.agregarPuerta = function (numeroPlanta,numeroPuerta){
    this.mapaPropietariosEdificio.get(numeroPlanta).set(numeroPuerta,[]);
}

//Agregar los propietarios a su puerta y planta en el mapa
Edificio.prototype.agregarPropietario = function (nombrePropietario,numeroPlanta,numeroPuerta){
    this.mapaPropietariosEdificio.get(numeroPlanta).get(numeroPuerta).push(nombrePropietario);
}

//Retorna un string con todos los propietarios asignados a su puerta y planta
Edificio.prototype.imprimirTodosPropietarios = function (){
    let KeyPlanta = this.mapaPropietariosEdificio.keys();
    let Planta;
    let KeyPuerta;
    let Puerta;
    let Propietario;
    let resultado = "";
   for(let i = 0; i < this.mapaPropietariosEdificio.size; i++){
        Planta = KeyPlanta.next().value;
        KeyPuerta = this.mapaPropietariosEdificio.get(Planta).keys()
        resultado += "Planta: " + Planta + "\n";
        for(let x = 0; x < this.mapaPropietariosEdificio.get(Planta).size;x++){
            Puerta = KeyPuerta.next().value
            resultado += "\t" + "Puerta: " + Puerta + "\n";
            for(let j = 0; j < this.mapaPropietariosEdificio.get(Planta).get(Puerta).length;j++){
                Propietario = this.mapaPropietariosEdificio.get(Planta).get(Puerta);
                resultado += "\t\t" + Propietario[j] + "\n";
            }
        }
    }
    return resultado;
}

//Retorna string con el tipo de via
Edificio.prototype.imprimirTipoVia = function (){
    return "Tipo de via: " + this.tipoVia;
}

//Retorna string con el nombre de la via
Edificio.prototype.imprimirNombreVia = function (){
    return "Nombre de la via: " + this.nombreVia;
}

//Retorna string con el numero del edificio
Edificio.prototype.imprimirNumeroEdificio = function (){
    return "Numero del edificio: " + this.numeroEdificio;
}

//Retorna string con el codigo postal
Edificio.prototype.imprimirCodigoPostal = function (){
    return "Codigo Postal (CP): " + this.codigoPostal;
}

//Modificamos el tipo de via
Edificio.prototype.modificarTipoVia = function (TipoVia){
    this.TipoVia = TipoVia;
}

//Modificamos el nombre de la via
Edificio.prototype.modificarNombreVia = function (nombreVia){
    this.nombreVia = nombreVia;
}

//Modificamos el numero del edificio 
Edificio.prototype.modificarNumeroEdificio = function (numeroEdificio){
    this.numeroEdificio = numeroEdificio;
}

//Modificamos el codigo postal
Edificio.prototype.modificarCodigoPostal = function (codigoPostal){
    this.codigoPostal = codigoPostal;
}

//Exportamos el objeto con sus funciones
export { Edificio };
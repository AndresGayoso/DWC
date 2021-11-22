function Edificio(tipoVia, nombreVia, numeroEdificio, codigoPostal){
        this.tipoVia = tipoVia;
        this.nombreVia = nombreVia;
        this.numeroEdificio = numeroEdificio;
        this.codigoPostal = codigoPostal;
        this.mapaPropietariosEdificio = new Map();
}

Edificio.prototype.agregarPlanta = function (numeroPlanta) {
    let mapaPlanta = new Map();
    this.mapaPropietariosEdificio.set(numeroPlanta,mapaPlanta);
}

Edificio.prototype.agregarPuerta = function (numeroPlanta,numeroPuerta){
    this.mapaPropietariosEdificio.get(numeroPlanta).set(numeroPuerta,[]);
}

Edificio.prototype.agregarPropietario = function (nombrePropietario,numeroPlanta,numeroPuerta){
    this.mapaPropietariosEdificio.get(numeroPlanta).get(numeroPuerta).push(nombrePropietario);
}

Edificio.prototype.imprimirTodosPropietarios = function (){
    let KeyPlanta = this.mapaPropietariosEdificio.keys();
    let Planta;
    let KeyPuerta;
    let Puerta;
    let Propietario;
    let resultado = "";
    /*let puertas = this.mapaPropietariosEdificio.get().value*/
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


export {Edificio};
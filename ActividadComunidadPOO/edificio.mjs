class Edificio{
    constructor(tipoVia, nombreVia, numeroEdificio, codigoPostal){
        this.tipoVia = tipoVia;
        this.nombreVia = nombreVia;
        this.numeroEdificio = numeroEdificio;
        this.codigoPostal = codigoPostal;
        this.mapaPropietariosEdificio = new Map();
    }
    agregarPlanta(numeroPlanta){
        this.mapaPropietariosEdificio.set(numeroPlanta,this.numeroPlanta = new Map());
    }
    agregarPuerta(numeroPlanta,numeroPuerta){
        this.numeroPlanta.set(numeroPlanta,numeroPuerta = []);
    }
    agregarPropietario(nombrePropietario, numeroPlanta, numeroPuerta){
      
    }
}

export {Edificio};
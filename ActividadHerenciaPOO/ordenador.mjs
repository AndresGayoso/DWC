class Ordenador {
    constructor(marca, modelo, ram, disco, pulgadas) {
        this.marca = marca;
        this.modelo = modelo;
        this.ram = ram;
        this.disco = disco;
        this.pulgadas = pulgadas;
    }
    toString(){
        return (
            "Marca : " + this.marca +
            " Modelo : " + this.modelo +
            " RAM: : " + this.ram +
            " Disco : " + this.disco +
            " Pulgadas : " + this.pulgadas
        )
    }
}

class Portatil{
    constructor(marca, modelo, ram, disco, pulgadas, autonomia){
        this.marca = marca;
        this.modelo = modelo;
        this.ram = ram;
        this.disco = disco;
        this.pulgadas = pulgadas;
        this.autonomia = autonomia;
    }
    toString(){
        return (
            "Marca : " + this.marca +
            " Modelo : " + this.modelo +
            " RAM: : " + this.ram +
            " Disco : " + this.disco +
            " Pulgadas : " + this.pulgadas +
            " Autonomia : " + this.autonomia
        )
    }
}


export { Ordenador , Portatil};
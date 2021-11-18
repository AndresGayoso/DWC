function Ordenador (marca, modelo, ram = 4, disco = 512, pulgadas = 17) {
        this.marca = marca;
        this.modelo = modelo;
        this.ram = ram;
        this.disco = disco;
        this.pulgadas = pulgadas;
}
Ordenador.prototype.toString = function() 
{
    return (
        "Marca: " + this.marca + "\n" +
        "Modelo: " + this.modelo + "\n" +
        "RAM: " + this.ram + "\n" +
        "Disco: " + this.disco + "GB" + "\n" +
        "Pulgadas: " + this.pulgadas + " pulgadas"
        )
}

function Portatil(marca,modelo,ram = 4,disco = 256,pulgadas = 13,autonomia = 4){
    this.__proto__ = new Ordenador(marca,modelo,ram,disco,pulgadas);
    this.autonomia = autonomia;
    this.toString = function () {
        return this.__proto__.toString() + "\n" + "Autonomia: " + this.autonomia;
    }
}

export { Ordenador , Portatil};
class Punto {
    constructor(CoordX, CoordY) {
        this.X = CoordX;
        this.Y = CoordY;
    }
    cambiar(NX,NY){
        this.X = NX;
        this.Y = NY;
    }
    toString(){
        return "(" + this.X + "," + this.Y + ")";
    }
    copia(){
        return new Punto(this.X,this.Y)
    }
    x(){
        this.X = NX;
    }
}
export {Punto};
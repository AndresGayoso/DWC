import {Punto} from "./punto.mjs";

var p = new Punto(1,2);
console.log("p: " + p.toString())
var q = new Punto(6,-3);
console.log("q: " + q.toString());

p.cambiar(-5,2);

var r = p.copia();
console.log("r: " + r.toString());
r.X = 9;

console.log("p: " + p.toString());
console.log("r: " + r.toString());

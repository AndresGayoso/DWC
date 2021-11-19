import { Edificio } from "./edificio.mjs";

const edificio1 = new Edificio('calle', 'marques de la fontsanta', 60, '07005');
console.log(edificio1)

edificio1.agregarPlanta('1A');
edificio1.agregarPlanta('1B');
console.log(edificio1);


edificio1.agregarPuerta('1A','3');
edificio1.agregarPuerta('1A','2');
edificio1.agregarPuerta('1B','1')
console.log(edificio1);
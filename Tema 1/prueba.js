/* mostrar por pantalla */
console.log("Hola desde un archivo externo");

/* Declarar variables */

/* var defines la variable en un ambito global */
var x = 1;
console.log(x);

/* let defines la variable dentro del bloque */
{
    let y = 2;
    console.log(y);
}
/* Aqui fuera ya no funciona el console.log */

/* typeof nos define el tipo de los datos que le insertamos */
console.log(typeof(2));
console.log(typeof(true));
console.log(typeof("andres"));

/* Tipos de declarar una variable */

var nombre1 = "andres";
var nombre2 = 'andres';
var nombre3 = `andres`;

console.log("Mi nombre es " + nombre1);
console.log("Mi nombre es",nombre1)
var edificio1 = `{
    "tipoVia":"Calle",
    "nombreVia":"García Prieto",
    "numeroEdificio": "58A",
    "codigoPostal": "07010",
    "mapaPropietariosEdificio": {
        "A": {
            "1A": ["José Antonio López"],
            "2A": ["Luisa Martínez"],
            "3A": ["Marta Castellón", "José Montero"]
        },
        "B": {
            "1B": [],
            "2B": ["Antonio Pereira"],
            "3B": []
        }
    }
}`;
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
        for (var i = 0; i < 6; i++) {
           color += letters[Math.floor(Math.random() * 16)];
       }
   return color;
   }

   function setRandomColor() {
       document.body.style.backgroundColor = getRandomColor();
   }
/*
var json = JSON.parse(edificio1);

var edificio = new Edificio(json.tipoVia,json.nombreVia,json.numeroEdificio,json.codigoPostal);

console.log(edificio);

console.log(edificio.imprimirTipoVia());
console.log(edificio.imprimirNombreVia());
console.log(edificio.imprimirNumeroEdificio());
console.log(edificio.imprimirCodigoPostal());


var objeto = JSON.parse(edificio1);

console.log(objeto);

var array = Object.entries(objeto.mapaPropietariosEdificio);

console.log(array);

var array2;

for(let i = 0; i < array.length;i++){
    edificio.agregarPlanta(array[i][0])
    array2 = Object.entries(array[i][1])
    for(let j = 0; j < array2.length;j++){
        edificio.agregarPuerta(array[i][0],array2[j][0])
        for(let z = 0; z < array2[j][1].length;z++){
            edificio.agregarPropietario(array2[j][1][z],array[i][0],array2[j][0])
        }
    }
}

var x = edificio.imprimirTodosPropietarios()
console.log(x)
*/
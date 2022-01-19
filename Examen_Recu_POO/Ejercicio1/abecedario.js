const arrayAbecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const mapaAbecedarioUnicode = new Map();

let contador = 0;
for (let i=9398; i<=9423; i++) {
    mapaAbecedarioUnicode.set(`${arrayAbecedario[contador]}`, `&#${i}`);
    contador++;
}

//Arrat donde se guardan las letras que escojamos aleatoriamente
var LetrasAleatorias = new Array();

//Bucle para escoger letras aleatoriamente
for(let i = 0; i < 20; i++){
    Random = Math.floor(Math.random() * (arrayAbecedario.length - 0) + 0)
    LetrasAleatorias[i] = mapaAbecedarioUnicode.get(arrayAbecedario[Random]); 
}

//Ordenamos las letras
var LetrasOrdenadas = LetrasAleatorias.sort()


// Eliminamos las letras repetidas
const sortLetrasUnicas = new Set(LetrasAleatorias);
let arrayLetrasUnicas = [...sortLetrasUnicas];


//Mostrar informacion 
document.write("<h1>20 lletres aleatories</h1>")
for(let i = 0; i < LetrasAleatorias.length; i++){
    document.write(LetrasAleatorias[i])
}

document.write("<h1>Lletres ordenades</h1>")
for(let i = 0; i < LetrasAleatorias.length; i++){
    document.write(LetrasOrdenadas[i])
}

document.write(`<h1>${arrayLetrasUnicas.length} lletres sense repetir</h1>`)
for(let i = 0; i < arrayLetrasUnicas.length; i++){
    document.write(arrayLetrasUnicas[i])
}








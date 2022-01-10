// Funcion que crea las bolas
function Bolles(){
    //Numero de bolas que van a aparecer entre 5 y 15 (random)
    var nBolles = Math.floor(Math.random() * (16 - 5) + 5)

    //Informacion por pantalla
    document.write("<h1>ELIMINAR VALORS REPETITS</h1>");
    document.write("<p>Actualitza la pagina per a mostrar un nou grup de valors...</p>");
    document.write(`<p><strong>Entre aquestes ${nBolles} bolles ...</strong></p>`)

    //Declarar variables
    var nRandom;
    var arrayBolles = new Array(1);

    //Bucle que crea las bolas
    for(let i = 0; i < nBolles;i++){
        //Numero que aparece en la bola entre 1 y 10 (random)
        nRandom = Math.floor(Math.random() * (11 - 1) + 1)
        //Mostrar la bola por pantalla
        document.write(`<div>${nRandom}</div>`)
        //Guardar los numeros en un array
        arrayBolles[i] = nRandom;
    }

    //Creamos un set donde los valores son unicos y metemos nuestro array para que no haya repetidos
    const sortBollesUnicas = new Set(arrayBolles);

    //Creamos un array nuevo con los valores sin repetir
    let arrayBollesUnicas = [...sortBollesUnicas];

    //Informacion por pantalla de las bolas unicas
    document.write(`<p><strong>... hi ha ${arrayBollesUnicas.length} bolles distintes.</strong></p>`)

    //Bucle que crea las bolas unicas
    for(let i = 0; i < arrayBollesUnicas.length; i++){
        //Mostrar la bola por pantalla
        document.write(`<div>${arrayBollesUnicas[i]}</div>`)
    }

}
//Cargar la funcion cada vez que se inicia la pagina
window.onload = Bolles();
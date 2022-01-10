function Bolles(){
    var nBolles = Math.floor(Math.random() * (16 - 5) + 5)

    document.write("<h1>ELIMINAR VALORS REPETITS</h1>");
    document.write("<p>Actualitza la pagina per a mostrar un nou grup de valors...</p>");
    document.write(`<p><strong>Entre aquestes ${nBolles} bolles ...</strong></p>`)

    var nRandom;
    var arrayBolles = new Array(1);

    for(let i = 0; i < nBolles;i++){
        nRandom = Math.floor(Math.random() * (11 - 1) + 1)
        document.write(`<div>${nRandom}</div>`)
        arrayBolles[i] = nRandom;
    }

    const sortBollesUnicas = new Set(arrayBolles);

    let arrayBollesUnicas = [...sortBollesUnicas];

    document.write(`<p><strong>... hi ha ${arrayBollesUnicas.length} bolles distintes.</strong></p>`)

    for(let i = 0; i < arrayBollesUnicas.length; i++){
        document.write(`<div>${arrayBollesUnicas[i]}</div>`)
    }

}
window.onload = Bolles();
//Declarar variable para todas las funciones
var numero;

//Funcion Dlecarada
function Escribir1(){

    //Bucle para sacar 500 numeros
    for(let i = 0;i<500;i++){
        //Sale un numuero del 1 al 10000
        numero = Math.floor(Math.random() * 10000);
        //Mostar el numero y si es par o impar
        document.write(numero,ParImpar(),"<br>");
    }

}

//Funcion para saber si es par o impar
function ParImpar(){
    //Si es divisible entre 2 devuelve "es par" sino devuelve "es impar"
    if(numero % 2 == 0){
        return " es par";
    }else{
        return " es impar";
    }
}

//Funcion Anonima
function Escribir2(){

    //Bucle para sacar 500 numeros
    for(let i = 0;i<500;i++){
        //Sale un numuero del 1 al 10000
        numero = Math.floor(Math.random() * 10000);
        //Mostar el numero y si es par o impar
        document.write(numero,Comprovar(),"<br>");
    }

}

//Damos un nombre a la funcion (Nos dice si es par o impar)
const Comprovar = function ParImpar(){
    //Si es divisible entre 2 devuelve "es par" sino devuelve "es impar"
    if(numero % 2 == 0){
        return " es par";
    }else{
        return " es impar";
    }
}

//Funcion Flechitas
function Escribir3(){

    //Bucle para sacar 500 numeros
    for(let i = 0;i<500;i++){
        //Sale un numuero del 1 al 10000
        numero = Math.floor(Math.random() * 10000);
        //Mostar el numero y si es par o impar
        document.write(numero,parImpar(),"<br>");
    }

}

//Creamos la funcion pero con flechas (Nos dice si es par o impar)
const parImpar = () =>{
    //Si es divisible entre 2 devuelve "es par" sino devuelve "es impar"
    if(numero % 2 == 0){
        return " es par";
    }else{
        return " es impar";
    }
}
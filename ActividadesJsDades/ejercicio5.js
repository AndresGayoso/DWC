function verificacion(){

    //Variable para que acabe el bucle
    var verificar = false;

    //Contraseña
    var passwd;

    //variables para ver si se cumplen los requisitos
    var minuscula = false;
    var mayuscula = false;
    var numero = false;
    var simbolo = false

    //Variables para verificar
    var mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    var minusculas = "abcdefghijklmnñopqrstuvwxyz";
    var numeros = "0123456789";
    var simbolo = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789"

    //Contador
    var x = 0;

    //Nombre de usuario
    var usuario = prompt("Escribe el nombre de usuario");

    //Cancela el programa
    if(usuario == null){
        document.write("Se ha acabado el programa")
        verificar = true;
    }

    //Bucle para verificar la contraseña
    while(verificar == false){

        passwd = prompt("Escribe una contraseña");
        
        if (passwd == null){
            document.write("Se ha acabado el programa");
            verificar = true;
        }       

        bucle1:
        for(let i = 0; i < passwd.length;i++){
            for(let x = 0; x < mayusculas.length;x++){
                if(passwd.charAt(i) == mayusculas.charAt(x)){
                    mayuscula = true;
                    break bucle1;
                }
            }
        }

        bucle2:
        for(let i = 0; i < passwd.length;i++){
            for(let x = 0; x < minusculas.length;x++){
                if(passwd.charAt(i) == minusculas.charAt(x)){
                    minuscula = true;
                    break bucle2;
                }
            }
        }

        bucle3:
        for(let i = 0; i < passwd.length;i++){
            for(let x = 0; x < numeros.length;x++){
                if(passwd.charAt(i) == numeros.charAt(x)){
                    numero = true;
                    break bucle3;
                }
            }
        }

        for(let i = 0; i < passwd.length;i++){
            if(simbolo.indexOf(passwd.charAt(i)) == -1 ){
                simbolo = true;
                break;
            }            
        }

        if(minuscula == true && mayuscula == true && numero == true && simbolo == true){
            document.write("Usuario: ",usuario);
            document.write("<br>Contraseña: ",passwd);
            document.write("<br>Los datos se han almacenado correctamente");
            verificar = true;
        }

    }

}
window.onload = verificacion();
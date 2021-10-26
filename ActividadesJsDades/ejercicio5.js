function verificacion(){

    //Variable para que acabe el bucle
    var verificar = false;

    //Contraseña
    var passwd;

    //variables para ver si se cumplen los requisitos
    var comprobar = 0;

    //Variables para verificar
    var mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    var minusculas = "abcdefghijklmnñopqrstuvwxyz";
    var numeros = "0123456789";
    var simbolos = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789"

    //Nombre de usuario
    var usuario = prompt("Escribe el nombre de usuario");

    //Cancela el programa
    if(usuario == null){
        document.write("Se ha acabado el programa")
        verificar = true;
    }

    //Bucle para verificar la contraseña
    while(verificar == false){

        //Escribimos la contraseña
        passwd = prompt("Escribe una contraseña");
        
        //Cancela el programa
        if (passwd == null){
            document.write("Se ha acabado el programa");
            verificar = true;
        }       

        //Verificar minusculas
        for(let i = 0; i < passwd.length;i++){
            if(minusculas.indexOf(passwd.charAt(i)) != -1 ){
                comprobar++;
                break;
            } 
        }

        //Verifica mayusculas
        for(let i = 0; i < passwd.length;i++){
            if(mayusculas.indexOf(passwd.charAt(i)) != -1 ){
                comprobar++;
                break;
            } 
        }

        //Verifica numeros
        for(let i = 0; i < passwd.length;i++){
            if(numeros.indexOf(passwd.charAt(i)) != -1 ){
                comprobar++;
                break;
            } 
        }

        //Verifica simbolos
        for(let i = 0; i < passwd.length;i++){
            if(simbolos.indexOf(passwd.charAt(i)) == -1 ){
                comprobar ++;
                break;
            }            
        }

        //Si todo esta correcto mostramos el texto y acaba el programa
        if(comprobar == 4){
            document.write("Usuario: ",usuario);
            document.write("<br>Contraseña: ",passwd);
            document.write("<br>Los datos se han almacenado correctamente");
            verificar = true;
        }

    }

}
window.onload = verificacion();
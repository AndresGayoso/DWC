function verificacion(){

    var passwd;

    var verificar = false;

    var comprobar;

    var usuario = prompt("Escribe el nombre de usuario");

    if(usuario == null){
        document.write("Se ha acabado el programa")
        verificar = true;
    }

    while(verificar == false){

        passwd = prompt("Escribe una contraseña");

        passwd = String(words).trim();
        
        if (passwd == null){
            document.write("Se ha acabado el programa");
            verificar = true;
        }

        var comprobar = /^[a-zA-Z0-9_]+$/;

        comprobar.test(passwd);
        
        document.write(comprobar);

    }





}
window.onload = verificacion();
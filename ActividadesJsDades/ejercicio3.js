function loteria(){
    
    var loteria = "";
    var a = "1";
    var b = "2";
    var c = "3";
    var d = "4";
    var e = "5";
    var f = "6";

    while(a <= 44){
        loteria = a + b;
        document.write((a +" "+ b + " " + c + " " + d + " " + e + " " + f));
        document.write("<br>");
        if(b == 45){
            b = a + 1;
            a++;
        }
        if(c == 46){
            c = b + 1;
            b++; 
        }
        if(d == 47){
            d = c + 1;
            c++; 
        }
        if(e == 48){
            e = d + 1;
            d++; 
        }
        if(f == 49){
            f = e + 1;
            e++;
        }
        f++;
    }



}
window.onload = loteria();
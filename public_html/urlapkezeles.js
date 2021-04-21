window.addEventListener("load",init);

function ID(nev){
    return document.querySelectorAll(nev);
}

function ID(nev){
    return document.querySelectorAll(nev);
}

function init(){
    ID("kuld").addEventListener("click",validalas);
}

function validalas(){
    // console.log("validáció");
    // legalabb 3 hosszusagu
    // nagybetuvel kezdodik
    //legyen benne szokoz
        var uzenet = "";
        if (ID("nev").value.length < 3) {
            uzenet = "A név legalább 3 karakter hosszú legyen! <br>";
            ID("nev").style.border="2px solid red";
        }else {
            ID("nev").style.border="none";
            
        }
        
        var reg=/[A-Z]+[a-z]{2,}/;
        if (!reg.test(ID("nev").value)) {
            uzenet = "A név legalább 3 karakter hosszú legyen! A név nagybetűvel kell kezdődjön! <br>";
            ID("nev").style.border="2px solid red";
    }else {
            ID("nev").style.border="none";
            megadottAdatok+="Név: "+ID("nev").value + "<br>"
        }
        
        
        
        var tel = /[0-9]{2} [0-9]{3} [0-9]{4}/;
    if (!phone.test(ID("nev").value)) {
        uzenet += " + jellel kezdődjön és legyen köztük kötőjel! <br>";
        ID("phone").style.border = "2px solid red";
    } else {
        ID("phone").style.border = "none";
        megadottAdatok += "Telefon: " + ID("phone").value + "<br>";

    }
        
        var email = /b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/b;
    if (!email.test(ID("email").value)) {
        uzenet += "Kötelező @ jel használata és . jel után kettő karakter szerepelhet <br>";
        ID("email").style.border="2px solid red";
    }
    else{
        ID("email").style.border="none";
        magadottAdatok += "E-mail: "+ ID("email").value+"<br>";
    }
        
        
        
        
        
        
   //  console.log(uzenet);
       $("aside section:nth-child(1) p")[0].innerHTML=uzenet;
       $("aside section:nth-child(2) p")[0].innerHTML=megadottAdatok;
       
        
}


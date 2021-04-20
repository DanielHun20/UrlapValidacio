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
        
        
        
   //  console.log(uzenet);
       $("aside section:nth-child(1) p")[0].innerHTML=uzenet;
       $("aside section:nth-child(2) p")[0].innerHTML=megadottAdatok;
       
        
}


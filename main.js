var carName="volvo";
// alert(carName)// popap çıkartma
console.log("volvo") //concolda inceleyebilir

function isimGeetir(isim){
    var soyisim="";
    if(isim=="yalcin"){
soyisim="şimşek";
    }
    else if(isim=="telat"){
        soyisim="kaya"
    }else{
        soyisim="şahiner"
    }
    document.getElementById("demo").innerHTML =soyisim;
}
isimGeetir("yalcin")

var a,b,c;
a=5;
b=10;
c=a+b;
document.getElementById("topla").innerHTML=c;

var a,b,c;
a=2; b=5; c=b-a;
document.getElementById("cıkar").innerHTML=c;
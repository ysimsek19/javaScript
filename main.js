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
b=120;
c=a+b;
document.getElementById("topla").innerHTML=c;

var a,b,c;
a=2; b=5; c=b-a;
document.getElementById("cıkar").innerHTML=c;



    /*var sayi,karesi; 
    sayi=5;
    karesi=sayi*sayi;
}document.getElementById("kare").innerHTML=karesi;*/

var sayi=8;
document.getElementById("kare").innerHTML =sayi ** 2;


/*var karesiniAl=function(sayi){
    return sayi*sayi
};
var x=karesiniAl(5)
document.getElementById("karesi").innerHTML=karesiniAl;*/

function karesii(x) {
    return x * x;              
}
//alert("sonuc...:"+karesii(6));

var pi=3;

function alan(x){
   
    var sonuc="";
    sonuc=pi*(x**2)
    alert(sonuc);
    return sonuc
}
//alan(5)

function yamukalan(x,y,z){
    var sonuc="";
    sonuc=((x+y)/2)*z
    alert(sonuc);
    return sonuc
}
yamukalan(5,5,5)

function dilimAlan(a,x){

    var sonuc="";
    sonuc=(a/360)*(pi*(x**2))
    return sonuc;
}
document.getElementById("mod").innerHTML="dilim alan"+dilimAlan(36,10)

function altıgenalan(a){
    var sonuc="";
    sonuc=6*((a*2)/4)
    return sonuc;
} document.getElementById("altıgen").innerHTML="altıgen sonuc"+" "+altıgenalan(5);

function kupalan(a){
    var ksonuc="";
    ksonuc=6(a*a);
    
}//document.getElementById("kup").innerHTML="kup alan"+" " + kupalan(5);


function pkenar(a,h,id){
    
    var psonuc="";
    psonuc=a*h;

    document.getElementById(id).innerHTML="paralel kenar sonucu"+" "+psonuc
}    
pkenar(5,10,"paralelkenar");



function digDortgenAlan(uzun,kısa){
    var sonuc="";
    var uzun="uzunKenar";
    var kısa="kısaKenar";
    sonuc=uzun*kısa;
    return sonuc;
    
}//document.getElementById("digdortgen").innerHTML="dikdörtgen alan"+sonuc;

function digDortCevre(a,b){
    var sonuc="";
    sonuc=(a+b)*2;
    alert(sonuc);
    return sonuc;
    
}digDortCevre(5,10)


function caphesapla(){ //cçemberin alanını hesaplama
    //text kutusu içindeki değerleri okuyup sayi1,sayi2 değişkenine aktarıyoruz.
    var yaricap=document.getElementById("ycap").value;
    var piS=document.getElementById("pi").value;
    //text kutusuna girilen değerler metinsel türdedir. Hesaplama yapabilmek için sayıya çeviriyoruz.
    var ccap="";
    ccap=(yaricap**2)*piS;
    //var cevre=(sayi1+sayi2)*2;
    //console.log(ccap)
    
    document.getElementById("capsonuc").value=ccap
     
    }


    function uhesapla(){
        var taban=document.getElementById("taban").value;
        var yukseklik=document.getElementById("yukseklik").value;

        var ualan="";
        ualan=(taban*yukseklik)/2;
        document.getElementById("ualansonuc").value=ualan;
    }


function degerdegistir(){    // ilk başta 3 modelinde gözükmesini istiyoruz
var cars = ["Saab", "Volvo", "BMW"];

var ydeger=document.getElementById("deger").value;
cars[0] = ydeger;
document.getElementById("modeller").innerHTML = cars;

}

    function hesapla(){
        //text kutusu içindeki değerleri okuyup sayi1,sayi2 değişkenine aktarıyoruz.
        var sayi1=document.getElementById("kenar1").value;
        var sayi2=document.getElementById("kenar2").value;
         
        //text kutusuna girilen değerler metinsel türdedir. Hesaplama yapabilmek için sayıya çeviriyoruz.
        
         
        var alan=sayi1*sayi2;
        var cevre=(sayi1+sayi2)*2;
        //alert("Dikdörtgenin alanı:"+alan+" \n Dikdörtgenin çevresi:"+cevre);
         
        }
        

var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("fordongu").innerHTML = text;



function toplamtutar(){ 
    
    var pizza=document.getElementById("pizza").value;
    var durum=document.getElementById("durum").value;
    var pizzaex=document.getElementById("pizzaex").value;
    var kola=document.getElementById("kola").value;

var pizzatoplam=parseInt(pizza)*parseInt(document.querySelector('input[name="islem"]:checked').value);
    var thesap="";
    //thesap=parseInt(pizzatoplam)+(parseInt(durum)*16)+(parseInt(pizzaex)*3)+(parseInt(kola)*9);
    thesap=parseInt(pizzatoplam)+parseInt(pizzaex*3)+parseInt(durum*16)+parseInt(kola*9)
    document.getElementById("tutar").value=thesap;
    
} 


function myFunction(){
    
    var fiyat=document.querySelector('input[name="islem"]:checked').value;
    var pizza=document.getElementById("pizza").value;
document.getElementById("pizzafiyati").innerHTML=parseInt(fiyat)*parseInt(pizza);



}

function secilen(){
    var radios = document.querySelectorAll('input[type=radio][name="islem"]');
    document.getElementById("secimfiyati").innerHTML=parseInt(fiyat)*parseInt(pizza);
}
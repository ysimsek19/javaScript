
$("#secim").change(function () {
    var data = $(this).val();
    var resim = $(this).find(":selected").attr("data-resim");
    var malzeme = $(this).find(":selected").attr("data-malzeme");



    if(data != 0){
        $(".pizza").attr("src", resim);
        $(".malzeme").html(malzeme)
    }
        else{
            $(".pizza").attr("src", "https://img.lovepik.com/free_png/32/42/82/20v58PICD9d7z4V41T3Ui_PIC2018.png_860.png");
            $(".malzeme").html('')



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
    var radios = document.querySelectorAll('input[type=radio][value="25"]');
    document.getElementById("secimfiyati").innerHTML=parseInt(fiyat)*parseInt(pizza);
}

$(document).ready(function () {
       $('input[type=radio]').click(function () {
          // document.getElementById('price').innerHTML = $(this).val();
          
          var val1=$(this).val();
          if(val1=="25"){
              $(".resiml").attr("src","image/pizzaL.png")
          }
          else if(val1=="20"){
            $(".resimm").attr("src","image/pizzaM.png")
          }
          else if(val1=="15"){
            $(".resims").attr("src","image/pizzaS.png")  
          }
          var pizza=document.getElementById("pizza").value;
          document.getElementById("pizzafiyati").innerHTML=parseInt(val1)*parseInt(pizza);
       });

   });


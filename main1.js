
$("#secim").change(function () {
    var data = $(this).val();
    var resim = $(this).find(":selected").attr("data-resim");
    var resimm = $(this).find(":selected").attr("data-resim");
    var resims = $(this).find(":selected").attr("data-resim");
    var malzeme = $(this).find(":selected").attr("data-malzeme");
    var boyfiyat = $(this).find(":selected").attr("data-fiyat");
    var pyt=boyfiyat.split(",");
    

    
    
        $("#buyuk").val(pyt[0]);
        $("#orta").val(pyt[1]);
        $("#kucuk").val(pyt[2]);

        
       


    if(data != 0){
        $(".pizza").attr("src", resim);
        $(".resimm").attr("src", resimm);
        $(".resims").attr("src", resims);
        $(".malzeme").html(malzeme);
       
    }
        else{
            $(".pizza").attr("src", "https://img.lovepik.com/free_png/32/42/82/20v58PICD9d7z4V41T3Ui_PIC2018.png_860.png");
            $(".malzeme").html('')}







function secilen(){
    var radios = document.querySelectorAll('input[type=radio][value="25"]');
    document.getElementById("secimfiyati").innerHTML=parseInt(fiyat)*parseInt(pizza);
}

$(document).ready(function () {

   
       $('input[type=radio]').click(function () {
          // document.getElementById('price').innerHTML = $(this).val();
          
          var val1=$(this).val();
          if(val1=="25"){
              $(".resiml").attr("src","image/karışıkpizza.png")
          }
          else if(val1=="20"){
            $(".resimm").attr("src","image/karışıkpizza.png")
          }
          else if(val1=="15"){
            $(".resims").attr("src","image/karışıkpizza.png")  
          }else{
              
          }

          



          var pizza=document.getElementById("pizza").value;
          document.getElementById("pizzafiyati").innerHTML=parseInt(val1)*parseInt(pizza);
       });

   });
});

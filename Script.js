$(document).ready(function() {

$('#btn2').click(function(){

        if ($('body').css('background-color') === 'rgb(255, 255, 255)'){

            $('body').css('background-color','black');
            $('#btn2').css('background-color','white');
            $('#btn2').css('color','black');


            
        } else{

            $('body').css('background-color','rgb(255, 255, 255)');
            $('#btn2').css('background-color','black');
            $('#btn2').css('color','white');


           
        }
 
   })


    
   $('#btn1').click(function() {
   
   
   
    $(' html , body ').animate({scrollTop : 0} , 800)
   
})


})


  








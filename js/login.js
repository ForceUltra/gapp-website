$(document).ready(funktion(){

  var ud_status = false;

  $('ud_click').stop().on('click', function(){
    $(this).fadeOut(300);
    if(ud_status == false){

      $('#ud_button').addClass('ud_aktive_1');
      setTimeout(function(){
        $('#ud_button').addClass('ud_aktive');
      },250)
      ud_status = true;
    }
  });

  $('ud_close').stop().on('click', function(){
    if(ud_status == true){

      $('#ud_button').removeClass('ud_aktive');
      $('ud_click').fadeIn(300);
      setTimeout(function(){
        $('#ud_button').removeClass('ud_aktive_1');
      },250)
      ud_status = false;
    }
  });

});

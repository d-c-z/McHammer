 $(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider({
        indicators:false,
        interval:2000,
        duration:2000
    });
    $('.tabs').tabs({
        duration: 500
    });
    $('.collapsible').collapsible();
    $('input.autocomplete').autocomplete({
      minLength: 3,
      data: {
        "Diseño Web": null,
        "Redes de Datos": null,

      },
    }); 
  });
        
$(document).ready(function() {
  setInterval(function() {
    $('.menu-slider .menu:first').animate({
      marginLeft: '-300px'
    }, 500, function() {
      $(this).detach().appendTo('.menu-slider').removeAttr('style');
    });

    $('.menu-slider .menu:first').addClass('active');
  }, 3000);
});
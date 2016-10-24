'use strict'

$(function() {
  $('.slider').unslider({
    arrows: false,
    dots: true,
    speed: 500
    // fluid: true
  });

  $(window).on('scroll', function() {
    console.log($(this).scrollTop());
    if ($(this).scrollTop() > 150) {
        // not fast...
      $("header nav").animate({backgroundColor: '#000'}, 50);
    } else {
      $("header nav").animate({backgroundColor: 'rgba(0, 0, 0, 0)'}, 50);
      // $("header nav").removeClass("fadeIn").fadeOut().addClass(fadeOut)
      // $("header nav").addClass("fadeOut")
    }
  })

  $("section .btn").click(function(){
    // not slow enough!
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  })
});
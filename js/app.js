'use strict';

$(function() {
  $('.slider').unslider({
    arrows: false,
    dots: true,
    speed: 500,
    autoplay: true
  });

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 150) {
      $("header nav").animate({backgroundColor: '#000'}, 40);
    } else {
      $("header nav").animate({backgroundColor: 'rgba(0, 0, 0, 0)'}, 40);
    }
  });

  $("section .btn").click(function(){
    $('html,body').animate({ scrollTop: 0 }, 1000);
  });
});
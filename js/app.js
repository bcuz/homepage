'use strict'

$(function() {
  $('.slider').unslider({
    arrows: false
    // fluid: true
  });

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 150) {
      $("header nav").addClass("fadeIn")
    } else {
      $("header nav").removeClass("fadeIn")
      // $("header nav").addClass("fadeOut")
    }
  })


});
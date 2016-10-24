'use strict'

$(function() {

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 150) {
      $("header nav").addClass("fadeIn")
    } else {
      $("header nav").removeClass("fadeIn")
      // $("header nav").addClass("fadeOut")
    }
  })

  $('.slider').unslider({
    arrows: false
    // fluid: true
  });

});
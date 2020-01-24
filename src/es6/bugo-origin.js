/**
 * app.js
 * version: 1.0
 * * You can use ES6 Javscript here
 * * All ES6 is transpiles based on .browserlistrc
 * * Transpiled file is copied to /assets/js/app.js for bundling in Hugo
 *
 **/

// Import Modules
import $ from "jquery";
import WebFont from "webfontloader";
import animateScrollTo from 'animated-scroll-to';



//Load fonts
WebFont.load({
  google: {
    families: window.fontFamilies
  }
});



// On Document Ready
$(document).ready(function () {
  // Mobile navigation
  $('.toggler').on('click', function (e) {
    e.preventDefault();
    const target = $(this).attr('data-target');
    const targetClass = $(this).attr('data-target-class');
    $(target).toggleClass(targetClass);
  })

  // Smooth ScrollTo
  $('a[href^="#"][role!="button"][role!="menuitem"]').on('click', function (e) {
    console.log(this);
    e.preventDefault();
    let target = $(this).attr('href');
    if ($(target)[0]) {
      animateScrollTo(document.querySelector(target));
    }
  });


  // Add scrolled class to body for fixed headers
  // you can use the class to add backgrounds, hide, etc.
  $(window).on('scroll', function () {
    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > 0) {
      $('.site-header').addClass('scrolled');
    } else {
      $('.site-header').removeClass('scrolled');
    }
  });
});

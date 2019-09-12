//Load fonts
WebFont.load({
  google: {
    families: fontFamilies
  }
});



// On Document Ready
$(document).ready(function () {

  // WooCommerce FlexSlider
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: true,
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a"),
  });

  $('.slideshow').on('mouseenter', function () {
    $(this).addClass('hover');
  });

  $('.slideshow').on('mouseout', function () {
    $(this).removeClass('hover');
  });

  // Mobile navigation
  $('.toggler').on('click', function (e) {
    e.preventDefault();
    $('.open').removeClass('open');
    const target = $(this).attr('data-target');
    const targetClass = $(this).attr('data-target-class');
    $(target).toggleClass(targetClass);
  })




  // Smooth ScrollTo
  $('a[href*="#"][role!="button"]').on('click', function (e) {
    console.log(this);
    e.preventDefault();
    let target = $(this).attr('href');
    console.log(target);
    // animateScrollTo($(target));
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

  $('.dropdown-trigger').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $thisDropdown = $(this).siblings('.dropdown-menu');
    console.log('clicked');
    if(!$this.hasClass('hasParent')){
      $('.open').not($thisDropdown).toggleClass('open');
    }else{
      $('.open').not($thisDropdown).not($this.parents()).toggleClass('open');
    }
    $thisDropdown.toggleClass('open');
    return false;
   });


   $('.nav-link:not(.hasParent)').on('click',function(){
    console.log($(this).attr('data-target'));
    // $('.open').toggleClass('open');
  })

});



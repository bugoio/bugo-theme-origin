// jquery
// import validator from 'validator';                // javascript form validator - https://www.npmjs.com/package/validator
// import YouTubePlayer from 'youtube-player';       // YouTube player - https://www.npmjs.com/package/youtube-player
import WebFont from 'webfontloader';              // Web Font Loader - https://www.npmjs.com/package/webfontloader
import animateScrollTo from 'animated-scroll-to'; // Animate scroll to 
import $ from 'jquery';
import Swal from 'sweetalert2';
import 'slick-carousel';
// import { brotliDecompressSync } from 'zlib';

// require("../../static/assets/css/main.css");

//Load fonts
WebFont.load({
  google: {
    families: ["Roboto"]
  }
});

//modals

// Swal.fire({
//   title: 'Submit your Github username',
//   input: 'text',
//   inputAttributes: {
//     autocapitalize: 'off'
//   },
//   showCancelButton: true,
//   confirmButtonText: 'Look up',
//   showLoaderOnConfirm: true,
//   preConfirm: (login) => {
//     return fetch(`//api.github.com/users/${login}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(response.statusText)
//         }
//         return response.json()
//       })
//       .catch(error => {
//         Swal.showValidationMessage(
//           `Request failed: ${error}`
//         )
//       })
//   },
//   allowOutsideClick: () => !Swal.isLoading()
// }).then((result) => {
//   if (result.value) {
//     Swal.fire({
//       title: `${result.value.login}'s avatar`,
//       imageUrl: result.value.avatar_url
//     })
//   }
// })

//show outline if user is tabbing



// On Document Ready
$(document).ready(function () {

  //mobile navigation
  $('.toggler').on('click', function () {
    const target = $(this).attr('data-target');
    const targetClass = $(this).attr('data-target-class');
    $(target).toggleClass(targetClass);
  })
  
  $('.slideshow').slick({
    accessibility: true,
    autoplay: false,
    prevArrow: '<button type="button" class="slick-prev"><svg width="40" height="40" viewBox="0 0 512 512" class="previous icon arrow-left"><use xlink:href="#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="40" height="40" viewBox="0 0 512 512" class="next icon arrow-right"><use xlink:href="#arrow-right"></use></svg></button>',
  });

  //automatically animate links to anchors
  $('a[href*="#"][role!="button"]').on('click', function (e) {
    console.log(this);
    e.preventDefault();
    let target = $(this).attr('href');
    console.log(target);
    // animateScrollTo($(target));
    animateScrollTo(document.querySelector(target));
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
    console.log('clicked');
    $(this).siblings('.dropdown-menu').toggleClass('open');
    return false;
   });


  // const $video_player = $('#video-player');
  // console.log($video_player);
  // if ($video_player.length > 0) {
  //   const player = YouTubePlayer('video-player');
  //   console.log('document ready');

  //   $('#VideoModal').on('show.bs.modal', function (e) {
  //     const playing_id = $(this).attr('data-playing');
  //     const video_id = $(e.relatedTarget).attr('data-video-id');
  //     console.log(playing_id, video_id);
  //     if (typeof (playing_id) == 'undefined' || playing_id !== video_id) {
  //       $(this).attr('data-playing', video_id);
  //       player.loadVideoById(video_id);
  //       player.playVideo();
  //     } else {
  //       player.playVideo();
  //     }
  //   });
  //   $('#VideoModal').on('hide.bs.modal', function (e) {
  //     player.pauseVideo();
  //   });
  // }

  // carouselNormalization();

});


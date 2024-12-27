
$(document).ready(function () {
  "use strict";

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;

  // $("#header").html('<p>afsafdsafdafadsfadf</p>');
  var headerHtml = '<div class="header-top">';
  headerHtml += '<div class="container">';
  headerHtml += '<div class="row">';
  headerHtml += '<div class="col-lg-6 col-sm-6 col-4 header-top-left no-padding">';
  headerHtml += '<ul>';
  headerHtml += '<li><a href="" target="_blank"><i class="fa fa-facebook"></i></a></li>';
  headerHtml += '<li><a href="#"><i class="fa fa-twitter"></i></a></li>';
  headerHtml += '<li><a href="#"><i class="fa fa-instagram"></i></a></li>';
  headerHtml += '</ul>';
  headerHtml += '</div>';
  headerHtml += '<div class="col-lg-6 col-sm-6 col-8 header-top-right no-padding">';
  headerHtml += '<a href="tel:+919700502502">+919700502502</a>';
  headerHtml += '<a href="mailto:tnikhil22@gmail.com"><i class="fa fa-envelope"></i> Mail Us</a>';
  headerHtml += '</div>';
  headerHtml += '</div>';
  headerHtml += '</div>';
  headerHtml += '</div>';
  headerHtml += '<div class="container main-menu">';
  headerHtml += '<div class="row align-items-center justify-content-between d-flex">';
  headerHtml += '<div id="logo"><a href="index.html"><h1>AVIN Engineering Services</h1></a></div>';
  headerHtml += '<nav id="nav-menu-container">';
  headerHtml += '<ul class="nav-menu">';
  headerHtml += '<li class="menu-active"><a href="index.html">Home</a></li>';
  headerHtml += '<li><a href="about.html">About</a></li>';
  headerHtml += '<li><a href="service.html">Services</a></li>';
  headerHtml += '<li><a href="contact.html">Contact</a></li>';
  headerHtml += '</ul>';
  headerHtml += '</nav>';
  headerHtml += '</div>';
  headerHtml += '</div>';
  $("#header").html(headerHtml);

  var footerHtml = '<div class="container">';
  footerHtml += '<div class="row">';
  footerHtml += '<div class="col-lg-5 col-md-6 col-sm-6">';
  footerHtml += '<div class="single-footer-widget">';
  footerHtml += '<h6>About Us</h6>';
  footerHtml += '<p>We are working to provide Quality Services in Reasonable Price. <a href="#"></a> <br><a routerLink="/about">read more..</a></p>';
  footerHtml += '</div>';
  footerHtml += '</div>';
  footerHtml += '<div class="col-lg-5  col-md-6 col-sm-6">';
  footerHtml += '<div class="single-footer-widget">';
  footerHtml += '<h6>Newsletter</h6>';
  footerHtml += '<div class="" id="mc_embed_signup">';
  footerHtml += '<form target="_blank" novalidate="true" action="" method="get" class="form-inline">';
  footerHtml += '<input class="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = \'\'" onblur="this.placeholder = \'Enter Email \'" required="" type="email">';
  footerHtml += '<button class="click-btn btn btn-default"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>';
  footerHtml += '<div style="position: absolute; left: -5000px;">';
  footerHtml += '<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text">';
  footerHtml += '</div>';
  footerHtml += '<div class="info"></div>';
  footerHtml += '</form>';
  footerHtml += '</div>';
  footerHtml += '</div>';
  footerHtml += '</div>';
  footerHtml += '<div class="col-lg-2 col-md-6 col-sm-6 social-widget">';
  footerHtml += '<div class="single-footer-widget">';
  footerHtml += '<h6>Follow Us</h6>';
  footerHtml += '<p>Let us be social</p>';
  footerHtml += '<div class="footer-social d-flex align-items-center">';
  footerHtml += '<a href="" target="_blank"><i class="fa fa-facebook"></i></a>';
  footerHtml += '<a href="#"><i class="fa fa-twitter"></i></a>';
  footerHtml += '<a href="#"><i class="fa fa-instagram"></i></a>';
  footerHtml += '</div>';
  footerHtml += '</div>';
  footerHtml += '</div>';
  footerHtml += '</div>';
  footerHtml += '</div>';
  $('#footer').html(footerHtml);
  $(".fullscreen").css("height", window_height)
  $(".fitscreen").css("height", fitscreen);

  if (document.getElementById("default-select")) {
    $('select').niceSelect();
  };
  if (document.getElementById("service-select")) {
    $('select').niceSelect();
  };

  $('.img-gal').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });


  $('.play-btn').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });


  //  Counter Js 

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });


  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });


  $(document).ready(function () {

    $('html, body').hide();

    if (window.location.hash) {

      setTimeout(function () {

        $('html, body').scrollTop(0).show();

        $('html, body').animate({

          scrollTop: $(window.location.hash).offset().top - 108

        }, 1000)

      }, 0);

    }

    else {

      $('html, body').show();

    }

  });


  // Header scroll class
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });


  $('.active-realated-carusel').owlCarousel({
    items: 1,
    loop: true,
    margin: 100,
    dots: true,
    nav: true,
    navText: ["<span class='lnr lnr-arrow-up'></span>", "<span class='lnr lnr-arrow-down'></span>"],
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1,
      },
      768: {
        items: 1,
      }
    }
  });


  $('.active-about-carusel').owlCarousel({
    items: 1,
    loop: true,
    margin: 100,
    nav: true,
    navText: ["<span class='lnr lnr-arrow-up'></span>",
      "<span class='lnr lnr-arrow-down'></span>"],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1,
      },
      768: {
        items: 1,
      }
    }
  });


  $('.active-review-carusel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    margin: 30,
    dots: true
  });

  $('.active-info-carusel').owlCarousel({
    items: 1,
    loop: true,
    margin: 100,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1,
      },
      768: {
        items: 1,
      }
    }
  });


  $('.active-testimonial').owlCarousel({
    items: 2,
    loop: true,
    margin: 30,
    dots: true,
    autoplay: true,
    nav: true,
    navText: ["<span class='lnr lnr-arrow-up'></span>", "<span class='lnr lnr-arrow-down'></span>"],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1,
      },
      768: {
        items: 2,
      }
    }
  });


  $('.active-testimonials-slider').owlCarousel({
    items: 3,
    loop: true,
    margin: 30,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1,
      },
      768: {
        items: 2,
      },
      801: {
        items: 3,
      }
    }
  });


  $('.active-fixed-slider').owlCarousel({
    items: 3,
    loop: true,
    dots: true,
    nav: true,
    navText: ["<span class='lnr lnr-arrow-up'></span>",
      "<span class='lnr lnr-arrow-down'></span>"],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      }

    }
  });




  //  Start Google map 

  // When the window has finished loading create our google map below

  if (document.getElementById("map")) {

    google.maps.event.addDomListener(window, 'load', init);

    function init() {
      // Basic options for a simple Google Map
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
      };

      // Get the HTML DOM element that will contain your map 
      // We are using a div with id="map" seen below in the <body>
      var mapElement = document.getElementById('map');

      // Create the Google Map using our element and options defined above
      var map = new google.maps.Map(mapElement, mapOptions);

      // Let's also add a marker while we're at it
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'Snazzy!'
      });
    }
  }





});
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and  
}
































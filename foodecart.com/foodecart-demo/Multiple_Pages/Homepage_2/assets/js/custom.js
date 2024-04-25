/*==========

Template Name: FoodeCart - Restaurants & Food Template

==========*/

/*==========
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.Loader JS
3.Wow Animation JS
4.Banner Slider JS
5.Date Picker JS
6.Time Picker JS
7.Restaurant Image Slider JS
8.Restaurant Content Slider JS
9.Gift Store Slider JS
10.Testimonial - What Our Clients Say Slider JS
11.Smooth Scrolling JS
12.Sticky Header JS
13.Toogle Menu Mobile JS
14.Blog Slider For Mobile JS
15.Gallery Slider 1 For Mobile JS
16.Gallery Slider 2 For Mobile JS
17.Team Slider For Mobile JS
18.Gallery Page Main Slider JS
19.Gallery Page Thumbnail Slider JS
==========*/



$(document).ready(function($) {

	// Whole Script Strict Mode Syntax
	"use strict";

	// Loader JS Start
	$(window).ready(function(){
	    $('.cd-loader-layer').addClass('closing');
        $("#main").animate({
        	opacity: 1
        }, 500);
        setTimeout(function () {
        	$(".loader").fadeOut(1);
            $(".loader-wrap").fadeOut('slow');
        }, 1300);
	});
	// Loader JS End

	// Wow Animation JS Start
	new WOW().init(); 
	// Wow Animation JS Start

	// Banner Slider JS Start
	// Params
	var mainSliderSelector = '.main-slider',
	interleaveOffset = 0.5;

	// Banner Slider JS Start
	var mainSliderOptions = {
		loop: true,
		speed:2400,
		autoplay: true,
		loopAdditionalSlides: 10,
		grabCursor: false,
		watchSlidesProgress: true,
		pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	    },
		navigation: {
			nextEl: false,
			prevEl: false,
		},
		on: {
			progress: function(){
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					var slideProgress = swiper.slides[i].progress,
					innerOffset = swiper.width * interleaveOffset,
					innerTranslate = slideProgress * innerOffset;

					swiper.slides[i].querySelector(".slide-bgimg").style.transform =
					"translateX(" + innerTranslate + "px)";
				}
			},
			touchStart: function() {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = "";
				}
			},
			setTransition: function(speed) {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = speed + "ms";
					swiper.slides[i].querySelector(".slide-bgimg").style.transition =
					speed + "ms";
				}
			}
		}
	};
	var mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);
	// Banner Slider JS End

	// Date Picker JS Start
    $('#datepicker').datetimepicker({
		format: 'DD/MM/YYYY',
		minDate: new Date(),
	});
	// Date Picker JS End

    // Time Picker JS Start
	$('#timepicker').datetimepicker({
	 	format: 'hh:mm A',
	});
    // Time Picker JS End

    // Restaurant Image Slider JS Start
	$('.restaurant-back-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  prevArrow: false,
	  nextArrow: false,
	  dots: false,
	  autoplay: true,
  	  autoplaySpeed: 3000,	
	  speed: 1000,
	  fade: true,
	  cssEase: 'linear',
	  draggable: false,
	  asNavFor: '.restaurant-content-slider'
	});
	// Restaurant Image Slider JS End

	// Restaurant Content Slider JS Start
	$('.restaurant-content-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  prevArrow: '<button class="slick-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
	  nextArrow: '<button class="slick-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
	  dots: true,
	  autoplay: true,
  	  autoplaySpeed: 3000,
	  asNavFor: '.restaurant-back-slider'
	});
	// Restaurant Content Slider JS End

	// Gift Store Slider JS Start
	$('.store-slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  prevArrow: '<button class="slick-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
	  nextArrow: '<button class="slick-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
	  dots: true,
	  centerMode: true,
	  responsive: [
  	  {
  	  	breakpoint: 992,
  	  	settings: {
  	  		slidesToShow: 3
  	  	}
  	  },
  	  {
  	  	breakpoint: 768,
  	  	settings: {
  	  		slidesToShow: 1
  	  	}
  	  }
    ]
	});
	// Gift Store Slider JS End

	// Testimonial - What Our Clients Say Slider JS Start
	$('.testimonial-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  prevArrow: '<button class="slick-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
	  nextArrow: '<button class="slick-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
	  dots: true,
	  autoplay: true,
	  autoplaySpeed: 3000
	});
	// Testimonial - What Our Clients Say Slider JS End

	// Smooth Scrolling JS Start
	$( '#scroll-top' ).on( 'click', function(e){		
	  var href = $(this).attr( 'href' );	  
	  $( 'html, body' ).animate({
			scrollTop: $( href ).offset().top
	  }, '	' );
	  e.preventDefault();

	});
	// Smooth Scrolling JS End

	// Sticky Header JS Start
	$(window).on('scroll', function(){
	  if ($(window).scrollTop() >= 200) {
	    $('.site-header').addClass('sticky-header');
	   }
	   else {
	    $('.site-header').removeClass('sticky-header');
	   }
	});
	// Sticky Header JS End

	// Toogle Menu Mobile JS Start
	$(".toggle-button").on('click', function(){
		$(".main-navigation").toggleClass('toggle-menu');
		$(".header-right-box").toggleClass('toggle-box');
		$(".black-shadow").fadeToggle();
	});
	$(".menu-item a").on('click', function(){
		$(".main-navigation").removeClass('toggle-menu');
		$(".header-right-box").removeClass('toggle-box');
		$(".black-shadow").fadeOut();
	});
	$(".black-shadow").on('click', function(){
		$(this).fadeOut();
		$(".main-navigation").removeClass('toggle-menu');
		$(".header-right-box").removeClass('toggle-box');
	});
	// Toogle Menu Mobile JS End

	if ($(window).width() < 992) {
	// Blog Slider For Mobile JS Start
	   $('.blog-slider').slick({
		  infinite: true,
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  prevArrow: '<button class="slick-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
	  	  nextArrow: '<button class="slick-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
		  dots: true,
		  autoplay: false,
	  	  autoplaySpeed: 2000,	
	  	  responsive: [
	  	  {
	  	  	breakpoint: 768,
	  	  	settings: {
	  	  		slidesToShow: 1
	  	  	}
	  	  }
	      ]	
	   });
	   // Blog Slider For Mobile JS End

	   // Gallery Slider 1 For Mobile JS Start
	   $('.gallery-slider1').slick({
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  prevArrow: false,
	  	  nextArrow: false,
		  dots: false,
		  autoplay: true,
	  	  autoplaySpeed: 2000,	
	  	  responsive: [
	  	  {
	  	  	breakpoint: 768,
	  	  	settings: {
	  	  		slidesToShow: 2
	  	  	}
	  	  },
	  	  {
	  	  	breakpoint: 376,
	  	  	settings: {
	  	  		slidesToShow: 1
	  	  	}
	  	  }
	      ]	
	   });
	   // Gallery Slider 1 For Mobile JS End

	   // Gallery Slider 2 For Mobile JS Start
	   $('.gallery-slider2').slick({
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  prevArrow: false,
	  	  nextArrow: false,
		  dots: false,
		  autoplay: true,
	  	  autoplaySpeed: 2000,	
	  	  responsive: [
	  	  {
	  	  	breakpoint: 768,
	  	  	settings: {
	  	  		slidesToShow: 2
	  	  	}
	  	  },
	  	  {
	  	  	breakpoint: 376,
	  	  	settings: {
	  	  		slidesToShow: 1
	  	  	}
	  	  }
	      ]	
	   });
	   // Gallery Slider 2 For Mobile JS End

	   // Team Slider For Mobile JS Start
	   $('.team-slider').slick({
		  infinite: true,
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  prevArrow: false,
	  	  nextArrow: false,
		  dots: true,
		  autoplay: true,
	  	  autoplaySpeed: 2000,	
	  	  responsive: [
	  	  {
	  	  	breakpoint: 768,
	  	  	settings: {
	  	  		slidesToShow: 1
	  	  	}
	  	  }
	      ]	
	   });
	   // Team Slider For Mobile JS End
	}

	// Gallery Page Main Slider JS Start
	   $('.main-gallery-slider').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: false,
	  	  nextArrow: false,
		  dots: false,
		  autoplay: true,
	  	  autoplaySpeed: 3000,
	  	  asNavFor: '.gallery-thumbnail-slider',
	  	  vertical: true,
	  	  responsive: [
	  	  {
	  	  	breakpoint: 576,
	  	  	settings: {
	  	  		vertical: false,
	  	  		prevArrow: '<button class="slick-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
	  	  		nextArrow: '<button class="slick-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
	  	  	}
	  	  }
	      ]
	   });
	// Gallery Page Main Slider JS End

	// Gallery Page Thumbnail Slider JS Start
	   $('.gallery-thumbnail-slider').slick({
		  infinite: true,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  prevArrow: '<button class="slick-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
	  	  nextArrow: '<button class="slick-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
		  dots: false,
		  autoplay: true,
	  	  autoplaySpeed: 3000,
	  	  asNavFor: '.main-gallery-slider',
	  	  responsive: [
	  	  {
	  	  	breakpoint: 992,
	  	  	settings: {
	  	  		slidesToShow: 3
	  	  	}
	  	  },
	  	  {
	  	  	breakpoint: 768,
	  	  	settings: {
	  	  		slidesToShow: 2
	  	  	}
	  	  }
	      ]
	   });
	// Gallery Page Thumbnail Slider JS End
});
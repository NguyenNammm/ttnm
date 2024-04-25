/*==========

Template Name: FoodeCart - Restaurants & Food Template

==========*/

/*==========
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.About Us Counting JS
3.Chef Skills Progress Bar JS
==========*/



$(document).ready(function($) {

	// Whole Script Strict Mode Syntax
	"use strict";

	var a = 0;
	var b = 0;
	$(window).on('scroll', function() {
	// About Us Counting JS Start
		var oTop = $('#counter').offset().top - window.innerHeight;
		if (a === 0 && $(window).scrollTop() > oTop) {
			$('.about-counting').each(function() {
			  var $this = $(this),
			      countTo = $this.attr('data-count');
			  
			  $({ countNum: $this.text()}).animate({
			    countNum: countTo
			  },

			  {

			    duration: 2000,
			    easing:'linear',
			    step: function() {
			      $this.text(Math.floor(this.countNum));
			    },
			    complete: function() {
			      $this.text(this.countNum);
			    }

			  });  
			  
			});
		a = 1;
	  	}
	// About Us Counting JS End

	// Chef Skills Progress Bar JS Start
		var oTop2 = $('#progress_bar').offset().top - window.innerHeight;
		if (b === 0 && $(window).scrollTop() > oTop2) {
			$(".chef-skill-bar").each(function(){
			  $(this).find(".chef-skill-bar-inner").animate({
			    width: $(this).attr("data-width")
			  },2000);
			});
		}
	// Chef Skills Progress Bar JS End

	});

});
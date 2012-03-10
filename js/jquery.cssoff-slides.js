
$(document).ready(function() {

	/* jQuery Object Variables */
	var $slide          = $('#slide'),
		$hgroup         = $slide.find('hgroup'),
		$slide_title    = $hgroup.find('#slide-title'),
		$slide_subtitle = $hgroup.find('#slide-subtitle'),
		
		$buttons        = $('#button-slides').find('.button');

	/* Auxiliary Variables */
	var width           = $slide.width(),
		titles          = new Array(),							/* Saving the dynamic titles of each slide (it will be the <h3> content) */
		subtitles       = new Array();							/* Saving the dynamic subtitles of each slide (it will be the <h4> content) */	



	/* Initialization of 'titles' and 'subtitles' */	
	titles[0] = "The Tank";             subtitles[0] = "You don't want to know what's inside";
	titles[1] = "Sundae Slide";         subtitles[1] = "Slide down to the ice cream!";
	titles[2] = "Human Hamster Wheel";  subtitles[2] = "Run little human, run!";
	titles[3] = "Down The Hatch";       subtitles[3] = "6ft Slide Covered In Gunk!";
	titles[4] = "Pick It!";             subtitles[4] = "Finally you can be someone with style!";
	titles[5] = "The Wringer";          subtitles[5] = "Ohhh It's time to relax";							/* The 3 "h" aren't a typo */
	
	$slide_title.text(titles[0]);									/* Setting the title of the first slide to the <h3> tag at Obstacles */
	$slide_subtitle.text(subtitles[0]);								/* Setting the subtitle of the first slide to the <h4> tag */

	$buttons.first().addClass('active').siblings();					/* On page load, mark the first as active */
	
	
	
	/* On a 'button' click */
	$buttons.click(function(e,keepScroll) {
		$buttons.removeClass('active');
		$(this).addClass('active');									/* Setting the current active button */

		var pos             = $(this).prevAll('.button').length,	/* Getting the offset of the slide */
			timeSliding     = 450,									/* Time of sliding changes */
			timeFading      = 225,									/* Time of disappear/appear animation of title and subtitle */
			fadingAnimation = function() {	 						/* Will update title and subtitle values while they are invisible */
				$slide_title.text(titles[pos]);
				$slide_subtitle.text(subtitles[pos]);
			};

		/* The fading animation. Both disappear executing the function 'fadingAnimation' and later they'll get visible again */
		$slide_title.fadeOut(timeFading, fadingAnimation).fadeIn(timeFading);
		$slide_subtitle.fadeOut(timeFading, fadingAnimation).fadeIn(timeFading);

		/* The sliding animation */
		$slide.stop().animate({backgroundPosition: -pos*width+'px'}, timeSliding);
		
		/* Prevent the default action of the link */
		e.preventDefault();										
		
	});	//buttons.click

});	//$(document).ready

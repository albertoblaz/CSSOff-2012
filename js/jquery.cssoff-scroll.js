
$(document).ready(function() {

	var $links = $('#menu').find('a[href*=#]');			/* Searching links on navigation */	

	$links.click(function(e) {						/* On a click */

		/* Local vars */
		var $target = $(this.hash),									/* The target element where the view should go */
			targetOffset = $target.offset().top,						/* The position of the target element */
			scrollSpeed = 1250;									/* The speed configurated (in miliseconds) in order to doing the scroll animation */

		$('html, body').stop().animate({scrollTop: targetOffset}, scrollSpeed);		/* Start the scrolling animation */
		e.preventDefault();										/* Prevent the default action of the link */
		
	});	//links.click

});
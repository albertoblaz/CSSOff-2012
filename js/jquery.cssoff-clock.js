
$(document).ready(function() {

	/* Local Vars */
	var count = 60,
		time  = 1000;	/* 1 second = 1000 miliseconds */

	/* Setting the interval of 1 change per second */
	var countdown = setInterval(function() {
		$('#clock-display').find('#time').text(count);
		if (count <= 0) {
			count = 60;
		}
		count--;
	}, time);
		
});
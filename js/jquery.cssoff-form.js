
/* 
 * I have created this script because I couldn't get the form worked with the 'placeholder' input type on Internet Explorer
 */

$(document).ready(function() {

	/* Local Vars */
	var names  = new Array('#input-name', '#input-email', '#input-team', '#input-url'),
		values = new Array("Your Name", "Email Address", "Team Name", "Profile Photo URL");

	/* Auxiliary function created to delete the default text on inputs when someone is going to write on it */
	var defaultValuesOff = function() {
		for (var j=0; j<values.length; j++) {
			if ($(this).attr('value') == values[j])   $(this).val("");
		}
	}

	/* Auxiliary function similar to the previous one, but this time the input recover its natural value */
	var defaultValuesOn = function() {
		for (var j=0; j<values.length; j++) {
			if ($(this).attr('placeholder') == values[j])   $(this).val(values[j]);
		}
	}

	/* Each input with its associate 'click' event */
	for (var i=0; i<names.length; i++) {
		$(names[i]).val(values[i]);				/* Setting the default value */
		$(names[i]).click(defaultValuesOff);	/* If you do a 'click' the input text dissappear */
		$(names[i]).blur(defaultValuesOn);		/* But if you do a click on every other place, it becomes visible again */
	}

});
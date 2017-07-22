/* User Interface Logic*/
$(document).ready(function() {
	$('form#transportation-survey').submit(function(event) {
		event.preventDefault();
		/* Travel Survey: Work or School */
		$('#work-responses').show();
		var userResponses = [];
		$('input:checkbox[name=work-transportation]:checked').each(function() {
			var workTransportationMode = $(this).val();
			console.log("this: " + this);
			console.log(workTransportationMode);
			$('#work-responses').append(workTransportationMode + "<br>");
			userResponses.push(workTransportationMode);/* Push val of checked checkbox into array. */
			console.log(userResponses);
			var capitalizeWorkTransportationMode = workTransportationMode.toUpperCase();
			$('#work-responses').append(capitalizeWorkTransportationMode + '<br>');
		});
		/* Travel Survey: Other Activities */
		$('#fun-responses').show();
		var userFunResponses = [];
		$('input:checkbox[name=fun-transportation]:checked').each(function() {
			var funTransportationMode = $(this).val();
			console.log("this(fun-transportation): " + this);
			console.log(funTransportationMode);
			$('#fun-responses').append(funTransportationMode + "<br>");
			userFunResponses.push(funTransportationMode);
			console.log(userFunResponses);
			var capitalizeFunTransportation =funTransportationMode.toUpperCase();
			$('#fun-responses').append(capitalizeFunTransportation + '<br>');
		});
		/* Ice Cream Survey: Favorite Flavor */
		$('#show-ice-cream').show();
		var iceCreamFlavor = [];
		$('input:checkbox[name=flavor]:checked').each(function() {
			var checkFlavor = $(this).val();
			console.log(checkFlavor);
			iceCreamFlavor.push(checkFlavor);
			console.log(iceCreamFlavor);
			$('#ice-cream').append('<li>' + checkFlavor + '</li>');
		});

		$('#transportation-survey').hide();
	});/* End Submit*/
});
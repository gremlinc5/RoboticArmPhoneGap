
$(document).bind('deviceready', function () {
	var watchId = 0;
	
	$('#btnWatch').click(function () {
		alert('Binded');
		if (watchId == 0) 
		{
			watchId = navigator.accelerometer.watchAcceleration( function(acceleration) {
				$('#txtx').attr('value', acceleration.x);
				$('#txty').attr('value', acceleration.y);
				$('#txtz').attr('value', acceleration.z);
			}, function (error) {
				alert('Error reading accelerometer');
			}, {
				frequency: 100
			});
			
			$('#btnWatch').html('Stop Watching');
		} 
		else 
		{
			navigator.accelerometer.clearWatch(watchId);
			$('#btnWatch').html('Start Watching');
			watchId = 0;
		}
	});
	
	alert('Device ready');
});

function animateIcons(time){
	
	var totalTime = 0;
	
	$("#section-icons_wrapper-element1").css({
		"opacity" : "1",
		"transition" : time / 1000 + "s linear"
	});
	
	totalTime += time;
	
	setTimeout(function(){
		$("#section-icons_wrapper-element2").css({
			"opacity" : "1",
			"transition" : time / 1000 + "s linear"
		});
	}, totalTime);
	
	totalTime += time;
	
	setTimeout(function(){
		$("#section-icons_wrapper-element3").css({
			"opacity" : "1",
			"transition" : time / 1000 + "s linear"
		});
	}, totalTime);
	
	totalTime += time;
	
	setTimeout(function(){
		$("#section-icons_wrapper-element4").css({
			"opacity" : "1",
			"transition" : time / 1000 + "s linear"
		});
		isAnimating = false;
	}, totalTime);
	
}
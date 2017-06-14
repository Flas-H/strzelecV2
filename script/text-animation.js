
function textFadeIn(textFadeTime, buttonFadeTime, startDelay){
	var time = 0;
	
	time += startDelay;
	
	setTimeout(function(){
		$(".text_left_column").css({
			"opacity" : "1",
			"transition" : textFadeTime / 1000 + "s linear"
		});
	}, time);
	
	time += textFadeTime;
	
	setTimeout(function(){
		$(".text_right_column").css({
			"opacity" : "1",
			"transition" : textFadeTime / 1000 + "s linear"
		});
	}, time);
	
	time += textFadeTime;
	
	setTimeout(function(){
		$(".recru_more").css({
			"opacity" : "1",
			"transition" : buttonFadeTime / 1000 + "s linear"
		});
		
		isAnimating = false;
	}, time);
}
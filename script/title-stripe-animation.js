
function stripeFadeIn(stripe, time){
	stripe.css({
		"right" : "0px",
		"transition" : time / 1000 + "s linear"
	});
}

function stripeTextFadeIn(text, time){
	text.css({
		"opacity" : "1",
		"transition" :  time / 1000 + "s linear"
	});
}

function stripeTextFadeOut(text, time){
	text.css({
		"opacity" : "0",
		"teransition" : time / 1000 + "s linear"
	});
}

function stripeTextChangeHeight(stripe, time, delta){
	
	var oldHeight = stripe.height();
	var windowHeight = $(window).height();
	var newHeight = oldHeight + delta * windowHeight;
	
	stripe.css({
		"height" : newHeight,
		"top" : (windowHeight - newHeight) / 2 + "px",
		"transition" : time / 1000 + "s linear"
	})
}

function resetAnimationProp(stripe, text, time){
	
	setTimeout(function(){
		
		//TITLE STRIPE RESET
		stripe.css({
			"background" : "linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.78) 11%, rgba(0,0,0,0) 79%, rgba(0,0,0,0) 100%)",
			"width" : "1000vw",
			"height" : "20vh",
			"position" : "relative",
			"top" : "40vh",
			"right" : "1100vw",
		});
		
		text.css({
			"opacity" : "0"
		});
		
		//ICONS RESET
		if(slideNumber != 1){
			$("#section-icons_wrapper-element1").css({
				"opacity" : "0"	
			});
			
			$("#section-icons_wrapper-element2").css({
				"opacity" : "0"	
			});
			
			$("#section-icons_wrapper-element3").css({
				"opacity" : "0"	
			});
			
			$("#section-icons_wrapper-element4").css({
				"opacity" : "0"	
			});
		}
		
		//TEXT SLIDE 2 RESET
		if(slideNumber != 2){
			$(".text_right_column").css({
				"opacity" : "0"
			});
			
			$(".text_left_column").css({
				"opacity" : "0"
			});
			
			$(".recru_more").css({
				"opacity" : "0"
			});
		}
	}, time);
	
}

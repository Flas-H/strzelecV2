
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



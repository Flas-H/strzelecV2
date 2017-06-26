
function footerSlideIn(animationTime){
	$("#section4").css({
		"top" : "70vh",
		"transition" : animationTime / 1000 + "s ease"
	});
	
	setTimeout(function(){
		isAnimating = false;
	}, animationTime);
}

function footerSlideOut(animationTime){
	$("#section4").css({
		"top" : "130vh",
		"transition" : animationTime / 1000 + "s ease"
	});
	
	setTimeout(function(){
		isAnimating = false;
	}, animationTime);
}

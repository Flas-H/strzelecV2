$(document).ready(function(){
	var interval = 4000;
	var animationTime = 500;
	var arrow = $(".arrow-down");
	
	setInterval(function(){
		arrowMoveDown(arrow, animationTime);
		setTimeout(arrowMoveUp, animationTime, arrow, animationTime);
	}, interval);
});


function arrowMoveDown(arrow, time){
	arrow.css({
		"bottom" : "2vh",
		"transition" : time / 1000 + "s ease"
	});
}

function arrowMoveUp(arrow, time){
	arrow.css({
		"bottom" : "5vh",
		"transition" : time / 1000 + "s ease"
	});
}
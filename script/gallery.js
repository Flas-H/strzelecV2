//ANIMATION SLIDE SIDES
var slide1Front = true;
var slide2Front = true;
var slide3Front = true;

//SLIDER SWITCH
var sliderIntervalClock;

//ANIMATION TIMING
var sliderInterval;
var slideSwapTimeDelay;
var slideTurningTime;
var slideSizeOverAnimationTime;
var sliderStartUpDelay;
var viewPortFadeInTime;
var viewportFadeOutTime;
var viewportCloseButtonTime;

//ANIMATION ELEMENTS
var slide1 = $("#slide1");
var slide2 = $("#slide2");
var slide3 = $("#slide3");

//INTALIZE BACKGROUNDS IN GALLERY
$(document).ready(bgSwap);

//MAIN
function startSlider(){
	setTimeout(function(){
		sliderIntervalClock = setInterval(swapSlides, sliderInterval);
	}, sliderStartUpDelay);
}

function stopSlider(){
	clearInterval(sliderIntervalClock);
}

function swapSlides(){
    var time = 0;
    slide1Swap();
    //console.log("B");
	
    time += slideSwapTimeDelay;
    setTimeout(slide2Swap, time);
    
    time += slideSwapTimeDelay;
    setTimeout(slide3Swap, time);
	
	time += slideSwapTimeDelay;
	setTimeout(bgSwap, time);
}

function slide1Swap(){
    if(slide1Front){
        $("#slide1").css({
            "transform" : "rotateX(180deg)",
            "transition" : slideTurningTime / 1000 + "s ease"
        });
		slide1Front = false;
    }
     else{
        $("#slide1").css({
            "transform" : "rotateX(360deg)",
            "transition" : slideTurningTime / 1000 + "s ease"
        });
		 slide1Front = true;
    }
	console.log("slide1Swap" + slide1Front);
}

function slide2Swap(){
    if(slide2Front){
        $("#slide2").css({
            "transform" : "rotateX(180deg)",
            "transition" : slideTurningTime / 1000 + "s ease"
        });
		slide2Front = false;
    }
     else{
        $("#slide2").css({
            "transform" : "rotateX(0deg)",
            "transition" : slideTurningTime / 1000 + "s ease"
        });
		 slide2Front = true;
    }
	console.log("slide2Swap");
}

function slide3Swap(){
    if(slide3Front){
        $("#slide3").css({
            "transform" : "rotateX(180deg)",
            "transition" : slideTurningTime / 1000 + "s ease"
        });
		slide3Front = false;
    }
    else{
        $("#slide3").css({
            "transform" : "rotateX(0deg)",
            "transition" : slideTurningTime / 1000 + "s ease"
        });
		slide3Front = true;
    }
	console.log("slide3Swap");
}

function bgSwap(){
	var bgNumber = 4;
	
	var slide1BGNumber = Math.floor(Math.random() * bgNumber) + 1;
	var slide2BGNumber = Math.floor(Math.random() * bgNumber) + 1;
	var slide3BGNumber = Math.floor(Math.random() * bgNumber)  + 1;
	
	var galleryDir = "asset/gallery";
	var slide1Dir = galleryDir + "/slide1/" + slide1BGNumber + ".jpg";
	var slide2Dir = galleryDir + "/slide2/" + slide2BGNumber + ".jpg";
	var slide3Dir = galleryDir + "/slide3/" + slide3BGNumber + ".jpg";
	console.log(slide3Dir);
	if(slide1Front) $("#slide1_side1").css({
			"background-image" : "url(\"" + slide1Dir + "\")" 
		});
	else $("#slide1_side2").css({
			"background-image" : "url(\"" + slide1Dir + "\")"
		});
	
	if(slide2Front) $("#slide2_side1").css({
			"background-image" : "url(\"" + slide2Dir + "\")"
		});
	else $("#slide2_side2").css({
			"background-image" : "url(\"" + slide2Dir + "\")"
		});
	
	if(slide3Front) $("#slide3_side1").css({
			"background-image" : "url(\"" + slide3Dir + "\")"
		});
	else $("#slide3_side2").css({
			"background-image" : "url(\"" + slide3Dir + "\")"
		});
}

$(document).ready(function(){
	//SLIDE 1 OVERSIZE
	$("#slide1_side1").click(function(){
		slideSizeOver($("#slide1_side1"));
	});

	$("#slide1_side2").click(function(){
		slideSizeOver($("#slide1_side2"));
	});

	//SLIDE 2 OVERSIZE
	$("#slide2_side1").click(function(){
		slideSizeOver($("#slide2_side1"));
	});

	$("#slide2_side2").click(function(){
		slideSizeOver($("#slide2_side2"));
	});

	//SLIDE 3 OVERSIZE
	$("#slide3_side1").click(function(){
		slideSizeOver($("#slide3_side1"));
	});

	$("#slide3_side2").click(function(){
		slideSizeOver($("#slide3_side2"));
	});
	
	//OVERLAY CLOSE
	$(".image_close_button").click(function(){
		overlayClose();
		console.log("A");
	});
});

function slideSizeOver(slide){
	var background = slide.css("background-image");
	
	$(".image_holder").css({
		"background-image" : background
	});

	$(".image_big_viewport").css({
		"display" : "block"
	});
	
	setTimeout(function(){
		$(".image_big_viewport").css({
			"opacity" : "1",
			"transition" : viewPortFadeInTime / 1000 + "s ease"
		});
	}, 100);
	
	setTimeout(function(){
		$(".image_close_button").css({
			"opacity" : "1",
			"transition" : viewportCloseButtonTime / 1000 + "s ease"
		});
	}, 100 + viewPortFadeInTime);
}

function overlayClose(){
	
	$(".image_big_viewport").css({
		"opacity" : "0",
		"transition" : viewportFadeOutTime / 1000 + "s ease"
	});
	
	setTimeout(function(){
		$(".image_big_viewport").css({
			"display" : "none"
		});
		$(".image_close_button").css({
			"opacity" : "0"
		});
	}, viewportFadeOutTime);
}

function sliderFadeIn(animationTime, animationDelay, slide1, slide2, slide3){
	var time = 0;
	
	time += animationDelay;
	setTimeout(function(){
		slide3.css({
			"opacity" : "1",
			"transition" : animationTime / 1000 + "s ease"
		}, time);
	}, time);
	
	time += animationTime;
	setTimeout(function(){
		slide1.css({
			"opacity" : "1",
			"transition" : animationTime / 1000 + "s ease"
		});
	}, time);
	
	time += animationTime;
	setTimeout(function(){
		slide2.css({
			"opacity" : "1",
			"transition" : animationTime / 1000 + "s ease"
		});
		isAnimating = false;
	}, time);
}

function galleryDataSetUp(_sliderInterval, _sliderSwapTimeDelay, 	_slideTurningTime, _viewportFadeOutTime, _viewportCloseButtonTime, _viewportFadeInTime, _sliderStartUpDelay){
	sliderInterval = _sliderInterval;
	slideSwapTimeDelay = _sliderSwapTimeDelay;
	slideTurningTime = _slideTurningTime;
	viewportCloseButtonTime = _viewportCloseButtonTime;
	viewPortFadeInTime = _viewportFadeInTime;
	viewportFadeOutTime = _viewportFadeOutTime;
	sliderStartUpDelay = _sliderStartUpDelay;
}
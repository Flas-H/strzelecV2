

var slideNumber = 0;
var slideHeight;
var isAnimating = false;

$(document).ready(function(){
	
	slideHeight = $(".section").height();
	
});


// For Chrome
window.addEventListener('mousewheel', moveToSlide);

// For Firefox
window.addEventListener('DOMMouseScroll', moveToSlide);

var slideSwapTime = 1000;
var backgroundShiftTime = 2000;

//STRIPE
var stripeFadeInTime = 1000;
var stripeTextFadeInTime = 0;
var stripeTextDuration = 0;
var stripeTextFadeOutTime = 0;
var stripeTextChangeSizeTime = 0;
var totalTitleAnimationTime = stripeFadeInTime +
								stripeTextDuration +
								stripeTextFadeOutTime +
								stripeTextFadeOutTime +
								stripeTextChangeSizeTime;
								
//ICONS SLIDE 1					
var iconsAnimationTime = 1000;

//TEXT SLIDE 2
var recruTextFadeInTime = 1000;
var recruMoreButtonTime = 1000;
var recruStartDelay = 500;

var stripeTextChangeSizeDelta = 0.3;

var slideSwapTimingFunction = "cubic-bezier(0.6, 0.01, 0.43, 0.99)";
var backgroundShiftTimingFunction = "cubic-bezier(0, 0.27, 0.2, 1)";

function moveToSlide(e){
	
	e.preventDefault();
	var delta = e.wheelDelta ? -e.wheelDelta : e.detail;
	
	if(!isAnimating){
		
		if(delta > 0 && slideNumber < 3){
			//SCROLL DOWN
			isAnimating = true;
			//TITLE ANIMATION
			var slide = $("#section" + slideNumber);
			var background = $("#section" + slideNumber + "-background");
			var stripe = $("#section_stripe" + (slideNumber + 1));
			var titleText = $("#section_sectionTitle" + (slideNumber + 1));
			var previousStripe = $("#section_stripe" + slideNumber);
			var previousTitleText = $("#section_sectionTitle" + slideNumber);
			
			moveSlideUp(slide, slideSwapTime);
			moveBackgroundUp(background, backgroundShiftTime);
			//ANIMATION OF TITLE STRIPE
			stripeFadeInAnimationController(stripe, titleText);
			//TITLE ANIMATION END
			
			//ICONS IN SLIDE 1 ANIMATION
			
			resetAnimationProp(previousStripe, previousTitleText, slideSwapTime);
			
			slideNumber++;
			
			//EXTRA ICONS ANIMATION IN SLIDE 1
			if(slideNumber == 1){
				setTimeout(function(){
					animateIcons(iconsAnimationTime);
				}, totalTitleAnimationTime);
			}
			//EXTRA TEXT ANIMATION IN SLIDE 2
			else if(slideNumber == 2){
				setTimeout(function(){
					textFadeIn(recruTextFadeInTime, recruMoreButtonTime,recruStartDelay)
				}, totalTitleAnimationTime);
			}
			else {
				setTimeout(function(){
					isAnimating = false;
				}, totalTitleAnimationTime);
			}
		}
		else if(delta < 0 && slideNumber > 0){
			//SCROLL UP
			isAnimating = true;
			//TITLE ANIMATION
			slideNumber--;
			var slide = $("#section" + slideNumber);
			var background = $("#section" + slideNumber + "-background");
			var stripe = $("#section_stripe" + slideNumber);
			var titleText = $("#section_sectionTitle" + slideNumber);
			var previousStripe = $("#section_stripe" + (slideNumber + 1));
			var previousTitleText = $("#section_sectionTitle" + (slideNumber + 1));
			
			moveSlideDown(slide, slideSwapTime);
			moveBackgroundDown(background, backgroundShiftTime);
			//ANIMATION OF TITLE STRIPE
			stripeFadeInAnimationController(stripe, titleText);
			//TITLE ANIMATION END
			
			//ICONS IN SLIDE 1 ANIMATION
			if(slideNumber == 1){
				setTimeout(function(){
					animateIcons(iconsAnimationTime);
				}, totalTitleAnimationTime);
			}
			//TEXT IN SLIDE 2 ANIAMTION
			else if(slideNumber == 2){
				setTimeout(function(){
					textFadeIn(recruTextFadeInTime, recruMoreButtonTime, recruStartDelay)
				}, totalTitleAnimationTime);
			}
			else {
				setTimeout(function(){
					isAnimating = false;
				}, totalTitleAnimationTime);
			}
			
			resetAnimationProp(previousStripe, previousTitleText, slideSwapTime);
		}
		console.log(slideNumber);
		
	}
}

function moveSlideUp(slide, time){
	
	slide.css({
		"top" : -slideHeight + "px",
		"transition" : time / 1000 + "s " + slideSwapTimingFunction
	});
	
}

function moveSlideDown(slide, time){
	
	slide.css({
		"top" : "0px",
		"transition" : time / 1000 + "s " + slideSwapTimingFunction
	});
	
}

function moveBackgroundUp(background, time){
	background.css({
		"background-position" : "center -30vh",
		"transition" : time / 4000 + "s " + backgroundShiftTimingFunction
	})
}

function moveBackgroundDown(background, time){
	background.css({
		"background-position" : "center center",
		"transition" : time / 1000 + "s " + backgroundShiftTimingFunction
	})
}

function stripeFadeInAnimationController(stripe, title){
	
	var time = 0;
	stripeFadeIn(stripe, stripeFadeInTime);
	time += stripeFadeInTime;
	
	setTimeout(stripeTextFadeIn, time, title, stripeTextFadeInTime);
	time += stripeTextFadeInTime + stripeTextDuration;
	
	setTimeout(stripeTextFadeOut, time, title, stripeTextFadeOutTime);
	time += stripeTextFadeOutTime;
	
	setTimeout(stripeTextChangeHeight, time, stripe, stripeTextChangeSizeTime, stripeTextChangeSizeDelta);
	time += stripeTextChangeSizeTime;
	
}
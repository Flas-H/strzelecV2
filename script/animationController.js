

var slideNumber = 0;
var slideHeight;
var isAnimating = false;

var slideSwapTime = 1000;
var backgroundShiftTime = 2000;

//STRIPE
var stripeFadeInTime = 1000;
var stripeTextFadeInTime = 800;
var stripeTextDuration = 1000;
var stripeTextFadeOutTime = 500;
var stripeTextChangeSizeTime = 800;
var totalTitleAnimationTime = stripeFadeInTime +
								stripeTextDuration +
								stripeTextFadeOutTime +
								stripeTextFadeOutTime +
								stripeTextChangeSizeTime;
								
//ICONS SLIDE 1					
var iconsAnimationTime = 400;

//TEXT SLIDE 2
var recruTextFadeInTime = 800;
var recruMoreButtonTime = 500;
var recruStartDelay = 500;

//GALLERY
var galleryAnimationFadeInTime = 400;
var galleryStartUpDelay = 1000;
var gallerySlideSwapInterval = 6000;
var gallerySlideSwapDelay = 300;
var gallerySlideTurnOverTime = 300;
var galleryCloseButtonAnimationTime = 500;
var galleryViewportFadeInTime = 800;
var galleryViewportFadeOutTime = 800;

//FOOTER
var footerSlideInTime = 1000;
var footerSlideOutTime = 1000;

var stripeTextChangeSizeDelta = 0.3;

var slideSwapTimingFunction = "cubic-bezier(0.6, 0.01, 0.43, 0.99)";
var backgroundShiftTimingFunction = "cubic-bezier(0, 0.27, 0.2, 1)";

//MAIN
$(document).ready(function(){
	
	slideHeight = $(".section").height();
	galleryDataSetUp(gallerySlideSwapInterval, gallerySlideSwapDelay, gallerySlideTurnOverTime, galleryViewportFadeOutTime, galleryCloseButtonAnimationTime, galleryViewportFadeInTime, galleryStartUpDelay);
	
});


// For Chrome
window.addEventListener('mousewheel', moveToSlide);

// For Firefox
window.addEventListener('DOMMouseScroll', moveToSlide);


function moveToSlide(e){
	
	e.preventDefault();
	var delta = e.wheelDelta ? -e.wheelDelta : e.detail;
	
	if(!isAnimating){
		
		if(delta > 0 && slideNumber < 4){
			//SCROLL DOWN
			isAnimating = true;
			
			if(slideNumber < 3){
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

				switch(slideNumber){
						//EXTRA ICONS ANIMATION IN SLIDE 1
					case 1:{
						setTimeout(function(){
							animateIcons(iconsAnimationTime);
						}, totalTitleAnimationTime);
						stopSlider();
						break;
					}
					case 2:{
						//EXTRA TEXT ANIMATION IN SLIDE 2
						setTimeout(function(){
							textFadeIn(recruTextFadeInTime, recruMoreButtonTime,recruStartDelay)
						}, totalTitleAnimationTime);
						stopSlider();
						break;
					}
					case 3:{
						//GALLERY SWITCH - SLIDE 3
						var slider1 = $("#slide1");
						var slider2 = $("#slide2");
						var slider3 = $("#slide3");
						startSlider();
						setTimeout(function(){
							sliderFadeIn(galleryAnimationFadeInTime, galleryStartUpDelay, slider1, slider2, slider3);
						}, totalTitleAnimationTime)
						break;
					}
					default:{
						setTimeout(function(){
							isAnimating = false;
						}, totalTitleAnimationTime);
						console.log("Ocurred undefined slide, programmer what to do?");
					}
				}
				
			}
			//SLIDE 4 ANIMATION - FOOTER
			else{
				footerSlideIn(footerSlideInTime);
				slideNumber++;
			}
		}
		else if(delta < 0 && slideNumber > 0){
			//SCROLL UP
			isAnimating = true;
			if(slideNumber < 4){
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
				
				switch(slideNumber){
					case 1:{
						//ICONS IN SLIDE 1 ANIMATION
						setTimeout(function(){
							animateIcons(iconsAnimationTime);
						}, totalTitleAnimationTime);
						stopSlider();
						break;
					}
					case 2:{
						//TEXT IN SLIDE 2 ANIAMTION
						setTimeout(function(){
							textFadeIn(recruTextFadeInTime, recruMoreButtonTime, recruStartDelay)
						}, totalTitleAnimationTime);
						stopSlider();
						break;
					}
					case 3:{
						var slider1 = $("#slide1");
						var slider2 = $("#slide2");
						var slider3 = $("#slide3");
						startSlider();
						setTimeout(function(){
							sliderFadeIn(galleryAnimationFadeInTime, 	galleryStartUpDelay, slide1, slide2, slide3);
						}, totalTitleAnimationTime);
						break;
					}
					default:{
						setTimeout(function(){
							isAnimating = false;
						}, totalTitleAnimationTime);
						stopSlider();
					}
				}				

				resetAnimationProp(previousStripe, previousTitleText, slideSwapTime);
			}
			//SLIDE 4 ANIMATION - FOOTER
			else{
				footerSlideOut(footerSlideOutTime);
				slideNumber--;
			}
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
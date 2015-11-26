$( document ).ready(function() {
	"use strict";

/* ---------------------------------- *\ 
  #SKILLS SECTION 
\* ---------------------------------- */


	var openTab = [,false,false,false,false];
	var nbrOpenButton = 0 ;
	
	$(".skills__rounded-button").click(function() {
		
		var equiv =$(this.className);//get classname of clicked button (object created) 
		var numeroBouton = equiv.selector.slice(25,26);//get the number of the button clicked
		
		if (openTab[numeroBouton] === false){
			nbrOpenButton += 1 ; 
			openTab[numeroBouton]=true;
			
			if (getTypeOfMedia() === "small") { 
					
				$(".skills__container").addClass("skills__container--open-mobile-"+nbrOpenButton);
				$(".skills__container").removeClass("skills__container--open-mobile-"+(nbrOpenButton-1));
				
				
			} else if (getTypeOfMedia() === "medium") {
					
				if ((whatRowIsOpenTablet(openTab) === "one open" ) || (whatRowIsOpenTablet(openTab) === "two open" )) { 
					
						$(".skills__container").addClass("skills__container--open-one-tablet"); 
						$(".skills__container").removeClass("skills__container--open-both-tablet");
						
				} else if (whatRowIsOpenTablet(openTab) === "both open" ) { 
					
						$(".skills__container").addClass("skills__container--open-both-tablet"); 
						$(".skills__container").removeClass("skills__container--open-one-tablet"); 
				} 
					 
			} else { 
			
				if (nbrOpenButton === 1) { 
				
					$(".skills__container").addClass("skills__container--open-desktop");
					
				}
			}
			
			$(".skills__c"+numeroBouton).addClass("skills__col--open");
			$(".skills__description-"+numeroBouton).slideDown(650,'easeInOutExpo');		
			$(".skills__photo-"+numeroBouton).addClass ("skills__photo--open");		
			$(".st2.a"+numeroBouton).css ("display", "block");
			$(".st0.a"+numeroBouton).css ("display", "none");
			
			
		}
		
		
		else {
			nbrOpenButton -= 1 ; 
			openTab[numeroBouton]=false;
			
			$(".skills__description-"+numeroBouton).slideUp(350,'easeInOutExpo', function() { 
				
				if (getTypeOfMedia() === "small") { 
					if (nbrOpenButton > 0) { 
						$(".skills__container").addClass("skills__container--open-mobile--"+nbrOpenButton);
					}
					$(".skills__container").removeClass("skills__container-open-mobile-"+(nbrOpenButton+1));
					
				} else if (getTypeOfMedia() === "medium") { 
					
					if ((whatRowIsOpenTablet(openTab) === "one open" ) || (whatRowIsOpenTablet(openTab) === "two open" )) { 
					
						$(".skills__container").addClass("skills__container--open-one-tablet"); 
						$(".skills__container").removeClass("skills__container--open-both-tablet");
						
					} else if (whatRowIsOpenTablet(openTab) === "both open" ) { 
					
						$(".skills__container").addClass("skills__container--open-both-tablet"); 
						$(".skills__container").removeClass("skills__container--open-one-tablet"); 
					} else { 
						$(".skills__container").removeClass("skills__container--open-one-tablet"); 
						
					}
				}
				
				else { 
					
					if (nbrOpenButton === 0) { 
						$(".skills__container").removeClass("skills__container--open-desktop");
					}
				}
				
				$(".skills__c"+numeroBouton).removeClass("skills__col--open");
				$(".skills__photo-"+numeroBouton).removeClass ("skills__photo--open");		
				$(".st2.a"+numeroBouton).css ("display", "none");
				$(".st0.a"+numeroBouton).css ("display", "block");
				
			});
			
			
		}
		

	});

/* ---------------------------------- *\ 
  #REALIZATION SECTION 
\* ---------------------------------- */
	
	$(".realization__arrow-left").click(slideRealLeft); 
	$(".realization__arrow-right").click(slideRealRight); 
	
/* ---------------------------------- *\ 
  #STORY SECTION 
\* ---------------------------------- */

	// init controller
var controller = new ScrollMagic.Controller();

//-------------TITLE MY STORY -------------//

// Keep the title my story centered during 100 vh 
new ScrollMagic.Scene({
		triggerElement: '#story .story-intro',
        duration: (100*vh()),    // last 100 vh 
        offset: (50*vh())       // start this scene after scrolling for 50 vh 
    })
    .setPin("#story .story-intro .story-intro-title") // pins the element for the the scene's duration
    .addIndicators()
	.addTo(controller); // assign the scene to the controller

//-------------FIX LIST YEAR -------------//

// Keep the list year fixed during the whole scroll  
new ScrollMagic.Scene({
		triggerElement: '#story .story-wrapper',
        duration: 400*vh(),    // last 100 vh 
        offset: 50*vh()       // start this scene after scrolling for 50 vh 
    })
    .setPin("#story .story-wrapper .story-list-year ul") // pins the element for the the scene's duration
    .addIndicators()
	.addTo(controller); // assign the scene to the controller

//-------------DISPLAY/HIDE DESCRIPTION IUT -------------//
	
var displayDescriptionIut = new ScrollMagic.Scene({
	triggerElement: ".story-france-1",
	duration:150*vh(),
	offset:100*vh()
	})					
	
	.setTween(".wrapper-description-iut", 0.2, {opacity: "6" })	
	.setClassToggle(".wrapper-description-iut", "fixed-wrapper-iut")
	.addIndicators()				
	.addTo(controller);


	
var hideDescriptionIut = new ScrollMagic.Scene({
	triggerElement: ".story-france-1",
	duration:50*vh(),
	offset:200*vh()
	})						
	
	.setTween(".wrapper-description-iut", 0.2, {opacity: "0" })	
	.addIndicators()				
	.addTo(controller); 
	
//-------------LINE TO CANADA-------------//
	
	
	// prepare SVG
	var $path = $("#line-to-canada");
	pathPrepare($path);
	
	var tween = new TimelineMax()
		.add(TweenMax.to($path, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		//.add(TweenMax.to("path", 1, {stroke: "#fff", ease:Linear.easeNone}), 0);			// change color during the whole thing
		
	var scene = new ScrollMagic.Scene({triggerElement: ".story-france-1", duration: 100*vh(), offset:200*vh(), tweenChanges: true})
					.setTween(tween)
					.setClassToggle(".wrapper-line-to-canada","fixed-wrapper-line-to-canada")
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

//-------------2009 -------------//

var toggleYear2009 = new ScrollMagic.Scene({
	triggerElement: "#story .story-wrapper",
	duration:100*vh(),
	offset: 50*vh()
	})						
	
	.setClassToggle(".y2009", "active")	
	.addIndicators()				
	.addTo(controller); 

//-------------2010 -------------//
	
var toggleYear2010 = new ScrollMagic.Scene({
	triggerElement: "#story .story-wrapper",
	duration:50*vh(),
	offset: (150*vh())
	})						
	
	.setClassToggle(".y2010", "active")
	.addIndicators()					
	.addTo(controller); 
	
//-------------2011 -------------//
	
var toggleYear2011 = new ScrollMagic.Scene({
	triggerElement: "#story .story-wrapper",
	duration:100*vh(),
	offset: (200*vh())
	})						
	
	.setClassToggle(".y2011", "active")
	.addIndicators()					
	.addTo(controller); 
	
});//End of .ready(function())


function pathPrepare ($el) {
	"use strict";
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	}

function whatRowIsOpenTablet(array)//realization section --- Tablet, return the number of row open
{
	"use strict";
	var topOpen = false, 
		bottomOpen = false,
		status ;
	for (var i = 1; i < array.length; i++) { 
		if (array[i] === true) { 
			if (i <= 2) { 
				topOpen = true; 
			} else { 
				bottomOpen = true; 
			}
		}
	}
	
	if ((topOpen === false ) && (bottomOpen === false)) { 
		status = "none open" ;
		
	} else if (topOpen === true) {
		
		if (bottomOpen === true) {
			status = "both open"; 
		} else { 
			status = "one open"; 
		} 
		
	} else { 
		status = "two open"; 
	}
	return status; 
}

function slideRealRight() { 
	"use strict";
	var currentSlide = $('.realization__slide--active');
	var nextSlide = currentSlide.next();
	var currentSlideTextSelector = currentSlide.find("p").selector;
	var nextSlideTextSelector = nextSlide.find("p").selector;
	
	
	if (nextSlide.length === 0) { 
           /* nextSlide = $('.slide-real').first();
			currentSlide.animate({"right":"-100vw"}, "slow").removeClass('active-slide-real');
			nextSlide.animate({"left":"0"}, "slow").addClass('active-slide-real');*/
	} else { 
	
		$(currentSlideTextSelector).fadeOut("fast"); 
		$(nextSlideTextSelector).fadeIn("slow"); 
		currentSlide.animate({"left":"-100vw"}, "slow", 'easeInOutExpo').removeClass('realization__slide--active');
		nextSlide.animate({"left":"0"}, "slow", 'easeInOutExpo').addClass('realization__slide--active');
    }
		
	var currentDot = $('.realization__slider-dots .dot--active');
	var nextDot = currentDot.next(); 
	if(nextDot.length === 0) { 
				/*nextDot = $('.dot').first();*/
	}
	else {
		currentDot.removeClass('dot--active'); 
		nextDot.addClass('dot--active'); 
	}
}

function slideRealLeft() { 
	"use strict";
	var currentSlide = $('.realization__slide--active');
	var prevSlide = currentSlide.prev();
	var currentSlideTextSelector = currentSlide.find("p").selector;
	var prevSlideTextSelector = prevSlide.find("p").selector;
		
	if (prevSlide.length === 0) { 
            /*prevSlide = $('.slide-real').last();
			  
			currentSlide.animate({"left":"-100vw"}, "slow").removeClass('active-slide-real');
			prevSlide.animate({"right":"0"}, "slow").addClass('active-slide-real');*/
	} else { 
		$(currentSlideTextSelector).fadeOut("fast"); 
		$(prevSlideTextSelector).fadeIn("fast"); 
		currentSlide.animate({"left":"100vw"}, "slow", 'easeInOutExpo').removeClass('realization__slide--active');
		prevSlide.animate({"left":"0"}, "slow", 'easeInOutExpo').addClass('realization__slide--active');
    }
		
	var currentDot = $('.realization__slider-dots .dot--active');
	var prevDot = currentDot.prev(); 
	
	if(prevDot.length === 0) { 
				/*prevDot = $('.dot').last();*/
	} else {
		currentDot.removeClass('dot--active'); 
		prevDot.addClass('dot--active'); 
	}
			
}

function sizeHeightMobile() // return the height of the screen minus the menu height
{
	"use strict"; 
	var height = (100 * vh()) - (4 * rem); 
	return height; 
}

function sizeWidthDesktop() // return the height of the screen minus the menu width
{
	"use strict"; 
	var width = (100 * vw()) - (4 * rem); 
	return width; 
}

function getTypeOfMedia() //return the size of the screen, small, medium, large or x-large
{ 
	"use strict"; 
	var widthRem = screenWidth() / rem; 
	
	if (widthRem < 40.0625) {
		
		return "small";
		
	} else if (widthRem < 64.0625) {
		
		return "medium";
		
	} else if (widthRem < 90.0625) {
		
		return "large";
		
	} else { 
		
		return "x-large";
	}
	
	
	
	
} 

function vw() { 
	"use strict";
	return screenWidth() / 100.00; 
} 

function vh() { 
	"use strict";
	return screenHeight() / 100.00; 
} 

function screenWidth() //return the width of the screen  
{	
	"use strict";
	return $(window).width(); 
} 

function screenHeight() //return the height of the screen 
{	
	"use strict";
	return $(window).height();
} 

var htmlAll = document.getElementsByTagName('html')[0]; // Select the html object 
var rem = parseFloat(window.getComputedStyle(htmlAll, null).getPropertyValue("font-size"),10); // Get the font-size and remove the 'px'
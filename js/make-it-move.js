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
						$(".skills__container").addClass("skills__container--open-mobile-"+nbrOpenButton);
					}
					$(".skills__container").removeClass("skills__container--open-mobile-"+(nbrOpenButton+1));
					
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
		triggerElement: '.story__intro',
        duration: (100*vh()),    // last 100 vh 
        offset: (50*vh())       // start this scene after scrolling for 50 vh 
    })
    .setPin(".story__intro-title") // pins the element for the the scene's duration
    
	.addTo(controller); // assign the scene to the controller
	
	
	
	
	
	

//-------------FIX LIST YEAR -------------//

// Keep the list year fixed during the whole scroll 

if (getTypeOfMedia() !== "small") { 

	new ScrollMagic.Scene({
			triggerElement: '.story__wrapper',
			duration: 1200*vh(),    // last 100 vh 
			offset: 50*vh()       // start this scene after scrolling for 50 vh 
		})
		.setPin(".story__list-year ul") // pins the element for the the scene's duration
		
		.addTo(controller); // assign the scene to the controller  
		
	//  Make the year font white for blue background 
	
	new ScrollMagic.Scene({
			triggerElement: '.story__canada',
			duration: 225*vh(),    
			offset: 25*vh()       // start this scene after scrolling for 50 vh 
		})
		.setClassToggle(".story__year", "story__year--white")
		
		.addTo(controller); // assign the scene to the controller  
}

//-------------2009 -------------//

var toggleYear2009 = new ScrollMagic.Scene({
	triggerElement: ".story__wrapper",
	duration:100*vh(),
	offset: 50*vh()
	})						
	
	.setClassToggle(".story__y2009", "story__year--active")	
					
	.addTo(controller); 

//-------------2010 -------------//
	
var toggleYear2010 = new ScrollMagic.Scene({
	triggerElement: ".story__wrapper",
	duration:50*vh(),
	offset: (150*vh())
	})						
	
	.setClassToggle(".story__y2010", "story__year--active")
						
	.addTo(controller); 
	
//-------------2011 -------------//
	
var toggleYear2011 = new ScrollMagic.Scene({
	triggerElement: ".story__wrapper",
	duration:450*vh(),
	offset: (200*vh())
	})						
	
	.setClassToggle(".story__y2011", "story__year--active")
						
	.addTo(controller); 

//-------------2012 -------------//

var toggleYear2012 = new ScrollMagic.Scene({
	triggerElement: ".story__wrapper",
	duration:250*vh(),
	offset: (650*vh())
	})						
	
	.setClassToggle(".story__y2012", "story__year--active")
						
	.addTo(controller); 

//-------------2013 -------------//

var toggleYear2013 = new ScrollMagic.Scene({
	triggerElement: ".story__wrapper",
	duration:150*vh(),
	offset: (900*vh())
	})						
	
	.setClassToggle(".story__y2013", "story__year--active")
						
	.addTo(controller); 

//-------------2014 -------------//

var toggleYear2014 = new ScrollMagic.Scene({
	triggerElement: ".story__wrapper",
	duration:150*vh(),
	offset: (1050*vh())
	})						
	
	.setClassToggle(".story__y2014", "story__year--active")
						
	.addTo(controller); 
	
//-------------2015 -------------//

var toggleYear2015 = new ScrollMagic.Scene({
	triggerElement: ".story__wrapper",
	duration:50*vh(),
	offset: (1200*vh())
	})						
	
	.setClassToggle(".story__y2015", "story__year--active")
						
	.addTo(controller); 
	
	
	
	
	

//-------------DISPLAY/HIDE DESCRIPTION IUT -------------//

//Toggle the class which 'display:block' the div 

var displayDescriptionIut = new ScrollMagic.Scene({
		triggerElement: ".story__france-1",
		duration:125*vh(),
		offset:100*vh()
	})	
					
	.setClassToggle(".story__wrapper-description-iut","story__wrapper-description-iut--display")
					
	.addTo(controller);
	
// Setting the Fade In 

var fadeInDescriptionIut = new ScrollMagic.Scene({
		triggerElement: ".story__france-1",
		duration:25*vh(),
		offset:100*vh()
	})		
				
	.setTween(".story__wrapper-description-iut", 0.2, {opacity: "1" })	
					
	.addTo(controller);


// Setting the Fade Out 
	
var fadeOutDescriptionIut = new ScrollMagic.Scene({
	triggerElement: ".story__france-1",
	duration:25*vh(),
	offset:200*vh()
	})						
	
	.setTween(".story__wrapper-description-iut", 0.2, {opacity: "0" })	
					
	.addTo(controller); 
	
	
	
	
	
	
//-------------LINE TO CANADA-------------//
	
	
// prepare SVG

var $canadaPath = $("#story__line-to-canada");
pathPrepare($canadaPath);


// Setting of the tween 

var drawFranceCanadaLine = new TimelineMax()
	.add(TweenMax.to($canadaPath, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
	//.add(TweenMax.to("path", 1, {stroke: "#fff", ease:Linear.easeNone}), 0);			// change color during the whole thing


// Display the div that contains the line 

var displayLineToCanada = new ScrollMagic.Scene({
	triggerElement: ".story__france-1",
	duration: 100*vh(),
	offset:200*vh(),
	})
	
	.setClassToggle(".story__wrapper-line-to-canada","story__wrapper-line-to-canada--display")
	 // add indicators (requires plugin)
	.addTo(controller);
	
	
// Draw the line  
		
var drawLineToCanada = new ScrollMagic.Scene({
	triggerElement: ".story__france-1",
	duration: 50*vh(),
	offset: 200*vh(),
	tweenChanges: true
	})
	
	.setTween(drawFranceCanadaLine )
	 // add indicators (requires plugin)
	.addTo(controller);
	
	
// Erase the line 

var eraseLineToCanada = new ScrollMagic.Scene({
	triggerElement: ".story__france-1",
	duration: 25*vh(),
	offset: 250*vh(),
	tweenChanges: true
	})
	
	.setTween("#story__line-to-canada", 0.2, {opacity: "0" })
	 // add indicators (requires plugin)
	.addTo(controller); 
	
var upLineToCanada = new ScrollMagic.Scene({
	triggerElement: ".story__france-1",
	duration: 50*vh(),
	offset: 250*vh(),
	tweenChanges: true
	})
	
	.setTween(".story__wrapper-line-to-canada", 0.2, {top: "-400px"})
	 // add indicators (requires plugin)
	.addTo(controller); 

	
	
	
	
	
	
	
//-------------DISPLAY/HIDE DESCRIPTION CANADA -------------//

//Toggle the class which 'display:block' the div 

var displayDescriptionIut = new ScrollMagic.Scene({
		triggerElement: ".story__canada",
		duration:125*vh(),
		offset:50*vh()
	})	
					
	.setClassToggle(".story__wrapper-description-canada","story__wrapper-description-canada--display")
					
	.addTo(controller);
	
// Setting the Fade In 

var fadeInDescriptionIut = new ScrollMagic.Scene({
		triggerElement: ".story__canada",
		duration:25*vh(),
		offset:50*vh()
	})		
				
	.setTween(".story__wrapper-description-canada", 0.2, {opacity: "1" })	
					
	.addTo(controller);


// Setting the Fade Out 
	
var fadeOutDescriptionIut = new ScrollMagic.Scene({
	triggerElement: ".story__canada",
	duration:25*vh(),
	offset:150*vh()
	})						
	
	.setTween(".story__wrapper-description-canada", 0.2, {opacity: "0" })	
					
	.addTo(controller); 






//-------------LINE TO FINLAND-------------//
	
	
// prepare SVG

var $finlandPath = $("#story__line-to-finland");
pathPrepare($finlandPath);


// Setting of the tween 

var drawCanadaFinlandLine = new TimelineMax()
	.add(TweenMax.to($finlandPath, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9


// Display the div that contains the line 

var displayLineToFinland = new ScrollMagic.Scene({
	triggerElement: ".story__canada",
	duration: 100*vh(),
	offset:150*vh(),
	})
	
	.setClassToggle(".story__wrapper-line-to-finland","story__wrapper-line-to-finland--display")
	 // add indicators (requires plugin)
	.addTo(controller);
	
	
// Draw the line  
		
var drawLineToFinland = new ScrollMagic.Scene({
	triggerElement: ".story__canada",
	duration: 50*vh(),
	offset: 150*vh(),
	tweenChanges: true
	})
	
	.setTween(drawCanadaFinlandLine)
	 // add indicators (requires plugin)
	.addTo(controller);
	
	
// Erase the line 

var eraseLineToFinland = new ScrollMagic.Scene({
	triggerElement: ".story__canada",
	duration: 50*vh(),
	offset: 200*vh(),
	tweenChanges: true
	})
	
	.setTween("#story__line-to-finland", 0.2, {opacity: "0" })
	 // add indicators (requires plugin)
	.addTo(controller); 
	
var upLineToFinland = new ScrollMagic.Scene({
	triggerElement: ".story__canada",
	duration: 50*vh(),
	offset: 200*vh(),
	tweenChanges: true
	})
	
	.setTween(".story__wrapper-line-to-finland", 0.2, {top: "-200px"})
	 // add indicators (requires plugin)
	.addTo(controller); 
	
	
	
	
	
	


//-------------DISPLAY/HIDE DESCRIPTION FINLAND -------------//

//Toggle the class which 'display:block' the div 

var displayDescriptionIut = new ScrollMagic.Scene({
		triggerElement: ".story__finland",
		duration:125*vh(),
		offset:50*vh()
	})	
					
	.setClassToggle(".story__wrapper-description-finland","story__wrapper-description-finland--display")
					
	.addTo(controller);
	
// Setting the Fade In 

var fadeInDescriptionIut = new ScrollMagic.Scene({
		triggerElement: ".story__finland",
		duration:25*vh(),
		offset:50*vh()
	})		
				
	.setTween(".story__wrapper-description-finland", 0.2, {opacity: "1" })	
					
	.addTo(controller);


// Setting the Fade Out 
	
var fadeOutDescriptionIut = new ScrollMagic.Scene({
	triggerElement: ".story__finland",
	duration:25*vh(),
	offset:150*vh()
	})						
	
	.setTween(".story__wrapper-description-finland", 0.2, {opacity: "0" })	
					
	.addTo(controller); 







//-------------LINE BACK TO FRANCE ------------//
	
	
// prepare SVG

var $francePath = $("#story__line-to-france");
pathPrepare($francePath);


// Setting of the tween 

var drawCanadaFranceLine = new TimelineMax()
	.add(TweenMax.to($francePath, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9


// Display the div that contains the line 

var displayLineToFrance = new ScrollMagic.Scene({
	triggerElement: ".story__finland",
	duration: 100*vh(),
	offset:150*vh(),
	})
	
	.setClassToggle(".story__wrapper-line-to-france","story__wrapper-line-to-france--display")
	 // add indicators (requires plugin)
	.addTo(controller);
	
	
// Draw the line  
		
var drawLineToFrance = new ScrollMagic.Scene({
	triggerElement: ".story__finland",
	duration: 50*vh(),
	offset: 150*vh(),
	tweenChanges: true
	})
	
	.setTween(drawCanadaFranceLine)
	 // add indicators (requires plugin)
	.addTo(controller);
	
	
// Erase the line 

var eraseLineToFrance = new ScrollMagic.Scene({
	triggerElement: ".story__finland",
	duration: 50*vh(),
	offset: 200*vh(),
	tweenChanges: true
	})
	
	.setTween("#story__line-to-france", 0.2, {opacity: "0" })
	 // add indicators (requires plugin)
	.addTo(controller); 
	
var upLineToFinland = new ScrollMagic.Scene({
	triggerElement: ".story__finland",
	duration: 50*vh(),
	offset: 200*vh(),
	tweenChanges: true
	})
	
	.setTween(".story__wrapper-line-to-france", 0.2, {top: "-200px"})
	 // add indicators (requires plugin)
	.addTo(controller); 
	
	
	


//-------------DISPLAY/HIDE DESCRIPTION GEM 1A -------------//

//Toggle the class which 'display:block' the div 

var displayDescriptionIut = new ScrollMagic.Scene({
		triggerElement: ".story__france-2",
		duration:125*vh(),
		offset:50*vh()
	})	
					
	.setClassToggle(".story__wrapper-description-gem","story__wrapper-description-gem--display")
					
	.addTo(controller);

//Toggle the class which 'display:block' the title/text for 1A 

var displayDescriptionIut = new ScrollMagic.Scene({
		triggerElement: ".story__france-2",
		duration:125*vh(),
		offset:50*vh()
	})	
					
	.setClassToggle(".story__description-gem-1A","story__description-gem-1A--display")
					
	.addTo(controller);
	
// Setting the Fade In 

var fadeInDescriptionIut = new ScrollMagic.Scene({
		triggerElement: ".story__france-2",
		duration:25*vh(),
		offset:50*vh()
	})		
				
	.setTween(".story__wrapper-description-gem", 0.2, {opacity: "1" })	
					
	.addTo(controller);


// Setting the Fade Out 
	
var fadeOutDescriptionIut = new ScrollMagic.Scene({
	triggerElement: ".story__france-2",
	duration:25*vh(),
	offset:150*vh()
	})						
	
	.setTween(".story__wrapper-description-gem", 0.2, {opacity: "0" })	
					
	.addTo(controller); 
	
	
	
	

//-------------DISPLAY/HIDE DESCRIPTION DEVOTEAM -------------//

//Toggle the class which 'display:block' the div 

var displayDescriptionIut = new ScrollMagic.Scene({
		triggerElement: ".story__france-2",
		duration:125*vh(),
		offset:200*vh()
	})	
					
	.setClassToggle(".story__wrapper-description-devoteam","story__wrapper-description-devoteam--display")
					
	.addTo(controller);
	
// Setting the Fade In 

var fadeInDescriptionIut = new ScrollMagic.Scene({
		triggerElement: ".story__france-2",
		duration:25*vh(),
		offset:200*vh()
	})		
				
	.setTween(".story__wrapper-description-devoteam", 0.2, {opacity: "1" })	
					
	.addTo(controller);


// Setting the Fade Out 
	
var fadeOutDescriptionIut = new ScrollMagic.Scene({
	triggerElement: ".story__france-2",
	duration:25*vh(),
	offset:300*vh()
	})						
	
	.setTween(".story__wrapper-description-devoteam", 0.2, {opacity: "0" })	
					
	.addTo(controller); 
	
	
	
	
	
//-------------DISPLAY/HIDE DESCRIPTION GEM 2A -------------//

//Toggle the class which 'display:block' the div 

var displayDescriptionIut = new ScrollMagic.Scene({
		triggerElement: ".story__france-2",
		duration:125*vh(),
		offset:350*vh()
	})	
					
	.setClassToggle(".story__wrapper-description-gem","story__wrapper-description-gem--display")
					
	.addTo(controller);

//Toggle the class which 'display:block' the title/text for 1A 

var displayDescriptionIut = new ScrollMagic.Scene({
		triggerElement: ".story__france-2",
		duration:125*vh(),
		offset:350*vh()
	})	
					
	.setClassToggle(".story__description-gem-2A","story__description-gem-2A--display")
					
	.addTo(controller);
	
// Setting the Fade In 

var fadeInDescriptionIut = new ScrollMagic.Scene({
		triggerElement: ".story__france-2",
		duration:25*vh(),
		offset:350*vh()
	})		
				
	.setTween(".story__wrapper-description-gem", 0.2, {opacity: "1" })	
					
	.addTo(controller);


// Setting the Fade Out 
	
var fadeOutDescriptionIut = new ScrollMagic.Scene({
	triggerElement: ".story__france-2",
	duration:25*vh(),
	offset:450*vh()
	})						
	
	.setTween(".story__wrapper-description-gem", 0.2, {opacity: "0" })	
					
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

var htmlAll = document.getElementsByTagName('html')[0]; // Select the 'html' object 
var rem = parseFloat(window.getComputedStyle(htmlAll, null).getPropertyValue("font-size"),10); // Get the font-size and remove the 'px'
$( document ).ready(function() {
	"use strict";
	
	var openTab = [,false,false,false,false];
	var nbrOpenButton = 0 ;
	
	$(".rounded-button").click(function() {
		
		var equiv =$(this.className);//récupère le nom de la classe qui a été cliquée (création d'un objet) 
		var numeroBouton = equiv.selector.slice(16,17);//récupère le numéro du bouton dans l'objet
		
		
		if (openTab[numeroBouton] === false){
			nbrOpenButton += 1 ; 
			if (getTypeOfMedia() === "small") { 
					
				$(".skills-container").addClass("skills-container-mobile-open-"+nbrOpenButton);
				$(".skills-container").removeClass("skills-container-mobile-open-"+(nbrOpenButton-1));
				
				} else { 
			
				if (nbrOpenButton === 1) { 
				
					$(".skills-container").addClass("open-skills-container-desktop");
					
				}
			}
			
			$(".skill-col.c"+numeroBouton).addClass("open-skill-col");
			$(".skill-description-"+numeroBouton).slideDown(650,'easeInOutExpo');		
			$(".skill-photo-"+numeroBouton).addClass ("photo-open");		
			$(".st2.a"+numeroBouton).css ("display", "block");
			$(".st0.a"+numeroBouton).css ("display", "none");
			
			openTab[numeroBouton]=true;
		}
		
		
		else {
			nbrOpenButton -= 1 ; 
			
			$(".skill-description-"+numeroBouton).slideUp(350,'easeInOutExpo', function() { 
				
				if (getTypeOfMedia() === "small") { 
					if (nbrOpenButton > 0) { 
						$(".skills-container").addClass("skills-container-mobile-open-"+nbrOpenButton);
					}
					$(".skills-container").removeClass("skills-container-mobile-open-"+(nbrOpenButton+1));
					
				} else { 
					
					if (nbrOpenButton === 0) { 
						$(".skills-container").removeClass("open-skills-container-desktop");
					}
				}
				
				$(".skill-col.c"+numeroBouton).removeClass("open-skill-col");
				$(".skill-photo-"+numeroBouton).removeClass ("photo-open");		
				$(".st2.a"+numeroBouton).css ("display", "none");
				$(".st0.a"+numeroBouton).css ("display", "block");
				
			});
			
			openTab[numeroBouton]=false;
		}
		

	});
	
	$(".arrow-left").click(slideRealLeft); 
	$(".arrow-right").click(slideRealRight); 
	
});

function slideRealRight() { 
	"use strict";
	var currentSlide = $('.active-slide-real');
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
		currentSlide.animate({"left":"-100vw"}, "slow", 'easeInOutExpo').removeClass('active-slide-real');
		nextSlide.animate({"left":"0"}, "slow", 'easeInOutExpo').addClass('active-slide-real');
    }
		
	var currentDot = $('.active-dot');
	var nextDot = currentDot.next(); 
	if(nextDot.length === 0) { 
				/*nextDot = $('.dot').first();*/
	}
	else {
		currentDot.removeClass('active-dot'); 
		nextDot.addClass('active-dot'); 
	}
}

function slideRealLeft() { 
	"use strict";
	var currentSlide = $('.active-slide-real');
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
		currentSlide.animate({"left":"100vw"}, "slow", 'easeInOutExpo').removeClass('active-slide-real');
		prevSlide.animate({"left":"0"}, "slow", 'easeInOutExpo').addClass('active-slide-real');
    }
		
	var currentDot = $('.active-dot');
	var prevDot = currentDot.prev(); 
	
	if(prevDot.length === 0) { 
				/*prevDot = $('.dot').last();*/
	} else {
		currentDot.removeClass('active-dot'); 
		prevDot.addClass('active-dot'); 
	}
			
}

function getHeightOfSkillsContainer () { 
	"use strict"; 
	return $(".skills-container").height();
}

function sizeHeightSkillCol() {// for  desktopreturn the height of the screen minus the title for 
	"use strict"; 
	var height = (100 * vh()) - (4 * rem); 
	return height; 
}

function sizeHeightMobile() {// return the height of the screen minus the menu height
	"use strict"; 
	var height = (100 * vh()) - (4 * rem); 
	return height; 
}

function sizeWidthDesktop() {// return the height of the screen minus the menu width
	"use strict"; 
	var width = (100 * vw()) - (4 * rem); 
	return width; 
}

function getTypeOfMedia() { //return the size of the screen, small, medium, large or x-large
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

function screenWidth() {	//return the width of the screen 
	"use strict";
	return $(window).width(); 
} 

function screenHeight() {	//return the height of the screen 
	"use strict";
	return $(window).height();
} 

var htmlAll = document.getElementsByTagName('html')[0]; // Select the html object 
var rem = parseFloat(window.getComputedStyle(htmlAll, null).getPropertyValue("font-size"),10); // Get the font-size and remove the 'px'
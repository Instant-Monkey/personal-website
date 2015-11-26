$( document ).ready(function() {
	"use strict";
	
		// init controller for ScrollMagic
	//var controller = new ScrollMagic.Controller();
	
	$('.story-intro').waypoint(function() {
    console.log('You have scrolled to an entry.');
	});
	
});
/*
	var pinMyStoryScene = new ScrollMagic.Scene( //Pin the introduction title of Story Section
	{ 
		triggerElement: '#story',
        duration: 1500,    // the scene should last for a scroll distance of X px
        offset: 700        // start this scene after scrolling for X px
    })
    	.setPin(".story-intro-title") // pins the element for the the scene's duration
		.addIndicators()
    	.addTo(controller);

	
});


function vh() { 
	"use strict";
	return screenHeight() / 100.00; 
} 



function screenHeight() //return the height of the screen 
{	
	"use strict";
	return window.innerWidth;
} */
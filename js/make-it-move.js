$( document ).ready(function() {
	"use strict";
	
	
	
/* ---------------------------------- *\ 
  #SMOOTH SCROLLING, MAKE ANCHORS BUG ON MOBILE 
\* ---------------------------------- */

if (getTypeOfMedia() === "large" || getTypeOfMedia() === "x-large") {
$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

}

// fix scrollmagic bug on IE 

if(navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge/)) { // if IE

        $('body').on("mousewheel", function () {
            // remove default behavior
            event.preventDefault(); 

        
            

            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);

        });
}

/* ---------------------------------- *\ 
  #FUNCTION DISPLAY SOURCE CODE 
\* ---------------------------------- */

$(function() {
	$("<pre />", {
		"html":   '&lt;!DOCTYPE html>\n&lt;html>\n' + 
				$("html")
					.html().replace(/[<>]/g, function(m) { return {'<':'&lt;','>':'&gt;'}[m]})					
	}).appendTo("#source-code");
});

$("#source-code-link").click(function() { 
	$("#source-code").css("display","block");;
});

$("#close-source-code").click(function() { 
	$("#source-code").css("display","none");;
});


/* ---------------------------------- *\ 
  #MENU MOBILE ANIMATION
\* ---------------------------------- */

var menuMobileOpen = false; 
var menuMobileSize = $('.menu__mobile').height();

if (getTypeOfMedia() === "small" || getTypeOfMedia() === "medium") {
	
	$('.menu__mobile-hamburger-container').click(function() { 
		if (menuMobileOpen === false) { 
			
			$('.menu__mobile-hamburger-svg').fadeOut(100);
			$('.menu__mobile-cross-svg').fadeIn(440);
			$('.menu__mobile-icones li').fadeIn(440);
			if (getTypeOfMedia() === "small") { 
				$('.menu__mobile').animate({ 
					height: screenHeight() ,
				opacity:'0.85'
				}, 440,'easeOutBounce');
			} else { 
				$('.menu__mobile').animate({ 				 
					height: 450,
					opacity:'0.85'
				}, 440,'easeOutBounce');
			}
			
			menuMobileOpen = true; 
			
		} else { 
			$('.menu__mobile-icones li').fadeOut(300);
			$('.menu__mobile-cross-svg').fadeOut(100);
			$('.menu__mobile-hamburger-svg').fadeIn(200);
			$('.menu__mobile').animate({ 
				height: menuMobileSize,
				opacity:'1'
			}, 440,'easeInOutExpo');
			menuMobileOpen = false; 
		}
	});

	$('.menu__mobile-icones').click(function() { 
		$('.menu__mobile-icones li').fadeOut(300);
			$('.menu__mobile-cross-svg').fadeOut(100);
			$('.menu__mobile-hamburger-svg').fadeIn(200);
			$('.menu__mobile').animate({ 
				height: menuMobileSize,
				opacity:'1'
			}, 440,'easeInOutExpo');
			if (getTypeOfMedia() === "small" ){$("#introduction").css("top","4rem");}
			menuMobileOpen = false; 

	});
}

/* ---------------------------------- *\ 
  #MENU DESKTOP ANIMATION
\* ---------------------------------- */

if (getTypeOfMedia() === "large" || "x-large") {
	$('.menu__desktop-icones li')
	  .hover(function(e) {
		$(this).hoverFlow(e.type, { 
		left: 20,
		width: 260, 
		backgroundColor: "#f1f5f5"
		
		}, 'fast').addClass( "menu__desktop-icone--open" );
	  }, function(e) {
		$(this).hoverFlow(e.type, { 
		left: 0 ,
		width:80,
		backgroundColor: "#e74c3c"
		
		}, 'fast').removeClass( "menu__desktop-icone--open" );
	  });
}

function highlightIconMenu(icon) { 
	"use strict";
	$(icon)
		.css('background-color', "#f1f5f5"); 
	$(icon+' a svg')
		.css({stroke: "#E74C3C"});
}

	// init controller
var highlightMenuController = new ScrollMagic.Controller({
	globalSceneOptions: { 
   		triggerHook: .025,
   		reverse: true
  }
});

var scenes = {
  'intro': {
    'home': 'home__nav'
  },
  'scene2': {
    'skills': 'skills__nav'
  },
  'scene3': {
    'realization': 'realization__nav'
  },
  'scene4': {
    'story': 'story__nav'
  },
  'scene5': {
    'hobby': 'hobby__nav'
  },
  'scene6': {
    'contact': 'contact__nav'
  }
}


for(var key in scenes) {
  // skip loop if the property is from prototype
  if (!scenes.hasOwnProperty(key)) continue;

  var obj = scenes[key];

  for (var prop in obj) {
    // skip loop if the property is from prototype
    if(!obj.hasOwnProperty(prop)) continue;

    new ScrollMagic.Scene({ triggerElement: '#'+prop, duration: $('#'+prop).height(),  })
        .setClassToggle('#'+obj[prop], 'menu__desktop-icone--active')
		.addTo(highlightMenuController); // assign the scene to the controller
  }
	
} 

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
			$(".skills__description-"+numeroBouton).slideDown(225,'easeInOutExpo');		
			$(".skills__photo-"+numeroBouton).addClass ("skills__photo--open");		
			$(".st2.a"+numeroBouton).css ("display", "block");
			$(".st0.a"+numeroBouton).css ("display", "none");
			
			
		}
		
		
		else {
			nbrOpenButton -= 1 ; 
			openTab[numeroBouton]=false;
			
			$(".skills__description-"+numeroBouton).slideUp(195,'easeInOutExpo', function() { 
				
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

	$.event.special.swipe.scrollSupressionThreshold = 10; // More than this horizontal displacement, and we will suppress scrolling.
	$.event.special.swipe.horizontalDistanceThreshold = 30; // Swipe horizontal displacement must be more than this.
	$.event.special.swipe.durationThreshold = 500;  // More time than this, and it isn't a swipe.
	$.event.special.swipe.verticalDistanceThreshold = 75;
	
	$(".realization__arrow-left").click(slideRealLeft); 
	$(".realization__arrow-right").click(slideRealRight); 
	$(".realization__slide" ).on( "swipeleft", slideRealRight );
	$(".realization__slide" ).on( "swiperight", slideRealLeft );
	$(".dot").click(dotChecker);
	
	
	
	
/* ---------------------------------- *\ 
  #STORY SECTION 
\* ---------------------------------- */

	// init controller
var controller = new ScrollMagic.Controller();

	// When clicking on the arrow of story 

$(".story__arrow").click(activeStoryChecker);



//-------------TITLE MY STORY -------------//

// Keep the title my story centered during 100 vh 

if (getTypeOfMedia() === "large" || getTypeOfMedia() === "x-large")  { 
	new ScrollMagic.Scene({
			triggerElement: '.story__intro',
			duration: (50*vh()),    // last 100 vh 
			offset: (50*vh())       // start this scene after scrolling for 50 vh 
		})
		.setPin(".story__intro-title") // pins the element for the the scene's duration
		
		.addTo(controller); // assign the scene to the controller
	
}

if (getTypeOfMedia() === "large" || getTypeOfMedia() === "x-large")  { 
	new ScrollMagic.Scene({
			triggerElement: '.story__intro',
			duration: (1605*vh()),    // last 100 vh 
			offset: (45*vh())       // start this scene after scrolling for 50 vh 
		})
		.setClassToggle(".story__arrow", "story__arrow--displayed") 
		
		.addTo(controller); // assign the scene to the controller
	
}

// Make the arrow red when on Finland 

if (getTypeOfMedia() === "large" || getTypeOfMedia() === "x-large")  { 
	new ScrollMagic.Scene({
			triggerElement: '.story__finland',
			duration: (245*vh()),    // last 100 vh 
			offset: (-45*vh())       // start this scene after scrolling for 50 vh 
		})
		.setClassToggle(".story__arrow", "story__arrow--red") 
		
		.addTo(controller); // assign the scene to the controller
	
}


	

//-------------FIX LIST YEAR -------------//

// Keep the list year fixed during the whole scroll 

if (getTypeOfMedia() !== "small") { 
		
	
	if (getTypeOfMedia() === "medium") { 

		//Fix the list year for story on tablet 

		new ScrollMagic.Scene({
			triggerElement: '.story__wrapper',
			duration: 350*vh(),    // last 100 vh 
			offset: 25*vh()       // start this scene after scrolling for 50 vh 
		})
		.setClassToggle(".story__list-year", "story__list-year--fixed") // pins the element for the the scene's duration
		
		.addTo(controller); // assign the scene to the controller 

		//Make the list year white when arriving on blue screen

		new ScrollMagic.Scene({
				triggerElement: '.story__canada',
				duration: 100*vh(),    
				offset: 25*vh()       // start this scene after scrolling for 50 vh 
			})
			.setClassToggle(".story__year", "story__year--white")
			
			.addTo(controller); // assign the scene to the controller  

	} else { 

		//Fix the list year for the story on desktop

		new ScrollMagic.Scene({
			triggerElement: '.story__wrapper',
			duration: 1400*vh(),    // last 100 vh 
			offset: 50*vh()       // start this scene after scrolling for 50 vh 
		})
		.setPin(".story__list-year ul") // pins the element for the the scene's duration
		
		.addTo(controller); // assign the scene to the controller  


		//Make the list year white when arriving on blue screen

		new ScrollMagic.Scene({
				triggerElement: '.story__canada',
				duration: 225*vh(),    
				offset: 25*vh()       // start this scene after scrolling for 50 vh 
			})
			.setClassToggle(".story__year", "story__year--white")
			
			.addTo(controller); // assign the scene to the controller  
	}
}










//-------------2009 -------------//

if (getTypeOfMedia() === "large" || getTypeOfMedia() === "x-large") {

	var toggleYear2009 = new ScrollMagic.Scene({
		triggerElement: ".story__wrapper",
		duration:100*vh(),
		offset: 50*vh()
		})						
		
		.setClassToggle(".story__y2009", "story__year--active")	
						
		.addTo(controller); 

} else { 

	var toggleYear2009 = new ScrollMagic.Scene({
		triggerElement: ".story__wrapper",
		duration:50*vh(),
		offset: 0*vh()
		})						
		
		.setClassToggle(".story__y2009", "story__year--active")	
						
		.addTo(controller); 

}

//-------------2010 -------------//

if (getTypeOfMedia() === "large" || getTypeOfMedia() === "x-large") {
	
	var toggleYear2010 = new ScrollMagic.Scene({
		triggerElement: ".story__wrapper",
		duration:50*vh(),
		offset: (150*vh())
		})						
		
		.setClassToggle(".story__y2010", "story__year--active")
							
		.addTo(controller); 

} else { 

	var toggleYear2010 = new ScrollMagic.Scene({
		triggerElement: ".story__wrapper",
		duration:50*vh(),
		offset: (50*vh())
		})						
		
		.setClassToggle(".story__y2010", "story__year--active")
							
		.addTo(controller); 
}
	
//-------------2011 -------------//

if (getTypeOfMedia() === "large" || getTypeOfMedia() === "x-large") {
	
	var toggleYear2011 = new ScrollMagic.Scene({
		triggerElement: ".story__wrapper",
		duration:450*vh(),
		offset: (200*vh())
		})						
		
		.setClassToggle(".story__y2011", "story__year--active")
							
		.addTo(controller); 

} else { 

	var toggleYear2011 = new ScrollMagic.Scene({
		triggerElement: ".story__wrapper",
		duration:150*vh(),
		offset: (100*vh())
		})						
		
		.setClassToggle(".story__y2011", "story__year--active")
							
		.addTo(controller); 
}

//-------------2012 -------------//

if (getTypeOfMedia() === "large" || getTypeOfMedia() === "x-large") {

	var toggleYear2012 = new ScrollMagic.Scene({
		triggerElement: ".story__wrapper",
		duration:250*vh(),
		offset: (650*vh())
		})						
		
		.setClassToggle(".story__y2012", "story__year--active")
							
		.addTo(controller); 

} else { 

	var toggleYear2012 = new ScrollMagic.Scene({
		triggerElement: ".story__wrapper",
		duration:50*vh(),
		offset: (250*vh())
		})						
		
		.setClassToggle(".story__y2012", "story__year--active")
							
		.addTo(controller); 
}

//-------------2013 -------------//

if (getTypeOfMedia() === "large" || getTypeOfMedia() === "x-large") {

	var toggleYear2013 = new ScrollMagic.Scene({
		triggerElement: ".story__wrapper",
		duration:150*vh(),
		offset: (900*vh())
		})						
		
		.setClassToggle(".story__y2013", "story__year--active")
							
		.addTo(controller); 

} else { 

	var toggleYear2013 = new ScrollMagic.Scene({
		triggerElement: ".story__wrapper",
		duration:20*vh(),
		offset: (300*vh())
		})						
		
		.setClassToggle(".story__y2013", "story__year--active")
							
		.addTo(controller); 
}

//-------------2014 -------------//

if (getTypeOfMedia() === "large" || getTypeOfMedia() === "x-large") {

	var toggleYear2014 = new ScrollMagic.Scene({
		triggerElement: ".story__wrapper",
		duration:150*vh(),
		offset: (1050*vh())
		})						
		
		.setClassToggle(".story__y2014", "story__year--active")
							
		.addTo(controller); 

} else { 

	var toggleYear2014 = new ScrollMagic.Scene({
		triggerElement: ".story__wrapper",
		duration:20*vh(),
		offset: (320*vh())
		})						
		
		.setClassToggle(".story__y2014", "story__year--active")
							
		.addTo(controller); 

}
	
//-------------2015 -------------//

if (getTypeOfMedia() === "large" || getTypeOfMedia() === "x-large") {

	var toggleYear2015 = new ScrollMagic.Scene({
		triggerElement: ".story__wrapper",
		duration:150*vh(),
		offset: (1200*vh())
		})						
		
		.setClassToggle(".story__y2015", "story__year--active")
							
		.addTo(controller); 

} else { 
	var toggleYear2015 = new ScrollMagic.Scene({
		triggerElement: ".story__wrapper",
		duration:20*vh(),
		offset: (340*vh())
		})						
		
		.setClassToggle(".story__y2015", "story__year--active")
							
		.addTo(controller); 
}

//-------------2016 -------------//

if (getTypeOfMedia() === "large" || getTypeOfMedia() === "x-large") {

	var toggleYear2016 = new ScrollMagic.Scene({
		triggerElement: ".story__wrapper",
		duration:100*vh(),
		offset: (1350*vh())
		})						
		
		.setClassToggle(".story__y2016", "story__year--active")
							
		.addTo(controller); 

} else { 
	var toggleYear2016 = new ScrollMagic.Scene({
		triggerElement: ".story__wrapper",
		duration:30*vh(),
		offset: (360*vh())
		})						
		
		.setClassToggle(".story__y2016", "story__year--active")
							
		.addTo(controller); 
}

	
	
	
	
if (getTypeOfMedia() === "large" || getTypeOfMedia() === "x-large") {  // All the parallax is not for mobile and tablet 	

//-------------DISPLAY/HIDE DESCRIPTION IUT -------------//

//Toggle the class which 'display:block' the div 

var displayDescriptionIut = new ScrollMagic.Scene({
		triggerElement: ".story__france-1",
		duration:125*vh(),
		offset:100*vh()
	})	
					
	.setClassToggle("#story__experience-IUT","story__wrapper-description-iut--display")
					
	.addTo(controller);
	
// Setting the Fade In 

var fadeInDescriptionIut = new ScrollMagic.Scene({
		triggerElement: ".story__france-1",
		duration:25*vh(),
		offset:100*vh()
	})		
				
	.setTween("#story__experience-IUT", 0.2, {opacity: "1" })	
					
	.addTo(controller);


// Setting the Fade Out 
	
var fadeOutDescriptionIut = new ScrollMagic.Scene({
	triggerElement: ".story__france-1",
	duration:25*vh(),
	offset:200*vh()
	})						
	
	.setTween("#story__experience-IUT", 0.2, {opacity: "0" })	
					
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

var displayDescriptionGem = new ScrollMagic.Scene({
		triggerElement: ".story__france-2",
		duration:150*vh(),
		offset:350*vh()
	})	
					
	.setClassToggle(".story__wrapper-description-gem","story__wrapper-description-gem--display")
					
	.addTo(controller);

//Toggle the class which 'display:block' the title/text for 1A 

var displayDescriptionGem = new ScrollMagic.Scene({
		triggerElement: ".story__france-2",
		duration:150*vh(),
		offset:350*vh()
	})	
					
	.setClassToggle(".story__description-gem-2A","story__description-gem-2A--display")
					
	.addTo(controller);
	
// Setting the Fade In 

var fadeInDescriptionGem = new ScrollMagic.Scene({
		triggerElement: ".story__france-2",
		duration:25*vh(),
		offset:350*vh()
	})		
				
	.setTween(".story__wrapper-description-gem", 0.2, {opacity: "1" })	
					
	.addTo(controller);

var fadeInDescriptionGem = new ScrollMagic.Scene({
		triggerElement: ".story__france-2",
		duration:25*vh(),
		offset:475*vh()
	})		
				
	.setTween(".story__wrapper-description-gem", 0.2, {opacity: "0" })	
					
	.addTo(controller);

//-------------DISPLAY/HIDE DESCRIPTION GOLD NOTE'S RECORDS -------------//

//Toggle the class which 'display:block' the div 

var displayDescriptionGNR = new ScrollMagic.Scene({
		triggerElement: ".story__france-2",
		duration:150*vh(),
		offset:525*vh()
	})	
					
	.setClassToggle(".story__wrapper-description-GNR","story__wrapper-description-GNR--display")
					
	.addTo(controller);
	
// Setting the Fade In 

var fadeInDescriptionGNR = new ScrollMagic.Scene({
		triggerElement: ".story__france-2",
		duration:25*vh(),
		offset:525*vh()
	})		
				
	.setTween(".story__wrapper-description-GNR", 0.2, {opacity: "1" })	
					
	.addTo(controller);



// Setting the Fade Out 
	
var fadeOutDescriptionGNR = new ScrollMagic.Scene({
	triggerElement: ".story__france-2",
	duration:25*vh(),
	offset:650*vh()
	})						
	
	.setTween(".story__wrapper-description-GNR", 0.2, {opacity: "0" })	
					
	.addTo(controller); 



} //end of the not for mobile/tablet condition 
	
});//End of .ready(function())












/* Skills functions() */ 

function whatRowIsOpenTablet(array)//skills section --- Tablet, return the number of row open
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

/*Realization functions()*/ 

function slideRealRight() { 
	"use strict";
	var currentSlide = $('.realization__slide--active');
	var nextSlide = currentSlide.next();
	var currentSlideTextSelector = currentSlide.find("p").selector;
	var nextSlideTextSelector = nextSlide.find("p").selector;
	$(".realization__bouncing-arrow").removeClass("realization__bouncing-arrow");
	
	
	if (nextSlide.length === 0) { 
           /* nextSlide = $('.slide-real').first();
			currentSlide.animate({"right":"-100vw"}, "slow").removeClass('active-slide-real');
			nextSlide.animate({"left":"0"}, "slow").addClass('active-slide-real');*/
	} else { 
	
		$(currentSlideTextSelector).fadeOut("fast"); 
		$(nextSlideTextSelector).fadeIn("slow"); 
		currentSlide.animate({"left":"-100vw"}, "normal", 'easeInOutExpo').removeClass('realization__slide--active');
		nextSlide.animate({"left":"0"}, 375, 'easeInOutExpo').addClass('realization__slide--active');
    }
		
	var currentDot = $('.realization__slider-dots .dot--active');
	var nextDot = currentDot.next(); 
	if(nextDot.length === 0) { 
				/*nextDot = $('.dot').first();*/
	}
	else {
		setTimeout(function () { 
			currentDot.removeClass('dot--active'); 
			nextDot.addClass('dot--active'); 
		},100)
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
		currentSlide.animate({"left":"100vw"}, "normal", 'easeInOutExpo').removeClass('realization__slide--active');
		prevSlide.animate({"left":"0"}, 375, 'easeInOutExpo').addClass('realization__slide--active');
    }
		
	var currentDot = $('.realization__slider-dots .dot--active');
	var prevDot = currentDot.prev(); 
	
	if(prevDot.length === 0) { 
				/*prevDot = $('.dot').last();*/
	} else {
		setTimeout(function () { 
			currentDot.removeClass('dot--active'); 
			prevDot.addClass('dot--active'); 
		},100)
	}
}

function dotChecker() {  

	if ( typeof dotSlideActive === 'undefined' || dotSlideActive	== false 	) { 
		
		var clickedDot = $(this) ;
		var activeDot = $("dot dot--active");

		if (clickedDot.attr('class').indexOf('dot--active') > - 1) { 
			
		} else { 
			dotSlider(clickedDot);	
		}
	}

}

function dotSlider(clickedDot) { 
	dotSlideActive	= true; 
	var i = 1; 
	if (clickedDot.prevAll().hasClass("dot--active")) { 
		slideRealRight();
		

	} else if (clickedDot.nextAll().hasClass("dot--active")){ 
		slideRealLeft();
		
	}

	if (!clickedDot.hasClass("dot--active")) { 
		setTimeout(function () { 
			dotSlider(clickedDot);	
		},300)
	} else { 
		dotSlideActive	= false; 
	}
		
}

/*Story functions */ 

function pathPrepare ($el) {
	"use strict";
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
} 


function activeStoryChecker() { 
	"use strict"; 
		var currentYear = $(".story__year--active"); 
		console.log(currentYear);

		if (currentYear.length == 0) { 
			scrollToSection('#story__trigger--2009')
		} else { 
			var extractYear = $(currentYear).find('a').text();
			var yearToScrollTo = parseInt(extractYear);
			yearToScrollTo ++ ;
			yearToScrollTo.toString();
			if (yearToScrollTo == "2017") { 
				scrollToSection('#hobby');
			} else { 
				scrollToSection('#story__trigger--'+yearToScrollTo);
			}

		}

}

function scrollToSection(hash) {
	"use strict";
    $('html, body').animate({
       	scrollTop: $(hash).offset().top
    }, 1000);

}

/* General functions() */ 

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

function sectionHeight(sectionName) {
	"use strict";
	return $(sectionName).height();
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
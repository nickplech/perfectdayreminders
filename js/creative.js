(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  
 



var hoverAnimation1 = new TimelineLite();

TweenMax.to("#yl3", 0, {
  transformOrigin: "left",
  scaleX: 0
})

hoverAnimation1.to("#yl3", 0.5, {
      scaleX: 1
    })
  .to("#star", 1, {
      transformOrigin: "50% 55%",
      scale: 1,
      rotation: 180,
      fill: "#f7cd45"
  },"-=0.4")
  .to("#page_content", 0.5, {
    y: -50
  }, "-=0.5")
  .to("#rect_mask", 0.5, {
    y: 50
  }, "-=0.5")
  .stop();


document.querySelector("#content1")
  .addEventListener("mouseover", function( event ) {
    hoverAnimation1.play();
});
document.querySelector("#content1")
  .addEventListener("mouseout", function( event ) {
    hoverAnimation1.reverse();
});

var hoverAnimation2 = new TimelineLite();

hoverAnimation2
  .to("#p_rect", 0.6, {
      ease: Power2.easeIn,
      transformOrigin: "center",
      scaleX: 0,
      scaleY: 1.3
    })
  .to("#p_circle", 0.5, {
      transformOrigin: "center",
      scale: 1.5
    },"0")
  .to("#p_circle", 0.5, {
      ease: Power2.easeIn,
      transformOrigin: "center",
      scale: 0
    })
  .to("#triangle", 0.5, {
      ease: Power2.easeIn,
      transformOrigin: "100% 50%",
      scale: 0,
      rotation: 180
    },"-=0.7")
    .to("#Warstwa_5_1_", 1, {
      ease: Power2.easeIn,
      transformOrigin: "center",
      scale: 0,
      rotation: 90
    },"-=1")
    .to("#s1,#s2,#s3", 1, {
      ease: Power2.easeIn,
      transformOrigin: "center",
      rotation: 360
    },"-=1")
    .to("#r1", 0.5, {
      transformOrigin: "center",
      y: 15,
      x: 21,
      scaleY: 1.5,
      scaleX: 1.9
    },"-=0.2")
    .to("#r2", 0.5, {
      transformOrigin: "center",
      y: -69,
      x: -5
    },"-=0.4")
    .to("#r3", 0.5, {
      transformOrigin: "center",
      y: -27,
      x: -21
    },"-=0.4")
  .to("#r5", 0.5, {
      transformOrigin: "center",
      y: 10,
      x: -42,
      scale: 0.8
    },"-=0.4")
  .to("#r6", 0.5, {
      transformOrigin: "center",
      rotation: 90,
      y: -23,
      scale: 1.35
    },"-=0.4")
  .stop();


document.querySelector("#content2")
  .addEventListener("mouseover", function( event ) {
    hoverAnimation2.play();
});
document.querySelector("#content2")
  .addEventListener("mouseout", function( event ) {
    hoverAnimation2.reverse();
});
var hoverAnimation3 = new TimelineLite();

TweenMax.to("#item1", 0, {
  y:-200,
  transformOrigin: "70% 100%",
  rotation:40
})
TweenMax.to("#item2", 0, {
  y:-200,
  transformOrigin: "30% 100%",
  rotation:-40
});
TweenMax.to("#item3", 0, {
  y:-200,
});
TweenMax.to("#item4", 0, {
  y:-200,
});
TweenMax.to("#item5", 0, {
  y:-200,
  transformOrigin: "30% 100%",
  rotation:-40
});

hoverAnimation3
  .to("#item1", 0.6, {
      ease: Power1.easeIn,
      y:0
    })
  .to("#item1", 0.5, {
      ease: Power3.easeOut,
      rotation: 0
    },"-=0.1")
  .to("#basket", 0.2, {
      transformOrigin: "70% 100%",
      ease: Elastic.easeOut,
      rotation:-1
    },"-=0.35")
  .to("#basket", 0.2, {
      ease: Power1.easeInOut,
      rotation:0
    })

  .to("#item2", 0.6, {
      ease: Power1.easeIn,
      y:0
    },"-=0.5")
  .to("#item2", 0.5, {
      ease: Power3.easeOut,
      rotation: 0
    },"-=0.1")
  .to("#basket", 0.2, {
      transformOrigin: "70% 100%",
      ease: Elastic.easeOut,
      rotation:-0.5
    },"-=0.35")
  .to("#basket", 0.2, {
      ease: Power1.easeInOut,
      rotation:0
    })

  .to("#item3", 0.6, {
      ease: Power1.easeIn,
      y:0
    },"-=0.5")
  .to("#basket", 0.2, {
      transformOrigin: "70% 100%",
      ease: Elastic.easeOut,
      rotation:-1
    })
  .to("#basket", 0.2, {
      ease: Power1.easeInOut,
      rotation:0
    })

  .to("#item4", 0.6, {
      ease: Power1.easeIn,
      y:0
    },"-=0.7")
  .to("#basket", 0.2, {
      transformOrigin: "70% 100%",
      ease: Elastic.easeOut,
      rotation:-1
    })
  .to("#basket", 0.2, {
      ease: Power1.easeInOut,
      rotation:0
    })

  .to("#item5", 0.6, {
      ease: Power1.easeIn,
      y:0
    },"-=0.7")
  .to("#item5", 0.5, {
      ease: Power3.easeOut,
      rotation: 0
    },"-=0.1")
  .stop();


document.querySelector("#content3")
  .addEventListener("mouseover", function( event ) {
    hoverAnimation3.timeScale(2).play();
});
document.querySelector("#content3")
  .addEventListener("mouseout", function( event ) {
    hoverAnimation3.timeScale(3).reverse();
});


var hoverAnimation4 = new TimelineLite();

function addRotation (time, ease) {
  hoverAnimation4.to("#land", time, {
      ease: ease,
      y:-72,
      x:73
    })
   .to("#mask", time, {
      ease: ease,
      y:72,
      x:-73
    },"-=" + time)
}
function resetPosition() {
  hoverAnimation4.to("#land", 0, {
      y:0,
      x:0
    })
   .to("#mask", 0, {
      y:0,
      x:0
    })
}

addRotation(2.2, Power2.easeIn);
resetPosition();
addRotation(1, Linear.easeNone);
resetPosition();
addRotation(1, Linear.easeNone);
resetPosition();// End of use strict




})(jQuery); 
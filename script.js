
    gsap.registerPlugin(ScrollTrigger);
  
  
    function addParallaxEffect(element, strength) {
      gsap.to(element, {
        y: -strength * 125, 
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom', 
          end: 'bottom top', 
          scrub: true, 
        },
      });
    }
    addParallaxEffect('.sticky-footer', 5.9);

    gsap.registerPlugin(ScrollTrigger);
  
  
    function addParallaxEffect(element, strength) {
      gsap.to(element, {
        x: strength * 25, 
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom', 
          end: 'bottom top', 
          scrub: true, 
        },
      });
    }
    addParallaxEffect('.cooltext1 h1', 2.9);

  const lenis = new Lenis({
  duration: 1,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

    const allcontainer = gsap.utils.toArray(".container-item");
    const venueImageWrap = document.querySelector(".container-img-wrap");
    const venueImage = document.querySelector(".container-img");

    function initcontainer() {
        allcontainer.forEach((link) => {
            link.addEventListener("mouseenter", venueHover);
            link.addEventListener("mouseleave", venueHover);
            link.addEventListener("mousemove", moveVenueImage);
        });
    }

    function moveVenueImage(e) {
        let xpos = e.clientX;
        let ypos = e.clientY;
        const tl = gsap.timeline();
        tl.to(venueImageWrap, {
            x: xpos,
            y: ypos,
        });
    }

    function venueHover(e) {
        if (e.type === "mouseenter") {
            const targetImage = e.target.dataset.img;

            const tl = gsap.timeline();
            tl.set(venueImage, {
                backgroundImage: `url(${targetImage})`,
            }).to(venueImageWrap, {
                duration: 0.5,
                autoAlpha: 1,
            });
        } else if (e.type === "mouseleave") {
            const tl = gsap.timeline();
            tl.to(venueImageWrap, {
                duration: 0.5,
                autoAlpha: 0,
   
            });
        }
    }

    function init() {
        initcontainer();
    }

    window.addEventListener("load", function () {
        init();
    });

    tl = new TimelineMax();

    tl.from(".navbar > div", 1.6, {
        opacity: 0,
        y: 60,
        ease: Expo.easeInOut,
        delay: 0.6,
    });

    tl.from(
        ".site-logo",
        1.6,
        {
            opacity: 0,
            y: 40,
            ease: Expo.easeInOut,
        },
        "-=1.6"
    );

    tl.staggerFrom(
        ".site-menu > div",
        1,
        {
            opacity: 0,
            y: 60,
            ease: Power2.easeOut,
        },
        0.2
    );

    tl.staggerFrom(
        ".header > div",
        1,
        {
            opacity: 0,
            y: 60,
            ease: Power2.easeOut,
            delay: -1.4,
        },
        0.2
    );

  $(document).ready(function() {
      var cursor = $(".cursor");
      var posX = 0;
      var posY = 0;
      var mouseX = 0;
      var mouseY = 0;
      var lag = 0.1; // Adjust the lag factor (0.1 is a starting point)
  
      $(document).on("mousemove", function(e) {
          mouseX = e.clientX;
          mouseY = e.clientY;
      });
  
      function updateCursorPosition() {
          var dx = mouseX - posX;
          var dy = mouseY - posY;
          posX += dx * lag;
          posY += dy * lag;
          cursor.css({
              left: posX + "px",
              top: posY + "px"
          });
          requestAnimationFrame(updateCursorPosition);
      }
  
      updateCursorPosition();
  
      $(".vid").on("mouseenter", function() {
          cursor.addClass("active");
      });
  
      $(".vid").on("mouseleave", function() {
          cursor.removeClass("active");
      });
  });
  

    $(document).ready(function() {
        var cursor = $(".cursor2");
        var posX = 0;
        var posY = 0;
        var mouseX = 0;
        var mouseY = 0;
        var lag = 0.1; // Adjust the lag factor (0.1 is a starting point)
  
        $(document).on("mousemove", function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
  
        function updateCursorPosition() {
            var dx = mouseX - posX;
            var dy = mouseY - posY;
            posX += dx * lag;
            posY += dy * lag;
            cursor.css({
                left: posX + "px",
                top: posY + "px"
            });
            requestAnimationFrame(updateCursorPosition);
        }
  
        updateCursorPosition();
  
        // Apply cursor behavior to all images except those with class .imtro
        $(".item").on("mouseenter", function() {
            cursor.addClass("active2");
        });
  
        $(".item").on("mouseleave", function() {
            cursor.removeClass("active2");
        });
    });

    // Function to split text into paragraphs
    function splitTextIntoParagraphs(element) {
      var paragraphs = element.querySelectorAll('p');
      paragraphs.forEach(function(paragraph) {
        paragraph.classList.add('fade-ing');
      });
    }
  
    // Function to apply opacity effect to paragraphs in view
    function applyOpacityEffect() {
      var paragraphs = document.querySelectorAll('.fade-ing');
      var windowHeight = window.innerHeight || document.documentElement.clientHeight;
      var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
      paragraphs.forEach(function(paragraph) {
        var rect = paragraph.getBoundingClientRect();
        var verticalInView = rect.top <= windowHeight * 0.8 && rect.bottom >= 0.1 * windowHeight;
        var horizontalInView = rect.left <= windowWidth * 0.8 && rect.right >= 0.2 * windowWidth;
  
        if (verticalInView && horizontalInView) {
          paragraph.style.opacity = 1;
        } else {
          paragraph.style.opacity = 0;
        }
      });
    }
  
    // Split text into paragraphs on page load
    document.addEventListener('DOMContentLoaded', function() {
      splitTextIntoParagraphs(document.getElementById('text'));
      applyOpacityEffect(); // Apply opacity effect on initial page load
    });
  
    // Apply opacity effect on scroll
    window.addEventListener('scroll', applyOpacityEffect);
    window.addEventListener('resize', applyOpacityEffect); // Apply opacity effect on window resize

    document.querySelectorAll('.circle').forEach(btn => {
      btn.addEventListener("mousemove", (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let btnWidth = btn.clientWidth;
        let btnHeight = btn.clientHeight;
        let transX = (x - btnWidth / 2);
        let transY = (y - btnHeight / 2);
        
        // GSAP animation for smoother movement
        gsap.to(btn, {duration: 0.3, x: transX, y: transY, ease: "power2.out"});
  
        let mx = e.pageX - btn.offsetLeft;
        let my = e.pageY - btn.offsetTop;
        btn.style.setProperty('--x', mx + 'px');
        btn.style.setProperty('--y', my + 'px');
      });
  
      btn.addEventListener('mouseout', (e) => {
        // Reset button position
  gsap.to(btn, {duration: 0.8, x: 0, y: 0, ease: "elastic.out(1, 0.5)"});
  
      });
    });


    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        waitForTransition: true, // Ensures smooth transition without stopping
      },
      speed: 800, // Adjust the speed for smoother transitions
      effect: "slide", // Use slide effect for smoother transition
    });
  

    $(document).ready(function() {
        var cursor = $(".cursor3");
        var posX = 0;
        var posY = 0;
        var mouseX = 0;
        var mouseY = 0;
        var lag = 0.1; // Adjust the lag factor (0.1 is a starting point)
  
        $(document).on("mousemove", function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
  
        function updateCursorPosition() {
            var dx = mouseX - posX;
            var dy = mouseY - posY;
            posX += dx * lag;
            posY += dy * lag;
            cursor.css({
                left: posX + "px",
                top: posY + "px"
            });
            requestAnimationFrame(updateCursorPosition);
        }
  
        updateCursorPosition();
  
        // Apply cursor behavior to all images except those with class .imtro
        $(".swiper").on("mouseenter", function() {
            cursor.addClass("active3");
        });
  
        $(".swiper").on("mouseleave", function() {
            cursor.removeClass("active3");
        });
    });

    function loader(){
      var tl = gsap.timeline()
    tl.from(".loader span",{
      duration:1.2,
      stagger:.03,
      delay:.1,
      ease: "power3.inOut" 
    })
    tl.to(".loader span",{
      duration:.6,
      opacity:0,
      stagger:.03,
      y:-100,
      ease: "power3.inOut" 
    })
    
    
    tl.to('.loader', {
      duration: 0.5,
      opacity: 0,
      ease: "power3.inOut",
      onComplete: function() {
        TweenLite.set('.loader', { display: "none" });
      }
    });
    
    
    }
    loader();


(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
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
    target: '#sideNav'
  });

})(jQuery); // End of use strict

/*
function wheel(event) {
  var delta = 0;
  if (event.wheelDelta) {(delta = event.wheelDelta / 180);}
  else if (event.detail) {(delta = -event.detail / 180);}

  handle(delta);
  if (event.preventDefault) {(event.preventDefault());}
  event.returnValue = false;
}

function handle(delta) {
  var time = 500;
  var distance = 500;

  $('html, body').stop().animate({
      scrollTop: $(window).scrollTop() - (distance * delta)
  }, time );
}

if (window.addEventListener) {window.addEventListener('DOMMouseScroll', wheel, false);}
window.onmousewheel = document.onmousewheel = wheel;
var lastScrollLocation = 0;

$(window).scroll(function() {
  if ($(window).scrollTop() > lastScrollLocation) {
    lastScrollLocation = $(window).scrollTop();
    console.log("next section");
  } else {
    lastScrollLocation = $(window).scrollTop();
    console.log("previous section");
  }
});

$(window).scroll(function() {if ($(window).scrollTop() > lastScrollLocation) {lastScrollLocation = $(window).scrollTop();console.log("next section");} else {lastScrollLocation = $(window).scrollTop();console.log("previous section");}});

*/

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.puff-in-center');

    if (entry.isIntersecting) {
      square.classList.add('square-animation');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('square-animation');
  });
});

observer.observe(document.querySelector('.square-wrapper'));
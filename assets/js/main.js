
$(function(){
  $('.slick-cards').slick({
    centerMode: true,
    centerPadding: '60px',
    lazyLoad: 'progressive',
    infinite: false,
    nextArrow:"<div class='a-right control-c next slick-next'><img src='/assets/images/slick_arrow_right.png' alt='>' /></div>",
    prevArrow:"<div class='a-left control-c prev slick-prev'><img src='/assets/images/slick_arrow_left.png' alt='<' /></div>",
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    variableWidth: true
  });

  $('.slick-photog').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    dots: false,
    infinite: true,
    lazyLoad: 'progressive',
    speed: 5000,
    variableWidth: true
  });

  $('.slick').slick({
    lazyLoad: 'progressive',
    infinite: false,
    nextArrow:"<div class='a-right control-c next slick-next'><img src='/assets/images/slick_arrow_right.png' alt='>' /></div>",
    prevArrow:"<div class='a-left control-c prev slick-prev'><img src='/assets/images/slick_arrow_left.png' alt='<' /></div>",
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  // JavaScript
  window.sr = ScrollReveal();
    sr.reveal('.card-work', {});

  $(window).bind('scroll', function() {
     if ($(window).scrollTop() > 50) {
       $('#scroll-arrow').fadeOut();
     }
     else {
       $('#scroll-arrow').fadeIn();
     }
     if ($(window).scrollTop() > 250) {
       $('#scroll-arrow-top').fadeIn();
     }
     else {
       $('#scroll-arrow-top').fadeOut();
     }
   });
});

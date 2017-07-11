
$(function(){
  $('.slick-cards').slick({
    centerMode: true,
    centerPadding: '60px',
    lazyLoad: 'progressive',
    infinite: false,
    nextArrow:"<div class='a-right control-c next slick-next'><img src='/assets/images/slick_arrow_right.png' /></div>",
    prevArrow:"<div class='a-left control-c prev slick-prev'><img src='/assets/images/slick_arrow_left.png' /></div>",
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
    nextArrow:"<div class='a-right control-c next slick-next'><img src='/assets/images/slick_arrow_right.png' /></div>",
    prevArrow:"<div class='a-left control-c prev slick-prev'><img src='/assets/images/slick_arrow_left.png' /></div>",
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
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


$(document).ready(function(){
  $('.slick-cards').slick({
    centerMode: true,
    centerPadding: '60px',
    lazyLoad: 'progressive',
    infinite: false,
    initialSlide: $('.slick-cards > div').size() - 1,
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

  // JavaScript
  window.sr = ScrollReveal();
  sr.reveal('.card-work', {

  });
});

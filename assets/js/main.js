
$(document).ready(function(){
  $('.slick-cards').slick({
    centerMode: true,
    centerPadding: '60px',
    lazyLoad: 'progressive',
    infinite: false,
    initialSlide: $('.slick-cards > div').size() - 1,
    variableWidth: true
  });

  // JavaScript
  window.sr = ScrollReveal();
  sr.reveal('.card-work', {

  });
});

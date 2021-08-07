$(function(){

  $('.bestsellers-slider').slick({

    prevArrow: '<button type="button" class="slick-prev"><img src="images/bestsellers/arrow-left.svg" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/bestsellers/arrow-right.svg" alt="next"></button>',

    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
  });
 
});
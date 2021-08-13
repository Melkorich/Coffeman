$(document).ready(function() {

  // $('body').on('click', function(event){
  //   if (!$(event.target).closest('.menu').length) {
  //     $('.menu__list').removeClass('menu__list--active')
  //   }
  // });

  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html").animate({scrollTop: $(_href).offset().top+"px"}, 1500);
    return false;
  });
  
  $('.menu__btn, menu').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
    $('body').toggleClass('body--active');
  });

  $('.menu__link').on('click', function() {
    $('.menu__list').removeClass('menu__list--active');
  });
  
  $('.reviews-slider').slick({
    arrows: false,
    dots: true,
  });
      
  $('.bestsellers-slider').slick({

    prevArrow: '<button type="button" class="slick-prev"><img src="images/bestsellers/arrow-left.svg" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/bestsellers/arrow-right.svg" alt="next"></button>',

    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: false,
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          infinite: true,
          // swipe: true,
        }
      },
    ]
  });
    
  $(".rate").rateYo({
    starWidth: "30px",
    normalFill: "#e5e5e5",
    ratedFill: "#D4C571",
    spacing   : "5px",
    readOnly: true,
    'starSvg': '<svg xmlns="http://www.w3.org/2000/svg"><path d="M14.2821 0L17.5864 10.1699L28.2797 10.1699L19.6287 16.4552L22.933 26.625L14.2821 20.3397L5.63106 26.625L8.93544 16.4552L0.28445 10.1699L10.9777 10.1699L14.2821 0Z"></svg>',
  });
  
  // let wow = new WOW(
  //   {
  //     mobile: false
  //   }
  // );

  new WOW().init();


});


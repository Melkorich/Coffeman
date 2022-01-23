$(function() {

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
    $('.menu__btn').removeClass('menu__btn--active');
    $('body').removeClass('body--active');
  });

  
  $('.reviews-slider').slick({
    arrows: false,
    dots: true,
  });
      
  $('.bestsellers-slider').slick({

    prevArrow: '<svg class="slick-left" width="57" height="8" viewBox="0 0 57 8" fill="#ad916a" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM57 3.5L1 3.5V4.5L57 4.5V3.5Z" fill="#ad916a"/></svg>',
    nextArrow: '<svg class="slick-right" width="57" height="8" viewBox="0 0 57 8" fill="#ad916a" xmlns="http://www.w3.org/2000/svg"><path d="M56.3536 4.35355C56.5488 4.15829 56.5488 3.84171 56.3536 3.64645L53.1716 0.464466C52.9763 0.269204 52.6597 0.269204 52.4645 0.464466C52.2692 0.659728 52.2692 0.976311 52.4645 1.17157L55.2929 4L52.4645 6.82843C52.2692 7.02369 52.2692 7.34027 52.4645 7.53553C52.6597 7.7308 52.9763 7.7308 53.1716 7.53553L56.3536 4.35355ZM0 4.5H56V3.5H0V4.5Z" fill="#ad916a"/></svg>',
 
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    infinite: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: false,
          centerPadding: false,
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
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

});

wow = new WOW({ mobile: false })
wow.init();




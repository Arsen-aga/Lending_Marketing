$(function () {

  var mixer = mixitup('.portfolio__content');

  Fancybox.bind("[data-fancybox]", {});

  $('.slider-blog__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="right"></button>',
    responsive: [{
      breakpoint: 769,
      settings: {
        arrows: false,
      }
    }]
  });

  $('.menu__btn, .menu a').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });


  $(".menu a, .go-top").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 0.750);
  });



});
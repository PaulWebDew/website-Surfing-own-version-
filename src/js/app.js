import * as flsFunctions from './modules/functions.js';
flsFunctions.isWebp();

$('.header-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  fade: true,
  nextArrow:
    '<div class="slider-arrows arrows-right"><svg viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3688 19.5874L23.5824 11.4366C24.3348 10.6854 24.3348 9.46621 23.5824 8.71758L15.3688 0.561968C14.6101 -0.189173 13.3821 -0.185404 12.6234 0.561968C11.8723 1.31437 11.8723 2.52856 12.6234 3.28096L17.4285 8.04838L2.01437 8.04838C0.900866 8.04838 -1.90735e-05 8.94802 -1.90735e-05 10.0615C-1.90735e-05 11.1738 0.900866 12.0747 2.01437 12.0747L17.4575 12.0747L12.6234 16.8672C11.8723 17.6183 11.8723 18.8338 12.6234 19.5849C13.3809 20.3373 14.6089 20.3386 15.3688 19.5875V19.5874Z"/></svg></div>',
  prevArrow:
    '<div class="slider-arrows arrows-left"><svg viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.77789 0.562669L0.564298 8.71345C-0.188099 9.46459 -0.188099 10.6838 0.564298 11.4324L8.77789 19.5881C9.5366 20.3392 10.7646 20.3354 11.5233 19.5881C12.2744 18.8357 12.2744 17.6215 11.5233 16.8691L6.71818 12.1016H22.1324C23.2459 12.1016 24.1467 11.202 24.1467 10.0885C24.1467 8.97625 23.2459 8.07537 22.1324 8.07537H6.68919L11.5233 3.28282C12.2744 2.53168 12.2744 1.31623 11.5233 0.565085C10.7658 -0.187313 9.53783 -0.188569 8.77789 0.562568V0.562669Z"/></svg></div>',
});
function activeDots() {
  $('#dot1, #dot2, #dot3, #dot4').removeClass('active');
  if ($('#slide1').hasClass('slick-active')) {
    $('#dot1').addClass('active');
  } else if ($('#slide2').hasClass('slick-active')) {
    $('#dot2').addClass('active');
  } else if ($('#slide3').hasClass('slick-active')) {
    $('#dot3').addClass('active');
  } else $('#dot4').addClass('active');
}

$('.slider-arrows.arrows-right.slick-arrow, .slider-arrows.arrows-left.slick-arrow ').on(
  'click',
  activeDots,
);

let date = new Date();
$('#curDate').text(date.getDate());
$('#curMonth').text('0' + (date.getMonth() + 1));
$('#curYear').text(date.getFullYear());

$('.surf-slide').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '2vw',
  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
  nextArrow:
    '<div class="slider-arrows arrows-right"><svg  viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3688 19.5874L23.5824 11.4366C24.3348 10.6854 24.3348 9.46621 23.5824 8.71758L15.3688 0.561968C14.6101 -0.189173 13.3821 -0.185404 12.6234 0.561968C11.8723 1.31437 11.8723 2.52856 12.6234 3.28096L17.4285 8.04838L2.01437 8.04838C0.900866 8.04838 -1.90735e-05 8.94802 -1.90735e-05 10.0615C-1.90735e-05 11.1738 0.900866 12.0747 2.01437 12.0747L17.4575 12.0747L12.6234 16.8672C11.8723 17.6183 11.8723 18.8338 12.6234 19.5849C13.3809 20.3373 14.6089 20.3386 15.3688 19.5875V19.5874Z"/></svg></div>',
  prevArrow:
    '<div class="slider-arrows arrows-left"><svg viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.77789 0.562669L0.564298 8.71345C-0.188099 9.46459 -0.188099 10.6838 0.564298 11.4324L8.77789 19.5881C9.5366 20.3392 10.7646 20.3354 11.5233 19.5881C12.2744 18.8357 12.2744 17.6215 11.5233 16.8691L6.71818 12.1016H22.1324C23.2459 12.1016 24.1467 11.202 24.1467 10.0885C24.1467 8.97625 23.2459 8.07537 22.1324 8.07537H6.68919L11.5233 3.28282C12.2744 2.53168 12.2744 1.31623 11.5233 0.565085C10.7658 -0.187313 9.53783 -0.188569 8.77789 0.562568V0.562669Z"/></svg></div>',
});

$('.sufr-map__slider-circle').on('click', function () {
  $('.sufr-map__slider-circle').removeClass('active');
  $(this).addClass('active');
});
$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  fade: true,
  nextArrow:
    '<div class="slider-arrows arrows-right"><svg viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3688 19.5874L23.5824 11.4366C24.3348 10.6854 24.3348 9.46621 23.5824 8.71758L15.3688 0.561968C14.6101 -0.189173 13.3821 -0.185404 12.6234 0.561968C11.8723 1.31437 11.8723 2.52856 12.6234 3.28096L17.4285 8.04838L2.01437 8.04838C0.900866 8.04838 -1.90735e-05 8.94802 -1.90735e-05 10.0615C-1.90735e-05 11.1738 0.900866 12.0747 2.01437 12.0747L17.4575 12.0747L12.6234 16.8672C11.8723 17.6183 11.8723 18.8338 12.6234 19.5849C13.3809 20.3373 14.6089 20.3386 15.3688 19.5875V19.5874Z"/></svg></div>',
  prevArrow:
    '<div class="slider-arrows arrows-left"><svg viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.77789 0.562669L0.564298 8.71345C-0.188099 9.46459 -0.188099 10.6838 0.564298 11.4324L8.77789 19.5881C9.5366 20.3392 10.7646 20.3354 11.5233 19.5881C12.2744 18.8357 12.2744 17.6215 11.5233 16.8691L6.71818 12.1016H22.1324C23.2459 12.1016 24.1467 11.202 24.1467 10.0885C24.1467 8.97625 23.2459 8.07537 22.1324 8.07537H6.68919L11.5233 3.28282C12.2744 2.53168 12.2744 1.31623 11.5233 0.565085C10.7658 -0.187313 9.53783 -0.188569 8.77789 0.562568V0.562669Z"/></svg></div>',
});

new WOW().init();

let nights = 5;
$('.plusNight').on('click', function () {
  nights++;
  $('.nights').text(nights);
  $('.price').text((125 + guests * 150) * nights);
});
$('.minusNight').on('click', function () {
  if (nights <= 1) return false;
  nights--;
  $('.nights').text(nights);
  $('.price').text((125 + guests * 150) * nights);
});

let guests = 4;
$('.plusGuest').on('click', function () {
  guests++;
  $('.guests').text(guests);
  $('.price').text((125 + guests * 150) * nights);
});
$('.minusGuest').on('click', function () {
  if (guests <= 1) return false;
  guests--;
  $('.guests').text(guests);
  $('.price').text((125 + guests * 75) * nights);
});

$('.price').text((125 + guests * 150) * nights);

$('.info-item').on('click', function () {
  $(this).hasClass('active')
    ? $(this).children('.optionButton').html('<img src="img/plus.svg" alt="plus">')
    : $(this).children('.optionButton').html('<img src="img/minus.svg" alt="minus">');
  $(this).toggleClass('active');
});

$(document).ready(function () {
  $('#surf').on('click', function () {
    $('html').animate({ scrollTop: $('.surf').offset().top }, 500);
  });
  $('#travel').on('click', function () {
    $('html').animate({ scrollTop: $('.travel').offset().top }, 500);
  });
  $('#sleep').on('click', function () {
    $('html').animate({ scrollTop: $('.sleep').offset().top }, 500);
  });
  $('#shop').on('click', function () {
    $('html').animate({ scrollTop: $('.shop').offset().top }, 500);
  });
});

$('.btnMenu').on('click', function () {
  $(this).toggleClass('visibl');
  $('.header-aside').toggleClass('visibl');
  $('.arrowsBottom').toggleClass('visibl');
  $('.header-slider-dots').toggleClass('visibl');
});

import $ from 'jquery';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      loop: false,
      margin: 10, 
      autoplay:true,
      autoplayTimeout:1500,
      autoplayHoverPause:true,
    //   dots: false,
      responsive: {
        0: {
          items: 1, 
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
});
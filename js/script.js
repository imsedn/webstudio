$(document).ready(function () {
  "use strict";

  $("#mob").click(function () {
    $(this).toggleClass("active");
    $(".header__link").toggleClass("active");
  });

  $(".work-content").slick({
    prevArrow: $(".work_slide_prev"),
    nextArrow: $(".work_slide_next"),
    fade: true,
    speed: 800,
    infinite: true,
  });

  $("form input[type='tel']").mask("+38(999) 999-99-99");

  var test = document.querySelector(".content__close");

  $(".header ul li a[data-target='portfolio']").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#portfolio").offset().top,
      },
      2000
    );
  });

  $(".header ul li a[data-target='price']").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#price").offset().top,
      },
      2000
    );
  });

  $(".header ul li a[data-target='about']").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top,
      },
      2000
    );
  });

  $(".header ul li a[data-target='contact']").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#contact").offset().top,
      },
      2000
    );
  });



  //BURGER MENU

  //WATER RIPPLE
  try {
    $(".ripple-wrap").ripples({
      resolution: 512,
      dropRadius: 20, //px
      perturbance: 0.04,
    });
    $("main").ripples({
      resolution: 128,
      dropRadius: 10, //px
      perturbance: 0.04,
      interactive: true,
    });
    $("li").css({
      "-webkit-transform": "translateY(0px)",
      "-moz-transform": "translateY(0px)",
      "-o-transform": "translateY(0px)",
      "-ms-transform": "translateY(px)",
      transform: "translateY(0px)",
    });
    $(".header-logo").css({
      "-webkit-transform": "translateX(0px)",
      "-moz-transform": "translateX(0px)",
      "-o-transform": "translateX(0px)",
      "-ms-transform": "translateX(px)",
      transform: "translateX(0px)",
    });
    $(".owl-carousel").owlCarousel();
  } catch (e) {
    $(".error").show().text(e);
  }

  $(".js-ripples-disable").on("click", function () {
    $(".ripple-wrap, .main").ripples("destroy");
    $(this).hide();
  });

  $(".js-ripples-play").on("click", function () {
    $(".ripple-wrap, .main").ripples("play");
  });

  $(".js-ripples-pause").on("click", function () {
    $(".ripple-wrap, .main").ripples("pause");
  });

  // Automatic drops
  setInterval(function () {
    var $el = $(".ripple-wrap");
    var x = Math.random() * $el.outerWidth();
    var y = Math.random() * $el.outerHeight();
    var dropRadius = 20;
    var strength = 0.04 + Math.random() * 0.04;

    $el.ripples("drop", x, y, dropRadius, strength);
  }, 2200);
  //WATER RIPPLE

  ///MATRIX TEXT
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = "!<>-_\\/[]{}—=+*^?#________";
      this.update = this.update.bind(this);
    }

    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => (this.resolve = resolve));
      this.queue = [];

      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({
          from,
          to,
          start,
          end,
        });
      }

      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }

    update() {
      let output = "";
      let complete = 0;

      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];

        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }

          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }

      this.el.innerHTML = output;

      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }

    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  } // ——————————————————————————————————————————————————
  // Example
  // ——————————————————————————————————————————————————

  const phrases = [
    "Веб студия Doblo",
    "Landing page",
    "Сайт визитка",
    "Интернет магазин",
    "Корпоративный сайт",
    "Уникальный дизайн",
  ];
  const el = document.querySelector(".text");
  const fx = new TextScramble(el);
  let counter = 0;

  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 800);
    });
    counter = (counter + 1) % phrases.length;
  };

  next();
  ///MATRIX TEXT

  //   ///COUNTER
  //   jQuery(function ($) {
  //     // start all the timers
  //     $('.timer').each(count);

  //     function count(options) {
  //       var $this = $(this);
  //       options = $.extend({}, options || {}, $this.data('countToOptions') || {});
  //       $this.countTo(options);
  //     }
  //   });
  //  ///COUNTER

  //COUNTER 2
  var block_show = null;

  function scrollTracking() {
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $(".active").offset().top;
    var eh = $(".active").outerHeight();

    if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
      if (block_show == null || block_show == false) {
        jQuery(function ($) {
          // start all the timers
          $(".timer").each(count);

          function count(options) {
            var $this = $(this);
            options = $.extend(
              {},
              options || {},
              $this.data("countToOptions") || {}
            );
            $this.countTo(options);
          }
        });
      }
      block_show = true;
    } else {
      if (block_show == null || block_show == true) {
      }
      block_show = false;
    }
  }

  $(window).scroll(function () {
    scrollTracking();
  });

  $(document).ready(function () {
    scrollTracking();
  });
  //COUNTER 2
});

// // When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, 'load', init);

// function init() {
//     // Basic options for a simple Google Map
//     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//     var mapOptions = {
//         // How zoomed in you want the map to start at (always required)
//         zoom: 14,

//         // The latitude and longitude to center the map (always required)
//         center: new google.maps.LatLng(47.990984, 37.805898), // New York

//         // How you would like to style the map.
//         // This is where you would paste any style found on Snazzy Maps.
//         styles: [
//           {
//               "stylers": [
//                   {
//                       "hue": "#ff1a00"
//                   },
//                   {
//                       "invert_lightness": true
//                   },
//                   {
//                       "saturation": -100
//                   },
//                   {
//                       "lightness": 33
//                   },
//                   {
//                       "gamma": 0.5
//                   }
//               ]
//           },
//           {
//               "featureType": "water",
//               "elementType": "geometry",
//               "stylers": [
//                   {
//                       "color": "#2D333C"
//                   }
//               ]
//           }
//       ]
//     };

//     // Get the HTML DOM element that will contain your map
//     // We are using a div with id="map" seen below in the <body>
//     var mapElement = document.getElementById('map');

//     // Create the Google Map using our element and options defined above
//     var map = new google.maps.Map(mapElement, mapOptions);

//     // Let's also add a marker while we're at it
//     var marker = new google.maps.Marker({
//         position: new google.maps.LatLng(47.990984, 37.805898),
//         map: map,
//         title: 'Snazzy!'
//     });
// }

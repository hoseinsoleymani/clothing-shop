$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  rtl: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    992: {
      items: 3,
      nav: true,
    },
    1200: {
      items: 4,
      nav: true,
      loop: false,
    },
  },
});

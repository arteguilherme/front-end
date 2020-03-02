
$('#promo-banner-list').owlCarousel({
  margin: 10,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

$('#commerce-product-tabs-list').owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    '<i class="fas fa-long-arrow-alt-left"></i>',
    '<i class="fas fa-long-arrow-alt-right"></i>',
  ],
  navContainer: '.section-product-carousel .custom-nav',
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
});
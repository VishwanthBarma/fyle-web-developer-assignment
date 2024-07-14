let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      let totalSlides = this.slides.length - this.loopedSlides * 2;
      let numDots = 3;
      let currentGroup = Math.floor(this.realIndex / numDots);
      let bulletIndex = (index % numDots) + currentGroup * numDots;

      if (bulletIndex < totalSlides) {
        return '<span class="' + className + '"></span>';
      }
    },
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

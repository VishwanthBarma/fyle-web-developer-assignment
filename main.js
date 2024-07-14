// Popup Form Function
document.getElementById("contactButton").onclick = function () {
  document.getElementById("popupForm").style.display = "block";
};

document.getElementsByClassName("close")[0].onclick = function () {
  document.getElementById("popupForm").style.display = "none";
};

window.onclick = function (event) {
  if (event.target == document.getElementById("popupForm")) {
    document.getElementById("popupForm").style.display = "none";
  }
};

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch("https://getform.io/f/bdrynmob", {
      method: "POST",
      body: formData,
    }).then((response) => {
      response.json();
      console.log("Form Submitted Succesfully");
      document.getElementById("popupForm").style.display = "none";
    });
  });

// Slider Function
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

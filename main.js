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

// Our Project Function
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".project-items .item");
  const images = document.querySelectorAll(".project-image");

  items[0].classList.add("active");
  images[0].style.display = "block";
  images[0].style.opacity = 1;

  items.forEach((item) => {
    item.addEventListener("click", function () {
      items.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
      const index = this.getAttribute("data-index");

      images.forEach((image) => {
        image.style.opacity = 0;
        setTimeout(() => {
          image.style.display = "none";
        }, 500);
      });

      const selectedImage = document.querySelector(
        `.project-image[data-index="${index}"]`
      );
      setTimeout(() => {
        selectedImage.style.display = "block";
        selectedImage.style.opacity = 1;
      }, 500);
    });
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

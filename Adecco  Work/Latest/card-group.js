// {
//   // Import this first...
//   /* <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>; */
// }

// if (screen.width < 768) {
//   const slider = document.querySelectorAll(".swiper-wrapper .col-md-3");
//   // Remove Row Class
//   const gridRow = document.querySelector(".row.swiper-wrapper");
//   console.log(gridRow);
//   gridRow.classList.remove("row");

//   // Add Swiper Class
//   slider.forEach((element) => {
//     element.classList.add("swiper-slide");
//     console.log(element);
//   });

//   // Initiate Slider
//   window.addEventListener("load", () => {
//     const swiper = new Swiper(".mySwiper", {
//       spaceBetween: 30,
//       // autoplay: true,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },

//       breakpoints: {
//         450: {
//           slidesPerView: 1,
//           spaceBetween: 40,
//         },
//         768: {
//           slidesPerView: 1,
//           spaceBetween: 40,
//         },
//       },
//     });

//   });
// }

// ******* 28 April ********
const parents = document.querySelectorAll(".afi-footer-title");

parents.forEach((parent) => {
  parent.querySelector("h2").addEventListener("click", () => {
    parent.classList.toggle("ul_open");
  });
});

// ****** 02 May ******
if (screen.width < 768) {
  const mySlider = document.querySelector(".mySlider");

  const mySwiper = mySlider.firstElementChild;
  mySwiper.classList.add("mySwiper");

  const swiperWrapper = mySwiper.firstElementChild;
  swiperWrapper.classList.remove("row");
  swiperWrapper.classList.add("swiper-wrapper");

  // Add "swiper-slide" class in sliderItems
  const sliderItems = document.querySelectorAll(".mySwiper .slider_item");
  if (sliderItems) {
    sliderItems.forEach((item) => {
      item.classList.add("swiper-slide");
    });
  }

  // Pagination
  const pagination = document.createElement("div");
  pagination.classList.add("swiper-pagination");

  mySwiper.appendChild(pagination);

  // Initiate Slider
  window.addEventListener("load", () => {
    const swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      // autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        450: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      },
    });
  });
}

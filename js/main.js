const searchEl = document.querySelector(".search");
const serachInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  serachInputEl.focus();
});

serachInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  serachInputEl.setAttribute("placeholder", "통합검색");
});

serachInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  serachInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
    lockClass: ".promotion swiper-pagination-lock",
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("show");
  } else {
    promotionEl.classList.remove("show");
  }
});



const beanimgfadeEl= document.querySelector('.main-bean .bean-img-box')
const beantxtfadeEl= document.querySelector('.main-bean .bean-txt-box')
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 550) {
        gsap.to(beanimgfadeEl, 1, {
          opacity: 1,
          left:150
        });
        gsap.to(beantxtfadeEl, 1, {
          opacity: 1,
          right:150
        });
      
    }
    if(window.scrollY < 450){
        gsap.to(beanimgfadeEl, 1, {
          opacity: 0,
          left:-600
      });
      gsap.to(beantxtfadeEl, 1, {
        opacity: 0,
        right:-600
    });
    }
      
    
  })
);
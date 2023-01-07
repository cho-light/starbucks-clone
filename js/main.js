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

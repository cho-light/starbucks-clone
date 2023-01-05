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

const menuEl = document.querySelector(".item__name");
const menuInnerEl = document.querySelector(".item__contents");

menuEl.addEventListener("mouseover", function () {
  menuInnerEl.slideDown();
});

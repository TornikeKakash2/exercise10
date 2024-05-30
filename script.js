const container = document.querySelector(".container");
const sliderItem = document.querySelectorAll(".slider-item");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentSlider = 0;
function removeClass() {
  for (let element of sliderItem) {
    element.classList.remove("slider-item-active");
  }
}

rightArrow.addEventListener("click", function () {
  removeClass();
  sliderItem[currentSlider].classList.add("slider-item-active");
  if (currentSlider < sliderItem.length - 1) {
    currentSlider++;
  } else {
    currentSlider = 0;
  }
});

leftArrow.addEventListener("click", function () {
  removeClass();
  if (currentSlider > 0) {
    currentSlider = currentSlider - 1;
  } else {
    currentSlider = sliderItem.length - 1;
  }
  sliderItem[currentSlider].classList.add("slider-item-active");
});

const search = document.querySelector(".search");
const filter = document.getElementById("filter");

search.addEventListener("change", function (e) {
  if (e.target.value.includes("Earth")) {
    removeClass();
    sliderItem[0].classList.add("slider-item-active");
    search.value = "";
  } else if (e.target.value.includes("Mercury")) {
    removeClass();
    sliderItem[1].classList.add("slider-item-active");
    search.value = "";
  } else if (e.target.value.includes("Mars")) {
    removeClass();
    sliderItem[2].classList.add("slider-item-active");
    search.value = "";
  } else if (e.target.value.includes("Neptune")) {
    removeClass();
    sliderItem[3].classList.add("slider-item-active");
    search.value = "";
  } else if (e.target.value.includes("Pluto")) {
    removeClass();
    sliderItem[4].classList.add("slider-item-active");
    search.value = "";
  } else if (e.target.value.includes("Uranus")) {
    removeClass();
    sliderItem[5].classList.add("slider-item-active");
    search.value = "";
  } else if (e.target.value.includes("Venus")) {
    removeClass();
    sliderItem[6].classList.add("slider-item-active");
    search.value = "";
  } else if (e.target.value.includes("Saturn")) {
    removeClass();
    sliderItem[7].classList.add("slider-item-active");
    search.value = "";
  } else {
    alert(
      "Invalid search. Search Between: Earth, Mercury, Mars, Neptune, Pluto, Uranus, Venus, Saturn. First letter must be in Uppercase"
    );
  }
});

filter.addEventListener("change", function (e) {
  if (e.target.value.includes("earth")) {
    removeClass();
    sliderItem[0].classList.add("slider-item-active");
  } else if (e.target.value.includes("mercury")) {
    removeClass();
    sliderItem[1].classList.add("slider-item-active");
  } else if (e.target.value.includes("mars")) {
    removeClass();
    sliderItem[2].classList.add("slider-item-active");
  } else if (e.target.value.includes("neptune")) {
    removeClass();
    sliderItem[3].classList.add("slider-item-active");
  } else if (e.target.value.includes("pluto")) {
    removeClass();
    sliderItem[4].classList.add("slider-item-active");
  } else if (e.target.value.includes("uranus")) {
    removeClass();
    sliderItem[5].classList.add("slider-item-active");
  } else if (e.target.value.includes("venus")) {
    removeClass();
    sliderItem[6].classList.add("slider-item-active");
  } else if (e.target.value.includes("saturn")) {
    removeClass();
    sliderItem[7].classList.add("slider-item-active");
  } else {
    alert(
      "Invalid filter. Select Between: Earth, Mercury, Mars, Neptune, Pluto, Uranus, Venus, Saturn. First letter must be in Uppercase"
    );
  }
});

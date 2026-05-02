// /***Event Listener for scroll arrow on Spatial Memories Page***/

// const spatialMemories = document.getElementById("spatial-memories")
// const element = document.querySelector(".down-arrow");

// spatialMemories.addEventListener('scroll', () => {
//     if (spatialMemories.offsetHeight + spatialMemories.scrollTop >= spatialMemories.scrollHeight) {
//         element.classList.add("hide");
//         console.log('help!')
//     } else {
//         element.classList.remove('hide');
//     }
// });

/***Before / After Image Slider 1***/

const container = document.getElementById('container');
const before = document.getElementById('before');
const slider = document.getElementById('slider');

let dragging = false;

function updateSlider(x) {
  const rect = container.getBoundingClientRect();
  let offset = x - rect.left;

  offset = Math.max(0, Math.min(offset, rect.width));
  const percent = (offset / rect.width) * 100;

  before.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
  slider.style.left = percent + "%";
}

slider.addEventListener("mousedown", () => dragging = true);
window.addEventListener("mouseup", () => dragging = false);
window.addEventListener("mousemove", e => {
  if (!dragging) return;
  updateSlider(e.clientX);
});

// Touch support
slider.addEventListener("touchstart", () => dragging = true);
window.addEventListener("touchend", () => dragging = false);
window.addEventListener("touchmove", e => {
  if (!dragging) return;
  updateSlider(e.touches[0].clientX);
});

/***Before / After Image Slider 2***/

const container_two = document.getElementById('container_two');
const before_two = document.getElementById('before_two');
const slider_two = document.getElementById('slider_two');

let dragging_two = false;

function updateSliderTwo(x) {
  const rect_two = container_two.getBoundingClientRect();
  let offset_two = x - rect_two.left;

  offset_two = Math.max(0, Math.min(offset_two, rect_two.width));
  const percent_two = (offset_two / rect_two.width) * 100;

  before_two.style.clipPath = `inset(0 ${100 - percent_two}% 0 0)`;
  slider_two.style.left = percent_two + "%";
}

slider_two.addEventListener("mousedown", () => dragging_two = true);
window.addEventListener("mouseup", () => dragging_two = false);
window.addEventListener("mousemove", e => {
  if (!dragging_two) return;
  updateSliderTwo(e.clientX);
});

// Touch support
slider_two.addEventListener("touchstart", () => dragging_two = true);
window.addEventListener("touchend", () => dragging_two = false);
window.addEventListener("touchmove", e => {
  if (!dragging_two) return;
  updateSliderTwo(e.touches[0].clientX);
});

//ScrollTrigger Script

const downArrow = document.querySelector('.down-arrow');

const sectionOne = document.querySelector('.section-one');
const sectionTwo = document.querySelector('.section-two');
const sectionThree = document.querySelector('.section-three');
const sectionFour = document.querySelector('.section-four');
const sectionFive = document.querySelector('.section-five');
const sectionSix = document.querySelector('.section-six');

let io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      modify(entry.target);
    } 
  })
}, {
  threshold: 0.5
})

function modify(el) {
  if (el.id === "div-one") {
    sectionOne.classList.remove('hide');
    sectionTwo.classList.remove('show');
  }
  if (el.id === "div-two") {
    sectionOne.classList.add('hide');
    sectionTwo.classList.add('show');
    sectionThree.classList.remove('show');
  }
  if (el.id === "div-three") {
    sectionTwo.classList.remove('show');
    sectionThree.classList.add('show');
    sectionFour.classList.remove('show');
  }
  if (el.id === "div-four") {
    sectionThree.classList.remove('show');
    sectionFour.classList.add('show');
    sectionFive.classList.remove('show');
  }
  if (el.id === "div-five") {
    sectionFour.classList.remove('show');
    sectionFive.classList.add('show');
    sectionSix.classList.remove('show');
    downArrow.classList.remove('hide');
  }
  if (el.id === "div-six") {
    sectionFive.classList.remove('show');
    sectionSix.classList.add('show');
    downArrow.classList.add('hide');
  }
}

io.observe(document.querySelector('#div-one'));
io.observe(document.querySelector('#div-two'));
io.observe(document.querySelector('#div-three'));
io.observe(document.querySelector('#div-four'));
io.observe(document.querySelector('#div-five'));
io.observe(document.querySelector('#div-six'));
const trigger = document.getElementById("scrollToBottom");
const box = document.querySelector(".text-overlay");

  trigger.addEventListener("click", function () {
    box.scrollTo({
      top: box.scrollHeight,
      behavior: "smooth"
    });
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

// Speakpipe Implementation 

(function(d){
var app = d.createElement('script'); app.type = 'text/javascript'; app.async = true;
app.src = 'https://www.speakpipe.com/loader/5nng7fgij2l8yrw37h73v3ilhfiq5ibu.js';
var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(app, s);
})(document);
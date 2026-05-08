//ScrollTrigger Script

const downArrow = document.querySelector('.down-arrow');
const endMessage = document.querySelector('.scroll-end-message');

const sectionOne = document.querySelector('.section-one');
const sectionTwo = document.querySelector('.section-two');
const sectionThree = document.querySelector('.section-three');
const sectionFour = document.querySelector('.section-four');
const sectionFive = document.querySelector('.section-five');

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
    downArrow.classList.remove('hide');
    endMessage.classList.remove('show-message');
  }
  if (el.id === "div-five") {
    sectionFour.classList.remove('show');
    sectionFive.classList.add('show');
    downArrow.classList.add('hide');
    endMessage.classList.add('show-message');
  }
}

io.observe(document.querySelector('#div-one'));
io.observe(document.querySelector('#div-two'));
io.observe(document.querySelector('#div-three'));
io.observe(document.querySelector('#div-four'));
io.observe(document.querySelector('#div-five'));
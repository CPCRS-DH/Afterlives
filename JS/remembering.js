//ScrollTrigger Script

const downArrow = document.querySelector('.down-arrow');

const sectionOne = document.querySelector('.section-one');
const sectionTwo = document.querySelector('.section-two');
const sectionThree = document.querySelector('.section-three');
const sectionFour = document.querySelector('.section-four');
const sectionFive = document.querySelector('.section-five');
const sectionSix = document.querySelector('.section-six');
const sectionSeven = document.querySelector('.section-seven');
const sectionEight = document.querySelector('.section-eight');
const sectionNine = document.querySelector('.section-nine');
const sectionTen = document.querySelector('.section-ten');
const sectionEleven = document.querySelector('.section-eleven');
const sectionTwelve = document.querySelector('.section-twelve');
const sectionThirteen = document.querySelector('.section-thirteen');
const sectionFourteen = document.querySelector('.section-fourteen');

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
  }
  if (el.id === "div-six") {
    sectionFive.classList.remove('show');
    sectionSix.classList.add('show');
    sectionSeven.classList.remove('show');
  }
  if (el.id === "div-seven") {
    sectionSix.classList.remove('show');
    sectionSeven.classList.add('show');
    sectionEight.classList.remove('show');
  }
  if (el.id === "div-eight") {
    sectionSeven.classList.remove('show');
    sectionEight.classList.add('show');
    sectionNine.classList.remove('show');
  }
  if (el.id === "div-nine") {
    sectionEight.classList.remove('show');
    sectionNine.classList.add('show');
    sectionTen.classList.remove('show');
  }
  if (el.id === "div-ten") {
    sectionNine.classList.remove('show');
    sectionTen.classList.add('show');
    sectionEleven.classList.remove('show');
  }
  if (el.id === "div-eleven") {
    sectionTen.classList.remove('show');
    sectionEleven.classList.add('show');
    sectionTwelve.classList.remove('show');
  }
  if (el.id === "div-twelve") {
    sectionEleven.classList.remove('show');
    sectionTwelve.classList.add('show');
    sectionThirteen.classList.remove('show');
  }
  if (el.id === "div-thirteen") {
    sectionTwelve.classList.remove('show');
    sectionThirteen.classList.add('show');
    sectionFourteen.classList.remove('show');
    downArrow.classList.remove('hide');
  }
  if (el.id === "div-fourteen") {
    sectionThirteen.classList.remove('show');
    sectionFourteen.classList.add('show');
    downArrow.classList.add('hide');
  }
}

io.observe(document.querySelector('#div-one'));
io.observe(document.querySelector('#div-two'));
io.observe(document.querySelector('#div-three'));
io.observe(document.querySelector('#div-four'));
io.observe(document.querySelector('#div-five'));
io.observe(document.querySelector('#div-six'));
io.observe(document.querySelector('#div-seven'));
io.observe(document.querySelector('#div-eight'));
io.observe(document.querySelector('#div-nine'));
io.observe(document.querySelector('#div-ten'));
io.observe(document.querySelector('#div-eleven'));
io.observe(document.querySelector('#div-twelve'));
io.observe(document.querySelector('#div-thirteen'));
io.observe(document.querySelector('#div-fourteen'));
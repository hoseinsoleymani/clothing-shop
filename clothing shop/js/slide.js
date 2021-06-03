const nextBtn = document.querySelector(".next");
const slides = document.querySelectorAll(".slide");
let idx = 0;
let currentChildSlide = 0;
nextBtn.addEventListener("click", () => {
  renderNextSlide();
  renderNextChildSlide();
});

function renderNextSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[idx].classList.add("active");

  if (idx > slides.length - 2) {
    idx = 0;
  }
  // idx = idx > slides.length - 2 ? 0 : idx +=1;
}

function renderNextChildSlide() {
  slides[idx].children[currentChildSlide].classList.add("active");
  currentChildSlide += 1;

  if (currentChildSlide > slides[idx].children.length - 1) {
    [...slides[idx].children].forEach(elem => {
      elem.classList.remove("active")
    })
    idx += 1;
    currentChildSlide = 0;
  }

  // currentChildSlide = currentChildSlide > slides[idx].children.length - 1 ?  : 0;
}


// const slides = document.querySelectorAll('.slide');
// const nextBtn = document.querySelector('.next');

// let currentSlideIndex = 0;
// let currentChildSlideIndex = 0;

// function shouldGoNextSlide() {
//   const currentSlide = slides[currentSlideIndex];
//   const currentSlideChildren = [...currentSlide.children];
//   const currentSlideChildrenCount = currentSlideChildren.length - 1;

//   return currentChildSlideIndex === currentSlideChildrenCount;
// }

// function goNextChildSlide() {
//   if (shouldGoNextSlide()) {
//     return 0;
//   }

//   const currentSlide = slides[currentSlideIndex];
//   const currentSlideChildren = [...currentSlide.children];
//   const nextChildIndex = currentChildSlideIndex + 1;

//   currentSlideChildren.forEach((child, childIndex) => {
//     if (childIndex === nextChildIndex) return child.classList.add('active');
//     child.classList.remove('active');
//   });

//   return nextChildIndex;
// }

// function goNextSlide() {
//   const slidesCount = slides.length - 1;
//   const isLastSlide = slidesCount === currentSlideIndex;
//   const nextSlideIndex = isLastSlide ? 0 : currentSlideIndex + 1;

//   slides.forEach((slide, index) => {
//     if (index === nextSlideIndex) return slide.classList.add('active');
//     slide.classList.remove('active');
//   });

//   return nextSlideIndex;
// }

// nextBtn.addEventListener('click', () => {
//   currentSlideIndex = shouldGoNextSlide() ? goNextSlide() : currentSlideIndex;

//   currentChildSlideIndex = goNextChildSlide();
// });

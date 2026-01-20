let slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let autoSlide;
const intervalTime = 10000; // 3 seconds

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

// Next & Prev buttons
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
  resetAutoSlide();
});

// Auto slide function
function startAutoSlide() {
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, intervalTime);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

// Pause on hover
document.querySelector('.slider').addEventListener('mouseover', () => {
  clearInterval(autoSlide);
});

document.querySelector('.slider').addEventListener('mouseout', startAutoSlide);

// Start the slider
startAutoSlide();

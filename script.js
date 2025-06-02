const carouselContent = document.querySelector('.carousel-content');
const comments = document.querySelectorAll('.comment');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 25;
  carouselContent.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? comments.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === comments.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); 
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.15 });

  const elements = document.querySelectorAll(".animated-item");
  elements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function() {
    let bgImage = document.querySelector("section.home");
    if (bgImage) {
        let timestamp = new Date().getTime(); // Gera um número único
        bgImage.style.backgroundImage = `url('assets/CAPA-SITE.png?v=${timestamp}')`;
    }
});

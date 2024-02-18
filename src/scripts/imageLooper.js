var currentIndex = 0;
var slides = document.querySelectorAll(".main_image img");
var totalSlides = slides.length;

function showSlide(index) {
  slides.forEach(function (slide) {
    slide.style.opacity = 0;
  });
  slides[index].style.opacity = 1;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Troca a cada 3 segundos

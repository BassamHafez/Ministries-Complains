// Get the necessary elements
var carousel = document.querySelector('.carousel');
var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');

// Initialize current slide and total slides
var currentSlide = 0;
var totalSlides = carousel.getElementsByClassName('carousel-img').length;

// Add click event listeners to the buttons
prevButton.addEventListener('click', function() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

nextButton.addEventListener('click', function() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
});

// Function to update the carousel display
function updateCarousel() {
  var slides = carousel.getElementsByClassName('carousel-img');

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slides[currentSlide].classList.add('active');
}
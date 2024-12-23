// carousel.js
document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel, index) => {
    let slideIndex = 1;
    const slides = carousel.querySelectorAll(".mySlides");
    const dots = carousel.querySelectorAll(".dot");
    const prevButton = carousel.querySelector(".prev");
    const nextButton = carousel.querySelector(".next");

    // Näytä aloitusdia
    showSlides(slideIndex);

    // Lisää tapahtumat painikkeille
    if (prevButton) prevButton.addEventListener("click", () => plusSlides(-1));
    if (nextButton) nextButton.addEventListener("click", () => plusSlides(1));
    dots.forEach((dot, i) => dot.addEventListener("click", () => currentSlide(i + 1)));

    function plusSlides(n) {
      showSlides((slideIndex += n));
    }

    function currentSlide(n) {
      showSlides((slideIndex = n));
    }

    function showSlides(n) {
      if (n > slides.length) slideIndex = 1;
      if (n < 1) slideIndex = slides.length;

      slides.forEach((slide) => (slide.style.display = "none"));
      dots.forEach((dot) => dot.classList.remove("active"));

      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active");
    }
  });
});

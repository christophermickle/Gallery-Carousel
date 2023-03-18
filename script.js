document.addEventListener("DOMContentLoaded", function () {
  const arrowRight = document.getElementById("arrowRight");
  const arrowLeft = document.getElementById("arrowLeft");
  const testimonials = document.querySelector(".testimonials");

  arrowRight.addEventListener("click", function () {
    scrollTestimonials("right");
  });

  arrowLeft.addEventListener("click", function () {
    scrollTestimonials("left");
  });

  function scrollTestimonials(direction) {
    const cardWidth =
      testimonials.querySelector(".testimonialCard").offsetWidth;
    const cardGap = parseInt(getComputedStyle(testimonials).gap);
    const testimonialsWidth = testimonials.offsetWidth;
    const cardsInView = Math.floor(testimonialsWidth / (cardWidth + cardGap));
    const scrollAmount = cardsInView * (cardWidth + cardGap);

    if (direction === "right") {
      testimonials.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    } else {
      testimonials.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  }
});

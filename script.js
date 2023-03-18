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
   const reviewContents = document.querySelectorAll(".reviewContent");
  reviewContents.forEach((reviewContent) => {
    reviewContent.style.maxHeight = "9rem";
  });

  const toggleButtons = document.querySelectorAll(".toggleContent");
  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const reviewContent = button.previousElementSibling;
      if (reviewContent.style.maxHeight === "9rem") {
        reviewContent.style.maxHeight = reviewContent.scrollHeight + "px";
        button.textContent = "Hide";
      } else {
        reviewContent.style.maxHeight = "9rem";
        button.textContent = "Read More";
      }
    });
  });
});

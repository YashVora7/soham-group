// REVIEW SECTION CAROUSEL 

const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let scrollAmount = 0;

nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: 300, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -300, behavior: "smooth" });
});

// PROJECT SECTION CAROUSEL 

const carousel = document.querySelector("#carousel1 .flex");
const items = document.querySelectorAll(".carousel-item1");
const prevButton = document.getElementById("prev1");
const nextButton = document.getElementById("next1");

let activeIndex = 1; // Index of the currently enlarged item

function updateCarousel() {
  items.forEach((item, index) => {
    if (index === activeIndex) {
      item.classList.add("scale-110");
      item.classList.add("w-1/3");
      item.classList.remove("scale-90");
      item.classList.remove("w-1/4");
    } else {
      item.classList.add("scale-90");
      item.classList.add("w-1/4");
      item.classList.remove("scale-110");
      item.classList.remove("w-1/3");
    }
  });
}

prevButton.addEventListener("click", () => {
  activeIndex = (activeIndex - 1 + items.length) % items.length;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  activeIndex = (activeIndex + 1) % items.length;
  updateCarousel();
});

// Initialize
updateCarousel(); 
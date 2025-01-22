// Mobile navigation
const btnNavEl = document.querySelector(".mobile_menu");
const headerEl = document.querySelector("header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("open_nav");
});

// Sticky navigation
const heroSectionEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-75px",
  }
);
obs.observe(heroSectionEl);

// Making service section text responsive
const readMoreBtns = document.querySelectorAll(".service-typedtext_box");
readMoreBtns.forEach((readMore) => {
  readMore.addEventListener("click", function () {
    readMore.classList.toggle("show-text");
  });
});

// Testimonial carousel
const mainCarouselBox = document.querySelector(".testimonial-carousal");
const prevCarouselBtn = document.querySelector(".fa-angle-left");
const nextCarouselBtn = document.querySelector(".fa-angle-right");
const currentSlideBox = document.querySelector(".carousel_slide_indicator_box");

let sectionIndex = 0;
prevCarouselBtn.addEventListener("click", () => {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  mainCarouselBox.style.transform = `translate(${sectionIndex * -25}%)`;
  updateSlideIndicator();
});
nextCarouselBtn.addEventListener("click", () => {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  mainCarouselBox.style.transform = `translate(${sectionIndex * -25}%)`;
  updateSlideIndicator();
});

document.querySelectorAll(".dot_indicator").forEach((currentSlide, ind) => {
  currentSlide.addEventListener("click", () => {
    sectionIndex = ind;
    mainCarouselBox.style.transform = `translate(${sectionIndex * -25}%)`;
    updateSlideIndicator();
  });
});

function updateSlideIndicator() {
  document
    .querySelector(".carousel_slide_indicator_box .current_slide")
    .classList.remove("current_slide");
  currentSlideBox.children[sectionIndex].classList.add("current_slide");
}

// Product section - toggle product images on icon click
function toggleImages(element) {
  const allItems = document.querySelectorAll(".product-item");
  allItems.forEach((item) => {
    item.classList.remove("active");
  });

  if (!element.classList.contains("active")) {
    element.classList.add("active");
  }
}

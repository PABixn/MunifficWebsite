const elementsToFadeInUpOnScroll = document.querySelectorAll(".fade-in-up-on-scroll");
const elementsToFadeInUpOnEnter = document.querySelectorAll(".fade-in-up-on-enter");

// Function to check if the element is in the viewport and trigger animation
function triggerFadeInUp(element) {
  if (!element.classList.contains("fade-in-up") && window.scrollY >= (element.offsetTop - window.innerHeight)) {
    element.classList.add("fade-in-up");
  }
}

// Scroll event listener for fade-in-up-on-scroll elements
if (elementsToFadeInUpOnScroll) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
      triggerFadeInUp(element);
    });
  });
}

// Load event listener for fade-in-up-on-enter elements
if (elementsToFadeInUpOnEnter) {
  window.addEventListener("load", function(event) {
    elementsToFadeInUpOnEnter.forEach(function(element) {
      triggerFadeInUp(element);
    });
  });
}

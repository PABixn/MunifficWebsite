const elementsToFadeInUpOnScroll = document.querySelectorAll(".fade-in-up-on-scroll");
const elementsToFadeInUpOnEnter = document.querySelectorAll(".fade-in-up-on-enter");
if (elementsToFadeInUpOnScroll) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
      } else {
        element.classList.remove("fade-in-up");
      }
    });
  });
}
if (elementsToFadeInUpOnEnter) {
    window.addEventListener("load", function(event) {
      elementsToFadeInUpOnEnter.forEach(function(element) {
        if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
          element.classList.add("fade-in-up");
        } else {
          element.classList.remove("fade-in-up");
        }
      });
    });
  }
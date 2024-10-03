const elementsToFadeInUpOnScroll = document.querySelectorAll(".fade-in-up-on-scroll");

function triggerFadeInUp(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up");
      observer.unobserve(entry.target);
    }
  });
}


const observer = new IntersectionObserver(triggerFadeInUp, {
  threshold: 0.01
});

elementsToFadeInUpOnScroll.forEach(element => {
  observer.observe(element);
});

elementsToFadeInUpOnEnter.forEach(element => {
  observer.observe(element);
});

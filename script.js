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

function scrollWithOffset(event, id, offset) {
  event.preventDefault();
  const element = document.getElementById(id);
  const yOffset = offset; // Adjust this value to scroll a bit further (e.g., 50px above the element)
  const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
  
  window.scrollTo({ top: yPosition, behavior: 'smooth' });
}
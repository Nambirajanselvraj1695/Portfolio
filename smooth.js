
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("loading");
  document.body.classList.add("loaded");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll("section").forEach(sec => {
    sec.classList.add("section");
    observer.observe(sec);
  });
});

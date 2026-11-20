
// VELTRIX STUDIO — Website interactions

document.addEventListener("DOMContentLoaded", () => {

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Automatic copyright year
  const footerText = document.querySelector("footer p");

  if (footerText) {
    footerText.textContent =
      `© ${new Date().getFullYear()} VELTRIX STUDIO. ALL RIGHTS RESERVED.`;
  }

  // Reveal sections when scrolling
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  document.querySelectorAll(".section, .card, .project").forEach(element => {
    observer.observe(element);
  });

  // Header shadow while scrolling
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (header) {
      header.style.boxShadow =
        window.scrollY > 30
          ? "0 8px 30px rgba(0,0,0,0.25)"
          : "none";
    }
  });

});

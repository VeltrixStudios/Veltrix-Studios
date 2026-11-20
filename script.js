
// VELTRIX STUDIO — INTERACTIONS

// Loading screen
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 700);
});

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Custom cursor
const cursor = document.getElementById("cursor");

if (window.matchMedia("(pointer: fine)").matches) {
  document.addEventListener("mousemove", (event) => {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
  });

  document.querySelectorAll("a, button").forEach(element => {
    element.addEventListener("mouseenter", () => {
      cursor.style.width = "25px";
      cursor.style.height = "25px";
    });

    element.addEventListener("mouseleave", () => {
      cursor.style.width = "12px";
      cursor.style.height = "12px";
    });
  });
}

// Scroll reveal
const revealElements = document.querySelectorAll(
  ".intro-content, .services-heading, .service-item, .work-heading, .project, .statement h2, .contact h2, .contact-button"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach(element => {
  observer.observe(element);
});

// Footer year
const footerYear = document.querySelector("footer .mono:last-child");

if (footerYear) {
  footerYear.textContent = `© ${new Date().getFullYear()} VELTRIX STUDIO`;
}

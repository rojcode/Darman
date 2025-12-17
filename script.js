// Load translations
fetch("translate/persian.yml")
  .then((response) => response.text())
  .then((yamlText) => {
    const data = jsyaml.load(yamlText);
    function getValue(key) {
      const keys = key.split(".");
      let value = data;
      for (const k of keys) {
        value = value[k];
      }
      return value;
    }
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = getValue(key);
      if (el.tagName === "META") {
        el.setAttribute("content", value);
      } else if (el.tagName === "IMG") {
        el.setAttribute("alt", value);
      } else {
        el.textContent = value;
      }
    });

    // Typewriter Effect for Hero Title
    const typewriterElement = document.getElementById("typewriter");
    const typewriterText = typewriterElement.textContent;
    typewriterElement.innerHTML = ""; // Clear existing content
    let index = 0;
    function typeWriter() {
      if (index < typewriterText.length) {
        typewriterElement.innerHTML += typewriterText.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    }
    typeWriter();
  });

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Dynamically Set Current Year in Footer Copyright
document.getElementById("year").textContent = new Date().getFullYear();

// Intersection Observer for Fade-in Animations on Scroll
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

// Observe All Sections for Fade-in Effect
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Note: Fade-in styles are defined in CSS with initial opacity 0 and transition.

// Enhanced Hover Effects for Product Cards (Additional to CSS)
document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

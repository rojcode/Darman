// Current language
let currentLang = localStorage.getItem("selectedLanguage") || "fa";

// Typewriter timeout for managing concurrent effects
let typewriterTimeout;

// Function to load language
function loadLanguage(lang) {
  // Map old language names to new codes if necessary
  const langMap = {
    persian: "fa",
    english: "en",
    arabic: "ar",
    turkish: "tr",
    russian: "ru",
  };
  if (langMap[lang]) {
    lang = langMap[lang];
  }

  currentLang = lang;
  localStorage.setItem("selectedLanguage", lang);

  // Clear any ongoing typewriter effect
  if (typewriterTimeout) {
    clearTimeout(typewriterTimeout);
    typewriterTimeout = null;
  }
  const typewriterElement = document.getElementById("typewriter");
  if (typewriterElement) typewriterElement.innerHTML = "";

  fetch(`translate/${lang}.yml`)
    .then((response) => {
      if (!response.ok) throw new Error(`Failed to load ${lang} translation`);
      return response.text();
    })
    .then((yamlText) => {
      const data = jsyaml.load(yamlText);
      function getValue(key) {
        const keys = key.split(".");
        let value = data;
        for (const k of keys) {
          if (value[k] === undefined) return key; // Fallback to key if not found
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
      if (typewriterElement) {
        const typewriterText = typewriterElement.textContent;
        typewriterElement.innerHTML = ""; // Clear existing content
        let index = 0;

        function typeWriter() {
          if (index < typewriterText.length) {
            typewriterElement.innerHTML += typewriterText.charAt(index);
            index++;
            typewriterTimeout = setTimeout(typeWriter, 100);
          } else {
            typewriterTimeout = null; // Clear when finished
          }
        }
        typeWriter();
      }

      // Update HTML attributes and direction
      const isRTL = lang === "fa" || lang === "ar";
      document.body.style.direction = isRTL ? "rtl" : "ltr";
      document.documentElement.lang = lang;

      // Update structured data script
      const existingScript = document.getElementById("structured-data-script");
      if (existingScript) existingScript.remove();
      const newScript = document.createElement("script");
      newScript.src = `LLMO/${lang}-data.js?v=${new Date().getTime()}`;
      newScript.id = "structured-data-script";
      document.head.appendChild(newScript);

      // Update dropdown button
      const link = document.querySelector(
        `.dropdown-content a[data-lang="${lang}"]`
      );
      if (link) {
        const flagImg = link.querySelector("img");
        const langText = link.textContent.trim();
        document.querySelector(
          ".dropbtn"
        ).innerHTML = `<img src="${flagImg.src}" alt="" class="flag-icon"> ${langText} <i class="arrow-down"></i>`;
      }
    })
    .catch((error) => {
      console.error("Error loading language:", error);
    });
}

// Load initial language
loadLanguage(currentLang);

// Language dropdown toggle
const dropbtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");

if (dropbtn && dropdownContent) {
  dropbtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle("show");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", () => {
    dropdownContent.classList.remove("show");
  });
}

// Language switcher
document.querySelectorAll(".dropdown-content a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const lang = link.getAttribute("data-lang");
    loadLanguage(lang);
    dropdownContent.classList.remove("show");
  });
});

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    
    // Ignore links that are just "#" or don't point to an element
    if (href === "#" || !href.startsWith("#")) return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
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

// Scroll to Top Button Functionality
const scrollToTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 2) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Tab Switching Logic for Products
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabId = btn.getAttribute("data-tab");

    // Update buttons
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Update content
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.remove("active");
    });
    document.getElementById(tabId).classList.add("active");
  });
});

// Map Interaction Logic
const mapOverlay = document.getElementById("map-overlay");
const mapWrapper = document.querySelector(".map-wrapper");

if (mapOverlay && mapWrapper) {
  mapOverlay.addEventListener("click", () => {
    mapOverlay.classList.add("hidden");
    mapWrapper.classList.add("active");
  });
}

// Hamburger Menu Toggle
const hamburgerBtn = document.getElementById("hamburger-btn");
const mainNav = document.getElementById("main-nav");

if (hamburgerBtn && mainNav) {
  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    mainNav.classList.toggle("active");
  });

  // Close menu when a link is clicked
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerBtn.classList.remove("active");
      mainNav.classList.remove("active");
    });
  });
}

// FAQ Accordion Logic
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    const isActive = item.classList.contains("active");

    // Close all other items
    document.querySelectorAll(".faq-item").forEach((i) => {
      i.classList.remove("active");
    });

    // Toggle current item
    if (!isActive) {
      item.classList.add("active");
    }
  });
});

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
    urdu: "ur",
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

      // Render products
      renderProducts(data);

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
        } else if (el.classList.contains("nav-download-link")) {
          // Preserve the NEW badge span while updating text
          const badge = el.querySelector(".nav-badge-new");
          el.textContent = value;
          if (badge) {
            badge.textContent = getValue("download_app.badge");
            el.appendChild(badge);
          }
        } else if (el.classList.contains("nav-zagai-link")) {
          // Preserve the coming-soon badge span while updating text
          const badge = el.querySelector(".nav-badge-soon");
          el.textContent = value;
          if (badge) {
            badge.textContent = getValue("zagai.nav_badge");
            el.appendChild(badge);
          }
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
      const isRTL = lang === "fa" || lang === "ar" || lang === "ur";
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
        `.dropdown-content a[data-lang="${lang}"]`,
      );
      if (link) {
        const flagImg = link.querySelector("img");
        const langText = link.textContent.trim();
        document.querySelector(".dropbtn").innerHTML =
          `<img src="${flagImg.src}" alt="" class="flag-icon"> ${langText} <i class="arrow-down"></i>`;
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

// Staggered Animation for Advantage Cards
const advantageObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll(".advantage-card");
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("visible");
          }, index * 120);
        });
        advantageObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 },
);

const advantagesGrid = document.querySelector(".advantages-grid");
if (advantagesGrid) {
  advantageObserver.observe(advantagesGrid);
}

// Product card hover effects are handled via CSS transforms

// Scroll to Top Button & Header Scroll Effect
const scrollToTopBtn = document.getElementById("scroll-to-top");
const headerEl = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 2) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
  // Header scroll shadow
  if (window.scrollY > 10) {
    headerEl.classList.add("scrolled");
  } else {
    headerEl.classList.remove("scrolled");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Tab Switching Logic for Products (event delegation on dynamic content)
const productsDynamic = document.getElementById("products-dynamic-content");
if (productsDynamic) {
  productsDynamic.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (btn) {
      const tabId = btn.getAttribute("data-tab");
      productsDynamic
        .querySelectorAll(".tab-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      productsDynamic.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.remove("active");
      });
      const target = document.getElementById(tabId);
      if (target) target.classList.add("active");
    }

    // Show More / Show Less toggle
    const toggleBtn = e.target.closest(".subcategory-toggle-btn");
    if (toggleBtn) {
      const subcat = toggleBtn.closest(".product-subcategory");
      if (subcat) {
        const isExpanded = subcat.classList.toggle("expanded");
        const showMoreText = toggleBtn.getAttribute("data-show-more");
        const showLessText = toggleBtn.getAttribute("data-show-less");
        toggleBtn.innerHTML = isExpanded
          ? `${showLessText} <i class="fa-solid fa-chevron-up"></i>`
          : `${showMoreText} <i class="fa-solid fa-chevron-down"></i>`;
      }
    }
  });
}

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
    const item = question.closest(".faq-item");
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

// Staggered entrance for FAQ items
const faqObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll(".faq-item");
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("visible");
          }, index * 150);
        });
        faqObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

const faqAccordion = document.querySelector(".faq-accordion");
if (faqAccordion) {
  faqObserver.observe(faqAccordion);
}

// Render Products dynamically based on language
function renderProducts(data) {
  const container = document.getElementById("products-dynamic-content");
  if (!container) return;

  if (currentLang === "fa") {
    // For Farsi: load from JSON file
    fetch("translate/products/products-drp-fa.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load products JSON");
        return res.json();
      })
      .then((products) => {
        renderProductsFromJSON(products, data, container);
      })
      .catch((err) => {
        console.error("Error loading products JSON:", err);
        container.innerHTML = "";
      });
  } else {
    // For other languages: show "coming soon" message
    renderProductsComingSoon(data, container);
  }
}

// JSON Product category configuration
const JSON_PRODUCT_TABS = {
  hydraulic: {
    label: "روغن‌های هیدرولیک",
    icon: "fa-solid fa-droplet",
    subcategories: [
      { label: "روغن هیدرولیک", indices: [0, 1, 2, 3, 4, 5, 6] },
      { label: "روغن هیدرولیک Vi", indices: [7, 8, 9, 10, 11, 12, 13] },
      { label: "روغن هیدرولیک ZF", indices: [14, 15, 16, 17, 18, 19, 20] },
    ],
  },
  industrial: {
    label: "روغن‌های صنعتی",
    icon: "fa-solid fa-industry",
    subcategories: [
      {
        label: "روغن دنده صنعتی",
        indices: [21, 22, 23, 24, 25, 26, 27, 28],
      },
      { label: "روغن راهنما (سلیدوی)", indices: [29, 30, 31] },
      { label: "روغن عملیاتی مقاوم", indices: [32, 33, 34, 35] },
      { label: "روغن عملیاتی مقاوم K", indices: [36, 37, 38, 39] },
    ],
  },
  compressor: {
    label: "روغن کمپرسور",
    icon: "fa-solid fa-fan",
    subcategories: [
      { label: "روغن کمپرسور VDL", indices: [46, 47, 48, 49] },
      { label: "روغن کمپرسور اسکرو", indices: [50, 51, 52, 53] },
    ],
  },
  cutting: {
    label: "روغن برش و آب صابون",
    icon: "fa-solid fa-gears",
    subcategories: [
      { label: "روغن برش", indices: [40, 41, 42, 43, 44, 45] },
      { label: "مایع برش محلول در آب", indices: [62, 63] },
    ],
  },
  process: {
    label: "روغن‌های فرآیندی",
    icon: "fa-solid fa-temperature-high",
    subcategories: [
      { label: "روغن کوئنچ (عملیات حرارتی)", indices: [54, 55] },
      { label: "روغن نورد و کشش فلزات", indices: [56, 57, 58, 59] },
      { label: "روغن انتقال حرارت", indices: [60, 61] },
    ],
  },
};

// Render products from JSON for Farsi
function renderProductsFromJSON(products, data, container) {
  const INITIAL_SHOW = 3;
  const showMoreText = "نمایش بیشتر";
  const showLessText = "نمایش کمتر";

  // Build tabs navigation
  let tabsHtml = '<div class="tabs-nav">';
  let isFirst = true;
  for (const [tabId, tab] of Object.entries(JSON_PRODUCT_TABS)) {
    tabsHtml += `
      <button class="tab-btn${isFirst ? " active" : ""}" data-tab="${tabId}">
        <i class="${tab.icon} tab-icon"></i>
        <span>${tab.label}</span>
      </button>`;
    isFirst = false;
  }
  tabsHtml += "</div>";

  // Build tab contents
  let contentsHtml = "";
  isFirst = true;
  for (const [tabId, tab] of Object.entries(JSON_PRODUCT_TABS)) {
    contentsHtml += `<div id="${tabId}" class="tab-content${isFirst ? " active" : ""}">`;

    for (const subcat of tab.subcategories) {
      const subcatProducts = subcat.indices
        .map((i) => products[i])
        .filter(Boolean);
      const hasMore = subcatProducts.length > INITIAL_SHOW;

      contentsHtml += `<div class="product-subcategory${hasMore ? "" : " expanded"}">`;
      contentsHtml += `<div class="subcategory-header">
        <h3 class="subcategory-title"><i class="${tab.icon} subcategory-icon"></i> ${subcat.label}</h3>
        <span class="subcategory-count">${subcatProducts.length} محصول</span>
      </div>`;
      contentsHtml += '<div class="product-grid">';

      subcatProducts.forEach((product, idx) => {
        const info = product.product_info;
        const hiddenClass = idx >= INITIAL_SHOW ? " product-card-hidden" : "";

        // Key features (max 3)
        let featuresHtml = "";
        if (
          product.key_features &&
          Array.isArray(product.key_features) &&
          product.key_features.length > 0
        ) {
          const features = product.key_features.slice(0, 3);
          featuresHtml =
            '<div class="product-features"><ul>' +
            features.map((f) => `<li>${f}</li>`).join("") +
            "</ul></div>";
        }

        contentsHtml += `
          <div class="product-card${hiddenClass}">
            <div class="product-card-body">
              <h4>
                <span class="product-icon"><i class="${tab.icon}"></i></span>
                ${info.name}
              </h4>
              <span class="product-grade">${info.standard_grade}</span>
              <p>${info.description}</p>
              ${featuresHtml}
            </div>
          </div>`;
      });

      contentsHtml += "</div>"; // .product-grid

      if (hasMore) {
        contentsHtml += `
          <button class="subcategory-toggle-btn" data-show-more="${showMoreText}" data-show-less="${showLessText}">
            ${showMoreText} <i class="fa-solid fa-chevron-down"></i>
          </button>`;
      }

      contentsHtml += "</div>"; // .product-subcategory
    }

    contentsHtml += "</div>"; // .tab-content
    isFirst = false;
  }

  container.innerHTML = tabsHtml + contentsHtml;
}

// Coming soon message for other languages
function renderProductsComingSoon(data, container) {
  const messages = {
    en: "Our team is currently preparing products for your region. Please check back soon!",
    ar: "فريقنا يعمل حاليًا على تجهيز المنتجات لمنطقتكم. يرجى المراجعة لاحقًا!",
    tr: "Ekibimiz şu anda bölgeniz için ürünler üzerinde çalışıyor. Lütfen daha sonra tekrar kontrol edin!",
    ru: "Наша команда в настоящее время работает над продукцией для вашего региона. Пожалуйста, загляните позже!",
    ur: "ہماری ٹیم فی الحال آپ کے خطے کے لیے مصنوعات پر کام کر رہی ہے۔ براہ کرم بعد میں دوبارہ چیک کریں!",
    fa: "تیم ما در حال آماده‌سازی محصولات برای منطقه شما هستند. لطفاً بعداً مراجعه کنید!",
  };

  const message = messages[currentLang] || messages["en"];

  container.innerHTML = `
    <div class="products-coming-soon">
      <div class="coming-soon-icon">
        <i class="fa-solid fa-boxes-stacked"></i>
      </div>
      <h3>${message}</h3>
      <div class="coming-soon-animation">
        <span class="coming-soon-dot"></span>
        <span class="coming-soon-dot"></span>
        <span class="coming-soon-dot"></span>
      </div>
    </div>`;
}

// ===== Catalog Page — Darman Ravankar Pars =====

// Category config (matches JSON indices)
const CATEGORIES = {
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
      { label: "روغن دنده صنعتی", indices: [21, 22, 23, 24, 25, 26, 27, 28] },
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

// Spec labels (Farsi)
const SPEC_LABELS = {
  viscosity_at_40C: "گرانروی در 40°C",
  viscosity_index: "شاخص گرانروی",
  flash_point: "نقطه اشتعال",
  pour_point: "نقطه ریزش",
  density_at_15C: "چگالی در 15°C",
};

let allProducts = [];

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
  setupNav();
  setupSearch();
  setupModal();
  setupFab();
  setupPresentation();
  animateHeroCounters();
});

// ===== Fetch Products =====
function fetchProducts() {
  fetch("translate/products/products-drp-fa.json")
    .then((r) => {
      if (!r.ok) throw new Error("Failed");
      return r.json();
    })
    .then((data) => {
      allProducts = data;
      renderCategoryStrip();
      renderCatalog();
      observeCards();
    })
    .catch((err) => console.error("Error loading products:", err));
}

// ===== Render Category Strip =====
function renderCategoryStrip() {
  const strip = document.querySelector(".strip-inner");
  if (!strip) return;

  let html = "";
  for (const [id, cat] of Object.entries(CATEGORIES)) {
    const total = cat.subcategories.reduce(
      (sum, s) => sum + s.indices.length,
      0,
    );
    html += `<button class="strip-btn" data-cat="${id}">
      <i class="${cat.icon}"></i>
      <span>${cat.label}</span>
      <small style="opacity:0.6; font-size:0.72rem;">(${total})</small>
    </button>`;
  }
  strip.innerHTML = html;

  // Click handlers
  strip.querySelectorAll(".strip-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      strip
        .querySelectorAll(".strip-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const sectionEl = document.getElementById(`cat-${btn.dataset.cat}`);
      if (sectionEl) sectionEl.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ===== Render Full Catalog =====
function renderCatalog() {
  const main = document.getElementById("catalog-main");
  if (!main) return;

  let html = "";
  for (const [id, cat] of Object.entries(CATEGORIES)) {
    const total = cat.subcategories.reduce(
      (sum, s) => sum + s.indices.length,
      0,
    );

    html += `<section class="cat-section" id="cat-${id}">`;
    html += `<div class="cat-section-header">
      <div class="cat-section-icon"><i class="${cat.icon}"></i></div>
      <h2 class="cat-section-title">${cat.label}</h2>
      <span class="cat-section-count">${total} محصول</span>
    </div>`;

    for (const subcat of cat.subcategories) {
      html += `<div class="subcat-block">`;
      html += `<h3 class="subcat-title">${subcat.label}</h3>`;
      html += `<div class="products-grid">`;

      for (const idx of subcat.indices) {
        const p = allProducts[idx];
        if (!p) continue;
        html += buildCard(p, idx, cat.icon);
      }

      html += `</div></div>`; // .products-grid, .subcat-block
    }

    html += `</section>`;
  }

  main.innerHTML = html;
}

// ===== Build Single Card =====
function buildCard(product, idx, icon) {
  const info = product.product_info;
  const features = (product.key_features || []).slice(0, 3);
  const appsCount = (product.applications || []).length;

  let featuresHtml = features
    .map(
      (f) =>
        `<span class="p-card-feature"><i class="fa-solid fa-check"></i>${f}</span>`,
    )
    .join("");

  return `
    <div class="p-card" data-idx="${idx}">
      <div class="p-card-body">
        <div class="p-card-top">
          <span class="p-card-name">${info.name}</span>
          <span class="p-card-grade">${info.standard_grade}</span>
        </div>
        <p class="p-card-desc">${info.description}</p>
        <div class="p-card-features">${featuresHtml}</div>
        <div class="p-card-footer">
          <span class="p-card-more">
            مشاهده جزئیات
            <i class="fa-solid fa-arrow-left"></i>
          </span>
          <span class="p-card-apps-count">${appsCount} کاربرد</span>
        </div>
      </div>
    </div>`;
}

// ===== Intersection Observer for Cards =====
function observeCards() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
  );

  document.querySelectorAll(".p-card").forEach((card, i) => {
    card.style.transitionDelay = `${(i % 6) * 0.08}s`;
    observer.observe(card);
  });

  // Also observe section headers
  const sectionObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const catId = entry.target.id.replace("cat-", "");
          document
            .querySelectorAll(".strip-btn")
            .forEach((b) => b.classList.remove("active"));
          const activeBtn = document.querySelector(
            `.strip-btn[data-cat="${catId}"]`,
          );
          if (activeBtn) activeBtn.classList.add("active");
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px" },
  );

  document.querySelectorAll(".cat-section").forEach((sec) => {
    sectionObs.observe(sec);
  });
}

// ===== Nav Scroll Effect =====
function setupNav() {
  const nav = document.querySelector(".catalog-nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // Start button
  const btnStart = document.getElementById("btn-start");
  if (btnStart) {
    btnStart.addEventListener("click", () => {
      const strip = document.getElementById("category-strip");
      const main = document.getElementById("catalog-main");
      const target = strip && strip.offsetParent !== null ? strip : main;
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  }
}

// ===== Search =====
function setupSearch() {
  const overlay = document.getElementById("search-overlay");
  const input = document.getElementById("search-input");
  const results = document.getElementById("search-results");
  const btnSearch = document.getElementById("btn-search");
  const btnClose = document.getElementById("search-close");

  function openSearch() {
    overlay.classList.add("active");
    setTimeout(() => input.focus(), 200);
  }

  function closeSearch() {
    overlay.classList.remove("active");
    input.value = "";
    results.innerHTML = "";
  }

  btnSearch.addEventListener("click", openSearch);
  btnClose.addEventListener("click", closeSearch);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeSearch();
  });

  // Keyboard shortcut
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && !overlay.classList.contains("active")) {
      e.preventDefault();
      openSearch();
    }
    if (e.key === "Escape") closeSearch();
  });

  // Search logic
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q || q.length < 2) {
      results.innerHTML = "";
      return;
    }

    const matches = [];
    allProducts.forEach((p, idx) => {
      const name = (p.product_info.name || "").toLowerCase();
      const desc = (p.product_info.description || "").toLowerCase();
      const grade = (p.product_info.standard_grade || "").toLowerCase();
      const apps = (p.applications || []).join(" ").toLowerCase();

      if (
        name.includes(q) ||
        desc.includes(q) ||
        grade.includes(q) ||
        apps.includes(q)
      ) {
        matches.push({ product: p, idx });
      }
    });

    if (matches.length === 0) {
      results.innerHTML = `<div class="search-result-item" style="justify-content:center; cursor:default;">
        <span style="color:var(--cat-text-sec);">نتیجه‌ای یافت نشد</span>
      </div>`;
      return;
    }

    results.innerHTML = matches
      .slice(0, 15)
      .map(
        ({ product, idx }) => `
      <div class="search-result-item" data-idx="${idx}">
        <div class="search-result-icon"><i class="fa-solid fa-droplet"></i></div>
        <div class="search-result-info">
          <h4>${product.product_info.name}</h4>
          <p>${product.product_info.standard_grade} — ${(product.product_info.description || "").slice(0, 60)}...</p>
        </div>
      </div>`,
      )
      .join("");

    // Click on result
    results
      .querySelectorAll(".search-result-item[data-idx]")
      .forEach((item) => {
        item.addEventListener("click", () => {
          closeSearch();
          openProductModal(parseInt(item.dataset.idx));
        });
      });
  });
}

// ===== Modal =====
function setupModal() {
  const overlay = document.getElementById("modal-overlay");
  const closeBtn = document.getElementById("modal-close");

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Delegate card clicks
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".p-card");
    if (card && card.dataset.idx !== undefined) {
      openProductModal(parseInt(card.dataset.idx));
    }
  });
}

function openProductModal(idx) {
  const p = allProducts[idx];
  if (!p) return;

  const overlay = document.getElementById("modal-overlay");
  const body = document.getElementById("modal-body");
  const info = p.product_info;

  // Applications
  let appsHtml = "";
  if (p.applications && p.applications.length) {
    appsHtml = `
      <div class="modal-section">
        <div class="modal-section-title"><i class="fa-solid fa-bullseye"></i> کاربردها</div>
        <div class="modal-apps">
          ${p.applications.map((a) => `<div class="modal-app"><i class="fa-solid fa-chevron-left"></i> ${a}</div>`).join("")}
        </div>
      </div>`;
  }

  // Technical Specs
  let specsHtml = "";
  if (p.technical_specifications) {
    const specs = p.technical_specifications;
    let rows = "";

    if (specs.viscosity_at_40C) {
      rows += `<tr><td>گرانروی در 40°C</td><td>${specs.viscosity_at_40C.value} ${specs.viscosity_at_40C.unit} (${specs.viscosity_at_40C.range})</td></tr>`;
    }
    if (specs.viscosity_index) {
      rows += `<tr><td>شاخص گرانروی</td><td>${specs.viscosity_index.value} (${specs.viscosity_index.standard})</td></tr>`;
    }
    if (specs.flash_point) {
      rows += `<tr><td>نقطه اشتعال</td><td>${specs.flash_point.value}°${specs.flash_point.unit}</td></tr>`;
    }
    if (specs.pour_point) {
      rows += `<tr><td>نقطه ریزش</td><td>${specs.pour_point.value}°${specs.pour_point.unit}</td></tr>`;
    }
    if (specs.density_at_15C) {
      rows += `<tr><td>چگالی در 15°C</td><td>${specs.density_at_15C.value} ${specs.density_at_15C.unit}</td></tr>`;
    }

    if (rows) {
      specsHtml = `
        <div class="modal-section">
          <div class="modal-section-title"><i class="fa-solid fa-flask-vial"></i> مشخصات فنی</div>
          <table class="modal-specs">${rows}</table>
        </div>`;
    }
  }

  // Key Features
  let featuresHtml = "";
  if (p.key_features && p.key_features.length) {
    featuresHtml = `
      <div class="modal-section">
        <div class="modal-section-title"><i class="fa-solid fa-star"></i> ویژگی‌های کلیدی</div>
        <div class="modal-features">
          ${p.key_features.map((f) => `<div class="modal-feature"><i class="fa-solid fa-check-circle"></i> ${f}</div>`).join("")}
        </div>
      </div>`;
  }

  body.innerHTML = `
    <div class="modal-header">
      <h2 class="modal-name">${info.name}</h2>
      <div class="modal-badges">
        <span class="modal-badge grade">${info.standard_grade}</span>
        <span class="modal-badge">${info.base_type}</span>
      </div>
      <p class="modal-desc">${info.description}</p>
    </div>
    ${appsHtml}
    ${specsHtml}
    ${featuresHtml}
  `;

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("active");
  document.body.style.overflow = "";
}

// ===== FAB =====
function setupFab() {
  const fabTop = document.getElementById("fab-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      fabTop.classList.add("visible");
    } else {
      fabTop.classList.remove("visible");
    }
  });
  fabTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===== Presentation Mode =====
function setupPresentation() {
  const btn = document.getElementById("btn-presentation");
  if (!btn) return;

  function updatePresentationUI(isPresenting) {
    if (isPresenting) {
      document.body.classList.add("presentation-mode");
      btn.innerHTML = '<i class="fa-solid fa-compress"></i>';
    } else {
      document.body.classList.remove("presentation-mode");
      btn.innerHTML = '<i class="fa-solid fa-display"></i>';
    }
  }

  btn.addEventListener("click", () => {
    const isPresenting = !document.body.classList.contains("presentation-mode");
    updatePresentationUI(isPresenting);

    if (isPresenting && document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else if (!isPresenting && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  });

  // Sync presentation-mode class when user exits fullscreen via Escape or browser UI
  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
      updatePresentationUI(false);
    }
  });
}

// ===== Animate Hero Counters =====
function animateHeroCounters() {
  const counters = document.querySelectorAll(".stat-number[data-count]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          animateCounter(el, target);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((c) => observer.observe(c));
}

function animateCounter(el, target) {
  let current = 0;
  const step = Math.max(1, Math.floor(target / 40));
  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = current;
  }, 35);
}

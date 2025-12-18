// JSON-LD полный с предложениями для всех продуктов
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ManufacturingBusiness",
  name: "Darman Ravankar Pars",
  legalName: "Компания Darman Ravankar Pars",
  brand: {
    "@type": "Brand",
    name: "Darman",
    slogan: "Качество, доверие и инновации в каждой капле смазочного материала",
    logo: "https://rojcode.github.io/Darman/static/images/darman_image_main.png",
  },
  description:
    "Darman Ravankar Pars - ведущая иранская компания по производству промышленных и автомобильных смазочных материалов. Продукты включают моторное масло, масло для коробки передач, гидравлическое масло, тормозную жидкость, турбинное масло, трансмиссионное масло, промышленную смазку и водные продукты. Наша цель - предоставлять продукты с устойчивым качеством и доверием клиентов.",
  url: "https://rojcode.github.io/Darman/",
  image: "https://rojcode.github.io/Darman/static/images/darman_image_main.png",
  telephone: "+989329726349",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "Керманшах",
    addressRegion: "Керманшах",
    postalCode: "",
    addressCountry: "RU",
  },
  areaServed: {
    "@type": "Country",
    name: "Russia",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+989329726349",
    contactType: "sales",
    areaServed: "RU",
    availableLanguage: ["ru"],
  },
  makesOffer: {
    "@type": "OfferCatalog",
    name: "Продукты смазочных материалов",
    itemListElement: [
      // Пример предложений для всех продуктов
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Гидравлическое Масло",
          description:
            "Специальное масло для промышленных гидравлических систем с высокой устойчивостью к давлению и температуре.",
          category: "Промышленные Масла",
          application:
            "Подходит для промышленного оборудования и гидравлических систем",
          offers: {
            "@type": "Offer",
            priceCurrency: "RUB",
            price: "1500000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/roghan-hydraulic",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Масло для Переноса Тепла",
          description:
            "Специальное масло для систем охлаждения и переноса тепла в тяжелой промышленности.",
          category: "Промышленные Масла",
          application:
            "Используется в котлах, теплообменниках и промышленных системах",
          offers: {
            "@type": "Offer",
            priceCurrency: "RUB",
            price: "1800000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/roghan-heat-transfer",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Трансмиссионное Масло",
          description:
            "Масло для промышленных и сельскохозяйственных трансмиссий и передачи мощности.",
          category: "Промышленные Масла",
          application:
            "Используется в трансмиссиях и оборудовании для передачи мощности",
          offers: {
            "@type": "Offer",
            priceCurrency: "RUB",
            price: "1600000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/roghan-trans",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Турбинное Масло",
          description:
            "Масло для газовых и паровых турбин со стабильными свойствами при высоких температурах.",
          category: "Промышленные Масла",
          application:
            "Используется на электростанциях и в энергетической промышленности",
          offers: {
            "@type": "Offer",
            priceCurrency: "RUB",
            price: "2000000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/roghan-turbine",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Моторное Масло",
          description:
            "Моторное масло с продвинутой формулой для снижения расхода топлива и увеличения срока службы двигателя.",
          category: "Автомобильные Масла",
          application:
            "Подходит для бензиновых и дизельных легковых и грузовых автомобилей",
          offers: {
            "@type": "Offer",
            priceCurrency: "RUB",
            price: "1200000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/roghan-motor",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Масло для Коробки Передач",
          description:
            "Масло для механических и автоматических коробок передач с высокой устойчивостью к температуре и давлению.",
          category: "Автомобильные Масла",
          application:
            "Используется во всех легковых и грузовых автомобилях и машинах",
          offers: {
            "@type": "Offer",
            priceCurrency: "RUB",
            price: "1400000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/roghan-gearbox",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Гидравлическое Масло для Автомобилей",
          description:
            "Масло для систем тормозов и гидравлического рулевого управления автомобилей.",
          category: "Автомобильные Масла",
          application: "Подходит для легковых и грузовых автомобилей",
          offers: {
            "@type": "Offer",
            priceCurrency: "RUB",
            price: "1300000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/roghan-car-hydraulic",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Тормозная Жидкость",
          description:
            "Тормозная жидкость с высокой температурой кипения для безопасности тормозной системы в тяжелых условиях.",
          category: "Автомобильные Масла",
          application: "Подходит для легковых и грузовых автомобилей",
          offers: {
            "@type": "Offer",
            priceCurrency: "RUB",
            price: "1100000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/brake-oil",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Промышленная Смазка",
          description:
            "Смазка для подшипников и движущихся частей с толерантностью к высокому давлению и температуре.",
          category: "Смазка",
          application:
            "Подходит для промышленного оборудования и тяжелой техники",
          offers: {
            "@type": "Offer",
            priceCurrency: "RUB",
            price: "900000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/industrial-grease",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Промышленная Охлаждающая Жидкость",
          description:
            "Раствор для обработки с охлаждающими и смазывающими свойствами.",
          category: "Охлаждающая Жидкость",
          application:
            "Подходит для обработки и металлургической промышленности",
          offers: {
            "@type": "Offer",
            priceCurrency: "RUB",
            price: "700000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/industrial-soap-water",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Антифриз",
          description:
            "Водный продукт для предотвращения замерзания систем охлаждения автомобилей.",
          category: "Водные Продукты",
          application: "Подходит для систем охлаждения двигателей зимой",
          offers: {
            "@type": "Offer",
            priceCurrency: "RUB",
            price: "600000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/antifreeze",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Вода для Радиатора",
          description:
            "Водная основа для систем охлаждения автомобильных и промышленных двигателей.",
          category: "Водные Продукты",
          application: "Подходит для систем охлаждения двигателей",
          offers: {
            "@type": "Offer",
            priceCurrency: "RUB",
            price: "500000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/radiator-water",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Вода для Аккумулятора",
          description:
            "Для зарядки и обслуживания кислотных аккумуляторов автомобилей и промышленности.",
          category: "Водные Продукты",
          application:
            "Подходит для зарядки и обслуживания кислотных аккумуляторов",
          offers: {
            "@type": "Offer",
            priceCurrency: "RUB",
            price: "450000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/battery-water",
          },
        },
      },
    ],
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Миссия",
      value:
        "Предоставление качественных, надежных смазочных материалов, соответствующих потребностям промышленности и автомобилей Ирана",
    },
    {
      "@type": "PropertyValue",
      name: "Видение",
      value:
        "Стать основным центром производства промышленных и автомобильных смазочных материалов в Иране и повысить стандарты качества этой отрасли",
    },
    {
      "@type": "PropertyValue",
      name: "Идентичность Бренда",
      value:
        "Darman Ravankar Pars сочетает продвинутые технические знания, качественное сырье и экспертную команду для производства продуктов с высокой производительностью, долговечностью и доверием клиентов.",
    },
  ],
};

// Внедрить JSON-LD в head HTML
const script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(structuredData);
document.head.appendChild(script);

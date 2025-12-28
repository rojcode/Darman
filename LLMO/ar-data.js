(function () {
  // Complete JSON-LD structured data for Darman Ravankar Pars (Arabic) with offers
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ManufacturingBusiness",
    name: "دارمان روانکار پارس",
    legalName: "شركة دارمان روانکار پارس",
    brand: {
      "@type": "Brand",
      name: "دارمان",
      slogan: "الجودة، الثقة والابتكار في كل قطرة من التشحيم",
      logo: "https://rojcode.github.io/Darman/static/images/darman_image_main.png",
    },
    description:
      "دارمان روانکار پارس شركة إيرانية رائدة في إنتاج التشحيم الصناعي والسيارات. تشمل المنتجات زيت المحرك، زيت صندوق التروس، زيت هيدروليكي، زيت الفرامل، زيت التوربين، زيت التروس، شحم صناعي والمنتجات القائمة على الماء. هدفنا هو تقديم منتجات ذات جودة مستدامة وثقة العملاء.",
    url: "https://rojcode.github.io/Darman/",
    image:
      "https://rojcode.github.io/Darman/static/images/darman_image_main.png",
    telephone: "+989329726349",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "كرمانشاه",
      addressRegion: "كرمانشاه",
      postalCode: "",
      addressCountry: "IR",
    },
    areaServed: {
      "@type": "Country",
      name: "Iran",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+989329726349",
      contactType: "sales",
      areaServed: "IR",
      availableLanguage: ["ar"],
    },
    makesOffer: {
      "@type": "OfferCatalog",
      name: "منتجات التشحيم",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "زيت هيدروليكي",
            description:
              "زيت للأنظمة الهيدروليكية الصناعية مع مقاومة عالية للضغط ودرجة الحرارة.",
            category: "الزيوت الصناعية",
            application: "مناسب للآلات الصناعية والأنظمة الهيدروليكية",
            offers: {
              "@type": "Offer",
              priceCurrency: "IRR",
              price: "1500000",
              availability: "https://schema.org/InStock",
              url: "https://rojcode.github.io/Darman/products/hydraulic-oil",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "زيت نقل الحرارة",
            description:
              "زيت خاص لأنظمة التبريد ونقل الحرارة في الصناعات الثقيلة.",
            category: "الزيوت الصناعية",
            application:
              "يستخدم في الغلايات، مبادلات الحرارة والأنظمة الصناعية",
            offers: {
              "@type": "Offer",
              priceCurrency: "IRR",
              price: "1800000",
              availability: "https://schema.org/InStock",
              url: "https://rojcode.github.io/Darman/products/heat-transfer-oil",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "زيت التروس",
            description:
              "زيت لصناديق التروس الصناعية وأنظمة نقل الطاقة في الآلات الزراعية والبناء.",
            category: "الزيوت الصناعية",
            application: "يستخدم في صناديق التروس ومعدات نقل الطاقة",
            offers: {
              "@type": "Offer",
              priceCurrency: "IRR",
              price: "1600000",
              availability: "https://schema.org/InStock",
              url: "https://rojcode.github.io/Darman/products/transmission-oil",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "زيت التوربين",
            description:
              "زيت للتوربينات الغازية والبخارية مع خصائص مستقرة في درجات الحرارة العالية.",
            category: "الزيوت الصناعية",
            application: "يستخدم في محطات الطاقة والصناعات الطاقية",
            offers: {
              "@type": "Offer",
              priceCurrency: "IRR",
              price: "2000000",
              availability: "https://schema.org/InStock",
              url: "https://rojcode.github.io/Darman/products/turbine-oil",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "زيت المحرك",
            description:
              "زيت المحرك مع تركيبة متقدمة لتقليل استهلاك الوقود وزيادة عمر المحرك.",
            category: "الزيوت السيارات",
            application: "مناسب للمركبات الخفيفة والثقيلة البنزينية والديزل",
            offers: {
              "@type": "Offer",
              priceCurrency: "IRR",
              price: "1200000",
              availability: "https://schema.org/InStock",
              url: "https://rojcode.github.io/Darman/products/engine-oil",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "زيت صندوق التروس",
            description:
              "زيت لصناديق التروس اليدوية والآلية مع مقاومة عالية لدرجة الحرارة والضغط.",
            category: "الزيوت السيارات",
            application: "يستخدم في جميع المركبات والآلات الخفيفة والثقيلة",
            offers: {
              "@type": "Offer",
              priceCurrency: "IRR",
              price: "1400000",
              availability: "https://schema.org/InStock",
              url: "https://rojcode.github.io/Darman/products/gearbox-oil",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "زيت هيدروليكي للسيارات",
            description: "زيت لأنظمة الفرامل والتوجيه الهيدروليكي في المركبات.",
            category: "الزيوت السيارات",
            application: "مناسب للمركبات الخفيفة والثقيلة",
            offers: {
              "@type": "Offer",
              priceCurrency: "IRR",
              price: "1300000",
              availability: "https://schema.org/InStock",
              url: "https://rojcode.github.io/Darman/products/automotive-hydraulic-oil",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "زيت الفرامل",
            description:
              "زيت الفرامل بنقطة غليان عالية لسلامة نظام الفرامل في الظروف القاسية.",
            category: "الزيوت السيارات",
            application: "مناسب للمركبات الخفيفة والثقيلة",
            offers: {
              "@type": "Offer",
              priceCurrency: "IRR",
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
            name: "شحم صناعي",
            description:
              "شحم لتشحيم المحامل والأجزاء المتحركة مع تحمل الضغط ودرجة الحرارة العالية.",
            category: "الشحم",
            application: "مناسب للآلات الصناعية والمعدات الثقيلة",
            offers: {
              "@type": "Offer",
              priceCurrency: "IRR",
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
            name: "سائل القطع الصناعي",
            description: "محلول التصنيع مع خصائص التبريد والتشحيم.",
            category: "سائل القطع",
            application: "مناسب للتصنيع والصناعات المعدنية",
            offers: {
              "@type": "Offer",
              priceCurrency: "IRR",
              price: "700000",
              availability: "https://schema.org/InStock",
              url: "https://rojcode.github.io/Darman/products/cutting-fluid",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "مضاد التجمد",
            description: "منتج قائم على الماء لمنع تجمد أنظمة تبريد المركبات.",
            category: "المنتجات القائمة على الماء",
            application: "مناسب لأنظمة تبريد المحرك في الشتاء",
            offers: {
              "@type": "Offer",
              priceCurrency: "IRR",
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
            name: "ماء المبرد",
            description: "قاعدة ماء لأنظمة تبريد محركات المركبات والصناعية.",
            category: "المنتجات القائمة على الماء",
            application: "مناسب لأنظمة تبريد المحرك",
            offers: {
              "@type": "Offer",
              priceCurrency: "IRR",
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
            name: "ماء البطارية",
            description: "لشحن وصيانة بطاريات المركبات والصناعية الحمضية.",
            category: "المنتجات القائمة على الماء",
            application: "مناسب لشحن وصيانة البطاريات الحمضية",
            offers: {
              "@type": "Offer",
              priceCurrency: "IRR",
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
        name: "المهمة",
        value:
          "تقديم التشحيم عالي الجودة والموثوق الذي يلبي احتياجات الصناعات والمركبات الإيرانية",
      },
      {
        "@type": "PropertyValue",
        name: "الرؤية",
        value:
          "أن تصبح المرجع الرئيسي لإنتاج التشحيم الصناعي والسيارات في إيران وترقية معايير الجودة لهذه الصناعة",
      },
      {
        "@type": "PropertyValue",
        name: "هوية العلامة التجارية",
        value:
          "تنتج دارمان روانکار پارس منتجات عالية الأداء وطويلة الأمد من خلال المعرفة التقنية المتقدمة، المواد الخام عالية الجودة وفريق متخصص.",
      },
    ],
  };

  // Inject JSON-LD into HTML head
  let ldScript = document.getElementById("ld-json-script");
  if (!ldScript) {
    ldScript = document.createElement("script");
    ldScript.type = "application/ld+json";
    ldScript.id = "ld-json-script";
    document.head.appendChild(ldScript);
  }
  ldScript.textContent = JSON.stringify(structuredData);
})();

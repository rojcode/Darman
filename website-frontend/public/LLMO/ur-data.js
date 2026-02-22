(function () {
  // Complete JSON-LD structured data for Darman Ravankar Pars - Urdu
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ManufacturingBusiness",
    name: "دارمان روانکار پارس",
    legalName: "دارمان روانکار پارس کمپنی",
    brand: {
      "@type": "Brand",
      name: "دارمان",
      slogan: "لبریکنٹ کے ہر قطرے میں معیار، اعتماد اور جدت",
      logo: "https://rojcode.github.io/Darman/static/images/darman_image_main.png",
    },
    description:
      "دارمان روانکار پارس صنعتی اور آٹوموٹیو لبریکنٹس کی پیداوار میں ایک سرکردہ ایرانی کمپنی ہے۔ مصنوعات میں انجن آئل، گیئر بکس آئل، ہائیڈرولک آئل، بریک آئل، ٹربائن آئل، ٹرانسمیشن آئل، صنعتی گریس اور پانی پر مبنی مصنوعات شامل ہیں۔ ہمارا مقصد پائیدار معیار اور صارفین کے اعتماد کے ساتھ مصنوعات فراہم کرنا ہے۔",
    url: "https://rojcode.github.io/Darman/",
    image:
      "https://rojcode.github.io/Darman/static/images/darman_image_main.png",
    telephone: "+989329726349",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "کرمانشاہ",
      addressRegion: "کرمانشاہ",
      postalCode: "",
      addressCountry: "IR",
    },
    areaServed: {
      "@type": "Country",
      name: "ایران",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+989329726349",
      contactType: "sales",
      areaServed: "IR",
      availableLanguage: ["ur"],
    },
    makesOffer: {
      "@type": "OfferCatalog",
      name: "لبریکنٹ مصنوعات",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "ہائیڈرولک آئل",
            description:
              "صنعتی ہائیڈرولک سسٹمز کے لیے تیل، دباؤ اور درجہ حرارت کے خلاف اعلیٰ مزاحمت کے ساتھ۔",
            category: "صنعتی تیل",
            application:
              "صنعتی مشینری اور ہائیڈرولک سسٹمز کے لیے موزوں",
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
            name: "ہیٹ ٹرانسفر آئل",
            description:
              "بھاری صنعتوں میں ٹھنڈک اور حرارت کی منتقلی کے نظام کے لیے خصوصی تیل۔",
            category: "صنعتی تیل",
            application:
              "بوائلرز، ہیٹ ایکسچینجرز اور صنعتی نظاموں میں استعمال",
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
            name: "ٹرانسمیشن آئل",
            description:
              "صنعتی گیئر بکسز اور زرعی و تعمیراتی مشینری میں پاور ٹرانسمیشن سسٹمز کے لیے تیل۔",
            category: "صنعتی تیل",
            application: "گیئر بکسز اور پاور ٹرانسمیشن آلات میں استعمال",
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
            name: "ٹربائن آئل",
            description:
              "اعلیٰ درجہ حرارت پر مستحکم خصوصیات والا گیس اور بھاپ ٹربائنز کے لیے تیل۔",
            category: "صنعتی تیل",
            application: "پاور پلانٹس اور توانائی کی صنعتوں میں استعمال",
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
            name: "انجن آئل",
            description:
              "ایندھن کی کھپت کم کرنے اور انجن کی عمر بڑھانے کے لیے جدید فارمولیشن والا انجن آئل۔",
            category: "آٹوموٹیو تیل",
            application:
              "ہلکی اور بھاری پٹرول اور ڈیزل گاڑیوں کے لیے موزوں",
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
            name: "گیئر بکس آئل",
            description:
              "درجہ حرارت اور دباؤ کے خلاف اعلیٰ مزاحمت والا مینوئل اور آٹومیٹک گیئر بکسز کے لیے تیل۔",
            category: "آٹوموٹیو تیل",
            application: "تمام گاڑیوں اور ہلکی و بھاری مشینری میں استعمال",
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
            name: "آٹوموٹیو ہائیڈرولک آئل",
            description:
              "گاڑیوں میں بریک اور ہائیڈرولک اسٹیئرنگ سسٹمز کے لیے تیل۔",
            category: "آٹوموٹیو تیل",
            application: "ہلکی اور بھاری گاڑیوں کے لیے موزوں",
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
            name: "بریک آئل",
            description:
              "سخت حالات میں بریک سسٹم کی حفاظت کے لیے اعلیٰ ابلتے نقطے والا بریک آئل۔",
            category: "آٹوموٹیو تیل",
            application: "ہلکی اور بھاری گاڑیوں کے لیے موزوں",
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
            name: "صنعتی گریس",
            description:
              "اعلیٰ دباؤ اور درجہ حرارت برداشت کے ساتھ بیئرنگز اور متحرک حصوں کی چکنائی کے لیے گریس۔",
            category: "گریس",
            application:
              "صنعتی مشینری اور بھاری آلات کے لیے موزوں",
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
            name: "صنعتی کٹنگ فلوئڈ",
            description:
              "ٹھنڈک اور چکنائی کی خصوصیات والا مشینی محلول۔",
            category: "کٹنگ فلوئڈ",
            application: "مشینی اور دھاتی صنعتوں کے لیے موزوں",
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
            name: "اینٹی فریز",
            description:
              "گاڑیوں کے کولنگ سسٹمز کو جمنے سے بچانے کے لیے پانی پر مبنی مصنوعات۔",
            category: "پانی پر مبنی مصنوعات",
            application: "سردیوں میں انجن کولنگ سسٹمز کے لیے موزوں",
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
            name: "ریڈی ایٹر واٹر",
            description:
              "گاڑیوں اور صنعتی انجنوں کے کولنگ سسٹمز کے لیے پانی کی بنیاد۔",
            category: "پانی پر مبنی مصنوعات",
            application: "انجن کولنگ سسٹمز کے لیے موزوں",
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
            name: "بیٹری واٹر",
            description:
              "گاڑیوں اور صنعتی ایسڈ بیٹریوں کی چارجنگ اور دیکھ بھال کے لیے۔",
            category: "پانی پر مبنی مصنوعات",
            application: "ایسڈ بیٹریوں کی چارجنگ اور دیکھ بھال کے لیے موزوں",
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
        name: "مشن",
        value:
          "ایرانی صنعتوں اور گاڑیوں کی ضروریات کو پورا کرنے والے اعلیٰ معیار، قابل اعتماد لبریکنٹس فراہم کرنا",
      },
      {
        "@type": "PropertyValue",
        name: "وژن",
        value:
          "ایران میں صنعتی اور آٹوموٹیو لبریکنٹس کی پیداوار کا اہم حوالہ بننا اور اس صنعت کے معیار کو بلند کرنا",
      },
      {
        "@type": "PropertyValue",
        name: "برانڈ شناخت",
        value:
          "دارمان روانکار پارس جدید تکنیکی علم، اعلیٰ معیار کے خام مال اور خصوصی ٹیم کے ساتھ اعلیٰ کارکردگی، طویل عرصے تک چلنے والی مصنوعات تیار کرتا ہے۔",
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

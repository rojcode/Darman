(function () {
  // Complete JSON-LD structured data for Darman Ravankar Pars with offers
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ManufacturingBusiness",
    name: "Darman Ravankar Pars",
    legalName: "Darman Ravankar Pars Company",
    brand: {
      "@type": "Brand",
      name: "Darman",
      slogan: "Quality, Trust and Innovation in Every Drop of Lubricant",
      logo: "https://rojcode.github.io/Darman/static/images/darman_image_main.png",
    },
    description:
      "Darman Ravankar Pars is a leading Iranian company in the production of industrial and automotive lubricants. Products include engine oil, gearbox oil, hydraulic oil, brake oil, turbine oil, transmission oil, industrial grease and water-based products. Our goal is to provide products with sustainable quality and customer trust.",
    url: "https://rojcode.github.io/Darman/",
    image:
      "https://rojcode.github.io/Darman/static/images/darman_image_main.png",
    telephone: "+989329726349",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "Kermanshah",
      addressRegion: "Kermanshah",
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
      availableLanguage: ["en"],
    },
    makesOffer: {
      "@type": "OfferCatalog",
      name: "Lubricant Products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Hydraulic Oil",
            description:
              "Oil for industrial hydraulic systems with high resistance to pressure and temperature.",
            category: "Industrial Oils",
            application:
              "Suitable for industrial machinery and hydraulic systems",
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
            name: "Heat Transfer Oil",
            description:
              "Special oil for cooling and heat transfer systems in heavy industries.",
            category: "Industrial Oils",
            application:
              "Used in boilers, heat exchangers and industrial systems",
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
            name: "Transmission Oil",
            description:
              "Oil for industrial gearboxes and power transmission systems in agricultural and construction machinery.",
            category: "Industrial Oils",
            application: "Used in gearboxes and power transmission equipment",
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
            name: "Turbine Oil",
            description:
              "Oil for gas and steam turbines with stable properties at high temperatures.",
            category: "Industrial Oils",
            application: "Used in power plants and energy industries",
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
            name: "Engine Oil",
            description:
              "Engine oil with advanced formulation to reduce fuel consumption and increase engine life.",
            category: "Automotive Oils",
            application:
              "Suitable for light and heavy gasoline and diesel vehicles",
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
            name: "Gearbox Oil",
            description:
              "Oil for manual and automatic gearboxes with high resistance to temperature and pressure.",
            category: "Automotive Oils",
            application: "Used in all vehicles and light and heavy machinery",
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
            name: "Automotive Hydraulic Oil",
            description:
              "Oil for brake and hydraulic steering systems in vehicles.",
            category: "Automotive Oils",
            application: "Suitable for light and heavy vehicles",
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
            name: "Brake Oil",
            description:
              "Brake oil with high boiling point for brake system safety in harsh conditions.",
            category: "Automotive Oils",
            application: "Suitable for light and heavy vehicles",
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
            name: "Industrial Grease",
            description:
              "Grease for lubricating bearings and moving parts with high pressure and temperature tolerance.",
            category: "Grease",
            application:
              "Suitable for industrial machinery and heavy equipment",
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
            name: "Industrial Cutting Fluid",
            description:
              "Machining solution with cooling and lubricating properties.",
            category: "Cutting Fluid",
            application: "Suitable for machining and metal industries",
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
            name: "Antifreeze",
            description:
              "Water-based product to prevent freezing of vehicle cooling systems.",
            category: "Water-Based Products",
            application: "Suitable for engine cooling systems in winter",
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
            name: "Radiator Water",
            description:
              "Water base for cooling systems of vehicle and industrial engines.",
            category: "Water-Based Products",
            application: "Suitable for engine cooling systems",
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
            name: "Battery Water",
            description:
              "For charging and maintaining acid batteries of vehicles and industrial.",
            category: "Water-Based Products",
            application: "Suitable for charging and maintaining acid batteries",
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
        name: "Mission",
        value:
          "Providing high-quality, reliable lubricants that meet the needs of Iranian industries and vehicles",
      },
      {
        "@type": "PropertyValue",
        name: "Vision",
        value:
          "Becoming the main reference for the production of industrial and automotive lubricants in Iran and upgrading the quality standards of this industry",
      },
      {
        "@type": "PropertyValue",
        name: "Brand Identity",
        value:
          "Darman Ravankar Pars produces high-performance, long-lasting products with advanced technical knowledge, high-quality raw materials and a specialized team.",
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

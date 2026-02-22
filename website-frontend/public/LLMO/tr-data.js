(function () {
  // JSON-LD tam tekliflerle tüm ürünler için
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ManufacturingBusiness",
    name: "Darman Ravankar Pars",
    legalName: "Darman Ravankar Pars Şirketi",
    brand: {
      "@type": "Brand",
      name: "Darman",
      slogan: "Her yağ damlasında kalite, güven ve yenilik",
      logo: "https://rojcode.github.io/Darman/static/images/darman_image_main.png",
    },
    description:
      "Darman Ravankar Pars, İran'da endüstriyel ve otomotiv yağlayıcıların önde gelen üreticisidir. Ürünler motor yağı, şanzıman yağı, hidrolik yağ, fren yağı, türbin yağı, trans yağı, endüstriyel gres ve su bazlı ürünleri içerir. Amacımız, sürdürülebilir kalite ve müşteri güveni ile ürünler sunmaktır.",
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
      addressCountry: "TR",
    },
    areaServed: {
      "@type": "Country",
      name: "Turkey",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+989329726349",
      contactType: "sales",
      areaServed: "TR",
      availableLanguage: ["tr"],
    },
    makesOffer: {
      "@type": "OfferCatalog",
      name: "Yağlayıcı Ürünler",
      itemListElement: [
        // Tüm ürünler için örnek tekliflerle
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Hidrolik Yağ",
            description:
              "Yüksek basınç ve sıcaklık direncine sahip endüstriyel hidrolik sistemler için özel yağ.",
            category: "Endüstriyel Yağlar",
            application:
              "Endüstriyel makineler ve hidrolik sistemler için uygun",
            offers: {
              "@type": "Offer",
              priceCurrency: "TRY",
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
            name: "Isı Transfer Yağı",
            description:
              "Ağır endüstrilerde soğutma ve ısı transfer sistemleri için özel yağ.",
            category: "Endüstriyel Yağlar",
            application:
              "Kazalarda, ısı eşanjörlerinde ve endüstriyel sistemlerde kullanılır",
            offers: {
              "@type": "Offer",
              priceCurrency: "TRY",
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
            name: "Trans Yağı",
            description:
              "Endüstriyel ve tarımsal şanzımanlar ve güç aktarımı için yağ.",
            category: "Endüstriyel Yağlar",
            application:
              "Şanzımanlarda ve güç aktarım ekipmanlarında kullanılır",
            offers: {
              "@type": "Offer",
              priceCurrency: "TRY",
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
            name: "Türbin Yağı",
            description:
              "Gaz ve buhar türbinleri için yüksek sıcaklıklarda stabil özelliklere sahip yağ.",
            category: "Endüstriyel Yağlar",
            application:
              "Güç santrallerinde ve enerji endüstrilerinde kullanılır",
            offers: {
              "@type": "Offer",
              priceCurrency: "TRY",
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
            name: "Motor Yağı",
            description:
              "Yakıt tüketimini azaltmak ve motor ömrünü uzatmak için gelişmiş formülasyonlu motor yağı.",
            category: "Otomotiv Yağları",
            application: "Benzinli ve dizel hafif ve ağır araçlar için uygun",
            offers: {
              "@type": "Offer",
              priceCurrency: "TRY",
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
            name: "Şanzıman Yağı",
            description:
              "Manuel ve otomatik şanzımanlar için yüksek sıcaklık ve basınç direncine sahip yağ.",
            category: "Otomotiv Yağları",
            application:
              "Tüm hafif ve ağır araçlarda ve makinelerde kullanılır",
            offers: {
              "@type": "Offer",
              priceCurrency: "TRY",
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
            name: "Araç Hidrolik Yağı",
            description:
              "Araçların fren ve hidrolik direksiyon sistemleri için yağ.",
            category: "Otomotiv Yağları",
            application: "Hafif ve ağır araçlar için uygun",
            offers: {
              "@type": "Offer",
              priceCurrency: "TRY",
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
            name: "Fren Yağı",
            description:
              "Zorlu koşullarda fren sistemi güvenliği için yüksek kaynama noktasına sahip fren yağı.",
            category: "Otomotiv Yağları",
            application: "Hafif ve ağır araçlar için uygun",
            offers: {
              "@type": "Offer",
              priceCurrency: "TRY",
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
            name: "Endüstriyel Gres",
            description:
              "Yüksek basınç ve sıcaklık toleransına sahip yataklar ve hareketli parçalar için yağlama gresi.",
            category: "Gres",
            application: "Endüstriyel makineler ve ağır ekipmanlar için uygun",
            offers: {
              "@type": "Offer",
              priceCurrency: "TRY",
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
            name: "Endüstriyel Kesme Sıvısı",
            description: "Soğutma ve yağlama özelliğine sahip işleme çözümü.",
            category: "Kesme Sıvısı",
            application: "İşleme ve metal endüstriler için uygun",
            offers: {
              "@type": "Offer",
              priceCurrency: "TRY",
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
            name: "Antifriz",
            description:
              "Araçların soğutma sistemlerinde donmayı önlemek için su bazlı ürün.",
            category: "Su Bazlı Ürünler",
            application: "Kışın motor soğutma sistemleri için uygun",
            offers: {
              "@type": "Offer",
              priceCurrency: "TRY",
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
            name: "Radyatör Suyu",
            description:
              "Araç ve endüstriyel motorların soğutma sistemleri için su bazlı.",
            category: "Su Bazlı Ürünler",
            application: "Motor soğutma sistemleri için uygun",
            offers: {
              "@type": "Offer",
              priceCurrency: "TRY",
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
            name: "Akü Suyu",
            description: "Asitli akülerin şarjı ve bakımı için.",
            category: "Su Bazlı Ürünler",
            application: "Asitli akülerin şarjı ve bakımı için uygun",
            offers: {
              "@type": "Offer",
              priceCurrency: "TRY",
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
        name: "Misyon",
        value:
          "Endüstrilerin ve araçların ihtiyaçlarına uygun kaliteli, güvenilir yağlayıcılar sunmak",
      },
      {
        "@type": "PropertyValue",
        name: "Vizyon",
        value:
          "İran'da endüstriyel ve otomotiv yağlayıcıların ana üretim merkezi olmak ve bu endüstrinin kalite standartlarını yükseltmek",
      },
      {
        "@type": "PropertyValue",
        name: "Marka Kimliği",
        value:
          "Darman Ravankar Pars, gelişmiş teknik bilgi, kaliteli hammaddeler ve uzman ekip birleşimiyle yüksek performanslı, uzun ömürlü ve müşteri güvenine sahip ürünler üretir.",
      },
    ],
  };

  // JSON-LD'yi HTML head'e enjekte et
  let ldScript = document.getElementById("ld-json-script");
  if (!ldScript) {
    ldScript = document.createElement("script");
    ldScript.type = "application/ld+json";
    ldScript.id = "ld-json-script";
    document.head.appendChild(ldScript);
  }
  ldScript.textContent = JSON.stringify(structuredData);
})();

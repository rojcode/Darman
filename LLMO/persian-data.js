// JSON-LD کامل با offers برای تمام محصولات
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ManufacturingBusiness",
  name: "دارمان روانکار پارس",
  legalName: "شرکت دارمان روانکار پارس",
  brand: {
    "@type": "Brand",
    name: "دارمان",
    slogan: "کیفیت، اعتماد و نوآوری در هر قطره روانکار",
    logo: "https://rojcode.github.io/Darman/static/images/darman_image_main.png"
  },
  description: "دارمان روانکار پارس یک شرکت ایرانی پیشرو در تولید روانکارهای صنعتی و خودرویی است. محصولات شامل روغن موتور، روغن گیربکس، روغن هیدرولیک، روغن ترمز، روغن توربین، روغن ترانس، گریس صنعتی و محصولات پایه آب است. هدف ما ارائه محصولاتی با کیفیت پایدار و اعتماد مشتریان است.",
  url: "https://rojcode.github.io/Darman/",
  image: "https://rojcode.github.io/Darman/static/images/darman_image_main.png",
  telephone: "+989329726349",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "کرمانشاه",
    addressRegion: "Kermanshah",
    postalCode: "",
    addressCountry: "IR"
  },
  areaServed: {
    "@type": "Country",
    name: "Iran"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+989329726349",
    contactType: "sales",
    areaServed: "IR",
    availableLanguage: ["fa"]
  },
  makesOffer: {
    "@type": "OfferCatalog",
    name: "محصولات روانکار",
    itemListElement: [
      // مثال برای همه محصولات با offers
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "روغن هیدرولیک",
          description: "روغن مخصوص سیستم‌های هیدرولیک صنعتی با مقاومت بالا در برابر فشار و دما.",
          category: "روغن‌های صنعتی",
          application: "مناسب برای ماشین‌آلات صنعتی و سیستم‌های هیدرولیکی",
          offers: {
            "@type": "Offer",
            priceCurrency: "IRR",
            price: "1500000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/roghan-hydraulic"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "روغن انتقال حرارت",
          description: "روغن تخصصی برای سیستم‌های خنک‌کننده و انتقال حرارت در صنایع سنگین.",
          category: "روغن‌های صنعتی",
          application: "مورد استفاده در بویلرها، مبدل‌های حرارتی و سیستم‌های صنعتی",
          offers: {
            "@type": "Offer",
            priceCurrency: "IRR",
            price: "1800000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/roghan-heat-transfer"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "روغن ترانس",
          description: "روغن برای گیربکس‌ها و سیستم‌های انتقال قدرت صنعتی و کشاورزی.",
          category: "روغن‌های صنعتی",
          application: "مورد استفاده در گیربکس‌ها و تجهیزات انتقال نیرو",
          offers: {
            "@type": "Offer",
            priceCurrency: "IRR",
            price: "1600000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/roghan-trans"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "روغن توربین",
          description: "روغن مخصوص توربین‌های گازی و بخار با خواص پایدار در دماهای بالا.",
          category: "روغن‌های صنعتی",
          application: "مورد استفاده در نیروگاه‌ها و صنایع انرژی",
          offers: {
            "@type": "Offer",
            priceCurrency: "IRR",
            price: "2000000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/roghan-turbine"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "روغن موتور",
          description: "روغن موتور با فرمولاسیون پیشرفته برای کاهش مصرف سوخت و افزایش عمر موتور.",
          category: "روغن‌های خودرویی",
          application: "مناسب برای خودروهای سبک و سنگین بنزینی و دیزلی",
          offers: {
            "@type": "Offer",
            priceCurrency: "IRR",
            price: "1200000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/roghan-motor"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "روغن گیربکس",
          description: "روغن مخصوص گیربکس دستی و اتوماتیک با مقاومت بالا در دما و فشار.",
          category: "روغن‌های خودرویی",
          application: "مورد استفاده در تمامی خودروها و ماشین‌آلات سبک و سنگین",
          offers: {
            "@type": "Offer",
            priceCurrency: "IRR",
            price: "1400000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/roghan-gearbox"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "روغن هیدرولیک خودرو",
          description: "روغن برای سیستم‌های ترمز و فرمان هیدرولیکی خودروها.",
          category: "روغن‌های خودرویی",
          application: "مناسب برای خودروهای سبک و سنگین",
          offers: {
            "@type": "Offer",
            priceCurrency: "IRR",
            price: "1300000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/roghan-car-hydraulic"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "روغن ترمز",
          description: "روغن ترمز با نقطه جوش بالا برای ایمنی سیستم ترمز در شرایط سخت.",
          category: "روغن‌های خودرویی",
          application: "مناسب برای خودروهای سبک و سنگین",
          offers: {
            "@type": "Offer",
            priceCurrency: "IRR",
            price: "1100000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/brake-oil"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "گریس صنعتی",
          description: "گریس مخصوص روانکاری یاتاقان‌ها و قطعات متحرک با تحمل فشار و دمای بالا.",
          category: "گریس",
          application: "مناسب برای ماشین‌آلات صنعتی و تجهیزات سنگین",
          offers: {
            "@type": "Offer",
            priceCurrency: "IRR",
            price: "900000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/industrial-grease"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "آب صابون صنعتی",
          description: "محلول ماشین‌کاری با خاصیت خنک‌کننده و روان‌کننده.",
          category: "آب صابون",
          application: "مناسب برای ماشین‌کاری و صنایع فلزی",
          offers: {
            "@type": "Offer",
            priceCurrency: "IRR",
            price: "700000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/industrial-soap-water"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "ضد یخ",
          description: "محصول پایه آب برای جلوگیری از یخ‌زدگی سیستم خنک‌کننده خودروها.",
          category: "محصولات پایه آب",
          application: "مناسب برای سیستم خنک‌کننده موتور در زمستان",
          offers: {
            "@type": "Offer",
            priceCurrency: "IRR",
            price: "600000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/antifreeze"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "آب رادیاتور",
          description: "آب پایه برای سیستم خنک‌کننده موتورهای خودرو و صنعتی.",
          category: "محصولات پایه آب",
          application: "مناسب برای سیستم‌های خنک‌کننده موتور",
          offers: {
            "@type": "Offer",
            priceCurrency: "IRR",
            price: "500000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/radiator-water"
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "آب باتری",
          description: "برای شارژ و نگهداری باتری‌های اسیدی خودرو و صنعتی.",
          category: "محصولات پایه آب",
          application: "مناسب برای شارژ و نگهداری باتری‌های اسیدی",
          offers: {
            "@type": "Offer",
            priceCurrency: "IRR",
            price: "450000",
            availability: "https://schema.org/InStock",
            url: "https://rojcode.github.io/Darman/products/battery-water"
          }
        }
      }
    ]
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "ماموریت",
      value: "ارائه روانکارهای باکیفیت، قابل اعتماد و مطابق با نیازهای صنایع و خودروهای ایرانی"
    },
    {
      "@type": "PropertyValue",
      name: "چشم‌انداز",
      value: "تبدیل شدن به مرجع اصلی تولید روانکارهای صنعتی و خودرویی در ایران و ارتقای استانداردهای کیفی این صنعت"
    },
    {
      "@type": "PropertyValue",
      name: "هویت برند",
      value: "دارمان روانکار پارس با ترکیب دانش فنی پیشرفته، مواد اولیه باکیفیت و تیم متخصص، محصولاتی با عملکرد بالا، دوام طولانی و اعتماد مشتریان تولید می‌کند."
    }
  ]
};

// Inject JSON-LD into HTML head
const script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(structuredData);
document.head.appendChild(script);

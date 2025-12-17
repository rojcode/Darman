// Dynamically insert JSON-LD structured data for Darman Ravankar Pars
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ManufacturingBusiness",
  name: "دارمان روانکار پارس",
  legalName: "شرکت دارمان روانکار پارس",
  brand: {
    "@type": "Brand",
    name: "دارمان",
  },
  description:
    "تولیدکننده تخصصی انواع روانکار صنعتی و خودرویی شامل روغن موتور، روغن هیدرولیک، روغن گیربکس، روغن ترمز و روغن‌های صنعتی در کرمانشاه",
  url: "https://rojcode.github.io/Darman/",
  logo: "https://rojcode.github.io/Darman/static/images/logo.png",
  image: "https://rojcode.github.io/Darman/static/images/darman_image_main.png",
  telephone: "+989329726349",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "کرمانشاه",
    addressRegion: "Kermanshah",
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
    availableLanguage: ["fa"],
  },
  makesOffer: {
    "@type": "OfferCatalog",
    name: "محصولات روانکار",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "روغن موتور" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "روغن هیدرولیک" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "روغن گیربکس" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "روغن ترمز" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "روغن ترانس" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "روغن توربین" },
      },
    ],
  },
  sameAs: [],
};

const script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(structuredData);
document.head.appendChild(script);

// schema.js

const script = document.createElement("script");
script.type = "application/ld+json";

script.text = JSON.stringify({
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "Neelakant Impex",
  "url": "https://neelakantimpex.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "{search_term_string}",
    "query-input": "required name=search_term_string",
  },
});

document.head.appendChild(script);

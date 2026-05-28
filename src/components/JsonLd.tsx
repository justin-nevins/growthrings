export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Larchwood Construction",
    description:
      "Custom homes built one at a time. Master craftsmanship in Montana's Flathead Valley. 30 years of hands-on expertise from design to finish carpentry.",
    url: "https://larchwoodconstruction.com",
    telephone: "+14068580748",
    email: "josh@larchwoodconstruction.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Columbia Falls",
      addressRegion: "MT",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Whitefish, MT" },
      { "@type": "City", name: "Kalispell, MT" },
      { "@type": "City", name: "Bigfork, MT" },
      { "@type": "City", name: "Columbia Falls, MT" },
      { "@type": "City", name: "Somers, MT" },
      { "@type": "City", name: "West Glacier, MT" },
    ],
    founder: {
      "@type": "Person",
      name: "Josh Krueger",
      jobTitle: "Owner & Master Craftsman",
    },
    knowsAbout: [
      "Custom Home Construction",
      "General Contracting",
      "Finish Carpentry",
      "Residential Design",
      "Project Management",
      "Timber Frame Construction",
    ],
    priceRange: "$700,000 - $1,500,000",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

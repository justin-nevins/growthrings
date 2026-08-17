import site from "@content/site.json";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Larchwood Construction",
    description: site.metaDescription,
    url: "https://larchwoodconstruction.com",
    telephone: `+1${site.phoneRaw}`,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.addressLocality,
      addressRegion: site.addressRegion,
      addressCountry: "US",
    },
    areaServed: site.serviceAreas.map((area) => ({
      "@type": "City",
      name: `${area}, ${site.addressRegion}`,
    })),
    founder: {
      "@type": "Person",
      name: site.founderName,
      jobTitle: site.founderTitle,
    },
    knowsAbout: [
      "Custom Home Construction",
      "General Contracting",
      "Finish Carpentry",
      "Residential Design",
      "Project Management",
      "Timber Frame Construction",
    ],
    priceRange: site.priceRange,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

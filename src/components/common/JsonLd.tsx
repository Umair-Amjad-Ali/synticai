// Structured Data (JSON-LD) for Google rich results
// This is invisible to users but signals to Google that SynticAI is an AI company

const JsonLd = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SynticAI",
    alternateName: "Syntic AI",
    url: "https://synticai.com",
    sameAs: [
      "https://synticai.agency",
    ],
    logo: {
      "@type": "ImageObject",
      url: "https://synticai.com/og-image.png",
    },
    description:
      "SynticAI is an AI and custom software development agency building intelligent applications, mobile apps, and custom web software solutions.",
    email: "contact@synticai.com",
    telephone: "03288761182",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Satellite Town 67B",
      addressLocality: "Bahawalpur",
      addressRegion: "Punjab",
      addressCountry: "Pakistan",
    },
    areaServed: "Worldwide",
    serviceType: [
      "AI Development",
      "Custom Software Development",
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "AI Chatbot Development",
      "ChatGPT Integration",
      "Big Data Analytics",
      "DevOps",
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SynticAI",
    url: "https://synticai.agency",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://synticai.agency/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
    </>
  );
};

export default JsonLd;

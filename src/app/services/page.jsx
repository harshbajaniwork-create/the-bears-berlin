import { useMediaQuery } from "react-responsive";
import ServicesDesktop from "./components/ServiceDesktop";
import ServicesMobile from "./components/ServiceMobile";
import ScrollSmoothProvider from "../../components/ScrollSmoothProvider";

const Services = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 }); // lg breakpoint

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Bears Berlin",
    description:
      "Digital marketing agency specializing in social media management, paid campaigns, web design, AI solutions, influencer marketing, and content production services in Berlin.",
    url: "https://thebearsberlin.com",
    logo: "https://thebearsberlin.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressCountry: "Germany",
    },
    sameAs: [
      "https://instagram.com/thebearsberlin",
      "https://linkedin.com/company/thebearsberlin",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Management",
            description:
              "Social media strategy, content creation, community management, and paid social campaigns",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Design & Development",
            description:
              "UX/UI design, web development, branding, and visual identity services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Solutions",
            description:
              "AI strategy, workflow automation, and custom AI development",
          },
        },
      ],
    },
  };

  return (
    <>
      <ScrollSmoothProvider>
        {isDesktop ? <ServicesDesktop /> : <ServicesMobile />}
      </ScrollSmoothProvider>
    </>
  );
};

export default Services;

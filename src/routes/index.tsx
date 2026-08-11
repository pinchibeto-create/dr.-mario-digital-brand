import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero, AuthorityStrip, EditorialBand } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Endourology, Gallery } from "@/components/site/Endourology";
import { Process, Office } from "@/components/site/Process";
import { Testimonials, Faq, Contact } from "@/components/site/FaqContact";
import { Footer, WhatsAppFloat } from "@/components/site/Footer";

const TITLE = "Dr. Mario de la Peña | Urólogo y Endourólogo en Zapopan";
const DESCRIPTION =
  "Dr. Mario de la Peña, cirujano urólogo con alta especialidad en Endourología en Zapopan, Jalisco. Atención de piedras en los riñones, próstata, salud urológica masculina y cirugía urológica.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          name: "Dr. Mario de la Peña",
          medicalSpecialty: "Urology",
          description:
            "Cirujano urólogo con alta especialidad en Endourología en Zapopan, Jalisco.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Zapopan",
            addressRegion: "Jalisco",
            addressCountry: "MX",
          },
          areaServed: "Zapopan, Jalisco",
          sameAs: [
            "https://www.instagram.com/dr.mariodelapena/",
            "https://www.facebook.com/dr.mariodelapenia/",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AuthorityStrip />
        <EditorialBand />
        <About />
        <Services />
        <Endourology />
        <Gallery />
        <Process />
        <Office />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

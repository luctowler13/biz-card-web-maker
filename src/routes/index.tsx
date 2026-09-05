import { createFileRoute } from "@tanstack/react-router";
import { SqueegeeIntro } from "@/components/site/SqueegeeIntro";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { WhySection } from "@/components/site/WhySection";
import { ServiceSection } from "@/components/site/ServiceSection";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { ServiceArea } from "@/components/site/ServiceArea";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { MobileCTA } from "@/components/site/MobileCTA";
import { business, pressureWashing, windowWashing } from "@/config/site";
import windowImg from "@/assets/window-washing.jpg";
import pressureImg from "@/assets/pressure-washing.jpg";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.legalName,
  url: business.url,
  telephone: business.phone,
  email: business.email,
  image: `${business.url}/favicon.png`,
  areaServed: business.serviceArea,
  address: {
    "@type": "PostalAddress",
    addressLocality: business.city,
    addressRegion: business.region,
    addressCountry: business.country,
  },
  description:
    "Professional window cleaning and exterior pressure washing for homes and businesses in Christchurch.",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Window Cleaning Christchurch | Crystal Clear Window Washing" },
      {
        name: "description",
        content:
          "Professional window washing and pressure washing in Christchurch. Residential and commercial exterior cleaning with free, no-obligation quotes.",
      },
      { property: "og:title", content: "Crystal Clear — Window & Pressure Washing Christchurch" },
      {
        property: "og:description",
        content:
          "Crystal clear results, every time. Window washing and exterior pressure washing across Christchurch and surrounding areas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SqueegeeIntro />
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <ServiceSection
          id="window-washing"
          eyebrow="Service"
          title="Window Washing"
          headline="See the difference Crystal Clear makes."
          body="We provide professional window cleaning for homes and businesses, removing dirt, grime, water marks and buildup to leave glass looking clear and polished — inside and out, frames and sills included."
          items={windowWashing}
          cta="Get a window cleaning quote"
          image={windowImg}
          imageAlt="Professional window cleaner using a squeegee on a residential window"
        />
        <Gallery />
        <ServiceSection
          id="pressure-washing"
          eyebrow="Service"
          title="Pressure Washing"
          headline="Bring your exterior surfaces back to life."
          body="Crystal Clear provides professional exterior pressure washing to lift built-up dirt, grime and organic buildup from suitable outdoor surfaces, restoring the look of your property."
          items={pressureWashing}
          cta="Get a pressure washing quote"
          image={pressureImg}
          imageAlt="Pressure washer cleaning a grimy concrete driveway back to bright concrete"
          reverse
          tinted
        />
        <Reviews />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

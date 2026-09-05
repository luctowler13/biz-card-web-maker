import { createFileRoute } from "@tanstack/react-router";
import { Check, Phone, Mail, MapPin, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-cleaning.jpg";
import squeegeeImg from "@/assets/squeegee.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CC Window Care & Co — Professional Window Cleaning Christchurch" },
      {
        name: "description",
        content:
          "Professional window cleaning in Christchurch. Interior & exterior windows, frames & sills included. Free quotes, no obligation — call 022 327 6265.",
      },
      { property: "og:title", content: "CC Window Care & Co — Professional Window Cleaning" },
      {
        property: "og:description",
        content:
          "Crystal clear window care in Christchurch. Free quotes, no obligation. Call 022 327 6265.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  "Interior & Exterior Windows",
  "Frames & Sills Included",
  "Experienced & Honest Work",
  "Servicing the Christchurch Area",
];

function Wave({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-16 w-full sm:h-24 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path
        d="M0,64 C240,120 480,0 720,32 C960,64 1200,112 1440,48 L1440,120 L0,120 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      {/* Hero */}
      <header className="relative overflow-hidden bg-sky">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8">
          <span className="text-xl font-semibold tracking-tight text-primary-foreground">
            ccwindowcare <span className="font-normal">&amp; co</span>
          </span>
          <a
            href="tel:0223276265"
            className="rounded-full bg-primary-foreground px-5 py-2 text-sm font-bold text-sky-dark transition-transform hover:scale-105"
          >
            022 327 6265
          </a>
        </nav>

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-40 pt-14 sm:pb-48 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-sky-dark">
              Professional
            </p>
            <h1 className="font-display text-5xl leading-[0.95] text-primary-foreground sm:text-7xl">
              WINDOW
              <br />
              CLEANING
            </h1>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] text-sky-dark">
              Crystal Clear Window Care
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:0223276265"
                className="rounded-md bg-sky-dark px-8 py-3 font-display text-sm tracking-wide text-primary-foreground shadow-lg transition-transform hover:scale-105"
              >
                BOOK NOW
              </a>
              <a
                href="#services"
                className="rounded-md border-2 border-primary-foreground px-8 py-3 text-sm font-bold tracking-wide text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-sky-dark"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -right-6 -top-6 flex size-24 items-center justify-center rounded-full border-4 border-primary-foreground text-primary-foreground">
              <Sparkles className="size-10" />
            </div>
            <img
              src={heroImg}
              alt="Professional window cleaner washing an upper-storey window with a water-fed pole"
              width={1280}
              height={960}
              className="aspect-[4/3] w-full rounded-[2.5rem] border-8 border-primary-foreground object-cover shadow-2xl"
            />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 text-background">
          <Wave />
        </div>
      </header>

      {/* Services */}
      <main>
        <section id="services" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl text-sky sm:text-5xl">
                OUR
                <br />
                SERVICES
              </h2>
              <ul className="mt-8 space-y-4">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3 text-lg font-medium">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-sky text-primary-foreground">
                      <Check className="size-4" strokeWidth={3} />
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
              <p className="mt-8 max-w-md text-muted-foreground">
                From family homes to shopfronts, every job gets the same careful,
                streak-free finish — inside and out, frames and sills included.
              </p>
            </div>
            <img
              src={squeegeeImg}
              alt="Squeegee leaving a crystal clear streak across a soapy window"
              width={1024}
              height={1024}
              loading="lazy"
              className="mx-auto aspect-square w-full max-w-md rounded-full border-8 border-sky object-cover shadow-xl"
            />
          </div>
        </section>

        {/* Booking / contact */}
        <section className="relative bg-sky">
          <div className="text-background">
            <Wave flip />
          </div>
          <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-20">
            <h2 className="font-display text-4xl text-primary-foreground sm:text-5xl">
              BOOK NOW
            </h2>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-dark">
              Free Quotes · No Obligation · Get In Touch Today
            </p>

            <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              <a
                href="tel:0223276265"
                className="flex flex-col items-center gap-2 rounded-2xl bg-primary-foreground p-6 text-sky-dark shadow-lg transition-transform hover:scale-105"
              >
                <Phone className="size-6" />
                <span className="text-lg font-bold">022 327 6265</span>
                <span className="text-sm text-muted-foreground">Call or text</span>
              </a>
              <a
                href="mailto:ccwindows0@gmail.com"
                className="flex flex-col items-center gap-2 rounded-2xl bg-primary-foreground p-6 text-sky-dark shadow-lg transition-transform hover:scale-105"
              >
                <Mail className="size-6" />
                <span className="break-all text-sm font-bold">ccwindows0@gmail.com</span>
                <span className="text-sm text-muted-foreground">Email us</span>
              </a>
              <div className="flex flex-col items-center gap-2 rounded-2xl bg-primary-foreground p-6 text-sky-dark shadow-lg">
                <MapPin className="size-6" />
                <span className="text-sm font-bold">40 Balgay, Upper Riccarton</span>
                <span className="text-sm text-muted-foreground">Christchurch</span>
              </div>
            </div>
          </div>
          <div className="text-aqua">
            <Wave />
          </div>
        </section>
      </main>

      <footer className="bg-aqua px-6 py-10 text-center text-sm font-medium text-sky-dark">
        <p className="font-semibold">ccwindowcare &amp; co</p>
        <p className="mt-1">
          Crystal clear window care — Christchurch, New Zealand
        </p>
      </footer>
    </div>
  );
}

import { ArrowRight, Star } from "lucide-react";
import heroImg from "@/assets/hero-glass.jpg";
import { business } from "@/config/site";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[70%] bg-gradient-to-b from-ice to-background"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pb-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            <Star className="size-3.5 fill-brand" /> {business.serviceArea}
          </p>
          <h1 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            Crystal clear results.
            <span className="block text-brand">Every time.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Professional window washing and exterior cleaning that leaves your property
            looking its best.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-xl shadow-brand/25 transition-transform hover:scale-[1.02]"
            >
              Book a Free Quote <ArrowRight className="size-4" />
            </a>
            <a
              href="#window-washing"
              className="inline-flex items-center justify-center rounded-full border-2 border-ink px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Our Services
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["Residential", "& commercial"],
              ["Free quotes", "no obligation"],
              ["Locally", "owned & operated"],
            ].map(([a, b]) => (
              <div key={a}>
                <dt className="font-display text-base font-bold text-ink">{a}</dt>
                <dd className="text-sm text-muted-foreground">{b}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <img
            src={heroImg}
            alt="Spotless floor-to-ceiling windows on a modern Christchurch home"
            width={1600}
            height={1104}
            fetchPriority="high"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
          />
          <div className="absolute -bottom-6 left-6 hidden rounded-2xl bg-background px-6 py-4 shadow-xl sm:block">
            <p className="font-display text-2xl font-extrabold text-brand">Streak-free</p>
            <p className="text-sm text-muted-foreground">inside, outside, frames &amp; sills</p>
          </div>
        </div>
      </div>
    </section>
  );
}

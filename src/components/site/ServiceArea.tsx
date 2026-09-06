import { MapPin } from "lucide-react";
import { business, serviceAreas } from "@/config/site";

export function ServiceArea() {
  return (
    <section id="service-area" className="bg-ice py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand">Service area</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight text-ink sm:text-5xl">
            Servicing Christchurch &amp; surrounds
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
            Crystal Clear cleans windows and exterior surfaces across {business.serviceArea}.
            Not sure if you're in range? Get in touch — we'll let you know straight away.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {serviceAreas.map((area) => (
            <li
              key={area}
              className="flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-ink"
            >
              <MapPin className="size-4 shrink-0 text-brand" />
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

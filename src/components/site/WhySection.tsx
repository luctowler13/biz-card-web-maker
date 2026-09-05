import { Clock, Heart, Search, Sparkles } from "lucide-react";
import { differentiators } from "@/config/site";

const icons = { search: Search, clock: Clock, sparkles: Sparkles, heart: Heart };

export function WhySection() {
  return (
    <section id="why-us" className="bg-ice py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand">Why us</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight text-ink sm:text-5xl">
            What sets Crystal Clear apart
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-background p-7 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

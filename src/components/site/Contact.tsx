import { Mail, MapPin, Phone, Globe, Clock } from "lucide-react";
import { business } from "@/config/site";
import { QuoteForm } from "./QuoteForm";

export function Contact() {
  return (
    <section id="contact" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand">Contact</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight text-ink sm:text-5xl">
            Let’s get your property diamond clear
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <ul className="space-y-4">
              {[
                { icon: Phone, label: "Phone", value: business.phone, href: business.phoneHref },
                { icon: Mail, label: "Email", value: business.email, href: `mailto:${business.email}` },
                { icon: Globe, label: "Website", value: business.domain, href: business.url },
                { icon: MapPin, label: "Service area", value: business.serviceArea },
                { icon: Clock, label: "Hours", value: business.hours },
              ].map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4 rounded-2xl border border-border p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{label}</p>
                    {href ? (
                      <a href={href} className="font-display text-lg font-bold text-ink hover:text-brand">
                        {value}
                      </a>
                    ) : (
                      <p className="font-display text-lg font-bold text-ink">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <a href={business.phoneHref} className="rounded-full bg-ink py-4 text-center text-sm font-bold uppercase tracking-wide text-white">
                Call now
              </a>
              <a href={`mailto:${business.email}`} className="rounded-full border-2 border-ink py-4 text-center text-sm font-bold uppercase tracking-wide text-ink">
                Email us
              </a>
              <a href="#quote" className="rounded-full bg-brand py-4 text-center text-sm font-bold uppercase tracking-wide text-primary-foreground">
                Book a quote
              </a>
            </div>
          </div>

          <div id="quote" className="scroll-mt-28">
            <h3 className="font-display text-2xl font-bold uppercase text-ink">Book a quote</h3>
            <p className="mt-2 text-muted-foreground">
              Tell us about the job and we’ll come back with a free, no-obligation price.
            </p>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

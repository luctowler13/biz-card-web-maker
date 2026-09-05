import { Check } from "lucide-react";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  headline: string;
  body: string;
  items: string[];
  cta: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  tinted?: boolean;
};

export function ServiceSection({
  id,
  eyebrow,
  title,
  headline,
  body,
  items,
  cta,
  image,
  imageAlt,
  reverse,
  tinted,
}: Props) {
  return (
    <section id={id} className={`${tinted ? "bg-ice" : "bg-background"} py-20 sm:py-28`}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div className={reverse ? "lg:order-2" : ""}>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand">{eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight text-ink sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 font-display text-xl font-semibold text-brand-deep sm:text-2xl">
            {headline}
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{body}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-medium text-ink">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#quote"
            className="mt-9 inline-flex rounded-full bg-ink px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:scale-[1.02]"
          >
            {cta}
          </a>
        </div>
        <img
          src={image}
          alt={imageAlt}
          width={1200}
          height={1200}
          loading="lazy"
          className={`aspect-square w-full rounded-3xl object-cover shadow-xl ${reverse ? "lg:order-1" : ""}`}
        />
      </div>
    </section>
  );
}

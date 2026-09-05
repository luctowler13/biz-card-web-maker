import { Star } from "lucide-react";
import { reviews } from "@/config/site";

export function Reviews() {
  return (
    <section id="reviews" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand">Reviews</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight text-ink sm:text-5xl">
            What our customers say
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="flex flex-col rounded-2xl border border-dashed border-border bg-ice p-7"
            >
              <div className="flex gap-1 text-brand">
                {Array.from({ length: review.rating }).map((_, s) => (
                  <Star key={s} className="size-4 fill-brand" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                “{review.text}”
              </p>
              <footer className="mt-5">
                <p className="font-display font-bold text-ink">{review.name}</p>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {review.service}
                </p>
              </footer>
              {review.placeholder && (
                <p className="mt-4 rounded-md bg-background px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-brand-deep">
                  Placeholder — replace with a real review
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

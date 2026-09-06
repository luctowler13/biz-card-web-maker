import { Star } from "lucide-react";
import { reviews, googleReviewUrl, googleProfileUrl } from "@/config/site";

function GoogleMark() {
  return (
    <span
      aria-label="Google review"
      title="Google review"
      className="flex size-7 items-center justify-center rounded-full bg-background font-display text-sm font-bold shadow-sm ring-1 ring-border"
    >
      <span className="text-brand-deep">G</span>
    </span>
  );
}

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
              className="relative flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-lg hover:shadow-brand/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} className="size-4 fill-amber-400" />
                  ))}
                </div>
                <GoogleMark />
              </div>
              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                “{review.text}”
              </p>
              <footer className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex size-10 items-center justify-center rounded-full bg-brand font-display text-base font-bold text-primary-foreground">
                  {review.name.charAt(0)}
                </span>
                <div>
                  <p className="font-display font-bold text-ink">{review.name}</p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {review.service}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-brand/25 transition-transform hover:scale-[1.02] sm:w-auto"
          >
            Leave us a Google review
          </a>
          <a
            href={googleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:border-brand hover:text-brand sm:w-auto"
          >
            See all Google reviews
          </a>
        </div>
      </div>
    </section>
  );
}

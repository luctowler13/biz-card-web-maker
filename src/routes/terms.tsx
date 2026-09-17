import { createFileRoute, Link } from "@tanstack/react-router";
import { business } from "@/config/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Diamond Clear Property Care" },
      {
        name: "description",
        content:
          "The terms that apply to window washing and pressure washing services provided by Diamond Clear Property Care in Christchurch.",
      },
      { property: "og:title", content: "Terms of Service | Diamond Clear" },
      {
        property: "og:description",
        content: "Terms covering quotes, bookings and cleaning work by Diamond Clear.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <Link to="/" className="text-sm font-semibold text-brand">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-display text-4xl font-extrabold uppercase text-ink">Terms</h1>
      <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
        <p>
          Quotes provided by {business.legalName} are free and carry no obligation. Quotes are
          based on the information and photos supplied and may be adjusted if conditions on site
          differ materially.
        </p>
        <p>
          Bookings are confirmed by phone, text or email. Please let us know as early as possible
          if you need to reschedule. Work may be postponed for safety in unsuitable weather.
        </p>
        <p>
          Pressure washing is only carried out on surfaces suitable for the method. If a surface
          is unsuitable, we will discuss alternatives with you before proceeding.
        </p>
        <p className="rounded-xl bg-ice p-4 text-sm">
          Placeholder wording — please review these terms, including payment and cancellation
          details, before publishing.
        </p>
      </div>
    </main>
  );
}

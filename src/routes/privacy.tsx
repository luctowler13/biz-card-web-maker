import { createFileRoute, Link } from "@tanstack/react-router";
import { business } from "@/config/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Crystal Clear Window Cleaning Christchurch" },
      {
        name: "description",
        content:
          "How Crystal Clear collects, uses and protects the details you share when requesting a window or pressure washing quote.",
      },
      { property: "og:title", content: "Privacy Policy | Crystal Clear" },
      {
        property: "og:description",
        content: "How Crystal Clear handles your personal information.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <Link to="/" className="text-sm font-semibold text-brand">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-display text-4xl font-extrabold uppercase text-ink">Privacy Policy</h1>
      <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
        <p>
          {business.legalName} collects the details you provide through our quote and contact
          forms — your name, phone number, email, property address, job description and any
          photos you choose to upload.
        </p>
        <p>
          We use this information only to prepare your quote, arrange the work and stay in touch
          about your job. We do not sell your information or share it with third parties for
          marketing.
        </p>
        <p>
          You can ask us to update or delete your details at any time by emailing{" "}
          <a className="font-semibold text-brand" href={`mailto:${business.email}`}>
            {business.email}
          </a>
          .
        </p>
        <p className="rounded-xl bg-ice p-4 text-sm">
          Placeholder wording — please review and adjust this policy to match how your business
          handles customer information.
        </p>
      </div>
    </main>
  );
}

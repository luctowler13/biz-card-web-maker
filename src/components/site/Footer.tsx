import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Star } from "lucide-react";
import { business } from "@/config/site";
import logo from "@/assets/crystal-clear-logo.png.asset.json";

const socials = [
  { icon: Facebook, label: "Facebook", href: business.social.facebook },
  { icon: Instagram, label: "Instagram", href: business.social.instagram },
  { icon: Star, label: "Google reviews", href: business.social.google },
];

export function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-16 text-white/80 sm:pb-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-3">
        <div>
          <img
            src={logo.url}
            alt={`${business.name} logo`}
            width={56}
            height={56}
            loading="lazy"
            className="size-14"
          />
          <p className="mt-4 font-display text-xl font-extrabold uppercase text-white">Crystal Clear</p>
          <p className="mt-1 text-sm">Window washing &amp; exterior cleaning, {business.serviceArea}.</p>
          <a href={business.url} className="mt-3 inline-block text-sm font-semibold text-brand">
            {business.domain}
          </a>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-2 text-sm">
          <a href="#window-washing" className="py-1 hover:text-brand">Window Washing</a>
          <a href="#pressure-washing" className="py-1 hover:text-brand">Pressure Washing</a>
          <a href="#quote" className="py-1 hover:text-brand">Get a Quote</a>
          <a href="#contact" className="py-1 hover:text-brand">Contact</a>
          <Link to="/privacy" className="py-1 hover:text-brand">Privacy Policy</Link>
          <Link to="/terms" className="py-1 hover:text-brand">Terms</Link>
        </nav>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white">Follow us</p>
          <div className="mt-4 flex gap-3">
            {socials.map(({ icon: Icon, label, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-full bg-white/10 hover:bg-brand"
                >
                  <Icon className="size-5" />
                </a>
              ) : (
                <span
                  key={label}
                  title={`${label} — add your link in the site settings`}
                  className="flex size-11 items-center justify-center rounded-full bg-white/5 text-white/40"
                >
                  <Icon className="size-5" />
                </span>
              ),
            )}
          </div>
          <p className="mt-4 text-xs text-white/50">Social links can be connected any time.</p>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl px-5 text-xs text-white/50 sm:px-8">
        © {new Date().getFullYear()} {business.legalName}. All rights reserved.
      </p>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { business, nav } from "@/config/site";


export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow ${
        scrolled ? "glass-panel border-b border-border shadow-sm" : "bg-background/80 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label={`${business.name} home`}>
         <img src="/favicon.png" alt={`${business.name} logo`} width={64} height={64} className="size-14 shrink-0" />
          <span className="font-display text-lg font-extrabold uppercase leading-none tracking-tight text-ink">
            Diamond Clear
            <span className="block text-[0.6rem] font-medium tracking-[0.3em] text-brand">
              PROPERTY CARE
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#quote"
            className="rounded-full bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-brand/25 transition-transform hover:scale-[1.03]"
          >
            Book a Quote
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={business.phoneHref}
            aria-label="Call Diamond Clear"
            className="flex size-11 items-center justify-center rounded-full border border-border text-brand"
          >
            <Phone className="size-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-11 items-center justify-center rounded-full bg-ink text-white"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-base font-semibold text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-brand py-4 text-center text-base font-bold uppercase tracking-wide text-primary-foreground"
          >
            Book a Quote
          </a>
        </div>
      )}
    </header>
  );
}

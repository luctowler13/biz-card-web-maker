import { Phone, CalendarCheck } from "lucide-react";
import { business } from "@/config/site";

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-border bg-border sm:hidden">
      <a
        href={business.phoneHref}
        className="flex items-center justify-center gap-2 bg-background py-4 text-sm font-bold uppercase tracking-wide text-ink"
      >
        <Phone className="size-4 text-brand" /> Call
      </a>
      <a
        href="#quote"
        className="flex items-center justify-center gap-2 bg-brand py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground"
      >
        <CalendarCheck className="size-4" /> Get a Quote
      </a>
    </div>
  );
}

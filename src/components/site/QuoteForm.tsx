import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, ImagePlus, Loader2 } from "lucide-react";
import { sendQuoteEmail } from "../../lib/quote-email";
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().min(6, "Please enter a contact phone number").max(30),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  address: z.string().trim().min(4, "Please enter the property address").max(200),
  service: z.enum(["Window Washing", "Pressure Washing", "Both"]),
  propertyType: z.enum(["Residential", "Commercial"]),
  details: z.string().trim().min(5, "Tell us a little about the job").max(1000),
  contactMethod: z.enum(["Phone", "Email", "Text"]),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const field =
  "w-full rounded-xl border border-input bg-background px-4 py-3.5 text-base text-ink outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/25";
const labelCls = "block text-sm font-semibold text-ink";

export function QuoteForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const [sendError, setSendError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
setSendError("");
setSending(true);

try {
  await sendQuoteEmail({ data: parsed.data });
  setSent(true);
} catch (error) {
  console.error("Quote request failed:", error);
  setSendError(
    "Sorry, we couldn't send your request. Please try again or contact us directly."
  );
} finally {
  setSending(false);
}
  };

  if (sent) {
    return (
      <div className="rounded-3xl border border-border bg-background p-10 text-center shadow-xl">
        <CheckCircle2 className="mx-auto size-14 text-brand" />
        <h3 className="mt-5 font-display text-2xl font-bold text-ink">Request received</h3>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Thanks! We’ve received your quote request and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-border bg-background p-6 shadow-xl sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="name">Full name</label>
          <input id="name" name="name" autoComplete="name" className={`mt-2 ${field}`} placeholder="Jane Smith" />
          {errors.name && <p className="mt-1.5 text-sm text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">Phone number</label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className={`mt-2 ${field}`} placeholder="021 123 4567" />
          {errors.phone && <p className="mt-1.5 text-sm text-destructive">{errors.phone}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" inputMode="email" autoComplete="email" className={`mt-2 ${field}`} placeholder="jane@example.co.nz" />
          {errors.email && <p className="mt-1.5 text-sm text-destructive">{errors.email}</p>}
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="address">Property address</label>
          <input id="address" name="address" autoComplete="street-address" className={`mt-2 ${field}`} placeholder="12 Example Street, Christchurch" />
          {errors.address && <p className="mt-1.5 text-sm text-destructive">{errors.address}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="service">Service required</label>
          <select id="service" name="service" defaultValue="Window Washing" className={`mt-2 ${field}`}>
            <option>Window Washing</option>
            <option>Pressure Washing</option>
            <option>Both</option>
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="propertyType">Property type</label>
          <select id="propertyType" name="propertyType" defaultValue="Residential" className={`mt-2 ${field}`}>
            <option>Residential</option>
            <option>Commercial</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="details">Brief description of the job</label>
          <textarea id="details" name="details" rows={4} className={`mt-2 ${field}`} placeholder="Single storey home, 14 windows, inside and out." />
          {errors.details && <p className="mt-1.5 text-sm text-destructive">{errors.details}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="contactMethod">Preferred contact method</label>
          <select id="contactMethod" name="contactMethod" defaultValue="Phone" className={`mt-2 ${field}`}>
            <option>Phone</option>
            <option>Text</option>
            <option>Email</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <span className={labelCls}>Photos of the job (optional)</span>
          <label
            htmlFor="photos"
            className="mt-2 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-input px-4 py-7 text-center text-sm text-muted-foreground transition-colors hover:border-brand"
          >
            <ImagePlus className="size-6 text-brand" />
            Tap to add photos — this helps us quote faster
            <input
              id="photos"
              name="photos"
              type="file"
              accept="image/*"
              multiple
              className="sr-only"
              onChange={(e) => setPhotos(Array.from(e.target.files ?? []).map((f) => f.name))}
            />
          </label>
          {photos.length > 0 && (
            <p className="mt-2 text-sm text-muted-foreground">{photos.length} photo(s) attached</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-xl shadow-brand/25 transition-transform hover:scale-[1.01] disabled:opacity-70"
      >
        {sending && <Loader2 className="size-4 animate-spin" />}
        Get my free quote
      </button>
      {sendError && (
  <p className="mt-3 text-center text-sm text-destructive">
    {sendError}
  </p>
)}
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Free quotes, no obligation.
      </p>
    </form>
  );
}

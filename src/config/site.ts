/**
 * Crystal Clear — single place to edit business details, services,
 * reviews and service areas. Everything on the website reads from here.
 */

export const business = {
  name: "Crystal Clear",
  legalName: "Crystal Clear Window Cleaning",
  tagline: "Window Washing & Exterior Cleaning",
  domain: "crystalclearnz.com",
  url: "https://crystalclearnz.com",
  /** Replace with your final contact details. */
  phone: "022 327 6265",
  phoneHref: "tel:+64223276265",
  email: "ccwindows0@gmail.com",
  serviceArea: "Christchurch & surrounding areas",
  city: "Christchurch",
  region: "Canterbury",
  country: "NZ",
  hours: "Mon–Sat, 8am–6pm",
  /** Add links when your pages are live — empty links show as coming soon. */
  social: {
    facebook: "",
    instagram: "",
    google: "",
  },
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Window Washing", href: "#window-washing" },
  { label: "Pressure Washing", href: "#pressure-washing" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export const differentiators = [
  {
    icon: "search" as const,
    title: "Attention to Detail",
    body: "We take the time to get the small things right, leaving a genuinely clean, professional finish.",
  },
  {
    icon: "clock" as const,
    title: "Reliable Service",
    body: "Clear communication, dependable arrival times and a service you can count on.",
  },
  {
    icon: "sparkles" as const,
    title: "Professional Results",
    body: "Quality equipment, proven techniques and a high standard of workmanship on every job.",
  },
  {
    icon: "heart" as const,
    title: "Local & Personal",
    body: "A locally operated business where customers deal with real people who care about the result.",
  },
];

export const windowWashing = [
  "Exterior window cleaning",
  "Interior window cleaning",
  "Frames and sills",
  "Residential properties",
  "Commercial properties",
  "Regular maintenance cleaning",
];

export const pressureWashing = [
  "Driveways",
  "Paths",
  "Patios",
  "Concrete",
  "Exterior areas",
  "Property entrances",
  "Commercial exterior surfaces",
];

/** Add your own suburbs here as you grow. */
export const serviceAreas = [
  "Christchurch Central",
  "Riccarton",
  "Upper Riccarton",
  "Ilam",
  "Fendalton",
  "Merivale",
  "Papanui",
  "Halswell",
  "Cashmere",
  "Sumner",
  "Rolleston",
  "Lincoln",
];

/**
 * Reviews — placeholders only.
 * Replace each entry with a genuine Google review once you have them.
 */
export const reviews = [
  { name: "Your customer name", rating: 5, text: "Add a genuine Google review here.", service: "Window Washing", placeholder: true },
  { name: "Your customer name", rating: 5, text: "Add a genuine Google review here.", service: "Pressure Washing", placeholder: true },
  { name: "Your customer name", rating: 5, text: "Add a genuine Google review here.", service: "Window & Pressure Washing", placeholder: true },
];

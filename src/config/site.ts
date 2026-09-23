/**
 * Diamond Clear — single place to edit business details, services,
 * reviews and service areas. Everything on the website reads from here.
 */

export const business = {
  name: "Diamond Clear",
  legalName: "Diamond Clear Property Care",
  tagline: "Window Washing & Exterior Cleaning",
  domain: "https://www.diamondclearnz.online",
  url: "diamondclearnz.online",
  /** Replace with your final contact details. */
  phone: "022 327 6265",
  phoneHref: "tel:+64223276265",
  email: "diamondclearnz@gmail.com",
  serviceArea: "Christchurch & surrounding areas",
  city: "Christchurch",
  region: "Canterbury",
  country: "NZ",
  hours: "Mon–Sat, 8am–6pm",
  /** Add links when your pages are live — empty links show as coming soon. */
  social: {
    facebook: "",
    instagram: "",
    google: "https://share.google/0p38tLeFQ5FSvevNq",
  },
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Window Washing", href: "#window-washing" },
  { label: "Pressure Washing", href: "#pressure-washing" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

/**
 * Google review links — edit here to change where the review buttons go:
 *  - googleReviewUrl: the "Leave Us a Google Review" link
 *  - googleProfileUrl: the "See All Google Reviews" link (your profile)
 */
export const googleReviewUrl = "https://g.page/r/CdkYtsRgxMo1EAI/review";
export const googleProfileUrl = "https://share.google/0p38tLeFQ5FSvevNq";

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
  {
    name: "James",
    rating: 5,
    text: "Awesome job on our windows. They came up spotless and the whole process was quick and easy. Would definitely recommend Diamond Clear.",
    service: "Window Washing",
    placeholder: true, // SAMPLE — replace with a genuine customer review
  },
  {
    name: "Sarah",
    rating: 5,
    text: "Really impressed with the result. Professional, friendly and our windows haven't looked this clean in ages.",
    service: "Window Washing",
    placeholder: true, // SAMPLE — replace with a genuine customer review
  },
  {
    name: "Matt",
    rating: 5,
    text: "Great service and attention to detail. The windows look brand new. Will definitely be using Diamond Clear again.",
    service: "Window Washing",
    placeholder: true, // SAMPLE — replace with a genuine customer review
  },
];

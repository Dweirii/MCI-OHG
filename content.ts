// All copy and media for the site. The components only read from here.

export const brand = {
  name: "MCI",
  website: "www.mcidecor.com",
  // Traced from the supplied logo.png so it stays sharp at any size.
  logo: { src: "/logo.svg", width: 336, height: 178 },
  mark: { src: "/logo-mark.svg", width: 210, height: 109 },
  // Same logo in off-white, for taupe backgrounds.
  logoLight: { src: "/logo-light.svg", width: 336, height: 178 },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/project" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  label: "Architectural design · Interior design",
  quote:
    "“A Jordanian beginning. A global journey. Since 2016, we have transformed an ambitious idea into a distinctive presence that reaches across continents.”",
  image: "/media/mci/hero-vase.jpg",
  imageAlt: "A calm living room with a fluted vase on a round table",
};

export const stats = {
  label: "Who we are",
  heading: "We shape ideas into spaces people can feel.",
  left: { value: "14+", label: "Years of experience" },
  right: { value: "2016", label: "A Jordanian beginning" },
  caption:
    "Long before construction begins, we allow our clients to see their space come to life.",
  orbit: [1, 2, 3, 4, 5, 6].map((n) => `/media/mci/orbit-${n}.jpg`),
};

export const projects = {
  intro:
    "At MCI, design is never just about how a space looks. It is about how everything comes together.",
  heading: { small: "Our", solid: "Featured", outline: "Projects" },
  items: [
    { name: "Villa Amara", href: "/project/villa-amara", image: "/media/mci/waterfront-complex.jpg" },
    { name: "The Linden House", href: "/project/the-linden-house", image: "/media/mci/villa-street.jpg" },
    { name: "Apartment No. 12", href: "/project/apartment-no-12", image: "/media/mci/open-living.jpg" },
  ],
};

export const process = {
  label: "Why MCI?",
  heading: "Because great spaces are never created in fragments.",
  steps: [
    {
      label: "Listening",
      title: "Every project begins with listening.",
      body: "We believe the strongest results happen when every discipline speaks the same language.",
      image: "/media/mci/glass-partition.jpg",
    },
    {
      label: "Purpose",
      title: "Every decision has a purpose.",
      body: "This integrated approach allows us to think further, solve challenges earlier, and protect the original concept from the first idea to the final detail.",
      image: "/media/mci/bedroom.jpg",
    },
    {
      label: "Detail",
      title: "Every detail is part of a bigger story.",
      body: "The result is a space where beauty and function move together, where every element feels intentional: complete, cohesive, and uniquely yours.",
      image: "/media/mci/stair-hall.jpg",
    },
  ],
};

// Numbered as in the company profile.
export const services = {
  label: "What we do",
  heading: "One vision. Every detail connected.",
  intro:
    "From architecture and interiors to engineering, landscape, and execution, we bring every discipline together to create spaces that feel complete.",
  image: "/media/mci/double-height.jpg",
  items: [
    {
      name: "Project management",
      tagline: "Clarity from concept to completion.",
      body: "We align people, timelines, and details so every project moves efficiently without losing the original vision.",
    },
    {
      name: "Interior design",
      tagline: "Designed to feel as good as it looks.",
      body: "We shape spaces through light, material, function, and character—creating interiors that feel effortless, personal, and refined.",
    },
    { name: "Architectural design" },
    {
      name: "Landscape design",
      tagline: "Where architecture meets nature.",
      body: "We create outdoor spaces that extend the experience beyond the walls, bringing balance, identity, and life to every project.",
    },
    { name: "Turnkey solutions" },
  ] as { name: string; tagline?: string; body?: string }[],
};

// From the company profile.
export const visionMission = [
  {
    title: "Vision",
    body: "To be the region's premier design and construction firm by crafting exceptional spaces that harmonize architectural innovation, functional efficiency, and uncompromising quality, ultimately delivering residential and investment assets that consistently exceed client expectations.",
  },
  {
    title: "Mission",
    body: "At MCI, we transform ideas into fully integrated realities. From initial concept to final execution, our multidisciplinary team of engineers, designers, and project managers upholds the highest standards of quality, innovation, and precision. We deliver tailored design and construction solutions that perfectly capture our clients' identities while generating enduring value.",
  },
];

export const leadership = {
  label: "Leadership",
  heading: "A word from the General Manager",
  image: "/media/mci/lounge.jpg",
  intro:
    "Over the years, we have grown by staying curious, adapting to change, and continuously refining the way we design, manage, and deliver our projects. This journey has earned us the trust of clients across Jordan and the region—and that trust remains one of our greatest achievements.",
  name: "Eng. Noor Al-Refai",
  role: "General Manager",
  company: "MCI",
  quotes: [
    "At MCI, every milestone is the result of a clear vision, strong partnerships, and a commitment to keep moving forward.",
    "Looking ahead, our focus is simple: to keep raising the standard, embrace new possibilities, and create work that is relevant today and meaningful for years to come.",
    "For us, progress is not about becoming bigger. It is about becoming better.",
  ],
};

export const profile = {
  label: "Company profile",
  heading: "Architectural design. Interior design.",
  body: "Who we are, what we do, and our residential projects, gathered in one document.",
  cta: { label: "Request the profile", href: "/contact" },
  images: {
    cover: "/media/mci/profile-cover.jpg",
    spread: "/media/mci/profile-spread.jpg",
  },
};

export const legal = [
  { label: "Privacy Policy", href: "/legal-pages/privacy-policy" },
  { label: "Terms", href: "/legal-pages/terms-conditions" },
];

// Contact details from the MCI business card.
export const contact = {
  email: "n.alrefai@mcidecor.com",
  phones: [
    { region: "KSA", display: "+966 57 355 8858", tel: "+966573558858" },
    { region: "UAE", display: "+971 52 484 3535", tel: "+971524843535" },
    { region: "JO", display: "+962 79 960 7760", tel: "+962799607760" },
  ],
};

export const footer = {
  cta: "Thoughtful design, seamlessly brought to life.",
  ctaImage: "/media/mci/sunlit-living.jpg",
  ctaThumb: "/media/mci/armchair-square.jpg",
  ctaHref: "/contact",
  tagline: "Complete, cohesive, and uniquely yours.",
  connect: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
  ticker: <({ image: string } | { text: string })[]>[
    { image: "/media/mci/ticker-1.jpg" },
    { image: "/media/mci/ticker-8.jpg" },
    { text: "Architecture." },
    { text: "Interiors." },
    { image: "/media/mci/ticker-3.jpg" },
    { image: "/media/mci/ticker-7.jpg" },
    { text: "Landscape." },
    { text: "Engineering." },
    { image: "/media/mci/ticker-5.jpg" },
    { image: "/media/mci/ticker-6.jpg" },
  ],
};

// Pages that aren't built yet. Every internal link points at one of these and
// shows the "coming soon" screen; any other address is a normal 404.
export const comingSoon = {
  heading: "Coming soon",
  body: "We are still shaping this page. Until then, the home page tells the full story.",
  image: "/media/mci/lounge.jpg",
};

const pageNames = new Map<string, string>([
  ...nav.map((n) => [n.href, n.label] as const),
  ...projects.items.map((p) => [p.href, p.name] as const),
  ...legal.map((l) => [l.href, l.label] as const),
]);

export const comingSoonPaths = [...pageNames.keys()].filter((href) => href !== "/");

export function pageName(href: string) {
  return pageNames.get(href);
}

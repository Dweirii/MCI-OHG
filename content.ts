// All copy and media for the home page. The components only read from here.

export const brand = {
  name: "MCI",
  // Traced from the supplied logo.png so it stays sharp at any size.
  logo: { src: "/logo.svg", width: 336, height: 178 },
  mark: { src: "/logo-mark.svg", width: 210, height: 109 },
  // Same logo in dark brown, for the taupe footer.
  logoDark: { src: "/logo-dark.svg", width: 336, height: 178 },
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
  label: "Design and Implementation",
  quote:
    "“A Jordanian beginning. A global journey. Since 2016, we have transformed an ambitious idea into a distinctive presence that reaches across continents.”",
  quoteScript: "j,g",
  image: "/media/mci/hero-living.jpg",
  imageAlt: "A bright MCI living room with green armchairs and a lounge sofa",
};

export const stats = {
  heading: "We shape ideas into spaces people can feel.",
  headingScript: "w,s",
  left: { value: "14+", label: "Years of experience" },
  right: { value: "2016", label: "A Jordanian beginning" },
  caption:
    "Long before construction begins, we allow our clients to see their space come to life.",
  orbit: [1, 2, 3, 4, 5, 6].map((n) => `/media/mci/orbit-${n}.jpg`),
};

export const projects = {
  intro:
    "At MCI, design is never just about how a space looks. It is about how everything comes together.",
  heading: "A collection of signature interiors",
  headingScript: "s",
  items: [
    { name: "Villa Amara", href: "/project/villa-amara", image: "/media/mci/waterfront-complex.jpg" },
    { name: "The Linden House", href: "/project/the-linden-house", image: "/media/mci/villa-street.jpg" },
    { name: "Apartment No. 12", href: "/project/apartment-no-12", image: "/media/mci/open-living.jpg" },
  ],
};

export const process = {
  heading: "Because great spaces are never created in fragments.",
  headingScript: "b,f",
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

export const leadership = {
  heading: "A word from the General Manager",
  headingScript: "w,g",
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

export const services = {
  label: "What we do",
  heading: "One vision. Every detail connected.",
  headingScript: "v,d",
  intro:
    "From architecture and interiors to engineering, landscape, and execution, we bring every discipline together to create spaces that feel complete.",
  items: [
    {
      name: "Project management",
      tagline: "Clarity from concept to completion.",
      body: "We align people, timelines, and details so every project moves efficiently without losing the original vision.",
      image: "/media/mci/waterfront-complex.jpg",
    },
    {
      name: "Interior design",
      tagline: "Designed to feel as good as it looks.",
      body: "We shape spaces through light, material, function, and character—creating interiors that feel effortless, personal, and refined.",
      image: "/media/mci/living-desk.jpg",
    },
    {
      name: "Landscape design",
      tagline: "Where architecture meets nature.",
      body: "We create outdoor spaces that extend the experience beyond the walls, bringing balance, identity, and life to every project.",
      image: "/media/mci/villa-street.jpg",
    },
  ],
};

export const footer = {
  cta: "Thoughtful design, seamlessly brought to life.",
  ctaScript: "t,l",
  ctaImage: "/media/mci/sunlit-living.jpg",
  ctaThumb: "/media/mci/armchair-square.jpg",
  tagline: "Complete, cohesive, and uniquely yours.",
  taglineScript: "c,y",
  email: "support@yourbrand.com",
  phone: "+1 202 555 0147",
  connect: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Pinterest", href: "https://www.pinterest.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "Dribbble", href: "https://dribbble.com/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
  ],
  address: ["214 Harvest Lane", "Portland, OR 97204"],
  ticker: <({ image: string } | { text: string })[]>[
    { image: "/media/mci/ticker-1.jpg" },
    { image: "/media/mci/ticker-2.jpg" },
    { text: "Architecture." },
    { text: "Interiors." },
    { image: "/media/mci/ticker-3.jpg" },
    { image: "/media/mci/ticker-4.jpg" },
    { text: "Landscape." },
    { text: "Engineering." },
    { image: "/media/mci/ticker-5.jpg" },
    { image: "/media/mci/ticker-6.jpg" },
  ],
};

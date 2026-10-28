export type IconName =
  | "arrow-up-right"
  | "arrow-right"
  | "arrow-down"
  | "sun"
  | "moon"
  | "menu"
  | "close"
  | "sparkle"
  | "check"
  | "plus"
  | "layers"
  | "compass"
  | "monitor"
  | "play"
  | "clock"
  | "send"
  | "chevron-down"
  | "asterisk"
  | "external";

export type Theme = "light" | "dark";
export type Scope = "focused" | "growth" | "full";
export type ServiceKey = "identity" | "website" | "content" | "strategy";

export const WHATSAPP_NUMBER = "6285196507699";
export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export interface PortfolioItem {
  id: string;
  category: "Branding" | "Digital" | "Campaigns";
  title: string;
  description: string;
  type: string;
  visual: "nova" | "kinform" | "morrow" | "kindred";
  role: string;
  challenge: string;
  outcome: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "nova",
    category: "Branding",
    title: "NOVA® / Brand world",
    description: "A sharper identity for a new generation of ideas.",
    type: "01 — IDENTITY SYSTEM",
    visual: "nova",
    role: "Brand strategy · Visual identity · Art direction",
    challenge: "Give a new-generation energy brand a distinctive point of view in a crowded category.",
    outcome: "A bold, flexible identity built around clarity, momentum, and a recognizable visual signature.",
  },
  {
    id: "kinform",
    category: "Digital",
    title: "Kinform / Digital product",
    description: "A calmer, clearer way to make complex work feel simple.",
    type: "02 — DIGITAL EXPERIENCE",
    visual: "kinform",
    role: "Product strategy · UI/UX · Design system",
    challenge: "Make a complex workspace feel calmer and easier to understand at a glance.",
    outcome: "A focused dashboard concept with clearer hierarchy, visible progress, and less interface noise.",
  },
  {
    id: "morrow",
    category: "Campaigns",
    title: "Morrow / Culture in motion",
    description: "An expressive campaign system designed to travel.",
    type: "03 — CAMPAIGN DIRECTION",
    visual: "morrow",
    role: "Campaign concept · Art direction · Content system",
    challenge: "Translate a moving cultural idea into a campaign that feels expressive across formats.",
    outcome: "A flexible campaign language combining energetic typography, warm color, and a repeatable graphic motif.",
  },
  {
    id: "kindred",
    category: "Branding",
    title: "Kindred / Everyday rituals",
    description: "Warm, distinct, and built for a more human connection.",
    type: "04 — BRAND STRATEGY",
    visual: "kindred",
    role: "Brand positioning · Identity · Packaging direction",
    challenge: "Build a warmer, more human identity for everyday objects and small rituals.",
    outcome: "A tactile visual world with organic shapes, earthy colors, and an approachable brand voice.",
  },
];

export interface ServiceItem {
  number: string;
  icon: IconName;
  title: string;
  text: string;
  tags: string[];
  detail: string;
}

export const services: ServiceItem[] = [
  {
    number: "01",
    icon: "compass",
    title: "Strategy & positioning",
    text: "Make the big picture clear before making the next move.",
    tags: ["Brand audit", "Research", "Positioning"],
    detail: "We map audience needs, category context, and your strongest differentiators into a clear positioning, messaging direction, and practical brand roadmap.",
  },
  {
    number: "02",
    icon: "asterisk",
    title: "Brand identity",
    text: "Build a recognisable brand system with meaning behind every detail.",
    tags: ["Visual identity", "Guidelines", "Art direction"],
    detail: "From logo and typography to color, art direction, and brand guidelines, we build a consistent identity system your team can use with confidence.",
  },
  {
    number: "03",
    icon: "monitor",
    title: "Web & digital products",
    text: "Turn a thoughtful strategy into a digital experience that works.",
    tags: ["Website", "UI/UX", "Development"],
    detail: "We design and develop responsive websites and digital products with purposeful user flows, accessible interfaces, and scalable front-end foundations.",
  },
  {
    number: "04",
    icon: "play",
    title: "Content & campaigns",
    text: "Give good ideas a voice, a visual language, and a reason to move.",
    tags: ["Social content", "Video", "Campaigns"],
    detail: "We turn strategy into a content system: campaign concepts, social assets, motion and video direction, plus creative that stays consistent across channels.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    text: "We listen, ask better questions, and get close to the real problem.",
    detail: "Research · Context · Opportunity",
  },
  {
    number: "02",
    title: "Define",
    text: "We align on the direction, priorities, and what success should look like.",
    detail: "Strategy · Scope · Roadmap",
  },
  {
    number: "03",
    title: "Design",
    text: "We turn the direction into a clear, distinctive, and useful experience.",
    detail: "Concept · Iteration · Refinement",
  },
  {
    number: "04",
    title: "Deliver",
    text: "We prepare every detail for launch and make room for what comes next.",
    detail: "Build · QA · Launch",
  },
];

export const estimateOptions: Record<
  ServiceKey,
  { label: string; base: number; ceiling: number }
> = {
  identity: { label: "Brand identity", base: 8000000, ceiling: 18000000 },
  website: { label: "Website / digital product", base: 12000000, ceiling: 30000000 },
  content: { label: "Content & campaign", base: 5000000, ceiling: 15000000 },
  strategy: { label: "Brand strategy", base: 6000000, ceiling: 16000000 },
};

export const scopeOptions: Record<
  Scope,
  { label: string; multiplier: number; duration: string }
> = {
  focused: { label: "Focused", multiplier: 1, duration: "2–3 weeks" },
  growth: { label: "Growth", multiplier: 1.45, duration: "4–6 weeks" },
  full: { label: "Full scope", multiplier: 1.9, duration: "6–10 weeks" },
};

export const faqs = [
  {
    q: "Can you work with our existing team?",
    a: "Absolutely. We can lead a project end to end or plug into your existing marketing, product, or development team where the support is most useful.",
  },
  {
    q: "Do you take on small or focused projects?",
    a: "Yes. We scope around the problem and the outcome—not an arbitrary project size. A focused engagement can be a great way to build momentum.",
  },
  {
    q: "What happens after I send an inquiry?",
    a: "We review the context, ask any useful follow-up questions, and arrange an initial conversation if it looks like a good fit. From there, we align on scope, milestones, and investment.",
  },
];

export function formatIDR(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace("IDR", "Rp")
    .replace(/\s/g, " ");
}

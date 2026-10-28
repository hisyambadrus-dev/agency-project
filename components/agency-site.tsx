"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type IconName =
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

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  const paths: Record<IconName, React.ReactNode> = {
    "arrow-up-right": <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
    "arrow-right": <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    "arrow-down": <><path d="M12 5v14" /><path d="m6 13 6 6 6-6" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>,
    moon: <path d="M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5 8.5 8.5 0 1 0 20.5 14.1Z" />,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>,
    sparkle: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 15 1 2.5 2 1-2 1-1 2.5-1-2.5-2-1 2-1 1-2.5Z" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></>,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z" /></>,
    monitor: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4" /></>,
    play: <path d="m9 6 10 6-10 6V6Z" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    send: <><path d="m22 2-7 20-4-9-9-4 20-7Z" /><path d="M22 2 11 13" /></>,
    "chevron-down": <path d="m6 9 6 6 6-6" />,
    asterisk: <><path d="M12 3v18" /><path d="m4.2 7.5 15.6 9" /><path d="m4.2 16.5 15.6-9" /></>,
    external: <><path d="M14 3h7v7" /><path d="M10 14 21 3" /><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" /></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

const WHATSAPP_NUMBER = "6285196507699";
const whatsappUrl = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const portfolioItems = [
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

const services = [
  {
    number: "01",
    icon: "compass" as const,
    title: "Strategy & positioning",
    text: "Make the big picture clear before making the next move.",
    tags: ["Brand audit", "Research", "Positioning"],
    detail: "We map audience needs, category context, and your strongest differentiators into a clear positioning, messaging direction, and practical brand roadmap.",
  },
  {
    number: "02",
    icon: "asterisk" as const,
    title: "Brand identity",
    text: "Build a recognisable brand system with meaning behind every detail.",
    tags: ["Visual identity", "Guidelines", "Art direction"],
    detail: "From logo and typography to color, art direction, and brand guidelines, we build a consistent identity system your team can use with confidence.",
  },
  {
    number: "03",
    icon: "monitor" as const,
    title: "Web & digital products",
    text: "Turn a thoughtful strategy into a digital experience that works.",
    tags: ["Website", "UI/UX", "Development"],
    detail: "We design and develop responsive websites and digital products with purposeful user flows, accessible interfaces, and scalable front-end foundations.",
  },
  {
    number: "04",
    icon: "play" as const,
    title: "Content & campaigns",
    text: "Give good ideas a voice, a visual language, and a reason to move.",
    tags: ["Social content", "Video", "Campaigns"],
    detail: "We turn strategy into a content system: campaign concepts, social assets, motion and video direction, plus creative that stays consistent across channels.",
  },
];

const processSteps = [
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

type Theme = "light" | "dark";
type Scope = "focused" | "growth" | "full";
type ServiceKey = "identity" | "website" | "content" | "strategy";

const estimateOptions: Record<ServiceKey, { label: string; base: number; ceiling: number }> = {
  identity: { label: "Brand identity", base: 8000000, ceiling: 18000000 },
  website: { label: "Website / digital product", base: 12000000, ceiling: 30000000 },
  content: { label: "Content & campaign", base: 5000000, ceiling: 15000000 },
  strategy: { label: "Brand strategy", base: 6000000, ceiling: 16000000 },
};

const scopeOptions: Record<Scope, { label: string; multiplier: number; duration: string }> = {
  focused: { label: "Focused", multiplier: 1, duration: "2–3 weeks" },
  growth: { label: "Growth", multiplier: 1.45, duration: "4–6 weeks" },
  full: { label: "Full scope", multiplier: 1.9, duration: "6–10 weeks" },
};

function formatIDR(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace("IDR", "Rp")
    .replace(/\s/g, " ");
}

export default function AgencySite() {
  const [theme, setTheme] = useState<Theme>("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All work");
  const [serviceKey, setServiceKey] = useState<ServiceKey>("website");
  const [scope, setScope] = useState<Scope>("growth");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactService, setContactService] = useState("Website / digital product");
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("forma-theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("forma-theme", theme);
  }, [theme]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All work") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const estimate = useMemo(() => {
    const selectedService = estimateOptions[serviceKey];
    const selectedScope = scopeOptions[scope];
    const min = Math.round((selectedService.base * selectedScope.multiplier) / 500000) * 500000;
    const max = Math.round((selectedService.ceiling * selectedScope.multiplier) / 500000) * 500000;
    return {
      min,
      max,
      duration: selectedScope.duration,
      service: selectedService.label,
      scope: selectedScope.label,
    };
  }, [scope, serviceKey]);

  useEffect(() => {
    setContactService(estimate.service);
  }, [estimate.service]);

  function toggleTheme() {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = [
      "Halo FORMA Digital Studio, saya ingin konsultasi proyek.",
      "", `Nama: ${String(data.get("name") || "-")}`,
      `Email: ${String(data.get("email") || "-")}`,
      `Layanan: ${String(data.get("service") || "-")}`,
      `Budget: ${String(data.get("budget") || "Belum ditentukan")}`,
      `Detail proyek: ${String(data.get("details") || "-")}`,
    ].join("\n");
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setFormSubmitted(true);
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <nav className="nav-glass mx-auto flex w-full items-center justify-between" aria-label="Main navigation">
          <a href="#home" className="brand-lockup" aria-label="FORMA Studio home" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
            <span className="brand-copy"><strong>FORMA<span>®</span></strong><small>Digital studio</small></span>
          </a>

          <div className="desktop-nav" aria-label="Site sections">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
              {theme === "light" ? <Icon name="moon" size={17} /> : <Icon name="sun" size={17} />}
            </button>
            <a href={whatsappUrl("Halo FORMA, saya ingin konsultasi tentang layanan kreatif.")} target="_blank" rel="noreferrer" className="nav-cta">Let&apos;s talk <Icon name="arrow-up-right" size={15} /></a>
            <button className="mobile-menu-toggle" type="button" onClick={() => setMenuOpen((current) => !current)} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen}>
              <Icon name={menuOpen ? "close" : "menu"} size={20} />
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="mobile-nav-panel">
            {navigation.map((item, index) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                <span>0{index + 1}</span>{item.label}<Icon name="arrow-up-right" size={16} />
              </a>
            ))}
            <p>Good ideas deserve a thoughtful start.</p>
          </div>
        )}
      </header>

      <main id="main-content">
        <section className="hero-section section-wrap" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" /> Independent digital studio <span className="eyebrow-divider">/</span> Jakarta & everywhere</div>
              <h1>Helping brands grow with <span className="headline-accent">strategy</span> and <span className="headline-italic">design.</span></h1>
              <p className="hero-description">We turn ambitious ideas into clear strategy, distinctive identities, and digital experiences built to move your business forward.</p>
              <div className="hero-actions">
                <a href="#contact" className="button button-primary">Start a project <Icon name="arrow-up-right" size={17} /></a>
                <a href="#work" className="button button-quiet">Explore our work <span className="button-arrow"><Icon name="arrow-right" size={16} /></span></a>
              </div>
              <div className="hero-footnote"><span className="footnote-line" /> Thoughtful by nature. Ambitious by design.</div>
            </div>

            <div className="hero-art-wrap" aria-label="Abstract 3D brand artwork">
              <div className="hero-art-grid" />
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />
              <div className="hero-orb"><span className="orb-highlight" /><span className="orb-cut" /></div>
              <div className="hero-art-label label-top"><span className="label-sparkle"><Icon name="sparkle" size={14} /></span><span><strong>Clarity before creativity</strong><small>Our starting point, always.</small></span></div>
              <div className="hero-art-label label-bottom"><span className="art-label-icon"><Icon name="layers" size={17} /></span><span><strong>Built as a system</strong><small>Made to grow with you</small></span><span className="mini-arrow"><Icon name="arrow-up-right" size={14} /></span></div>
              <div className="hero-index">F—01 <span /> FORM FOLLOWS INTENT</div>
              <span className="art-star star-one"><Icon name="asterisk" size={22} /></span>
              <span className="art-star star-two"><Icon name="asterisk" size={11} /></span>
            </div>
          </div>

          <div className="hero-bottom-row">
            <div className="hero-bottom-label"><span className="eyebrow-number">01 /</span> A studio built around meaningful progress</div>
            <div className="capability-list"><span>Brand strategy</span><i /> <span>Identity</span><i /> <span>Digital</span><i /> <span>Creative</span></div>
          </div>

          <div className="insight-card">
            <div className="insight-index"><Icon name="sparkle" size={17} /><span>FIELD NOTE 001</span></div>
            <div className="insight-copy"><h2>A strong brand isn&apos;t just seen.<br /><span>It&apos;s understood, remembered, and chosen.</span></h2><p>Great design starts with a useful insight. We connect what makes your business different with what your audience actually needs.</p></div>
            <a href="#about" className="insight-link" aria-label="Learn about our approach"><Icon name="arrow-up-right" size={18} /></a>
          </div>
        </section>

        <section className="section-wrap section-padding about-section" id="about">
          <div className="section-heading-row">
            <p className="section-kicker"><span>02</span> / ABOUT FORMA</p>
            <p className="section-side-note">Clear thinking. Distinctive making.</p>
          </div>
          <div className="about-grid">
            <h2 className="section-title">Good work starts with <span>better questions.</span></h2>
            <div className="about-copy">
              <p className="lead-copy">We&apos;re a strategy-led creative studio for people building what comes next.</p>
              <p>Before we design a thing, we get curious about the business, the people, and the space you want to own. Then we bring strategy and execution together—so every choice has a reason, and every detail has a job.</p>
              <a href="#process" className="text-link">How we work <Icon name="arrow-up-right" size={16} /></a>
            </div>
          </div>
          <div className="about-principles">
            <div className="principle-visual">
              <div className="principle-ring ring-a" /><div className="principle-ring ring-b" /><div className="principle-core"><span>FORM</span><Icon name="asterisk" size={20} /></div>
              <div className="principle-note"><span className="status-dot" /> Strategy-led, always</div>
            </div>
            <div className="principles-list">
              <div className="principle-item"><span className="principle-number">01</span><div><h3>Think in systems</h3><p>We look beyond the single deliverable and build pieces that work together.</p></div><Icon name="arrow-up-right" size={17} /></div>
              <div className="principle-item"><span className="principle-number">02</span><div><h3>Make it meaningful</h3><p>Every design decision should clarify, connect, or move something forward.</p></div><Icon name="arrow-up-right" size={17} /></div>
              <div className="principle-item"><span className="principle-number">03</span><div><h3>Leave room to grow</h3><p>We create flexible foundations your team can build on with confidence.</p></div><Icon name="arrow-up-right" size={17} /></div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-padding services-section" id="services">
          <div className="section-heading-row">
            <p className="section-kicker"><span>03</span> / WHAT WE DO</p>
            <p className="section-side-note">From first thought to final pixel.</p>
          </div>
          <div className="services-intro"><h2 className="section-title">The right work.<br /><span>For the right reasons.</span></h2><p>One connected team, from strategic clarity to thoughtful execution. Bring us a challenge, a spark, or a business that&apos;s ready for its next chapter.</p></div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top"><span className="service-number">{service.number} / 04</span><span className="service-icon"><Icon name={service.icon} size={22} /></span></div>
                <h3>{service.title}</h3><p>{service.text}</p>
                <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="service-float-detail"><strong>What this includes</strong><p>{service.detail}</p><a href={whatsappUrl(`Halo FORMA, saya tertarik dengan layanan ${service.title}. Bisa dijelaskan lebih lanjut?`)} target="_blank" rel="noreferrer">Discuss this service <Icon name="arrow-up-right" size={13} /></a></div>
                <a href={whatsappUrl(`Halo FORMA, saya ingin konsultasi layanan ${service.title}.`)} target="_blank" rel="noreferrer" className="service-arrow" aria-label={`Discuss ${service.title} on WhatsApp`}><Icon name="arrow-up-right" size={18} /></a>
              </article>
            ))}
          </div>
          <div className="services-footnote"><Icon name="asterisk" size={15} /><span>Need something more specific? We shape the right team around the problem—not the other way around.</span><a href="#contact">Tell us what you&apos;re building <Icon name="arrow-right" size={15} /></a></div>
        </section>

        <section className="section-wrap section-padding work-section" id="work">
          <div className="section-heading-row">
            <p className="section-kicker"><span>04</span> / PORTFOLIO SHOWCASE</p>
            <p className="section-side-note">A collection of ways forward.</p>
          </div>
          <div className="work-heading"><div><h2 className="section-title">Ideas, made <span>tangible.</span></h2><p>Explore a few concept studies showing how strategy can become an identity, a digital experience, or a campaign with a point of view.</p></div><div className="filter-tabs" role="group" aria-label="Filter portfolio by category">{["All work", "Branding", "Digital", "Campaigns"].map((filter) => <button key={filter} type="button" className={activeFilter === filter ? "filter-tab active" : "filter-tab"} onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}>{filter}</button>)}</div></div>
          <div className="portfolio-grid" aria-live="polite">
            {filteredProjects.map((project) => (
              <article className="portfolio-card" key={project.id}>
                <div className={`portfolio-visual visual-${project.visual}`}>
                  <div className="visual-topline"><span>FORMA / STUDY</span><span>{project.type.split(" — ")[0]}</span></div>
                  {project.visual === "nova" && <div className="nova-composition"><span className="nova-halo" /><span className="nova-disc" /><strong>NOVA<span>®</span></strong><small>NEW ENERGY, CLEAR DIRECTION.</small><div className="nova-side-label">IDENTITY / 2026</div></div>}
                  {project.visual === "kinform" && <div className="kinform-window"><div className="window-bar"><span /><span /><span /><small>kinform.app</small></div><div className="kinform-content"><div className="kinform-sidebar"><b>K.</b><i /><i /><i /><i /></div><div className="kinform-main"><span className="mock-eyebrow">YOUR SPACE, IN FOCUS</span><strong>Make room<br />for good work.</strong><div className="mock-progress"><span /></div><div className="mock-ui-row"><i /><i /><i /></div></div></div></div>}
                  {project.visual === "morrow" && <div className="morrow-composition"><span className="morrow-sun" /><div className="morrow-orbit" /><strong>MORE<br />THAN<br /><em>NOW.</em></strong><span className="morrow-note">CULTURE IS ALWAYS IN MOTION — 26</span><span className="morrow-stamp">M.</span></div>}
                  {project.visual === "kindred" && <div className="kindred-composition"><span className="kindred-blob blob-a" /><span className="kindred-blob blob-b" /><span className="kindred-blob blob-c" /><strong>kindred<span>™</span></strong><small>little things, closer.</small><div className="kindred-label">OBJECTS FOR EVERYDAY RITUALS</div></div>}
                  <div className="project-float-detail"><span>{project.category} / PROJECT NOTES</span><strong>{project.title}</strong><p>{project.challenge}</p><div><b>Approach & outcome</b><p>{project.outcome}</p></div><small>{project.role}</small><a href={whatsappUrl(`Halo FORMA, saya ingin bertanya tentang project concept ${project.title} dan layanan serupa.`)} target="_blank" rel="noreferrer">Discuss a similar project <Icon name="arrow-up-right" size={13} /></a></div><div className="portfolio-open"><Icon name="arrow-up-right" size={19} /></div>
                </div>
                <div className="portfolio-meta"><div><span className="portfolio-category">{project.category} <span>·</span> Concept study</span><h3>{project.title}</h3><p>{project.description}</p></div><span className="portfolio-index">/{project.type.slice(0, 2)}</span></div>
              </article>
            ))}
          </div>
          <div className="portfolio-bottom"><span>01—04 / CONCEPT EXPLORATIONS</span><span>Built with intention, not decoration.</span></div>
        </section>

        <section className="featured-section" id="our-work">
          <div className="featured-inner section-wrap">
            <div className="section-heading-row"><p className="section-kicker"><span>05</span> / OUR WORK</p><p className="section-side-note">A closer look at the thinking.</p></div>
            <div className="featured-layout">
              <div className="featured-copy"><div className="featured-label"><span className="status-dot" /> FEATURED CONCEPT STUDY</div><h2>From scattered touchpoints to <span>one clear story.</span></h2><p>A brand should feel like itself wherever people meet it. For this concept, we brought strategy, identity, and digital design into a single, coherent system—one that could flex without losing its character.</p><div className="featured-meta"><div><span>DISCIPLINES</span><strong>Strategy / Identity / Digital</strong></div><div><span>APPROACH</span><strong>One system, many moments</strong></div></div><a href="#contact" className="button button-light">Build your next chapter <Icon name="arrow-up-right" size={16} /></a><p className="concept-disclaimer">Illustrative concept study created for this agency starter—not a commissioned client case.</p></div>
              <div className="featured-art" aria-label="Concept design system visualization"><div className="feature-window window-back"><span className="feature-window-dot" /><span className="feature-window-dot" /><span className="feature-window-dot" /><div className="feature-window-line line-one" /><div className="feature-window-line line-two" /><div className="feature-window-card" /></div><div className="feature-poster"><div className="poster-top"><span>F/FORM</span><span>ISSUE Nº 001</span></div><div className="poster-graphic"><span className="poster-ring ring-one" /><span className="poster-ring ring-two" /><span className="poster-sphere" /></div><div className="poster-title">MAKE<br /><em>meaning.</em></div><div className="poster-bottom"><span>STRATEGY IN EVERY DETAIL</span><span>F—26</span></div></div><div className="feature-sticker"><Icon name="asterisk" size={22} /><span>Designed<br />to connect</span></div><div className="feature-caption">SYSTEM STUDY / 001 <span>↗</span></div></div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-padding process-section" id="process">
          <div className="section-heading-row"><p className="section-kicker"><span>06</span> / OUR PROCESS</p><p className="section-side-note">A clear path. No unnecessary theatre.</p></div>
          <div className="process-intro"><h2 className="section-title">Less guesswork.<br /><span>More forward motion.</span></h2><p>Good collaboration shouldn&apos;t feel complicated. We keep the process transparent, focused, and flexible enough to meet the project where it is.</p></div>
          <div className="process-grid">
            {processSteps.map((step) => <article key={step.number} className="process-step"><div className="process-step-top"><span>{step.number}</span><span className="process-plus"><Icon name="plus" size={15} /></span></div><h3>{step.title}</h3><p>{step.text}</p><div className="process-detail">{step.detail}</div></article>)}
          </div>
          <div className="process-bottom-line"><span>ONE TEAM, FROM FIRST QUESTION TO FINAL HANDOFF.</span><span className="process-line" /><span>SCROLL TO BEGIN <Icon name="arrow-down" size={14} /></span></div>
        </section>

        <section className="section-wrap section-padding estimator-section" id="estimate">
          <div className="estimator-card">
            <div className="estimator-copy"><p className="section-kicker"><span>07</span> / START WITH A SENSE OF SCALE</p><h2>Good projects start with <span>clear expectations.</span></h2><p>Use our quick estimator to get an initial sense of budget and timeline. We&apos;ll refine the details together once we understand your goals.</p><div className="estimator-note"><Icon name="check" size={15} /><span>No obligation. Just a useful first conversation.</span></div></div>
            <div className="estimator-tool">
              <div className="estimator-field"><label htmlFor="service-select">What are you looking to build?</label><div className="select-wrap"><select id="service-select" value={serviceKey} onChange={(event) => setServiceKey(event.target.value as ServiceKey)}>{Object.entries(estimateOptions).map(([key, value]) => <option key={key} value={key}>{value.label}</option>)}</select><Icon name="chevron-down" size={16} /></div></div>
              <div className="estimator-field"><label>How much ground do we need to cover?</label><div className="scope-options">{(Object.entries(scopeOptions) as [Scope, (typeof scopeOptions)[Scope]][]).map(([key, value]) => <button type="button" key={key} className={scope === key ? "scope-option selected" : "scope-option"} onClick={() => setScope(key)} aria-pressed={scope === key}><span>{value.label}</span>{scope === key && <Icon name="check" size={14} />}</button>)}</div></div>
              <div className="estimate-output"><span className="estimate-caption">INITIAL ESTIMATE</span><strong>{formatIDR(estimate.min)} <span>—</span> {formatIDR(estimate.max)}</strong><div className="estimate-bottom"><span><Icon name="clock" size={14} /> {estimate.duration}</span><span>Indicative range</span></div></div>
              <a href={`#contact`} className="button button-primary estimate-cta" onClick={() => { setContactService(estimate.service); window.setTimeout(() => document.getElementById("contact-service")?.scrollIntoView({ behavior: "smooth", block: "center" }), 80); }}>Discuss this estimate <Icon name="arrow-up-right" size={16} /></a>
              <p className="estimate-disclaimer">Planning guide only. Final scope, cost, and timing depend on project requirements.</p>
            </div>
          </div>
        </section>

        <section className="section-wrap section-padding contact-section" id="contact">
          <div className="section-heading-row"><p className="section-kicker"><span>08</span> / YOUR MOVE</p><p className="section-side-note">The next good thing starts here.</p></div>
          <div className="contact-layout">
            <div className="contact-copy"><p className="contact-eyebrow"><span className="status-dot" /> HAVE A GOOD ONE IN MIND?</p><h2>Let&apos;s make<br /><span>something matter.</span></h2><p>Tell us what you&apos;re working on, where you&apos;re headed, or what isn&apos;t clicking yet. We&apos;ll take it from there.</p><div className="contact-details"><div><span>GOOD FIT FOR</span><strong>Ambitious teams, thoughtful founders,<br />and businesses ready to evolve.</strong></div><div><span>USUAL RESPONSE</span><strong>Within 1–2 working days</strong></div></div><div className="contact-signoff"><span className="brand-mark small-mark"><span /><span /><span /></span><span>Thoughtfully, <strong>FORMA®</strong></span></div></div>
            <div className="contact-form-wrap">
              {formSubmitted ? (
                <div className="form-success" role="status"><div className="success-icon"><Icon name="check" size={24} /></div><p className="section-kicker">MESSAGE PREPARED</p><h3>Thanks for starting the conversation.</h3><p>WhatsApp should open with your project details pre-filled. Review the message and press Send in WhatsApp to contact the studio.</p><button type="button" className="text-link" onClick={() => setFormSubmitted(false)}>Send another enquiry <Icon name="arrow-right" size={15} /></button></div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-header"><span>PROJECT INQUIRY</span><span>F—08</span></div>
                  <div className="form-row"><div className="form-field"><label htmlFor="name">Your name <span>*</span></label><input id="name" name="name" autoComplete="name" placeholder="e.g. Alex Morgan" required /></div><div className="form-field"><label htmlFor="email">Email address <span>*</span></label><input id="email" name="email" type="email" autoComplete="email" placeholder="alex@company.com" required /></div></div>
                  <div className="form-field" id="contact-service"><label htmlFor="project-service">What do you need help with?</label><div className="select-wrap"><select id="project-service" name="service" value={contactService} onChange={(event) => setContactService(event.target.value)}><option>Brand strategy</option><option>Brand identity</option><option>Website / digital product</option><option>Content & campaign</option><option>Something else</option></select><Icon name="chevron-down" size={16} /></div></div>
                  <div className="form-field"><label htmlFor="budget">Estimated budget</label><div className="select-wrap"><select id="budget" name="budget" defaultValue="Not sure yet"><option>Not sure yet</option><option>Under Rp 10 million</option><option>Rp 10–25 million</option><option>Rp 25–50 million</option><option>Rp 50 million+</option></select><Icon name="chevron-down" size={16} /></div></div>
                  <div className="form-field"><label htmlFor="project-details">A little about your project <span>*</span></label><textarea id="project-details" name="details" placeholder="What are you trying to make happen?" rows={4} required /></div>
                  <button type="submit" className="button button-primary form-submit">Prepare my inquiry <Icon name="send" size={16} /></button>
                  <p className="form-privacy">By submitting, you agree that your details may be used to respond to your inquiry. Your details are placed into a WhatsApp message; nothing is sent until you press Send in WhatsApp.</p>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="section-wrap faq-section" aria-labelledby="faq-heading">
          <div className="faq-heading"><p className="section-kicker">A FEW QUICK ANSWERS</p><h2 id="faq-heading">Before we get into it.</h2></div>
          <div className="faq-list">
            {[
              { q: "Can you work with our existing team?", a: "Absolutely. We can lead a project end to end or plug into your existing marketing, product, or development team where the support is most useful." },
              { q: "Do you take on small or focused projects?", a: "Yes. We scope around the problem and the outcome—not an arbitrary project size. A focused engagement can be a great way to build momentum." },
              { q: "What happens after I send an inquiry?", a: "We review the context, ask any useful follow-up questions, and arrange an initial conversation if it looks like a good fit. From there, we align on scope, milestones, and investment." },
            ].map((item, index) => <div className={faqOpen === index ? "faq-item faq-open" : "faq-item"} key={item.q}><button type="button" className="faq-question" onClick={() => setFaqOpen((current) => current === index ? null : index)} aria-expanded={faqOpen === index}><span>{item.q}</span><span className="faq-icon"><Icon name={faqOpen === index ? "close" : "plus"} size={16} /></span></button>{faqOpen === index && <p className="faq-answer">{item.a}</p>}</div>)}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-main"><a href="#home" className="brand-lockup footer-brand"><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span><span className="brand-copy"><strong>FORMA<span>®</span></strong><small>Digital studio</small></span></a><p>Clarity for the brand.<br />Momentum for what comes next.</p><a href="#home" className="back-top">Back to top <span><Icon name="arrow-up-right" size={15} /></span></a></div>
        <div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} FORMA® STUDIO. BUILT WITH INTENTION.</span><div><a href="#about">About</a><a href="#services">Services</a><a href="#work">Selected work</a><a href="#contact">Contact</a></div><span>STRATEGY × DESIGN × DIGITAL</span></div>
      </footer>
    </div>
  );
}

import { Icon } from "@/components/ui/icon";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-main">
        <a href="#home" className="brand-lockup footer-brand">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="brand-copy">
            <strong>FORMA<span>®</span></strong>
            <small>Digital studio</small>
          </span>
        </a>
        <p>
          Clarity for the brand.
          <br />
          Momentum for what comes next.
        </p>
        <a href="#home" className="back-top">
          Back to top{" "}
          <span>
            <Icon name="arrow-up-right" size={15} />
          </span>
        </a>
      </div>
      <div className="section-wrap footer-bottom">
        <span>© {new Date().getFullYear()} FORMA® STUDIO. BUILT WITH INTENTION.</span>
        <div>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Selected work</a>
          <a href="#contact">Contact</a>
        </div>
        <span>STRATEGY × DESIGN × DIGITAL</span>
      </div>
    </footer>
  );
}

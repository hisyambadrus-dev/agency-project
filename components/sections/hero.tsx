import { Icon } from "@/components/ui/icon";

export function Hero() {
  return (
    <section className="hero-section section-wrap" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> Independent digital studio{" "}
            <span className="eyebrow-divider">/</span> Jakarta & everywhere
          </div>
          <h1>
            Helping brands grow with <span className="headline-accent">strategy</span> and{" "}
            <span className="headline-italic">design.</span>
          </h1>
          <p className="hero-description">
            We turn ambitious ideas into clear strategy, distinctive identities, and digital
            experiences built to move your business forward.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="button button-primary">
              Start a project <Icon name="arrow-up-right" size={17} />
            </a>
            <a href="#work" className="button button-quiet">
              Explore our work{" "}
              <span className="button-arrow">
                <Icon name="arrow-right" size={16} />
              </span>
            </a>
          </div>
          <div className="hero-footnote">
            <span className="footnote-line" /> Thoughtful by nature. Ambitious by design.
          </div>
        </div>

        <div className="hero-art-wrap" aria-label="Abstract 3D brand artwork">
          <div className="hero-art-grid" />
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-orb">
            <span className="orb-highlight" />
            <span className="orb-cut" />
          </div>
          <div className="hero-art-label label-top">
            <span className="label-sparkle">
              <Icon name="sparkle" size={14} />
            </span>
            <span>
              <strong>Clarity before creativity</strong>
              <small>Our starting point, always.</small>
            </span>
          </div>
          <div className="hero-art-label label-bottom">
            <span className="art-label-icon">
              <Icon name="layers" size={17} />
            </span>
            <span>
              <strong>Built as a system</strong>
              <small>Made to grow with you</small>
            </span>
            <span className="mini-arrow">
              <Icon name="arrow-up-right" size={14} />
            </span>
          </div>
          <div className="hero-index">
            F—01 <span /> FORM FOLLOWS INTENT
          </div>
          <span className="art-star star-one">
            <Icon name="asterisk" size={22} />
          </span>
          <span className="art-star star-two">
            <Icon name="asterisk" size={11} />
          </span>
        </div>
      </div>

      <div className="hero-bottom-row">
        <div className="hero-bottom-label">
          <span className="eyebrow-number">01 /</span> A studio built around meaningful progress
        </div>
        <div className="capability-list">
          <span>Brand strategy</span>
          <i /> <span>Identity</span>
          <i /> <span>Digital</span>
          <i /> <span>Creative</span>
        </div>
      </div>

      <div className="insight-card">
        <div className="insight-index">
          <Icon name="sparkle" size={17} />
          <span>FIELD NOTE 001</span>
        </div>
        <div className="insight-copy">
          <h2>
            A strong brand isn&apos;t just seen.
            <br />
            <span>It&apos;s understood, remembered, and chosen.</span>
          </h2>
          <p>
            Great design starts with a useful insight. We connect what makes your business
            different with what your audience actually needs.
          </p>
        </div>
        <a href="#about" className="insight-link" aria-label="Learn about our approach">
          <Icon name="arrow-up-right" size={18} />
        </a>
      </div>
    </section>
  );
}

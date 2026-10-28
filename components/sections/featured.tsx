import { Icon } from "@/components/ui/icon";

export function Featured() {
  return (
    <section className="featured-section" id="our-work">
      <div className="featured-inner section-wrap">
        <div className="section-heading-row">
          <p className="section-kicker">
            <span>05</span> / OUR WORK
          </p>
          <p className="section-side-note">A closer look at the thinking.</p>
        </div>

        <div className="featured-layout">
          <div className="featured-copy">
            <div className="featured-label">
              <span className="status-dot" /> FEATURED CONCEPT STUDY
            </div>
            <h2>
              From scattered touchpoints to <span>one clear story.</span>
            </h2>
            <p>
              A brand should feel like itself wherever people meet it. For this concept, we brought
              strategy, identity, and digital design into a single, coherent system—one that could
              flex without losing its character.
            </p>
            <div className="featured-meta">
              <div>
                <span>DISCIPLINES</span>
                <strong>Strategy / Identity / Digital</strong>
              </div>
              <div>
                <span>APPROACH</span>
                <strong>One system, many moments</strong>
              </div>
            </div>
            <a href="#contact" className="button button-light">
              Build your next chapter <Icon name="arrow-up-right" size={16} />
            </a>
            <p className="concept-disclaimer">
              Illustrative concept study created for this agency starter—not a commissioned client
              case.
            </p>
          </div>

          <div className="featured-art" aria-label="Concept design system visualization">
            <div className="feature-window window-back">
              <span className="feature-window-dot" />
              <span className="feature-window-dot" />
              <span className="feature-window-dot" />
              <div className="feature-window-line line-one" />
              <div className="feature-window-line line-two" />
              <div className="feature-window-card" />
            </div>
            <div className="feature-poster">
              <div className="poster-top">
                <span>F/FORM</span>
                <span>ISSUE Nº 001</span>
              </div>
              <div className="poster-graphic">
                <span className="poster-ring ring-one" />
                <span className="poster-ring ring-two" />
                <span className="poster-sphere" />
              </div>
              <div className="poster-title">
                MAKE
                <br />
                <em>meaning.</em>
              </div>
              <div className="poster-bottom">
                <span>STRATEGY IN EVERY DETAIL</span>
                <span>F—26</span>
              </div>
            </div>
            <div className="feature-sticker">
              <Icon name="asterisk" size={22} />
              <span>
                Designed
                <br />
                to connect
              </span>
            </div>
            <div className="feature-caption">
              SYSTEM STUDY / 001 <span>↗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

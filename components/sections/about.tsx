import { Icon } from "@/components/ui/icon";

export function About() {
  return (
    <section className="section-wrap section-padding about-section" id="about">
      <div className="section-heading-row">
        <p className="section-kicker">
          <span>02</span> / ABOUT FORMA
        </p>
        <p className="section-side-note">Clear thinking. Distinctive making.</p>
      </div>

      <div className="about-grid">
        <h2 className="section-title">
          Good work starts with <span>better questions.</span>
        </h2>
        <div className="about-copy">
          <p className="lead-copy">
            We&apos;re a strategy-led creative studio for people building what comes next.
          </p>
          <p>
            Before we design a thing, we get curious about the business, the people, and the space you
            want to own. Then we bring strategy and execution together—so every choice has a reason,
            and every detail has a job.
          </p>
          <a href="#process" className="text-link">
            How we work <Icon name="arrow-up-right" size={16} />
          </a>
        </div>
      </div>

      <div className="about-principles">
        <div className="principle-visual">
          <div className="principle-ring ring-a" />
          <div className="principle-ring ring-b" />
          <div className="principle-core">
            <span>FORM</span>
            <Icon name="asterisk" size={20} />
          </div>
          <div className="principle-note">
            <span className="status-dot" /> Strategy-led, always
          </div>
        </div>
        <div className="principles-list">
          <div className="principle-item">
            <span className="principle-number">01</span>
            <div>
              <h3>Think in systems</h3>
              <p>We look beyond the single deliverable and build pieces that work together.</p>
            </div>
            <Icon name="arrow-up-right" size={17} />
          </div>
          <div className="principle-item">
            <span className="principle-number">02</span>
            <div>
              <h3>Make it meaningful</h3>
              <p>Every design decision should clarify, connect, or move something forward.</p>
            </div>
            <Icon name="arrow-up-right" size={17} />
          </div>
          <div className="principle-item">
            <span className="principle-number">03</span>
            <div>
              <h3>Leave room to grow</h3>
              <p>We create flexible foundations your team can build on with confidence.</p>
            </div>
            <Icon name="arrow-up-right" size={17} />
          </div>
        </div>
      </div>
    </section>
  );
}

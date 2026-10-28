import { Icon } from "@/components/ui/icon";
import { processSteps } from "@/data/site-data";

export function Process() {
  return (
    <section className="section-wrap section-padding process-section" id="process">
      <div className="section-heading-row">
        <p className="section-kicker">
          <span>06</span> / OUR PROCESS
        </p>
        <p className="section-side-note">A clear path. No unnecessary theatre.</p>
      </div>

      <div className="process-intro">
        <h2 className="section-title">
          Less guesswork.
          <br />
          <span>More forward motion.</span>
        </h2>
        <p>
          Good collaboration shouldn&apos;t feel complicated. We keep the process transparent,
          focused, and flexible enough to meet the project where it is.
        </p>
      </div>

      <div className="process-grid">
        {processSteps.map((step) => (
          <article key={step.number} className="process-step">
            <div className="process-step-top">
              <span>{step.number}</span>
              <span className="process-plus">
                <Icon name="plus" size={15} />
              </span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <div className="process-detail">{step.detail}</div>
          </article>
        ))}
      </div>

      <div className="process-bottom-line">
        <span>ONE TEAM, FROM FIRST QUESTION TO FINAL HANDOFF.</span>
        <span className="process-line" />
        <span>
          SCROLL TO BEGIN <Icon name="arrow-down" size={14} />
        </span>
      </div>
    </section>
  );
}

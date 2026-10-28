import { Icon } from "@/components/ui/icon";
import { services, whatsappUrl } from "@/data/site-data";

export function Services() {
  return (
    <section className="section-wrap section-padding services-section" id="services">
      <div className="section-heading-row">
        <p className="section-kicker">
          <span>03</span> / WHAT WE DO
        </p>
        <p className="section-side-note">From first thought to final pixel.</p>
      </div>

      <div className="services-intro">
        <h2 className="section-title">
          The right work.
          <br />
          <span>For the right reasons.</span>
        </h2>
        <p>
          One connected team, from strategic clarity to thoughtful execution. Bring us a
          challenge, a spark, or a business that&apos;s ready for its next chapter.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-card-top">
              <span className="service-number">{service.number} / 04</span>
              <span className="service-icon">
                <Icon name={service.icon} size={22} />
              </span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <div className="service-tags">
              {service.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="service-float-detail">
              <strong>What this includes</strong>
              <p>{service.detail}</p>
              <a
                href={whatsappUrl(
                  `Halo FORMA, saya tertarik dengan layanan ${service.title}. Bisa dijelaskan lebih lanjut?`
                )}
                target="_blank"
                rel="noreferrer"
              >
                Discuss this service <Icon name="arrow-up-right" size={13} />
              </a>
            </div>
            <a
              href={whatsappUrl(`Halo FORMA, saya ingin konsultasi layanan ${service.title}.`)}
              target="_blank"
              rel="noreferrer"
              className="service-arrow"
              aria-label={`Discuss ${service.title} on WhatsApp`}
            >
              <Icon name="arrow-up-right" size={18} />
            </a>
          </article>
        ))}
      </div>

      <div className="services-footnote">
        <Icon name="asterisk" size={15} />
        <span>
          Need something more specific? We shape the right team around the problem—not the other
          way around.
        </span>
        <a href="#contact">
          Tell us what you&apos;re building <Icon name="arrow-right" size={15} />
        </a>
      </div>
    </section>
  );
}

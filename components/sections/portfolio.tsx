"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/ui/icon";
import { portfolioItems, whatsappUrl } from "@/data/site-data";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All work");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All work") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="section-wrap section-padding work-section" id="work">
      <div className="section-heading-row">
        <p className="section-kicker">
          <span>04</span> / PORTFOLIO SHOWCASE
        </p>
        <p className="section-side-note">A collection of ways forward.</p>
      </div>

      <div className="work-heading">
        <div>
          <h2 className="section-title">
            Ideas, made <span>tangible.</span>
          </h2>
          <p>
            Explore a few concept studies showing how strategy can become an identity, a digital
            experience, or a campaign with a point of view.
          </p>
        </div>
        <div className="filter-tabs" role="group" aria-label="Filter portfolio by category">
          {["All work", "Branding", "Digital", "Campaigns"].map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? "filter-tab active" : "filter-tab"}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="portfolio-grid" aria-live="polite">
        {filteredProjects.map((project) => (
          <article className="portfolio-card" key={project.id}>
            <div className={`portfolio-visual visual-${project.visual}`}>
              <div className="visual-topline">
                <span>FORMA / STUDY</span>
                <span>{project.type.split(" — ")[0]}</span>
              </div>
              {project.visual === "nova" && (
                <div className="nova-composition">
                  <span className="nova-halo" />
                  <span className="nova-disc" />
                  <strong>
                    NOVA<span>®</span>
                  </strong>
                  <small>NEW ENERGY, CLEAR DIRECTION.</small>
                  <div className="nova-side-label">IDENTITY / 2026</div>
                </div>
              )}
              {project.visual === "kinform" && (
                <div className="kinform-window">
                  <div className="window-bar">
                    <span />
                    <span />
                    <span />
                    <small>kinform.app</small>
                  </div>
                  <div className="kinform-content">
                    <div className="kinform-sidebar">
                      <b>K.</b>
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="kinform-main">
                      <span className="mock-eyebrow">YOUR SPACE, IN FOCUS</span>
                      <strong>
                        Make room
                        <br />
                        for good work.
                      </strong>
                      <div className="mock-progress">
                        <span />
                      </div>
                      <div className="mock-ui-row">
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {project.visual === "morrow" && (
                <div className="morrow-composition">
                  <span className="morrow-sun" />
                  <div className="morrow-orbit" />
                  <strong>
                    MORE
                    <br />
                    THAN
                    <br />
                    <em>NOW.</em>
                  </strong>
                  <span className="morrow-note">CULTURE IS ALWAYS IN MOTION — 26</span>
                  <span className="morrow-stamp">M.</span>
                </div>
              )}
              {project.visual === "kindred" && (
                <div className="kindred-composition">
                  <span className="kindred-blob blob-a" />
                  <span className="kindred-blob blob-b" />
                  <span className="kindred-blob blob-c" />
                  <strong>
                    kindred<span>™</span>
                  </strong>
                  <small>little things, closer.</small>
                  <div className="kindred-label">OBJECTS FOR EVERYDAY RITUALS</div>
                </div>
              )}
              <div className="project-float-detail">
                <span>{project.category} / PROJECT NOTES</span>
                <strong>{project.title}</strong>
                <p>{project.challenge}</p>
                <div>
                  <b>Approach & outcome</b>
                  <p>{project.outcome}</p>
                </div>
                <small>{project.role}</small>
                <a
                  href={whatsappUrl(
                    `Halo FORMA, saya ingin bertanya tentang project concept ${project.title} dan layanan serupa.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Discuss a similar project <Icon name="arrow-up-right" size={13} />
                </a>
              </div>
              <div className="portfolio-open">
                <Icon name="arrow-up-right" size={19} />
              </div>
            </div>
            <div className="portfolio-meta">
              <div>
                <span className="portfolio-category">
                  {project.category} <span>·</span> Concept study
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <span className="portfolio-index">/{project.type.slice(0, 2)}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="portfolio-bottom">
        <span>01—04 / CONCEPT EXPLORATIONS</span>
        <span>Built with intention, not decoration.</span>
      </div>
    </section>
  );
}

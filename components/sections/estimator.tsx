"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/ui/icon";
import {
  estimateOptions,
  formatIDR,
  Scope,
  scopeOptions,
  ServiceKey,
} from "@/data/site-data";

interface EstimatorProps {
  onDiscussEstimate?: (serviceLabel: string) => void;
}

export function Estimator({ onDiscussEstimate }: EstimatorProps) {
  const [serviceKey, setServiceKey] = useState<ServiceKey>("website");
  const [scope, setScope] = useState<Scope>("growth");

  const estimate = useMemo(() => {
    const selectedService = estimateOptions[serviceKey];
    const selectedScope = scopeOptions[scope];
    const min =
      Math.round((selectedService.base * selectedScope.multiplier) / 500000) * 500000;
    const max =
      Math.round((selectedService.ceiling * selectedScope.multiplier) / 500000) * 500000;
    return {
      min,
      max,
      duration: selectedScope.duration,
      service: selectedService.label,
      scope: selectedScope.label,
    };
  }, [scope, serviceKey]);

  function handleDiscussClick() {
    if (onDiscussEstimate) {
      onDiscussEstimate(estimate.service);
    }
    window.setTimeout(() => {
      document
        .getElementById("contact-service")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 80);
  }

  return (
    <section className="section-wrap section-padding estimator-section" id="estimate">
      <div className="estimator-card">
        <div className="estimator-copy">
          <p className="section-kicker">
            <span>07</span> / START WITH A SENSE OF SCALE
          </p>
          <h2>
            Good projects start with <span>clear expectations.</span>
          </h2>
          <p>
            Use our quick estimator to get an initial sense of budget and timeline. We&apos;ll
            refine the details together once we understand your goals.
          </p>
          <div className="estimator-note">
            <Icon name="check" size={15} />
            <span>No obligation. Just a useful first conversation.</span>
          </div>
        </div>

        <div className="estimator-tool">
          <div className="estimator-field">
            <label htmlFor="service-select">What are you looking to build?</label>
            <div className="select-wrap">
              <select
                id="service-select"
                value={serviceKey}
                onChange={(event) => setServiceKey(event.target.value as ServiceKey)}
              >
                {Object.entries(estimateOptions).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value.label}
                  </option>
                ))}
              </select>
              <Icon name="chevron-down" size={16} />
            </div>
          </div>

          <div className="estimator-field">
            <label>How much ground do we need to cover?</label>
            <div className="scope-options">
              {(Object.entries(scopeOptions) as [Scope, (typeof scopeOptions)[Scope]][]).map(
                ([key, value]) => (
                  <button
                    type="button"
                    key={key}
                    className={scope === key ? "scope-option selected" : "scope-option"}
                    onClick={() => setScope(key)}
                    aria-pressed={scope === key}
                  >
                    <span>{value.label}</span>
                    {scope === key && <Icon name="check" size={14} />}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="estimate-output">
            <span className="estimate-caption">INITIAL ESTIMATE</span>
            <strong>
              {formatIDR(estimate.min)} <span>—</span> {formatIDR(estimate.max)}
            </strong>
            <div className="estimate-bottom">
              <span>
                <Icon name="clock" size={14} /> {estimate.duration}
              </span>
              <span>Indicative range</span>
            </div>
          </div>

          <a
            href="#contact"
            className="button button-primary estimate-cta"
            onClick={handleDiscussClick}
          >
            Discuss this estimate <Icon name="arrow-up-right" size={16} />
          </a>
          <p className="estimate-disclaimer">
            Planning guide only. Final scope, cost, and timing depend on project requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

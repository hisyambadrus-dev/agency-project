"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/icon";
import { faqs } from "@/data/site-data";

export function FAQ() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <section className="section-wrap faq-section" aria-labelledby="faq-heading">
      <div className="faq-heading">
        <p className="section-kicker">A FEW QUICK ANSWERS</p>
        <h2 id="faq-heading">Before we get into it.</h2>
      </div>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div
            className={faqOpen === index ? "faq-item faq-open" : "faq-item"}
            key={item.q}
          >
            <button
              type="button"
              className="faq-question"
              onClick={() => setFaqOpen((current) => (current === index ? null : index))}
              aria-expanded={faqOpen === index}
            >
              <span>{item.q}</span>
              <span className="faq-icon">
                <Icon name={faqOpen === index ? "close" : "plus"} size={16} />
              </span>
            </button>
            {faqOpen === index && <p className="faq-answer">{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

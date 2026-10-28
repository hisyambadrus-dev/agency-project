"use client";

import { FormEvent, useState } from "react";
import { Icon } from "@/components/ui/icon";
import { whatsappUrl } from "@/data/site-data";

interface ContactProps {
  contactService: string;
  setContactService: React.Dispatch<React.SetStateAction<string>>;
}

export function Contact({ contactService, setContactService }: ContactProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = [
      "Halo FORMA Digital Studio, saya ingin konsultasi proyek.",
      "",
      `Nama: ${String(data.get("name") || "-")}`,
      `Email: ${String(data.get("email") || "-")}`,
      `Layanan: ${String(data.get("service") || "-")}`,
      `Budget: ${String(data.get("budget") || "Belum ditentukan")}`,
      `Detail proyek: ${String(data.get("details") || "-")}`,
    ].join("\n");
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setFormSubmitted(true);
  }

  return (
    <section className="section-wrap section-padding contact-section" id="contact">
      <div className="section-heading-row">
        <p className="section-kicker">
          <span>08</span> / YOUR MOVE
        </p>
        <p className="section-side-note">The next good thing starts here.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-copy">
          <p className="contact-eyebrow">
            <span className="status-dot" /> HAVE A GOOD ONE IN MIND?
          </p>
          <h2>
            Let&apos;s make
            <br />
            <span>something matter.</span>
          </h2>
          <p>
            Tell us what you&apos;re working on, where you&apos;re headed, or what isn&apos;t
            clicking yet. We&apos;ll take it from there.
          </p>
          <div className="contact-details">
            <div>
              <span>GOOD FIT FOR</span>
              <strong>
                Ambitious teams, thoughtful founders,
                <br />
                and businesses ready to evolve.
              </strong>
            </div>
            <div>
              <span>USUAL RESPONSE</span>
              <strong>Within 1–2 working days</strong>
            </div>
          </div>
          <div className="contact-signoff">
            <span className="brand-mark small-mark">
              <span />
              <span />
              <span />
            </span>
            <span>
              Thoughtfully, <strong>FORMA®</strong>
            </span>
          </div>
        </div>

        <div className="contact-form-wrap">
          {formSubmitted ? (
            <div className="form-success" role="status">
              <div className="success-icon">
                <Icon name="check" size={24} />
              </div>
              <p className="section-kicker">MESSAGE PREPARED</p>
              <h3>Thanks for starting the conversation.</h3>
              <p>
                WhatsApp should open with your project details pre-filled. Review the message and
                press Send in WhatsApp to contact the studio.
              </p>
              <button
                type="button"
                className="text-link"
                onClick={() => setFormSubmitted(false)}
              >
                Send another enquiry <Icon name="arrow-right" size={15} />
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <span>PROJECT INQUIRY</span>
                <span>F—08</span>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">
                    Your name <span>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="e.g. Alex Morgan"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">
                    Email address <span>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="alex@company.com"
                    required
                  />
                </div>
              </div>
              <div className="form-field" id="contact-service">
                <label htmlFor="project-service">What do you need help with?</label>
                <div className="select-wrap">
                  <select
                    id="project-service"
                    name="service"
                    value={contactService}
                    onChange={(event) => setContactService(event.target.value)}
                  >
                    <option>Brand strategy</option>
                    <option>Brand identity</option>
                    <option>Website / digital product</option>
                    <option>Content & campaign</option>
                    <option>Something else</option>
                  </select>
                  <Icon name="chevron-down" size={16} />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="budget">Estimated budget</label>
                <div className="select-wrap">
                  <select id="budget" name="budget" defaultValue="Not sure yet">
                    <option>Not sure yet</option>
                    <option>Under Rp 10 million</option>
                    <option>Rp 10–25 million</option>
                    <option>Rp 25–50 million</option>
                    <option>Rp 50 million+</option>
                  </select>
                  <Icon name="chevron-down" size={16} />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="project-details">
                  A little about your project <span>*</span>
                </label>
                <textarea
                  id="project-details"
                  name="details"
                  placeholder="What are you trying to make happen?"
                  rows={4}
                  required
                />
              </div>
              <button type="submit" className="button button-primary form-submit">
                Prepare my inquiry <Icon name="send" size={16} />
              </button>
              <p className="form-privacy">
                By submitting, you agree that your details may be used to respond to your inquiry.
                Your details are placed into a WhatsApp message; nothing is sent until you press
                Send in WhatsApp.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Theme } from "@/data/site-data";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Featured } from "@/components/sections/featured";
import { Process } from "@/components/sections/process";
import { Estimator } from "@/components/sections/estimator";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function AgencySite() {
  const [theme, setTheme] = useState<Theme>("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactService, setContactService] = useState("Website / digital product");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("forma-theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("forma-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }

  function handleDiscussEstimate(serviceLabel: string) {
    setContactService(serviceLabel);
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      {/* Navigation Bar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main id="main-content">
        {/* 01. Hero Section */}
        <Hero />

        {/* 02. About Section */}
        <About />

        {/* 03. Services Section */}
        <Services />

        {/* 04. Portfolio Showcase */}
        <Portfolio />

        {/* 05. Featured Work */}
        <Featured />

        {/* 06. Process & Methodology */}
        <Process />

        {/* 07. Project Cost & Timeline Estimator */}
        <Estimator onDiscussEstimate={handleDiscussEstimate} />

        {/* 08. Contact & WhatsApp Inquiry */}
        <Contact
          contactService={contactService}
          setContactService={setContactService}
        />

        {/* FAQ Accordion */}
        <FAQ />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

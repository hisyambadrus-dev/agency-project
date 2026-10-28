"use client";

import { Icon } from "@/components/ui/icon";
import { navigation, whatsappUrl, Theme } from "@/data/site-data";

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Navbar({ theme, toggleTheme, menuOpen, setMenuOpen }: NavbarProps) {
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="nav-glass mx-auto flex w-full items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="brand-lockup" aria-label="FORMA Studio home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="brand-copy">
            <strong>FORMA<span>®</span></strong>
            <small>Digital studio</small>
          </span>
        </a>

        <div className="desktop-nav" aria-label="Site sections">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Icon name="moon" size={17} /> : <Icon name="sun" size={17} />}
          </button>
          <a
            href={whatsappUrl("Halo FORMA, saya ingin konsultasi tentang layanan kreatif.")}
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            Let&apos;s talk <Icon name="arrow-up-right" size={15} />
          </a>
          <button
            className="mobile-menu-toggle"
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={20} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-nav-panel">
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              <span>0{index + 1}</span>
              {item.label}
              <Icon name="arrow-up-right" size={16} />
            </a>
          ))}
          <p>Good ideas deserve a thoughtful start.</p>
        </div>
      )}
    </header>
  );
}

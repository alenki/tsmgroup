import { useState } from 'react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import type { SectionId } from '../../hooks/useScrollSpy';
import styles from './Navbar.module.css';

const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'chairman', label: "Chairman's Message" },
  { id: 'companies', label: 'Companies' },
  { id: 'clients', label: 'Clients' },
  { id: 'contact', label: 'Contact Us' },
];

export function Navbar() {
  const { activeSection, scrolled } = useScrollSpy();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <button
          className={styles.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <img src="/logo.png" alt="TSM Group" className={styles.logoImg} />
        </button>

        <div className={styles.desktopLinks}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`${styles.link} ${activeSection === item.id ? styles.active : ''}`}
              onClick={() => handleClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          <span className={styles.langDivider}>|</span>
          <button className={`${styles.link} ${styles.langLink}`}>EN</button>
          <button className={`${styles.link} ${styles.langLink}`}>AR</button>
        </div>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuInner}>
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              className={styles.mobileLink}
              style={{ transitionDelay: mobileOpen ? `${i * 0.06}s` : '0s' }}
              onClick={() => handleClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          <div className={styles.mobileLang}>
            <button className={styles.mobileLink}>English</button>
            <button className={styles.mobileLink}>عربي</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

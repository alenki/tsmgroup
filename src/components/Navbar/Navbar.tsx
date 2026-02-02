import { useState, useEffect, useRef, useCallback } from 'react';
import { useLenis } from '../../context/LenisContext';
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
  const lenis = useLenis();
  const { activeSection, scrolled } = useScrollSpy();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileOpen && !closing) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
      document.documentElement.style.background = 'var(--color-white)';
    } else if (!mobileOpen && !closing) {
      lenis?.start();
      document.body.style.overflow = '';
      document.documentElement.style.background = '';
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = '';
      document.documentElement.style.background = '';
    };
  }, [mobileOpen, closing, lenis]);

  const finishClose = useCallback(() => {
    setMobileOpen(false);
    setClosing(false);
    lenis?.start();
    document.body.style.overflow = '';
  }, [lenis]);

  useEffect(() => {
    if (!closing) return;
    const el = menuRef.current;
    if (!el) return;

    const onEnd = (e: TransitionEvent) => {
      if (e.target === el && e.propertyName === 'clip-path') {
        finishClose();
      }
    };
    el.addEventListener('transitionend', onEnd);
    // Fallback in case transitionend doesn't fire (unreliable for clip-path on some browsers)
    const timeout = setTimeout(finishClose, 700);
    return () => {
      el.removeEventListener('transitionend', onEnd);
      clearTimeout(timeout);
    };
  }, [closing, finishClose]);

  const closeMobile = () => {
    if (!mobileOpen || closing) return;
    setClosing(true);
  };

  const toggledByTouch = useRef(false);

  const toggleMobile = useCallback(() => {
    if (mobileOpen) {
      closeMobile();
    } else {
      setMobileOpen(true);
    }
  }, [mobileOpen, closing]);

  const handleClick = (id: string) => {
    closeMobile();
    // Re-enable scrolling immediately so the scroll command isn't ignored
    lenis?.start();
    document.body.style.overflow = '';
    const el = document.getElementById(id);
    if (el) {
      lenis ? lenis.scrollTo(el) : el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${mobileOpen ? styles.mobileOpen : ''} ${closing ? styles.mobileClosing : ''}`}>
      <div className={styles.container}>
        <button
          className={styles.logo}
          onClick={() => lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' })}
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
          className={`${styles.hamburger} ${mobileOpen && !closing ? styles.hamburgerOpen : ''}`}
          onTouchEnd={(e) => {
            e.preventDefault();
            toggledByTouch.current = true;
            toggleMobile();
          }}
          onClick={() => {
            if (toggledByTouch.current) {
              toggledByTouch.current = false;
              return;
            }
            toggleMobile();
          }}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div ref={menuRef} className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuInner}>
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              className={styles.mobileLink}
              style={{ transitionDelay: mobileOpen && !closing ? `${i * 0.06}s` : closing ? `${(NAV_ITEMS.length - 1 - i) * 0.04}s` : '0s' }}
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

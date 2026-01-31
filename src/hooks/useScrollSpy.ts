import { useState, useEffect } from 'react';

const SECTIONS = ['about', 'chairman', 'companies', 'clients', 'contact'] as const;
export type SectionId = (typeof SECTIONS)[number];

export function useScrollSpy(): { activeSection: SectionId | null; scrolled: boolean } {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const offset = window.innerHeight * 0.35;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            setActiveSection(SECTIONS[i]);
            return;
          }
        }
      }
      setActiveSection(null);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { activeSection, scrolled };
}

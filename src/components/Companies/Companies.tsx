import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { RevealOnScroll } from '../shared/RevealOnScroll';
import { SectionHeading } from '../shared/SectionHeading';
import { companies } from '../../data/companies';
import type { Company } from '../../data/companies';
import styles from './Companies.module.css';

const COMPANY_ICONS: Record<string, React.ReactNode> = {
  maestro: (
    <svg viewBox="0 0 60 32" fill="none">
      <text x="0" y="24" fontFamily="Outfit, sans-serif" fontWeight="700" fontSize="18" fill="currentColor" letterSpacing="1">MAESTRO</text>
    </svg>
  ),
  blantex: (
    <svg viewBox="0 0 80 32" fill="none">
      <text x="0" y="24" fontFamily="Outfit, sans-serif" fontWeight="700" fontSize="15" fill="currentColor" letterSpacing="2">BLANTEX</text>
    </svg>
  ),
  pronto: (
    <svg viewBox="0 0 60 32" fill="none">
      <text x="0" y="24" fontFamily="Outfit, sans-serif" fontWeight="700" fontSize="18" fill="currentColor" letterSpacing="1">PRONTO</text>
    </svg>
  ),
  security: (
    <svg viewBox="0 0 80 32" fill="none">
      <text x="0" y="24" fontFamily="Outfit, sans-serif" fontWeight="700" fontSize="13" fill="currentColor" letterSpacing="2">TSM SECURITY</text>
    </svg>
  ),
};

export function Companies() {
  const [activeCompany, setActiveCompany] = useState<Company | null>(null);

  return (
    <section id="companies" className={styles.section}>
      <div className={styles.container}>
        <RevealOnScroll>
          <SectionHeading topText="Our" bottomText="Companies" light centered />
        </RevealOnScroll>

        <div className={styles.grid}>
          {companies.map((company, i) => (
            <RevealOnScroll key={company.slug} delay={0.1 + i * 0.1}>
              <button
                className={styles.card}
                onClick={() => setActiveCompany(company)}
                style={{ '--card-accent': company.color } as React.CSSProperties}
              >
                <div className={styles.cardVisual}>
                  {/* Abstract pattern background unique to each company */}
                  <svg className={styles.cardBg} viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <linearGradient id={`grad-${company.slug}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={company.color} stopOpacity="0.15" />
                        <stop offset="100%" stopColor={company.color} stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                    <rect width="300" height="400" fill="#2D2D2D" />
                    <rect width="300" height="400" fill={`url(#grad-${company.slug})`} />
                    {/* Geometric decoration */}
                    <circle cx="150" cy="160" r="60" fill="none" stroke={company.color} strokeWidth="0.5" opacity="0.3" />
                    <circle cx="150" cy="160" r="90" fill="none" stroke={company.color} strokeWidth="0.3" opacity="0.15" />
                    <line x1="0" y1="200" x2="300" y2="200" stroke={company.color} strokeWidth="0.3" opacity="0.2" />
                  </svg>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardLogo}>{COMPANY_ICONS[company.slug]}</div>
                  <span className={styles.cardTagline}>{company.tagline}</span>
                  <span className={styles.cardCta}>Learn More</span>
                </div>

                <div className={styles.cardBorder} />
              </button>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeCompany && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveCompany(null)}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.modalClose}
                onClick={() => setActiveCompany(null)}
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div
                className={styles.modalAccent}
                style={{ background: activeCompany.color }}
              />

              <h3 className={styles.modalName}>{activeCompany.name}</h3>
              <span className={styles.modalTagline}>{activeCompany.tagline}</span>
              <p className={styles.modalDesc}>{activeCompany.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

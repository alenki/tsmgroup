import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { RevealOnScroll } from '../shared/RevealOnScroll';
import { SectionHeading } from '../shared/SectionHeading';
import { companies } from '../../data/companies';
import type { Company } from '../../data/companies';
import styles from './Companies.module.css';

export function Companies() {
  const [activeCompany, setActiveCompany] = useState<Company | null>(null);

  useEffect(() => {
    if (activeCompany) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [activeCompany]);

  return (
    <section id="companies" className={styles.section}>
      {/* Background decorative elements */}
      <div className={styles.bgPattern} aria-hidden="true" />

      <div className={styles.container}>
        <RevealOnScroll>
          <div className={styles.header}>
            <SectionHeading topText="Our" bottomText="Companies" />
            <p className={styles.headerDesc}>
              A diversified portfolio of companies serving industries across
              the Kingdom of Saudi Arabia.
            </p>
          </div>
        </RevealOnScroll>
      </div>

      {/* Cards grid */}
      <div className={styles.container}>
        <div className={styles.cardGrid}>
          {companies.map((company, i) => (
            <RevealOnScroll key={company.slug} delay={0.1 + i * 0.12}>
              <button
                className={styles.card}
                onClick={() => setActiveCompany(company)}
                style={{ '--card-accent': company.color } as React.CSSProperties}
              >
                {/* Large number */}
                <span className={styles.cardNum}>0{i + 1}</span>

                {/* Background gradient */}
                <div className={styles.cardBg}>
                  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className={styles.cardBgSvg}>
                    <defs>
                      <linearGradient id={`cg-${company.slug}`} x1="0" y1="0" x2="0.5" y2="1">
                        <stop offset="0%" stopColor={company.color} stopOpacity="0.12" />
                        <stop offset="100%" stopColor={company.color} stopOpacity="0.35" />
                      </linearGradient>
                      <radialGradient id={`cr-${company.slug}`} cx="70%" cy="30%">
                        <stop offset="0%" stopColor={company.color} stopOpacity="0.08" />
                        <stop offset="100%" stopColor="transparent" />
                      </radialGradient>
                    </defs>
                    <rect width="400" height="500" fill="#222" />
                    <rect width="400" height="500" fill={`url(#cg-${company.slug})`} />
                    <rect width="400" height="500" fill={`url(#cr-${company.slug})`} />
                    {/* Geometric accent */}
                    <circle cx="300" cy="120" r="80" fill="none" stroke={company.color} strokeWidth="0.4" opacity="0.2" />
                    <circle cx="300" cy="120" r="120" fill="none" stroke={company.color} strokeWidth="0.3" opacity="0.1" />
                    <line x1="0" y1="380" x2="400" y2="380" stroke={company.color} strokeWidth="0.3" opacity="0.15" />
                  </svg>
                </div>

                {/* Company logo */}
                <div className={styles.cardLogo}>
                  <img src={company.logo} alt={company.name} className={styles.cardLogoImg} />
                </div>

                {/* Content */}
                <div className={styles.cardContent}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardDash} />
                    <span className={styles.cardTagline}>{company.tagline}</span>
                  </div>
                  <h3 className={styles.cardName}>{company.name}</h3>
                  <span className={styles.cardCta}>
                    <span>Explore</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>

                {/* Bottom accent bar */}
                <div className={styles.cardBar} />
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
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <div
                  className={styles.modalAccent}
                  style={{ background: activeCompany.color }}
                />
                <span className={styles.modalTagline}>{activeCompany.tagline}</span>
                <h3 className={styles.modalName}>{activeCompany.name}</h3>
              </div>

              <p className={styles.modalDesc}>{activeCompany.description}</p>

              <button
                className={styles.modalClose}
                onClick={() => setActiveCompany(null)}
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

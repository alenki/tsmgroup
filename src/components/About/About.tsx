import { RevealOnScroll } from '../shared/RevealOnScroll';
import { SectionHeading } from '../shared/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import styles from './About.module.css';

const ICONS: Record<string, React.ReactNode> = {
  textile: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="10" />
      <path d="M24 14V4M24 44v-10M14 24H4M44 24H34" />
      <path d="M17 17L9 9M31 31l8 8M17 31L9 39M31 17l8-8" />
      <path d="M24 18c3 0 6 2.7 6 6s-3 6-6 6" />
    </svg>
  ),
  event: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 4v8M12 8l4 7M36 8l-4 7" />
      <path d="M8 20h32v4H8zM12 24v16M36 24v16M8 40h32" />
      <circle cx="24" cy="32" r="4" />
      <path d="M20 44h8" />
    </svg>
  ),
  medical: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="14" width="20" height="20" rx="3" />
      <path d="M24 18v12M18 24h12" />
      <path d="M20 8h8v6h-8zM20 34h8v6h-8zM8 20v8h6v-8zM34 20v8h6v-8z" />
    </svg>
  ),
  furniture: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 32h32" />
      <path d="M12 32V18a4 4 0 014-4h16a4 4 0 014 4v14" />
      <path d="M8 32v-6a4 4 0 014-4M40 32v-6a4 4 0 00-4-4" />
      <path d="M12 32v6M36 32v6" />
      <path d="M10 38h4M34 38h4" />
    </svg>
  ),
};

export function About() {
  const { lang } = useLanguage();
  const tr = t(lang);

  return (
    <section id="about" className={styles.section}>
      {/* Large decorative number */}
      <div className={styles.bigNumber} aria-hidden="true">
        <span>4</span>
      </div>

      <div className={styles.container}>
        {/* Top: Heading spans full width asymmetrically */}
        <RevealOnScroll>
          <div className={styles.headingRow}>
            <SectionHeading topText={tr.about.headingTop} bottomText={tr.about.headingBottom} />
            <div className={styles.headingAccent}>
              <span className={styles.accentLabel}>{tr.about.accentLabel}</span>
              <span className={styles.accentNumber}>{tr.about.accentNumber}</span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Main content — text offset left, cards break right */}
        <div className={styles.grid}>
          <div className={styles.textCol}>
            {tr.about.paragraphs.slice(0, 2).map((p, i) => (
              <RevealOnScroll key={`${lang}-${i}`} delay={0.1 + i * 0.08}>
                <p className={styles.paragraph}>{p}</p>
              </RevealOnScroll>
            ))}

            <RevealOnScroll delay={0.25}>
              <div className={styles.dividerRow}>
                <span className={styles.dividerLine} />
                <span className={styles.dividerText}>{tr.about.divider}</span>
              </div>
            </RevealOnScroll>

            {tr.about.paragraphs.slice(2).map((p, i) => (
              <RevealOnScroll key={`${lang}-${i + 2}`} delay={0.3 + i * 0.08}>
                <p className={`${styles.paragraph} ${styles.paragraphSmall}`}>{p}</p>
              </RevealOnScroll>
            ))}
          </div>

          <div className={styles.cardsCol}>
            {tr.about.activities.map((activity, i) => (
              <RevealOnScroll key={activity.icon} delay={0.15 + i * 0.12} direction={i % 2 === 0 ? 'right' : 'up'}>
                <div className={styles.card}>
                  <div className={styles.cardNumber}>0{i + 1}</div>
                  <div className={styles.cardIcon}>
                    {ICONS[activity.icon]}
                  </div>
                  <h3 className={styles.cardTitle}>{activity.title}</h3>
                  <p className={styles.cardCompany}>{activity.company}</p>
                  <div className={styles.cardEdge} />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

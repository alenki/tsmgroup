import { RevealOnScroll } from '../shared/RevealOnScroll';
import { SectionHeading } from '../shared/SectionHeading';
import { siteContent } from '../../data/content';
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
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.textCol}>
            <RevealOnScroll>
              <SectionHeading topText="About" bottomText="The Group" />
            </RevealOnScroll>

            {siteContent.about.paragraphs.map((p, i) => (
              <RevealOnScroll key={i} delay={0.1 + i * 0.08}>
                <p className={styles.paragraph}>{p}</p>
              </RevealOnScroll>
            ))}
          </div>

          <div className={styles.cardsCol}>
            <div className={styles.cardsGrid}>
              {siteContent.about.activities.map((activity, i) => (
                <RevealOnScroll key={activity.icon} delay={0.2 + i * 0.1}>
                  <div className={styles.card}>
                    <div className={styles.cardIcon}>
                      {ICONS[activity.icon]}
                    </div>
                    <h3 className={styles.cardTitle}>{activity.title}</h3>
                    <p className={styles.cardCompany}>{activity.company}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

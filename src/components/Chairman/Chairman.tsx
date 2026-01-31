import { RevealOnScroll } from '../shared/RevealOnScroll';
import { SectionHeading } from '../shared/SectionHeading';
import { siteContent } from '../../data/content';
import styles from './Chairman.module.css';

export function Chairman() {
  return (
    <section id="chairman" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Portrait side */}
          <RevealOnScroll direction="left" className={styles.portraitCol}>
            <div className={styles.portraitFrame}>
              <div className={styles.portraitAccent} />
              <div className={styles.portraitImage}>
                {/* Placeholder silhouette */}
                <svg viewBox="0 0 300 400" className={styles.portraitSvg}>
                  <rect width="300" height="400" fill="#E8E4DF" rx="4" />
                  <circle cx="150" cy="140" r="56" fill="#D4CFC8" />
                  <ellipse cx="150" cy="340" rx="85" ry="100" fill="#D4CFC8" />
                  {/* Shimagh/ghutra suggestion */}
                  <path d="M94 105 Q150 60 206 105 Q210 140 206 170 L150 185 94 170 Q90 140 94 105Z" fill="#CDC7BF" />
                </svg>
              </div>
              <div className={styles.portraitLabel}>
                <span className={styles.portraitName}>{siteContent.chairman.name}</span>
                <span className={styles.portraitTitle}>TSM Group</span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Message side */}
          <div className={styles.messageCol}>
            <RevealOnScroll>
              <SectionHeading topText="Chairman's" bottomText="Message" />
            </RevealOnScroll>

            <div className={styles.messageBody}>
              <span className={styles.quoteDecor}>&ldquo;</span>

              {siteContent.chairman.paragraphs.map((p, i) => (
                <RevealOnScroll key={i} delay={0.1 + i * 0.08}>
                  <p className={`${styles.paragraph} ${i === 0 ? styles.opening : ''}`}>
                    {p}
                  </p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

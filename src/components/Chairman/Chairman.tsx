import { RevealOnScroll } from '../shared/RevealOnScroll';
import { siteContent } from '../../data/content';
import styles from './Chairman.module.css';

export function Chairman() {
  return (
    <section id="chairman" className={styles.section}>
      {/* Vertical text accent */}
      <div className={styles.verticalLabel} aria-hidden="true">Chairman&apos;s Message</div>

      <div className={styles.layout}>
        {/* Portrait side — takes 45% */}
        <RevealOnScroll direction="left" className={styles.portraitSide}>
          <div className={styles.portraitWrap}>
            <img src="/chairman.png" alt={siteContent.chairman.name} className={styles.portraitImg} />

            {/* Overlay caption on portrait */}
            <div className={styles.portraitOverlay}>
              <span className={styles.portraitName}>{siteContent.chairman.name}</span>
              <span className={styles.portraitRole}>TSM Group of Companies</span>
            </div>

            {/* Corner accent */}
            <div className={styles.cornerAccent} />
          </div>
        </RevealOnScroll>

        {/* Message side — takes 55%, overlaps slightly */}
        <div className={styles.messageSide}>
          <RevealOnScroll>
            <div className={styles.headingBlock}>
              <span className={styles.headingLabel}>A Message From</span>
              <h2 className={styles.heading}>
                <span className={styles.headingTop}>The</span>
                <span className={styles.headingBottom}>Chairman</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className={styles.messageBody}>
            <span className={styles.quoteDecor} aria-hidden="true">&ldquo;</span>

            {/* Pull quote */}
            <RevealOnScroll delay={0.1}>
              <blockquote className={styles.pullQuote}>
                &ldquo;Eagle doesn&apos;t fold its wings and stop flying as long as there is a summit was not reached.&rdquo;
              </blockquote>
            </RevealOnScroll>

            {siteContent.chairman.paragraphs.map((p, i) => (
              <RevealOnScroll key={i} delay={0.15 + i * 0.07}>
                <p className={`${styles.paragraph} ${i === 0 ? styles.opening : ''}`}>
                  {p}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

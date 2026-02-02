import { RevealOnScroll } from '../shared/RevealOnScroll';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import styles from './Chairman.module.css';

export function Chairman() {
  const { lang } = useLanguage();
  const tr = t(lang);

  return (
    <section id="chairman" className={styles.section}>
      {/* Vertical text accent */}
      <div className={styles.verticalLabel} aria-hidden="true">{tr.chairman.verticalLabel}</div>

      <div className={styles.layout}>
        {/* Portrait side — takes 45% */}
        <RevealOnScroll direction="left" className={styles.portraitSide}>
          <div className={styles.portraitWrap}>
            <img src="/chairman.png" alt={tr.chairman.name} className={styles.portraitImg} />

            {/* Overlay caption on portrait */}
            <div className={styles.portraitOverlay}>
              <span className={styles.portraitName}>{tr.chairman.name}</span>
              <span className={styles.portraitRole}>{tr.chairman.role}</span>
            </div>

          </div>
        </RevealOnScroll>

        {/* Message side — takes 55%, overlaps slightly */}
        <div className={styles.messageSide}>
          <RevealOnScroll>
            <div className={styles.headingBlock}>
              <span className={styles.headingLabel}>{tr.chairman.labelAbove}</span>
              <h2 className={styles.heading}>
                <span className={styles.headingTop}>{tr.chairman.headingTop}</span>
                <span className={styles.headingBottom}>{tr.chairman.headingBottom}</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className={styles.messageBody}>
            <span className={styles.quoteDecor} aria-hidden="true">&ldquo;</span>

            {/* Pull quote */}
            <RevealOnScroll delay={0.1}>
              <blockquote className={styles.pullQuote}>
                {tr.chairman.pullQuote}
              </blockquote>
            </RevealOnScroll>

            {tr.chairman.paragraphs.map((p, i) => (
              <RevealOnScroll key={`${lang}-${i}`} delay={0.15 + i * 0.07}>
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

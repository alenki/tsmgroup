import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import styles from './Footer.module.css';

export function Footer() {
  const { lang } = useLanguage();
  const tr = t(lang);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <img src="/logo.png" alt="TSM Group" className={styles.logo} />
          <div className={styles.tagline}>{tr.footer.tagline}</div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>{tr.footer.copyright}</p>
          <div className={styles.links}>
            <button className={styles.footerLink} onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>{tr.footer.about}</button>
            <span className={styles.dot} />
            <button className={styles.footerLink} onClick={() => document.getElementById('companies')?.scrollIntoView({ behavior: 'smooth' })}>{tr.footer.companies}</button>
            <span className={styles.dot} />
            <button className={styles.footerLink} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>{tr.footer.contact}</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

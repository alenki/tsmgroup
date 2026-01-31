import { siteContent } from '../../data/content';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <svg viewBox="0 0 190 44" className={styles.logo}>
            <text x="4" y="36" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="40" fill="#FEFEFE" letterSpacing="-1">TSM</text>
            <text x="108" y="34" fontFamily="Outfit, sans-serif" fontWeight="300" fontSize="12" fill="#7A7A7A" letterSpacing="4">GROUP</text>
          </svg>
          <div className={styles.tagline}>Building Excellence Across The Kingdom</div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>{siteContent.footer.copyright}</p>
          <div className={styles.links}>
            <button className={styles.footerLink} onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</button>
            <span className={styles.dot} />
            <button className={styles.footerLink} onClick={() => document.getElementById('companies')?.scrollIntoView({ behavior: 'smooth' })}>Companies</button>
            <span className={styles.dot} />
            <button className={styles.footerLink} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

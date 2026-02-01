import { siteContent } from '../../data/content';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <img src="/logo.png" alt="TSM Group" className={styles.logo} />
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

import styles from './SectionDivider.module.css';

export function SectionDivider() {
  return (
    <div className={styles.divider} aria-hidden="true">
      <div className={styles.line} />
      <div className={styles.mark} />
      <div className={styles.line} />
    </div>
  );
}

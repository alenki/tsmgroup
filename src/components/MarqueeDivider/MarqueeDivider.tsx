import styles from './MarqueeDivider.module.css';

interface Props {
  text: string;
  variant?: 'crimson' | 'dark' | 'light';
  speed?: 'slow' | 'normal' | 'fast';
  reverse?: boolean;
}

export function MarqueeDivider({
  text,
  variant = 'crimson',
  speed = 'normal',
  reverse = false,
}: Props) {
  const repeated = Array.from({ length: 12 }, (_, i) => (
    <span key={i} className={styles.item}>
      <span className={styles.text}>{text}</span>
      <span className={styles.separator} aria-hidden="true" />
    </span>
  ));

  const speedClass =
    speed === 'slow' ? styles.slow : speed === 'fast' ? styles.fast : '';

  return (
    <div
      className={`${styles.divider} ${styles[variant]}`}
      aria-hidden="true"
    >
      <div
        className={`${styles.track} ${reverse ? styles.reverse : ''} ${speedClass}`}
      >
        <div className={styles.inner}>
          {repeated}
          {repeated}
        </div>
      </div>
    </div>
  );
}

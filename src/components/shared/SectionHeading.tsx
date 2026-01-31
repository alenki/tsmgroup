import styles from './SectionHeading.module.css';

interface Props {
  topText: string;
  bottomText: string;
  light?: boolean;
  centered?: boolean;
}

export function SectionHeading({ topText, bottomText, light = false, centered = false }: Props) {
  return (
    <div className={`${styles.heading} ${centered ? styles.centered : ''}`}>
      <span className={`${styles.top} ${light ? styles.light : ''}`}>{topText}</span>
      <span className={styles.bottom}>{bottomText}</span>
      <span className={styles.rule} />
    </div>
  );
}

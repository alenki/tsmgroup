import { useState, useEffect } from 'react';
import { useLenis } from '../../context/LenisContext';
import styles from './BackToTop.module.css';

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onScroll = () => {
      setVisible(lenis.scroll > 500);
    };

    lenis.on('scroll', onScroll);
    return () => lenis.off('scroll', onScroll);
  }, [lenis]);

  const handleClick = () => {
    lenis?.scrollTo(0);
  };

  return (
    <button
      className={`${styles.backToTop} ${visible ? styles.visible : ''}`}
      onClick={handleClick}
      aria-label="Back to top"
    >
      <span className={styles.iconWrap}>
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M3.5 7.5L8 3L12.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  );
}

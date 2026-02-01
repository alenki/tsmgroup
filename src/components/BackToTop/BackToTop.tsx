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
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 4L4 12H16L10 4Z" fill="currentColor" />
      </svg>
    </button>
  );
}

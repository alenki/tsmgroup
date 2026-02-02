import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { useInView } from '../../hooks/useInView';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import styles from './StatsCounter.module.css';

function AnimatedNumber({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [display, setDisplay] = useState(0);
  const animating = useRef(false);

  useEffect(() => {
    if (!inView || animating.current) return;
    animating.current = true;

    const duration = value > 100 ? 2000 : 1400;
    const start = performance.now();
    const startVal = value > 100 ? value - 30 : 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(startVal + (value - startVal) * eased);
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span className={styles.number}>
      {display}{suffix}
    </span>
  );
}

export function StatsCounter() {
  const [ref, inView] = useInView(0.3);
  const { lang } = useLanguage();
  const stats = t(lang).stats;

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        {stats.map((stat, i) => (
          <motion.div
            key={`${lang}-${stat.label}`}
            className={styles.stat}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
            <span className={styles.label}>{stat.label}</span>
            {i < stats.length - 1 && <div className={styles.divider} />}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

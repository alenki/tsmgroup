import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { useInView } from '../../hooks/useInView';
import styles from './StatsCounter.module.css';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 27, suffix: '+', label: 'Years of Excellence' },
  { value: 4, suffix: '', label: 'Leading Companies' },
  { value: 43, suffix: '+', label: 'Trusted Clients' },
  { value: 1997, suffix: '', label: 'Year Established' },
];

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

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
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
            {i < STATS.length - 1 && <div className={styles.divider} />}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

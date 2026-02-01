import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import styles from './PageLoader.module.css';

const ease = [0.76, 0, 0.24, 1] as const;

export function PageLoader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'done'>('loading');

  useEffect(() => {
    // Brief loading phase, then reveal
    const t1 = setTimeout(() => setPhase('reveal'), 1800);
    const t2 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className={styles.loader}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Curtain panels */}
          <motion.div
            className={`${styles.curtain} ${styles.curtainLeft}`}
            animate={phase === 'reveal' ? { x: '-100%' } : { x: 0 }}
            transition={{ duration: 0.9, ease }}
          />
          <motion.div
            className={`${styles.curtain} ${styles.curtainRight}`}
            animate={phase === 'reveal' ? { x: '100%' } : { x: 0 }}
            transition={{ duration: 0.9, ease }}
          />

          {/* Center content */}
          <div className={styles.center}>
            <motion.div
              className={styles.accentLine}
              initial={{ scaleX: 0 }}
              animate={phase === 'loading' ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div
              className={styles.brandMark}
              initial={{ opacity: 0, y: 12 }}
              animate={
                phase === 'loading'
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -20 }
              }
              transition={{ duration: 0.6, delay: phase === 'loading' ? 0.3 : 0 }}
            >
              <span className={styles.brandText}>TSM</span>
              <span className={styles.brandSub}>Group</span>
            </motion.div>
            <motion.div
              className={styles.yearMark}
              initial={{ opacity: 0 }}
              animate={
                phase === 'loading'
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
              transition={{ duration: 0.5, delay: phase === 'loading' ? 0.7 : 0 }}
            >
              Est. 1997
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

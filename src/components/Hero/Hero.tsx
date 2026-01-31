import { motion } from 'motion/react';
import { GeometricPattern } from './GeometricPattern';
import { siteContent } from '../../data/content';
import styles from './Hero.module.css';

const transition = { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const };

export function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background layers */}
      <div className={styles.bgGradient} />
      <GeometricPattern />
      <div className={styles.spotlight} />

      {/* Content */}
      <div className={styles.container}>
        <motion.div
          className={styles.logoMark}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.3 }}
        >
          <svg viewBox="0 0 240 56" className={styles.logoSvg}>
            <text
              x="0"
              y="46"
              fontFamily="Arial Black, sans-serif"
              fontWeight="900"
              fontSize="54"
              fill="#FEFEFE"
              letterSpacing="-1"
            >
              TSM
            </text>
            <text
              x="138"
              y="44"
              fontFamily="Outfit, sans-serif"
              fontWeight="300"
              fontSize="15"
              fill="#B8B8B8"
              letterSpacing="5"
            >
              GROUP
            </text>
          </svg>
        </motion.div>

        <motion.h1
          className={styles.tagline}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.55 }}
        >
          {siteContent.hero.tagline.split('\n').map((line, i) => (
            <span key={i} className={styles.taglineLine}>
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.span
          className={styles.rule}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ ...transition, delay: 0.8 }}
        />

        <motion.p
          className={styles.subtext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: 1.0 }}
        >
          <span>{siteContent.hero.established}</span>
          <span className={styles.subtextDot} />
          <span>{siteContent.hero.location}</span>
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}

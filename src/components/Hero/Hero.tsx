import { motion } from 'motion/react';
import { GeometricPattern } from './GeometricPattern';
import { siteContent } from '../../data/content';
import styles from './Hero.module.css';

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background layers */}
      <div className={styles.bgBase} />
      <GeometricPattern />
      <div className={styles.bgVignette} />
      <div className={styles.bgSpotlight} />

      {/* Floating geometric accents */}
      <motion.div
        className={styles.floatingRing}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 1.2, ease }}
      />
      <motion.div
        className={styles.floatingLine}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease }}
      />
      <motion.div
        className={styles.floatingDot}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      />

      {/* Content */}
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <motion.div
            className={styles.established}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
          >
            <span className={styles.estLine} />
            <span className={styles.estText}>Est. 1997</span>
          </motion.div>

          <motion.h1
            className={styles.tagline}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease }}
          >
            <span className={styles.taglineLight}>Building</span>
            <span className={styles.taglineBold}> Excellence</span>
            <br />
            <span className={styles.taglineLight}>Across The</span>
            <span className={styles.taglineBold}> Kingdom</span>
          </motion.h1>

          <motion.div
            className={styles.rule}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
          />

          <motion.p
            className={styles.subtext}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease }}
          >
            {siteContent.hero.location}
          </motion.p>
        </div>

        {/* Right side — large counter / year accent */}
        <motion.div
          className={styles.contentRight}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.4 }}
        >
          <span className={styles.yearLarge}>97</span>
          <span className={styles.yearCaption}>Since Nineteen<br />Ninety-Seven</span>
        </motion.div>
      </div>

      {/* Brand mark bottom-left */}
      <motion.div
        className={styles.brandCorner}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <img src="/logo.png" alt="TSM Group" className={styles.logoImg} />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className={styles.scrollText}>Scroll</span>
        <span className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}

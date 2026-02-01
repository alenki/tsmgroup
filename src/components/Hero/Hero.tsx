import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { GeometricPattern } from './GeometricPattern';
import { siteContent } from '../../data/content';
import styles from './Hero.module.css';

const ease = [0.16, 1, 0.3, 1] as const;

function CircularText() {
  const text = 'BUILDING EXCELLENCE \u2022 SINCE 1997 \u2022 TSM GROUP \u2022 RIYADH KSA \u2022 ';
  const chars = text.split('');

  return (
    <div className={styles.circularWrap}>
      <div className={styles.circularSpinner}>
        <svg viewBox="0 0 300 300" className={styles.circularSvg}>
          <defs>
            <path
              id="circlePath"
              d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
            />
          </defs>
          <text className={styles.circularTextSvg}>
            <textPath href="#circlePath" startOffset="0%">
              {chars.map((char, i) => (
                <tspan key={i}>{char}</tspan>
              ))}
            </textPath>
          </text>
        </svg>
      </div>
      {/* Center mark */}
      <div className={styles.circularCenter}>
        <span className={styles.circularYear}>97</span>
      </div>
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMouse({ x, y });
    };

    const el = containerRef.current;
    if (el) el.addEventListener('mousemove', handleMove, { passive: true });
    return () => { if (el) el.removeEventListener('mousemove', handleMove); };
  }, []);

  return (
    <section className={styles.hero} ref={containerRef}>
      {/* Background layers with parallax */}
      <div
        className={styles.bgBase}
        style={{
          transform: `translate(${mouse.x * -8}px, ${mouse.y * -8}px)`,
        }}
      />
      <div
        className={styles.bgPattern}
        style={{
          transform: `translate(${mouse.x * -4}px, ${mouse.y * -4}px)`,
        }}
      >
        <GeometricPattern />
      </div>
      <div className={styles.bgVignette} />
      <div className={styles.bgSpotlight} />

      {/* Floating geometric accents with parallax */}
      <motion.div
        className={styles.floatingRing}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 1.2, ease }}
        style={{
          transform: `translate(${mouse.x * 15}px, ${mouse.y * 15}px)`,
        }}
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

      {/* Horizontal accent lines */}
      <motion.div
        className={styles.horizLine}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 1.5, ease }}
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

          <h1 className={styles.tagline}>
            {['Building', ' Excellence'].map((word, i) => (
              <motion.span
                key={i}
                className={i === 0 ? styles.taglineLight : styles.taglineBold}
                initial={{ opacity: 0, y: 60, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.3 + i * 0.12,
                  ease,
                }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            {['Across The', ' Kingdom'].map((word, i) => (
              <motion.span
                key={i + 2}
                className={i === 0 ? styles.taglineLight : styles.taglineBold}
                initial={{ opacity: 0, y: 60, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.5 + i * 0.12,
                  ease,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

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

        {/* Right side — circular text element */}
        <motion.div
          className={styles.contentRight}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1, ease }}
          style={{
            transform: `translate(${mouse.x * -10}px, ${mouse.y * -10}px)`,
          }}
        >
          <CircularText />
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

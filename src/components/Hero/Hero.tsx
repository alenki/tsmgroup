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

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

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
      <img
        src="/bg_element.png"
        alt=""
        className={styles.bgElement}
        aria-hidden="true"
      />
      <div className={styles.bgVignette} />
      <div className={styles.bgSpotlight} />


      {/* Year watermark — giant ghosted "1997" */}
      <motion.div
        className={styles.yearWatermark}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        aria-hidden="true"
      >
        1997
      </motion.div>


      {/* Main content — bottom-anchored */}
      <div className={styles.container}>
        <motion.div
          className={styles.established}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
        >
          <span className={styles.estLine} />
          <span className={styles.estText}>Est. 1997</span>
        </motion.div>

        <h1 className={styles.tagline}>
          {['Building', ' Excellence'].map((word, i) => (
            <motion.span
              key={i}
              className={i === 0 ? styles.taglineLight : styles.taglineBold}
              initial={{ opacity: 0, y: 70, rotateX: -35 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 1,
                delay: 0.4 + i * 0.12,
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
              initial={{ opacity: 0, y: 70, rotateX: -35 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 1,
                delay: 0.6 + i * 0.12,
                ease,
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Bottom bar — meta info + CTA */}
        <motion.div
          className={styles.bottomBar}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease }}
        >
          <div className={styles.bottomMeta}>
            <span className={styles.metaText}>
              {siteContent.hero.location}
            </span>
            <span className={styles.metaDivider} />
            <span className={styles.metaText}>
              Diversified Conglomerate
            </span>
          </div>

          <button className={styles.ctaButton} onClick={handleContactClick}>
            Get In Touch
            <span className={styles.ctaArrow} />
          </button>
        </motion.div>
      </div>


      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <span className={styles.scrollText}>Scroll</span>
        <span className={styles.scrollLine} />
      </motion.div>

      {/* Bottom edge — elegant divider to white content below */}
      <div className={styles.bottomEdge} />
    </section>
  );
}

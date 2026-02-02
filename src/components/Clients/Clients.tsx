import { useRef, useEffect, useState } from 'react';
import { RevealOnScroll } from '../shared/RevealOnScroll';
import { SectionHeading } from '../shared/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import { clients } from '../../data/clients';
import styles from './Clients.module.css';

function ClientLogo({ src }: { src: string }) {
  return (
    <div className={styles.logoPlaceholder}>
      <img src={src} alt="" className={styles.logoImg} />
    </div>
  );
}

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={trackRef}
      className={`${styles.marqueeTrack} ${reverse ? styles.reverse : ''}`}
    >
      <div className={`${styles.marqueeInner} ${visible ? styles.running : ''}`}>
        {[...items, ...items].map((src, i) => (
          <ClientLogo key={`${src}-${i}`} src={src} />
        ))}
      </div>
    </div>
  );
}

export function Clients() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const half = Math.ceil(clients.length / 2);
  const row1 = clients.slice(0, half);
  const row2 = clients.slice(half);

  return (
    <section id="clients" className={styles.section}>
      <div className={styles.container}>
        <RevealOnScroll>
          <SectionHeading topText={tr.clients.headingTop} bottomText={tr.clients.headingBottom} centered />
        </RevealOnScroll>
      </div>

      <div className={styles.marqueeWrap}>
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}

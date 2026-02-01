import { RevealOnScroll } from '../shared/RevealOnScroll';
import { SectionHeading } from '../shared/SectionHeading';
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
  return (
    <div className={`${styles.marqueeTrack} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.marqueeInner}>
        {/* Duplicate for seamless loop */}
        {[...items, ...items].map((src, i) => (
          <ClientLogo key={`${src}-${i}`} src={src} />
        ))}
      </div>
    </div>
  );
}

export function Clients() {
  const half = Math.ceil(clients.length / 2);
  const row1 = clients.slice(0, half);
  const row2 = clients.slice(half);

  return (
    <section id="clients" className={styles.section}>
      <div className={styles.container}>
        <RevealOnScroll>
          <SectionHeading topText="Our" bottomText="Clients" centered />
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={0.15}>
        <div className={styles.marqueeWrap}>
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </div>
      </RevealOnScroll>
    </section>
  );
}

import { RevealOnScroll } from '../shared/RevealOnScroll';
import { SectionHeading } from '../shared/SectionHeading';
import { clients } from '../../data/clients';
import styles from './Clients.module.css';

function LogoPlaceholder({ name }: { name: string }) {
  const num = parseInt(name.replace('Client ', ''), 10);
  const hue = (num * 37) % 360;
  return (
    <div className={styles.logoPlaceholder}>
      <svg viewBox="0 0 120 48" className={styles.logoSvg}>
        <rect
          x="4"
          y="4"
          width="112"
          height="40"
          rx="4"
          fill={`hsl(${hue}, 12%, 88%)`}
          stroke={`hsl(${hue}, 15%, 78%)`}
          strokeWidth="1"
        />
        <text
          x="60"
          y="28"
          textAnchor="middle"
          fontFamily="Outfit, sans-serif"
          fontSize="9"
          fontWeight="500"
          fill={`hsl(${hue}, 15%, 55%)`}
        >
          {name}
        </text>
      </svg>
    </div>
  );
}

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  return (
    <div className={`${styles.marqueeTrack} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.marqueeInner}>
        {/* Duplicate for seamless loop */}
        {[...items, ...items].map((client, i) => (
          <LogoPlaceholder key={`${client}-${i}`} name={client} />
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

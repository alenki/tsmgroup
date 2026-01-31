import { useState } from 'react';
import type { FormEvent } from 'react';
import { RevealOnScroll } from '../shared/RevealOnScroll';
import { SectionHeading } from '../shared/SectionHeading';
import { siteContent } from '../../data/content';
import styles from './Contact.module.css';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Info column */}
          <div className={styles.infoCol}>
            <RevealOnScroll>
              <SectionHeading topText="Contact" bottomText="Us" />
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92V19.92a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <div>
                    <span className={styles.infoLabel}>Telephone</span>
                    <span className={styles.infoValue}>{siteContent.contact.tel}</span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9V2h12v7" />
                    <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                  </svg>
                  <div>
                    <span className={styles.infoLabel}>Fax</span>
                    <span className={styles.infoValue}>{siteContent.contact.fax}</span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <span className={styles.infoLabel}>Address</span>
                    <span className={styles.infoValue}>{siteContent.contact.address}</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Decorative geometric fragment */}
            <RevealOnScroll delay={0.25}>
              <svg className={styles.decorGeometry} viewBox="0 0 120 120" fill="none" aria-hidden="true">
                <polygon
                  points="60,5 84.7,15.3 104.7,35.3 115,60 104.7,84.7 84.7,104.7 60,115 35.3,104.7 15.3,84.7 5,60 15.3,35.3 35.3,15.3"
                  stroke="var(--color-crimson)"
                  strokeWidth="0.5"
                  opacity="0.15"
                />
                <polygon
                  points="60,20 100,60 60,100 20,60"
                  stroke="var(--color-crimson)"
                  strokeWidth="0.5"
                  opacity="0.1"
                />
                <circle cx="60" cy="60" r="24" stroke="var(--color-gold)" strokeWidth="0.5" opacity="0.2" />
              </svg>
            </RevealOnScroll>
          </div>

          {/* Form column */}
          <RevealOnScroll delay={0.15} className={styles.formCol}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">Full Name</label>
                  <input className={styles.input} type="text" id="name" placeholder="Your name" required />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">Email</label>
                  <input className={styles.input} type="email" id="email" placeholder="your@email.com" required />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="phone">Phone</label>
                  <input className={styles.input} type="tel" id="phone" placeholder="+966..." />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="company">Company</label>
                  <input className={styles.input} type="text" id="company" placeholder="Company name" />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  id="message"
                  placeholder="How can we help you?"
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className={styles.submitBtn} disabled={submitted}>
                {submitted ? 'Message Sent' : 'Send Message'}
              </button>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { useInView } from '../../hooks/useInView';

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  distance?: number;
  className?: string;
}

export function RevealOnScroll({
  children,
  delay = 0,
  direction = 'up',
  distance = 40,
  className,
}: Props) {
  const [ref, inView] = useInView(0.12);

  const initialX = direction === 'left' ? -distance : direction === 'right' ? distance : 0;
  const initialY = direction === 'up' ? distance : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: initialX, y: initialY }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

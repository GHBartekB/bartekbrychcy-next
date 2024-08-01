'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { PropsWithChildren, useEffect, useRef } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
  light?: boolean;
}

function Section({ children, className, light }: Props) {
  const styles = className ?? '';
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      transition={{ duration: 1 }}
    >
      <section
        className={`py-8 md:py-16 ${light ? 'bg-slate-100 dark:bg-slate-800' : ''} ${styles}`}
      >
        {children}
      </section>
    </motion.div>
  );
}

export default Section;

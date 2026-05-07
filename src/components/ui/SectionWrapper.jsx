import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function SectionWrapper({ id, children, className = '' }) {
  const { ref, controls } = useScrollReveal();

  return (
    <section id={id} className={`py-20 md:py-28 px-6 max-w-6xl mx-auto ${className}`}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}

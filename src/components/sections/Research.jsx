import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { profile } from '../../data/profile';

export default function Research() {
  return (
    <SectionWrapper id="research" className="bg-white dark:bg-dark-bg transition-colors duration-300">
      <SectionHeading>Research Interests</SectionHeading>

      <div className="max-w-4xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-serif italic text-slate-600 dark:text-slate-300 leading-relaxed mb-12"
        >
          "{profile.research.intro}"
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {profile.research.areas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`px-6 py-3 rounded-full font-medium shadow-sm transition-transform hover:-translate-y-1 ${
                idx % 2 === 0 
                  ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800' 
                  : 'bg-accent/10 dark:bg-accent/20 text-accent-700 dark:text-accent-light border border-accent/20'
              }`}
            >
              {area}
            </motion.div>
          ))}
        </div>

        <motion.a
          href={profile.scopus}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-dark dark:bg-primary-600 text-white rounded-full font-medium transition-colors shadow-lg hover:shadow-xl"
        >
          View Scopus Publications
          <ExternalLink size={20} />
        </motion.a>
      </div>
    </SectionWrapper>
  );
}

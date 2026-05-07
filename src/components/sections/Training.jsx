import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { profile } from '../../data/profile';

export default function Training() {
  return (
    <SectionWrapper id="training" className="bg-primary-50/50 dark:bg-slate-900/50 transition-colors duration-300">
      <SectionHeading>Training & Coaching Expertise</SectionHeading>

      <div className="max-w-4xl mx-auto bg-white dark:bg-dark-card rounded-3xl p-8 md:p-12 shadow-sm border border-primary-100 dark:border-primary-900/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          {profile.training.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="text-primary-500 mt-1 shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <span className="text-lg text-slate-700 dark:text-slate-300 font-medium">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, Mic, BookOpen, Zap, ShieldCheck } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { profile } from '../../data/profile';

const iconMap = {
  GraduationCap: GraduationCap,
  Sparkles: Sparkles,
  Mic: Mic,
  BookOpen: BookOpen,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
};

export default function Strengths() {
  return (
    <SectionWrapper id="strengths" className="bg-primary-50/50 dark:bg-slate-900/50 transition-colors duration-300">
      <SectionHeading>Professional Strengths</SectionHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profile.strengths.map((strength, index) => {
          const IconComponent = iconMap[strength.icon] || Sparkles;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-sm hover:shadow-soft border border-slate-100 dark:border-slate-800 transition-all flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
                <IconComponent size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-dark dark:text-white mb-3">
                {strength.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {strength.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

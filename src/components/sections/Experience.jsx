import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { profile } from '../../data/profile';

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-primary-50/50 dark:bg-slate-900/50 transition-colors duration-300">
      <SectionHeading>Experience</SectionHeading>

      {/* Featured Banner */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 text-center shadow-lg text-white"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <span className="font-serif text-6xl md:text-8xl font-bold text-accent-light drop-shadow-md">
            18+
          </span>
          <div className="text-xl md:text-3xl font-light text-left leading-snug">
            Years of<br />
            <span className="font-serif font-bold">Teaching & Training</span><br />
            Excellence
          </div>
        </div>
      </motion.div>

      {/* Experience Cards */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {profile.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-800"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-xl text-primary-600 dark:text-primary-400 shrink-0">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-dark dark:text-white">{exp.role}</h3>
                  <div className="flex items-center text-slate-500 dark:text-slate-400 mt-1 gap-1">
                    <MapPin size={16} />
                    <span className="text-sm font-medium">{exp.organization}</span>
                  </div>
                </div>
              </div>
              <Badge>{exp.duration}</Badge>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed md:ml-[68px]">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

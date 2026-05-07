import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { profile } from '../../data/profile';

export default function Hero() {
  const titles = ["Professor", "Trainer", "Life Coach", "NLP Practitioner"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-amber-50 dark:from-dark-bg dark:via-dark-card dark:to-slate-900 transition-colors duration-300">
      {/* Subtle background pattern - using inline SVG as background is optimal here */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left order-2 md:order-1"
          >
            <motion.div variants={itemVariants} className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase mb-4 text-sm md:text-base">
              Welcome
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-dark dark:text-white mb-6 leading-tight">
              {profile.name}
            </motion.h1>
            
            <motion.div variants={itemVariants} className="text-2xl md:text-3xl font-light text-slate-600 dark:text-slate-300 mb-8 h-12 flex justify-center md:justify-start items-center">
              <span className="mr-2">I am a</span>
              <span className="font-medium text-primary-600 dark:text-accent relative overflow-hidden h-full inline-flex items-center min-w-[200px]">
                <motion.span
                  key={currentTitleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute whitespace-nowrap"
                >
                  {titles[currentTitleIndex]}
                </motion.span>
              </span>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed text-balance">
              {profile.tagline}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollTo('about')}
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                View Profile
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-8 py-4 bg-white dark:bg-slate-800 text-primary-700 dark:text-primary-400 border-2 border-primary-100 dark:border-primary-900 hover:border-primary-600 dark:hover:border-primary-500 rounded-full font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                Get in Touch
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Animated Gradient Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 to-accent animate-pulse-slow opacity-75 blur-xl" />
              <div className="absolute inset-1 bg-white dark:bg-dark-bg rounded-full z-10" />
              
              {/* Photo Container */}
              <div className="absolute inset-3 rounded-full overflow-hidden z-20 border-4 border-white dark:border-slate-800 shadow-2xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                {/* Fallback avatar if no image provided */}
                <span className="text-6xl font-serif text-slate-300 dark:text-slate-500 select-none">JS</span>
                {/* Assuming user will place profile.jpg in public/ or src/assets/ later. Using a standard img tag with fallback */}
                <img 
                  src="/profile.jpg" 
                  alt={profile.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import StatCard from '../ui/StatCard';
import { profile } from '../../data/profile';

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-white dark:bg-dark-bg transition-colors duration-300">
      <SectionHeading>Career Profile</SectionHeading>
      
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left: Bio */}
        <div className="lg:w-[60%]">
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-serif italic text-balance border-l-4 border-primary-500 pl-6 py-2 bg-primary-50/50 dark:bg-primary-900/10 rounded-r-xl shadow-sm">
            "{profile.bio}"
          </p>
        </div>

        {/* Right: Stats Grid */}
        <div className="lg:w-[40%] grid grid-cols-2 gap-4 w-full">
          {profile.stats.map((stat, idx) => (
            <StatCard key={idx} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

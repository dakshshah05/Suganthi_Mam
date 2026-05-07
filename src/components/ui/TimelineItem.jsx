export default function TimelineItem({ degree, field, institution, index }) {
  return (
    <div className="timeline-item relative pl-16 sm:pl-0 sm:grid sm:grid-cols-2 gap-8 mb-20 sm:mb-28 group">
      
      {/* Dot at the center */}
      <div className="absolute left-8 sm:left-1/2 sm:-translate-x-1/2 top-0 flex items-center justify-center z-10 w-8 h-8 -ml-4 sm:ml-0 mt-1 sm:mt-0">
        <div className="timeline-dot-pulse absolute inset-0 rounded-full bg-accent/40 animate-ping" />
        <div className="timeline-dot-inner w-5 h-5 rounded-full bg-white dark:bg-dark-bg border-4 border-primary-500 shadow-[0_0_15px_rgba(99,102,241,0.6)] group-hover:scale-125 group-hover:border-accent transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="timeline-left sm:text-right pb-2 sm:pr-16 sm:col-start-1">
         <h3 className="font-serif font-bold text-2xl md:text-3xl text-dark dark:text-indigo-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors drop-shadow-sm">{degree}</h3>
      </div>
      
      <div className="timeline-right pb-2 sm:pl-16 sm:col-start-2">
        <p className="font-semibold text-xl md:text-2xl text-slate-800 dark:text-slate-200 group-hover:text-accent-700 dark:group-hover:text-accent-light transition-colors">{field}</p>
        <div className="flex items-center gap-3 mt-3">
          <div className="h-px bg-primary-200 dark:bg-primary-900/50 flex-grow max-w-[3rem]" />
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base italic">{institution}</p>
        </div>
      </div>
    </div>
  );
}

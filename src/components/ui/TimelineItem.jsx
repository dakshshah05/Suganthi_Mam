export default function TimelineItem({ degree, field, institution, isLast }) {
  return (
    <div className="timeline-item relative pl-8 sm:pl-0 sm:grid sm:grid-cols-5 gap-4 mb-8 group">
      {/* Line & Dot */}
      <div className="absolute left-0 top-0 sm:left-1/2 sm:-translate-x-1/2 h-full flex flex-col items-center">
        <div className="timeline-dot w-4 h-4 rounded-full bg-primary-500 shadow-[0_0_0_4px_rgba(99,102,241,0.2)] group-hover:scale-110 transition-transform z-10" />
        {!isLast && (
          <div className="timeline-line w-0.5 h-full bg-primary-200 dark:bg-primary-900 mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="timeline-left sm:col-span-2 sm:text-right pb-4 sm:pr-8">
        <h3 className="font-serif font-bold text-xl text-dark dark:text-indigo-200">{degree}</h3>
      </div>
      <div className="timeline-right sm:col-start-4 sm:col-span-2 pb-4 sm:pl-8">
        <p className="font-semibold text-lg text-slate-800 dark:text-slate-200">{field}</p>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{institution}</p>
      </div>
    </div>
  );
}

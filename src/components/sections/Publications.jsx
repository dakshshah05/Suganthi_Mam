import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { publications } from '../../data/publications';
import { profile } from '../../data/profile';

export default function Publications() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg transition-colors duration-300 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 font-medium mb-12 transition-colors">
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>
        
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark dark:text-white mb-4">Publications</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
          A selection of recent research and academic publications. For a complete list, please visit my <a href={profile.scopus} target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 underline underline-offset-4 font-medium">Scopus profile</a>.
        </p>
        
        <div className="space-y-6">
          {publications.map(pub => (
            <div key={pub.id} className="bg-white dark:bg-dark-card p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-dark dark:text-indigo-100 mb-3">
                {pub.title}
              </h2>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-600 dark:text-slate-400 mb-6 font-medium">
                <span className="italic">{pub.journal}</span>
                <span>&bull;</span>
                <span>{pub.year}</span>
              </div>
              <a 
                href={pub.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 font-medium group"
              >
                View on Scopus
                <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

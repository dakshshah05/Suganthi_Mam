import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Intersection of AI and Soft Skills in Modern Education",
      date: "October 12, 2024",
      excerpt: "Exploring how artificial intelligence can be leveraged to enhance and measure soft skills acquisition in university students."
    },
    {
      id: 2,
      title: "Effective NLP Techniques for Student Motivation",
      date: "September 05, 2024",
      excerpt: "A practical guide to applying Neuro-Linguistic Programming methodologies to inspire and engage learners."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg transition-colors duration-300 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 font-medium mb-12 transition-colors">
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>
        
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark dark:text-white mb-4">Blog & Insights</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
          Thoughts on education, technology, and personal transformation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">{post.date}</div>
              <h2 className="text-2xl font-serif font-bold text-dark dark:text-indigo-100 mb-4 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-6 text-primary-600 dark:text-accent font-medium">
                Read Article &rarr;
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

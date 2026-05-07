import { profile } from '../../data/profile';
import { Linkedin, BookOpen, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <h2 className="font-serif text-2xl font-bold mb-4">{profile.name}</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            {profile.tagline}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-indigo-200">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#about" onClick={(e) => scrollTo(e, 'about')} className="hover:text-white transition-colors">Career Profile</a></li>
            <li><a href="#strengths" onClick={(e) => scrollTo(e, 'strengths')} className="hover:text-white transition-colors">Strengths</a></li>
            <li><a href="#experience" onClick={(e) => scrollTo(e, 'experience')} className="hover:text-white transition-colors">Experience</a></li>
            <li><a href="#training" onClick={(e) => scrollTo(e, 'training')} className="hover:text-white transition-colors">Training</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-indigo-200">Connect</h3>
          <div className="flex space-x-4">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-primary-600 transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={profile.scopus} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors" aria-label="Scopus">
              <BookOpen size={20} />
            </a>
            <a href={`mailto:${profile.email}`} className="p-2 bg-white/10 rounded-full hover:bg-primary-600 transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/10 pt-8 text-center text-sm text-slate-500">
        <p>© {currentYear} {profile.name} · Built with React & Vite · All Rights Reserved</p>
      </div>
    </footer>
  );
}

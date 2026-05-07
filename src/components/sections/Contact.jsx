import { motion } from 'framer-motion';
import { Mail, Linkedin, BookOpen, MapPin, Phone } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { profile } from '../../data/profile';

export default function Contact() {
  const cards = [
    {
      icon: Mail,
      title: "Email",
      link: `mailto:${profile.email}`,
      text: "Send a message",
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      link: profile.linkedin,
      text: "Connect professionally",
      color: "text-indigo-500",
      bg: "bg-indigo-50 dark:bg-indigo-900/20"
    },
    {
      icon: BookOpen,
      title: "Scopus Profile",
      link: profile.scopus,
      text: "View publications",
      color: "text-accent",
      bg: "bg-accent/10 dark:bg-accent/10"
    }
  ];

  return (
    <SectionWrapper id="contact" className="bg-white dark:bg-dark-bg transition-colors duration-300">
      <SectionHeading>Let's Connect</SectionHeading>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={idx}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-8 bg-white dark:bg-dark-card rounded-2xl shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-800 transition-all group text-center"
              >
                <div className={`w-16 h-16 rounded-full ${card.bg} ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold text-dark dark:text-white mb-2">{card.title}</h3>
                <p className="text-slate-500 dark:text-slate-400">{card.text}</p>
              </motion.a>
            );
          })}
        </div>

        {/* Contact Form & Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-primary-50/50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-primary-100 dark:border-primary-900/30">
          
          <div>
            <h3 className="font-serif text-2xl font-bold text-dark dark:text-white mb-6">Send a Message</h3>
            <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-4">
              <div>
                <input type="text" name="name" required placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-bg text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary-500 outline-none transition-shadow" />
              </div>
              <div>
                <input type="email" name="email" required placeholder="Your Email" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-bg text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary-500 outline-none transition-shadow" />
              </div>
              <div>
                <textarea name="message" required rows="4" placeholder="Your Message" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-bg text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary-500 outline-none transition-shadow resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-colors shadow-sm">
                Send Message
              </button>
            </form>
            <p className="text-xs text-slate-400 mt-3 text-center">Powered by Formspree</p>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white dark:bg-dark-card rounded-full text-primary-500 shadow-sm shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-medium text-dark dark:text-white mb-1">Phone</h4>
                <p className="text-slate-600 dark:text-slate-400">{profile.phone}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white dark:bg-dark-card rounded-full text-primary-500 shadow-sm shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-medium text-dark dark:text-white mb-1">Location</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">{profile.address}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}

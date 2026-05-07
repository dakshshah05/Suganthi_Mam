import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import TimelineItem from '../ui/TimelineItem';
import { profile } from '../../data/profile';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.timeline-item');
    
    // Animate the main timeline line drawing down
    gsap.fromTo('.main-timeline-line', 
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 50%',
          end: 'bottom 70%',
          scrub: 1.5,
        }
      }
    );

    // Animate each item as they come into view
    items.forEach((item, i) => {
      const leftContent = item.querySelector('.timeline-left');
      const rightContent = item.querySelector('.timeline-right');
      const dot = item.querySelector('.timeline-dot-inner');
      const dotPulse = item.querySelector('.timeline-dot-pulse');
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        }
      });
      
      tl.from(dot, { scale: 0, opacity: 0, duration: 0.6, ease: 'back.out(2)' })
        .from(dotPulse, { scale: 0, opacity: 0, duration: 0.4, ease: 'power2.out' }, '-=0.4')
        .from(leftContent, { x: -60, opacity: 0, filter: 'blur(8px)', duration: 0.8, ease: 'power3.out' }, '-=0.3')
        .from(rightContent, { x: 60, opacity: 0, filter: 'blur(8px)', duration: 0.8, ease: 'power3.out' }, '<');
    });
  }, { scope: containerRef });

  return (
    <SectionWrapper id="education" className="bg-white dark:bg-dark-bg transition-colors duration-300">
      <SectionHeading>Educational Journey</SectionHeading>
      
      <div ref={containerRef} className="max-w-5xl mx-auto mt-24 relative px-4">
        {/* Background line */}
        <div className="absolute left-8 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-100 dark:bg-slate-800 rounded-full" />
        {/* Foreground animated line */}
        <div className="main-timeline-line absolute left-8 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-accent to-primary-600 origin-top rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)] z-0" />
        
        {profile.education.map((edu, idx) => (
          <TimelineItem 
            key={idx}
            degree={edu.degree}
            field={edu.field}
            institution={edu.institution}
            index={idx}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

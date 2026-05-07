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
  const containerRef = useRef();

  useGSAP(() => {
    const items = gsap.utils.toArray('.timeline-item');
    
    items.forEach((item) => {
      const leftContent = item.querySelector('.timeline-left');
      const rightContent = item.querySelector('.timeline-right');
      const dot = item.querySelector('.timeline-dot');
      const line = item.querySelector('.timeline-line');
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      });
      
      tl.from(dot, { scale: 0, opacity: 0, duration: 0.5, ease: 'back.out(1.7)' })
        .from(leftContent, { x: -40, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .from(rightContent, { x: 40, opacity: 0, duration: 0.6, ease: 'power3.out' }, '<');
        
      if (line) {
        tl.from(line, { scaleY: 0, transformOrigin: 'top', duration: 0.6, ease: 'power2.inOut' }, '-=0.4');
      }
    });
  }, { scope: containerRef });

  return (
    <SectionWrapper id="education" className="bg-white dark:bg-dark-bg transition-colors duration-300">
      <SectionHeading>Educational Journey</SectionHeading>
      
      <div ref={containerRef} className="max-w-4xl mx-auto mt-16 relative">
        {profile.education.map((edu, idx) => (
          <TimelineItem 
            key={idx}
            degree={edu.degree}
            field={edu.field}
            institution={edu.institution}
            isLast={idx === profile.education.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

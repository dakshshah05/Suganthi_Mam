import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import TimelineItem from '../ui/TimelineItem';
import { profile } from '../../data/profile';

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-white dark:bg-dark-bg transition-colors duration-300">
      <SectionHeading>Educational Journey</SectionHeading>
      
      <div className="max-w-4xl mx-auto mt-16 relative">
        {profile.education.map((edu, idx) => (
          <TimelineItem 
            key={idx}
            degree={edu.degree}
            field={edu.field}
            institution={edu.institution}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

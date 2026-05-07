import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { X } from 'lucide-react';

import img1 from '../../assets/gallery/1.jpeg';
import img2 from '../../assets/gallery/2.jpeg';
import img3 from '../../assets/gallery/3.jpeg';
import img4 from '../../assets/gallery/4.jpeg';
import img5 from '../../assets/gallery/5.jpeg';

const photos = [
  { id: 1, src: img1, alt: "Gallery Image 1" },
  { id: 2, src: img2, alt: "Gallery Image 2" },
  { id: 3, src: img3, alt: "Gallery Image 3" },
  { id: 4, src: img4, alt: "Gallery Image 4" },
  { id: 5, src: img5, alt: "Gallery Image 5" }
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedPhoto = photos.find(p => p.id === selectedId);

  return (
    <SectionWrapper id="gallery" className="bg-white dark:bg-dark-bg transition-colors duration-300">
      <SectionHeading>Gallery</SectionHeading>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto md:auto-rows-[250px]">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            layoutId={`photo-${photo.id}`}
            onClick={() => setSelectedId(photo.id)}
            className={`cursor-pointer overflow-hidden rounded-xl relative group ${
              index === 0 ? 'col-span-2 md:col-span-2 md:row-span-2 h-64 md:h-auto' : 'aspect-square md:aspect-auto'
            }`}
          >
            <img 
              src={photo.src} 
              alt={photo.alt} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              layoutId={`photo-${selectedId}`}
              className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedPhoto.src} alt={selectedPhoto.alt} className="w-full h-full object-contain bg-black" />
              <button 
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
                onClick={() => setSelectedId(null)}
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}

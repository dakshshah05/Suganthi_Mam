import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { X } from 'lucide-react';

const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=600&auto=format&fit=crop", alt: "Training Session" },
  { id: 2, src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop", alt: "Workshop" },
  { id: 3, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop", alt: "Seminar" },
  { id: 4, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600&auto=format&fit=crop", alt: "Conference" }
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedPhoto = photos.find(p => p.id === selectedId);

  return (
    <SectionWrapper id="gallery" className="bg-white dark:bg-dark-bg transition-colors duration-300">
      <SectionHeading>Gallery</SectionHeading>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {photos.map(photo => (
          <motion.div
            key={photo.id}
            layoutId={`photo-${photo.id}`}
            onClick={() => setSelectedId(photo.id)}
            className="cursor-pointer overflow-hidden rounded-xl aspect-square relative group"
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

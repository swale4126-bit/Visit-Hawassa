import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryGrid = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious(e);
      if (e.key === 'ArrowRight') goToNext(e);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  if (!images || images.length === 0) {
    return (
      <div className="py-16 text-center text-gray-500 bg-gray-50 rounded-2xl border border-gray-200 border-dashed">
        <p className="text-lg">No images found for this category.</p>
      </div>
    );
  }

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {images.map((image, index) => (
          <div 
            key={image.id}
            onClick={() => openLightbox(index)}
            className="relative group cursor-pointer aspect-square overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400?text=Image+Not+Found';
              }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
              <span className="text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {image.alt}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          {images.length > 1 && (
            <>
              <button 
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-50"
                onClick={goToPrevious}
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              
              <button 
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-50"
                onClick={goToNext}
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            </>
          )}

          {/* Image */}
          <div className="w-full h-full max-w-6xl max-h-[85vh] p-4 flex flex-col items-center justify-center relative" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[currentIndex].src} 
              alt={images[currentIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-2xl"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
              }}
            />
            <p className="text-white/80 mt-4 text-center font-medium">
              {images[currentIndex].alt} <span className="text-white/50 text-sm font-normal ml-2">({currentIndex + 1} / {images.length})</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;

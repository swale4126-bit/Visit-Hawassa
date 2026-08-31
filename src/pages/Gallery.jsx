import { useState } from 'react';
import Hero from '../components/Hero';
import FilterBar from '../components/FilterBar';
import GalleryGrid from '../components/GalleryGrid';
import { galleryImages, galleryCategories } from '../data/gallery';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="bg-gray-50 pb-16 lg:pb-24">
      <Hero 
        title="Photo Gallery" 
        subtitle="Explore the beauty of Hawassa through our curated collection of photographs."
        image="/images/nature7.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <FilterBar 
          categories={galleryCategories} 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        <GalleryGrid images={filteredImages} />
      </div>
    </div>
  );
};

export default Gallery;

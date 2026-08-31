import { useState } from 'react';
import Hero from '../components/Hero';
import PlaceCard from '../components/cards/PlaceCard';
import FilterBar from '../components/FilterBar';
import { attractions, categories } from '../data/attractions';

const Attractions = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredAttractions = activeCategory === "All" 
    ? attractions 
    : attractions.filter(place => place.category === activeCategory);

  return (
    <div className="bg-gray-50 pb-16 lg:pb-24">
      <Hero 
        title="Discover Attractions" 
        subtitle="Explore the most popular destinations in our beautiful city."
        image="/images/lake hawassa.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <FilterBar 
          categories={categories} 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        {filteredAttractions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {filteredAttractions.map(place => (
              <PlaceCard key={place.id} place={place} type="attractions" />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-gray-500 bg-white rounded-2xl border border-gray-100">
            <p className="text-xl">No attractions found for this category.</p>
            <button 
              onClick={() => setActiveCategory("All")}
              className="mt-4 text-green-600 hover:text-green-700 font-medium"
            >
              View all attractions
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Attractions;

import { useState } from 'react';
import Hero from '../components/Hero';
import PlaceCard from '../components/cards/PlaceCard';
import FilterBar from '../components/FilterBar';
import { religiousPlaces, religiousCategories } from '../data/religious';

const ReligiousPlaces = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPlaces = activeCategory === "All" 
    ? religiousPlaces 
    : religiousPlaces.filter(place => place.category === activeCategory);

  return (
    <div className="bg-gray-50 pb-16 lg:pb-24">
      <Hero 
        title="Religious Places" 
        subtitle="Experience the spiritual heart and peaceful sanctuaries of Hawassa."
        image="/images/religiousg2.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <FilterBar 
          categories={religiousCategories} 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        {filteredPlaces.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {filteredPlaces.map(place => (
              <PlaceCard key={place.id} place={place} type="religious" />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-gray-500 bg-white rounded-2xl border border-gray-100">
            <p className="text-xl">No places found for this category.</p>
            <button 
              onClick={() => setActiveCategory("All")}
              className="mt-4 text-green-600 hover:text-green-700 font-medium"
            >
              View all places
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReligiousPlaces;

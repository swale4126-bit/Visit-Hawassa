import Hero from '../components/Hero';
import PlaceCard from '../components/cards/PlaceCard';
import { hotels } from '../data/hotels';

const Hotels = () => {
  return (
    <div className="bg-gray-50 pb-16 lg:pb-24">
      <Hero 
        title="Hotels & Resorts" 
        subtitle="Find the perfect place to stay, from luxurious lakeside resorts to comfortable city hotels."
        image="/images/haile_resort.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {hotels.map(hotel => (
            <PlaceCard key={hotel.id} place={{...hotel, category: "Accommodation"}} type="hotels" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;

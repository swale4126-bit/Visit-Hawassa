import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const PlaceCard = ({ place, type = "attractions" }) => {
  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full border border-gray-100">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img 
          src={encodeURI(place.image)} 
          alt={place.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
          }}
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-green-700 uppercase tracking-wider">
          {place.category}
        </div>
      </div>
      
      <div className="p-5 md:p-8 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-green-700 transition-colors">{place.name}</h3>
        
        <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3 flex-grow">
          {place.description}
        </p>
        
        {place.amenities && (
          <div className="flex flex-wrap gap-2 mb-4">
            {place.amenities.slice(0, 3).map((amenity, idx) => (
              <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                {amenity}
              </span>
            ))}
            {place.amenities.length > 3 && (
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                +{place.amenities.length - 3} more
              </span>
            )}
          </div>
        )}

        <div className="mt-auto pt-4 border-t border-gray-50 flex flex-col gap-2">
          {place.address && (
            <span className="text-xs text-gray-500 flex items-center gap-1 font-medium">
              <MapPin className="w-3 h-3 text-green-600" /> 
              {place.address.split(',')[0]}
            </span>
          )}
          <Link 
            to={`/place/${type}/${place.id}`} 
            className="text-green-700 font-bold hover:text-green-800 flex items-center transition-all group-hover:translate-x-2 inline-block mt-2 text-base"
          >
            View Details <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;

import { useParams, Link } from 'react-router-dom';
import { getPlaceByCategoryAndId } from '../utils/placeHelpers';
import PlaceMap from '../components/PlaceMap';
import { ArrowLeft, MapPin, Tag } from 'lucide-react';
import NotFound from './NotFound';

const PlaceDetail = () => {
  const { category, id } = useParams();
  const place = getPlaceByCategoryAndId(category, id);

  if (!place) {
    return <NotFound />;
  }

  return (
    <div className="bg-gray-50 flex flex-col items-center">
      {/* Hero Image */}
      <div className="w-full h-[260px] md:h-[320px] lg:h-[400px] relative">
        <img 
          src={place.image} 
          alt={place.name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/1200x600?text=Image+Not+Found';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Back button */}
        <Link 
          to={-1}
          className="absolute top-6 left-4 md:left-8 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full transition-colors z-10 flex items-center justify-center shadow-lg"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>

        {/* Title Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
              <Tag className="w-3.5 h-3.5" /> {place.category || "Destination"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 text-shadow-lg tracking-tight">
            {place.name}
          </h1>
          {place.address && (
            <p className="text-gray-100 text-lg md:text-xl font-medium flex items-center gap-2 drop-shadow-md">
              <MapPin className="w-5 h-5 text-green-400" /> {place.address}
            </p>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* About Section */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <section className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 uppercase tracking-wide text-center md:text-left">
            About {place.name}
          </h2>
          <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none text-center md:text-left">
            <p>{place.description}</p>
          </div>

          {place.amenities && (
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights</h3>
              <div className="flex flex-wrap gap-3">
                {place.amenities.map((amenity, idx) => (
                  <span key={idx} className="bg-green-50 text-green-700 px-4 py-2 rounded-xl text-sm font-bold border border-green-100 shadow-sm">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          )}
          </section>
        </div>

        {/* Location & Map Section */}
        <div className="lg:col-span-1 sticky top-24">
          <section className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 uppercase tracking-wide flex flex-col md:flex-row items-center gap-3">
              <span className="bg-green-100 p-2 rounded-xl text-green-600 hidden md:flex"><MapPin className="w-6 h-6"/></span>
              Location
            </h2>
            <p className="text-gray-700 text-lg font-medium flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-5 h-5 text-green-600 md:hidden" /> {place.address || "Hawassa, Sidama, Ethiopia"}
            </p>
          </div>

          {/* Interactive Map Component */}
          <div className="w-full">
            <PlaceMap 
              latitude={place.latitude}
              longitude={place.longitude}
              name={place.name}
              address={place.address}
            />
          </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;

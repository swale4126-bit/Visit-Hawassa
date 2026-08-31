import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin } from 'lucide-react';

// Fix Leaflet's default icon path issues with bundlers
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

// Component to dynamically update map center if props change
const MapUpdater = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const PlaceMap = ({ latitude, longitude, name, address, zoom = 15 }) => {
  if (!latitude || !longitude) {
    return (
      <div className="w-full rounded-3xl border border-gray-200 bg-gray-50 flex flex-col items-center justify-center text-center p-12">
        <MapPin className="w-12 h-12 text-gray-300 mb-4" />
        <h3 className="text-xl font-bold text-gray-700 mb-2">Location details are being verified.</h3>
        <p className="text-gray-500 max-w-md mx-auto">
          We are currently confirming the exact coordinates to provide you with an accurate interactive map.
        </p>
      </div>
    );
  }

  const position = [latitude, longitude];
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full h-[280px] md:h-[350px] lg:h-[400px] rounded-3xl overflow-hidden border border-gray-200 shadow-sm relative z-0">
        <MapContainer 
          center={position} 
          zoom={zoom} 
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup className="font-sans">
              <div className="text-center pb-1">
                <strong className="block text-gray-900 mb-1">{name}</strong>
                {address && <span className="text-xs text-gray-600 block leading-tight">{address}</span>}
              </div>
            </Popup>
          </Marker>
          <MapUpdater center={position} zoom={zoom} />
        </MapContainer>
      </div>
      
      <div className="flex justify-center md:justify-start">
        <a 
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-8 rounded-full shadow-md transition-all hover:-translate-y-1 focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
        >
          <MapPin className="w-5 h-5" />
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default PlaceMap;

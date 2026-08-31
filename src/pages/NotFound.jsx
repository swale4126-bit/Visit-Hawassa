import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <Compass className="w-24 h-24 text-green-500 opacity-50" />
        </div>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Looks like you're lost!</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track to discovering Hawassa.
        </p>
        <Link 
          to="/" 
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

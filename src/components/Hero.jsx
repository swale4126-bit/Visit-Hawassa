import { Link } from 'react-router-dom';
const Hero = ({ title, subtitle, image, showButtons = false, size = "default" }) => {
  const sizeClasses = size === "large" 
    ? "min-h-[420px] md:min-h-[500px] lg:min-h-[600px] py-20 md:py-24" 
    : "min-h-[260px] md:min-h-[320px] lg:min-h-[400px] py-12 md:py-16";

  return (
    <div className={`relative w-full flex flex-col items-center justify-center overflow-hidden ${sizeClasses}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${image}')` }}
      >
        {/* Controlled 40% dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full pb-8">
        <div className="mb-6 flex justify-center">
          <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide shadow-sm flex items-center gap-1.5">
            📍 Hawassa, Sidama, Ethiopia
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight font-extrabold text-white mb-4 md:mb-6 text-shadow-lg tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl text-gray-50 mb-8 md:mb-10 font-medium max-w-2xl mx-auto text-shadow-md leading-relaxed">
            {subtitle}
          </p>
        )}
        
        {showButtons && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Link 
              to="/attractions" 
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl focus:ring-2 focus:ring-offset-2 focus:ring-green-600 focus:outline-none transform hover:-translate-y-1 text-center"
            >
              Explore Hawassa
            </Link>
            <Link 
              to="/travel-tips" 
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-green-900 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none transform hover:-translate-y-1 text-center"
            >
              Plan Your Visit
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

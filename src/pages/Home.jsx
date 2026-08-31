import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { MapPin, Sun, Coffee, Info } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white flex flex-col w-full overflow-hidden">
      {/* 1. HERO */}
      <Hero 
        title="Discover Hawassa" 
        subtitle="Experience the beauty of Lake Hawassa, local culture, nature, food and unforgettable lakeside moments."
        image="/images/hawassa well known.png"
        showButtons={true}
        size="large"
      />

      {/* 8. TRAVEL TIPS */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Plan Your Visit
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Getting Around", icon: <MapPin className="w-10 h-10 text-slate-900 mb-6" />, text: "Tuk-tuks (Bajaj) are the easiest way to navigate the city affordably." },
              { title: "Best Time to Visit", icon: <Sun className="w-10 h-10 text-slate-900 mb-6" />, text: "September to March offers the best weather with clear, sunny skies." },
              { title: "Travel Essentials", icon: <Info className="w-10 h-10 text-slate-900 mb-6" />, text: "Don't forget mosquito repellent and comfortable walking shoes." },
              { title: "Local Coffee", icon: <Coffee className="w-10 h-10 text-slate-900 mb-6" />, text: "Experience a traditional coffee ceremony at least once during your stay." }
            ].map((tip, i) => (
              <div key={i} className="bg-slate-50 rounded-[2rem] p-10 text-center hover:bg-slate-100 transition-colors duration-300">
                <div className="flex justify-center">{tip.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{tip.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="relative py-16 md:py-24 bg-slate-900 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hawassa%20well%20known.png')] opacity-30 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-white mb-8 tracking-tight leading-[1.1]">
            Ready to Discover Hawassa?
          </h2>
          <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
            Start planning your journey and explore the breathtaking beauty of Ethiopia's lakeside city.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/attractions" 
              className="bg-green-600 hover:bg-green-500 text-white font-bold py-5 px-12 rounded-full transition-all shadow-xl hover:shadow-green-900/50 transform hover:-translate-y-1 text-lg"
            >
              Explore Destinations
            </Link>
            <Link 
              to="/contact" 
              className="bg-white hover:bg-slate-50 text-slate-900 font-bold py-5 px-12 rounded-full transition-all shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

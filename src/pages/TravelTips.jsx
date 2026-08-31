import Hero from '../components/Hero';
import { travelTips } from '../data/travelTips';
import { Shield, Leaf, Calendar } from 'lucide-react';

const TravelTips = () => {
  const icons = {
    'safety': <Shield className="w-8 h-8 text-green-600" />,
    'health': <Leaf className="w-8 h-8 text-green-600" />,
    'best-time': <Calendar className="w-8 h-8 text-green-600" />
  };

  return (
    <div className="bg-gray-50 pb-16 lg:pb-24">
      <Hero 
        title="Travel Tips" 
        subtitle="Everything you need to know for a safe, enjoyable, and memorable visit to Hawassa."
        image="/images/am1.jpg"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="space-y-10">
          {travelTips.map(tip => (
            <div key={tip.id} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-green-50 p-4 rounded-2xl mr-5">
                  {icons[tip.id] || <Shield className="w-8 h-8 text-green-600" />}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{tip.title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg pl-2 border-l-4 border-green-100">
                {tip.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelTips;

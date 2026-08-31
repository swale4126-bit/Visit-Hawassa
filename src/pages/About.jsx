import Hero from '../components/Hero';
import { aboutData } from '../data/about';

const About = () => {
  return (
    <div>
      <Hero 
        title="About Hawassa" 
        subtitle="Learn about the history, culture, and importance of the Sidama Region's capital."
        image="/images/nature6.jpg"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Intro */}
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            Hawassa is a vibrant and welcoming city known for its cultural diversity, peaceful way of life, and stunning natural beauty.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-24">
          {aboutData.map((section, index) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div className="flex items-center mb-8">
                <div className="w-12 h-1 bg-green-500 rounded-full mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{section.title}</h2>
              </div>
              
              <div className="prose prose-lg prose-green max-w-none text-gray-600 leading-relaxed space-y-6">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Add an image after culture section just to break up text */}
              {section.id === 'culture' && (
                <div className="mt-12 rounded-2xl overflow-hidden shadow-xl aspect-[16/9]">
                  <img src="/images/hawassa well known.png" alt="Hawassa Culture" className="w-full h-full object-cover" />
                </div>
              )}
            </section>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;

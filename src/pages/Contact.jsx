import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

// Custom Telegram Icon since Lucide doesn't have brand icons
const TelegramIcon = ({ className }) => (
  <svg 
    xmlns="http://www.0000.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/>
  </svg>
);

const Contact = () => {
  return (
    <div className="bg-gray-50 pb-12 lg:pb-16">
      <Hero 
        title="Contact Visit Hawassa" 
        subtitle="Have a question about visiting Hawassa? We're here to help."
        image="/images/lake hawassa.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Contact Form (Left - 7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Contact Info (Right - 5 cols) */}
          <div className="lg:col-span-5 space-y-8 lg:space-y-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Get in Touch</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you need travel advice, want to know more about attractions, or have general inquiries, our team is ready to assist you.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-green-50 group-hover:bg-green-100 transition-colors p-3.5 rounded-xl">
                  <Phone className="w-6 h-6 text-green-700" />
                </div>
                <div className="ml-5">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Phone</h4>
                  <a 
                    href="tel:+251963621997" 
                    className="mt-1 text-lg font-medium text-gray-900 hover:text-green-700 transition-colors block"
                  >
                    +251 963 621 997
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-green-50 group-hover:bg-green-100 transition-colors p-3.5 rounded-xl">
                  <Mail className="w-6 h-6 text-green-700" />
                </div>
                <div className="ml-5">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Email</h4>
                  <a 
                    href="mailto:swale4126@gmail.com" 
                    className="mt-1 text-lg font-medium text-gray-900 hover:text-green-700 transition-colors block"
                  >
                    swale4126@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <a 
                  href="https://t.me/wsm51921" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-shrink-0 bg-[#0088cc] hover:bg-[#0077b3] transition-colors p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0088cc]"
                  aria-label="Contact us on Telegram"
                  title="Telegram"
                >
                  <TelegramIcon className="w-6 h-6 text-white" />
                </a>
                <div className="ml-5 flex items-center">
                  <span className="text-lg font-medium text-gray-900">
                    Contact us on Telegram
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-600">Hawassa, Sidama Region<br />Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Compact CTA */}
        <div className="mt-12 lg:mt-20 bg-green-800 rounded-3xl p-6 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-green-900/20 mix-blend-multiply"></div>
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to explore Hawassa?</h3>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
              Discover the beauty, culture, and unforgettable experiences waiting for you in the heart of the Rift Valley.
            </p>
            <Link 
              to="/attractions" 
              className="inline-flex items-center justify-center bg-white text-green-800 hover:bg-gray-50 px-8 py-3.5 rounded-full font-bold transition-all hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white"
            >
              Explore Hawassa
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

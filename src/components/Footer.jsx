import { Link } from 'react-router-dom';

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

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 lg:pt-20 pb-8 border-t-[6px] border-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Column 1: Branding */}
          <div className="lg:pr-8">
            <h3 className="text-2xl font-bold tracking-widest text-white mb-4">VISIT HAWASSA</h3>
            <p className="text-slate-400 leading-relaxed text-sm lg:text-base">
              Discover the beauty, culture, and nature of Hawassa. Your gateway to the Rift Valley's most vibrant lakeside city.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-500 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm lg:text-base">
              <li><Link to="/" className="text-slate-300 hover:text-white hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-white hover:text-green-400 transition-colors">About Hawassa</Link></li>
              <li><Link to="/attractions" className="text-slate-300 hover:text-white hover:text-green-400 transition-colors">Attractions</Link></li>
              <li><Link to="/hotels" className="text-slate-300 hover:text-white hover:text-green-400 transition-colors">Hotels & Resorts</Link></li>
              <li><Link to="/gallery" className="text-slate-300 hover:text-white hover:text-green-400 transition-colors">Gallery</Link></li>
              <li><Link to="/travel-tips" className="text-slate-300 hover:text-white hover:text-green-400 transition-colors">Travel Tips</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white hover:text-green-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-500 uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-3 text-sm lg:text-base">
              <li><Link to="/attractions" className="text-slate-300 hover:text-white hover:text-green-400 transition-colors">All Attractions</Link></li>
              <li><Link to="/religious-places" className="text-slate-300 hover:text-white hover:text-green-400 transition-colors">Religious Places</Link></li>
              <li><Link to="/entertainment" className="text-slate-300 hover:text-white hover:text-green-400 transition-colors">Entertainment</Link></li>
              <li><Link to="/food" className="text-slate-300 hover:text-white hover:text-green-400 transition-colors">Food & Dining</Link></li>
              <li><Link to="/gallery" className="text-slate-300 hover:text-white hover:text-green-400 transition-colors">Photo Gallery</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-500 uppercase tracking-wider text-sm">Contact</h4>
            <address className="not-italic space-y-4 text-sm lg:text-base">

              <div className="flex items-center text-slate-300 hover:text-white transition-colors">
                <span className="mr-3 text-lg">📞</span>
                <a href="tel:+251963621997">+251 963 621 997</a>
              </div>
              <div className="flex items-center text-slate-300 hover:text-white transition-colors">
                <span className="mr-3 text-lg">✉</span>
                <a href="mailto:swale4126@gmail.com">swale4126@gmail.com</a>
              </div>
              <div className="mt-4 pt-2">
                <a 
                  href="https://t.me/wsm51921" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#0088cc] hover:bg-[#0077b3] text-white p-2.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-[#0088cc]"
                  aria-label="Contact us on Telegram"
                  title="Telegram"
                >
                  <TelegramIcon className="w-5 h-5" />
                </a>
              </div>
            </address>
          </div>
          
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Visit Hawassa. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

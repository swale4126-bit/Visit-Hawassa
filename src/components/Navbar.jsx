import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Discover', 
      path: '/attractions',
      dropdown: [
        { name: 'All Attractions', path: '/attractions' },
        { name: 'Religious Places', path: '/religious-places' },
        { name: 'Entertainment', path: '/entertainment' }
      ]
    },
    { name: 'Stay', path: '/hotels' },
    { name: 'Food', path: '/food' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Travel Tips', path: '/travel-tips' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${
        scrolled ? 'shadow-md py-3' : 'shadow-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-extrabold tracking-widest text-gray-900">
              VISIT HAWASSA
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-2 xl:space-x-4 items-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.dropdown && link.dropdown.some(sub => location.pathname === sub.path));
              return (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
                  onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center text-[15px] font-semibold transition-all px-4 py-2 rounded-full ${
                      isActive
                        ? 'bg-green-50 text-green-700' 
                        : 'text-slate-700 hover:text-green-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                  </Link>
                  
                  {/* Desktop Dropdown */}
                  {link.dropdown && (
                    <div 
                      className={`absolute left-0 mt-2 w-52 transition-all duration-200 transform origin-top-left bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden ${
                        dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                      }`}
                    >
                      <div className="py-2">
                        {link.dropdown.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.path}
                            className={`block px-5 py-3 text-sm font-medium transition-colors hover:bg-green-50 hover:text-green-700 ${
                              location.pathname === sublink.path ? 'text-green-700 bg-green-50/50' : 'text-gray-600'
                            }`}
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              to="/contact"
              className="ml-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm hover:shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-[60px] sm:top-[72px] bg-white shadow-2xl transition-all duration-300 ease-in-out border-t border-gray-100 overflow-y-auto max-h-[calc(100vh-60px)] ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path && !link.dropdown;
            return (
              <div key={link.name} className="space-y-1">
                <Link
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                    isActive
                      ? 'text-green-700 bg-green-50' 
                      : 'text-gray-900 hover:bg-gray-50 hover:text-green-700'
                  }`}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-6 pr-4 space-y-1 mt-1 border-l-2 border-gray-100 ml-4">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.name}
                        to={sublink.path}
                        className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                          location.pathname === sublink.path
                            ? 'text-green-700 bg-green-50'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-green-700'
                        }`}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="pt-6 px-4 pb-4">
            <Link
              to="/contact"
              className="flex w-full items-center justify-center bg-green-600 hover:bg-green-700 text-white px-5 py-4 rounded-xl text-base font-bold transition-colors shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

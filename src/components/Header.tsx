import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleBookCall = () => {
    window.open('https://calendly.com/mohammadyusuf025/30min?month=2025-06', '_blank');
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'our-work', label: 'Our Work' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'FeedBacks' },
    { id: 'Contact', label: 'Contact Us' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out">
      <div className={`mx-auto transition-all duration-700 ease-out ${
        isScrolled 
          ? 'w-[95%] max-w-6xl mt-3 backdrop-blur-xl bg-white/95 shadow-2xl border border-gray-200/50 rounded-2xl' 
          : 'w-full bg-transparent'
      }`}>
        <div className={`flex items-center justify-between transition-all duration-700 ease-out ${
          isScrolled 
            ? 'px-4 sm:px-6 py-3' 
            : 'px-4 sm:px-8 lg:px-12 py-4'
        }`}>
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-2 sm:gap-3 transition-all duration-300">
            <img
              src="/images/logomain.png"
              alt="Technovere Logo"
              className={`object-contain transition-all duration-300 ${
                isScrolled ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-10 h-10 sm:w-12 sm:h-12'
              }`}
            />
            <div className={`font-extrabold tracking-wide font-poppins leading-none transition-all duration-300 ${
              isScrolled ? 'text-xl sm:text-2xl' : 'text-xl sm:text-2xl lg:text-3xl'
            }`}>
              <span className="text-[#00ADEF]">TECHNO</span>
              <span className="bg-gradient-to-r from-[#FFE500] to-[#FFF7A0] text-transparent bg-clip-text">VERE</span>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-6 xl:space-x-8">
              {navigationItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 font-poppins font-medium hover:scale-105 relative group ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-[#00ADEF]' 
                      : 'text-white hover:text-[#00ADEF] drop-shadow-md'
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ADEF] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button 
              onClick={handleBookCall}
              className={`text-black bg-[#FFEB3B] hover:bg-[#FDD835] font-poppins font-semibold px-6 py-2.5 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
                !isScrolled ? 'shadow-lg' : ''
              }`}
            >
              BOOK A CALL
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-200 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'
                } ${
                  isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`} 
              />
              <X 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'
                } ${
                  isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-gray-200/30 bg-white/95 backdrop-blur-xl rounded-b-2xl shadow-xl">
            <nav className="flex flex-col p-4 space-y-1">
              {navigationItems.map((item, index) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-800 hover:text-[#00ADEF] transition-all duration-300 font-poppins font-medium py-3 text-left hover:bg-gray-50/80 px-3 rounded-xl transform hover:translate-x-1"
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3">
                <Button 
                  onClick={handleBookCall}
                  className="bg-[#00ADEF] hover:bg-[#0099CC] text-white font-poppins font-semibold px-6 py-3 rounded-full w-full hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  BOOK A CALL
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setIsScrolled(window.scrollY > 50);
      } else {
        setIsScrolled(false); // Disable scroll animation on mobile
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-3 left-0 right-0 z-50 flex justify-center bg-transparent">
      <div className={`transition-all duration-700 ease-out ${
        isScrolled 
          ? 'w-[94%] max-w-6xl mt-4 backdrop-blur-xl shadow-2xl border border-gray-950 rounded-2xl' 
          : 'w-full'
      }`}>
        <div className={`flex items-center justify-between transition-all duration-700 ${
          isScrolled ? 'px-4 sm:px-6 py-4' : 'px-8 sm:px-12 py-4'
        }`}>
          {/* Logo Text */}
          <div className="text-2xl font-extrabold tracking-wider font-poppins flex">
            <span className="text-[#00ADEF]">TECHNO</span>
            <span className="bg-gradient-to-r from-[#FFE500] to-[#FFF7A0] text-transparent bg-clip-text">VERE</span>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-5">
              {['about', 'work', 'services', 'feedbacks', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`transition-all duration-300 font-poppins font-medium hover:scale-105 relative group ${
                    isScrolled 
                      ? 'text-black hover:text-[#00ADEF]' 
                      : 'text-white hover:text-[#00ADEF]'
                  }`}
                >
                  {item === 'work' ? 'Our Work' : item === 'contact' ? 'Contact Us' : item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ADEF] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('call')}
              className="bg-[#00ADEF] text-white font-poppins font-semibold px-6 py-2.5 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              BOOK A CALL
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-xl rounded-b-2xl">
            <nav className="flex flex-col p-3 space-y-3">
              {['about', 'work', 'services', 'feedbacks', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-[#00ADEF] transition-colors font-poppins font-medium py-3 text-left hover:bg-gray-50 px-2 rounded-lg"
                >
                  {item === 'work' ? 'Our Work' : item === 'contact' ? 'Contact Us' : item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('call')}
                className="bg-[#00ADEF] text-white font-poppins font-semibold px-6 py-3 rounded-full w-full mt-4 hover:shadow-xl transition-all duration-300"
              >
                BOOK A CALL
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
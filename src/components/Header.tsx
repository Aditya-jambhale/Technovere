
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/7737980a-d540-439e-aeb0-baa810486434.png" 
            alt="Technovere" 
            className="h-8 w-auto"
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-electric transition-colors font-poppins font-medium"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-gray-700 hover:text-electric transition-colors font-poppins font-medium"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('process')}
            className="text-gray-700 hover:text-electric transition-colors font-poppins font-medium"
          >
            Process
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-electric to-electric-light text-white font-poppins font-semibold px-8 py-2.5 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-lg border-t border-gray-100 md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-electric transition-colors font-poppins font-medium py-2 text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-electric transition-colors font-poppins font-medium py-2 text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-gray-700 hover:text-electric transition-colors font-poppins font-medium py-2 text-left"
              >
                Process
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-electric to-electric-light text-white font-poppins font-semibold px-8 py-2.5 rounded-full w-full mt-4"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

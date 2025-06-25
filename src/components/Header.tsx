
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/7737980a-d540-439e-aeb0-baa810486434.png" 
            alt="Technovere" 
            className="h-8 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-techno-blue transition-colors font-inter font-medium"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-gray-700 hover:text-techno-blue transition-colors font-inter font-medium"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('process')}
            className="text-gray-700 hover:text-techno-blue transition-colors font-inter font-medium"
          >
            Process
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-techno-blue to-techno-yellow text-white font-inter font-semibold px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
          >
            Book Discovery Call
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

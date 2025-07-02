import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
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

  useEffect(() => {
    // Prevent scroll jump on mobile on first load
    if (typeof window !== 'undefined' && window.innerWidth < 1280 && isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
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
    { id: 'services', label: 'Services' },
    { id: 'our-work', label: 'Our Work' },
    { id: 'testimonials', label: 'FeedBacks' },
    { id: 'Contact', label: 'Contact Us' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden">
      <div
        className={`transition-all duration-700 ease-out  rounded-xl mx-auto
          ${isScrolled
            ? 'w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] lg:max-w-6xl mt-2 sm:mt-3 px-3 sm:px-4 lg:px-6 backdrop-blur-xl bg-white/95 shadow-2xl border border-gray-200/50 rounded-xl sm:rounded-2xl'
            : 'w-full max-w-7xl px-3 sm:px-4 lg:px-6'
          }`}
      >
      <div className={`flex items-center rounded justify-between w-full min-w-0 transition-all duration-700 ease-out ${isScrolled ? 'py-3 shadow-md' : 'py-4'}`}>

          <div className="flex items-center gap-2 flex-shrink-0 overflow-hidden">
            <img
              src="/images/logomain.png"
              alt="Technovere Logo"
              className={`object-contain transition-all duration-300 ${isScrolled ? 'w-7 h-7 sm:w-8 sm:h-8' : 'w-8 h-8 sm:w-10 sm:h-10'}`}
            />
            <div className={`font-extrabold tracking-wide font-poppins leading-none whitespace-nowrap ${isScrolled ? 'text-lg sm:text-xl lg:text-2xl' : 'text-lg sm:text-xl lg:text-2xl xl:text-3xl'}`}>
           <span className="text-[#00AEEF]  font-semibold">TECHNO</span>
<span className="bg-gradient-to-r from-[#e3c400] to-[#f5d000] text-transparent bg-clip-text font-semibold">VERE</span>


            </div>
          </div>

          <nav className="hidden xl:flex items-center justify-center flex-1 mx-4 xl:mx-8 overflow-hidden">
            <div className="flex items-center space-x-4 xl:space-x-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 font-poppins font-medium hover:scale-105 relative group text-sm xl:text-base whitespace-nowrap ${
                    isScrolled ? 'text-gray-800 hover:text-[#00ADEF]' : 'text-white hover:text-[#00ADEF] drop-shadow-md'
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ADEF] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </nav>

          <div className="hidden xl:block flex-shrink-0">
            <a
              href="https://calendly.com/mohammadyusuf025/30min?month=2025-06"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={`text-black bg-[#FFEB3B] hover:bg-[#FDD835] font-poppins font-semibold px-4 xl:px-6 py-2.5 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm xl:text-base whitespace-nowrap ${
                  !isScrolled ? 'shadow-lg' : ''
                }`}
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-purple-700" />
                  BOOK A CALL
                </span>
              </Button>
            </a>
          </div>

          <div className="xl:hidden flex-shrink-0">
            <button
              className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-8 h-6">
                <Menu
                  className={`absolute inset-0 w-5 h-6 transition-all duration-300 ${
                    isScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'
                  } ${isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`}
                />
                <X
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'
                  } ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}`}
                />
              </div>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl shadow-xl xl:hidden">
            <div className="flex flex-col justify-between h-full py-6 px-4">
              <nav className="space-y-2">
                {navigationItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-800 hover:text-[#00ADEF] transition-all duration-300 font-poppins font-medium py-3 text-left hover:bg-gray-100 px-3 rounded-xl transform hover:translate-x-1 w-full text-lg"
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="pt-4">
                <Button
                  onClick={handleBookCall}
                  className="bg-[#00ADEF] hover:bg-[#0099CC] text-white font-poppins font-semibold px-6 py-3 rounded-full w-full hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    BOOK A CALL
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
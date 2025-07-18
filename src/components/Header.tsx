import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    checkMobile();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      const newIsMobile = window.innerWidth < 1280;
      setIsMobile(newIsMobile);

      if (!newIsMobile && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { id: 'hero-section', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'our-work', label: 'Our Work' },
    { id: 'testimonials', label: 'FeedBacks' },
    { id: 'Contact', label: 'Contact Us' },
  ];

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-3px); }
          60% { transform: translateY(-2px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .logo-animation {
          animation: ${isLoaded ? 'bounce 1s ease-out 0.5s' : 'none'};
        }

        .nav-item {
          animation: ${isLoaded ? 'fadeInUp 0.6s ease-out' : 'none'};
        }

        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }

        .floating-animation {
          animation: ${isScrolled ? 'none' : 'float 3s ease-in-out infinite'};
        }

        .mobile-menu-backdrop {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-30 w-full h-fit">
        <div
          className={`transition-all duration-700 ease-out mx-auto transform z-30
            ${isScrolled
              ? 'w-full max-w-[95%] sm:max-w-[92%] lg:max-w-6xl mt-2 px-3 sm:px-4 lg:px-6 backdrop-blur-xl bg-white shadow-2xl border border-gray-200/50 rounded-xl sm:rounded-2xl'
              : 'w-full max-w-7xl px-3 sm:px-4 lg:px-6'
            }
            ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
          style={{ animation: isLoaded ? 'slideDown 0.8s ease-out' : 'none' }}
        >
          <div className={`flex items-center justify-between w-full transition-all duration-700 ease-out ${isScrolled ? 'py-3' : 'py-4'}`}>
            <div className="flex items-center gap-2 flex-shrink-0 max-w-[90vw] overflow-hidden">
              <img
                src="/images/logofinal.png"
                alt="Technovere Logo"
                className={`object-contain transition-all duration-500 hover:scale-110 ${isScrolled ? 'w-48 h-10 sm:w-48 sm:h-10' : 'w-52 h-14 sm:w-52 sm:h-14'
                  }`}
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center justify-center flex-1 mx-4 xl:mx-8">
              <div className="flex items-center space-x-4 xl:space-x-6">
                {navigationItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-item transition-all duration-500 font-poppins font-medium hover:scale-105 relative group text-sm xl:text-base whitespace-nowrap transform hover:-translate-y-1 ${isScrolled ? 'text-gray-800 hover:text-[#1E3A8A]' : 'text-white hover:text-[#1E3A8A] drop-shadow-md'
                      }`}
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r  from-yellow-300 to-yellow-500
transition-all duration-500 group-hover:w-full rounded-full"></span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white opacity-30 transition-all duration-300 group-hover:w-full rounded-full delay-75"></span>
                  </button>
                ))}
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden xl:block flex-shrink-0">
              <a
                href="https://calendly.com/mohammadyusuf025/30min?month=2025-06"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className={`text-black bg-yellow-400 hover:bg-yellow-500 font-poppins font-semibold px-4 xl:px-6 py-2.5 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-500 text-sm xl:text-base whitespace-nowrap transform hover:-translate-y-1 hover:rotate-1 relative overflow-hidden ${!isScrolled ? 'shadow-lg' : ''
                    }`}
                  style={{
                    animation: isLoaded ? 'fadeInUp 0.8s ease-out 1.3s both' : 'none'
                  }}
                >
                  <span className="shimmer-effect absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="flex items-center gap-2 relative z-10">
                    <Phone className="w-4 h-4 text-[#1E3A8A] transition-transform duration-300 hover:rotate-12" />
                    BOOK A CALL
                  </span>
                </Button>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="xl:hidden flex-shrink-0 ">
              <button
                className={`p-2 bg-white  rounded-lg transition-all  backdrop-blur-sm hover:scale-110 active:scale-95 relative z-50 `}
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <div className="relative w-6 h-6 ">
                  <Menu
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 text-gray-800 ${isMobileMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}`}
                  />
                  <X
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 text-gray-800  ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-10 xl:hidden w-full" 
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsMobileMenuOpen(false);
            }
          }}
        >
          <div className="absolute inset-0 mobile-menu-backdrop bg-white/95 h-fit" style={{ borderRadius: "0 0 1rem 1rem"}}>
            <div className="flex flex-col pt-24 pb-6 px-4 space-y-4 overflow-y-auto">
              <nav className="flex-1 flex flex-col justify-center space-y-1">
                {navigationItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-800 hover:text-[#00ADEF] transition-all duration-500 font-poppins font-medium py-4 px-6 text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent rounded-2xl transform hover:translate-x-2 hover:scale-105 w-full text-xl relative overflow-hidden group"
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${index * 100}ms both`
                    }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#00ADEF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></span>
                  </button>
                ))}
              </nav>

              <div className="pt-6">
                <Button
                  onClick={handleBookCall}
                  className="bg-gradient-to-r from-[#00ADEF] to-[#0099CC] hover:from-[#0099CC] hover:to-[#00ADEF] text-white font-poppins font-semibold px-6 py-3 rounded-full w-full text-base sm:text-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out 0.6s both'
                  }}
                >
                  <span className="shimmer-effect absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="flex items-center justify-center gap-3 relative z-10">
                    <Phone className="w-5 h-5 transition-transform duration-300 hover:rotate-12" />
                    BOOK A CALL
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

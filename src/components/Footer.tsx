import { Phone, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import { useEffect, useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [isScrolled, setIsScrolled] = useState(false);
  const [showCTAs, setShowCTAs] = useState(false);

  const navigationItems = [
    { id: 'hero-section', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'our-work', label: 'Our Work' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'FeedBacks' },
    { id: 'Contact', label: 'Contact Us' }
  ];

  const services = [
    'Web Development',
    'App Development',
    'Shopify Development',
    'Website Maintenance',
    'Website Redesign'
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleCTAs = () => {
    setShowCTAs((prev) => !prev);
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="relative bg-[#1E3A8A] text-white py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Logo & Contact Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/images/footerimg2.png"
                alt="Technovere Logo"
                className="w-32 sm:w-40 h-auto object-contain"
              />
            </div>

            <p className="text-gray-300 font-inter leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Building premium websites that position you as an expert, build trust, and drive leads.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#1E3A8A]" />
                </div>
                <a href="tel:+919792347498" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  +91 9792347498
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#1E3A8A]" />
                </div>
                <a href="mailto:hr@technovere.com" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base break-all">
                  hr@technovere.com
                </a>
              </div>

              {/* <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="w-4 h-4 text-white" />
                </div>
                <a 
                  href="https://wa.me/+919792347498" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  WhatsApp
                </a>
              </div> */}
            </div>
          </div>

          {/* Services List */}
          <div className="lg:col-span-1">
            <h4 className="font-sora font-semibold text-lg sm:text-xl mb-4 lg:mb-6 text-white">Services</h4>
            <ul className="space-y-2 lg:space-y-3 font-inter text-gray-300">
              {services.map((service, index) => (
                <li key={index} className="hover:text-white transition-colors cursor-pointer text-sm sm:text-base">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Navigation */}
          <div className="lg:col-span-1">
            <h4 className="font-sora font-semibold text-lg sm:text-xl mb-4 lg:mb-6 text-white">Company</h4>
            <ul className="space-y-2 lg:space-y-3 font-inter text-gray-300">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left text-sm sm:text-base"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="font-sora font-semibold text-lg sm:text-xl mb-4 lg:mb-6 text-white">Stay Connected</h4>
            <p className="text-gray-300 font-inter mb-4 text-sm sm:text-base">
              Get updates on our latest projects and tech insights.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ADEF] text-sm sm:text-base"
              />
              <button className="px-6 py-2 bg-yellow-400 text-white font-semibold rounded-md hover:bg-blue-800 transition-colors text-sm sm:text-[#1E3A8A]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-400 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-inter text-sm sm:text-base text-center sm:text-left">
              © {currentYear} Technovere. All rights reserved. Built with precision and passion.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Floating CTA */}
      {/*{isScrolled && (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-center gap-2 sm:gap-3">
       
          {showCTAs && (
            <div className="flex flex-col items-center gap-2 sm:gap-3 mb-2 animate-slide-up">
              <a
                href="https://wa.me/+919792347498"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-transform hover:scale-110"
                aria-label="Contact via WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.fiverr.com/your-fiverr-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition-transform hover:scale-110"
                aria-label="Hire us on Fiverr"
              >
                <SiFiverr className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          )}
          
         
          <div onClick={toggleCTAs} className="cursor-pointer select-none relative">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
           
              <svg className="w-full h-full animate-spin-slow absolute inset-0" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="circle"
                    d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  />
                </defs>
                <text className="text-xl sm:text-sm fill-black font-medium">
                  <textPath href="#circle" startOffset="0%">
                    CONTACT US FOR MORE INFO 💡
                  </textPath>
                </text>
              </svg>
              
              
              <div className="bg-yellow-400 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 relative z-10">
                <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-bold">💬</span>
                </div>
              </div>
            </div>
          </div>
        </div>*/}
      )}

      <style >{`
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0px);
            opacity: 1;
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-slide-up {
          animation: slideUp 0.3s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        /* Mobile optimization */
        @media (max-width: 640px) {
          .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
          }
        }
        
        /* Ensure proper spacing on small screens */
        @media (max-width: 480px) {
          .fixed {
            bottom: 1rem !important;
            right: 1rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
import { Phone, Mail, Linkedin, Instagram, Globe2Icon } from 'lucide-react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import { useEffect, useState } from 'react';
import { Globe } from './magicui/globe';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 text-center sm:text-left">
          {/* Logo & Contact Info */}
          <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start">
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
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#1E3A8A]" />
                </div>
                <a href="tel:+919792347498" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  +91 9792347498
                </a>
              </div>

              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#1E3A8A]" />
                </div>
                <a href="mailto:hr@technovere.com" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base break-all">
                  hr@technovere.com
                </a>
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="lg:col-span-1 flex flex-col items-center sm:items-start">
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
          <div className="lg:col-span-1 flex flex-col items-center sm:items-start">
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

          {/* Social Links */}
          <div className="lg:col-span-1 flex flex-col items-center sm:items-start">
            <h4 className="font-sora font-semibold text-lg sm:text-xl mb-4 lg:mb-6 text-white">Stay Connected</h4>
            <p className="text-gray-300 font-inter mb-4 text-sm sm:text-base text-center sm:text-left">
              Follow us for updates and behind-the-scenes content.
            </p>
            <div className="flex gap-4 justify-center sm:justify-start">
              <a
                href="https://www.linkedin.com/company/technovere-solution/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full hover:bg-yellow-400 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 text-[#1E3A8A]" />
              </a>
              <a
                href="https://www.instagram.com/technovere/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full hover:bg-yellow-400 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5 text-[#1E3A8A]" />
              </a>
              <a
                href="https://yourportfolio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full hover:bg-yellow-400 transition-colors duration-300"
              >
                <Globe2Icon className="w-5 h-5 text-[#1E3A8A]" />
              </a>
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
      {isScrolled && (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-center gap-2 sm:gap-3">
          {showCTAs && (
            <div className="flex flex-col items-center gap-2 sm:gap-3 mb-2 animate-slide-up">
              <a
                href="https://wa.me/+919792347498"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-md transition-transform hover:scale-105"
                aria-label="Contact via WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/digitallyusuf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-md transition-transform hover:scale-105"
                aria-label="Connect on LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          )}

          <button
            onClick={toggleCTAs}
            className="bg-yellow-400 text-black p-3 rounded-full shadow-md transition-all duration-300 hover:scale-105 focus:outline-none"
            aria-label="Toggle contact buttons"
          >
            💬
          </button>
        </div>
      )}

      <style>{`
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

        @media (max-width: 640px) {
          .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
          }
        }

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

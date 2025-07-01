import { Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navigationItems = [
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

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 transition-all duration-300 mb-4">
              <img
                src="/images/logomain.png"
                alt="Technovere Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-all duration-300"
              />
              <div className="font-extrabold tracking-wide font-poppins leading-none transition-all duration-300 text-xl sm:text-2xl lg:text-3xl">
                <span className="text-[#00ADEF]">TECHNO</span>
                <span className="bg-gradient-to-r from-[#FFE500] to-[#FFF7A0] text-transparent bg-clip-text">VERE</span>
              </div>
            </div>
            <p className="text-gray-300 font-inter leading-relaxed mb-6 text-sm sm:text-base">
              Building premium websites that position you as an expert, build trust, and drive leads.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#00ADEF] to-[#FFE500] rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  +91  9792347498
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#00ADEF] to-[#FFE500] rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a href="mailto:hr@technovere.com" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                    hr@technovere.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <a 
                  href="https://wa.me/+919792347498" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          {/* Services */}
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
          
          {/* Company Pages */}
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
          
          {/* Newsletter/CTA */}
          <div className="lg:col-span-1">
            <h4 className="font-sora font-semibold text-lg sm:text-xl mb-4 lg:mb-6 text-white">Stay Connected</h4>
            <p className="text-gray-300 font-inter mb-4 text-sm sm:text-base">
              Get updates on our latest projects and tech insights.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ADEF] text-sm sm:text-base"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-[#00ADEF] to-[#FFE500] text-gray-900 font-semibold rounded-md hover:opacity-90 transition-opacity text-sm sm:text-base whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 lg:mt-12 pt-6 lg:pt-8">
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
    </footer>
  );
};

export default Footer;
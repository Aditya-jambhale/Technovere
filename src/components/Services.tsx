import { useEffect, useRef, useState } from 'react';
import { Code, Smartphone, ShoppingCart, Wrench, Palette, Server, X, Check } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  const services = [
    {
      title: "Custom Web Development",
      description: "Blazing-fast, SEO-optimized websites built to convert across all devices",
      icon: Code,
      color: "from-blue-400 to-purple-500",
      details: [
        "PHP Laravel High-Quality Coding Website with Fully Responsive",
        "WordPress Responsive and SEO Friendly Website", 
        "We do Unlimited Revision till 100% Satisfaction",
        "Easy to use Admin Panel",
        "Uploading and Configuring your final Website to your Hosting"
      ]
    },
    {
      title: "Mobile App Development", 
      description: "Clean, intuitive apps for Android & iOS – tailored for product-market fit",
      icon: Smartphone,
      color: "from-purple-400 to-pink-500",
      details: [
        "Custom Application Development with UI/UX Design expertise",
        "API Integration & Firebase Integration",
        "In-App Purchase, Fitness, Ecommerce, and Calling Apps",
        "Quiz App, Delivery App, Travel Agency App, Food Delivery App",
        "Google Map Integration, Grocery & Store Apps",
        "Website to Android App conversion",
        "Member Login, Custom App Pages, Appointments/Forms",
        "Password Protected features with technical support",
        "Fast response with 100% client satisfaction guarantee"
      ]
    },
    {
      title: "Shopify eCommerce Stores",
      description: "Conversion-focused eCom storefronts with optimized checkout flows",
      icon: ShoppingCart,
      color: "from-green-400 to-blue-500",
      details: [
        "Custom Shopify theme development",
        "Conversion-optimized checkout processes",
        "Product catalog setup and management",
        "Payment gateway integration",
        "Inventory management system",
        "SEO optimization for better visibility",
        "Mobile-responsive design",
        "Third-party app integrations"
      ]
    },
    {
      title: "Custom Software / SaaS",
      description: "Secure, scalable platforms to solve business challenges or power products",
      icon: Server,
      color: "from-yellow-400 to-orange-500",
      details: [
        "Custom software architecture and development",
        "Cloud-based SaaS solutions",
        "Database design and optimization",
        "API development and integration",
        "User authentication and authorization",
        "Scalable infrastructure setup",
        "Security implementation and testing",
        "Performance monitoring and optimization"
      ]
    },
    {
      title: "Website Redesign & Optimization",
      description: "Make your current site faster, clearer, and more visually aligned with your brand",
      icon: Palette,
      color: "from-pink-400 to-red-500",
      details: [
        "Complete visual redesign with modern aesthetics",
        "User experience (UX) optimization",
        "Performance and speed enhancements",
        "Mobile responsiveness improvements",
        "SEO optimization and best practices",
        "Content restructuring and optimization",
        "Brand alignment and consistency",
        "Conversion rate optimization"
      ]
    },
    {
      title: "Website Maintenance & Support",
      description: "Continuous updates, backups, blog uploads, tech fixes & growth strategy",
      icon: Wrench,
      color: "from-indigo-400 to-purple-500",
      details: [
        "Security updates & regular backups",
        "Speed optimization and performance monitoring",
        "Blog uploads & content updates",
        "Technical troubleshooting and bug fixes",
        "Strategic consultations for growth",
        "We keep your site running smoothly, so you can focus on what matters most"
      ]
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions to elevate your brand and drive measurable growth
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`group transition-all duration-800 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-full">
                    {/* Glassmorphism card */}
                    <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 h-full transition-all duration-500 group-hover:bg-white/15 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20 group-hover:border-white/30">
                      
                      {/* Gradient glow effect on hover */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                      
                      {/* Icon */}
                      <div className="relative mb-6">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                          <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                            <IconComponent 
                              className="w-8 h-8 text-white group-hover:animate-pulse" 
                            />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative">
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>

                      {/* Optional CTA button */}
                      <div className="relative mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <button 
                          onClick={() => openModal(service)}
                          className={`text-sm font-semibold bg-gradient-to-r ${service.color} text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200`}
                        >
                          Learn More
                        </button>
                      </div>

                      {/* Floating animation */}
                      <div className="absolute inset-0 rounded-2xl pointer-events-none">
                        <div className="absolute -top-1 -left-1 w-4 h-4 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-16 transition-all duration-800 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500 text-white font-bold py-4 px-8 rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-white/20">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Modal Header */}
            <div className="mb-6">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${selectedService.color} p-0.5 mb-4`}>
                <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                  <selectedService.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">
                {selectedService.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {selectedService.description}
              </p>
            </div>
            
            {/* Service Details */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">What we provide:</h4>
              <div className="space-y-3">
                {selectedService.details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${selectedService.color} p-0.5 mt-0.5 flex-shrink-0`}>
                      <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-white/20">
              <div className="flex gap-4">
                {/* <button 
                  className={`flex-1 bg-gradient-to-r ${selectedService.color} text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200`}
                >
                  Get Quote
                </button> */}
                <button 
                  onClick={closeModal}
                  className="flex-1 bg-white/10 backdrop-blur-lg text-white font-semibold py-2 px-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;
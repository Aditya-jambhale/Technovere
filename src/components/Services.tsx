import { useEffect, useRef, useState } from 'react';
import { Code, Smartphone, ShoppingCart, Wrench, Server, X, Check, User } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(true);
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
      { threshold: 0.1 }
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
      title: "Website Redesign & Maintenance",
      description: "Complete redesign, optimization, and ongoing support to keep your site performing at its best",
      icon: Wrench,
      details: [
        "Complete visual redesign with modern aesthetics",
        "User experience (UX) optimization",
        "Performance and speed enhancements",
        "Mobile responsiveness improvements",
        "SEO optimization and best practices",
        "Content restructuring and optimization",
        "Brand alignment and consistency",
        "Conversion rate optimization",
        "Security updates & regular backups",
        "Speed optimization and performance monitoring",
        "Blog uploads & content updates",
        "Technical troubleshooting and bug fixes",
        "Strategic consultations for growth",
        "Continuous support to keep your site running smoothly"
      ]
    },
    {
      title: "Personal Branding",
      description: "Build a powerful personal brand that attracts opportunities and amplifies your influence",
      icon: User,
      details: [
        "Professional portfolio website development",
        "Personal brand strategy and positioning",
        "Social media presence optimization",
        "Content strategy and blog setup",
        "Professional photography guidance",
        "LinkedIn and professional network optimization",
        "Personal logo and visual identity design",
        "Thought leadership content creation",
        "Speaking and networking opportunity strategies",
        "Online reputation management"
      ]
    }
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 overflow-hidden bg-white relative"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#1E3A8A] mb-6">
              Our Services
            </h2>
            <p className="text-lg text-black/60 font-semibold max-w-3xl mx-auto">
              Tailored web solutions that bring your brand to life and drive meaningful results.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`group transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-full">
                    {/* Card with border */}
                    <div className="relative bg-white p-8 rounded-2xl border-2 border-gray-200 h-full transition-all duration-500 group-hover:bg-gray-50 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-yellow-400">

                      {/* Icon */}
                      <div className="relative mb-6">
                        <div className="w-16 h-16 rounded-xl bg-blue-900 p-3 group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-300 shadow-lg">
                          <IconComponent
                            className="w-full h-full text-white group-hover:text-black"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative">
                        <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-black transition-all duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>

                      {/* CTA button */}
                      <div className="relative mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <button
                          onClick={() => openModal(service)}
                          className="text-sm font-semibold bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
          <div className="relative bg-blue-900 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-white/20">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="w-16 h-16 rounded-xl bg-yellow-400 p-3 mb-4 shadow-lg">
                <selectedService.icon className="w-full h-full text-black" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">
                {selectedService.title}
              </h3>
              <p className="text-white/80 text-lg">
                {selectedService.description}
              </p>
            </div>

            {/* Service Details */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">What we provide:</h4>
              <div className="space-y-3">
                {selectedService.details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-yellow-400 p-0.5 mt-0.5 flex-shrink-0">
                      <div className="w-full h-full bg-blue-900 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-white/20">
              <div className="flex gap-4">
                <button
                  onClick={closeModal}
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg transition-all duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(130%+1.3px)] h-[60px]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39
              -57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8
                C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#1E3A8A"

          ></path>
        </svg>
      </div> */}
    </section>
  );
};

export default Services;
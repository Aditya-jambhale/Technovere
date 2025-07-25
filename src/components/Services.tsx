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
    description:
      "Fast, responsive websites built with Laravel or WordPress — SEO-ready and optimized for performance and conversion.",
    icon: Code,
    details: [
      "Laravel & WordPress development",
      "Fully responsive and SEO-friendly",
      "Admin panel & hosting setup"
    ]
  },
  {
    title: "Mobile App Development",
    description:
      "Custom Android & iOS apps with intuitive UI/UX, real-time features, and seamless performance across devices.",
    icon: Smartphone,
    details: [
      "Modern UI/UX design",
      "API & Firebase integration",
      "Fitness, eCommerce, travel & more"
    ]
  },
  {
    title: "Shopify eCommerce Stores",
    description:
      "Visually appealing, mobile-optimized Shopify stores with custom designs, smooth checkouts, and product integration.",
    icon: ShoppingCart,
    details: [
      "Custom themes & product catalog",
      "Optimized checkout & SEO",
      "Payment and inventory setup"
    ]
  },
  {
    title: "Custom Software / SaaS",
    description:
      "Scalable, cloud-based software and SaaS platforms tailored to your business — secure, efficient, and user-ready.",
    icon: Server,
    details: [
      "Custom software architecture",
      "Cloud hosting & APIs",
      "Security & performance built-in"
    ]
  },
  {
    title: "Website Redesign & Maintenance",
    description:
      "Transform your site with a modern design, improved speed, SEO, and continuous support for peak performance.",
    icon: Wrench,
    details: [
      "Redesign with UX focus",
      "SEO, speed & mobile fixes",
      "Ongoing support & updates"
    ]
  },
  {
    title: "Personal Branding",
    description:
      "Build a standout online presence with a personal site, social media strategy, and content that grows your influence.",
    icon: User,
    details: [
      "Portfolio website creation",
      "Brand strategy & identity",
      "Social profile & content setup"
    ]
  }
];


  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 overflow-hidden bg-white relative"
    >
      <div className="container mx-auto px-4 relative ">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`group transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-full">
                    {/* Card container - Fixed width changes */}
                    <div className="relative bg-white p-6 md:p-8 rounded-2xl border-2 border-gray-200 h-full min-h-[320px] md:min-h-[360px] flex flex-col justify-between transition-all duration-300 group-hover:bg-gray-50 group-hover:shadow-2xl group-hover:border-yellow-400 group-hover:-translate-y-2">

                      {/* Top section: Icon + Content */}
                      <div className="flex-1">
                        {/* Icon */}
                        <div className="mb-4 md:mb-6">
                          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-blue-900 p-2.5 md:p-3 group-hover:bg-yellow-400 transition-all duration-300 shadow-lg transform group-hover:scale-105">
                            <IconComponent className="w-full h-full text-white group-hover:text-black transition-colors duration-300" />
                          </div>
                        </div>

                        {/* Title + Description */}
                        <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4 group-hover:text-black transition-colors duration-300 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>

                      {/* Button at bottom */}
                      <div className="mt-2 md:mt-2 pt-2">
                        <button
                          onClick={() => openModal(service)}
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0
                          text-xs md:text-sm font-semibold bg-yellow-400 text-black px-3 md:px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 hover:shadow-lg active:scale-95"
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
          <div className="relative bg-blue-900 rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-white/20">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-yellow-400 p-2.5 md:p-3 mb-4 shadow-lg">
                <selectedService.icon className="w-full h-full text-black" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {selectedService.title}
              </h3>
              <p className="text-white/80 text-base md:text-lg">
                {selectedService.description}
              </p>
            </div>

            {/* Service Details */}
            <div className="space-y-4">
              <h4 className="text-lg md:text-xl font-semibold text-white mb-4">What we provide:</h4>
              <div className="space-y-3">
                {selectedService.details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-yellow-400 p-0.5 mt-0.5 flex-shrink-0">
                      <div className="w-full h-full bg-blue-900 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-white/90 leading-relaxed">{detail}</p>
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
    </section>
  );
};

export default Services;
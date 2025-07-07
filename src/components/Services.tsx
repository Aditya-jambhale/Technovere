import { useEffect, useRef, useState } from 'react';
import {
  Code, Smartphone, ShoppingCart, Wrench,
  Server, X, Check, User
} from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
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
      if (e.key === 'Escape') closeModal();
    };
    if (isModalOpen) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
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
      className="py-20 overflow-hidden bg-[#1E3A8A] relative"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-white mb-6">Our <span className='text-yellow-400'>Services</span></h2>
            {/* <p className="text-lg text-white/60 font-bold max-w-3xl mx-auto">
              Tailored web solutions that bring your brand to life and drive meaningful results.
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-full">
                    <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl hover:border-[#facc15] transition-all duration-300 h-full">
                      <div className="mb-6">
                        <div className="w-16 h-16 rounded-xl bg-[#facc15] flex items-center justify-center shadow-md">
                          <IconComponent className="w-8 h-8 text-[#1E3A8A]" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                      <p className="text-gray-700">{service.description}</p>
                      <div className="mt-6">
                        <button
                          onClick={() => openModal(service)}
                          className="text-sm font-semibold bg-[#facc15] text-[#1E3A8A] px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
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
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-gray-200">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-black">
              <X className="w-6 h-6" />
            </button>
            <div className="mb-6">
              <div className="w-16 h-16 rounded-xl bg-[#facc15] flex items-center justify-center mb-4 shadow-md">
                <selectedService.icon className="w-8 h-8 text-[#1E3A8A]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">{selectedService.title}</h3>
              <p className="text-gray-700 text-lg">{selectedService.description}</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">What we provide:</h4>
              <div className="space-y-3">
                {selectedService.details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-[#facc15] flex items-center justify-center mt-1">
                      <Check className="w-3 h-3 text-[#1E3A8A]" />
                    </div>
                    <p className="text-gray-700">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-200">
              <button
                onClick={closeModal}
                className="w-full bg-[#1E3A8A] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;

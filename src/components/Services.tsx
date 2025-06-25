
import { useEffect, useRef, useState } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies, optimized for performance and conversion.",
      icon: "🌐"
    },
    {
      title: "App Development",
      description: "Mobile and web applications that enhance user experience and drive engagement.",
      icon: "📱"
    },
    {
      title: "Shopify Development",
      description: "E-commerce solutions that convert visitors into customers and scale your business.",
      icon: "🛒"
    },
    {
      title: "Website Maintenance",
      description: "Ongoing support and updates to keep your website secure, fast, and current.",
      icon: "🔧"
    },
    {
      title: "Website Redesign",
      description: "Transform your existing website into a modern, high-converting digital asset.",
      icon: "🎨"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-5xl font-sora font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-techno-blue to-techno-yellow bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Comprehensive digital solutions to elevate your brand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`transition-all duration-800 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-techno-blue/20 h-full">
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-sora font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-inter leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

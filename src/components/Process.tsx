
import { useEffect, useRef, useState } from 'react';

const Process = () => {
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

  const steps = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into your brand, goals, and target audience to understand what makes you unique.",
      icon: "🔍"
    },
    {
      step: "02",
      title: "Roadmap",
      description: "We create a strategic plan that aligns your brand story with conversion-focused design.",
      icon: "🗺️"
    },
    {
      step: "03",
      title: "Design",
      description: "We craft a premium website that positions you as an expert and builds trust with your audience.",
      icon: "🎨"
    },
    {
      step: "04",
      title: "Launch",
      description: "We deploy your website with full optimization and provide ongoing support for your success.",
      icon: "🚀"
    }
  ];

  return (
    <section id="process" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-5xl font-sora font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-techno-blue to-techno-yellow bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`transition-all duration-800 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-techno-blue/20 relative h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-techno-blue to-techno-yellow rounded-full flex items-center justify-center">
                    <span className="text-white font-bold font-sora">{step.step}</span>
                  </div>
                  
                  <div className="text-4xl mb-6 mt-4">{step.icon}</div>
                  <h3 className="text-xl font-sora font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-inter leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Process Flow Line */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-techno-blue to-techno-yellow transform -translate-y-1/2 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

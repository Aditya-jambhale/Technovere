import { useEffect, useRef, useState } from 'react';
import { Search, Map, Palette, Rocket } from 'lucide-react';

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate steps in sequence
          steps.forEach((_, index) => {
            setTimeout(() => {
              setActiveStep(index);
            }, index * 300);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We begin by listening. Deep-dive into your goals, audience, and vision to understand what makes you unique.",
      icon: Search,
      subtitle: "We begin by listening"
    },
    {
      step: "02",
      title: "Strategic Roadmap",
      description: "Clarity comes before creation. Site structure, brand messaging, and visual direction that aligns with your goals.",
      icon: Map,
      subtitle: "Clarity comes before creation"
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Every pixel is intentional. Crafting your brand's digital presence with conversion-focused design.",
      icon: Palette,
      subtitle: "Every pixel is intentional"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We're with you beyond launch. Technical handoff plus optional ongoing growth and optimization.",
      icon: Rocket,
      subtitle: "We're with you beyond launch"
    }
  ];

  const Arrow = ({ index, isActive }) => (
    <div className="hidden lg:flex items-center justify-center flex-1 px-4">
      <svg 
        width="100" 
        height="40" 
        viewBox="0 0 100 40" 
        className={`transition-all duration-500 delay-${index * 300}`}
      >
        <defs>
          <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        <path
          d="M10 20 Q50 10 80 20"
          stroke={`url(#gradient-${index})`}
          strokeWidth="2"
          fill="none"
          strokeDasharray="70"
          strokeDashoffset={isActive ? "0" : "70"}
          className="transition-all duration-700 ease-out"
        />
        <polygon
          points="80,20 85,15 90,20 85,25"
          fill={isActive ? "#3B82F6" : "transparent"}
          className="transition-all duration-300"
        />
      </svg>
    </div>
  );

  const MobileArrow = ({ index, isActive }) => (
    <div className="lg:hidden flex justify-center py-4">
      <svg 
        width="40" 
        height="60" 
        viewBox="0 0 40 60" 
        className={`transition-all duration-500 delay-${index * 300}`}
      >
        <defs>
          <linearGradient id={`mobile-gradient-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        <path
          d="M20 10 Q30 30 20 50"
          stroke={`url(#mobile-gradient-${index})`}
          strokeWidth="2"
          fill="none"
          strokeDasharray="50"
          strokeDashoffset={isActive ? "0" : "50"}
          className="transition-all duration-700 ease-out"
        />
        <polygon
          points="20,50 15,45 20,55 25,45"
          fill={isActive ? "#3B82F6" : "transparent"}
          className="transition-all duration-300"
        />
      </svg>
    </div>
  );

  return (
    <section 
      id="process" 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-yellow-500 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven methodology that delivers results through strategic thinking and flawless execution
            </p>
          </div>

          {/* Desktop Horizontal Layout */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center flex-1">
                  {/* Step Card */}
                  <div 
                    className={`group transition-all duration-800 delay-${index * 200} ${
                      isVisible && activeStep >= index 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-10 scale-95'
                    }`}
                  >
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-blue-300/50 relative max-w-xs group-hover:scale-105">
                      {/* Step Number Badge */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-sm">{step.step}</span>
                      </div>
                      
                      {/* Icon */}
                      <div className="mb-6 mt-4">
                        <step.icon 
                          className="w-10 h-10 text-blue-600 group-hover:text-violet-600 transition-colors duration-300 group-hover:scale-110 transform"
                        />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-blue-600 font-medium mb-3 italic">
                        "{step.subtitle}"
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow (except for last item) */}
                  {index < steps.length - 1 && (
                    <Arrow index={index} isActive={isVisible && activeStep > index} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Vertical Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index}>
                <div 
                  className={`transition-all duration-800 delay-${index * 200} ${
                    isVisible && activeStep >= index 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-10'
                  }`}
                >
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200/50 relative">
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                    
                    <div className="flex items-start space-x-4 mt-2">
                      {/* Icon */}
                      <div className="flex-shrink-0 mt-1">
                        <step.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm text-blue-600 font-medium mb-2 italic">
                          "{step.subtitle}"
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <MobileArrow index={index} isActive={isVisible && activeStep > index} />
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className={`text-center mt-16 transition-all duration-800 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Brand?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Let's start with a discovery call to understand your vision and explore how we can bring it to life.
              </p>
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
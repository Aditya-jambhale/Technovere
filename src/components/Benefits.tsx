
import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

const Benefits = () => {
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

  const benefits = [
    "Custom website design built on personal brand positioning",
    "Clear messaging that connects with your ideal audience",
    "Design psychology for high-trust service providers",
    "Mobile-first, SEO-optimized, blazing fast",
    "Story-driven layout that builds emotional authority",
    "Tech + strategy + content all handled in one place"
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-5xl font-sora font-bold text-gray-900 mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-techno-blue to-techno-yellow bg-clip-text text-transparent">
                Technovere
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Built with Brand Angle & Conversion Psychology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`transition-all duration-800 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-gradient-to-b from-techno-blue to-techno-yellow">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-techno-blue to-techno-yellow rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg font-inter text-gray-700 leading-relaxed">
                    {benefit}
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

export default Benefits;

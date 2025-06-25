
import { useEffect, useRef, useState } from 'react';

const Problem = () => {
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

  const problems = [
    "Their website looks outdated or templated",
    "Their story isn't clearly told",
    "Their expertise isn't positioned right"
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-5xl font-sora font-bold text-gray-900 mb-6">
              You've built credibility offline — but your{' '}
              <span className="text-techno-red">online presence doesn't show it</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 font-inter">
              Most personal brands lose clients because:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className={`transition-all duration-800 delay-${(index + 1) * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-techno-red">
                  <p className="text-lg font-inter text-gray-700">{problem}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`transition-all duration-800 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-techno-blue/10 to-techno-yellow/10 p-8 rounded-2xl">
              <p className="text-2xl font-sora font-semibold text-gray-900 mb-4">
                You're not just selling a service — you're selling you.
              </p>
              <p className="text-lg font-inter text-gray-700">
                We design your website like that matters. Because it does.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

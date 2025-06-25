
import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, TrendingDown, Eye } from 'lucide-react';

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
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Outdated Design",
      description: "Their website looks templated and unprofessional"
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Poor Messaging",
      description: "Their story isn't clearly told or compelling"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Wrong Positioning",
      description: "Their expertise isn't positioned to convert visitors"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-electric to-cyber rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-accent-purple to-neon rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 bg-red-50 px-6 py-3 rounded-full border border-red-200 mb-6">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="text-red-600 font-poppins font-semibold">The Problem</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-space font-bold text-dark mb-8 leading-tight">
              You've built credibility offline — but your{' '}
              <span className="text-red-500">online presence doesn't show it</span>
            </h2>
            
            <p className="text-xl text-gray-600 font-poppins max-w-3xl mx-auto">
              Most personal brands lose potential clients because of these critical issues:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className={`transition-all duration-800 delay-${(index + 1) * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 group h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-red-500">
                      {problem.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-space font-bold text-dark mb-4">{problem.title}</h3>
                  <p className="text-gray-600 font-poppins leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`transition-all duration-800 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-electric/5 to-cyber/5 p-12 rounded-3xl border border-electric/10 text-center">
              <h3 className="text-3xl font-space font-bold text-dark mb-6">
                You're not just selling a service — you're selling you.
              </h3>
              <p className="text-xl font-poppins text-gray-700 max-w-3xl mx-auto">
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


import { useEffect, useRef, useState } from 'react';
import { Lightbulb, Target, Users, TrendingUp } from 'lucide-react';

const Solution = () => {
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

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      text: "Stand out from competition"
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Build instant credibility"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "Convert visitors to clients"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-cyber to-accent-teal rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-tr from-electric to-accent-purple rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyber/10 to-electric/10 px-6 py-3 rounded-full border border-cyber/20 mb-6">
              <Lightbulb className="w-5 h-5 text-cyber" />
              <span className="text-cyber font-poppins font-semibold">The Solution</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-space font-bold text-dark mb-8 leading-tight">
              We blend{' '}
              <span className="bg-gradient-to-r from-electric via-cyber to-accent-purple bg-clip-text text-transparent">
                premium web design
              </span>{' '}
              with strategic brand positioning
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left - Features */}
            <div className={`transition-all duration-800 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-electric to-cyber rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <span className="text-xl font-poppins font-semibold text-dark">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Main content */}
            <div className={`transition-all duration-800 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="bg-gradient-to-br from-electric/5 to-cyber/5 p-10 rounded-3xl border border-electric/10">
                <h3 className="text-3xl font-space font-bold text-dark mb-6">
                  Your website becomes your best sales tool
                </h3>
                <p className="text-lg font-poppins text-gray-700 leading-relaxed mb-8">
                  Designed to build trust, authority, and connection with your ideal audience through 
                  strategic positioning and conversion-focused design.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-space font-bold text-electric mb-1">500+</div>
                    <div className="text-sm font-poppins text-gray-600">Projects Delivered</div>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-space font-bold text-cyber mb-1">Global</div>
                    <div className="text-sm font-poppins text-gray-600">Client Reach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-800 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center bg-gradient-to-r from-gray-50 to-blue-50/30 p-12 rounded-3xl">
              <p className="text-xl font-poppins text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Whether you're a <span className="font-semibold text-electric">coach scaling offers</span>, 
                a <span className="font-semibold text-cyber">doctor entering private practice</span>, 
                a <span className="font-semibold text-accent-purple">founder raising your profile</span>, or 
                <span className="font-semibold text-accent-teal"> brands building their online presence</span> — 
                we'll bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;

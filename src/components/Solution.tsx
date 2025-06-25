
import { useEffect, useRef, useState } from 'react';

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

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-5xl font-sora font-bold text-gray-900 mb-8">
              We blend{' '}
              <span className="bg-gradient-to-r from-techno-blue to-techno-yellow bg-clip-text text-transparent">
                premium web design
              </span>{' '}
              with personal brand strategy
            </h2>
          </div>

          <div className={`transition-all duration-800 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-xl text-gray-600 mb-12 font-inter leading-relaxed">
              — to help you stand out, look credible, and convert.
            </p>

            <div className="bg-gradient-to-br from-techno-blue/5 to-techno-yellow/5 p-8 md:p-12 rounded-3xl mb-12">
              <p className="text-2xl font-sora font-semibold text-gray-900 mb-6">
                Your website becomes your best sales tool
              </p>
              <p className="text-lg font-inter text-gray-700">
                — designed to build trust, authority, and connection with your audience.
              </p>
            </div>
          </div>

          <div className={`transition-all duration-800 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-lg font-inter text-gray-700 leading-relaxed">
              Whether you're a <span className="font-semibold text-techno-blue">coach scaling offers</span>, 
              a <span className="font-semibold text-techno-blue">doctor entering private practice</span>, 
              a <span className="font-semibold text-techno-blue">founder raising your profile</span> or 
              <span className="font-semibold text-techno-blue"> brands building their online presence</span> — 
              we'll bring your brand to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;

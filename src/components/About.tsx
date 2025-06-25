
import { useEffect, useRef, useState } from 'react';

const About = () => {
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

  const achievements = [
    "Strategy-First Design - Every project starts with clarity: What makes you unique? Who do you serve?",
    "Built for Global Professionals - 500+ projects delivered to clients in the U.S., U.K., U.A.E, and beyond",
    "Full-Service, In-House Execution - From website design to brand content, everything is done by our dedicated team",
    "Proven Results, Real Impact - We've helped TEDx speakers, Forbes members, medical professionals, and scaling coaches"
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-block bg-gradient-to-r from-techno-blue to-techno-yellow p-1 rounded-2xl mb-6">
              <div className="bg-white px-6 py-2 rounded-xl">
                <span className="text-2xl">💡</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-sora font-bold text-gray-900 mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-techno-blue to-techno-yellow bg-clip-text text-transparent">
                Technovere
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-inter mb-8">
              More Than a Web Design Agency — We Build Authority Online.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className={`transition-all duration-800 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <p className="text-lg font-inter text-gray-700 leading-relaxed mb-6">
                At Technovere, we don't just build websites — we design digital identities.
              </p>
              <p className="text-lg font-inter text-gray-700 leading-relaxed mb-6">
                Founded by Yusuf, a software engineer turned creative entrepreneur, Technovere was born from a mission:
              </p>
              <div className="bg-gradient-to-r from-techno-blue/10 to-techno-yellow/10 p-6 rounded-2xl">
                <p className="text-xl font-sora font-semibold text-gray-900">
                  To help modern brands grow through clarity, creativity, and conversion-focused design.
                </p>
              </div>
            </div>

            <div className={`transition-all duration-800 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="bg-gradient-to-br from-techno-blue/5 to-techno-yellow/5 p-8 rounded-3xl">
                <p className="text-lg font-inter text-gray-700 leading-relaxed">
                  Whether you're a solo creator, consultant, startup founder, or scaling service provider — 
                  we combine cutting-edge tech and storytelling to help you show up like the brand you are.
                </p>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-800 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl md:text-3xl font-sora font-bold text-gray-900 mb-8 text-center">
              Why Technovere?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-800 delay-${800 + index * 100} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-gradient-to-b from-techno-blue to-techno-yellow h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-techno-blue to-techno-yellow rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <p className="text-lg font-inter text-gray-700 leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

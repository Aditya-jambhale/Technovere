
import { useEffect, useRef, useState } from 'react';

const Founder = () => {
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

  const certifications = [
    "B.Tech in Computer Science — Specialization in Web & Cybersecurity",
    "Certified in Object-Oriented Programming (Java)",
    "Front-End Web UI Frameworks – HKUST",
    "Front-End Development – University of Michigan",
    "Digital Marketing & Strategy – IIT Delhi",
    "Meta Ads & Performance Marketing – Meta",
    "Plus 15+ other credentials in UI/UX, SEO, Branding, and Conversion Optimization"
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-block bg-gradient-to-r from-techno-blue to-techno-yellow p-1 rounded-2xl mb-6">
              <div className="bg-white px-6 py-2 rounded-xl">
                <span className="text-2xl">👨‍💻</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-sora font-bold text-gray-900 mb-6">
              About the{' '}
              <span className="bg-gradient-to-r from-techno-blue to-techno-yellow bg-clip-text text-transparent">
                Founder
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              From Code to Clients: The Engineer Behind Technovere
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className={`transition-all duration-800 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-sora font-bold text-gray-900 mb-4">
                  Meet Mohd Yusuf
                </h3>
                <p className="text-lg font-inter text-gray-700 leading-relaxed mb-6">
                  A software engineer who began freelancing in his second year of college with one goal: 
                  to help more people build their presence online.
                </p>
                <p className="text-lg font-inter text-gray-700 leading-relaxed mb-6">
                  As the founder of Technovere, Yusuf blends engineering precision with brand-first creativity, 
                  helping businesses, creators, and consultants turn their online presence into a growth engine.
                </p>
                
                <div className="bg-gradient-to-r from-techno-blue/10 to-techno-yellow/10 p-6 rounded-2xl">
                  <p className="text-lg font-inter text-gray-700 italic">
                    "To me, it's never just about a website or a reel. It's about building something that 
                    positions you, performs well, and scales fast. That's the Technovere mindset."
                  </p>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-800 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h4 className="text-xl font-sora font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-2xl">🧠</span>
                  Certified in Innovation
                </h4>
                <p className="text-lg font-inter text-gray-700 mb-6">
                  Yusuf brings deep technical knowledge and marketing insight, certified by some of the world's top institutions:
                </p>
                
                <div className="space-y-3">
                  {certifications.slice(0, 4).map((cert, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-techno-blue to-techno-yellow rounded-full mt-3 flex-shrink-0" />
                      <p className="text-gray-700 font-inter">{cert}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-techno-blue/5 to-techno-yellow/5 rounded-xl">
                  <p className="text-gray-700 font-inter">
                    {certifications[certifications.length - 1]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`text-center transition-all duration-800 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-br from-techno-blue/5 to-techno-yellow/5 p-8 rounded-3xl">
              <p className="text-lg font-inter text-gray-700 leading-relaxed">
                Today, Yusuf leads a hand-picked creative and development team that delivers everything from 
                web design and software, to content, personal branding, and growth consulting — trusted by 
                founders, coaches, doctors, startups, and global service brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;

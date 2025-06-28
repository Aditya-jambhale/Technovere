import { useEffect, useRef, useState } from 'react';

const typingPhrases = [
  "We blend strategy, storytelling, and UI to scale personal brands online."

];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = typingPhrases[phraseIndex];
      if (charIndex < currentPhrase.length) {
        setTypedText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setTypedText('');
          setCharIndex(0);
          setPhraseIndex((phraseIndex + 1) % typingPhrases.length);
        }, 2000);
      }
    }, 80);

    return () => clearTimeout(timeout);
  }, [charIndex, phraseIndex, typedText]);

  const technovereFeatures = [
    { icon: "🌍", text: "500+ projects across U.S., U.K., U.A.E., and India" },
    { icon: "🎯", text: "Strategy-first design with emotional authority" },
    { icon: "⚡", text: "Full-service: Web dev, brand positioning, UI/UX" },
    { icon: "🚀", text: "Serving coaches, doctors, creators & startups" }
  ];

  const founderPoints = [
    "Started freelancing in college, now 500+ projects strong",
    "Clients featured in Forbes, TEDx, Yahoo Finance",
    "Certified in Web, Cybersecurity, UI/UX, Meta Ads",
    "Leads full-service creative team across design & strategy"
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 bg-blue-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            {/* Header */}
            <div className={`text-center mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 ">
                About Technovere
              </h2>
              {/* <p className="text-xl text-blue-700 max-w-2xl mx-auto">
                We blend strategy, storytelling, and UI to scale personal brands online.
              </p> */}
            </div>

            <h2 className="text-xl md:text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent  mb-4 min-h-[3.5rem]">
              {typedText}<span className="blinking-cursor text-yellow-400">|</span>
            </h2>

          </div>

          {/* Split Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - About Technovere */}
            <div className={`transition-all duration-1000  delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="relative group">
                <div className="bg-blue-50 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-blue-100 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl overflow-hidden  flex items-center justify-center">
                      <img
                        src="/images/logomain.png"
                        alt="Technovere Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="font-extrabold tracking-wider font-poppins">
                      <span className="text-[#00ADEF]">TECHNO</span>
                      <span className="bg-gradient-to-r from-[#FFE500] to-[#FFF7A0] text-transparent bg-clip-text">VERE</span>
                      <p className="text-blue-600 font-medium">Digital Authority Builders</p>
                    </div>
                  </div>


                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    <strong>More Than a Web Design Agency — We Build Authority Online.</strong>
                  </p>

                  <p className="text-gray-600 mb-8 leading-relaxed">
                    At Technovere, we blend design, psychology, and storytelling to build digital identities that perform.
                    Every project starts with strategy, not just aesthetics.
                  </p>

                  <div className="space-y-4">
                    {technovereFeatures.map((feature, index) => (
                      <div key={index} className={`flex items-center gap-4 transition-all duration-700 delay-${500 + index * 100} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}>
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">{feature.icon}</span>
                        </div>
                        <p className="text-gray-700">{feature.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    <span>⭐</span>
                    500+ Sites Delivered
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - About Founder */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              <div className="relative group">
                <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-blue-100 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                  <div className="text-center mb-8">
                    <div className="relative inline-block mb-4">
                      <div className="relative w-32 h-32 mx-auto rounded-3xl overflow-hidden shadow-xl ring-4 ring-white/50">
                        <img
                          src="/images/photo.png"
                          alt="Mohd Yusuf - Founder of Technovere"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const img = e.target as HTMLImageElement;
                            img.style.display = 'none';
                            const fallback = img.nextElementSibling as HTMLElement | null;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl flex items-center justify-center text-white text-3xl font-bold" style={{ display: 'none' }}>
                          MY
                        </div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-gray-900 text-sm">⚡</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Mohd Yusuf</h3>
                    <p className="text-blue-600 font-medium mb-6">Founder & Creative Director</p>
                  </div>

                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    <strong>From Code to Clients — Software engineer turned brand-builder.</strong>
                  </p>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Helping people scale online credibility through personal brand design and strategic storytelling.
                  </p>

                  <div className="bg-gradient-to-r from-blue-100 to-yellow-100 p-6 rounded-2xl mb-6 border-l-4 border-blue-400">
                    <p className="text-gray-800 italic text-lg leading-relaxed">
                      "To me, it's never just about websites. It's about how people perceive you."
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-blue-600 text-sm font-medium">Mohd Yusuf</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {founderPoints.map((point, index) => (
                      <div key={index} className={`flex items-start gap-3 transition-all duration-700 delay-${700 + index * 100} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}>
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-300 to-yellow-300 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-gray-900 text-xs font-bold">✓</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {['Web Dev', 'UI/UX', 'Cybersecurity', 'Meta Ads'].map((skill, index) => (
                      <span key={index} className="bg-gradient-to-r from-blue-100 to-yellow-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Bottom CTA Section */}
    <div
  className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  <div className="bg-blue-100 p-8 rounded-3xl text-blue-900 shadow-2xl border border-blue-200">
    <h3 className="text-2xl font-bold mb-4 text-blue-800 drop-shadow-sm">
      Ready to Build Your Digital Authority?
    </h3>
    <p className="text-blue-700 mb-6 max-w-2xl mx-auto leading-relaxed">
      Join 500+ professionals who’ve transformed their online presence with Technovere’s strategic approach.
    </p>

    <div className="flex justify-center">
      <a
        href="https://calendly.com/mohammadyusuf025/30min?month=2025-06"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-blue-700 text-white font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-800 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
          📞 Book a call
        </button>
      </a>
    </div>
  </div>
</div>



        </div>
      </div>

      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
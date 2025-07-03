import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Lightbulb, Target, Globe, Briefcase, Trophy, ArrowUpRight } from 'lucide-react';

const AboutTechnovere = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const features = [
    {
      icon: Target,
      title: "Strategy-First Design",
      description:
        "Every project starts with clarity: What makes you unique? Who do you serve? We craft design & messaging that align with your brand and goals.",
    },
    {
      icon: Globe,
      title: "Built for Global Professionals",
      description:
        "With 500+ projects delivered to clients in the U.S., U.K., U.A.E, and beyond — we know how to position your brand for a competitive global audience.",
    },
    {
      icon: Briefcase,
      title: "Full-Service, In-House Execution",
      description:
        "From website design to brand content, everything is done by our dedicated creative & development team. No outsourcing. No fluff.",
    },
    {
      icon: Trophy,
      title: "Proven Results, Real Impact",
      description:
        "We've helped TEDx speakers, Forbes members, medical professionals, and scaling coaches launch standout online brands.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 px-4 lg:px-20 relative overflow-hidden"
    >
      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-40"></div>
      <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Logo moved above section */}
        <div className="flex justify-center mb-10">
          <img
            src="/images/logomain.png"
            alt="Technovere Logo"
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
        </div>

        {/* Header */}
        <div
          className={`flex flex-col items-center text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-bold text-yellow-400">
              About Technovere
            </h2>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/80 mb-6 max-w-3xl">
            More Than a Web Design Agency — We Build Authority Online.
          </h3>
        </div>

        {/* Story Section */}
        <div
          className={`mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-2xl">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                  Our Story
                </h4>
                <p className="text-white/90 leading-relaxed text-base md:text-lg mb-4">
                  At Technovere, we don't just build websites — we design digital identities.
                </p>
                <p className="text-white/80 leading-relaxed text-base md:text-lg">
                  Founded by Yusuf, a software engineer turned creative entrepreneur, Technovere was born from a mission: To help modern brands grow through clarity, creativity, and conversion-focused design.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-l from-blue-600/20 to-indigo-600/20 backdrop-blur-sm border border-blue-300/30 p-6 md:p-8 rounded-2xl">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                  Who We Serve
                </h4>
                <p className="text-white/90 leading-relaxed text-base md:text-lg">
                  Whether you're a solo creator, consultant, startup founder, or scaling service provider — we combine cutting-edge tech and storytelling to help you show up like the brand you are.
                </p>
              </div>

              <div className="bg-gradient-to-l from-yellow-600/20 to-orange-600/20 backdrop-blur-sm border border-yellow-300/30 p-6 md:p-8 rounded-2xl">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                  Our Approach
                </h4>
                <p className="text-white/90 leading-relaxed text-base md:text-lg">
                  From sleek designs to compelling brand messaging — we blend tech, psychology, and storytelling to help you look credible, feel confident, and convert visitors into clients.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Technovere */}
        <div
          className={`mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Technovere?</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`group bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-500 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${800 + index * 200}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg md:text-xl mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-3xl max-w-3xl mx-auto">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
              Ready to create a website that's more than just pretty?
            </h4>
            <p className="text-white/80 mb-6 md:mb-8 text-base md:text-lg">
              One that works as hard as you do?
            </p>

            <a
              href="https://calendly.com/mohammadyusuf025/30min?month=2025-06"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <button className="bg-gradient-to-r from-[#FFEB3B] to-[#FDD835] hover:from-[#FDD835] hover:to-[#F9A825] text-black font-bold px-8 py-4 md:px-10 md:py-5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-3 md:gap-4 mx-auto text-base md:text-xl group-hover:shadow-yellow-400/50">
                Book Your Discovery Call
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTechnovere;
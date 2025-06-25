// Merged Problem + Solution Section with consistent theme and animation

import { useEffect, useRef, useState } from 'react';
import {
  AlertTriangle,
  TrendingDown,
  Eye,
  Lightbulb,
  Target,
  Users,
  TrendingUp,
} from 'lucide-react';

const Problem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      icon: <Eye className="w-8 h-8" />, title: 'Outdated Design',
      description: 'Their website looks templated and unprofessional'
    },
    {
      icon: <TrendingDown className="w-8 h-8" />, title: 'Poor Messaging',
      description: "Their story isn't clearly told or compelling"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />, title: 'Wrong Positioning',
      description: "Their expertise isn't positioned to convert visitors"
    }
  ];

  const features = [
    { icon: <Target className="w-6 h-6" />, text: 'Stand out from competition' },
    { icon: <Users className="w-6 h-6" />, text: 'Build instant credibility' },
    { icon: <TrendingUp className="w-6 h-6" />, text: 'Convert visitors to clients' },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Grid and Blurs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#00ADEF] to-[#FFC700] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-[#9B51E0] to-[#00D1A1] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Problem Section */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-red-50 px-6 py-3 rounded-full border border-red-200 mb-6">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="text-red-600 font-poppins font-semibold">The Problem</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-dark mb-6">
              You've built credibility offline — but your <span className="text-red-500">online presence doesn't show it</span>
            </h2>
            <p className="text-lg text-gray-600 font-poppins max-w-2xl mx-auto">
              Most personal brands lose potential clients because of these critical issues:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-28">
            {problems.map((problem, index) => (
              <div key={index} className={`transition-all duration-700 delay-${(index + 1) * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 group h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-6">
                    <div className="text-red-500">{problem.icon}</div>
                  </div>
                  <h3 className="text-2xl font-semibold text-dark mb-3">{problem.title}</h3>
                  <p className="text-gray-600 font-poppins leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Solution Section */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00ADEF]/10 to-[#9B51E0]/10 px-6 py-3 rounded-full border border-[#00ADEF]/20 mb-6">
              <Lightbulb className="w-5 h-5 text-[#00ADEF]" />
              <span className="text-[#00ADEF] font-poppins font-semibold">The Solution</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-dark mb-10">
              We blend <span className="bg-gradient-to-r from-[#00ADEF] via-[#FFC700] to-[#9B51E0] bg-clip-text text-transparent">premium web design</span> with strategic brand positioning
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#00ADEF] to-[#9B51E0] rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <span className="text-lg font-semibold text-dark">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gradient-to-br from-[#00ADEF]/5 to-[#9B51E0]/5 p-10 rounded-3xl border border-[#00ADEF]/10">
                <h3 className="text-3xl font-bold text-dark mb-6">
                  Your website becomes your best sales tool
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Designed to build trust, authority, and connection with your ideal audience through strategic positioning and conversion-focused design.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-2xl shadow-md">
                    <div className="text-2xl font-bold text-[#00ADEF] mb-1">500+</div>
                    <div className="text-sm text-gray-600">Projects Delivered</div>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-md">
                    <div className="text-2xl font-bold text-[#9B51E0] mb-1">Global</div>
                    <div className="text-sm text-gray-600">Client Reach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center bg-gradient-to-r from-gray-50 to-blue-50/30 p-12 rounded-3xl">
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Whether you're a <span className="font-semibold text-[#00ADEF]">coach scaling offers</span>,
                a <span className="font-semibold text-[#9B51E0]">doctor entering private practice</span>,
                a <span className="font-semibold text-[#FFC700]">founder raising your profile</span>, or
                <span className="font-semibold text-[#00D1A1]"> brands building their online presence</span> —
                we'll bring your vision to life.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Problem;

import { useEffect, useRef, useState } from 'react';
import {
  Target,
  Smartphone,
  Heart,
  Zap,
  Users,
  TrendingUp,
  Sparkles,
  Cpu,
  Globe
} from 'lucide-react';

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Custom Website, Built on Brand Strategy",
      description: "Every site is strategically designed around your personal brand positioning and unique value proposition."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "SEO-Optimized & Mobile-First Design",
      description: "Blazing fast, mobile-responsive websites that rank higher and convert better across all devices."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Clear Messaging That Connects Emotionally",
      description: "Story-driven content and messaging that builds emotional authority with your ideal audience."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Blazing Fast Performance",
      description: "Optimized for speed and performance to keep visitors engaged and search engines happy."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Done-for-You: Tech, Content, and Strategy",
      description: "Complete solution handling everything from technical setup to content creation and strategy."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Conversion-Focused UX",
      description: "Built using design psychology that builds credibility and drives action from your visitors."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 opacity-10">
          <Cpu className="w-full h-full text-cyan-400 animate-spin-slow" />
        </div>
        <div className="absolute top-40 right-20 w-24 h-24 opacity-10">
          <Globe className="w-full h-full text-yellow-400 animate-pulse" />
        </div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 opacity-10">
          <Sparkles className="w-full h-full text-violet-400 animate-bounce" />
        </div>
        
        {/* Abstract flowing lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 1000 1000">
          <path
            d="M 0,500 Q 250,200 500,500 T 1000,400"
            stroke="url(#flowGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M 0,300 Q 500,100 1000,600"
            stroke="url(#flowGradient2)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{animationDelay: '1s'}}
          />
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00BFFF" />
              <stop offset="50%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#9B59B6" />
            </linearGradient>
            <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9B59B6" />
              <stop offset="50%" stopColor="#00BFFF" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Why Professionals Choose{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Technovere
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with Brand Strategy & Conversion Psychology for Maximum Impact
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`group transition-all duration-800 delay-${index * 150} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Glassmorphic Card */}
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 h-full hover:scale-105 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group">
                  {/* Glowing ring on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-yellow-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 via-yellow-500 to-violet-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white group-hover:animate-bounce">
                        {benefit.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Subtle gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-yellow-500 to-violet-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call-to-Action Element */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 hover:bg-white/15 transition-all duration-300">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-white font-semibold">Ready to transform your online presence?</span>
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Benefits;
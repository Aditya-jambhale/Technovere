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
  Globe,
  CheckCircle
} from 'lucide-react';

const typingPhrases = [
  'Why Professionals Choose Technovere?',

];

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
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

  const benefits = [
    {
      icon: <Target className="w-7 h-7" />,
      title: "Custom Website, Built on Brand Strategy",
      description: "Every site is strategically designed around your personal brand positioning and unique value proposition.",
      gradient: "from-blue-400 to-cyan-400",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "SEO-Optimized & Mobile-First Design",
      description: "Blazing fast, mobile-responsive websites that rank higher and convert better across all devices.",
      gradient: "from-emerald-400 to-teal-400",
      bgGradient: "from-emerald-500/10 to-teal-500/10"
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Clear Messaging That Connects Emotionally",
      description: "Story-driven content and messaging that builds emotional authority with your ideal audience.",
      gradient: "from-pink-400 to-rose-400",
      bgGradient: "from-pink-500/10 to-rose-500/10"
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Blazing Fast Performance",
      description: "Optimized for speed and performance to keep visitors engaged and search engines happy.",
      gradient: "from-yellow-400 to-orange-400",
      bgGradient: "from-yellow-500/10 to-orange-500/10"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Done-for-You: Tech, Content, and Strategy",
      description: "Complete solution handling everything from technical setup to content creation and strategy.",
      gradient: "from-purple-400 to-violet-400",
      bgGradient: "from-purple-500/10 to-violet-500/10"
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Conversion-Focused UX",
      description: "Built using design psychology that builds credibility and drives action from your visitors.",
      gradient: "from-indigo-400 to-blue-400",
      bgGradient: "from-indigo-500/10 to-blue-500/10"
    }
  ];

  const quickPoints = [
    "Custom website design built on personal brand positioning",
    "Clear messaging that connects with your ideal audience",
    "Design psychology for high-trust service providers",
    "Mobile-first, SEO-optimized, blazing fast",
    "Story-driven layout that builds emotional authority",
    "Tech + strategy + content all handled in one place"
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 opacity-5">
          <Cpu className="w-full h-full text-cyan-400 animate-spin-slow" />
        </div>
        <div className="absolute top-40 right-20 w-32 h-32 opacity-5">
          <Globe className="w-full h-full text-yellow-400 animate-pulse" />
        </div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 opacity-5">
          <Sparkles className="w-full h-full text-violet-400 animate-bounce-slow" />
        </div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 opacity-5">
          <Target className="w-full h-full text-emerald-400 animate-pulse" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-medium">Premium Web Solutions</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight min-h-[4rem] bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              {typedText}<span className="blinking-cursor text-cyan-400">|</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mt-6 leading-relaxed">
              Built with Brand Strategy & Conversion Psychology for Maximum Impact
            </p>
          </div>

          {/* Quick Points Section */}
          {/* <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-200 group-hover:text-white transition-colors duration-300">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className={`relative bg-gradient-to-br ${benefit.bgGradient} backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full hover:scale-105 hover:border-white/30 transition-all duration-500 overflow-hidden`}>
                  {/* Card Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon */}
                  <div className={`relative flex items-center justify-center w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-400/30 rounded-full px-8 py-4 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 cursor-pointer group">
              <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse group-hover:animate-spin" />
              <span className="text-white font-bold text-lg">Ready to transform your online presence?</span>
              <Sparkles className="w-6 h-6 text-blue-300 animate-pulse group-hover:animate-spin" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Benefits;
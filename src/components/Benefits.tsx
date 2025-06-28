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

const typingPhrases = [
  'Why Professionals Choose Technovere ?',
  
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
    }, 70);

    return () => clearTimeout(timeout);
  }, [charIndex, phraseIndex, typedText]);

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
    <section ref={sectionRef} className="py-20 bg-blue-300 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 opacity-10">
          <Cpu className="w-full h-full text-cyan-600 animate-spin-slow" />
        </div>
        <div className="absolute top-40 right-20 w-24 h-24 opacity-10">
          <Globe className="w-full h-full text-yellow-500 animate-pulse" />
        </div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 opacity-10">
          <Sparkles className="w-full h-full text-violet-600 animate-bounce" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 leading-snug min-h-[3rem]">
              {typedText}<span className="blinking-cursor">|</span>
            </h2>
            <p className="text-base text-yellow-300 max-w-2xl mx-auto mt-4">
              Built with Brand Strategy & Conversion Psychology for Maximum Impact
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`group transition-all duration-700 delay-${index * 150} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="relative bg-white/30 backdrop-blur-lg border border-white/30 rounded-2xl p-6 h-full hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 via-indigo-400 to-cyan-300
 rounded-xl mb-4">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-blue-800">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-6 py-3">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-blue-900 font-semibold">Ready to transform your online presence?</span>
              <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
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
          animation: spin-slow 12s linear infinite;
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

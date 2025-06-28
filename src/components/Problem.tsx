import { useEffect, useRef, useState } from 'react';
import {
  AlertTriangle,
  X,
  Check,
  ArrowRight,
  Eye,
  MessageSquare,
  Target,
  Zap,
  Users,
  TrendingUp,
  Globe,
  Smartphone
} from 'lucide-react';

const typingPhrases = [

  "But your digital presence doesn't show it"
];

const Problem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
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

  const problems = [
    {
      icon: <Eye className="w-6 h-6" />, title: "Your website looks outdated or templated", description: "Generic designs that blend into the background"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />, title: "Your story isn't clearly told", description: "Visitors leave confused about what you actually do"
    },
    {
      icon: <Target className="w-6 h-6" />, title: "Your expertise isn't positioned right", description: "You're underselling your value and experience"
    },
    {
      icon: <Users className="w-6 h-6" />, title: "You're selling yourself, not just a service", description: "But your website doesn't reflect your personal brand"
    }
  ];

  const solutions = [
    {
      icon: <Check className="w-6 h-6" />, title: "Custom website aligned with your personal brand", description: "Unique design that reflects your personality and expertise"
    },
    {
      icon: <Check className="w-6 h-6" />, title: "Clear messaging that connects with your ideal audience", description: "Story-driven content that builds emotional authority"
    },
    {
      icon: <Check className="w-6 h-6" />, title: "Trust-building design with conversion psychology", description: "Strategic positioning that showcases your credibility"
    },
    {
      icon: <Check className="w-6 h-6" />, title: "Everything from tech to content — done for you", description: "Complete solution so you can focus on what you do best"
    }
  ];

  const benefits = [
    { icon: <Target className="w-5 h-5" />, text: "Custom website design built on personal brand positioning" },
    { icon: <Users className="w-5 h-5" />, text: "Clear messaging that connects with your ideal audience" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Design psychology for high-trust service providers" },
    { icon: <Smartphone className="w-5 h-5" />, text: "Mobile-first, SEO-optimized, blazing fast" },
    { icon: <Globe className="w-5 h-5" />, text: "Story-driven layout that builds emotional authority" },
    { icon: <Zap className="w-5 h-5" />, text: "Tech + strategy + content all handled in one place" }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-blue-100 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div
  className={`flex flex-col items-center justify-center text-center gap-6 mb-12 transition-all duration-1000 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight max-w-3xl">
    <span className="text-blue-400">You've built credibility offline — </span>
    <br />
    <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
      {typedText}
    </span>
    <span className="blinking-cursor text-yellow-300">|</span>
  </h2>

  <p className="text-sm sm:text-base md:text-lg text-blue-700 max-w-xl mx-auto">
    Most personal brands lose clients because their online identity doesn’t reflect their real-world expertise and trust.
  </p>
</div>

<style>{`
  .blinking-cursor {
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
`}</style>

          {/* Problems and Solutions Section */}
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-900 flex items-center gap-2">
                <AlertTriangle className="text-red-500" /> What's holding you back?
              </h3>
              {problems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-xl">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">{item.title}</h4>
                    <p className="text-blue-700 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
                <Check className="text-green-500" /> The Technovere Solution
              </h3>
              {solutions.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-xl">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">{item.title}</h4>
                    <p className="text-blue-700 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-20">
            <h3 className="text-center text-3xl font-bold text-blue-900 mb-8">Why Clients Choose Technovere</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 bg-white shadow-md p-4 rounded-xl border border-blue-100">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-2 rounded-lg">
                    {benefit.icon}
                  </div>
                  <p className="text-blue-800 font-medium text-sm">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          from, to { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Problem;
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { DotPattern } from "@/components/magicui/dot-pattern";

import {
  Check,
  Sparkles,
  ArrowRight,
  Star,
  Users,
  Globe,
  TrendingUp,
  ChevronDown,
  Code,
  Zap,
  Shield,
  Brain,
  Rocket,
  Target,
  MessageCircle,
  BarChart3,
  Lightbulb,
  Cpu,
  Bot,
  Phone
} from 'lucide-react';

const EnhancedHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "It's Your Digital Reputation.";

  const clientMessages = [
    "Transform your digital presence with precision",
    "Strategic web design built for conversions",
    "Establish your authority in your industry",
    "Turn visitors into high-value clients"
  ];

  // Infinite typing effect
  useEffect(() => {
    let index = 0;
    let direction = 1; // 1 for typing, -1 for deleting
    
    const typeInterval = setInterval(() => {
      if (direction === 1) {
        // Typing
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
        } else {
          // Pause before deleting
          setTimeout(() => {
            direction = -1;
          }, 2000);
        }
      } else {
        // Deleting
        if (index >= 0) {
          setTypedText(fullText.slice(0, index));
          index--;
        } else {
          // Pause before typing again
          setTimeout(() => {
            direction = 1;
            index = 0;
          }, 1000);
        }
      }
    }, direction === 1 ? 100 : 50); // Faster deletion

    return () => clearInterval(typeInterval);
  }, [fullText]);

  const features = [
    {
      icon: <Target className="w-5 h-5" />,
      text: "Strategy-First Design"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Blazing Fast Performance"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Built with Psychology"
    }
  ];

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 730);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('hero-section');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % clientMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero-section" className="relative min-h-screen overflow-hidden  bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* DotPattern Background */}
      <DotPattern
        width={30}
        height={30}
        cx={1}
        cy={1}
        className="absolute inset-0 z-0 fill-blue-200/20 text-blue-300/20"
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-20 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <div className="text-center space-y-6 lg:space-y-8">
            {/* Badge */}
            <div
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-400 px-4 py-2 rounded-full shadow-lg mb-4">
                <Sparkles className="w-4 h-4 text-black" />
                <span className="text-black font-semibold text-sm">Web Development Agency</span>
              </div>
            </div>

         {/* Main Headline */}
{/* Main Headline */}
<h1
  className={`text-center font-bold leading-snug md:leading-tight mb-6 transition-all duration-700 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
  }`}
>
  <span className="block text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white">
    Your Website Is More Than Design
  </span>
  <span className="block text-[1.5rem] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-yellow-400 mt-2">
    It's Your Digital Reputation.
  </span>
</h1>

<p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-2xl mx-auto mb-6">
  At Technovere, we build premium websites that position you as an expert, build trust,
  and drive leads – by combining world-class design with personal brand strategy.
</p>





            {/* Subheadline */}
            {/* <p
              className={`text-lg lg:text-xl text-blue-100 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              At Technovere, we build premium websites that position you as an expert, build trust, and drive leads - by combining world-class design with personal brand strategy.
            </p> */}

            {/* Client Message Banner */}
            {/* <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4 mb-8 shadow-lg max-w-2xl mx-auto">
                <div className="text-center">
                  <p className="text-white font-semibold text-base lg:text-lg tracking-tight transition-all duration-500">
                    {clientMessages[messageIndex]}
                  </p>
                </div>
              </div>
            </div> */}

            {/* Features */}
            <div className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <div className="text-yellow-400">
                    {feature.icon}
                  </div>
                  <span className="text-white text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
           <div
  className={`transition-all duration-1000 delay-700 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  <a
    href="https://calendly.com/mohammadyusuf025/30min?month=2025-06"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="lg"
      className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-md border-2 border-yellow-300 hover:border-yellow-200"
    >
      <span className="flex items-center justify-center gap-2 sm:gap-3">
        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
        Book Your Free Discovery Call
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </span>
    </Button>
  </a>

  {/* Scroll Down Indicator */}
  <div className="mt-10 sm:mt-12">
    <button
      onClick={() => {
        const elem = document.getElementById('about');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }}
      className="flex flex-col items-center gap-2 text-sm text-blue-300 hover:text-yellow-400 transition-colors duration-300 mx-auto"
    >
      Discover our journey
      <ChevronDown className="w-5 h-5 animate-bounce" />
    </button>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Check, Sparkles, ArrowRight, Star, Users, Globe, TrendingUp, ChevronDown, Code,
  Zap, Shield, Brain, Rocket, Target, MessageCircle, BarChart3, Lightbulb, Cpu, Bot, Phone
} from 'lucide-react';

const EnhancedHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "It's Your Digital Reputation.";

  const clientMessages = [
    "Transform your digital presence with precision",
    "Strategic web design built for conversions",
    "Establish your authority in your industry",
    "Turn visitors into high-value clients"
  ];

  // Typing effect
  useEffect(() => {
    let index = 0;
    let direction = 1;
    const typeInterval = setInterval(() => {
      if (direction === 1) {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
          setIsTyping(true);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            direction = -1;
          }, 2000);
        }
      } else {
        if (index >= 0) {
          setTypedText(fullText.slice(0, index));
          index--;
          setIsTyping(true);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            direction = 1;
            index = 0;
          }, 1000);
        }
      }
    }, direction === 1 ? 100 : 50);

    return () => clearInterval(typeInterval);
  }, [fullText]);

  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Scroll visibility
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

  // Rotate messages
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % clientMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: <Target className="w-5 h-5" />, text: "Strategy-First Design" },
    { icon: <Zap className="w-5 h-5" />, text: "Blazing Fast Performance" },
    { icon: <Shield className="w-5 h-5" />, text: "Built with Psychology" },
  ];

  return (
    <section id="hero-section" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 font-sans">

      {/* Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover pointer-events-none"
          poster=""
        >
          <source src="https://res.cloudinary.com/dxpxzbz51/video/upload/v1752435803/bg_website_6_kwc1bo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 z-10 mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16 lg:py-20 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <div className="text-center space-y-6 lg:space-y-8">

            {/* Badge */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-yellow-400 px-4 py-2 rounded-full shadow-lg mb-4">
                <Sparkles className="w-4 h-4 text-black" />
                <span className="text-black font-semibold text-sm">Web Development Agency</span>
              </div>
            </div>

            <h1 className={`text-center font-bold leading-snug md:leading-tight mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="block text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white">
                Your Website Is More Than Design
              </span>
              <span className="block text-[1.5rem] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-yellow-400 mt-2 min-h-[1.2em]">
                {typedText}
                <span className={`inline-block w-0.5 h-[0.9em] bg-yellow-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-2xl mx-auto mb-6">
              At Technovere, we build premium websites that position you as an expert, build trust,
              and drive leads – by combining world-class design with personal brand strategy.
            </p>

            {/* Features */}
            <div className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <div className="text-yellow-400">{feature.icon}</div>
                  <span className="text-white text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

      {/* Bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] sm:w-[calc(130%+1.3px)]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19
              c-82.26-17.34-168.06-16.33-250.45.39
              -57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8
              C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default EnhancedHero;
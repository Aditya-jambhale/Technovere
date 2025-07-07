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
    <>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(-5px); }
          75% { transform: translateY(-10px) translateX(-15px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-15px) translateX(8px); }
          66% { transform: translateY(-30px) translateX(-12px); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(15px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
        
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.15; transform: scale(1) rotate(45deg); }
          50% { opacity: 0.3; transform: scale(1.2) rotate(45deg); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-medium {
          animation: pulse-medium 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
      <section id="hero-section" className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
<div className="absolute inset-0 z-0">
  <img
    src="/images/bg.png"
    alt="Background"
    className="w-full h-full object-cover"
  />
</div>
      {/* Animated Background */}
      {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Code Icon */}
          <div 
            className="absolute opacity-8 animate-float-slow"
            style={{ 
              top: '15%',
              left: '8%',
              animationDelay: '0s'
            }}
          >
            <Code className="w-16 h-16" style={{ color: '#1E3A8A' }} />
          </div>
          
          {/* Globe Icon */}
          <div 
            className="absolute opacity-10 animate-float-medium"
            style={{ 
              top: '60%',
              right: '12%',
              animationDelay: '2s'
            }}
          >
            <Globe className="w-20 h-20" style={{ color: '#facc15' }} />
          </div>
          
          {/* Rocket Icon */}
          <div 
            className="absolute opacity-12 animate-float-fast"
            style={{ 
              top: '25%',
              right: '15%',
              animationDelay: '4s'
            }}
          >
            <Rocket className="w-14 h-14" style={{ color: '#1E3A8A' }} />
          </div>
          
          {/* Brain Icon */}
          <div 
            className="absolute opacity-15 animate-float-medium"
            style={{ 
              bottom: '25%',
              left: '15%',
              animationDelay: '1s'
            }}
          >
            <Brain className="w-12 h-12" style={{ color: '#facc15' }} />
          </div>
          
          {/* Zap Icon */}
          <div 
            className="absolute opacity-12 animate-float-fast"
            style={{ 
              top: '45%',
              left: '12%',
              animationDelay: '3s'
            }}
          >
            <Zap className="w-10 h-10" style={{ color: '#1E3A8A' }} />
          </div>
          
          {/* BarChart Icon */}
          <div 
            className="absolute opacity-10 animate-float-slow"
            style={{ 
              bottom: '35%',
              right: '8%',
              animationDelay: '5s'
            }}
          >
            <BarChart3 className="w-12 h-12" style={{ color: '#facc15' }} />
          </div>
        </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16 lg:py-20 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <div className="text-center space-y-6 lg:space-y-8">

            {/* Badge */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-lg mb-4 border-2" style={{ 
                backgroundColor: '#facc15', 
                borderColor: '#1E3A8A',
                color: '#1E3A8A'
              }}>
                <Sparkles className="w-4 h-4 font-semibold" style={{ color: '#1E3A8A' }} />
                <span className="font-semibold text-sm" style={{ color: '#1E3A8A' }}>Web Development Agency</span>
              </div>
            </div>

            <h1 className={`text-center font-bold leading-snug md:leading-tight mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="block text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" style={{ color: '#1E3A8A' }}>
                Your Website Is More Than Design
              </span>
              <span className="block text-[1.5rem] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 min-h-[1.2em]" style={{ color: '#facc15' }}>
                {typedText}
                <span className={`inline-block w-0.5 h-[0.9em] ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`} style={{ backgroundColor: '#facc15' }}></span>
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-2xl mx-auto mb-6" style={{ color: '#1E3A8A', opacity: 0.8 }}>
              At Technovere, we build premium websites that position you as an expert, build trust,
              and drive leads – by combining world-class design with personal brand strategy.
            </p>

            {/* Features */}
            <div className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-3 rounded-lg hover:shadow-md transition-all duration-300 border-2" style={{
                  backgroundColor: '#ffffff',
                  borderColor: '#1E3A8A',
                  color: '#1E3A8A'
                }}>
                  <div style={{ color: '#1E3A8A' }}>{feature.icon}</div>
                  <span className="text-sm font-medium" style={{ color: '#1E3A8A' }}>{feature.text}</span>
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
                  className="relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg border-2 hover:shadow-xl overflow-hidden"
                  style={{
                    backgroundColor: '#facc15',
                    color: '#1E3A8A',
                    borderColor: '#1E3A8A'
                  }}
                >
                  {/* Shimmer Effect */}
                  <div 
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                      animation: 'shimmer 2.5s infinite'
                    }}
                  ></div>
                  
                  <span className="relative flex items-center justify-center gap-2 sm:gap-3 z-10">
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
                  className="flex flex-col items-center gap-2 text-sm hover:opacity-80 transition-all duration-300 mx-auto"
                  style={{ color: '#1E3A8A' }}
                >
                  Discover our journey
                  <ChevronDown className="w-5 h-5 animate-bounce" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Section Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] sm:w-[calc(130%+1.3px)]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39
              -57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8
                C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#1E3A8A"
          ></path>
        </svg>
      </div>
    </section>
    </>
  );
};

export default EnhancedHero;
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
  const [currentStat, setCurrentStat] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "It's Your Digital Identity";

  const stats = [
    { number: '500+', label: 'Authority Websites Delivered', icon: <Globe className="w-4 h-4" /> },
    { number: '100+', label: 'Brands Worldwide', icon: <Users className="w-4 h-4" /> },
    { number: '1000+', label: '5-Star Reviews', icon: <Star className="w-4 h-4" /> },
    { number: '#1', label: 'Self-Improvement Podcast Site', icon: <TrendingUp className="w-4 h-4" /> },
  ];

  const aiFeatures = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Strategy",
      description: "Intelligent workflows for smarter brand growth",
      status: "Active",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "High-Speed Web Development",
      description: "Responsive & SEO-optimized websites",
      status: "Optimizing",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Lead Generation Funnels",
      description: "Convert visitors into engaged clients",
      status: "Converting",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Track metrics and user behavior in real-time",
      status: "Tracking",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Video Editing & Shorts",
      description: "Social-ready edits that hook viewers instantly",
      status: "Clipping",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Hosting & SEO",
      description: "Safe, optimized, and Google-loved sites",
      status: "Securing",
      color: "from-yellow-500 to-amber-400"
    }
  ];

  const clientMessages = [
    "🚀 Transform your online presence",
    "💡 Strategic design that converts",
    "🎯 Position yourself as the expert",
    "📈 Generate more qualified leads"
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

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

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
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % aiFeatures.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % clientMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero-section" className="relative min-h-screen overflow-hidden bg-blue-300">
      {/* DotPattern Background */}
      <DotPattern
        width={30}
        height={30}
        cx={1}
        cy={1}
        className="absolute inset-0 z-0 fill-indigo-200/50 text-indigo-300/40"
      />

      {/* Content Container */}
      <div className="relative z-10 lg:top-6 container mx-auto px-4 py-10 lg:py-20 min-h-screen flex items-center">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-5 lg:space-y-6">
              {/* Badge */}
              <div
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
              >
                <div className="inline-flex items-center gap-2 bg-yellow-300 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full shadow-lg mb-3 lg:mb-4">
                  <Sparkles className="w-3.5 lg:w-4 h-3.5 lg:h-4 text-black" />
                  <span className="text-black font-semibold text-xs">Premium Digital Agency</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1
                className={`text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3 lg:mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
              >
                <span className="text-white drop-shadow-lg">More Than Just Design</span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent drop-shadow-lg">
                  {typedText}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
                    |
                  </span>
                </span>
              </h1>

              {/* Subheadline */}
              <p
                className={`text-base lg:text-lg text-gray-100 mb-5 lg:mb-7 max-w-xl mx-auto lg:mx-0 transition-all duration-1000 delay-400 drop-shadow-md ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
              >
                We help brands stand out through strategic design that builds trust, positions expertise, and converts leads.
              </p>

              {/* Client Message Banner */}
              <div
                className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
              >
                <div className="bg-white/60 backdrop-blur-md border border-yellow-300 rounded-xl px-5 py-3 mb-4 shadow-lg">
                  <div className="text-center">
                    <p className="text-slate-900 font-semibold text-sm lg:text-base tracking-tight transition-all duration-500">
                      {clientMessages[messageIndex]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated Stat */}
              <div
                className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-center gap-3 lg:gap-6 mb-5 lg:mb-6">
                  <div className="bg-white/95 backdrop-blur-sm shadow-xl px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl flex items-center gap-2.5 lg:gap-3">
                    <div className="flex items-center justify-center w-7 lg:w-8 h-7 lg:h-8 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-lg">
                      {stats[currentStat].icon}
                    </div>
                    <div className="text-left">
                      <div className="text-base lg:text-lg font-semibold text-gray-900">{stats[currentStat].number}</div>
                      <div className="text-xs text-gray-600">{stats[currentStat].label}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm shadow-xl px-3 py-2 rounded-xl">
                    <div className="flex items-center justify-center w-5 lg:w-6 h-5 lg:h-6 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-md">
                      <Check className="w-2.5 lg:w-3 h-2.5 lg:h-3 text-black" />
                    </div>
                    <span className="text-xs text-gray-700 font-medium">
                      Built with conversion psychology
                    </span>
                  </div>
                </div>

               <a
  href="https://calendly.com/mohammadyusuf025/30min?month=2025-06"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="default"
    className="bg-yellow-400 text-black font-bold px-5 lg:px-6 py-2.5 lg:py-3 rounded-full hover:bg-yellow-500 hover:scale-105 transition-all duration-300 text-sm shadow-lg"
  >
    <span className="flex items-center gap-2">
      <Phone className="w-4 h-4 text-purple-700" />
      Book a Free Call
      <ArrowRight className="w-4 h-4" />
    </span>
  </Button>
</a>

                <div className="mt-6 lg:mt-8">
                  <button
                    onClick={() => {
                      const elem = document.getElementById('problems');
                      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex flex-col items-center gap-1 text-xs text-gray-100 hover:text-yellow-300 transition-colors duration-300 drop-shadow-sm"
                  >
                    See how we solve your challenges
                    <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right AI-Powered Agency Dashboard */}
            <div className="relative hidden lg:block">
              {/* Top-left yellow border */}
              <div className="absolute top-0 left-0 w-16 h-2 bg-yellow-400 rounded-tl-2xl z-10" />
              <div className="absolute top-0 left-0 w-2 h-16 bg-yellow-400 rounded-tl-2xl z-10" />

              {/* Bottom-right yellow border */}
              <div className="absolute bottom-0 right-0 w-16 h-2 bg-yellow-400 rounded-br-2xl z-10" />
              <div className="absolute bottom-0 right-0 w-2 h-16 bg-yellow-400 rounded-br-2xl z-10" />

              {/* Main AI Control Panel */}
              <div
                className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center">
                      <Bot className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Technovere Solution Stack</h3>
                      <p className="text-indigo-800 text-xs font-medium">Crafted for Digital Excellence</p>
                    </div>
                  </div>
                </div>

                {/* Active AI Feature Card */}
                <div className="mb-6">
                  <div className={`bg-gradient-to-r ${aiFeatures[activeFeature].color} p-4 rounded-xl shadow-lg transition-all duration-500 transform`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-white">
                        {aiFeatures[activeFeature].icon}
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-white/80 font-medium">{aiFeatures[activeFeature].status}</div>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                          <span className="text-white text-xs">Processing</span>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-white font-semibold text-base mb-1">{aiFeatures[activeFeature].title}</h4>
                    <p className="text-white/80 text-sm">{aiFeatures[activeFeature].description}</p>
                  </div>
                </div>

                {/* AI Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {aiFeatures.map((feature, index) => (
                    <div
                      key={feature.title}
                      className={`bg-white/60 backdrop-blur-sm border border-white/20 rounded-lg p-3 transition-all duration-300 cursor-pointer ${index === activeFeature ? 'ring-2 ring-yellow-400 bg-white/70' : 'hover:bg-white/70'
                        }`}
                      onClick={() => setActiveFeature(index)}
                    >
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="text-yellow-500 scale-75">
                          {feature.icon}
                        </div>
                        <span className="text-indigo-900 text-xs font-semibold">{feature.title}</span>
                      </div>
                      <div className="text-emerald-700 text-xs font-medium">{feature.status}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating AI Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-yellow-300/20 backdrop-blur-sm border border-yellow-400/30 rounded-xl flex items-center justify-center animate-pulse">
                <Lightbulb className="w-5 h-5 text-yellow-300" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-purple-300/20 backdrop-blur-sm border border-purple-400/30 rounded-xl flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                <MessageCircle className="w-5 h-5 text-purple-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
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
  Bot
} from 'lucide-react';

const EnhancedHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const stats = [
    { number: '500+', label: 'Authority Websites Delivered', icon: <Globe className="w-4 h-4" /> },
    { number: '100+', label: 'Brands Worldwide', icon: <Users className="w-4 h-4" /> },
    { number: '1000+', label: '5-Star Reviews', icon: <Star className="w-4 h-4" /> },
    { number: '#1', label: 'Self-Improvement Podcast Site', icon: <TrendingUp className="w-4 h-4" /> },
  ];

  const aiFeatures = [
    { 
      icon: <Brain className="w-6 h-6" />, 
      title: "AI-Powered Design", 
      description: "Smart layouts that convert",
      status: "Active",
      color: "from-purple-500 to-indigo-500"
    },
    { 
      icon: <Rocket className="w-6 h-6" />, 
      title: "Performance Boost", 
      description: "Lightning-fast websites",
      status: "Optimizing",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: <Target className="w-6 h-6" />, 
      title: "Lead Generation", 
      description: "Convert visitors to clients",
      status: "Converting",
      color: "from-green-500 to-emerald-500"
    },
    { 
      icon: <BarChart3 className="w-6 h-6" />, 
      title: "Analytics Engine", 
      description: "Real-time insights",
      status: "Tracking",
      color: "from-orange-500 to-red-500"
    }
  ];

  const clientMessages = [
    "🚀 Transform your online presence",
    "💡 Strategic design that converts",
    "🎯 Position yourself as the expert",
    "📈 Generate more qualified leads"
  ];

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
    <>
      <section
        id="hero-section"
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"
      >
        {/* Animated background pattern */}
        {/* <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        </div> */}

        <div className="container mx-auto lg:top-3 px-4 py-10 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            {/* Left Content - Centered on mobile */}
            <div className="text-center lg:text-left space-y-5 lg:space-y-6">
              {/* Badge */}
              <div
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="inline-flex top-10 items-center gap-2 bg-yellow-300 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full shadow-sm mb-3 lg:mb-4">
                  <Sparkles className="w-3.5 lg:w-4 h-3.5 lg:h-4 text-black" />
                  <span className="text-black font-semibold text-xs">Premium Digital Agency</span>
                </div>
              </div>

              {/* Main Headline - Bigger text on mobile */}
              <h1
                className={`text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3 lg:mb-4 transition-all duration-1000 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <span className="text-white">More Than Just Design</span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                  It's Your Digital Identity
                </span>
              </h1>

              {/* Subheadline - Bigger text on mobile */}
              <p
                className={`text-base lg:text-base text-gray-300 mb-5 lg:mb-7 max-w-xl mx-auto lg:mx-0 transition-all duration-1000 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                We help brands stand out through strategic design that builds trust, positions expertise, and converts leads.
              </p>

              {/* Client Message Banner */}
              <div
                className={`transition-all duration-1000 delay-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-300/20 backdrop-blur-sm border border-yellow-400/30 rounded-xl px-4 py-3 mb-4">
                  <div className="text-center">
                    <p className="text-yellow-300 font-medium text-sm lg:text-base transition-all duration-500">
                      {clientMessages[messageIndex]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated Stat */}
              <div
                className={`transition-all duration-1000 delay-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex flex-col items-center lg:items-start gap-3 lg:gap-4 mb-5 lg:mb-6">
                  <div className="bg-white shadow-lg px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl flex items-center gap-2.5 lg:gap-3">
                    <div className="flex items-center justify-center w-7 lg:w-8 h-7 lg:h-8 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-lg">
                      {stats[currentStat].icon}
                    </div>
                    <div className="text-left">
                      <div className="text-base lg:text-lg font-semibold text-gray-900">{stats[currentStat].number}</div>
                      <div className="text-xs text-gray-600">{stats[currentStat].label}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-white shadow-lg px-3 py-2 rounded-xl">
                    <div className="flex items-center justify-center w-5 lg:w-6 h-5 lg:h-6 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-md">
                      <Check className="w-2.5 lg:w-3 h-2.5 lg:h-3 text-black" />
                    </div>
                    <span className="text-xs text-gray-700 font-medium">
                      Built with conversion psychology
                    </span>
                  </div>
                </div>

                <Button
                  onClick={scrollToContact}
                  size="default"
                  className="bg-yellow-400 text-black font-bold px-5 lg:px-6 py-2.5 lg:py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
                >
                  <span className="flex items-center gap-2">
                    Book a Free Call <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>

                <div className="mt-6 lg:mt-8">
                  <button
                    onClick={() => {
                      const elem = document.getElementById('problems');
                      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex flex-col items-center gap-1 text-xs text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    See how we solve your challenges
                    <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right AI-Powered Agency Dashboard */}
            <div className="relative hidden lg:block">
              {/* Main AI Control Panel */}
              <div
                className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl transition-all duration-1000 delay-800 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center">
                      <Bot className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">AI Agency Engine</h3>
                      <p className="text-yellow-200 text-xs">Powered by Intelligence</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-medium">Live</span>
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
                      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 transition-all duration-300 cursor-pointer ${
                        index === activeFeature ? 'ring-1 ring-yellow-400/50 bg-white/10' : 'hover:bg-white/10'
                      }`}
                      onClick={() => setActiveFeature(index)}
                    >
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="text-yellow-300 scale-75">
                          {feature.icon}
                        </div>
                        <span className="text-white text-xs font-medium">{feature.title}</span>
                      </div>
                      <div className="text-yellow-200/80 text-xs">{feature.status}</div>
                    </div>
                  ))}
                </div>

                {/* AI Workflow Visualization */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-xs font-medium">AI Workflow</span>
                    <div className="flex items-center gap-1">
                      <Cpu className="w-3 h-3 text-yellow-300" />
                      <span className="text-yellow-200 text-xs">Neural Processing</span>
                    </div>
                  </div>
                  
                  {/* Processing Steps */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white text-xs">Analyzing user behavior</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <span className="text-white text-xs">Optimizing conversion paths</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      <span className="text-white text-xs">Generating design insights</span>
                    </div>
                  </div>

                  {/* Neural Network Visualization */}
                  {/* <div className="mt-4 p-3 bg-white/5 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-xs">Neural Network</span>
                      <span className="text-yellow-300 text-xs">97% Accuracy</span>
                    </div>
                    <div className="flex items-center justify-between">
                      {Array.from({ length: 8 }, (_, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <div 
                            className="w-1.5 h-8 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-full transition-all duration-1000"
                            style={{
                              height: `${Math.random() * 20 + 10}px`,
                              animationDelay: `${i * 150}ms`
                            }}
                          />
                          <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-60"></div>
                        </div>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Floating AI Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-yellow-300/20 backdrop-blur-sm border border-yellow-400/30 rounded-xl flex items-center justify-center animate-pulse">
                <Lightbulb className="w-5 h-5 text-yellow-300" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-purple-300/20 backdrop-blur-sm border border-purple-400/30 rounded-xl flex items-center justify-center animate-pulse" style={{animationDelay: '1s'}}>
                <MessageCircle className="w-5 h-5 text-purple-300" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnhancedHero;
import { useEffect, useRef, useState } from 'react';
import {
  AlertTriangle,
  Check,
  ArrowRight,
  ChevronRight,
  Eye,
  MessageSquare,
  Target,
  Users,
  Lightbulb,
  Zap,
  Globe,
  Smartphone,
  Heart,
  TrendingUp,
  Sparkles,
  Cpu
} from 'lucide-react';

const Problem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const problems = [
    {
      icon: <Eye className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Outdated & Generic Design",
      description: "Your website looks like everyone else's",
      detail: "Template designs that scream 'amateur' instead of 'authority'",
      impact: "87% of visitors leave within 15 seconds"
    },
    {
      icon: <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Unclear Messaging",
      description: "Visitors can't understand what you do",
      detail: "Confusing copy that doesn't connect with your ideal audience",
      impact: "64% higher bounce rate than clear messaging"
    },
    {
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Poor Brand Positioning",
      description: "You're underselling your expertise",
      detail: "Missing the strategic positioning that builds trust and authority",
      impact: "Lose 73% of potential high-value clients"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "No Personal Connection",
      description: "Your personality doesn't shine through",
      detail: "Cold, corporate feel instead of authentic personal branding",
      impact: "People buy from people, not websites"
    }
  ];

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
    <section ref={sectionRef} className="py-20 bg-[#1E3A8A] text-white overflow-x-hidden overflow-y-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-[#facc15] px-4 py-2 rounded-full mb-6 border-2 border-[#facc15]">
            <AlertTriangle className="w-4 h-4 text-[#1E3A8A]" />
            <span className="text-[#1E3A8A] font-medium text-sm">The Hidden Problem</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#facc15]">
            You've Built Credibility Offline —
            <br />
            <span className="text-white">But Your Online Presence Doesn't Show It</span>
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Most personal brands lose high-value clients because their digital identity doesn't reflect their real-world expertise and authority.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className={`cursor-pointer border rounded-xl p-6 shadow-sm transition-all duration-300 ${
                activeTab === index 
                  ? 'border-[#facc15] bg-white/10 animate-fade-in' 
                  : 'border-white/20 hover:bg-white/5'
              }`}
            >
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 flex items-center justify-center bg-[#facc15] text-[#1E3A8A] rounded-md">
                  {problem.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{problem.title}</h4>
                  <p className="text-sm text-white/70">{problem.description}</p>
                  {activeTab === index && (
                    <>
                      <p className="text-sm text-white/80 mt-2 animate-fade-in-scale">{problem.detail}</p>
                      <div className="mt-2 p-2 border border-[#facc15]/50 bg-[#facc15]/10 text-sm text-[#facc15] rounded animate-fade-in">
                        ⚠ {problem.impact}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/95 border border-white/20 rounded-3xl p-6 sm:p-8 lg:p-12 transition-all duration-1000 relative overflow-hidden">
          <div className="absolute top-10 right-10 w-24 h-24 sm:w-32 sm:h-32 opacity-5">
            <Sparkles className="w-full h-full text-[#1E3A8A] animate-pulse" />
          </div>
          <div className="absolute bottom-10 left-10 w-24 h-24 sm:w-28 sm:h-28 opacity-5">
            <Cpu className="w-full h-full text-[#facc15] animate-spin" style={{ animationDuration: '20s' }} />
          </div>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1E3A8A]/10 px-4 py-2 rounded-full mb-6 border border-[#1E3A8A]/20">
              <Check className="w-4 h-4 text-[#1E3A8A]" />
              <span className="text-[#1E3A8A] font-medium text-sm">The Technovere Solution</span>
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-[#1E3A8A]">
              We blend premium web design with personal brand strategy
              <span className="text-[#facc15]"> to help you stand out and convert.</span>
            </h3>
            <p className="text-base text-[#1E3A8A]/80 max-w-2xl mx-auto mb-4 leading-relaxed">
              Your website becomes your best sales tool — designed to build trust and connection with your audience.
            </p>
            <p className="text-base text-[#1E3A8A]/80 max-w-2xl mx-auto mb-12 leading-relaxed">
              Whether you're a coach scaling offers, a doctor entering private practice, a founder raising your profile, or a brand building its online presence — we'll bring your brand to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="relative bg-white border border-[#1E3A8A]/10 rounded-2xl p-6 h-full hover:scale-105 hover:shadow-lg transition-all duration-300 overflow-hidden hover:border-[#facc15]/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#facc15]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-[#facc15] rounded-xl mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <div className="text-[#1E3A8A]">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="relative">
                    <h4 className="text-lg font-bold text-[#1E3A8A] mb-3 group-hover:text-[#1E3A8A] transition-colors duration-300">
                      {benefit.title}
                    </h4>
                    <p className="text-[#1E3A8A]/70 text-sm leading-relaxed group-hover:text-[#1E3A8A]/80 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#facc15]/5 to-[#1E3A8A]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://calendly.com/mohammadyusuf025/30min?month=2025-06"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#facc15] hover:bg-[#facc15]/90 text-[#1E3A8A] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base border-2 border-[#1E3A8A]">
                <span className="flex items-center gap-2">
                  Let's Transform Your Brand Together
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.3s ease-out;
        }
      `}</style>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(130%+1.3px)] h-[60px]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39
              -57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8
                C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Problem;
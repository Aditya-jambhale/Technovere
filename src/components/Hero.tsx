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
  AlertTriangle,
  Eye,
  Target,
  ChevronDown,
} from 'lucide-react';

const EnhancedHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { number: '500+', label: 'Authority Websites Delivered', icon: <Globe className="w-5 h-5" /> },
    { number: '100+', label: 'Brands Worldwide', icon: <Users className="w-5 h-5" /> },
    { number: '1000+', label: '5-Star Reviews', icon: <Star className="w-5 h-5" /> },
    { number: '#1', label: 'Self-Improvement Podcast Site', icon: <TrendingUp className="w-5 h-5" /> },
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen bg-gray-50 overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,173,239,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,173,239,0.15)_1px,transparent_1px)] bg-[size:50px_50px] z-0" />

      {/* Colorful Blurs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-60 h-60 bg-gradient-to-br from-[#00ADEF]/10 to-[#FFE500]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-gradient-to-tr from-[#FFE500]/10 to-[#FF6A00]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full border border-blue-200 shadow-sm mb-6">
              <Sparkles className="w-5 h-5 text-[#00ADEF]" />
              <span className="text-[#00ADEF] font-semibold text-sm">Premium Digital Agency</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            More Than Just Design —
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#00ADEF] to-[#FFE500] bg-clip-text text-transparent">
              It's Your Digital Identity
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-base md:text-lg text-gray-600 mb-10 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            We help brands stand out through strategic design that builds trust, positions expertise, and converts leads.
          </p>

          {/* Animated Stat */}
          <div
            className={`transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-8">
              <div className="bg-white border border-gray-200 shadow-md px-6 py-4 rounded-2xl flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[#00ADEF] to-[#FFE500] rounded-xl">
                  {stats[currentStat].icon}
                </div>
                <div className="text-left">
                  <div className="text-xl font-semibold text-gray-900">{stats[currentStat].number}</div>
                  <div className="text-sm text-gray-600">{stats[currentStat].label}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white border border-gray-200 shadow-md px-4 py-3 rounded-2xl">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-[#FFE500] to-[#FF6A00] rounded-lg">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  Built with conversion psychology
                </span>
              </div>
            </div>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-[#00ADEF] to-[#0077b6] text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Book a Free Call <ArrowRight className="w-5 h-5" />
              </span>
            </Button>

            <div className="mt-10">
              <button
                onClick={() => {
                  const elem = document.getElementById('problems');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex flex-col items-center gap-1 text-sm text-gray-500 hover:text-[#00ADEF] transition-colors duration-300"
              >
                See how we solve your challenges
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;

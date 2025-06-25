
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-yellow-50/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-techno-blue/20 to-techno-yellow/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-techno-yellow/20 to-techno-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sora font-bold text-gray-900 mb-6 leading-tight">
              Your Website Is More Than Design —{' '}
              <span className="bg-gradient-to-r from-techno-blue to-techno-yellow bg-clip-text text-transparent">
                It's Your Digital Reputation
              </span>
            </h1>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 font-inter leading-relaxed max-w-3xl mx-auto">
              At Technovere, we build premium websites that position you as an expert, build trust, and drive leads — 
              by combining world-class design with personal brand strategy.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-gray-700 font-inter font-medium">
                <Check className="w-5 h-5 text-green-600" />
                500+ authority websites delivered
              </div>
              <div className="flex items-center gap-2 text-gray-700 font-inter font-medium">
                <Check className="w-5 h-5 text-green-600" />
                Built with branding psychology & conversion in mind
              </div>
            </div>

            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-techno-blue to-techno-yellow text-white font-inter font-bold text-lg px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book Your Free Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

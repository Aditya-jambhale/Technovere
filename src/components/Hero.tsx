
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Zap } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-electric/10 to-cyber/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-accent-purple/10 to-accent-teal/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-neon/5 to-electric/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-electric/10 to-cyber/10 px-6 py-3 rounded-full border border-electric/20 mb-8">
              <Sparkles className="w-5 h-5 text-electric" />
              <span className="text-electric font-poppins font-semibold">Premium Digital Agency</span>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-space font-bold text-dark mb-8 leading-tight">
              Your Website Is More Than Design —{' '}
              <span className="bg-gradient-to-r from-electric via-electric-light to-cyber bg-clip-text text-transparent">
                It's Your Digital Identity
              </span>
            </h1>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 font-poppins leading-relaxed max-w-4xl mx-auto">
              We build premium websites that position you as an expert, build trust, and drive leads — 
              combining world-class design with strategic brand positioning.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-cyber to-accent-teal rounded-full">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-poppins font-semibold">500+ authority websites delivered</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-electric to-accent-purple rounded-full">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-poppins font-semibold">Built with psychology & conversion in mind</span>
              </div>
            </div>

            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-electric to-electric-light text-white font-space font-bold text-xl px-12 py-6 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Book Your Free Discovery Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-light to-cyber opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

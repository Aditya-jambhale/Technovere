
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-techno-blue to-techno-yellow relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sora font-bold text-white mb-6 leading-tight">
              Let's Build a Website That{' '}
              <span className="text-techno-yellow">
                Reflects Your Worth
              </span>
            </h2>
          </div>

          <div className={`transition-all duration-800 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-inter leading-relaxed">
              Ready to create a website that's more than just pretty — one that works as hard as you do?
            </p>
          </div>

          <div className={`transition-all duration-800 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-techno-blue font-inter font-bold text-lg px-12 py-6 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-gray-50"
            >
              Book Your Discovery Call
            </Button>
          </div>

          <div className={`mt-12 transition-all duration-800 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="grid md:grid-cols-3 gap-8 text-white">
              <div>
                <div className="text-3xl font-sora font-bold mb-2">500+</div>
                <div className="font-inter">Websites Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-sora font-bold mb-2">Global</div>
                <div className="font-inter">Client Base</div>
              </div>
              <div>
                <div className="text-3xl font-sora font-bold mb-2">Premium</div>
                <div className="font-inter">Quality Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

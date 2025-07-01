import { useEffect, useRef, useState } from 'react';
import { Calendar, ArrowRight, Star, Users, Trophy } from 'lucide-react';
import { Phone } from 'lucide-react';

// Typing component for the main heading
const TypingText = ({
  text,
  delay = 50,
  loop = true,
  className = '',
}: {
  text: string;
  delay?: number;
  loop?: boolean;
  className?: string;
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (index <= text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index));
        setIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (loop) {
      const restartTimeout = setTimeout(() => {
        setIndex(0);
        setDisplayedText('');
        setCycle((prev) => prev + 1);
      }, 2500);
      return () => clearTimeout(restartTimeout);
    }
  }, [index, text, delay, loop, cycle]);

  return (
    <h2 className={className}>
      {displayedText}
      <span className="text-yellow-500 animate-pulse">|</span>
    </h2>
  );
};

const PremiumCTAFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToCalendar = () => {
    const calendarElement = document.getElementById('calendar-embed');
    if (calendarElement) {
      calendarElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section ref={sectionRef} id='Contact' className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-purple-400/50 to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"></div>
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Contact Us Heading */}
        <div className="text-center text-2xl md:text-3xl lg:text-4xl text-black font-bold  mb-16">
         <p>Contact Us </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="order-2 lg:order-1">
            <div
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              {/* Trust */}
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="text-black ml-2 text-sm">5.0 • 200+ Reviews</span>
                </div>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
              Let’s Build a Website That Reflects Your Worth.
              </h2>

              {/* Subheading */}
              <p className="text-xl md:text-xl lg:text-xl text-black mb-8 leading-relaxed max-w-2xl">
               Book a free discovery call to explore your brand, vision, and how we can bring it to life.
              </p>

              {/* CTA Button */}
            <a
  href="https://calendly.com/mohammadyusuf025/30min?month=2025-06"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-3 bg-yellow-300 hover:bg-yellow-500 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 hover:ring-2 hover:ring-purple-300/50"
>
  <Phone className="w-5 h-5 text-purple-700" />
  Schedule My Call
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
</a>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6 text-white">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    <span className="text-xl font-bold text-black">500+</span>
                  </div>
                  <p className="text-black/60 text-sm">Projects Delivered</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <Users className="w-5 h-5 text-green-400" />
                    <span className="text-xl font-bold text-black">Global</span>
                  </div>
                  <p className="text-black/60 text-sm">Client Network</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <Star className="w-5 h-5 text-gray-400" />
                    <span className="text-xl font-bold text-black">Premium</span>
                  </div>
                  <p className="text-black/60 text-sm">Quality Assured</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Calendar Embed */}
          <div className="order-1 lg:order-2">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
              <div className="relative">
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl"></div>

                  {/* Header */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-black font-semibold text-lg">Book Your Discovery Call</h3>
                        <p className="text-black/60 text-sm">Choose your preferred time slot</p>
                      </div>
                    </div>
                  </div>

                  {/* Embedded Calendar */}
                  <div id="calendar-embed" className="relative z-10">
                    <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                      <iframe
                        src="https://calendly.com/mohammadyusuf025/30min?month=2025-06"
                        width="100%"
                        height="500"
                        style={{
                          border: 'none',
                          borderRadius: '12px',
                          minHeight: '400px',
                        }}
                        loading="lazy"
                        allowTransparency={true}
                        title="Schedule Discovery Call"
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    Free Consultation
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styling */}
      <style>{`
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          iframe {
            min-height: 450px;
          }
        }

        @media (max-width: 480px) {
          iframe {
            min-height: 400px;
          }
        }
      `}</style>
    </section>
  );
};

export default PremiumCTAFooter;
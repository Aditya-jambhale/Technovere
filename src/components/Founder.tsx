
import { useEffect, useRef, useState } from 'react';
import { Award, Code, Globe, Users } from 'lucide-react';

const Founder = () => {
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

  const achievements = [
    {
      icon: <Users className="w-6 h-6" />,
      number: "500+",
      text: "Projects Delivered"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      number: "Global",
      text: "Client Reach"
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "15+",
      text: "Certifications"
    },
    {
      icon: <Code className="w-6 h-6" />,
      number: "Full-Stack",
      text: "Expertise"
    }
  ];

  const keyCredentials = [
    "B.Tech Computer Science - Web & Cybersecurity",
    "Front-End Development - University of Michigan",
    "Digital Marketing & Strategy - IIT Delhi",
    "Meta Ads & Performance Marketing - Meta",
    "UI/UX, SEO & Conversion Optimization"
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-sora font-bold text-gray-900 mb-4">
              Meet the{' '}
              <span className="bg-gradient-to-r from-techno-blue to-techno-yellow bg-clip-text text-transparent">
                Founder
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
              From Code to Clients: The Engineer Behind Technovere
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Image and Stats */}
            <div className={`transition-all duration-800 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <div className="relative inline-block">
                    <img 
                      src="/images/photo.png" 
                      alt="Mohd Yusuf - Founder of Technovere" 
                      className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl mx-auto shadow-xl"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-techno-blue to-techno-yellow p-3 rounded-full">
                      <img 
                        src="/lovable-uploads/7737980a-d540-439e-aeb0-baa810486434.png" 
                        alt="Technovere Logo" 
                        className="w-8 h-8"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-sora font-bold text-gray-900 mt-6 mb-2">
                    Mohd Yusuf
                  </h3>
                  <p className="text-techno-blue font-inter font-semibold">
                    Founder & Lead Engineer
                  </p>
                </div>

                {/* Achievement Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="flex justify-center text-techno-blue mb-2">
                        {achievement.icon}
                      </div>
                      <div className="text-xl font-sora font-bold text-gray-900">
                        {achievement.number}
                      </div>
                      <div className="text-sm font-inter text-gray-600">
                        {achievement.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Story and Credentials */}
            <div className={`transition-all duration-800 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-sora font-bold text-gray-900 mb-4">
                    The Story
                  </h4>
                  <p className="text-gray-700 font-inter leading-relaxed mb-4">
                    A software engineer who began freelancing in his second year of college with one goal: 
                    to help more people build their presence online.
                  </p>
                  <p className="text-gray-700 font-inter leading-relaxed">
                    As the founder of Technovere, Yusuf blends engineering precision with brand-first creativity, 
                    helping businesses and creators turn their online presence into a growth engine.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-sora font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-techno-blue" />
                    Key Credentials
                  </h4>
                  <div className="space-y-3">
                    {keyCredentials.map((credential, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-techno-blue to-techno-yellow rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-700 font-inter text-sm leading-relaxed">
                          {credential}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className={`transition-all duration-800 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-techno-blue/5 to-techno-yellow/5 rounded-2xl p-8 text-center border border-techno-blue/10">
              <div className="text-6xl text-techno-blue/20 mb-4">"</div>
              <blockquote className="text-xl font-inter text-gray-700 italic mb-6 max-w-4xl mx-auto">
                To me, it's never just about a website or a reel. It's about building something that 
                positions you, performs well, and scales fast. That's the Technovere mindset.
              </blockquote>
              <div className="text-gray-600 font-inter font-semibold">
                — Mohd Yusuf, Founder
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className={`mt-12 text-center transition-all duration-800 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-sora font-bold text-gray-900 mb-4">
                Leading a World-Class Team
              </h4>
              <p className="text-gray-700 font-inter leading-relaxed max-w-3xl mx-auto">
                Today, Yusuf leads a hand-picked creative and development team that delivers everything from 
                web design and software, to content, personal branding, and growth consulting — trusted by 
                founders, coaches, doctors, startups, and global service brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;

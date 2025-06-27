import { useEffect, useRef, useState } from 'react';
import {
  AlertTriangle,
  X,
  Check,
  ArrowRight,
  Eye,
  MessageSquare,
  Target,
  Zap,
  Users,
  TrendingUp,
  Globe,
  Smartphone
} from 'lucide-react';

const Problem = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const problems = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Your website looks outdated or templated",
      description: "Generic designs that blend into the background"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Your story isn't clearly told",
      description: "Visitors leave confused about what you actually do"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Your expertise isn't positioned right",
      description: "You're underselling your value and experience"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "You're selling yourself, not just a service",
      description: "But your website doesn't reflect your personal brand"
    }
  ];

  const solutions = [
    {
      icon: <Check className="w-6 h-6" />,
      title: "Custom website aligned with your personal brand",
      description: "Unique design that reflects your personality and expertise"
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Clear messaging that connects with your ideal audience",
      description: "Story-driven content that builds emotional authority"
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Trust-building design with conversion psychology",
      description: "Strategic positioning that showcases your credibility"
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Everything from tech to content — done for you",
      description: "Complete solution so you can focus on what you do best"
    }
  ];

  const benefits = [
    { icon: <Target className="w-5 h-5" />, text: "Custom website design built on personal brand positioning" },
    { icon: <Users className="w-5 h-5" />, text: "Clear messaging that connects with your ideal audience" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Design psychology for high-trust service providers" },
    { icon: <Smartphone className="w-5 h-5" />, text: "Mobile-first, SEO-optimized, blazing fast" },
    { icon: <Globe className="w-5 h-5" />, text: "Story-driven layout that builds emotional authority" },
    { icon: <Zap className="w-5 h-5" />, text: "Tech + strategy + content all handled in one place" }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              You've built credibility offline — but your{' '}
              <span className="text-red-500">online presence doesn't show it</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most personal brands lose clients because their digital presence doesn't match their real-world expertise
            </p>
          </div>

          {/* Split Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
            {/* Problem Side */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200/50 p-8 lg:p-10 rounded-3xl border border-gray-200 relative">
                {/* Curved Divider */}
                <div className="hidden lg:block absolute -right-6 top-0 bottom-0 w-12">
                  <svg className="w-full h-full" viewBox="0 0 48 400" fill="none">
                    <path d="M0 0 Q24 200 0 400" stroke="url(#problemGradient)" strokeWidth="2" fill="none" opacity="0.3"/>
                    <defs>
                      <linearGradient id="problemGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex items-center gap-3 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">What's Holding You Back?</h3>
                </div>

                <div className="space-y-6">
                  {problems.map((problem, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start gap-4 group transition-all duration-500 delay-${(index + 3) * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                    >
                      <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-lg flex-shrink-0 group-hover:bg-red-200 transition-colors duration-300">
                        <X className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{problem.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Problem Visual Element */}
                <div className="mt-8 pt-6 border-t border-gray-300">
                  <div className="flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-red-200">
                      <div className="flex items-center gap-2 text-red-500 text-sm font-medium">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Lost opportunities every day</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Side */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 lg:p-10 rounded-3xl border border-green-200 relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">The Technovere Solution</h3>
                </div>

                <div className="space-y-6">
                  {solutions.map((solution, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start gap-4 group transition-all duration-500 delay-${(index + 6) * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                    >
                      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex-shrink-0 group-hover:from-green-200 group-hover:to-blue-200 transition-all duration-300">
                        <Check className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{solution.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Solution Visual Element */}
                <div className="mt-8 pt-6 border-t border-green-200">
                  <div className="flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-green-200">
                      <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                        <TrendingUp className="w-4 h-4" />
                        <span>Your best sales tool</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Connection (Desktop Only) */}
          <div className="hidden lg:flex justify-center mb-16 -mt-12">
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-blue-200">
                <span className="text-red-500 font-semibold">❌ Problems</span>
                <ArrowRight className="w-5 h-5 text-blue-500" />
                <span className="text-green-600 font-semibold">✅ Solutions</span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We blend <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">premium web design</span> with personal brand strategy
              </h3>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Whether you're a <span className="font-semibold text-blue-600">coach scaling offers</span>, 
                a <span className="font-semibold text-purple-600">doctor entering private practice</span>, 
                a <span className="font-semibold text-green-600">founder raising your profile</span>, or 
                <span className="font-semibold text-orange-600"> brands building their online presence</span> — 
                we'll bring your brand to life.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-3 bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 delay-${(index + 10) * 50} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-800">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
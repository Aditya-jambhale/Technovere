  // third solution of horizontal things 
  import { useEffect, useRef, useState } from 'react';
  import {
    AlertTriangle,
    ArrowRight,
    Eye,
    MessageSquare,
    Target,
    Heart,
    TrendingUp,
    Sparkles,
Zap,Star
  } from 'lucide-react';

  const Problem = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [problemsVisible, setProblemsVisible] = useState(false);
    const [solutionVisible, setSolutionVisible] = useState(false);
    const sectionRef = useRef(null);
    const problemsRef = useRef(null);
    const solutionRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) setIsVisible(true);
            if (entry.target === problemsRef.current) setProblemsVisible(true);
            if (entry.target === solutionRef.current) setSolutionVisible(true);
          }
        });
      }, { threshold: 0.2 });

      if (sectionRef.current) observer.observe(sectionRef.current);
      if (problemsRef.current) observer.observe(problemsRef.current);
      if (solutionRef.current) observer.observe(solutionRef.current);

      return () => observer.disconnect();
    }, []);

    const problems = [
      { icon: <Eye className="w-6 h-6" />, title: "Outdated & Templated", description: "Your website looks like everyone else's" },
      { icon: <MessageSquare className="w-6 h-6" />, title: "Story Isn't Clear", description: "Your expertise isn't positioned right" },
      { icon: <Target className="w-6 h-6" />, title: "Missing Connection", description: "Visitors don't feel they know you" },
    ];

    const solutions = [
      { icon: <Heart className="w-6 h-6" />, title: "Premium Design", description: "Beautiful, custom websites that reflect your expertise" },
      { icon: <MessageSquare className="w-6 h-6" />, title: "Clear Messaging", description: "Tell your story in a way that builds trust" },
      { icon: <TrendingUp className="w-6 h-6" />, title: "Strategic Positioning", description: "Position yourself as the go-to expert" },
    ];

    return (
      <section ref={sectionRef} className="py-16 bg-gradient-to-br from-gray-50 to-white text-black overflow-visible relative">
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          {/* Header */}
         {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-yellow-400">
              You've Built Credibility Offline <br />
              <span className="text-[#1E3A8A]">But Your Online Presence Doesn't Show It</span>
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Left Side - Single Paragraph */}
            <div ref={problemsRef} className={`transition-all duration-1000 ${problemsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">The Reality Check</h3>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  You've built real expertise and credibility offline. Your clients trust you and pay premium rates because they know you deliver results. But your website doesn't reflect that expertise - it looks generic and templated. Visitors can't see what makes you different, so they leave without understanding your value. We create websites that showcase your expertise and convert visitors into clients who are already sold on your value.
                </p>
              </div>
            </div>

            {/* Right Side - Two Column Comparison */}
            <div ref={solutionRef} className={`transition-all duration-1000 ${solutionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Problem Column */}
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-4 text-center">The Problem</h3>
                  <div className="space-y-3">
                    {problems.map((p, i) => (
                      <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-red-100 group hover:shadow-md transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                            {p.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 text-sm">{p.title}</h4>
                            <p className="text-gray-600 text-xs">{p.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solution Column */}
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A8A] mb-4 text-center">Technovere Solution</h3>
                  <div className="space-y-3">
                    {solutions.map((s, i) => (
                      <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-blue-100 group hover:shadow-md transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-[#1E3A8A] group-hover:text-white transition-all duration-300">
                            {s.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 text-sm">{s.title}</h4>
                            <p className="text-gray-600 text-xs">{s.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        
       
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          className="relative block w-[calc(130%+1.3px)] h-[40px]"

          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39
                -57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8
                  C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="#1E3A8A"
            ></path>
          </svg>
        </div>
      </section>
    );
  };

  export default Problem;
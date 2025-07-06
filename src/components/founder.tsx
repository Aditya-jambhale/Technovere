import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

const AboutFounder = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

   const credentials = [
  "B.Tech in Computer Science — Specialization in Web & Cybersecurity",
  "Certified in Object-Oriented Programming (Java)",
  "Front-End Web UI Frameworks – HKUST",
  "Front-End Development – University of Michigan",
  "Cybercrime Projects & Ethical Hacking Training",
  "Technical Support Fundamentals – Google",
  "National Social Summit – IIT Roorkee",
  "Digital Marketing & Strategy – IIT Delhi",
  "Meta Ads & Performance Marketing – Meta",
  "Cybersecurity Essentials – Cisco",
  "Plus 15+ other credentials in UI/UX, SEO, Branding, and Conversion Optimization"
];


    return (
        <section ref={sectionRef} className="py-20 bg-white relative ">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div
                        className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            About the Founder
                        </h2>
                        <p className="text-xl md:text-2xl text-[#00AEEF] font-semibold max-w-3xl mx-auto">
                            From Code to Clients: The Engineer Behind Technovere
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Side - Founder Image */}
                        <div
                            className={`lg:sticky lg:top-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                                }`}
                        >
                            <div className="relative">
                                {/* Decorative Background */}
                                <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/30 to-yellow-100/20 rounded-3xl blur-xl"></div>

                                {/* Main Card */}
                                <div className="relative bg-white border border-gray-200 rounded-3xl p-6 shadow-xl">
                                    {/* Badge */}
                                    <div className="absolute -top-4 left-6 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2 shadow-md">
                                        <span>👨‍💻</span>
                                        <span>Founder & Creative Director</span>
                                    </div>

                                    {/* Image */}
                                    <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden mb-6 ring-4 ring-blue-200">
                                        <img
                                            src="/images/photo.png"
                                            alt="Mohd Yusuf - Founder of Technovere"
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                const img = e.target as HTMLImageElement;
                                                img.style.display = 'none';
                                                const fallback = img.nextElementSibling as HTMLElement | null;
                                                if (fallback) fallback.style.display = 'flex';
                                            }}
                                        />
                                        <div
                                            className="w-full h-full bg-gray-300 rounded-2xl flex items-center justify-center text-gray-800 text-4xl font-bold"
                                            style={{ display: 'none' }}
                                        >
                                            MY
                                        </div>
                                    </div>

                                    {/* Name & Stats */}
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Mohd Yusuf</h3>
                                        <p className="text-blue-600 font-medium mb-4">Founder & Creative Director</p>
                                        <div className="grid grid-cols-2 gap-4 mt-6">
                                            <div className="text-center p-4 bg-gray-50 rounded-xl">
                                                <div className="text-xl font-bold text-gray-900">500+</div>
                                                <div className="text-sm text-gray-600">Projects Delivered</div>
                                            </div>
                                            <div className="text-center p-4 bg-gray-50 rounded-xl">
                                                <div className="text-xl font-bold text-gray-900">15+</div>
                                                <div className="text-sm text-gray-600">Certifications</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Story Content */}
                        <div
                            className={`space-y-10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                                }`}
                        >
                            {/* Story */}
                            <div>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Meet <strong className="text-gray-900">Mohd Yusuf</strong> — a software engineer who began freelancing in his second year of college with one goal: to help more people build their presence online. As the founder of Technovere, Yusuf blends engineering precision with brand-first creativity, helping businesses, creators, and consultants turn their online presence into a growth engine.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    What began as college freelancing has now evolved into a <strong className="text-gray-900">500+ project portfolio</strong>, with clients featured on <strong className="text-blue-600">Forbes, CW, Yahoo Finance, Fast Company</strong>, and more.
                                </p>
                            </div>

                            {/* Certifications */}
                            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <span>🧠</span>
                                    Certified in Innovation
                                </h4>
                                <div className="space-y-4">
                                    {credentials.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <p className="text-gray-700 leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
                                <div className="absolute top-3 left-4 text-6xl text-yellow-200/20 font-serif">“</div>
                                <div className="relative z-10">
                                    <p className="text-xl leading-relaxed mb-4 italic">
                                        To me, it's never just about a website or a reel. It's about building something that positions you, performs well, and scales fast. That's the Technovere mindset.
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                        <span className="font-semibold text-yellow-300">Mohd Yusuf</span>
                                    </div>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href="https://calendly.com/mohammadyusuf025/30min?month=2025-06"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-6 py-4 rounded-xl text-center transition-all"
                                >
                                    📅 Book a Free Discovery Call
                                </a>
                                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-xl transition-all">
                                    🔗 Connect with Yusuf
                                </button>
                                <button className="flex-1 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-6 py-4 rounded-xl transition-all">
                                    📄 More About the Founder
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] ">
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
           fill="#1E3A8A"

            ></path>
          </svg>
        </div>
        </section>
    );
};

export default AboutFounder;

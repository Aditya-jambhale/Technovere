import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronLeft, ChevronRight, Award, Code, Users, Globe } from 'lucide-react';

const AboutFounder = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
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

    const credentialSlides = [
        credentials.slice(0, 4),
        credentials.slice(4, 8),
        credentials.slice(8, 11)
    ];

    const highlights = [
        { icon: Users, title: "500+", subtitle: "Projects Delivered" },
        { icon: Globe, title: "3+", subtitle: "Countries Served" },
        { icon: Award, title: "15+", subtitle: "Certifications" },
        { icon: Code, title: "5+", subtitle: "Years Experience" }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % credentialSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + credentialSlides.length) % credentialSlides.length);
    };

    return (
        <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
             <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-40"></div>
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
                            Leadership
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                            Meet the Founder
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From Code to Clients: The Engineer Behind Technovere
                        </p>
                    </div>

                    {/* Main Content - Two Column Layout */}
                    <div className="grid lg:grid-cols-5 gap-12 items-start">
                        {/* Left Side - Founder Image (2 columns) */}
                        <div className="lg:col-span-2">
                            <div className="sticky top-8">
                                <div className="relative">
                                    {/* Main Image Card */}
                                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                                        {/* Badge */}
                                        <div className="absolute -top-3 left-6 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                                            Founder & Creative Director
                                        </div>

                                        {/* Image */}
                                        <div className="w-full aspect-square rounded-xl overflow-hidden mb-6 bg-gray-100">
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
                                                className="w-full h-full bg-blue-900 rounded-xl flex items-center justify-center text-white text-4xl font-bold"
                                                style={{ display: 'none' }}
                                            >
                                                MY
                                            </div>
                                        </div>

                                        {/* Name & Title */}
                                        <div className="text-center">
                                            <h3 className="text-2xl font-bold text-blue-900 mb-2">ER.Mohd Yusuf</h3>
                                            <p className="text-gray-600 font-medium mb-6">Founder & Creative Director</p>
                                            
                                            {/* Quote */}
                                            <div className="bg-blue-900 rounded-lg p-6 text-white">
                                                <p className="text-sm leading-relaxed italic">
                                                    "It's never just about a website. It's about building something that positions you, performs well, and scales fast."
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content (3 columns) */}
                        <div className="lg:col-span-3 space-y-8">
                            {/* Story Card */}
                            <div className="bg-gray-50 rounded-xl p-8">
                                <h4 className="text-2xl font-bold text-blue-900 mb-6">The Story</h4>
                                <div className="space-y-4">
                                    <p className="text-gray-700 leading-relaxed">
                                        Meet <strong className="text-blue-900">Mohd Yusuf</strong> — a software engineer who began freelancing in his second year of college with one goal: to help more people build their presence online.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        As the founder of Technovere, Yusuf blends engineering precision with brand-first creativity, helping businesses turn their online presence into a growth engine.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        What began as college freelancing has now evolved into a <strong className="text-blue-900">500+ project portfolio</strong>, with clients featured on <strong className="text-yellow-600">Forbes, CW, Yahoo Finance, Fast Company</strong>, and more.
                                    </p>
                                </div>
                            </div>

                            {/* Highlights Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {highlights.map((highlight, index) => {
                                    const IconComponent = highlight.icon;
                                    return (
                                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-3">
                                                <IconComponent className="w-6 h-6 text-black" />
                                            </div>
                                            <div className="text-2xl font-bold text-blue-900 mb-1">{highlight.title}</div>
                                            <div className="text-sm text-gray-600">{highlight.subtitle}</div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Certifications Slider */}
                            <div className="bg-white border border-gray-200 rounded-xl p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <h4 className="text-2xl font-bold text-blue-900 flex items-center gap-3">
                                        <Award className="w-6 h-6 text-yellow-400" />
                                        Certifications & Training
                                    </h4>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={prevSlide}
                                            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="relative overflow-hidden">
                                    <div 
                                        className="flex transition-transform duration-300 ease-in-out"
                                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                    >
                                        {credentialSlides.map((slide, slideIndex) => (
                                            <div key={slideIndex} className="w-full flex-shrink-0">
                                                <div className="space-y-3">
                                                    {slide.map((item, index) => (
                                                        <div key={index} className="flex items-start gap-3">
                                                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                                                                <Check className="w-3 h-3 text-white" />
                                                            </div>
                                                            <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Slide Indicators */}
                                <div className="flex justify-center gap-2 mt-6">
                                    {credentialSlides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`w-3 h-3 rounded-full transition-colors ${
                                                index === currentSlide ? 'bg-yellow-400' : 'bg-gray-300'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* CTA Section */}
                            <div className="bg-blue-900 rounded-xl p-8 text-white">
                                <h4 className="text-xl font-bold mb-4">Ready to Work with Yusuf?</h4>
                                <p className="text-blue-100 mb-6">
                                    Get a free discovery call and see how we can transform your digital presence.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="https://calendly.com/mohammadyusuf025/30min?month=2025-06"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg text-center transition-all"
                                    >
                                        Book Discovery Call
                                    </a>
                                    <button className="flex-1 border border-white hover:bg-white hover:text-blue-900 font-semibold px-6 py-3 rounded-lg transition-all">
                                        View Portfolio
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Wave Separator */}
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
                        fill="#1E3A8A"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default AboutFounder;
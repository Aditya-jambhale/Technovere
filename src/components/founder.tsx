import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronLeft, ChevronRight, Award, Code, Users, Globe, Linkedin, Instagram } from 'lucide-react';

const AboutFounder = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sectionRef = useRef(null);

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
        <section ref={sectionRef} className="py-16 sm:py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide mb-3 sm:mb-4">
                            Leadership
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-4 sm:mb-6">
                            Meet the Founder
                        </h2>
                        <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto">
                            From Code to Clients: The Engineer Behind Technovere
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 sm:gap-12 items-start">
                        <div className="lg:col-span-2">
                            <div className="sticky top-8">
                                <div className="relative">
                                    <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg">
                                        <div className="absolute -top-3 left-4 sm:left-6 bg-yellow-400 text-black px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                                            Founder & Creative Director
                                        </div>
                                        <div className="w-full aspect-square rounded-xl overflow-hidden mb-5 sm:mb-6 bg-gray-100">
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
                                                className="w-full h-full bg-blue-900 rounded-xl flex items-center justify-center text-white text-3xl sm:text-4xl font-bold"
                                                style={{ display: 'none' }}
                                            >
                                                MY
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-1 sm:mb-2">ER.Mohd Yusuf</h3>
                                            <p className="text-gray-600 text-sm sm:text-base font-medium mb-4 sm:mb-6">Founder & Creative Director</p>
                                            <div className="bg-blue-900 rounded-lg p-4 sm:p-6 text-white">
                                                <p className="text-sm sm:text-base leading-relaxed italic">
                                                    "It's never just about a website. It's about building something that positions you, performs well, and scales fast."
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3 space-y-8">
                            <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
                                <h4 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">The Story</h4>
                                <div className="space-y-4">
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                        Meet <strong className="text-blue-900">ER.Mohd Yusuf</strong> — a software engineer who began freelancing in his second year of college with one goal: to help more people build their presence online.
                                    </p>
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                        As the founder of Technovere, Yusuf blends engineering precision with brand-first creativity, helping businesses turn their online presence into a growth engine.
                                    </p>
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                        What began as college freelancing has now evolved into a <strong className="text-blue-900">500+ project portfolio</strong>, with clients featured on <strong className="text-blue-900">Forbes, CW, Yahoo Finance, Fast Company</strong>, and more.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {highlights.map((highlight, index) => {
                                    const IconComponent = highlight.icon;
                                    return (
                                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 text-center hover:shadow-md transition-shadow">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                                                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                                            </div>
                                            <div className="text-lg sm:text-2xl font-bold text-blue-900 mb-1">{highlight.title}</div>
                                            <div className="text-xs sm:text-sm text-gray-600">{highlight.subtitle}</div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
                                <div className="flex items-center justify-between mb-4 sm:mb-6">
                                    <h4 className="text-xl sm:text-2xl font-bold text-blue-900 flex items-center gap-2 sm:gap-3">
                                        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                                        Certifications & Training
                                    </h4>
                                    <div className="flex gap-2">
                                        <button onClick={prevSlide} className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center">
                                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </button>
                                        <button onClick={nextSlide} className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center">
                                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </button>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden">
                                    <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                        {credentialSlides.map((slide, slideIndex) => (
                                            <div key={slideIndex} className="w-full flex-shrink-0">
                                                <div className="space-y-3">
                                                    {slide.map((item, index) => (
                                                        <div key={index} className="flex items-start gap-3">
                                                            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                                                <Check className="w-2.5 h-2.5 text-white" />
                                                            </div>
                                                            <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-center gap-2 mt-5">
                                    {credentialSlides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-yellow-400' : 'bg-gray-300'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="bg-blue-900 text-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                                <div className="text-center sm:text-left">
                                    <h2 className="text-xl font-semibold">Ready to Work with Yusuf?</h2>
                                    <p className="text-sm mt-1">Get a free discovery call and see how we can transform your digital presence.</p>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <a
                                        href="https://calendly.com/mohammadyusuf025/30min?month=2025-06"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg text-center transition-all"
                                    >
                                        Book Discovery Call
                                    </a>

                                    <div className="flex gap-4">
                                        <a
                                            href="https://www.instagram.com/digitallyusuf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:scale-110 transition-transform"
                                        >
                                            <Instagram size={24} />
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/digitallyusuf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:scale-110 transition-transform"
                                        >
                                            <Linkedin size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
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
                    />
                </svg>
            </div> */}
        </section>
    );
};

export default AboutFounder;

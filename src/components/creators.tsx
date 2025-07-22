import React, { useState, useRef, useEffect } from 'react';
import { Instagram, Youtube, Linkedin, Twitter, Mic, ChevronLeft, ChevronRight, Globe2, GlobeIcon } from 'lucide-react';
import { Globe } from './magicui/globe';

const creators = [
    {
        name: "BigPoppaCode",
        subtitle: "Arthur B Junior - Founder",
        primaryStat: "80K YouTube",
        secondaryStat: "700K+ Instagram",
        profileImage: "/creators/bigpop.png",
        socialLinks: {
            youtube: "https://youtube.com/@bigpoppacode",
            instagram: "https://instagram.com/bigpoppacode"
        },
        primaryIcon: Youtube,
        secondaryIcon: Instagram,
        verified: true
    },
    {
        name: "Mick Unplugged",
        subtitle: "Mick Hunt - #1 Self-Improvement Podcast",
        primaryStat: "833K Instagram",
        secondaryStat: "60K YouTube",
        profileImage: "/creators/michunt.png",
        socialLinks: {
            instagram: "https://www.instagram.com/mickunplugged/",
            youtube: "https://www.youtube.com/@themodernleader",
            podcast: "https://podcasts.apple.com/us/podcast/mick-unplugged/id1731755953"
        },
        primaryIcon: Instagram,
        secondaryIcon: Youtube,
        verified: true
    },
    {
        name: "Hamiora.art",
        subtitle: "Founder of @shaka_tribe",
        primaryStat: "61K Instagram",
        secondaryStat: "Artist",
        profileImage: "/creators/hamiora.png",
        socialLinks: {
            instagram: "https://www.instagram.com/hamiora.art/",
            website: "https://www.hamiora.com"
        },
        primaryIcon: Instagram,
        secondaryIcon: GlobeIcon,
        verified: true
    },
    {
        name: "Tim Perreira",
        subtitle: "Mental Fitness Coach",
        primaryStat: "34K+ LinkedIn",
        secondaryStat: "Coach",
        profileImage: "/creators/tim.png",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/timperreira/",
            instagram: "https://www.instagram.com/tim.perreira/"
        },
        primaryIcon: Linkedin,
        secondaryIcon: Instagram,
        verified: true
    },
    {
        name: "Anish Lalchandani",
        subtitle: "Leadership Expert",
        primaryStat: "11K+ LinkedIn",
        secondaryStat: "Speaker",
        profileImage: "/creators/Anish.png",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/anishlalchandanichro/",
            instagram: ""
        },
        primaryIcon: Linkedin,
        secondaryIcon: Instagram,
        verified: true
    },
    {
        name: "Karthik Puvvada",
        subtitle: "Founder, Build in Public",
        primaryStat: "58K Twitter",
        secondaryStat: "Entrepreneur",
        profileImage: "https://via.placeholder.com/100x100/FFD700/000000?text=KP",
        socialLinks: {
            twitter: "https://twitter.com/karthikpuvvada"
        },
        primaryIcon: Twitter,
        secondaryIcon: Instagram,
        verified: true
    }
];

const CreatorShowcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!isPaused && !isMobile) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev === creators.length - 1 ? 0 : prev + 1));
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isPaused, isMobile]);

    const handleCreatorClick = (creator) => {
        const { socialLinks } = creator;
        const primaryLink = socialLinks.instagram || socialLinks.youtube || 
                            socialLinks.linkedin || socialLinks.twitter || 
                            socialLinks.website || socialLinks.podcast;
        if (primaryLink) {
            window.open(primaryLink, '_blank');
        }
    };

    const handlePrevious = () => {
        setIsPaused(true);
        setCurrentIndex((prev) => (prev === 0 ? creators.length - 1 : prev - 1));
        setTimeout(() => setIsPaused(false), 2000);
    };

    const handleNext = () => {
        setIsPaused(true);
        setCurrentIndex((prev) => (prev === creators.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsPaused(false), 2000);
    };

    const getVisibleCreators = () => {
        if (isMobile) {
            return [creators[currentIndex]];
        }
        return [...creators, ...creators, ...creators];
    };

    return (
        <div className=" mt-10 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-4 md:mb-2 animate-fade-in">
                    <div className="text-center mb-4 md:mb-14">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-4">
                            Top Creators We've Worked With
                        </h2>
                        <p className="text-base md:text-xl text-white max-w-3xl mx-auto px-4">
                            Trusted by some of the most influential creators across platforms.
                            {/* <span className="block mt-2 text-sm md:text-lg text-white/80">
                                Here's a glimpse of the creators who trust Technovere to elevate their brand:
                            </span> */}
                        </p>
                    </div>

                    <div className="relative">
                        {/* Mobile Navigation Buttons */}
                        {isMobile && (
                            <>
                                <button
                                    onClick={handlePrevious}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-yellow-400/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-yellow-400/30 hover:bg-yellow-400/40 transition-all duration-300"
                                    aria-label="Previous creator"
                                >
                                    <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                                </button>
                                
                                <button
                                    onClick={handleNext}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-yellow-400/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-yellow-400/30 hover:bg-yellow-400/40 transition-all duration-300"
                                    aria-label="Next creator"
                                >
                                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                                </button>
                            </>
                        )}

                        {/* Scroll Container */}
                        <div 
                            className="overflow-hidden mb-6 md:mb-8"
                            ref={scrollRef}
                            onMouseEnter={() => !isMobile && setIsPaused(true)}
                            onMouseLeave={() => !isMobile && setIsPaused(false)}
                        >
                            {isMobile ? (
                                // Mobile: Single card view with smooth transitions
                                <div className="flex justify-center px-8">
                                    <div
                                        key={currentIndex}
                                        onClick={() => handleCreatorClick(creators[currentIndex])}
                                        className="group relative w-80 max-w-[calc(100vw-4rem)] h-96 bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:border-yellow-400/40 transition-all duration-500 cursor-pointer hover:scale-105 animate-fade-in"
                                    >
                                        <CreatorCard creator={creators[currentIndex]} />
                                    </div>
                                </div>
                            ) : (
                                // Desktop: Infinite scroll
                                <div
                                    className="flex space-x-6 transition-transform duration-1000 ease-linear"
                                    style={{
                                        width: `${getVisibleCreators().length * 320}px`,
                                        transform: isPaused ? 'translateX(0)' : `translateX(-${(currentIndex % creators.length) * 320}px)`,
                                        animation: !isPaused ? 'infinite-scroll 30s linear infinite' : 'none'
                                    }}
                                >
                                    {getVisibleCreators().map((creator, index) => (
                                        <div
                                            key={`${creator.name}-${index}`}
                                            onClick={() => handleCreatorClick(creator)}
                                            className="group relative flex-shrink-0 w-72 lg:w-80 h-96 lg:h-[420px] bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:border-yellow-400/40 transition-all duration-300 cursor-pointer hover:scale-105"
                                        >
                                            <CreatorCard creator={creator} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile Pagination Dots */}
                        {isMobile && (
                            <div className="flex justify-center space-x-2">
                                {creators.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setCurrentIndex(index);
                                            setIsPaused(true);
                                            setTimeout(() => setIsPaused(false), 2000);
                                        }}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                            index === currentIndex 
                                                ? 'bg-yellow-400 w-6' 
                                                : 'bg-white/30 hover:bg-white/50 w-2'
                                        }`}
                                        aria-label={`Go to creator ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Bottom Call-to-Action */}
                    {/* <div className="text-center bg-yellow-400/10 backdrop-blur-sm mt-20 rounded-2xl p-4 md:p-8 border border-yellow-400/20 animate-fade-in mx-2 md:mx-0">
                        <p className="text-base md:text-lg text-white leading-relaxed">
                            <span className="font-semibold text-yellow-400 block md:inline">
                                Whether it's YouTube/Social Media Growth, Website Design, Podcast Production, or Brand trategy
                            </span>
                            <span className="block mt-2 text-white/90">
                                —Technovere powers creator success behind the scenes.
                            </span>
                        </p>
                    </div> */}
                </div>
            </div>

            <style>{`
                @keyframes infinite-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-${creators.length * 320}px); }
                }
                
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

const CreatorCard = ({ creator }) => {
    return (
        <>
            <div className="flex justify-center mb-4 md:mb-6">
                <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-yellow-400/30 group-hover:border-yellow-400/60 transition-colors duration-300">
                    <img 
                        src={creator.profileImage} 
                        alt={creator.name}
                        className="w-full h-full object-cover"
                    />
                    {creator.verified && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-white">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 lg:w-2.5 lg:h-2.5 bg-blue-800 rounded-full"></div>
                        </div>
                    )}
                </div>
            </div>

            <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl text-center mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                {creator.name}
            </h3>

            <p className="text-white/70 text-xs md:text-sm text-center mb-4 md:mb-6 leading-relaxed min-h-[2.5rem]">
                {creator.subtitle}
            </p>

            <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-2 md:p-3 border border-white/10 group-hover:border-yellow-400/20 transition-colors duration-300">
                    <span className="text-yellow-400 font-semibold text-xs md:text-sm">{creator.primaryStat}</span>
                    <creator.primaryIcon className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 flex-shrink-0" />
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-2 md:p-3 border border-white/10 group-hover:border-yellow-400/20 transition-colors duration-300">
                    <span className="text-yellow-400 font-semibold text-xs md:text-sm">{creator.secondaryStat}</span>
                    <creator.secondaryIcon className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 flex-shrink-0" />
                </div>
            </div>

            <div className="flex justify-center space-x-3 md:space-x-4">
                <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-yellow-400/20 rounded-lg rotate-45 flex items-center justify-center border border-yellow-400/30 group-hover:bg-yellow-400/30 transition-colors duration-300">
                    <creator.primaryIcon className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 -rotate-45" />
                </div>
                <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-yellow-400/20 rounded-lg rotate-45 flex items-center justify-center border border-yellow-400/30 group-hover:bg-yellow-400/30 transition-colors duration-300">
                    <creator.secondaryIcon className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 -rotate-45" />
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
        </>
    );
};

export default CreatorShowcase;
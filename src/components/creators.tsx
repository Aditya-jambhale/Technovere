import React, { useState, useRef, useEffect } from 'react';
import { Instagram, Youtube, Linkedin, Twitter, Mic, ChevronLeft, ChevronRight, Globe } from 'lucide-react';

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
        secondaryIcon: Globe,
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
        profileImage: "/creators/karthik.png",
        socialLinks: {
            twitter: "https://x.com/thisiskp_"
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
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Infinite Scroll for Desktop
    useEffect(() => {
        if (!isMobile && scrollRef.current) {
            const scrollContainer = scrollRef.current;
            let animationFrameId;
            const speed = 0.5;

            const animateScroll = () => {
                if (!isPaused) {
                    scrollContainer.scrollLeft += speed;
                    if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                        scrollContainer.scrollLeft = 0;
                    }
                }
                animationFrameId = requestAnimationFrame(animateScroll);
            };

            animateScroll();

            return () => cancelAnimationFrame(animationFrameId);
        }
    }, [isPaused, isMobile]);

    // Auto-slide for mobile
    useEffect(() => {
        if (isMobile && !isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % creators.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isPaused, isMobile]);

    const getVisibleCreators = () => [...creators, ...creators, ...creators];

    const handlePrevious = () => {
        setIsPaused(true);
        setCurrentIndex((prev) => (prev === 0 ? creators.length - 1 : prev - 1));
        setTimeout(() => setIsPaused(false), 2000);
    };

    const handleNext = () => {
        setIsPaused(true);
        setCurrentIndex((prev) => (prev + 1) % creators.length);
        setTimeout(() => setIsPaused(false), 2000);
    };

    return (
        <div className="mt-10 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-2">
                        Top Creators We've Worked With
                    </h2>
                    <p className="text-white text-base md:text-lg">
                        Trusted by some of the most influential creators across platforms.
                    </p>
                </div>

                <div className="relative">
                    {/* Mobile Nav Buttons */}
                    {isMobile && (
                        <>
                            <button onClick={handlePrevious} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center border border-yellow-400/30 hover:bg-yellow-400/40">
                                <ChevronLeft className="text-yellow-400" />
                            </button>
                            <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center border border-yellow-400/30 hover:bg-yellow-400/40">
                                <ChevronRight className="text-yellow-400" />
                            </button>
                        </>
                    )}

                    <div className="overflow-hidden" ref={scrollRef}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {isMobile ? (
                            <div className="flex justify-center">
                                <div className="w-80">
                                    <CreatorCard creator={creators[currentIndex]} />
                                </div>
                            </div>
                        ) : (
                            <div className="flex space-x-6 w-max">
                                {getVisibleCreators().map((creator, idx) => (
                                    <div key={`${creator.name}-${idx}`} className="w-72 lg:w-80">
                                        <CreatorCard creator={creator} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Pagination Dots for Mobile */}
                    {isMobile && (
                        <div className="flex justify-center mt-4 space-x-2">
                            {creators.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrentIndex(index);
                                        setIsPaused(true);
                                        setTimeout(() => setIsPaused(false), 2000);
                                    }}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        index === currentIndex ? 'bg-yellow-400 w-6' : 'bg-white/30 w-2'
                                    }`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const CreatorCard = ({ creator }) => {
    const handleSocialClick = (platform, e) => {
        e.stopPropagation();
        const link = creator.socialLinks[platform];
        if (link) {
            window.open(link, '_blank');
        }
    };

    const getPrimaryPlatform = () => {
        if (creator.socialLinks.instagram) return 'instagram';
        if (creator.socialLinks.youtube) return 'youtube';
        if (creator.socialLinks.linkedin) return 'linkedin';
        if (creator.socialLinks.twitter) return 'twitter';
        if (creator.socialLinks.website) return 'website';
        if (creator.socialLinks.podcast) return 'podcast';
        return null;
    };

    const getSecondaryPlatform = () => {
        const primary = getPrimaryPlatform();
        const platforms = ['youtube', 'instagram', 'linkedin', 'twitter', 'website', 'podcast'];
        return platforms.find(p => p !== primary && creator.socialLinks[p]);
    };

    return (
        <div className="group bg-white/10 backdrop-blur-md p-6 rounded-3xl h-[450px] border border-white/20 hover:border-yellow-400/40 transition-all duration-300 relative">
            <div className="flex justify-center mb-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-yellow-400/30 group-hover:border-yellow-400/60 transition">
                    <img src={creator.profileImage} alt={creator.name} className="w-full h-full object-cover" />
                    {creator.verified && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-white">
                            <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                        </div>
                    )}
                </div>
            </div>

            <h3 className="text-white font-bold text-xl text-center group-hover:text-yellow-400 transition">
                {creator.name}
            </h3>
            <p className="text-white/70 text-sm text-center mb-6">{creator.subtitle}</p>

            <div className="space-y-2 mb-10">
                <div className="flex justify-between items-center bg-white/10 p-3 rounded-xl border border-white/10 group-hover:border-yellow-400/20 transition mb-6 mt-10">
                    <span className="text-yellow-400 font-medium text-sm">{creator.primaryStat}</span>
                    <creator.primaryIcon className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="flex justify-between items-center bg-white/10 p-3 rounded-xl border border-white/10 group-hover:border-yellow-400/20 transition">
                    <span className="text-yellow-400 font-medium text-sm">{creator.secondaryStat}</span>
                    <creator.secondaryIcon className="w-6 h-6 text-yellow-400" />
                </div>
            </div>

            <div className="flex justify-center space-x-4 mt-10">
                <button
                    onClick={(e) => handleSocialClick(getPrimaryPlatform(), e)}
                    className="w-12 h-12 bg-yellow-400/20 rotate-45 rounded-2xl border border-yellow-400/30 hover:bg-yellow-400/40 flex items-center justify-center hover:scale-110 transition"
                >
                    <creator.primaryIcon className="-rotate-45 text-yellow-400" />
                </button>

                {getSecondaryPlatform() && (
                    <button
                        onClick={(e) => handleSocialClick(getSecondaryPlatform(), e)}
                        className="w-12 h-12 bg-yellow-400/20 rotate-45 rounded-2xl border border-yellow-400/30 hover:bg-yellow-400/40 flex items-center justify-center hover:scale-110 transition"
                    >
                        <creator.secondaryIcon className="-rotate-45 text-yellow-400" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default CreatorShowcase;

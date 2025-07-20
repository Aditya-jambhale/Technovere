import React from 'react';
import {
    Star, TrendingUp, Users, Target,
    CheckCircle, Palette, Calendar,
    PenTool, Camera, Lightbulb, Phone, ArrowRight,
    Youtube, Instagram, Linkedin, Twitter, Mic, Play
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Variants } from "framer-motion";
import { MovingLogoStrip } from './CTAmains';

const fadeUp = (delay = 0): Variants => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            delay,
        },
    },
});

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const benefits = [
    {
        icon: Star,
        title: "Be seen as industry experts",
        description: "Position yourself as the go-to authority in your field"
    },
    {
        icon: TrendingUp,
        title: "Build trust online before the first call",
        description: "Establish credibility that converts prospects into clients"
    },
    {
        icon: Users,
        title: "Attract higher-quality leads consistently",
        description: "Draw in clients who value your expertise and pay premium rates"
    },
    {
        icon: Target,
        title: "Grow on LinkedIn, Instagram, YouTube, and podcasts",
        description: "Expand your reach across all major professional platforms"
    }
];

const services = [
    {
        icon: Lightbulb,
        title: "Brand Strategy & Positioning",
        description: "Define your unique value proposition and market position"
    },
    {
        icon: Palette,
        title: "Visual Identity Guidance",
        description: "Color schemes, fonts, and layout cues that reflect your brand"
    },
    {
        icon: Calendar,
        title: "Content Planning & Strategy",
        description: "Strategic content calendar aligned with your business goals"
    },
    {
        icon: PenTool,
        title: "Content Design & Production",
        description: "Professional content creation that engages your audience"
    },
    {
        icon: Camera,
        title: "Creative Direction",
        description: "Ongoing creative guidance to maintain brand consistency"
    },
    {
        icon: TrendingUp,
        title: "Growth Strategy",
        description: "Data-driven strategies to scale your personal brand"
    }
];

const creators = [
    {
        name: "BigPoppaCode",
        subtitle: "Arthur B Junior - Founder",
        stats: "80K YouTube | 700K+ Instagram",
        icon: Youtube,
        gradient: "from-red-500 to-pink-500",
        emoji: "🎥"
    },
    {
        name: "Mick Unplugged",
        subtitle: "Mick Hunt - #1 Self-Improvement Podcast",
        stats: "500K IG | 60K YT",
        icon: Mic,
        gradient: "from-purple-500 to-indigo-500",
        emoji: "🎙️"
    },
    {
        name: "Hamiora.art",
        subtitle: "Founder of @shaka_tribe",
        stats: "61K Instagram",
        icon: Instagram,
        gradient: "from-pink-500 to-orange-500",
        emoji: "🧿"
    },
    {
        name: "Tim Perreira",
        subtitle: "Mental Fitness Coach",
        stats: "34K+ LinkedIn",
        icon: Linkedin,
        gradient: "from-blue-500 to-cyan-500",
        emoji: "📈"
    },
    {
        name: "Anish Lalchandani",
        subtitle: "Leadership Expert",
        stats: "11K+ LinkedIn",
        icon: Linkedin,
        gradient: "from-blue-600 to-blue-400",
        emoji: "🧠"
    },
    {
        name: "Karthik Puvvada",
        subtitle: "Founder, Build in Public",
        stats: "58K Twitter",
        icon: Twitter,
        gradient: "from-sky-400 to-blue-500",
        emoji: "🧪"
    }
];

const FounderBrandPitch = () => {
    return (
        <>
            <div className="bg-[#1E3A8A] min-h-screen py-20 px-6 text-white relative">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        variants={fadeUp(0)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Want More Than a Website?
                            <span className="block text-yellow-400 mt-2">Build a Personal Brand That Sells.</span>
                        </h1>
                    </motion.div>

                    {/* Founder Intro */}
                    <motion.div
                        variants={fadeUp(0.2)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex flex-col lg:flex-row items-center gap-10">
                            {/* Image Section */}
                            <div className="lg:w-1/2">
                                <div className="relative w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/images/withclient1.png"
                                        alt="Mohd Yusuf - Founder"
                                        className="w-full h-auto object-cover aspect-[4/5] rounded-2xl"
                                    />
                                    <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg">
                                        <span className="font-semibold block">Er. Mohd Yusuf</span>
                                        <span className="text-sm opacity-90">Founder, Technovere</span>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="lg:w-1/2 w-full text-left text-lg leading-relaxed text-slate-200 space-y-5" style={{ textAlign: 'justify' }}>
                                <p>
                                    As the founder of <span className="font-semibold text-yellow-400">Technovere</span>, I've seen firsthand how powerful personal
                                    branding can be — not just for visibility, but for building trust, credibility, and long-term business growth. In today's noisy digital world, people don't just connect with products or services - they connect with people. And your personal brand is the bridge between what you do and how the world perceives you.
                                </p>
                                <p>
                                    That's why we offer <span className="font-semibold text-yellow-400">done-for-you personal branding services</span> - designed to help professionals like you turn your expertise into influence, and that influence into income. From strategy and positioning to storytelling and content creation, we handle it all so you can stay focused on what you do best, while we build a brand that works for you 24/7.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-slate-200">
                                    <li><span className="text-yellow-400 font-semibold">Be seen as industry experts</span></li>
                                    <li><span className="text-yellow-400 font-semibold">Build trust online before the first call</span></li>
                                    <li><span className="text-yellow-400 font-semibold">Attract higher-quality leads consistently</span></li>
                                    <li><span className="text-yellow-400 font-semibold">Grow on LinkedIn, Instagram, YouTube, and podcast</span></li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
 {/* Services */}
                    <motion.div
                        variants={fadeUp(0.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mb-3"
                    >
                        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">
                            Personal Branding Services
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp(0.6 + index * 0.1)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="group relative bg-white backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 hover:shadow-2xl hover:scale-[1.05] hover:border-blue-200 transition-all duration-500 cursor-pointer overflow-hidden"
                                > 
                                    {/* Animated background effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-[#1E3A8A] p-3 rounded-xl shadow-lg group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                                                <service.icon className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#1E3A8A] mb-3 group-hover:text-blue-700 transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                            {service.description}
                                        </p>
                                        
                                        {/* Hover indicator */}
                                        {/* <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-blue-600 text-sm font-semibold">Learn more</span>
                                            <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                                        </div> */}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    {/* Top Creators Section */}
                    <motion.div
                        variants={fadeUp(0.4)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-20"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-yellow-400 mb-4">
                                Top Creators We've Worked With
                            </h2>
                            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
                                Trusted by some of the most influential creators across platforms.
                                <span className="block mt-2 text-lg">Here's a glimpse of the creators who trust Technovere to elevate their brand:</span>
                            </p>
                        </div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
                        >
                            {creators.map((creator, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp()}
                                    className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-[1.03] hover:bg-white/15 transition-all duration-300"
                                >
                                    {/* Gradient overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${creator.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-4">
                                            <span className="text-3xl">{creator.emoji}</span>
                                            <div className={`p-2 rounded-lg bg-gradient-to-r ${creator.gradient}`}>
                                                <creator.icon className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                                            {creator.name}
                                        </h3>
                                        
                                        <p className="text-slate-300 text-sm mb-3 leading-relaxed">
                                            {creator.subtitle}
                                        </p>
                                        
                                        <div className="flex items-center justify-between">
                                            <span className="text-yellow-400 font-semibold text-sm">
                                                {creator.stats}
                                            </span>
                                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-300" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Bottom CTA */}
                        <motion.div
                            variants={fadeUp(0.8)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-center bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30"
                        >
                            <p className="text-lg text-slate-200 leading-relaxed">
                                <span className="font-semibold text-yellow-400">👉 Whether it's YouTube/Social Media growth, website design, podcast production, or brand strategy</span>
                                <span className="block mt-2">—Technovere powers creator success behind the scenes.</span>
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* moving logo strip */}
                    {/* <MovingLogoStrip /> */}

                    {/* Services */}
 

                </div>
            </div>
        </>
    );
};

export default FounderBrandPitch;
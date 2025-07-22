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
// import CreatorCarousel from './creators';
import CreatorShowcase from './creators';
import PersonalBrandingServices from './personalser';

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

// const services = [
//     {
//         icon: Lightbulb,
//         title: "Brand Strategy & Positioning",
//         description: "Define your unique value proposition and market position"
//     },
//     {
//         icon: Palette,
//         title: "Visual Identity Guidance",
//         description: "Color schemes, fonts, and layout cues that reflect your brand"
//     },
//     {
//         icon: Calendar,
//         title: "Content Planning & Strategy",
//         description: "Strategic content calendar aligned with your business goals"
//     },
//     {
//         icon: PenTool,
//         title: "Content Design & Production",
//         description: "Professional content creation that engages your audience"
//     },
//     {
//         icon: Camera,
//         title: "Creative Direction",
//         description: "Ongoing creative guidance to maintain brand consistency"
//     },
//     {
//         icon: TrendingUp,
//         title: "Growth Strategy",
//         description: "Data-driven strategies to scale your personal brand"
//     }
// ];

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

                    <PersonalBrandingServices />

                

                    <CreatorShowcase />
                </div>
            </div>
        </>
    );
};

export default FounderBrandPitch;
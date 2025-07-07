import React from 'react';
import {
    Star, TrendingUp, Users, Target,
    CheckCircle, Palette, Calendar,
    PenTool, Camera, Lightbulb, Phone, ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Variants } from "framer-motion";

const fadeUp = (delay = 0): Variants => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1], // safe cubic bezier
            delay,
        },
    },
});

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

const FounderBrandPitch = () => {
    return (
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
                                    src="/images/withclient.png"
                                    alt="Mohd Yusuf - Founder"
                                    className="w-full h-auto object-cover aspect-[4/5] rounded-2xl"
                                />
                                <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg">
                                    <span className="font-semibold block">Mohd Yusuf</span>
                                    <span className="text-sm opacity-90">Founder, Technovere</span>
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="lg:w-1/2 text-lg leading-relaxed text-slate-200">
                            <p>
                                As the founder of <span className="font-semibold text-yellow-400">Technovere</span>, I've seen firsthand how powerful personal branding can be — not just for visibility, but for trust, credibility, and long-term growth.
                            </p>
                            <p className="mt-4">
                                That’s why we offer <span className="font-semibold">done-for-you personal branding services</span> to help professionals like you build influence and income, faster.
                            </p>
                        </div>
                    </div>

                </motion.div>

                {/* Benefits */}
                <motion.div
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-center text-white mb-10">
                        Transform Your Professional Presence
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp(0.4 + index * 0.1)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 hover:scale-[1.02] transition-transform duration-300"
                            >
                                <div className="flex gap-4">
                                    <div className="bg-blue-500/20 p-3 rounded-lg">
                                        <benefit.icon className="w-6 h-6 text-blue-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                                        <p className="text-slate-200 mt-1 text-sm">{benefit.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Services */}
                <motion.div
                    variants={fadeUp(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-center text-white mb-10">
                        Our Personal Branding Services
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp(0.6 + index * 0.1)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/10 transition-all hover:scale-[1.03]"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-green-600/20 p-2 rounded-lg">
                                        <service.icon className="w-5 h-5 text-green-400" />
                                    </div>
                                    <CheckCircle className="w-5 h-5 text-green-300" />
                                </div>
                                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                <p className="text-slate-200 text-sm mt-2">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    variants={fadeUp(1.2)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 shadow-lg text-white text-center space-y-6">
                        {/* Top Message */}
                        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                            Whether you're a <span className="font-semibold">founder</span>, <span className="font-semibold">creator</span>, or <span className="font-semibold">consultant</span> — we’ll help you build a digital presence that works 24/7 to grow your brand.
                        </p>

                        {/* Prompt */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                            <Phone className="w-6 h-6" />
                            <span className="text-xl font-bold">Want to explore this?</span>
                        </div>

                        {/* Subtext */}
                        <p className="text-white/90 text-sm">Just mention it during your discovery call.</p>

                        {/* CTA Button */}
                        <a
                            href="https://calendly.com/technovere"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition shadow-md hover:shadow-lg"
                        >
                            Book Discovery Call <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                </motion.div>
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
                        fill="#FFFFFF"

                    ></path>
                </svg>
            </div>
        </div>
        
    );
};

export default FounderBrandPitch;

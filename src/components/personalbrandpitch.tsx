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
                            <div className="lg:w-1/2 w-full text-left text-lg leading-relaxed text-slate-200 space-y-5">
                                <p>
                                    As the founder of <span className="font-semibold text-yellow-400">Technovere</span>, I've seen firsthand how powerful personal
                                    branding can be - not just for visibility, but for building trust, credibility, and long-term business growth. In today’s noisy digital world, people don’t just connect with products or services - they connect with people. And your personal brand is the bridge between what you do and how the world perceives you.
                                </p>
                                <p>
                                    That’s why we offer <span className="font-semibold text-yellow-400">done-for-you personal branding services</span> - designed to help professionals like you turn your expertise into influence, and that influence into income. From strategy and positioning to storytelling and content creation, we handle it all so you can stay focused on what you do best, while we build a brand that works for you 24/7.
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
                        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-10">
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
                                            <benefit.icon className="w-6 h-6 text-white" />
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
                        className="mb-3"
                    >
                        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-10">
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
                                    className="bg-white backdrop-blur-md p-6 rounded-xl shadow-md border border-white/10 transition-all hover:scale-[1.03]"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-[#1E3A8A] p-2 rounded-lg">
                                            <service.icon className="w-5 h-5 text-white" />
                                        </div>
                                        {/* <CheckCircle className="w-5 h-5 text-green-300" /> */}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#1E3A8A]">{service.title}</h3>
                                    <p className="text-black text-sm mt-2">{service.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>



                </div>

            </div>

        </>
    );
};

export default FounderBrandPitch;

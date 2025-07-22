import React from 'react';
import { Youtube, Mic, Target, Users } from 'lucide-react';

const PersonalBrandingServices = () => {
    const services = [
        {
            icon: Target,
            title: "Meta Ads & Funnels",
            description: "High-converting Meta campaigns with data-driven targeting and killer creative.",
            features: [
                "Funnel & landing page creation",
                "A/B testing & optimization",
                "Ad creatives & copy",
                "ROI improvement"
            ]
        },
        {
            icon: Youtube,
            title: "YouTube Management",
            description: "Grow fast on YouTube with optimized content and growth-first strategies.",
            features: [
                "Channel setup & branding",
                "Content calendar & scripts",
                "SEO-optimized thumbnails",
                "Analytics & growth strategy"
            ]
        },
        {
            icon: Mic,
            title: "Podcast Management",
            description: "Full-service podcast support from setup to strategic promotion and growth.",
            features: [
                "Complete podcast setup",
                "Episode editing & mastering",
                "Multi-platform distribution",
                "Growth & monetization tips"
            ]
        },
        {
            icon: Users,
            title: "Social Media Management",
            description: "End-to-end social media services for consistent personal brand building.",
            features: [
                "Branded account setup",
                "Content creation & scheduling",
                "Organic engagement growth",
                "Multi-platform strategy"
            ]
        }
    ];

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 mb-4">
                        Personal Branding <span>Services</span>
                    </h2>
                    <div className="flex justify-center">
                        <div className="h-1 bg-yellow-500 rounded-full w-32 sm:w-64 lg:w-96"></div>
                    </div>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white p-6 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-700 cursor-pointer overflow-hidden h-auto"
                        >
                            {/* Animated BG */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
                            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-tr from-indigo-400/10 to-blue-400/10 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>

                            {/* Card Content */}
                            <div className="relative z-10">
                                <div className="mb-4">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400 group-hover:bg-blue-900 rounded-2xl shadow-lg group-hover:scale-110 transition-all duration-300">
                                        <service.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-900 transition-colors duration-300 leading-tight">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="space-y-1.5">
                                    {service.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5  bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                            <span className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-indigo-400/0 group-hover:from-blue-400/10 group-hover:via-purple-400/10 group-hover:to-indigo-400/10 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PersonalBrandingServices;
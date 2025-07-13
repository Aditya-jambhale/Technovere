import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import { Search, Map, Palette, Rocket, Zap } from 'lucide-react';

const steps = [
  {
    step: "01",
    title: "Discovery & Research",
    subtitle: "Understanding your vision",
    description: "We dive deep into your business goals, target audience, and competitive landscape to create a foundation for success.",
    icon: Search,
    color: "blue"
  },
  {
    step: "02",
    title: "Strategic Planning",
    subtitle: "Mapping your journey",
    description: "Develop a comprehensive roadmap with clear milestones, timelines, and success metrics tailored to your objectives.",
    icon: Map,
    color: "indigo"
  },
  {
    step: "03",
    title: "Creative Development",
    subtitle: "Bringing ideas to life",
    description: "Our team crafts compelling designs and content that resonate with your audience and drive engagement.",
    icon: Palette,
    color: "purple"
  },
  {
    step: "04",
    title: "Implementation",
    subtitle: "Executing with precision",
    description: "We deploy your solution with meticulous attention to detail, ensuring everything works flawlessly.",
    icon: Rocket,
    color: "pink"
  },
  {
    step: "05",
    title: "Launch & Optimization",
    subtitle: "Continuous improvement",
    description: "Monitor performance, gather insights, and continuously optimize to maximize your return on investment.",
    icon: Zap,
    color: "red"
  }
];
const TypingHeading = ({ text = 'How We Deliver Success', speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
    }, [index, text, speed]);
  
    return (
      <h1>
        {displayedText}
        <span className="animate-pulse">|</span>
      </h1>
    );
  }

const colorClasses = {
  blue: "border-blue-500 bg-blue-50",
  indigo: "border-indigo-500 bg-indigo-50",
  purple: "border-purple-500 bg-purple-50",
  pink: "border-pink-500 bg-pink-50",
  red: "border-red-500 bg-red-50"
};

const iconColorClasses = {
  blue: "text-blue-600 bg-blue-100",
  indigo: "text-indigo-600 bg-indigo-100",
  purple: "text-purple-600 bg-purple-100",
  pink: "text-pink-600 bg-pink-100",
  red: "text-red-600 bg-red-100"
};

const ProcessStep = ({ step, index, isLast }: { step: any; index: number; isLast: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = step.icon;

  return (
    
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex items-start mb-12 lg:mb-16"
    >
      {/* Timeline line for desktop */}
      <div className="hidden lg:flex flex-col items-center mr-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
          className={`w-16 h-16 rounded-full ${iconColorClasses[step.color as keyof typeof iconColorClasses]} flex items-center justify-center shadow-lg z-10`}
        >
          <Icon size={28} />
        </motion.div>

        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "120px" } : { height: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
            className="w-1 bg-gradient-to-b from-gray-300 to-gray-200 mt-4"
          />
        )}

        {!isLast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
            className="mt-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-gray-400">
              <path
                fill="currentColor"
                d="M12 2L8 6h3v10h2V6h3l-4-4z"
                transform="rotate(180 12 12)"
              />
            </svg>
          </motion.div>
        )}
      </div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
        className={`flex-1 bg-white shadow-xl rounded-xl p-6 border-l-4 ${colorClasses[step.color as keyof typeof colorClasses]} hover:shadow-2xl transition-shadow duration-300`}
      >
        {/* Mobile icon */}
        <div className={`lg:hidden w-12 h-12 rounded-full ${iconColorClasses[step.color as keyof typeof iconColorClasses]} flex items-center justify-center mb-4 shadow-md`}>
          <Icon size={20} />
        </div>

        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-3xl font-bold text-gray-300 mr-4">{step.step}</span>
            <h3 className="text-xl font-bold text-gray-800 inline">{step.title}</h3>
          </div>
        </div>

        <p className="text-primary font-semibold mb-2">{step.subtitle}</p>
        <p className="text-gray-600 leading-relaxed">{step.description}</p>
      </motion.div>
    </motion.div>
  );
};

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hidden lg:block fixed left-8 top-1/2 transform -translate-y-1/2 z-50">
      <div className="w-1 h-32 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="w-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"
          style={{ height: `${Math.min(scrollProgress * 2, 100)}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <motion.div
        className="w-3 h-3 bg-white border-2 border-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 shadow-lg"
        style={{ top: `${Math.min(scrollProgress * 2, 100)}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

const ProcessSection = () => {
  const [showTyping, setShowTyping] = useState(false);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  useEffect(() => {
    if (isHeaderInView) {
      setShowTyping(true);
    }
  }, [isHeaderInView]);

  return (
    <>
    <div className="min-h-screen bg-white py-16 px-4 relative">
      <ScrollIndicator />

      <div className="max-w-4xl mx-auto">
        {/* Typing Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
    <motion.div
      className="text-4xl font-bold text-[#1E3A8A] mb-4 min-h-[3rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
    <p>How We Build Websites That Build Your Brand</p>
    </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="text-lg text-black/60 font-semibold  max-w-3xl mx-auto"
          >
            Follow our proven methodology that transforms your vision into exceptional results
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.step}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Completion message */}
       

      </div>
    </div>
    
    </>
  );
};

export default ProcessSection;
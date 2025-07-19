import React from 'react';
import { ArrowUpRight, CheckCircle } from 'lucide-react';



// Main CTA section below about 
 const CTASection = () => {
  return (
    <div className="bg-[#1E3A8A] py-8 px-4 sm:px-6 lg:px-12 mt-10 relative border rounded-3xl w-full max-w-7xl mx-auto overflow-hidden">
      {/* Background circuit board pattern */}
      {/* <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 800 400">
          <defs>
            <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 10 40 L 70 40 M 40 10 L 40 70" stroke="#FFCA28" strokeWidth="2" fill="none" />
              <circle cx="40" cy="40" r="4" fill="#FFCA28" />
              <circle cx="10" cy="40" r="2" fill="#FFCA28" />
              <circle cx="70" cy="40" r="2" fill="#FFCA28" />
              <circle cx="40" cy="10" r="2" fill="#FFCA28" />
              <circle cx="40" cy="70" r="2" fill="#FFCA28" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div> */}

      {/* Glowing nodes */}
      <div className="absolute top-12 left-12 w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50"></div>
      <div className="absolute top-20 right-16 w-2.5 h-2.5 bg-yellow-400/80 rounded-full animate-pulse shadow-lg shadow-yellow-400/30" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-16 left-20 w-4 h-4 bg-yellow-400/60 rounded-full animate-pulse shadow-lg shadow-yellow-400/20" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-12 right-12 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" style={{ animationDelay: '1.5s' }}></div>

      {/* Chip element */}
      <div className="absolute top-10 right-10 w-7 h-7 bg-yellow-400/20 rounded border border-yellow-400/30">
        <div className="w-full h-full bg-yellow-400/10 rounded flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-yellow-400/40 rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Ready to Build Your <span className="text-yellow-400">Digital Authority?</span>
        </h2>

        <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
          Let's create a website that works as hard as you do and converts visitors into loyal customers.
        </p>

        {/* CTA + Benefits */}
        <div className="flex flex-col sm:flex-row gap-y-4 gap-x-6 justify-center items-center">
          <a
            href="https://calendly.com/mohammadyusuf025/30min?month=2025-06"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <button className="bg-yellow-400 hover:bg-yellow-500 text-[#1E3A8A] font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-3 text-sm sm:text-base group-hover:-translate-y-1">
              Book Your Discovery Call
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </a>

          <div className="flex flex-col sm:flex-row gap-3 text-white/70 text-sm items-center">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-yellow-400" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-yellow-400" />
              <span>No commitment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;

//personal branding section 

import { Phone, ArrowRight, FileText, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const CTABottomSection = () => {
  return (
    <div className="bg-[#1E3A8A] text-white rounded-2xl px-4 sm:px-6 lg:px-12 py-10 w-full max-w-7xl mx-auto mt-14 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Heading */}
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-5">
            Whether you're a <span className="font-semibold text-yellow-400">Founder</span>, <span className="font-semibold text-yellow-400">Creator</span>, or <span className="font-semibold text-yellow-400" style={{ animationDelay: '0.6s' }}>Consultant</span> - we'll help you build a <span className="text-yellow-400 font-semibold">Digital Presence</span> that works <span className="text-yellow-400 font-semibold">24/7</span> to grow your brand.
          </p>

          {/* Prompt */}
          <div className="flex justify-center lg:justify-start items-center gap-2 text-lg sm:text-xl font-semibold mb-2">
            <Phone className="w-5 h-5 text-yellow-400" />
            Want to <span className="text-yellow-400">explore</span> this?
          </div>

          {/* Subtext */}
          <p className="text-white/80 text-sm mb-3">Just mention it during your <span className="text-yellow-400 font-medium">discovery call</span>.</p>
          
          {/* Email Contact */}
          <div className="flex justify-center lg:justify-start items-center gap-2 text-sm text-white/70">
            <Mail className="w-4 h-4 text-yellow-400" />
            <span>Or email us at:</span>
            <a 
              href="mailto:Yusuf@technovere.com" 
              className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 font-medium underline decoration-yellow-400/50 hover:decoration-yellow-300"
            >
            Yusuf@technovere.com
            </a>
          </div>
        </div>

        {/* Right Side - Animated Objects + Buttons */}
        <div className="flex-shrink-0 flex flex-col items-center lg:items-end gap-6">
          {/* Animated floating objects */}
          <div className="relative w-32 h-20 hidden lg:block">
            <div className="absolute top-0 left-0 w-8 h-8 bg-yellow-400/20 rounded-full animate-bounce"></div>
            <div className="absolute top-2 right-4 w-6 h-6 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-0 left-1/2 w-10 h-2 bg-yellow-400/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 right-0 w-4 h-8 bg-yellow-400/25 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-4 left-8 w-12 h-0.5 bg-yellow-400/30 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-4 right-8 w-8 h-0.5 bg-white/20 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
          </div>

          {/* Buttons Container */}
          <div className="flex flex-col gap-3 items-center">
            {/* Primary CTA Button */}
            <a
              href="https://calendly.com/mohammadyusuf025/30min?month=2025-06"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-[#1E3A8A] font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-yellow-400/20 hover:scale-105 whitespace-nowrap group relative overflow-hidden"
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <Phone className="w-4 h-4 group-hover:animate-bounce relative z-10" />
              <span className="relative z-10">Book Your Free Discovery Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />

              {/* Shine effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
            </a>

            {/* Secondary buttons row */}
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              {/* Case Studies Button */}
              <a
                href="https://drive.google.com/your-case-studies-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-white/10 hover:scale-105 whitespace-nowrap group relative overflow-hidden border border-white/20"
              >
                <FileText className="w-4 h-4 group-hover:animate-pulse relative z-10" />
                <span className="relative z-10">Case Studies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
              </a>

              {/* Email Button */}
              <a
                href="mailto:Yusuf@technovere.com"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-white/10 hover:scale-105 whitespace-nowrap group relative overflow-hidden border border-white/20"
              >
                <Mail className="w-4 h-4 group-hover:animate-pulse relative z-10" />
                <span className="relative z-10">Email Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Additional background elements */}
      <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-full blur-xl animate-pulse"></div>
      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-lg animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};
export const Processcta = () => {
  return (
    <section className="w-full flex justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-7xl bg-[#1E3A8A] rounded-2xl p-8 sm:p-10 text-center shadow-md"
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Ready to Get Started?
        </h3>
        <p className="text-gray-300 mb-6 text-sm sm:text-base">
          Let's transform your vision into reality with our proven process.
        </p>

        <a
          href="https://calendly.com/mohammadyusuf025/30min?month=2025-06"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-yellow-400 text-[#1E3A8A] px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-all duration-300"
          >
            Start Your Journey
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
};


//Logo section problem section




export const MovingLogoStrip = () => {
  // Placeholder logos - replace src with actual logo URLs
  const logos = [
    { name: 'J&C Assets', src: '/companies/jc.png' },
    { name: 'InnovateCo', src: '/companies/Arise.png' },
    { name: 'DataFlow', src: '/companies/education.png' },
    { name: 'CloudSync', src: '/companies/her.png' },
    { name: 'AI Solutions', src: '/companies/intentional.png' },
    { name: 'NextGen', src: '/companies/kundlas.png' },
    { name: 'FutureTech', src: '/companies/new.png' },
    { name: 'QuantumSoft', src: '/companies/sarvam.svg' },
    { name: 'QuantumSoft', src: '/companies/Mick.webp' },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-white mb-5 py-12 overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-yellow-400 mb-2">Trusted by Industry Leaders</h2>
        <p className="text-black">Companies that power their business with our solutions</p>
      </div>

      <div className="relative">
        {/* Moving logo container */}
        <div className="flex animate-scroll w-max bg-gray-50">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 min-w-fit mx-6 flex items-center justify-center"
            >
              {/* Option 1: Subtle gray background with border */}
              <div className="bg-gray-100 border border-gray-200 rounded-lg shadow-sm p-6 hover:scale-105 hover:shadow-md transition-all duration-300">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-36 h-24 object-contain filter brightness-90 contrast-110"
                />
              </div>
              
              {/* Option 2: Card with subtle shadow (uncomment to use) */}
              {/* <div className="bg-white border border-gray-300 rounded-xl shadow-lg p-6 hover:scale-105 hover:shadow-xl transition-all duration-300">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-36 h-24 object-contain"
                />
              </div> */}
             
              
              {/* Option 3: Gradient background (uncomment to use) */}
              {/* <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6 hover:scale-105 hover:from-gray-100 hover:to-gray-150 transition-all duration-300">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-36 h-24 object-contain drop-shadow-sm"
                />
              </div> */}
             
            </div>
          ))}
        </div>

        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute top-0 left-0 w-24 sm:w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-24 sm:w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Additional CSS for logo visibility enhancement */
        .logo-container {
          backdrop-filter: blur(0.5px);
        }
        
        /* Alternative: Dark theme option */
        .dark-theme .logo-bg {
          background: linear-gradient(145deg, #1f2937, #374151);
          border: 1px solid #4b5563;
        }
        
        .dark-theme img {
          filter: brightness(1.1) contrast(1.1);
        }
      `}</style>
    </div>
  );
};


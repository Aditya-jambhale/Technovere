import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Zap,
  Target,
  Globe,
  Briefcase,
  Trophy,
  Users,
  Award
} from 'lucide-react';
import clsx from 'clsx';

const AboutTechnovere = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ctaObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCtaVisible(true);
      },
      { threshold: 0.4 }
    );
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);
    return () => ctaObserver.disconnect();
  }, []);

  const features = [
    {
      icon: Target,
      title: "Strategy-First Design",
      description:
        "Every project starts with clarity: What makes you unique? Who do you serve? We craft design & messaging that align with your brand and goals.",
    },
    {
      icon: Globe,
      title: "Built for Global Professionals",
      description:
        "With 500+ projects delivered to clients in the U.S., U.K., U.A.E, and beyond — we know how to position your brand for a competitive global audience.",
    },
    {
      icon: Briefcase,
      title: "Full-Service, In-House Execution",
      description:
        "From website design to brand content, everything is done by our dedicated creative & development team. No outsourcing. No fluff.",
    },
    {
      icon: Trophy,
      title: "Proven Results, Real Impact",
      description:
        "We've helped TEDx speakers, Forbes members, medical professionals, and scaling coaches launch standout online brands.",
    },
  ];

  const stats = [
    { number: "1500+", label: "Projects Delivered" },
    { number: "30+", label: "Countries Served" },
    { number: "500+", label: "Clients Served" },
    { number: "6+", label: "Years Experience" }
  ];

  return (
    <>
      <section
        id="about"
        ref={sectionRef}
        className="bg-blue-900 py-20 px-4 lg:px-20 relative overflow-hidden"
      >
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-40"></div>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-3">
              <img
                src="/images/aboutlogo2.png"
                alt="Technovere Logo"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              About Technovere
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              More than a web design agency — we build authority online through strategic design and powerful storytelling.
            </p>
          </div>

          {/* Story + Stats */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8" style={{ textAlign: 'justify' }}>
              <div>
               <div className="text-center md:text-left">
  <h3 className="text-3xl font-bold text-white mb-3">Our Story</h3>
  <div className="w-20 h-1 bg-yellow-400 mb-6 mx-auto md:mx-0"></div>
</div>

                <p className="text-white/80 text-lg mb-4">
                  At Technovere, we don't just build websites - we design digital identities that drive results and build lasting connections.
                </p>
                <p className="text-white/80 text-lg">
                  Founded by Yusuf, a software engineer turned creative entrepreneur, Technovere was born from a mission: To help modern brands grow through clarity, creativity, and conversion-focused design.
                </p>
              </div>
              <div>
              <div className="text-center md:text-left">
  <h3 className="text-3xl font-bold text-white mb-3">Our Approach</h3>
  <div className="w-32 h-1 bg-yellow-400 mb-6 mx-auto md:mx-0"></div>
</div>
                <p className="text-white/80 text-lg">
                  We blend cutting-edge technology with strategic storytelling to create websites that not only look exceptional but perform exceptionally. Every project is a collaboration built on trust, transparency, and results.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                  >
                    <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-800 text-white p-8 rounded-xl border border-blue-700 hover:bg-blue-700 transition">
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                  <h4 className="text-xl font-bold">Our Mission</h4>
                </div>
                <p className="text-white/90">
                  To empower ambitious professionals and growing businesses with digital experiences that convert visitors into customers and brands into authorities.
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Technovere?</h3>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                We deliver comprehensive solutions that combine strategic thinking with flawless execution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center group-hover:bg-blue-900 group-hover:scale-110 transition-all duration-300">
                          <IconComponent className="w-7 h-7 text-black group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-blue-900 font-bold text-xl mb-3">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Who We Serve */}
          <div className="mb-10 md:mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Who We Serve</h3>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "Solo Entrepreneurs", desc: "Consultants, coaches, and freelancers looking to attract premium clients." },
                { icon: Briefcase, title: "Growing Businesses", desc: "Startups and SMEs ready to scale with conversion-focused websites." },
                { icon: Award, title: "Industry Leaders", desc: "Professionals seeking to elevate their online presence." }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="text-center p-6 bg-white rounded-xl hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section ref={ctaRef}>
        <div
          className={clsx(
            "text-center bg-[#1E3A8A]  px-2  lg:px-20 py-2  transition-all duration-700",
            {
              "opacity-0 scale-95 translate-y-10": !ctaVisible,
              "opacity-100 scale-100 translate-y-0": ctaVisible
            }
          )}
        >
          <div className="max-w-4xl mx-auto">
            <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Digital Authority?
            </h4>
            <p className="text-white/90 mb-8 text-lg">
              Let's create a website that works as hard as you do and converts visitors into loyal customers.
            </p>

            <a
              href="https://calendly.com/mohammadyusuf025/30min?month=2025-06"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block"
            >
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-4 mx-auto text-lg group-hover:scale-105">
                Book Your Discovery Call
                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default AboutTechnovere;

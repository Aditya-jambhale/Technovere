// import { useEffect, useRef, useState } from 'react';
// import {
//   AlertTriangle,
//   Check,
//   ArrowRight,
//   Eye,
//   MessageSquare,
//   Target,
//   Users,
//   Smartphone,
//   Heart,
//   TrendingUp,
//   Sparkles,
//   Cpu,
//   Zap,
//   PlayCircle,
//   Star,
//   Shield,
//   Award
// } from 'lucide-react';

// const Problem = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeTab, setActiveTab] = useState('problems');
//   const [animatedStats, setAnimatedStats] = useState({ stat1: 0, stat2: 0, stat3: 0 });
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           // Animate stats
//           const animateStats = () => {
//             let current1 = 0, current2 = 0, current3 = 0;
//             const target1 = 87, target2 = 64, target3 = 73;
//             const duration = 2000;
//             const steps = 60;
//             const increment1 = target1 / steps;
//             const increment2 = target2 / steps;
//             const increment3 = target3 / steps;
            
//             const timer = setInterval(() => {
//               current1 = Math.min(current1 + increment1, target1);
//               current2 = Math.min(current2 + increment2, target2);
//               current3 = Math.min(current3 + increment3, target3);
              
//               setAnimatedStats({
//                 stat1: Math.floor(current1),
//                 stat2: Math.floor(current2),
//                 stat3: Math.floor(current3)
//               });
              
//               if (current1 >= target1 && current2 >= target2 && current3 >= target3) {
//                 clearInterval(timer);
//               }
//             }, duration / steps);
//           };
          
//           setTimeout(animateStats, 500);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const problems = [
//     {
//       icon: <Eye className="w-6 h-6" />,
//       title: "Outdated & Generic Design",
//       description: "Your website looks like everyone else's",
//       detail: "Template designs that scream 'amateur' instead of 'authority'",
//       impact: "87% of visitors leave within 15 seconds",
//       color: "bg-red-50 border-red-200"
//     },
//     {
//       icon: <MessageSquare className="w-6 h-6" />,
//       title: "Unclear Messaging",
//       description: "Visitors can't understand what you do",
//       detail: "Confusing copy that doesn't connect with your ideal audience",
//       impact: "64% higher bounce rate than clear messaging",
//       color: "bg-orange-50 border-orange-200"
//     },
//     {
//       icon: <Target className="w-6 h-6" />,
//       title: "Poor Brand Positioning",
//       description: "You're underselling your expertise",
//       detail: "Missing the strategic positioning that builds trust and authority",
//       impact: "Lose 73% of potential high-value clients",
//       color: "bg-yellow-50 border-yellow-200"
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: "No Personal Connection",
//       description: "Your personality doesn't shine through",
//       detail: "Cold, corporate feel instead of authentic personal branding",
//       impact: "People buy from people, not websites",
//       color: "bg-pink-50 border-pink-200"
//     }
//   ];

//   const benefits = [
//     {
//       icon: <Target className="w-6 h-6" />,
//       title: "Custom Website, Built on Brand Strategy",
//       description: "Every site is strategically designed around your personal brand positioning and unique value proposition.",
//       highlight: "Brand Strategy"
//     },
//     {
//       icon: <Smartphone className="w-6 h-6" />,
//       title: "SEO-Optimized & Mobile-First Design",
//       description: "Blazing fast, mobile-responsive websites that rank higher and convert better across all devices.",
//       highlight: "Mobile-First"
//     },
//     {
//       icon: <Heart className="w-6 h-6" />,
//       title: "Clear Messaging That Connects Emotionally",
//       description: "Story-driven content and messaging that builds emotional authority with your ideal audience.",
//       highlight: "Emotional Connection"
//     },
//     {
//       icon: <Zap className="w-6 h-6" />,
//       title: "Blazing Fast Performance",
//       description: "Optimized for speed and performance to keep visitors engaged and search engines happy.",
//       highlight: "Fast Performance"
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: "Done-for-You: Tech, Content, and Strategy",
//       description: "Complete solution handling everything from technical setup to content creation and strategy.",
//       highlight: "Done-for-You"
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       title: "Conversion-Focused UX",
//       description: "Built using design psychology that builds credibility and drives action from your visitors.",
//       highlight: "Conversion-Focused"
//     }
//   ];

//   return (
//     <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white text-black relative font-sans overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
//         <div className="absolute bottom-20 left-10 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Header Section */}
//         <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-blue-50 px-6 py-3 rounded-full mb-8 border border-yellow-400 shadow-sm">
//             <AlertTriangle className="w-5 h-5 text-[#1E3A8A]" />
//             <span className="text-[#1E3A8A] font-semibold text-sm">The Hidden Problem</span>
//           </div>
          
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
//             You've Built <span className="text-yellow-400">Credibility Offline</span>
//             <br />
//             <span className="text-[#1E3A8A]">But Your Online Presence Doesn't Show It</span>
//           </h1>
          
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
//             Most personal brands lose high-value clients because their digital identity doesn't reflect their real-world expertise and authority
//           </p>

//           {/* Stats Row */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
//               <div className="text-3xl font-bold text-red-500 mb-2">{animatedStats.stat1}%</div>
//               <div className="text-sm text-gray-600">Visitors leave within 15 seconds</div>
//             </div>
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
//               <div className="text-3xl font-bold text-orange-500 mb-2">{animatedStats.stat2}%</div>
//               <div className="text-sm text-gray-600">Higher bounce rate with unclear messaging</div>
//             </div>
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
//               <div className="text-3xl font-bold text-yellow-500 mb-2">{animatedStats.stat3}%</div>
//               <div className="text-sm text-gray-600">Potential high-value clients lost</div>
//             </div>
//           </div>
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
//             <div className="flex gap-2">
//               <button
//                 onClick={() => setActiveTab('problems')}
//                 className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
//                   activeTab === 'problems'
//                     ? 'bg-[#1E3A8A] text-white shadow-lg'
//                     : 'text-gray-600 hover:text-[#1E3A8A] hover:bg-gray-50'
//                 }`}
//               >
//                 The Problems
//               </button>
//               <button
//                 onClick={() => setActiveTab('solution')}
//                 className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
//                   activeTab === 'solution'
//                     ? 'bg-[#1E3A8A] text-white shadow-lg'
//                     : 'text-gray-600 hover:text-[#1E3A8A] hover:bg-gray-50'
//                 }`}
//               >
//                 The Technovere Solution
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Content Area */}
//         <div className="relative">
//           {/* Problems Section */}
//           <div className={`transition-all duration-500 ${activeTab === 'problems' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 absolute inset-0 pointer-events-none'}`}>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {problems.map((problem, index) => (
//                 <div
//                   key={index}
//                   className={`group p-8 rounded-2xl border-2 ${problem.color} hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer`}
//                   style={{ animationDelay: `${index * 150}ms` }}
//                 >
//                   <div className="flex items-start gap-6">
//                     <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
//                       <div className="text-[#1E3A8A] group-hover:text-yellow-400 transition-colors duration-300">
//                         {problem.icon}
//                       </div>
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-xl font-bold text-[#1E3A8A] mb-3 group-hover:text-yellow-400 transition-colors duration-300">
//                         {problem.title}
//                       </h3>
//                       <p className="text-gray-700 mb-3 text-base">
//                         {problem.description}
//                       </p>
//                       <p className="text-sm text-gray-600 mb-4 leading-relaxed">
//                         {problem.detail}
//                       </p>
//                       <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-red-200 shadow-sm">
//                         <AlertTriangle className="w-4 h-4 text-red-500" />
//                         <span className="text-sm font-medium text-red-600">
//                           {problem.impact}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Solution Section */}
//           <div className={`transition-all duration-500 ${activeTab === 'solution' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 absolute inset-0 pointer-events-none'}`}>
//             <div className="bg-gradient-to-br from-[#1E3A8A] to-blue-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
//               {/* Background Elements */}
//               <div className="absolute top-10 right-10 w-32 h-32 opacity-10">
//                 <Sparkles className="w-full h-full animate-pulse" />
//               </div>
//               <div className="absolute bottom-10 left-10 w-28 h-28 opacity-10">
//                 <Cpu className="w-full h-full animate-spin" style={{ animationDuration: '20s' }} />
//               </div>

//               {/* Solution Header */}
//               <div className="text-center mb-12">
//                 <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30">
//                   <Check className="w-5 h-5 text-yellow-400" />
//                   <span className="text-white font-semibold text-sm">The Technovere Solution</span>
//                 </div>
                
//                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
//                   We Blend <span className='text-yellow-400'>Premium Web Design</span> with <span className='text-yellow-400'>Personal Brand Strategy</span>
//                   <span className="text-white"> to Help you Stand Out and Convert</span>
//                 </h2>
                
//                 <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-6 leading-relaxed">
//                   Your website becomes your best sales tool — designed to build trust and connection with your audience
//                 </p>
                
//                 <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-12 leading-relaxed">
//                   Whether you're a coach scaling offers, a doctor entering private practice, a founder raising your profile, or a brand building its online presence — we'll bring your brand to life
//                 </p>
//               </div>

//               {/* Benefits Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//                 {benefits.map((benefit, index) => (
//                   <div
//                     key={index}
//                     className={`group transition-all duration-700 delay-${index * 100} hover:scale-105`}
//                   >
//                     <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 h-full hover:bg-white/20 transition-all duration-300 overflow-hidden">
//                       <div className="relative flex items-center justify-center w-14 h-14 bg-yellow-400 rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
//                         <div className="text-[#1E3A8A]">
//                           {benefit.icon}
//                         </div>
//                       </div>
//                       <div className="relative">
//                         <h4 className="text-xl font-bold text-white mb-4 leading-tight">
//                           {benefit.title}
//                         </h4>
//                         <p className="text-blue-100 text-sm leading-relaxed">
//                           {benefit.description}
//                         </p>
//                         <div className="mt-4 inline-flex items-center gap-2 bg-yellow-400/20 px-3 py-1 rounded-full">
//                           <Star className="w-3 h-3 text-yellow-400" />
//                           <span className="text-xs font-medium text-yellow-400">
//                             {benefit.highlight}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA Button */}
//               <div className="text-center">
//                 <a
//                   href="https://calendly.com/mohammadyusuf025/30min?month=2025-06"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <button className="group bg-yellow-400 hover:bg-yellow-500 text-[#1E3A8A] font-bold px-10 py-5 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl text-lg relative overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     <span className="relative flex items-center gap-3">
//                       <PlayCircle className="w-6 h-6" />
//                       Let's Transform Your Brand Together
//                       <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
//                     </span>
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Wave */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
//         <svg
//           data-name="Layer 1"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//           className="relative block w-[calc(130%+1.3px)] h-[60px]"
//         >
//           <path
//             d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39
//               -57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8
//                 C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
//             fill="#1E3A8A"
//           ></path>
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default Problem;

//second solution of problem section



// import { useEffect, useRef, useState } from 'react';
// import {
//   AlertTriangle,
//   ArrowRight,
//   Eye,
//   MessageSquare,
//   Target,
//   Heart,
//   TrendingUp,
//   Sparkles,
//   Zap,
//   Star,
//   ArrowDown
// } from 'lucide-react';

// const Problem = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [problemsVisible, setProblemsVisible] = useState(false);
//   const [solutionVisible, setSolutionVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const problemsRef = useRef(null);
//   const solutionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             if (entry.target === sectionRef.current) {
//               setIsVisible(true);
//             } else if (entry.target === problemsRef.current) {
//               setProblemsVisible(true);
//             } else if (entry.target === solutionRef.current) {
//               setSolutionVisible(true);
//             }
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );
    
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     if (problemsRef.current) observer.observe(problemsRef.current);
//     if (solutionRef.current) observer.observe(solutionRef.current);
    
//     return () => observer.disconnect();
//   }, []);

//   const problems = [
//     {
//       icon: <Eye className="w-6 h-6" />,
//       title: "Outdated & Templated",
//       description: "Your website looks like everyone else's"
//     },
//     {
//       icon: <MessageSquare className="w-6 h-6" />,
//       title: "Story Isn't Clear",
//       description: "Your expertise isn't positioned right"
//     },
//     {
//       icon: <Target className="w-6 h-6" />,
//       title: "Missing Connection",
//       description: "Visitors don't feel they know you"
//     }
//   ];

//   const solutions = [
//     {
//       icon: <Heart className="w-6 h-6" />,
//       title: "Premium Design",
//       description: "Beautiful, custom websites that reflect your expertise"
//     },
//     {
//       icon: <MessageSquare className="w-6 h-6" />,
//       title: "Clear Messaging",
//       description: "Tell your story in a way that builds trust"
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       title: "Strategic Positioning",
//       description: "Position yourself as the go-to expert"
//     }
//   ];

//   return (
//     <section ref={sectionRef} className="py-16 bg-gradient-to-br from-gray-50 to-white text-black overflow-hidden relative">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black leading-tight">
//             You've Built Credibility Offline —
//             <br />
//             <span className="text-gray-600">But Your Online Presence Doesn't Show It</span>
//           </h2>
//           <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//             Most personal brands lose clients because their website doesn't reflect their real expertise
//           </p>
//         </div>

//         {/* Problems Section */}
//         <div ref={problemsRef} className={`mb-20 transition-all duration-1000 ${problemsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="text-center mb-12">
//             <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">The Problem</h3>
//             <p className="text-gray-600 text-lg">Most personal brands lose clients because:</p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
//             {problems.map((problem, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center group hover:shadow-xl transition-all duration-300"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
//                   {problem.icon}
//                 </div>
//                 <h4 className="text-xl font-bold text-gray-800 mb-3">{problem.title}</h4>
//                 <p className="text-gray-600 leading-relaxed">{problem.description}</p>
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-2xl mx-auto">
//               <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
//               <p className="text-lg text-red-700 font-semibold mb-2">
//                 You're not just selling a service — you're selling you.
//               </p>
//               <p className="text-red-600">
//                 We design your website like that matters. Because it does.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Transition Arrow */}
//         <div className="flex justify-center mb-20">
//           <div className="bg-white rounded-full p-4 shadow-lg">
//             <ArrowDown className="w-8 h-8 text-gray-400 animate-bounce" />
//           </div>
//         </div>

//         {/* Solution Section */}
//         <div ref={solutionRef} className={`transition-all duration-1000 ${solutionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="text-center mb-12">
//             <h3 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] mb-4">Our Solution</h3>
//             <p className="text-gray-700 text-lg max-w-3xl mx-auto">
//               We blend premium web design with personal brand strategy — to help you stand out, look credible, and convert.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
//             {solutions.map((solution, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center group hover:shadow-xl transition-all duration-300"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1E3A8A] group-hover:text-white transition-all duration-300">
//                   {solution.icon}
//                 </div>
//                 <h4 className="text-xl font-bold text-gray-800 mb-3">{solution.title}</h4>
//                 <p className="text-gray-600 leading-relaxed">{solution.description}</p>
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <div className="bg-gradient-to-r from-[#1E3A8A] to-blue-900 rounded-2xl p-8 text-white max-w-3xl mx-auto">
//               <div className="flex items-center justify-center mb-4">
//                 <Star className="w-8 h-8 text-yellow-400 mr-2" />
//                 <Star className="w-8 h-8 text-yellow-400 mr-2" />
//                 <Star className="w-8 h-8 text-yellow-400" />
//               </div>
//               <h4 className="text-2xl md:text-3xl font-bold mb-4">
//                 Your Website Becomes Your Best Sales Tool
//               </h4>
//               <p className="text-blue-100 mb-6 text-lg leading-relaxed">
//                 Designed to build trust, authority, and connection with your audience
//               </p>
//               <a
//                 href="https://calendly.com/mohammadyusuf025/30min?month=2025-06"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block"
//               >
//                 <button className="bg-yellow-400 hover:bg-yellow-500 text-[#1E3A8A] font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
//                   <span className="flex items-center gap-2">
//                     Let's Transform Your Brand
//                     <ArrowRight className="w-5 h-5" />
//                   </span>
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Animated Background Elements */}
//       <div className="absolute top-20 right-10 w-20 h-20 opacity-10">
//         <Sparkles className="w-full h-full text-[#1E3A8A] animate-pulse" />
//       </div>
//       <div className="absolute bottom-20 left-10 w-16 h-16 opacity-10">
//         <Zap className="w-full h-full text-yellow-400 animate-bounce" />
//       </div>
//       <div className="absolute top-1/2 left-1/4 w-12 h-12 opacity-5">
//         <Target className="w-full h-full text-red-400 animate-spin" style={{ animationDuration: '10s' }} />
//       </div>
//     </section>
//   );
// };

// export default Problem;



// third solution of horizontal things 
import { useEffect, useRef, useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Eye,
  MessageSquare,
  Target,
  Heart,
  TrendingUp,
  Sparkles,
  Zap,
  Star
} from 'lucide-react';

const Problem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [problemsVisible, setProblemsVisible] = useState(false);
  const [solutionVisible, setSolutionVisible] = useState(false);
  const sectionRef = useRef(null);
  const problemsRef = useRef(null);
  const solutionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === sectionRef.current) setIsVisible(true);
          if (entry.target === problemsRef.current) setProblemsVisible(true);
          if (entry.target === solutionRef.current) setSolutionVisible(true);
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (problemsRef.current) observer.observe(problemsRef.current);
    if (solutionRef.current) observer.observe(solutionRef.current);

    return () => observer.disconnect();
  }, []);

  const problems = [
    { icon: <Eye className="w-6 h-6" />, title: "Outdated & Templated", description: "Your website looks like everyone else's" },
    { icon: <MessageSquare className="w-6 h-6" />, title: "Story Isn't Clear", description: "Your expertise isn't positioned right" },
    { icon: <Target className="w-6 h-6" />, title: "Missing Connection", description: "Visitors don't feel they know you" },
  ];

  const solutions = [
    { icon: <Heart className="w-6 h-6" />, title: "Premium Design", description: "Beautiful, custom websites that reflect your expertise" },
    { icon: <MessageSquare className="w-6 h-6" />, title: "Clear Messaging", description: "Tell your story in a way that builds trust" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Strategic Positioning", description: "Position yourself as the go-to expert" },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-gray-50 to-white text-black overflow-visible relative">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6  leading-tight text-yellow-400">
            You've Built Credibility Offline <br />
            <span className="text-[#1E3A8A]">But Your Online Presence Doesn't Show It</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Most personal brands lose clients because their website doesn't reflect their real expertise
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
          {/* Problems Section */}
          <div ref={problemsRef} className={`transition-all duration-1000 ${problemsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-red-600 mb-4">The Problem</h3>
              <p className="text-gray-600 text-lg">Most personal brands lose clients because:</p>
            </div>
            <div className="space-y-6">
              {problems.map((p, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-red-100 group hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{p.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Message */}
          <div className="flex flex-col items-center justify-center h-full">
            <div className="bg-white rounded-full p-4 shadow-lg mb-6">
            <ArrowRight className="w-8 h-8 text-gray-400 animate-pulse rotate-90 xl:rotate-0" />

            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-gray-500 mx-auto mb-3" />
              <p className="text-lg text-gray-700 font-semibold mb-2">You're not just selling a service - you're selling you.</p>
              <p className="text-gray-600">We design your website like that matters. Because it does.</p>
            </div>
          </div>

          {/* Solution Section */}
          <div ref={solutionRef} className={`transition-all duration-1000 ${solutionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Our Solution</h3>
              <p className="text-gray-700 text-lg">
                Design that builds trust and drives action.
              </p>
            </div>
            <div className="space-y-6">
              {solutions.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 group hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-[#1E3A8A] group-hover:text-white transition-all duration-300">
                      {s.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{s.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#1E3A8A] to-blue-900 rounded-2xl p-8 text-white text-center">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-8 h-8 text-yellow-400 mr-2" />
            <Star className="w-8 h-8 text-yellow-400 mr-2" />
            <Star className="w-8 h-8 text-yellow-400" />
          </div>
          <h4 className="text-2xl md:text-3xl font-bold mb-4">
            Your Website Becomes Your Best Sales Tool
          </h4>
          <p className="text-blue-100 mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
            Designed to build trust, authority, and connection with your audience
          </p>
          <a
            href="https://calendly.com/mohammadyusuf025/30min?month=2025-06"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-yellow-400 hover:bg-yellow-500 text-[#1E3A8A] font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
              <span className="flex items-center gap-2">
                Let's Transform Your Brand
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </a>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 opacity-10">
        <Sparkles className="w-full h-full text-[#1E3A8A] animate-pulse" />
      </div>
      <div className="absolute bottom-20 left-10 w-16 h-16 opacity-10">
        <Zap className="w-full h-full text-yellow-400 animate-bounce" />
      </div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 opacity-5">
        <Target className="w-full h-full text-red-400 animate-spin" style={{ animationDuration: '10s' }} />
      </div>
       <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
         <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
         className="relative block w-[calc(130%+1.3px)] h-[40px]"

        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39
              -57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8
                C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#1E3A8A"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Problem;
import { useEffect, useState, useRef } from 'react';
import { Star, Play, Quote, ArrowLeft, ArrowRight, Users, Award, ThumbsUp } from 'lucide-react';

interface Testimonial {
    name: string;
    company: string;
    videoUrl: string;
    rating?: number;
    title?: string;
    preview?: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'Limbi',
        company: 'Funeminds',
        title: 'CEO & Founder',
        rating: 5,
        preview: 'Exceptional web development that transformed our business...',
        videoUrl: 'https://res.cloudinary.com/dxpxzbz51/video/upload/v1751550312/client2_bhrcwk.mp4',
    },
    {
        name: 'Client 1',
        company: 'Company One',
        title: 'Marketing Director',
        rating: 5,
        preview: 'Outstanding results that exceeded our expectations...',
        videoUrl: 'https://res.cloudinary.com/dxpxzbz51/video/upload/v1751550293/client1_uskw34.mp4',
    },
    {
        name: 'Client 3',
        company: 'Company Three',
        title: 'Business Owner',
        rating: 5,
        preview: 'Professional service and incredible attention to detail...',
        videoUrl: 'https://res.cloudinary.com/dxpxzbz51/video/upload/v1751550335/client3_hmp9lo.mov',
    },
];

const TestimonialSection = () => {
    const [activeVideo, setActiveVideo] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    // Intersection Observer for animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Auto-play featured video when it becomes active
    useEffect(() => {
        if (videoRefs.current[activeVideo]) {
            videoRefs.current[activeVideo]?.play();
        }
    }, [activeVideo]);

    // Auto-slide for mobile testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleVideoPlay = (index: number) => {
        setActiveVideo(index);
        // Pause other videos
        videoRefs.current.forEach((video, i) => {
            if (i !== index && video) {
                video.pause();
            }
        });
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
        ));
    };

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#1E3A8A] py-20 px-4 md:px-12 overflow-hidden "
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-4 py-2 rounded-full mb-6">
                        <Quote className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 font-semibold text-sm">CLIENT SUCCESS STORIES</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
                    Testimonials & Success Stories
                       
                    </h2>

                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                        Don't just take our word for it. Hear directly from the businesses we've transformed.
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center gap-8 mb-12">
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-1 mb-2">
                                {renderStars(5)}
                            </div>
                            <p className="text-white/80 text-sm">5.0 Average Rating</p>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-1 mb-2">
                                <Users className="w-5 h-5 text-yellow-400" />
                                <span className="text-2xl font-bold text-white">50+</span>
                            </div>
                            <p className="text-white/80 text-sm">Happy Clients</p>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-1 mb-2">
                                <Award className="w-5 h-5 text-yellow-400" />
                                <span className="text-2xl font-bold text-white">100%</span>
                            </div>
                            <p className="text-white/80 text-sm">Satisfaction Rate</p>
                        </div>
                    </div>
                </div>

                {/* Featured Video */}
                <div className="mb-12">
                    <div className="bg-gray-100 dark:bg-slate-800 p-4 md:p-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
                        <video
                            src={testimonials[0].videoUrl}
                            controls
                            preload="metadata"
                            className="w-full h-auto rounded-xl"
                        />
                        <div className="mt-4 text-center">
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                {testimonials[0].name}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {testimonials[0].company}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Vertical Videos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.slice(1).map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 dark:bg-slate-800 p-4 md:p-6 rounded-2xl shadow-lg"
                        >
                            <video
                                src={testimonial.videoUrl}
                                controls
                                preload="metadata"
                                className="w-full h-auto rounded-xl aspect-[9/16]"
                            />
                            <div className="mt-4 text-center">
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {testimonial.name}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {testimonial.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Slider Controls */}
           <div className="flex justify-center items-center gap-4 md:hidden">
                <button
                    onClick={prevSlide}
                    className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                    <ArrowLeft className="w-5 h-5 text-white" />
                </button>

                <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-yellow-400 w-6' : 'bg-white/40'
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                    <ArrowRight className="w-5 h-5 text-white" />
                </button>
            </div>

            {/* Call to Action */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] ">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[60px] sm:w-[calc(130%+1.3px)]"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39
              -57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8
                C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
           fill="#FFFFFF"

            ></path>
          </svg>
        </div>
        </section >
    );
};

export default TestimonialSection;
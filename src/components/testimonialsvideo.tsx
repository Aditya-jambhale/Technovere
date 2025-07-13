import { useEffect, useRef, useState } from 'react';
import { Quote, Users, Award, Star } from 'lucide-react';

interface Testimonial {
    name: string;
    company: string;
    title?: string;
    preview?: string;
    videoUrl: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'Dr Brenda ',
        company: 'TEDx Speaker',
        videoUrl: 'https://www.youtube.com/embed/0oQ2103A6H8',
    },
    {
        name: ' Dr Eric Weiss',
        company: 'Clamp Time',
        videoUrl: 'https://www.youtube.com/embed/vOHPMhu_r9c',
    },
    {
        name: 'Lynne B',
        company: 'Podcast Host',
        videoUrl: 'https://www.youtube.com/embed/WecJOuguoRA',
    },
];

const renderStars = (rating = 5) =>
    Array.from({ length: 5 }, (_, i) => (
        <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
    ));

const TestimonialSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-[#1E3A8A] py-20 px-4 md:px-12 overflow-hidden">
            {/* Background blur circles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
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
                    <div className="flex justify-center gap-8 mb-12 flex-wrap">
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-1 mb-2">{renderStars()}</div>
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

                {/* Testimonials (YouTube iframes) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg flex flex-col items-center"
                        >
                            <div className="w-full aspect-[9/16]">
                                <iframe
                                    className="w-full h-full rounded-xl"
                                    src={testimonial.videoUrl}
                                    title={`Testimonial from ${testimonial.name}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="mt-4 text-center">
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* SVG Wave */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-full h-[60px] sm:w-[calc(130%+1.3px)]"
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19
              c-82.26-17.34-168.06-16.33-250.45.39
              -57.84,11.73-114,31.07-172,41.86
              A600.21,600.21,0,0,1,0,27.35V120H1200V95.8
              C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        fill="#FFFFFF"
                    />
                </svg>
            </div>
        </section>
    );
};

export default TestimonialSection;

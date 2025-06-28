import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
    name: string;
    title?: string;
    quote: string;
    image?: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'Fiverr Client',
        quote:
            'Yusuf was very pleasant to deal with and did a great job in clarifying and following my instructions. Would definitely use his services again and recommend him.',
        // image: '/avatars/fiverr.png',
    },
    {
        name: 'Vinnum Shawti',
        title: 'Founder of itsvinnumshawti',
        quote:
            'He listened to everything I asked!! Had me laughing at my own video! Skills are excellent! I Will work with him on future videos!',
        // image: '/avatars/vinnum.png',
    },
    {
        name: 'Angie Deborja',
        quote:
            'Yusuf was fast and skilled in his video editing delivery of a zoom interview. He saved me a ton of time. Highly recommend.',
        // image: '/avatars/angie.png',
    },
    {
        name: 'Nicole Rhone',
        title: 'Podcast Host',
        quote:
            'He was amazing to work with! He provided the best audio clips ahead of schedule. Excellent communication.',
        // image: '/avatars/nicole.png',
    },
    {
        name: 'Brenda Denbesten',
        title: 'Speaker & Coach',
        quote:
            'Finding Technovere has been a life saver! He took the time to understand my vision and over-delivered.',
        // image: '/avatars/brenda.png',
    },
    {
        name: 'Marc',
        title: 'Entrepreneur',
        quote:
            'Working with Yusuf was great. He had a sincere willingness to meet expectations and learn. Highly recommend.',
        // image: '/avatars/marc.png',
    },
    {
        name: 'Sonya L. Thompson',
        title: 'Founder of ARISE Apostolic Network',
        quote:
            'Excellent job! I do mean excellent. He pays great attention to detail. We will use his services from now on!',
        // image: '/avatars/sonya.png',
    },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({
    testimonial,
    index,
}) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="min-w-[320px] max-w-xs p-4 bg-white/10 backdrop-blur-lg rounded-2xl shadow hover:scale-105 transition-transform duration-300"
    >
        <div className="flex space-x-4">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 p-0.5">
                <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                    {testimonial.image ? (
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            onError={(e) => ((e.target as HTMLImageElement).src = '/avatars/fallback.png')}
                        />
                    ) : (
                        <span className="text-white font-bold text-sm">{testimonial.name.charAt(0)}</span>
                    )}
                </div>
            </div>
            <div className="flex-1">
                <div className="flex space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                <p className="text-gray-700 text-sm mb-2 line-clamp-3">"{testimonial.quote}"</p>
                <h4 className="text-sm font-semibold text-gray-900">{testimonial.name}</h4>
                {testimonial.title && <p className="text-xs text-gray-500">{testimonial.title}</p>}
            </div>
        </div>
    </motion.div>
);

const Testimonials: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scrollSpeed = 1;
        const totalScrollWidth = scrollContainer.scrollWidth / 2;

        const autoScroll = () => {
            if (!scrollContainer || isHovered) return;
            scrollContainer.scrollLeft += scrollSpeed;

            if (scrollContainer.scrollLeft >= totalScrollWidth) {
                scrollContainer.scrollLeft = 0;
            }
        };

        const interval = setInterval(autoScroll, 20);
        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <section className="py-16 bg-blue-100">
            <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-900">
                        What Our{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Clients Say
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 mt-2">
                        Don't just take our word for it – here's what our amazing clients say.
                    </p>
                </div>

                {/* Infinite scroll area */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto space-x-6 scrollbar-hide px-16 py-4"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        scrollSnapType: 'x mandatory',
                        WebkitOverflowScrolling: 'touch',
                    }}
                >
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div key={index} className="scroll-snap-start">
                            <TestimonialCard testimonial={testimonial} index={index % testimonials.length} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

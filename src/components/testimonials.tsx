import React from 'react';

const testimonials = [
    {
        name: 'Fiverr Client',
        quote: 'Yusuf was very pleasant to deal with and did a great job in clarifying and following my instructions. Would definitely use his services again and recommend him.',
    },
    {
        name: 'Vinnum Shawti',
        title: 'Founder of itsvinnumshawti',
        quote: 'He listened to everything I asked!! Had me laughing at my own video! Skills are excellent! I Will work with him on future videos!',
    },
    {
        name: 'Angie Deborja',
        quote: 'Yusuf was fast and skilled in his video editing delivery of a zoom interview. He saved me a ton of time. Highly recommend.',
    },
    {
        name: 'Nicole Rhone',
        title: 'Podcast Host',
        quote: 'He was amazing to work with! He provided the best audio clips ahead of schedule. Excellent communication.',
    },
    {
        name: 'Brenda Denbesten',
        title: 'Speaker & Coach',
        quote: 'Finding Technovere has been a life saver! He took the time to understand my vision and over-delivered.',
    },
    {
        name: 'Marc',
        title: 'Entrepreneur',
        quote: 'Working with Yusuf was great. He had a sincere willingness to meet expectations and learn. Highly recommend.',
    },
    {
        name: 'Sonya L. Thompson',
        title: 'Founder of ARISE Apostolic Network',
        quote: 'Excellent job! I do mean excellent. He pays great attention to detail. We will use his services from now on!',
    },
];

// Custom Marquee Component
const Marquee = ({ children, reverse = false, pauseOnHover = false, speed = 50 }) => {
    return (
        <div className="overflow-hidden whitespace-nowrap w-full">
            <div
                className={`inline-flex gap-6 ${pauseOnHover ? 'hover:pause' : ''}`}
                style={{
                    animation: `scroll ${speed}s linear infinite ${reverse ? 'reverse' : ''}`,
                }}
            >
                {children}
                {children}
            </div>
            <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

type ReviewCardProps = {
    name: string;
    title?: string;
    quote: string;
};

const ReviewCard = ({ name, title, quote }: ReviewCardProps) => (
    <div className="w-[340px] sm:w-[380px] md:w-[450px] lg:w-[480px] flex-shrink-0 bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all min-h-[200px] flex flex-col justify-start">
        <div className="flex items-center gap-3 mb-4">
            <div className="rounded-full bg-gradient-to-br from-blue-500 to-purple-600 w-10 h-10 flex items-center justify-center text-white font-bold text-lg">
                {name.charAt(0)}
            </div>
            <div className="flex flex-col">
                <div className="text-sm font-semibold text-gray-800">{name}</div>
                {title && <p className="text-xs text-gray-500">{title}</p>}
            </div>
        </div>
        <blockquote className="text-sm text-gray-700 leading-relaxed whitespace-normal break-words">
            {quote}
        </blockquote>
    </div>
);


const Testimonials = () => {
    const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
    const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

    return (
        <section id="testimonials" className="w-full py-16 px-4 bg-white relative">
            <div className="max-w-7xl mx-auto text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A]">What Our Clients Say?</h2>
                <p className="text-base md:text-lg text-black/60 font-semibold mt-2">
                    Don't just take our word for it – here’s what our amazing clients say.
                </p>
            </div>

            <div className="space-y-10">
                {/* Row 1 - Normal Scroll */}
                <Marquee pauseOnHover={true} speed={40}>
                    {firstRow.map((review, i) => (
                        <ReviewCard key={`r1-${i}`} {...review} />
                    ))}
                </Marquee>

                {/* Row 2 - Reverse Scroll */}
                <Marquee reverse={true} pauseOnHover={true} speed={45}>
                    {secondRow.map((review, i) => (
                        <ReviewCard key={`r2-${i}`} {...review} />
                    ))}
                </Marquee>
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[calc(130%+1.3px)] h-[60px] translate-y-[15px] pr-6" // 👈 Added translate-y and padding-right
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39
         -57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8
         C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        fill="#1E3A8A"
                    />
                </svg>
            </div>

        </section>
    );
};

export default Testimonials;

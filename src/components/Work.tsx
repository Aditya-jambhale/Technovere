import React, { useState, useEffect } from 'react';
import { ExternalLink, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
    id: number;
    name: string;
    category: string;
    url: string;
    image: string;
    description: string;
}

const projects: Project[] = [
    {
        id: 1,
        name: "J&C Assets",
        category: "Business",
        url: "http://jandcassets.com/",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
        description: "Corporate asset management platform"
    },
    {
        id: 2,
        name: "Arise Apostolic",
        category: "Religious",
        url: "http://ariseapostolic.com/",
        image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
        description: "Modern church community website"
    },
    {
        id: 3,
        name: "Anish Lalchandani",
        category: "Personal",
        url: "http://anishlalchandani.com/",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
        description: "Professional portfolio website"
    },
    {
        id: 4,
        name: "Kundlas MD",
        category: "Doctor",
        url: "http://kundlasmd.com/",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
        description: "Medical practice digital presence"
    },
    {
        id: 5,
        name: "Neuroeducation Wellness",
        category: "Healthcare",
        url: "https://neuroeducationwellness.com",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
        description: "Brain health and wellness platform"
    },
    {
        id: 6,
        name: "360 Program",
        category: "Education",
        url: "https://360program.org",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
        description: "Comprehensive educational initiative"
    },
    {
        id: 7,
        name: "Intentional Rivers",
        category: "Coach",
        url: "https://intentionalrivers.com",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
        description: "Life coaching and personal development"
    },
    {
        id: 8,
        name: "eVision Her",
        category: "Business",
        url: "https://evisionher.com",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
        description: "Women's entrepreneurship platform"
    },
    {
        id: 9,
        name: "Renewal Symposium",
        category: "Event",
        url: "https://renewalsymposium.com",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
        description: "Professional development conference"
    }
];

const categories = ["All", "Business", "Doctor", "Coach", "Healthcare", "Education", "Religious", "Personal", "Event"];

// Typing Effect Component for Main Heading
const TypingEffect: React.FC = () => {
    const words = [
        "Our Portfolio - classic and clear"
    ];
    
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const type = () => {
            const currentWord = words[currentWordIndex];
            
            if (isDeleting) {
                setCurrentText(currentWord.substring(0, currentText.length - 1));
                setTypingSpeed(75);
            } else {
                setCurrentText(currentWord.substring(0, currentText.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && currentText === currentWord) {
                setTimeout(() => setIsDeleting(true), 2500);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timer = setTimeout(type, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, typingSpeed, words]);

    return (
        <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 leading-tight">
            <span className="relative">
                {currentText}
                <span className="animate-pulse text-blue-800">|</span>
            </span>
        </span>
    );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
            }}
        >
            <div className="relative overflow-hidden aspect-[4/3]">
                <img
                    src={project.image}
                    alt={project.name}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    onLoad={() => setImageLoaded(true)}
                />
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                    </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            {project.name}
                        </h3>
                        <p className="text-white/90 text-sm mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                            {project.description}
                        </p>
                        <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                            >
                                <ExternalLink size={16} />
                                Visit Site
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Footer */}
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{project.name}</h3>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                            {project.category}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const OurWork: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const itemsPerPage = 6;

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

    const handleCategoryChange = (category: string) => {
        if (category === selectedCategory) return;

        setIsAnimating(true);
        setTimeout(() => {
            setSelectedCategory(category);
            setCurrentPage(1);
            setIsAnimating(false);
        }, 300);
    };

    const handlePageChange = (page: number) => {
        if (page === currentPage || page < 1 || page > totalPages) return;

        setIsAnimating(true);
        setTimeout(() => {
            setCurrentPage(page);
            setIsAnimating(false);
            document.getElementById('our-work')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    const renderPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;
        let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
        let end = Math.min(totalPages, start + maxVisible - 1);

        if (end - start + 1 < maxVisible) {
            start = Math.max(1, end - maxVisible + 1);
        }

        if (start > 1) {
            pages.push(
                <button
                    key={1}
                    onClick={() => handlePageChange(1)}
                    className="px-4 py-2 rounded-lg font-medium transition-all duration-200 text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                >
                    1
                </button>
            );
            if (start > 2) {
                pages.push(<span key="ellipsis1" className="px-2 text-gray-400">...</span>);
            }
        }

        for (let i = start; i <= end; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${i === currentPage
                            ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                >
                    {i}
                </button>
            );
        }

        if (end < totalPages) {
            if (end < totalPages - 1) {
                pages.push(<span key="ellipsis2" className="px-2 text-gray-400">...</span>);
            }
            pages.push(
                <button
                    key={totalPages}
                    onClick={() => handlePageChange(totalPages)}
                    className="px-4 py-2 rounded-lg font-medium transition-all duration-200 text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                >
                    {totalPages}
                </button>
            );
        }

        return pages;
    };

    return (
        <section id="our-work" className="py-20 bg-blue-300 min-h-screen relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-yellow-300/10 rounded-full blur-2xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header with Typing Effect */}
                <div className="text-center mb-16">
                    <div className="mb-6 text-blue-800">
                        <div className="min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem] flex items-center text-blue-800 justify-center mb-4">
                            <TypingEffect/>
                        </div>
                        {/* <div className="block mt-4">
                            <span className="text-2xl md:text-3xl text-blue-600 font-normal">
                                Crafting Digital Excellence
                            </span>
                        </div> */}
                    </div>
                    <div className="mt-8 max-w-4xl mx-auto">
                        <p className="text-sm md:text-xl text-gray-700 leading-relaxed font-medium">
                            Explore our portfolio of{' '}
                            <span className="text-blue-600 font-semibold">premium digital solutions</span>. 
                            From corporate platforms to personal brands, we create experiences that{' '}
                            <span className="text-purple-600 font-semibold">drive results</span> and{' '}
                            <span className="text-blue-600 font-semibold">inspire engagement</span>.
                        </p>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${selectedCategory === category
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:text-blue-600 shadow-md border border-white/50'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'}`}>
                    {currentProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {currentProjects.map((project, index) => (
                                <ProjectCard key={`${project.id}-${currentPage}`} project={project} index={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
                            <p className="text-gray-600">Try selecting a different category to see more projects.</p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg font-medium transition-all duration-200 text-gray-600 hover:text-blue-600 hover:bg-white/50 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {renderPageNumbers()}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg font-medium transition-all duration-200 text-gray-600 hover:text-blue-600 hover:bg-white/50 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes gradientShift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradientShift 3s ease infinite;
                }
            `}</style>
        </section>
    );
};

export default OurWork;
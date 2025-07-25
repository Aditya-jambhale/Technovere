import React, { useState } from 'react';
import { ExternalLink, Globe, Briefcase, User, Calendar } from 'lucide-react';

interface Project {
    id: number;
    name: string;
    category: string;
    url: string;
    image: string;
    description: string;
    tagline?: string;
}

const projects: Project[] = [
    {
        id: 1,
        name: "J&C Assets",
        category: "Business",
        url: "http://jandcassets.com/",
        image: "/images/jandc.png",
        description: "Corporate asset management platform",
        tagline: "Asset Management Solutions"
    },
    {
        id: 2,
        name: "Arise Apostolic",
        category: "Religious",
        url: "http://ariseapostolic.com/",
        image: "https://ariseapostolic.com/wp-content/uploads/2021/05/Arise-Apostolic-Network.png",
        description: "Modern church community website",
        tagline: "Faith Community Platform"
    },
    {
        id: 3,
        name: "Anish Lalchandani",
        category: "Personal",
        url: "http://anishlalchandani.com/",
        image: "/creators/Anish.png",
        description: "Professional portfolio website",
        tagline: "Personal Portfolio"
    },
    {
        id: 4,
        name: "Kundlas MD",
        category: "Doctor",
        url: "http://kundlasmd.com/",
        image: "/companies/kundlas.png",
        description: "Medical practice digital presence",
        tagline: "Healthcare Professional"
    },
    {
        id: 5,
        name: "Neuroeducation Wellness",
        category: "Healthcare",
        url: "https://neuroeducationwellness.com",
        image: "https://neuroeducationwellness.com/wp-content/uploads/2024/07/EA6F8A0A-3E20-497E-8997-2FBB324AD667-2048x1022.png",
        description: "Brain health and wellness platform",
        tagline: "Wellness & Education"
    },
    // {
    //     id: 6,
    //     name: "360 Program",
    //     category: "Education",
    //     url: "https://360program.org",
    //     image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
    //     description: "Comprehensive educational initiative",
    //     tagline: "Educational Excellence"
    // },
    {
        id: 7,
        name: "Intentional Rivers",
        category: "Coach",
        url: "https://intentionalrivers.com",
        image: "/companies/intentional2.png",
        description: "Life coaching and personal development",
        tagline: "Life Transformation"
    },
    {
        id: 8,
        name: "eVision Her",
        category: "Business",
        url: "https://evisionher.com",
        image: "/companies/her.png",
        description: "Women's entrepreneurship platform",
        tagline: "Empowering Women"
    },
    {
        id: 9,
        name: "Renewal Symposium",
        category: "Event",
        url: "https://renewalsymposium.com",
        image: "/companies/new2.png",
        description: "Professional development conference",
        tagline: "Professional Growth"
    }
];

const categories = [
    { label: "All", icon: Globe },
    { label: "Business", icon: Briefcase },
    { label: "Personal", icon: User },
    { label: "Event", icon: Calendar }
];

const WorkSection: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((project) => project.category === selectedCategory);

    const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
        const [imageLoaded, setImageLoaded] = useState(false);
        const [isHovered, setIsHovered] = useState(false);

        return (
            <div
                className="group bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-blue-400 overflow-hidden cursor-pointer transform hover:-translate-y-1"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative h-52 sm:h-60 bg-gray-300 flex items-center justify-center overflow-hidden rounded-lg">
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center z-10">
                            <div className="text-center">
                                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-3"></div>
                                <div className="text-sm text-gray-500 font-medium">{project.name}</div>
                            </div>
                        </div>
                    )}
                    <img
                        src={project.image}
                        alt={project.name}
                        className={`max-h-32 sm:max-h-40 object-contain transition-all duration-700 ${isHovered ? 'scale-105 brightness-110' : 'scale-100'} ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setImageLoaded(true)}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="absolute bottom-4 left-4 right-4">
                            <div className={`transform transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                <div className="flex items-center gap-2 text-white">
                                    <Globe className="w-4 h-4" />
                                    <span className="text-sm font-medium">View Project</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-3 right-3 z-20">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm transition-all duration-300 ${isHovered ? 'bg-white/90 text-gray-900' : 'bg-black/40 text-white'}`}>
                            {project.category}
                        </span>
                    </div>
                </div>

                <div className="p-6 flex-1">
                    <div className="mb-6">
                        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isHovered ? 'text-blue-600' : 'text-gray-900'}`}>
                            {project.name}
                        </h3>
                        {project.tagline && (
                            <p className="text-sm text-blue-600 font-semibold mb-3 uppercase tracking-wide">
                                {project.tagline}
                            </p>
                        )}
                        <p className="text-gray-600 leading-relaxed line-clamp-2">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform ${isHovered
                                ? 'bg-blue-600 text-white shadow-lg scale-105 hover:bg-blue-700'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span className="text-sm">Visit Site</span>
                            <ExternalLink className={`w-4 h-4 transition-transform duration-200 ${isHovered ? 'translate-x-0.5' : ''}`} />
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="our-work" className="bg-[#1E3A8A] py-16 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Our <span className='text-yellow-400'>Work</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map(({ label, icon: Icon }) => (
                        <button
                            key={label}
                            onClick={() => setSelectedCategory(label)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                selectedCategory === label
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                            }`}
                        >
                            <Icon className="w-4 h-4" />
                            {label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-10">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            style={{
                                animationDelay: `${index * 150}ms`,
                                animation: 'fadeInUp 0.6s ease-out forwards'
                            }}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-4xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
                        <p className="text-gray-600">Try selecting a different category to see more projects.</p>
                    </div>
                )}
            </div>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[calc(130%+1.3px)] h-[60px]"
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39
              -57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8
                C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        fill="#FFFFFF"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

const styles = `
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

    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;

if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

export default WorkSection;

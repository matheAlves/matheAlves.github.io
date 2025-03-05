import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    screenshots: string[];
    githubLink: string;
    liveLink?: string;
}

const ProjectCard = ({ title, description, technologies, screenshots, githubLink, liveLink }: ProjectCardProps) => {
    return (
        <div className="flex flex-col min-[1300px]:flex-row items-center justify-between gap-8 p-6">
            <div className="w-full sm:w-1/2 text-primary h-fit">
                <h2 className="font-monumentBlack text-2xl mb-4">{title}</h2>
                <p className="text-[13px] sm:text-lg font-monumentLight mb-4 text-gray-800">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                        <span key={index} className="bg-primary text-black px-2 py-1 rounded text-sm">
                            {tech}
                        </span>
                    ))}
                </div> 
                <div className="flex gap-4">
                    <a href={githubLink} target="_blank" className="text-primary hover:text-primary-dark">
                        GitHub
                    </a>
                    {liveLink && (
                        <a href={liveLink} target="_blank" className="text-primary hover:text-primary-dark">
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
            <div className="w-full sm:w-1/2 relative sm:h-[400px] h-auto">
                <div className="flex flex-col sm:block">
                    {screenshots.map((screenshot, index) => (
                        <motion.img
                            key={index}
                            src={screenshot}
                            alt={`${title} screenshot ${index + 1}`}
                            className="rounded-lg shadow-lg mb-4 sm:mb-0 sm:absolute"
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 2, -2, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                delay: index * 0.5,
                            }}
                            style={{
                                width: '300px',
                                ...(window.innerWidth >= 768 ? {
                                    left: `${index * 200}px`,
                                    top: `${index * 70}px`
                                } : {})
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

import React from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  // githubUrl: string;
  // liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "University Official Alumni Portal",
    description: "This platform facilitates seamless interaction between alumni and the institution, offering features such as user authentication, event management, and a searchable alumni directory.",
    image: "/src/assets/alumni.png",
    technologies: ["React.js", "Typescript", "TailwindCSS", "OpenAI", "Vite", "NodeJS.js","MYSQL"],
    // githubUrl: "https://github.com/yourusername/project1",
    // liveUrl: "https://project1.demo.com"
  },
  {
    title: "Modern Finance Tracker App for Teens",
    description: "A user-friendly Web App designed to help teenagers manage their finances effectively. It offers features like expense tracking, savings goals, budgeting tools, and financial literacy tips, all presented in an engaging and gamified interface. Built with a modern tech stack, it aims to instill good money habits from a young age.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Figma","PostManAPI"],
    // githubUrl: "https://github.com/yourusername/project2",
    // liveUrl: "https://project2.demo.com"
  },
  {
    title: "PriceWatcher",
    description: " PriceWatcher, an e-commerce product scraping platform using Next.js and Bright Data's WebUnlocker handling over 1,000+ product scrapes daily with high reliability. Designed to empower users with real-time product tracking, it notifies users of price drops and out-of-stock alerts through automated email notifications to over 200+ users. Implemented cron jobs to automate periodic scraping, maintaining 99.9% uptime for accurate and up-to-date product information..",
    image: "/src/assets/pricewatcher.png",
    technologies: ["React.js", "TypeScript","Node.js", "MongoDB", "TailwindCSS","CRON","NodeMailer", "HeadlessUI","Cheerio"],
    // githubUrl: "https://github.com/yourusername/project3"
  },
  {
    title: "DineSphere",
    description: " Engineered and integrated Stripe for frictionless payment processing, resulting in a streamlined transaction experience that improved customer satisfaction scores by 30% while ensuring secure real-time financial transactions. Enhanced functionality by incorporating powerful search, email workflows with Mailtrap. Delivered a 20% faster page load time with optimized SEO and state management using Zustand, ensuring a superior user experience.",
    image: "/src/assets/dinesphere.png",
    technologies: ["React.js", "Express.js", "MongoDB", "Zustand","JWT","SEO Optimization"],
    // githubUrl: "https://github.com/yourusername/project3"
  },
  
];

export function Projects() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-400"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
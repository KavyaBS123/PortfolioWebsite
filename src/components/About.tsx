import React from 'react';
import { FileDown, Mail, Github, Linkedin } from 'lucide-react';

export function About() {
  return (
    <div className="bg-white dark:bg-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4"
                alt="Profile"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-4 -left-4 w-full h-full border-4 border-blue-500 rounded-2xl -z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
            
            {/* Social Links */}
            <div className="absolute bottom-6 left-6 flex space-x-4">
              <a
                href="mailto:abhihonnapure@gmail.com"
                className="p-3 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:transform hover:scale-110 transition-all"
              >
                <Mail className="w-5 h-5 text-blue-500" />
              </a>
              <a
                href="https://github.com/yourusername"
                className="p-3 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:transform hover:scale-110 transition-all"
              >
                <Github className="w-5 h-5 text-blue-500" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="p-3 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:transform hover:scale-110 transition-all"
              >
                <Linkedin className="w-5 h-5 text-blue-500" />
              </a>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-500 bg-opacity-10 rounded-lg">
              <span className="text-blue-500 font-semibold">Full Stack Developer</span>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Crafting Digital Experiences with Code
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Hi there! I'm a passionate Full Stack Developer with a strong foundation in web technologies
                and a keen eye for creating user-friendly applications. I specialize in building scalable
                web applications using modern technologies like React, Node.js, and TypeScript.
              </p>
              <p>
                With a problem-solving mindset and attention to detail, I strive to write clean,
                maintainable code that delivers exceptional user experiences. I'm constantly learning
                and staying up-to-date with the latest web development trends and best practices.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-blue-500">2+</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Years of Experience</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-blue-500">20+</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-blue-500">10+</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</p>
              </div>
            </div>

            <a
              href="/path-to-your-cv.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <FileDown className="w-5 h-5 mr-2" />
              Download My CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-blue-500">Kavya B S</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
        Code Architect & Community Builder⚡️ 
        Full Stack Visionary & 🚀PWA Innovator |🌐FOSS Advocate | 
        ☁️Aspiring Cloud & DevOps Enthusiast | 📚Tech Storyteller| 
     
        </p>
        <p className="text-lg md:text-xl mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I build exceptional and accessible digital experiences for the web.
          A tech enthusiast and interested in reaching peep's to share thoughts and learn something new.
          💻Undergrad Engineering in making 
        </p>
        
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/KavyaBS123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transform hover:scale-110 transition-transform"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/kavya-b-s/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transform hover:scale-110 transition-transform"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="mailto:kavyabsalawadagi@example.com"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transform hover:scale-110 transition-transform"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
}
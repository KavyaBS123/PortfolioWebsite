import React, { useState } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

export function Qualification() {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

  const education = [
    {
      title: "Bachelor's in Computer Science",
      institution: "The Oxford College of Engineering",
      year: "2022 - 2026",
     
    },
    {
      title: "11th-12th",
      institution: "Narayana Institutes",
      year: "2020 - 2022",
     
    },
    {
      title: "UKG-10th",
      institution: "Kroot Memorial School",
      year: "2008 - 2020",
     
    },
    // Add more education items as needed
  ];

  const experience = [
    {
      title: "Full Stack Developer",
      company: "build space",
      year: "Jun 2024 - Oct 2024",
      description: "Developed a comprehensive MERN-based Finance Dashboard App integrating machine learning for predictive analytics. Built with Vite, Redux Toolkit, and Material UI, the app provides an intuitive, responsive UI, while Recharts visualizes financial data. On the backend, Node.js, Express, and MongoDB handle robust data processing and storage, offering users real-time insights and forecasts to inform financial decision-making."
    },
    {
      title: "Open Source Developer",
      company: "Hacktoberfest",
      year: "Oct 2024 - Oct 2024",
      description: "Enthusiastic open-source contributor, actively participated in Hacktoberfest, one of the most prestigious open-source festivals. Made valuable contributions to diverse projects involving both frontend and backend development, enhancing features, resolving issues, and collaborating with global developers to improve project functionality and user experience. Passionate about contributing to impactful, community-driven projects and continually expanding my skill set in full-stack development.."
    },
    {
      title: "Open Source Developer",
      company: "Vinayasa Summer of Code",
      year: "Jun 2024 - Oct 2024",
      description: "At Vinyasa Summer of Code, I joined fellow students in computer science and design to explore our passion for software development and design in a supportive and immersive environment. Through hands-on projects, mentorship, and workshops, I aim to sharpen my technical skills and gain invaluable real-world experience."
    },
    // Add more experience items as needed
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
       My  Qualification  & Experience
        </h2>
        
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center px-6 py-3 rounded-lg mr-4 ${
              activeTab === 'education'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            <GraduationCap className="w-5 h-5 mr-2" />
            Education
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center px-6 py-3 rounded-lg ${
              activeTab === 'experience'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            <Briefcase className="w-5 h-5 mr-2" />
            Experience
          </button>
        </div>

        <div className="space-y-8">
          {activeTab === 'education' ? (
            education.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{item.institution}</p>
                <p className="text-blue-500 mb-2">{item.year}</p>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))
          ) : (
            experience.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{item.company}</p>
                <p className="text-blue-500 mb-2">{item.year}</p>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
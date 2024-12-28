import React, { useState } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

export function Qualification() {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

  const education = [
    {
      title: "Bachelor's in Computer Science",
      institution: "Your University",
      year: "2018 - 2022",
      description: "Focused on software development and web technologies"
    },
    // Add more education items as needed
  ];

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company",
      year: "2022 - Present",
      description: "Leading development of web applications using React and Node.js"
    },
    // Add more experience items as needed
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Qualification
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
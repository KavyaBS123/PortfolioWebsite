import React from 'react';

const skills = {
 
  "Programming Language": [
    "Java", "C", "Python",
    "C++", "JavaScript", "TypeScript",
  ],
  "Technologies/Frameworks": [
    "React.js", "Node.js", "Express.js",
    "MySQL ", "PostgreSQL", "MongoDB", "Next.js", "TailwindCSS", "SASS Developer tools"
  ],
  "Developer tools": [
    "Git", "GitHub", "CloudFlare", "Linux"
  ],
  "Soft Skills": [
    "Leadership ", "Public Speaking","Problem Solving ", "Interpersonal skills", "TeamWork", "Communication", "Content Writer"
  ]
};

export function Skills() {
  return (
    <div className="bg-white dark:bg-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
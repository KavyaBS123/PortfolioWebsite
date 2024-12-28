import React, { useState } from 'react';
import { Mail } from 'lucide-react';



export function Contact() {


  return (
    <div className="bg-white dark:bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
          Let's Connect
        </h2>
        <h3 className="text-2xl text-gray-700 dark:text-gray-300 text-center mb-12">
          Contact Me
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Talk to me
            </h3>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <Mail className="w-8 h-8 text-blue-500 mb-4" />
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Email</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">kavyabsalawadagi@gmail.com</p>
              <a href="mailto:kavyabsalawadagi@gmail.com" className="text-blue-500 hover:text-blue-600">
                Write Me →
              </a>
            </div>

           

           
          </div>

     </div>
     </div>
     </div>
  );
}


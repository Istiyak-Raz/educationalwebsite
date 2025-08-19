"use client";

import { useState } from 'react';
import { courses } from '@/data/courses';

const ProgramsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(courses.map(course => course.category))];

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Programs</h1>
      
      {/* Category Filter */}
      <div className="flex justify-center flex-wrap space-x-4 mb-12">
        {categories.map(category => (
          <button 
            key={category} 
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full mb-2 focus:outline-none transition-colors ${
              selectedCategory === category 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'
            }`}>
            {category}
          </button>
        ))}
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="p-6 flex-grow">
              <h2 className="text-xl font-bold text-green-600">{course.title}</h2>
              <p className="text-sm text-gray-500 mt-1">{course.category}</p>
              <p className="mt-4 text-gray-700">{course.description}</p>
            </div>
            <div className="p-6 bg-gray-50">
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-blue-800">{course.fees}</p>
                <p className="text-sm text-gray-600">{course.duration}</p>
              </div>
              <div className="mt-6">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsPage;

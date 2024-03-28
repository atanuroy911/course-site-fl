import React, { useState } from 'react';

// Define a type for your course data
type Course = {
  title: string;
  description: string;
  imageUrl: string;
};

const ContentSection = () => {
  // Define your course data
  const courseData: { [key: string]: Course[] } = {
    'Web Dev': [
      { title: 'HTML and CSS Fundamentals', description: 'Learn the basics of HTML and CSS for web development', imageUrl: '/html-css-fundamentals.jpg' },
      { title: 'JavaScript Essentials', description: 'Master the fundamentals of JavaScript programming language', imageUrl: '/javascript-essentials.jpg' },
      { title: 'React.js for Beginners', description: 'Get started with React.js library for building user interfaces', imageUrl: '/reactjs-for-beginners.jpg' },
      { title: 'Node.js Crash Course', description: 'Learn the basics of Node.js for server-side JavaScript development', imageUrl: '/nodejs-crash-course.jpg' },
    ],
    'App Dev': [
      { title: 'iOS App Development with Swift', description: 'Build native iOS apps using the Swift programming language', imageUrl: '/ios-app-dev-swift.jpg' },
      { title: 'Android App Development with Kotlin', description: 'Develop Android apps using the Kotlin programming language', imageUrl: '/android-app-dev-kotlin.jpg' },
      { title: 'Cross-platform Mobile App Development', description: 'Create mobile apps that work on both iOS and Android platforms', imageUrl: '/cross-platform-mobile-app-dev.jpg' },
      { title: 'Flutter UI Design Masterclass', description: 'Design beautiful user interfaces with Flutter framework', imageUrl: '/flutter-ui-design.jpg' },
    ],
    'JavaScript': [
      { title: 'JavaScript Fundamentals', description: 'Learn the basics of JavaScript programming language', imageUrl: '/javascript-fundamentals.jpg' },
      { title: 'Advanced JavaScript Concepts', description: 'Explore advanced topics in JavaScript programming', imageUrl: '/advanced-javascript-concepts.jpg' },
      { title: 'ES6+ Modern JavaScript', description: 'Master the latest features of ECMAScript 6 and beyond', imageUrl: '/es6-modern-javascript.jpg' },
      { title: 'Functional Programming in JavaScript', description: 'Understand functional programming principles in JavaScript', imageUrl: '/functional-programming-js.jpg' },
    ],
    'Android': [
      { title: 'Android Basics: User Interface', description: 'Learn the basics of Android app development focusing on UI', imageUrl: '/android-basics-ui.jpg' },
      { title: 'Android Basics: User Input', description: 'Get started with user input handling in Android apps', imageUrl: '/android-basics-user-input.jpg' },
      { title: 'Android Networking Fundamentals', description: 'Understand networking concepts for Android app development', imageUrl: '/android-networking-fundamentals.jpg' },
      { title: 'Android Database Essentials', description: 'Learn to work with databases in Android apps', imageUrl: '/android-database-essentials.jpg' },
    ],
    'Python': [
      { title: 'Python Programming Basics', description: 'Introduction to Python programming language', imageUrl: '/python-programming-basics.jpg' },
      { title: 'Python Data Structures', description: 'Explore different data structures in Python', imageUrl: '/python-data-structures.jpg' },
      { title: 'Python Web Scraping', description: 'Learn how to extract data from websites using Python', imageUrl: '/python-web-scraping.jpg' },
      { title: 'Django Web Development', description: 'Build web applications using Django framework', imageUrl: '/django-web-development.jpg' },
    ],
  };
  

  // State to track the active tab
  const [activeTab, setActiveTab] = useState(Object.keys(courseData)[0]);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">All the skills you need in one place</h2>
          <p className="mt-4 text-lg text-gray-500">From critical workplace skills to technical topics, our catalog supports well-rounded professional development.</p>
        </div>
        <div className="mt-10">
          <div className="flex justify-center">
            {Object.keys(courseData).map((category) => (
              <button
                key={category}
                className={`${
                  activeTab === category ? 'bg-indigo-600 text-white' : 'text-indigo-600 hover:bg-indigo-100'
                } px-4 py-2 mr-4 rounded-full`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseData[activeTab].map((course, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow-xl rounded-lg relative"
                onMouseEnter={(e) => {
                  e.currentTarget.classList.add('shadow-2xl', 'transform', 'scale-105');
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.classList.remove('shadow-2xl', 'transform', 'scale-105');
                }}
              >
                <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                  <p className="mt-2 text-gray-600">{course.description}</p>
                  <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                    Enroll
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;

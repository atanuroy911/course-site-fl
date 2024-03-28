// components/Header.tsx

import React from 'react';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

const Header: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Education Live" className="h-10 mr-4" />
          <span className="text-xl font-bold">Education Live</span>
        </div>
        <div className="relative ml-4">
          <input
            type="text"
            placeholder="Search courses..."
            className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
            style={{ width: '300px' }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute right-3 top-3 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 15l4.5 4.5M10 18a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center">
        <Link href='/login' className="mr-4 px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600">
          Login
        </Link>
        <Link href="/signup" className="mr-4 px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600">
          Signup
        </Link>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Header;

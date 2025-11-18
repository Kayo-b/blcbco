import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Menu() {
  return (
    <nav className="bg-white shadow-md w-64 h-screen fixed left-0 top-0">
      {/* Vertical Menu Container */}
      <div className="flex flex-col p-6 space-y-4">
        <Link 
          to="/" 
          className="text-gray-700 hover:text-gray-900 px-4 py-3 rounded hover:bg-gray-100"
        >
          Shop 
        </Link>
        <Link 
          to="/about" 
          className="text-gray-700 hover:text-gray-900 px-4 py-3 rounded hover:bg-gray-100"
        >
          Catering 
        </Link>
        <Link 
          to="/products" 
          className="text-gray-700 hover:text-gray-900 px-4 py-3 rounded hover:bg-gray-100"
        >
          Contact 
        </Link>
      </div>
    </nav>
  );
}
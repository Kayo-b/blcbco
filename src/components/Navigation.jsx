import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation({ cartItemCount = 0, onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800">
             BalacoBaco 
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div style={{ display: 'flex', gap: '32px' }}>
            <Link 
              to="/products" 
              style={{ padding: '8px 12px' }}
              className="text-gray-700 hover:text-gray-900"
            >
             Shop 
            </Link>
            <Link 
              to="/catering" 
              style={{ padding: '8px 12px' }}
              className="text-gray-700 hover:text-gray-900"
            >
              Catering 
            </Link>
            <Link 
              to="/about" 
              style={{ padding: '8px 12px' }}
              className="text-gray-700 hover:text-gray-900"
            >
              Contact 
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <button onClick={onCartClick} className="relative">
              <svg 
                viewBox="0 0 34 30" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="block w-6 h-6 lg:w-8 lg:h-7"
              >
                <path 
                  d="M16.9994 1C14.0664 1 11.6944 5.60349 11.6944 11.2858H22.3129C22.3129 5.60349 19.9325 1 17.0079 1H16.9994Z" 
                  stroke="currentColor" 
                  vectorEffect="non-scaling-stroke"
                />
                <path 
                  d="M33 11.286H1V29H33V11.286Z" 
                  stroke="currentColor" 
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/catering"
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Catering
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

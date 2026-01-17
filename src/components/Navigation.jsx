import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import blbcLogo from '../assets/balacobaco.svg';

export default function Navigation({ cartItemCount = 0, onCartClick, onContactClick, onContactClose }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 border-b-1 pb-6 mt-6">
          {/* Logo */}
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

          <div className="flex-shrink-0">
            <Link 
              // backgroundImage=''
              onMouseEnter={onContactClose}
              to="/" className="text-2xl font-bold text-gray-800">
             <img src={blbcLogo} alt='Logo' className="hidden md:block w-78 h-auto"/>
             <img src={blbcLogo} alt='Logo' className="block md:hidden w-52 h-auto"/>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='desktop-nav' onMouseEnter={onContactClose}>
            <Link 
              to="/products" 
              style={{ padding: '8px 12px' }}
              onMouseEnter={onContactClose}
              className="nav-link"
            >
              {t('nav.shop')}
            </Link>
            <Link 
              to="/catering" 
              style={{ padding: '8px 12px' }}
              onMouseEnter={onContactClose}
              className="nav-link"
            >
              {t('nav.catering')}
            </Link>
            <Link
              onMouseEnter={onContactClick}
              style={{ padding: '8px 12px' }}
              className="nav-link"
            >
              {t('nav.contact')}
            </Link>
            <Link
              to="/about" 
              onMouseEnter={onContactClose}
              style={{ padding: '8px 12px' }}
              className="nav-link"
            >
              {t('nav.about')}
            </Link>         
          </div>
          {/* Language Switcher & Cart Icon */}
            <LanguageSwitcher />
          <div
            onMouseEnter={onContactClose}
            className="items-center space-x-4">
            <button 
              onClick={onCartClick} className="cart-btn relative">
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
                <span className="absolute inset-0 flex items-center justify-center uppercase pt-[0.5rem] pb-[1px] text-[0.625rem] lg:pt-[0.625rem] lg:text-[0.875rem]">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="mobile-menu ">
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.shop')}
              </Link>
              <Link
                to="/catering"
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.catering')}
              </Link>
            <Link
              onMouseDown={onContactClick}
              className="nav-link"
            >
              {t('nav.contact')}
            </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

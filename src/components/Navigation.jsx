import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import blbcLogo from '../assets/balacobaco.svg';

export default function Navigation({ cartItemCount = 0, onCartClick, onContactClick, onContactClose }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const closeContactAndMenu = () => {
    onContactClose();
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="">
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 border-b-1 pb-6 mt-6">
          {/* Logo */}
          <button
              onClick={() => closeContactAndMenu()}
              className="md:hidden text-gray-700"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

          <div className="flex-shrink-0">
            <Link 
              onMouseEnter={onContactClose}
              onClick={() => closeContactAndMenu()}
              to="/" className="text-2xl font-bold text-gray-800">
             <img src={blbcLogo} alt='Logo' className="hidden md:block w-78 h-auto"/>
             <img src={blbcLogo} alt='Logo' className="block md:hidden w-62 h-auto"/>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='desktop-nav' onMouseEnter={onContactClose}>
            <NavLink 
              to="/products" 
              style={{ padding: '8px 0px' , marginLeft: '12px'}}
              onMouseEnter={onContactClose}
              className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
            >
              {t('nav.shop')}
            </NavLink>
            <NavLink 
              to="/catering" 
              style={{ padding: '8px 0px' , marginLeft: '12px'}}
              onMouseEnter={onContactClose}
              className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
            >
              {t('nav.catering')}
            </NavLink>
            <Link
              onMouseEnter={onContactClick}
              style={{ padding: '8px 0px' , marginLeft: '12px'}}
              className="nav-link"
            >
              {t('nav.contact')}
            </Link>
            <NavLink
              to="/about" 
              onMouseEnter={onContactClose}
              style={{ padding: '8px 0px 0px' , marginRight: '12px'}}
              className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
            >
              {t('nav.about')}
            </NavLink>         
          </div>
          {/* Language Switcher & Cart Icon */}
            <LanguageSwitcher />
          <div
            onMouseEnter={onContactClose}
            className="items-center space-x-4">
            <button 
              onClick={onCartClick} className="cart-btn relative">
              <svg fill="#000000" height="26px" width="26px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 540 390" xml:space="preserve">
                <g transform="scale(1.15, 0.9)">
                  <path d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3   c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1   C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462   H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41   c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z" />
                </g>
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
                to="/about"
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
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

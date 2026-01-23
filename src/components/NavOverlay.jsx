import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function NavOverlay({ isOpen, onClose }) {
  const { t } = useTranslation();

  return (
    <>
      {/* {isOpen && (
        <div 
          className="fixed inset-0 pointer-events-none"
          onClick={onClose}
        />
      )} */}

      {/* Drawer */}
      <div
      onMouseLeave={onClose}
      // onClick={(e) => e.stopPropagation()}
      id="NavOverlay"
      className={`
        navOverlay fixed top-21 left-0 w-full h-[400px] bg-gray-100 
        transition-opacity duration-300 ease-in-out
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        flex flex-col
      `}>
        {/* Header */}
       
        <div 
        className="flex flex-col gap-2 p-4 border-b border-gray-600">
        <div className="md:hidden">
          <button onClick={onClose} className="hover:opacity-70 transition-opacity h-10 w-10">
            <svg 
              width="34" 
              height="28" 
              viewBox="0 0 34 28" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M40 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
        </div>

          <p>(555) 123-4567</p>
          <p>contact@placeholder.com</p>
          <p><a href="https://www.instagram.com/balacobacoberlin/">{t('overlay.ig')}</a></p>
        </div>
      </div>
    </>
  );
}

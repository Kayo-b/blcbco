import { useTranslation } from 'react-i18next';

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
      onMouse
      // onClick={(e) => e.stopPropagation()}
      id="NavOverlay"
      className={`
        fixed top-15 left-0 w-full h-[400px] bg-gray-100 shadow-2xl z-50
        transition-opacity duration-300 ease-in-out
        ${isOpen ? 'opacity-92' : 'opacity-0 pointer-events-none'}
        flex flex-col
      `}>
        {/* Header */}
        <div 
        className="flex flex-col gap-2 p-6 border-b border-gray-600">
          <p>{t('overlay.phone')}: (555) 123-4567</p>
          <p>{t('overlay.email')}: contact@placeholder.com</p>
        </div>
      </div>
    </>
  );
}

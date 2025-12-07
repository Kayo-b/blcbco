import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Close menu after selection
  };

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'pt', label: 'PT' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  const otherLanguages = languages.filter(lang => lang.code !== i18n.language);

  return (
    <div className="relative group">
      {/* Current Language Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="language-btn bg-white"
      >
        {currentLanguage.label}
      </button>

      <div className={`
        ${isOpen ? 'flex' : 'hidden'} 
        flex-col gap-1 mt-1 absolute top-full left-0
      `}>
        {otherLanguages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className="language-btn bg-black/20 text-white hover:bg-black/25 hover:text-gray-900"
          >
            {lang.label}
          </button>
        ))}
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[-1] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

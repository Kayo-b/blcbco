import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="absolute top-0 right-0 gap-1 ">
      <button
        onClick={() => changeLanguage('en')}
        className={`language-btn ${
          i18n.language === 'en' ? 'bg-white text-black' : 'bg-black/20 text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('de')}
        className={`language-btn ${
          i18n.language === 'de' ? 'bg-white text-black' : 'bg-black/20 text-white transparent'
        }`}
      >
        DE
      </button>
      <button
        onClick={() => changeLanguage('pt')}
        className={`language-btn ${
          i18n.language === 'pt' ? 'bg-white text-black' : 'bg-black/20 text-white transparent'
        }`}
      >
        PT
      </button>
    </div>
  );
}

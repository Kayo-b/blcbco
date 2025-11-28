import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded ${
          i18n.language === 'en' ? 'bg-white text-black' : 'bg-black/20 text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('de')}
        className={`px-2 py-1 rounded ${
          i18n.language === 'de' ? 'bg-white text-black' : 'bg-black/20 text-white'
        }`}
      >
        DE
      </button>
      <button
        onClick={() => changeLanguage('pt')}
        className={`px-2 py-1 rounded ${
          i18n.language === 'pt' ? 'bg-white text-black' : 'bg-black/20 text-white'
        }`}
      >
        PT
      </button>
    </div>
  );
}

import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'pt', label: 'PT' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  const otherLanguages = languages.filter(lang => lang.code !== i18n.language);

  return (
    <div className="absolute top-0 -right-2 group">
      <button className="language-btn bg-white">
        {currentLanguage.label}
      </button>

      <div className="hidden group-hover:flex flex-col gap-1 mt-1">
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
    </div>
  );
}

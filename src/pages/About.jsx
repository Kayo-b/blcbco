import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-300 -full mx-auto mb-4 sm:mb-6"></div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">{t('about.title')}</h1>
      </div>

      {/* Company Story */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{t('about.ourStory')}</h2>
        <p className="text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
          {t('about.paragraph1')}
        </p>
        <p className="text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
          {t('about.paragraph2')}
        </p>
        <p className="text-base text-gray-600 leading-relaxed">
          {t('about.paragraph3')}
        </p>
      </section>

      {/* Values */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{t('about.ourValues')}</h2>
        <ul className="space-y-3 sm:space-y-4 text-gray-600">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 text-xl">•</span>
            <span className="text-base leading-relaxed">{t('about.value1')}</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 text-xl">•</span>
            <span className="text-base leading-relaxed">{t('about.value2')}</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 text-xl">•</span>
            <span className="text-base leading-relaxed">{t('about.value3')}</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 text-xl">•</span>
            <span className="text-base leading-relaxed">{t('about.value4')}</span>
          </li>
        </ul>
      </section>

      {/* Bakery Photo Placeholder */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{t('about.seeMore')}</h2>
        <div className="flex-col bg-gray-200 h-48 sm:h-64 flex items-center justify-center">
          <p className="text-gray-500 text-base sm:text-lg">{t('about.photoPlaceholder')}</p>
          <p>Adicionar um widget com a galeria de fotos do Instagram talvez?</p>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import copo from '../assets/copo.svg'

export default function Catering() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex max-w-4xl mx-auto text-center items-center justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
            {t('catering.title')}
          </h1>
          <img src={copo} className="w-14 h-auto pl-5 pb-5"/>
          {/* <p className="text-xl md:text-2xl text-white">
            {t('catering.subtitle')}
          </p> */}
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white -xl shadow-sm p-8 mb-12 border-4 border-gray-200">
          <h2 className="text-3xl font-bold text-gray-600 mb-6 text-center">
            {t('catering.serviceHeading')}
          </h2>
          <div className="text-gray-700 space-y-4 text-lg">
            <p className="leading-relaxed">
              {t('catering.intro1')}
            </p>
            <p className="leading-relaxed">
              {t('catering.intro2')}
            </p>
            <p className="leading-relaxed">
              {t('catering.intro3')}
            </p>
          </div>
        </div>

        {/* Catering Styles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-600 mb-8 text-center">
            {t('catering.serviceOptions')}
          </h2>
          <div className="space-y-6">
            <div className="bg-white -xl shadow-sm p-8 border-l-8 border-gray-400 hover:border-blue-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {t('catering.service1.title')}
              </h3>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                {t('catering.service1.description')}
              </p>
              <div className="bg-gray-50 -xl p-4 mt-4">
                <p className="text-gray-700 italic">
                  {t('catering.service1.examples')}
                </p>
              </div>
            </div>

            <div className="bg-white -xl shadow-sm p-8 border-l-8 border-gray-400 hover:border-blue-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {t('catering.service2.title')}
              </h3>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                {t('catering.service2.description')}
              </p>
              <div className="bg-gray-50 -xl p-4 mt-4">
                <p className="text-gray-700 italic">
                  {t('catering.service2.examples')}
                </p>
              </div>
            </div>

            <div className="bg-white -xl shadow-sm p-8 border-l-8 border-gray-400 hover:border-blue-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {t('catering.service3.title')}
              </h3>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                {t('catering.service3.description')}
              </p>
              <div className="bg-gray-50 -xl p-4 mt-4">
                <p className="text-gray-700 italic">
                  {t('catering.service3.examples')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What's Served */}
        <div className="bg-gradient-to-br from-blue-50 to-gray-50 -xl shadow-sm p-8 mb-12 border-4 border-blue-200">
          <h2 className="text-3xl font-bold text-gray-600 mb-6 text-center">
            {t('catering.menuOptions')}
          </h2>
          <div className="text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed text-center">
              {t('catering.menuIntro')}
            </p>
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-white -xl p-6 shadow-sm">
                <h4 className="text-2xl font-bold text-gray-500 mb-4">{t('catering.category1')}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {t('catering.category1Items')}
                </p>
              </div>
              <div className="bg-white -xl p-6 shadow-sm">
                <h4 className="text-2xl font-bold text-gray-500 mb-4">{t('catering.category2')}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {t('catering.category2Items')}
                </p>
              </div>
            </div>
            <div className="bg-white -xl p-6 shadow-sm">
              <h4 className="text-2xl font-bold text-gray-500 mb-4 text-center">{t('catering.category3')}</h4>
              <p className="text-gray-600 leading-relaxed text-center">
                {t('catering.category3Items')}
              </p>
            </div>
            <p className="text-lg leading-relaxed text-center mt-6">
              {t('catering.menuOutro')}
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white -2xl shadow-sm p-8 mb-12 border-4 border-gray-200">
          <h2 className="text-3xl font-bold text-gray-600 mb-6 text-center">
            {t('catering.processSteps')}
          </h2>
          <div className="text-gray-700 space-y-6 text-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-gray-400 flex-shrink-0">1</span>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">{t('catering.step1Title')}</h4>
                <p className="leading-relaxed">
                  {t('catering.step1Text')}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-gray-400 flex-shrink-0">2</span>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">{t('catering.step2Title')}</h4>
                <p className="leading-relaxed">
                  {t('catering.step2Text')}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-gray-400 flex-shrink-0">3</span>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">{t('catering.step3Title')}</h4>
                <p className="leading-relaxed">
                  {t('catering.step3Text')}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-gray-400 flex-shrink-0">4</span>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">{t('catering.step4Title')}</h4>
                <p className="leading-relaxed">
                  {t('catering.step4Text')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gray-400 text-white -2xl shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('catering.ctaHeading')}
          </h2>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            {t('catering.contactText')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              to="/about"
              className="bg-white text-gray-500 px-8 py-4 -xl font-bold hover:bg-gray-50 transition text-lg shadow-lg"
            >
              {t('catering.contactUs')}
            </Link>
            <Link
              to="/products"
              className="bg-gray-600 text-white px-8 py-4 -xl font-bold hover:bg-gray-700 transition text-lg shadow-lg"
            >
              {t('catering.viewProducts')}
            </Link>
          </div>
          <p className="text-lg text-white mt-6">
            contact@placeholder.com | (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  );
}

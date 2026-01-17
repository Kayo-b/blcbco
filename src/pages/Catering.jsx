import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import copo from '../assets/copo.svg'
import ContactForm from '../components/ContactForm';

export default function Catering() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-8">
        <div className="flex max-w-4xl mx-auto text-center items-center justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">
            {t('catering.title')}
          </h1>
          {/* <p className="text-xl md:text-2xl text-white">
            {t('catering.subtitle')}
          </p> */}
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* <div className="bg-white -xl -sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-600 mb-6 text-center">
            {t('catering.serviceHeading')}
          </h2>
          <div className="text-gray-700 space-y-4 text-lg">
            <p className="leading-relaxed">
              {t('catering.intro1')}
            </p>
         </div>
        </div> */}

        {/* Catering Styles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-600 mb-8 text-center">
            {t('catering.serviceOptions')}
          </h2>
          <div className="space-y-6">
            <div className="bg-white -xl p-8 transition-colors">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {t('catering.service0.title')}
              </h3>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                {t('catering.service0.description')}
              </p>
            </div>
            <div className="bg-white -xl p-8 transition-colors">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {t('catering.service1.title')}
              </h3>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                {t('catering.service1.description')}
              </p>
            </div>
            <div className="bg-white -xl p-8 transition-colors">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {t('catering.service2.title')}
              </h3>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                {t('catering.service2.description')}
              </p>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                {t('catering.service2.description2')}
              </p>
            </div>
            <div className="bg-white -xl p-8 transition-colors">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {t('catering.service3.title')}
              </h3>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                {t('catering.service3.description')+t('catering.contactEmail')}
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-black p-8 md:p-12 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('catering.ctaHeading')}
          </h2>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            {t('catering.contactText')}
          </p>
        </div>

        {/* Contact Form */}
        <div className="mb-12">
          <ContactForm />
        </div>

        {/* Alternative Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/about"
            className="bg-gray-200 text-gray-500 px-8 py-4 rounded-xl font-bold hover:bg-gray-300 transition text-lg text-center"
          >
            {t('catering.contactUs')}
          </Link>
          <Link
            to="/products"
            className="bg-gray-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-700 transition text-lg text-center"
          >
            {t('catering.viewProducts')}
          </Link>
        </div>
      </div>
    </div>
  );
}

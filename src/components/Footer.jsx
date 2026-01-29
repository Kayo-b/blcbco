import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.contact')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>{t('footer.phone')}: (555) 123-4567</li>
              <li>{t('footer.email')}: contact@placeholder.com</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/balacobacoberlin/">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BalacoBaco. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link to="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <span>|</span>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Datenschutzerklärung
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

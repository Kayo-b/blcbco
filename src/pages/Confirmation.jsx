import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Confirmation() {
  const location = useLocation();
  const { orderNumber, formData, total } = location.state || {};
  const { t } = useTranslation();

  if (!orderNumber) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          No Order Found
        </h1>
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-700"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Success Message */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-500 -full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {t('confirmation.title')}
        </h1>
        <p className="text-gray-600">
          {t('confirmation.message')}
        </p>
      </div>

      {/* Order Details */}
      <div className="bg-gray-100 p-6 mb-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {t('confirmation.orderNumber')}
          </h2>
          <p className="text-2xl text-blue-600">#{orderNumber}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {t('checkout.orderSummary')}
          </h2>
          <p className="text-gray-700">
            {t('checkout.total')}: <span className="font-bold">${total?.toFixed(2)}</span>
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {formData?.deliveryType === 'delivery' ? 'Delivery' : 'Pickup'} Details
          </h2>
          <p className="text-gray-700">Name: {formData?.name}</p>
          <p className="text-gray-700">Email: {formData?.email}</p>
          <p className="text-gray-700">Phone: {formData?.phone}</p>
          {formData?.deliveryType === 'delivery' && (
            <p className="text-gray-700">Address: {formData?.address}</p>
          )}
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Estimated {formData?.deliveryType === 'delivery' ? 'Delivery' : 'Pickup'} Time
          </h2>
          <p className="text-gray-700">
            {formData?.deliveryType === 'delivery' ? '45-60 minutes' : '20-30 minutes'}
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-blue-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Contact Information
        </h2>
        <p className="text-gray-700 mb-2">
          Additional information text placeholder.
        </p>
        <p className="text-gray-700">Phone: (555) 123-4567</p>
        <p className="text-gray-700">Email: contact@placeholder.com</p>
      </div>

      {/* Return Button */}
      <div className="text-center">
        <Link
          to="/"
          className="bg-blue-200 text-white px-8 py-3 hover:bg-blue-700 transition-colors inline-block min-h-[44px]"
        >
          {t('confirmation.backToHome')}
        </Link>
      </div>
    </div>
  );
}

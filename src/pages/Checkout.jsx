import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, getTotal, clearCart } = useCart();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deliveryType: 'pickup',
    address: '',
    specialInstructions: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate order number
    const orderNumber = Math.floor(100000 + Math.random() * 900000);
    
    // Clear cart and navigate to confirmation
    clearCart();
    navigate('/confirmation', { 
      state: { 
        orderNumber, 
        formData,
        total: getTotal()
      } 
    });
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('checkout.title')}</h1>
        <p className="text-gray-600 mb-8">{t('cart.empty')}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">{t('checkout.title')}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Order Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">{t('checkout.name')} *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[44px]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">{t('checkout.email')} *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[44px]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">{t('checkout.phone')} *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[44px]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Delivery/Pickup *
              </label>
              <select
                name="deliveryType"
                value={formData.deliveryType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[44px]"
              >
                <option value="pickup">Pickup</option>
                <option value="delivery">Delivery</option>
              </select>
            </div>

            {formData.deliveryType === 'delivery' && (
              <div>
                <label className="block text-gray-700 mb-2">
                  {t('checkout.deliveryAddress')} *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[44px]"
                />
              </div>
            )}

            <div>
              <label className="block text-gray-700 mb-2">
                Special Instructions
              </label>
              <textarea
                name="specialInstructions"
                value={formData.specialInstructions}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-8 py-3 hover:bg-blue-700 transition-colors min-h-[44px]"
            >
              Pay with Stripe
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-gray-100 p-6 sticky top-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {t('checkout.orderSummary')}
            </h2>

            <div className="space-y-3 mb-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-gray-700"
                >
                  <span>
                    {t(`productNames.${item.nameKey}`)} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-300 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-gray-800">{t('checkout.total')}:</span>
                <span className="text-2xl font-bold text-gray-900">
                  ${getTotal().toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

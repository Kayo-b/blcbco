import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, getTotal } = useCart();
  const { t } = useTranslation();

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart</h1>
        <p className="text-gray-600 mb-8">Your cart is empty</p>
        <Link
          to="/products"
          className="bg-blue-200 text-white px-8 py-3 hover:bg-blue-700 transition-colors inline-block min-h-[44px]"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Your Cart</h1>

      {/* Cart Items */}
      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            {/* Thumbnail */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full sm:w-20 md:w-24 h-32 sm:h-20 md:h-24 object-cover "
            />

            {/* Item Details */}
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                {t(`productNames.${item.nameKey}`)}
              </h3>
              
              {/* Size info */}
              {item.selectedSize && (
                <p className="text-sm text-gray-600">
                  {t('productDetail.sizeLabel')}: {t(`productNames.sizes.${item.selectedSize}`)}
                </p>
              )}
              
              {/* Variant info */}
              {item.selectedVariant && (
                <p className="text-sm text-gray-600">
                  {t('productDetail.variantLabel')}: {t(`productDetail.variants.${item.selectedVariant}`)}
                </p>
              )}
              
              {/* Customization details */}
              {item.customization && (
                <div className="text-sm text-gray-600 mt-2 space-y-1 border-l-2 border-gray-300 pl-3">
                  {item.customization.flavor1 && item.customization.flavor2 && (
                    <p><strong>{t('productDetail.flavorsLabel')}:</strong> {t(`productNames.flavors.${item.customization.flavor1}`)}, {t(`productNames.flavors.${item.customization.flavor2}`)}</p>
                  )}
                  <p><strong>{t('productDetail.baseLabel')}:</strong> {t(`productNames.bases.${item.customization.base}`)}</p>
                  <p><strong>{t('productDetail.frostingLabel')}:</strong> {t(`productNames.frostings.${item.customization.frostingSubcategory || item.customization.frostingCategory}`)}</p>
                  {item.customization.decorationStyle && (
                    <p><strong>{t('productDetail.decorationLabel')}:</strong> {t(`productNames.decorationStyles.${item.customization.decorationStyle}`)}</p>
                  )}
                  <p className={item.customization.flowers === 'withFlowers' ? 'font-bold' : ''}>
                    {t(`productNames.flowers.${item.customization.flowers}`)}
                  </p>
                </div>
              )}
              
              <p className="text-sm sm:text-base text-gray-600 mt-2">€{item.price.toFixed(2)} each</p>
            </div>

            {/* Quantity Controls */}
            {/* <div className="flex items-center justify-center space-x-3 sm:space-x-4">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="bg-gray-200 text-gray-700 w-10 h-10 sm:w-12 sm:h-12  hover:bg-gray-300 min-h-[44px] flex items-center justify-center text-lg font-semibold"
              >
                -
              </button>
              <span className="text-base sm:text-lg font-semibold w-8 sm:w-10 text-center">
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-200 text-gray-700 w-10 h-10 sm:w-12 sm:h-12  hover:bg-gray-300 min-h-[44px] flex items-center justify-center text-lg font-semibold"
              >
                +
              </button>
            </div> */}

            {/* Price & Remove */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-between gap-2">
              <p className="text-lg sm:text-xl font-bold text-gray-900">
                €{(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeFromCart(item.cartId)}
                className="text-red-600 hover:text-red-700 text-sm font-medium min-h-[44px] px-2"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Subtotal & Buttons */}
      <div className="bg-gray-100 p-4 sm:p-6">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <span className="text-lg sm:text-xl font-semibold text-gray-800">Subtotal:</span>
          <span className="text-xl sm:text-2xl font-bold text-gray-900">
            €{getTotal().toFixed(2)}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            to="/products"
            className="bg-gray-200 text-gray-700 px-6 sm:px-8 py-3 hover:bg-gray-300 transition-colors text-center flex-1 min-h-[44px] flex items-center justify-center font-medium"
          >
            Continue Shopping
          </Link>
          <Link
            to="/checkout"
            className="bg-blue-200 text-white px-6 sm:px-8 py-3 hover:bg-blue-700 transition-colors text-center flex-1 min-h-[44px] flex items-center justify-center font-medium"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

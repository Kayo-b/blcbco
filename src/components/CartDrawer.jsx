import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import closeIcon from '../assets/cross-circle2.svg'

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, updateQuantity, removeFromCart, getTotal } = useCart();
  const { t } = useTranslation();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`
        fixed right-0 top-0 h-full w-full sm:w-106 bg-gray-400 shadow-2xl z-50
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        flex flex-col
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-white" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.9994 1C14.0664 1 11.6944 5.60349 11.6944 11.2858H22.3129C22.3129 5.60349 19.9325 1 17.0079 1H16.9994Z" stroke="currentColor" vectorEffect="non-scaling-stroke"/>
              <path d="M33 11.286H1V29H33V11.286Z" stroke="currentColor" vectorEffect="non-scaling-stroke"/>
            </svg>
            <span className="text-white font-medium">{t('cart.title')} ({cart.length})</span>
          </div>
          <button 
            onClick={onClose}
            className="cart-drewer-close-btn"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center text-white py-8">
              <p className="mb-4">{t('cart.empty')}</p>
              <button
                onClick={onClose}
                className="bg-white text-gray-500 px-6 py-2  hover:bg-gray-100"
              >
                {t('cart.continueShopping')}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 shadow"
                >
                  <div className="flex gap-4">
                    {/* Thumbnail */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover "
                    />

                    {/* Item Details */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-sm mb-1">
                        {t(`productNames.${item.nameKey}`)}
                      </h3>
                      
                      {/* Size info */}
                      {item.selectedSize && (
                        <p className="text-xs text-gray-600">
                          {t(`productNames.sizes.${item.selectedSize}`)}
                        </p>
                      )}
                      
                      {/* Variant info */}
                      {item.selectedVariant && (
                        <p className="text-xs text-gray-600">
                          {t(`productDetail.variants.${item.selectedVariant}`)}
                        </p>
                      )}
                      
                      {/* Customization details */}
                      {item.customization && (
                        <div className="text-xs text-gray-600 mt-1 space-y-0.5">
                          {item.customization.flavor1 && item.customization.flavor2 && (
                            <p>{t('productDetail.flavorsLabel')}: {t(`productNames.flavors.${item.customization.flavor1}`)}, {t(`productNames.flavors.${item.customization.flavor2}`)}</p>
                          )}
                          <p>{t('productDetail.baseLabel')}: {t(`productNames.bases.${item.customization.base}`)}</p>
                          <p>{t('productDetail.frostingLabel')}: {t(`productNames.frostings.${item.customization.frostingSubcategory || item.customization.frostingCategory}`)}</p>
                          {item.customization.decorationStyle && (
                            <p>{t('productDetail.decorationLabel')}: {t(`productNames.decorationStyles.${item.customization.decorationStyle}`)}</p>
                          )}
                          <p className={item.customization.flowers === 'withFlowers' ? 'font-bold' : ''}>
                            {t(`productNames.flowers.${item.customization.flowers}`)}
                          </p>
                        </div>
                      )}
                      
                      <p className="text-gray-600 text-sm mt-1">
                        €{item.price.toFixed(2)}
                      </p>

                      {/* Quantity Controls */}
                      
                    </div>

                    {/* Price */}
                    <div className="text-right flex flex-col justify-between">
                      <p className="font-bold text-gray-900">
                        €{(item.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="ml-auto text-red-600 hover:text-red-700 text-xs p-1"
                        >
                          {t('cart.remove')}
                          {/* {<img src={closeIcon} className="h-6 brightness-0 hover:brightness-100 transition-all"/>} */}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Total and Checkout */}
        {cart.length > 0 && (
          <div className="border-t border-gray-600 p-6 bg-gray-600">
            <div className="flex items-center justify-between mb-4 text-white">
              <span className="text-lg font-semibold">SUBTOTAL:</span>
              <span className="text-2xl font-bold">€{getTotal().toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              onClick={onClose}
              className="block w-full bg-white text-gray-500 text-center py-8  font-semibold hover:bg-gray-100 transition"
            >
              {t('cart.proceedToCheckout').toUpperCase()}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

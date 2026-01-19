import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ProductCard({ product, onAddToCart }) {
  const { t } = useTranslation();
  
  // Use basePrice for products with sizes, or price for simple products
  const displayPrice = product.basePrice || product.price;
  const priceLabel = product.sizes ? t('products.startingAt') : '';
  
  return (
    <div className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 sm:h-56 md:h-64 lg:h-72 object-cover"
        />
      </Link>
      <div className="p-4 sm:p-3 md:p-4 flex flex-col flex-grow">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-base sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-2 sm:mb-1 md:mb-2 hover:text-gray-600 line-clamp-2">
            {t(`productNames.${product.nameKey}`)}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm sm:text-xs md:text-sm mb-3 sm:mb-2 md:mb-3 line-clamp-2 flex-grow">
          {t(`productDescriptions.${product.descriptionKey}`)}
        </p>
        <div className="flex flex-col gap-2 mt-auto">
          <div>
            {priceLabel && <span className="text-xs text-gray-500 block">{priceLabel}</span>}
            <span className="text-xl sm:text-lg md:text-xl font-bold text-gray-900">
              €{displayPrice.toFixed(2)}
            </span>
          </div>
          <Link
            to={`/product/${product.id}`}
            className=" btn-base bg-blue-200 text-white hover:bg-blue-300 transition-colors min-h-[44px] text-center"
          >
            {product.customizable ? t('products.customize') : t('products.viewDetails')}
          </Link>
        </div>
      </div>
    </div>
  );
}

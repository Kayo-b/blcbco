import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { products, birthdayCakeOptions } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  
  // Birthday cake customization states
  const [selectedBase, setSelectedBase] = useState(null);
  const [selectedFrostingCategory, setSelectedFrostingCategory] = useState(null);
  const [selectedFrostingSubcategory, setSelectedFrostingSubcategory] = useState(null);
  const [selectedDecorationStyle, setSelectedDecorationStyle] = useState(null);
  const [selectedFlowers, setSelectedFlowers] = useState('none');

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Product Not Found
        </h1>
        <Link
          to="/products"
          className="text-blue-600 hover:text-blue-700"
        >
          {t('productDetail.backToProducts')}
        </Link>
      </div>
    );
  }

  // Set default size when component loads
  if (product.sizes && !selectedSize) {
    setSelectedSize(product.sizes[0].id);
  }

  const getCurrentPrice = () => {
    let price = 0;
    
    if (product.sizes && selectedSize) {
      const size = product.sizes.find(s => s.id === selectedSize);
      price = size ? size.price : (product.basePrice || product.price);
    } else {
      price = product.price || product.basePrice;
    }

    if (product.customizable && selectedFlowers === 'withFlowers') {
      const flowerOption = birthdayCakeOptions.flowers.find(f => f.id === 'withFlowers');
      price += flowerOption.price;
    }
    if (product.customizable && selectedFrostingSubcategory === 'buttercream_mascarpone') {
      const mascarpone = birthdayCakeOptions.frostings.subcategories.buttercream.find(f => f.id === 'buttercream_mascarpone');
      price += mascarpone.price;
    }

    return price;
  };

  const canAddToCart = () => {
    if (product.customizable) {
      const frostingComplete = selectedFrostingCategory === 'naked' || 
        (selectedFrostingCategory && selectedFrostingSubcategory);
      const decorationComplete = selectedFrostingCategory === 'naked' || selectedDecorationStyle;
      
      return selectedBase && frostingComplete && decorationComplete && selectedFlowers;
    }
    if (product.sizes && !product.customizable) {
      return selectedSize !== null;
    }
    return true;
  };

  const handleAddToCart = () => {
    if (!canAddToCart()) return;

    const cartItem = {
      ...product,
      selectedSize,
      selectedVariant,
      price: getCurrentPrice(),
      customization: product.customizable ? {
        base: selectedBase,
        frostingCategory: selectedFrostingCategory,
        frostingSubcategory: selectedFrostingSubcategory,
        decorationStyle: selectedDecorationStyle,
        flowers: selectedFlowers
      } : null
    };
    addToCart(cartItem, quantity);
    navigate('/cart');
  };

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full shadow-lg object-cover max-h-[400px] md:max-h-none"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
            {t(`productNames.${product.nameKey}`)}
          </h1>
          
          <p className="text-gray-600 mb-4 sm:mb-6 text-base leading-relaxed">
            {t(`productDescriptions.${product.fullDescriptionKey}`)}
          </p>

          {/* Size Selection */}
          {product.sizes && (
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">
                {t('productDetail.selectSize')}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`p-3 border-2 rounded ${
                      selectedSize === size.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="font-semibold">{t(`productNames.${size.nameKey}`)}</div>
                    <div className="text-sm text-gray-600">{t('productDetail.serves')} {size.serves}</div>
                    <div className="text-lg font-bold text-gray-900 mt-1">€{size.price.toFixed(2)}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Variant Selection for Empadão */}
          {product.variants && (
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">
                {t('productDetail.selectVariant')}
              </label>
              <select
                value={selectedVariant || ''}
                onChange={(e) => setSelectedVariant(e.target.value)}
                className="w-full p-2 border-2 border-gray-300 rounded"
              >
                <option value="">{t('productDetail.chooseVariant')}</option>
                {product.variants.map((variant) => (
                  <option key={variant} value={variant}>
                    {t(`productDetail.variants.${variant}`)}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Birthday Cake Customization */}
          {product.customizable && (
            <div className="space-y-6 mb-6">
              {/* Base Selection */}
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  {t('productDetail.selectBase')}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {birthdayCakeOptions.bases.map((base) => (
                    <button
                      key={base.id}
                      onClick={() => setSelectedBase(base.id)}
                      className={`p-3 border-2 rounded ${
                        selectedBase === base.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {t(`productNames.${base.nameKey}`)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Frosting Selection */}
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  {t('productDetail.selectFrosting')}
                </label>
                
                {/* Main Frosting Categories */}
                <div className="grid grid-cols-1 gap-2 mb-4">
                  {birthdayCakeOptions.frostings.mainCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedFrostingCategory(category.id);
                        setSelectedFrostingSubcategory(null);
                        if (category.id === 'naked') {
                          setSelectedDecorationStyle(null);
                        }
                      }}
                      className={`p-3 border-2 rounded text-left ${
                        selectedFrostingCategory === category.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {t(`productNames.${category.nameKey}`)}
                    </button>
                  ))}
                </div>

                {/* Subcategory Selection */}
                {selectedFrostingCategory && selectedFrostingCategory !== 'naked' && (
                  <div className="pl-4 border-l-2 border-gray-200">
                    <label className="block text-gray-600 mb-2 text-sm font-medium">
                      {t('productDetail.selectSpecificType')}
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {birthdayCakeOptions.frostings.subcategories[selectedFrostingCategory]?.map((subcategory) => (
                        <button
                          key={subcategory.id}
                          onClick={() => setSelectedFrostingSubcategory(subcategory.id)}
                          className={`p-2 border-2 rounded text-left text-sm ${
                            selectedFrostingSubcategory === subcategory.id
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          {t(`productNames.${subcategory.nameKey}`)}
                          {subcategory.buttercream.price > 0 && (
                            <span className="ml-2 text-sm text-gray-600">
                              (+€{subcategory.price.toFixed(2)})
                            </span>
                        )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Decoration Style Selection */}
              <div className={selectedFrostingCategory === 'naked' ? 'opacity-50 pointer-events-none' : ''}>
                <label className="block text-gray-700 mb-2 font-medium">
                  {t('productDetail.selectDecorationStyle')}
                  {selectedFrostingCategory === 'naked' && (
                    <span className="text-sm text-gray-500 ml-2">
                      ({t('productDetail.notAvailableForNaked')})
                    </span>
                  )}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {birthdayCakeOptions.decorationStyles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => selectedFrostingCategory !== 'naked' && setSelectedDecorationStyle(style.id)}
                      disabled={selectedFrostingCategory === 'naked'}
                      className={`p-3 border-2 rounded ${
                        selectedDecorationStyle === style.id && selectedFrostingCategory !== 'naked'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300 hover:border-gray-400'
                      } ${selectedFrostingCategory === 'naked' ? 'cursor-not-allowed' : ''}`}
                    >
                      {t(`productNames.${style.nameKey}`)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Decoration Selection */}
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  {t('productDetail.addFlowers')}
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {birthdayCakeOptions.flowers.map((flower) => (
                    <button
                      key={flower.id}
                      onClick={() => setSelectedFlowers(flower.id)}
                      className={`p-3 border-2 rounded text-left ${
                        selectedFlowers === flower.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <span>{t(`productNames.${flower.nameKey}`)}</span>
                      {flower.price > 0 && (
                        <span className="ml-2 text-sm text-gray-600">
                          (+€{flower.price.toFixed(2)})
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Order Requirement Note */}
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <p className="text-sm text-blue-800">
                  <strong>{t('productDetail.orderRequirement')}:</strong> {t('productDetail.oneWeekAdvance')}
                </p>
              </div>
            </div>
          )}

          {/* Fixed Menu Note */}
          {product.category === 'fixedMenu' && (
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
              <p className="text-sm text-yellow-800">
                <strong>{t('productDetail.notice')}:</strong> {t('productDetail.familySizeNotice')}
              </p>
            </div>
          )}

          <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            €{getCurrentPrice().toFixed(2)}
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">{t('cart.quantity')}</label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-gray-200 text-gray-700 w-12 h-12 hover:bg-gray-300 min-h-[44px] text-xl font-semibold"
              >
                -
              </button>
              <span className="text-xl font-semibold w-16 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-gray-200 text-gray-700 w-12 h-12 hover:bg-gray-300 min-h-[44px] text-xl font-semibold"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
            <button
              onClick={handleAddToCart}
              disabled={!canAddToCart()}
              className={`px-6 sm:px-8 py-3 transition-colors flex-1 min-h-[44px] font-medium ${
                canAddToCart()
                  ? 'bg-blue-200 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {t('products.addToCart')}
            </button>
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-200 text-gray-700 px-6 sm:px-8 py-3 hover:bg-gray-300 transition-colors flex-1 min-h-[44px] font-medium"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

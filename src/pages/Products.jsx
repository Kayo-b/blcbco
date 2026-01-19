import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import maozinha from '../assets/maozinha.svg';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();
  const { t } = useTranslation();

  const categories = ['all', 'fixedMenu', 'birthdayCakes'];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-8">
      {/* Page Title */}
      {/* <div className="flex justify-start items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
          {t('products.title')}
        </h1>
      </div> */}
      {/* Category Filters */}
      <div className="flex flex-wrap justify-start gap-2 sm:gap-4 mb-6 sm:mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`product-filter bg-blue-200 text-white ${
              selectedCategory === category
                ? 'bg-blue-00 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {t(`products.${category === 'all' ? 'allProducts' : category}`)}
          </button>
        ))}
      </div>

      {/* Product Grid - Responsive: 1 col phone, 2 cols tablet, 3 cols large */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No products found in this category.
        </p>
      )}
    </div>
  );
}

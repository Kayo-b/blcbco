import { Link } from 'react-router-dom';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 sm:h-40 md:h-44 lg:h-48 object-cover"
        />
      </Link>
      <div className="p-4 sm:p-3 md:p-4 flex flex-col flex-grow">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-base sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-2 sm:mb-1 md:mb-2 hover:text-gray-600 line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm sm:text-xs md:text-sm mb-3 sm:mb-2 md:mb-3 line-clamp-2 flex-grow">
          {product.description}
        </p>
        <div className="flex flex-col gap-2 mt-auto">
          <span className="text-xl sm:text-lg md:text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-600 text-white px-4 py-2.5 text-sm md:text-base rounded hover:bg-blue-700 transition-colors min-h-[44px] w-full font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

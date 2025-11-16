import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Product Not Found
        </h1>
        <Link
          to="/products"
          className="text-blue-600 hover:text-blue-700"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg object-cover max-h-[400px] md:max-h-none"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
            {product.name}
          </h1>
          
          <p className="text-gray-600 mb-4 sm:mb-6 text-base leading-relaxed">{product.fullDescription}</p>

          <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            ${product.price.toFixed(2)}
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Quantity</label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-gray-200 text-gray-700 w-12 h-12 rounded hover:bg-gray-300 min-h-[44px] text-xl font-semibold"
              >
                -
              </button>
              <span className="text-xl font-semibold w-16 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-gray-200 text-gray-700 w-12 h-12 rounded hover:bg-gray-300 min-h-[44px] text-xl font-semibold"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex-1 min-h-[44px] font-medium"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-200 text-gray-700 px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors flex-1 min-h-[44px] font-medium"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

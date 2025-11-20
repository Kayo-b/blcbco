import { Link } from 'react-router-dom';

export default function Catering() {
  const cateringStyles = [
    {
      title: "Service Option 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      examples: "Food placeholder, food placeholder, food placeholder, food placeholder"
    },
    {
      title: "Service Option 2",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      examples: "Food placeholder, food placeholder, food placeholder, food placeholder, food placeholder, food placeholder"
    },
    {
      title: "Service Option 3",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      examples: "Food placeholder, food placeholder, food placeholder, food placeholder, food placeholder, food placeholder, food placeholder"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-300 to-green-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Catering Services
          </h1>
          <p className="text-xl md:text-2xl text-white">
            Page subtitle text placeholder
          </p>
          <p className="text-lg mt-3 text-orange-100">
            Additional description text
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12 border-4 border-orange-200">
          <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
            Section Heading
          </h2>
          <div className="text-gray-700 space-y-4 text-lg">
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
            </p>
          </div>
        </div>

        {/* Catering Styles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
            Service Options
          </h2>
          <div className="space-y-6">
            {cateringStyles.map((style, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm p-8 border-l-8 border-orange-400 hover:border-yellow-400 transition-colors"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {style.title}
                </h3>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  {style.description}
                </p>
                
                <div className="bg-orange-50 rounded-xl p-4 mt-4">
                  <p className="text-gray-700 italic">
                    Think: {style.examples}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's Served */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-sm p-8 mb-12 border-4 border-yellow-200">
          <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
            Menu Options
          </h2>
          <div className="text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-2xl font-bold text-orange-500 mb-4">Category 1</h4>
                <p className="text-gray-600 leading-relaxed">
                  Food placeholder, Food placeholder, Food placeholder, Food placeholder, 
                  Food placeholder, Food placeholder, Food placeholder
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-2xl font-bold text-orange-500 mb-4">Category 2</h4>
                <p className="text-gray-600 leading-relaxed">
                  Food placeholder, Food placeholder, Food placeholder, Food placeholder, 
                  Food placeholder, Food placeholder, Food placeholder
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-2xl font-bold text-orange-500 mb-4 text-center">Category 3</h4>
              <p className="text-gray-600 leading-relaxed text-center">
                Food placeholder, Food placeholder, Food placeholder, Food placeholder, 
                Food placeholder, Food placeholder
              </p>
            </div>
            <p className="text-lg leading-relaxed text-center mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12 border-4 border-orange-200">
          <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
            Process Steps
          </h2>
          <div className="text-gray-700 space-y-6 text-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-orange-400 flex-shrink-0">1</span>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Step One</h4>
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-orange-400 flex-shrink-0">2</span>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Step Two</h4>
                <p className="leading-relaxed">
                  Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-orange-400 flex-shrink-0">3</span>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Step Three</h4>
                <p className="leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-orange-400 flex-shrink-0">4</span>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Step Four</h4>
                <p className="leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-orange-400 to-yellow-400 text-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Call to Action Heading
          </h2>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              to="/about"
              className="bg-white text-orange-500 px-8 py-4 rounded-xl font-bold hover:bg-orange-50 transition text-lg shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/products"
              className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition text-lg shadow-lg"
            >
              View Products
            </Link>
          </div>
          <p className="text-lg text-white mt-6">
            contact@placeholder.com | (555) 123-4567
          </p>
          <p className="text-sm text-orange-100 mt-3">
            Additional contact information text.
          </p>
        </div>
      </div>
    </div>
  );
}

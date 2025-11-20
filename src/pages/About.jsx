export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-300 rounded-full mx-auto mb-4 sm:mb-6"></div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      </div>

      {/* Company Story */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Our Story</h2>
        <p className="text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      {/* Values */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Our Values</h2>
        <ul className="space-y-3 sm:space-y-4 text-gray-600">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 text-xl">•</span>
            <span className="text-base leading-relaxed"><strong>Quality:</strong> Lorem ipsum dolor sit amet</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 text-xl">•</span>
            <span className="text-base leading-relaxed"><strong>Community:</strong> Consectetur adipiscing elit</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 text-xl">•</span>
            <span className="text-base leading-relaxed"><strong>Sustainability:</strong> Sed do eiusmod tempor incididunt</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 text-xl">•</span>
            <span className="text-base leading-relaxed"><strong>Passion:</strong> Ut labore et dolore magna aliqua</span>
          </li>
        </ul>
      </section>

      {/* Bakery Photo Placeholder */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Visit Us</h2>
        <div className="bg-gray-200 h-48 sm:h-64 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 text-base sm:text-lg">Bakery Photo</p>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function Catering() {
  const cateringStyles = [
    {
      title: "Full Meal Experience",
      description: "Perfect for family dinners, weekend lunches, or when you want to bring everyone together around the table. We bring the complete Brazilian feast to your home.",
      examples: "Feijoada completa, moqueca with rice and pirão, churrasco spread, arroz de carreteiro"
    },
    {
      title: "Party Portions & Finger Foods",
      description: "The stars of every Brazilian birthday party! Those beloved salgadinhos that disappear in minutes. Perfect for celebrations where people mingle and snack.",
      examples: "Coxinhas, risólis, bolinhas de queijo, pastéis, kibe, empadinhas"
    },
    {
      title: "Sweet Treats Table",
      description: "No Brazilian party is complete without the sweets table! We bring all those nostalgic docinhos that make celebrations special.",
      examples: "Brigadeiros, beijinhos, cajuzinhos, olho de sogra, cocada, quindim, pudim"
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-400 to-yellow-400 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Brazilian Catering 🇧🇷
          </h1>
          <p className="text-xl md:text-2xl text-white">
            Bringing Brazilian flavors to your family & friends gatherings
          </p>
          <p className="text-lg mt-3 text-orange-100">
            Perfect for groups up to 10 people
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12 border-4 border-orange-200">
          <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
            Let's Celebrate Together! 🎉
          </h2>
          <div className="text-gray-700 space-y-4 text-lg">
            <p className="leading-relaxed">
              Remember those amazing Brazilian parties? The ones where the table is full of delicious salgadinhos, 
              where everyone gathers around for a proper meal, and there's always room for more brigadeiros? 
              That's exactly what we bring to your home!
            </p>
            <p className="leading-relaxed">
              Whether you're planning a birthday party, a family gathering, a weekend lunch with friends, 
              or just want to treat your loved ones to authentic Brazilian food, we've got you covered. 
              We keep it simple, delicious, and true to the Brazilian spirit of sharing good food with good people.
            </p>
            <p className="leading-relaxed">
              Everything is made fresh, with love, using traditional recipes. No fancy presentations needed – 
              just honest, tasty Brazilian food that brings people together.
            </p>
          </div>
        </div>

        {/* Catering Styles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
            What We Can Bring to Your Party
          </h2>
          <div className="space-y-6">
            {cateringStyles.map((style, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-sm p-8 border-l-8 border-orange-400 hover:border-yellow-400 transition-colors"
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
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-sm p-8 mb-12 border-4 border-yellow-200">
          <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
            The Favorites 💛
          </h2>
          <div className="text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed text-center">
              These are the classics that everyone asks for. Your guests will recognize them, 
              love them, and definitely ask for seconds!
            </p>
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-2xl font-bold text-orange-500 mb-4">Salgadinhos 🥟</h4>
                <p className="text-gray-600 leading-relaxed">
                  Coxinha de frango, Risólis de queijo, Bolinhas de queijo, Pastéis, 
                  Kibe, Empadinhas, Pão de queijo
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-2xl font-bold text-orange-500 mb-4">Docinhos 🍬</h4>
                <p className="text-gray-600 leading-relaxed">
                  Brigadeiros, Beijinhos, Cajuzinhos, Olho de sogra, 
                  Cocada, Quindim, Pudim de leite
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-2xl font-bold text-orange-500 mb-4 text-center">Full Meals 🍛</h4>
              <p className="text-gray-600 leading-relaxed text-center">
                Feijoada completa with all the fixings, Moqueca de peixe with rice and pirão, 
                Churrasco spread, Arroz de carreteiro, Strogonoff brasileiro, 
                Picanha with farofa and vinagrete
              </p>
            </div>
            <p className="text-lg leading-relaxed text-center mt-6">
              We can mix and match based on what you're craving! Just let us know what kind 
              of vibe you're going for, and we'll help you put together the perfect menu.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12 border-4 border-orange-200">
          <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
            How It Works
          </h2>
          <div className="text-gray-700 space-y-6 text-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-orange-400 flex-shrink-0">1</span>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Tell us about your party</h4>
                <p className="leading-relaxed">
                  How many people? What's the occasion? Are you thinking full meal or snacks? 
                  Any favorites you definitely want included?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-orange-400 flex-shrink-0">2</span>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">We plan the menu together</h4>
                <p className="leading-relaxed">
                  Based on what you tell us, we'll suggest a menu that fits perfectly. 
                  We can adjust anything to match your preferences and dietary needs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-orange-400 flex-shrink-0">3</span>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">We make everything fresh</h4>
                <p className="leading-relaxed">
                  On the day of your event, we prepare everything fresh using traditional recipes 
                  and quality ingredients. Nothing frozen, nothing pre-made.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-orange-400 flex-shrink-0">4</span>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Enjoy your party!</h4>
                <p className="leading-relaxed">
                  We deliver everything ready to enjoy. You get to relax and spend time 
                  with your guests while we take care of the food.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-orange-400 to-yellow-400 text-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Make Your Party Special! 🎊
          </h2>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Every party is different, and we love hearing about what you're planning. 
            Get in touch and let's chat about bringing some Brazilian flavor to your gathering!
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
              Check Out Our Shop
            </Link>
          </div>
          <p className="text-lg text-white mt-6">
            📧 info@balacobaco.com | 📱 (555) 123-4567
          </p>
          <p className="text-sm text-orange-100 mt-3">
            We usually respond within a few hours. Can't wait to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import Catering from './pages/Catering';
import NavOverlay from './components/NavOverlay';

function AppContent() {
  const { getItemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  console.log(isContactOpen)
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation 
        cartItemCount={getItemCount()} 
        onCartClick={() => setIsCartOpen(true)}
        onContactClick={() => setIsContactOpen(true)}
        onContactClose={() => setIsContactOpen(false)}
      />
      <main className="flex-grow bg-white">
      {/* <Menu/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <NavOverlay isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <Router basename="/blcbco">
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}

export default App;

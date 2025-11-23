// import { Link } from 'react-router-dom';
// import { useCart } from '../context/CartContext';

export default function NavOverlay({ isOpen, onClose }) {
  // const { cart } = useCart();

  return (
    <>
      {/* Overlay */}
      {/* {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 transition-opacity"
          onClick={onClose}
        />
      )} */}

      {/* Drawer */}
      <div className={`
        fixed top-15 left-0 w-full h-[400px] bg-orange-100 shadow-2xl z-50
        transition-opacity duration-300 ease-in-out
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        flex flex-col
      `}>
        {/* Header */}
        <div 
        onMouseOut={onClose}
        className="flex items-center justify-between p-6 border-b border-orange-600">
          <p>Phone: (555) 123-4567</p>
          <p>Email: contact@placeholder.com</p>
          <p>Address: 123 Main St, City, ST 12345</p>
        </div>
      </div>
    </>
  );
}

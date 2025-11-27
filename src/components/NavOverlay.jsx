// import { Link } from 'react-router-dom';
// import { useCart } from '../context/CartContext';

export default function NavOverlay({ isOpen, onClose }) {
  // const { cart } = useCart();

  return (
    <>
      {/* {isOpen && (
        <div 
          className="fixed inset-0 pointer-events-none"
          onClick={onClose}
        />
      )} */}

      {/* Drawer */}
      <div
      onMouseLeave={onClose}
      // onClick={(e) => e.stopPropagation()}
      id="NavOverlay"
      className={`
        fixed top-15 left-0 w-full h-[400px] bg-orange-100 shadow-2xl z-50
        transition-opacity duration-300 ease-in-out
        ${isOpen ? 'opacity-92' : 'opacity-0 pointer-events-none'}
        flex flex-col
      `}>
        {/* Header */}
        <div 
        className="flex items-center justify-between p-6 border-b border-orange-600">
          <p>Phone: (555) 123-4567</p>
          <p>Email: contact@placeholder.com</p>
          <p>Address: 123 Main St, City, ST 12345</p>
        </div>
      </div>
    </>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="top-0 z-50 sticky bg-white/95 shadow-lg backdrop-blur-md border-gray-100 border-b">
      <div className="mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="group flex items-center">
            <div className="relative">
              <span className="font-[notable] font-bold text-gray-800 group-hover:text-blue-600 text-2xl tracking-tight transition-colors duration-300">
                ARITHA
              </span>
              <div className="-bottom-1 left-0 absolute bg-gradient-to-r from-blue-500 to-purple-500 w-0 group-hover:w-full h-0.5 transition-all duration-300"></div>
            </div>
          </Link>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="group relative hover:bg-gray-100 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <div className="flex flex-col justify-center items-center w-6 h-6">
                <div className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : 'mb-1'}`}></div>
                <div className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? 'opacity-0' : 'mb-1'}`}></div>
                <div className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
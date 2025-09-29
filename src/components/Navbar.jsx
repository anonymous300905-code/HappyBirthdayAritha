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

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/confessions", label: "Confessions" },
              { to: "/footer", label: "Footer" }
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group relative hover:bg-gray-50 px-4 py-2 rounded-lg font-medium text-gray-600 hover:text-gray-900 transition-all duration-300"
              >
                {item.label}
                <div className="bottom-0 left-1/2 absolute bg-gradient-to-r from-blue-500 to-purple-500 w-0 group-hover:w-3/4 h-0.5 transition-all -translate-x-1/2 duration-300 transform"></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="space-y-1 px-2 sm:px-3 pt-2 pb-4">
            {[
              { to: "/", label: "Home", icon: "🏠" },
              { to: "/about", label: "About", icon: "👋" },
              { to: "/confessions", label: "Confessions", icon: "💭" },
              { to: "/footer", label: "Footer", icon: "📋" }
            ].map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                className="group flex items-center space-x-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 px-3 py-3 rounded-lg font-medium text-gray-700 hover:text-gray-900 text-base transition-all hover:translate-x-1 duration-300 transform"
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span>{item.label}</span>
                <div className="opacity-0 group-hover:opacity-100 ml-auto transition-opacity duration-300">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
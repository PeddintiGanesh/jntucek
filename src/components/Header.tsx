
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'COURSES', href: '/departments' },
    { name: 'FACULTY', href: '/faculty' },
    { name: 'CONTACT', href: '/contact' }
  ];

  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with logo and university name */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4">
            <img 
              src="https://www.jntucek.ac.in/assets/assets_faculty_new/css/JNTUKlogo.png" 
              alt="JNTUK Logo" 
              className="h-16 w-16"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://www.jntucek.ac.in/assets/assets_faculty_new/css/JNTUKlogo.png";
              }}
            />
            <div>
              <h1 className="text-2xl font-bold">JNTUK KAKINADA</h1>
              <p className="text-sm text-gray-300">Jawaharlal Nehru Technological University, Kakinada</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-red-400 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-700"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-white hover:text-red-400 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out-expo ${
        isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-2xl font-medium tracking-tighter"
            >
              ARTIFICE
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover-link text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/products" className="hover-link text-sm font-medium transition-colors">
              Products
            </Link>
            <Link to="/collections" className="hover-link text-sm font-medium transition-colors">
              Collections
            </Link>
            <Link to="/about" className="hover-link text-sm font-medium transition-colors">
              About
            </Link>
          </nav>
          
          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 rounded-full transition-colors hover:bg-secondary"
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <Link 
              to="/cart" 
              className="p-2 rounded-full transition-colors hover:bg-secondary relative"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} strokeWidth={1.5} />
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-accent text-white text-xs flex items-center justify-center transform translate-x-1 -translate-y-1">
                2
              </span>
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="p-2 rounded-full md:hidden transition-colors hover:bg-secondary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMobileMenuOpen ? (
                <X size={20} strokeWidth={1.5} />
              ) : (
                <Menu size={20} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-50 bg-white dark:bg-black transform transition-transform duration-400 ease-out-expo ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <Link 
              to="/" 
              className="text-2xl font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ARTIFICE
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full transition-colors hover:bg-secondary"
              aria-label="Close Menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 text-lg">
            <Link 
              to="/" 
              className="hover-link py-2 w-fit"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="hover-link py-2 w-fit"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/collections" 
              className="hover-link py-2 w-fit"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link 
              to="/about" 
              className="hover-link py-2 w-fit"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

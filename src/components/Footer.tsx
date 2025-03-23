
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ARTIFICE</h3>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Creating premium products that combine beautiful design with exceptional functionality.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-500 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-accent transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover-link inline-block">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover-link inline-block">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover-link inline-block">
                  Featured Products
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover-link inline-block">
                  Special Offers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover-link inline-block">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover-link inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover-link inline-block">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover-link inline-block">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover-link inline-block">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover-link inline-block">
                  Terms & Privacy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Innovation Drive<br />
                  Tech City, CA 92123
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-muted-foreground" />
                <a href="tel:+18001234567" className="text-muted-foreground hover-link inline-block">
                  +1 (800) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-muted-foreground" />
                <a href="mailto:info@artifice.com" className="text-muted-foreground hover-link inline-block">
                  info@artifice.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Artifice. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover-link inline-block">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover-link inline-block">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover-link inline-block">
              Shipping & Returns
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

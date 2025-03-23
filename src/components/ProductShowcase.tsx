
import React, { useState } from 'react';
import ProductCard from './ProductCard';

// Sample product data
const products = [
  {
    id: '1',
    name: 'Wireless Precision Earbuds',
    price: 199.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1606741965515-7f87c04b9394?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Audio'
  },
  {
    id: '2',
    name: 'Ultra-Thin Smart Watch',
    price: 299.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Wearable'
  },
  {
    id: '3',
    name: 'Professional Studio Headphones',
    price: 349.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Audio'
  },
  {
    id: '4',
    name: 'Premium Wireless Keyboard',
    price: 129.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Accessories'
  },
  {
    id: '5',
    name: 'Ultra-Wide Curved Monitor',
    price: 799.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1616249807402-9dae436108cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Display'
  },
  {
    id: '6',
    name: 'Compact Bluetooth Speaker',
    price: 89.99,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Audio'
  },
  {
    id: '7',
    name: 'Smart Home Assistant',
    price: 149.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Smart Home'
  },
  {
    id: '8',
    name: 'Premium Wireless Mouse',
    price: 79.99,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Accessories'
  }
];

// Categories
const categories = ['All', 'Audio', 'Wearable', 'Accessories', 'Display', 'Smart Home'];

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
  return (
    <section id="product-showcase" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm text-accent font-medium uppercase tracking-wider">
            Featured Collection
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Discover Premium Quality</h2>
          <p className="mt-4 text-muted-foreground">
            Explore our collection of meticulously crafted products designed to elevate your everyday experiences.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2 -mx-4 px-4 md:px-0">
          <div className="flex space-x-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-white/60 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="animate-fade-in"
              style={{ 
                animationDelay: `${parseInt(product.id) * 0.1}s`,
                animationFillMode: 'both' 
              }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        
        {/* Show More Button */}
        <div className="mt-16 text-center">
          <button className="py-3 px-8 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md border border-border transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

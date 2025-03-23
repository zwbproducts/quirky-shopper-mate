
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  rating,
  image,
  category
}) => {
  return (
    <div className="product-card group relative overflow-hidden rounded-lg">
      {/* Card Content */}
      <div className="bg-white dark:bg-gray-900 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-square bg-secondary/50">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-700 ease-out-expo group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Quick actions */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              className="p-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm hover:bg-white dark:hover:bg-gray-900 transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart size={18} className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs rounded-full bg-black/60 text-white backdrop-blur-sm">
              {category}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 p-4 flex flex-col">
          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-1 text-xs text-muted-foreground">({rating.toFixed(1)})</span>
          </div>
          
          {/* Title */}
          <h3 className="font-medium text-base mb-1 line-clamp-2 group-hover:text-accent transition-colors">
            {name}
          </h3>
          
          {/* Price */}
          <div className="mt-auto pt-4">
            <span className="text-lg font-semibold">${price.toFixed(2)}</span>
          </div>
        </div>
        
        {/* Add to cart overlay - appears on hover */}
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-background to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out-expo">
          <div className="absolute inset-x-0 bottom-0 p-4">
            <button className="w-full py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-sm font-medium transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

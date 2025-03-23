
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const moveX = (clientX - centerX) / 25;
      const moveY = (clientY - centerY) / 25;
      
      heroRef.current.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-center">
            <span 
              className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary animate-fade-in" 
              style={{ animationDelay: '0.2s' }}
            >
              Introducing the new collection
            </span>
            
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight sm:leading-tight md:leading-tight lg:leading-tight animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              Elevate Your Experience with <span className="text-accent">Precision</span>
            </h1>
            
            <p 
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              Discover products that combine beautiful design with exceptional functionality, 
              crafted with attention to the finest details.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-in"
              style={{ animationDelay: '0.8s' }}
            >
              <a 
                href="#product-showcase" 
                className="relative bg-primary text-primary-foreground px-6 py-3 rounded-full overflow-hidden group transition-all"
              >
                <span className="absolute inset-0 w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out-expo"></span>
                <span className="relative flex items-center justify-center gap-2 font-medium">
                  Explore Products <ArrowRight size={16} />
                </span>
              </a>
              
              <a 
                href="#features" 
                className="px-6 py-3 rounded-full border border-border transition-colors hover:bg-secondary"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        ref={heroRef}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-auto z-0 transition-transform duration-300 ease-out opacity-80"
        style={{ willChange: 'transform' }}
      >
        <div className="relative aspect-[16/9]">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
          <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/10 blur-3xl"></div>
          <div className="absolute -bottom-12 left-1/3 transform -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-accent/20 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import { ArrowRight } from 'lucide-react';

// Features section
const features = [
  {
    id: '1',
    title: 'Meticulous Design',
    description: 'Every aspect carefully considered for both aesthetics and functionality.'
  },
  {
    id: '2',
    title: 'Premium Materials',
    description: 'Crafted with the highest quality materials for durability and performance.'
  },
  {
    id: '3',
    title: 'Intuitive Experience',
    description: 'Designed to be simple, intuitive, and delightful to use.'
  },
  {
    id: '4',
    title: 'Thoughtful Integration',
    description: 'Seamlessly works with your existing ecosystem of devices and services.'
  }
];

const Index = () => {
  // Add smooth scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Features Section */}
        <section id="features" className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16 reveal opacity-0">
              <span className="text-sm text-accent font-medium uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Experience Excellence
              </h2>
              <p className="mt-4 text-muted-foreground">
                Driven by a passion for excellence, we create products that enhance your life through superior design and functionality.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.id} 
                  className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 reveal opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent">
                        {parseInt(feature.id)}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    <a href="#" className="mt-auto hover-link text-sm font-medium text-accent inline-flex items-center">
                      Learn more <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <ProductShowcase />
        
        {/* Newsletter Section */}
        <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center reveal opacity-0">
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                Stay Updated with New Releases
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for exclusive updates on new products, special offers, and design insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="py-3 px-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 flex-grow focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button 
                  type="button"
                  className="py-3 px-6 rounded-full bg-white text-accent hover:bg-opacity-90 transition-colors font-medium"
                >
                  Subscribe
                </button>
              </div>
              
              <p className="text-sm text-white/60 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Add the ChatBot component */}
      <ChatBot />
    </div>
  );
};

export default Index;

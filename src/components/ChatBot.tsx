
import React, { useState, useRef, useEffect } from 'react';
import { Bot, User, Send, X, Minimize2, ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    content: "Hello! I'm Arti, your premium shopping assistant. How may I help you today?",
    sender: 'bot',
    timestamp: new Date(),
  },
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, isMinimized]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const restoreChat = () => {
    setIsMinimized(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const generateResponse = async (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Predefined responses based on keywords
    const responses = [
      { keywords: ['hello', 'hi', 'hey'], response: "Hello there! How can I assist with your premium shopping experience today?" },
      { keywords: ['product', 'products'], response: "Our premium collection features meticulously designed products with exceptional quality. Is there something specific you're looking for?" },
      { keywords: ['price', 'cost', 'expensive'], response: "Our products represent the perfect balance of quality and value. While premium in nature, they're designed to provide exceptional long-term value." },
      { keywords: ['shipping', 'delivery'], response: "We offer complimentary expedited shipping on all orders over $100, with standard options available for all purchases." },
      { keywords: ['return', 'refund'], response: "We stand behind our products with a 30-day satisfaction guarantee. Returns are simple and hassle-free." },
      { keywords: ['discount', 'sale', 'coupon'], response: "While we rarely discount our premium products, you can join our newsletter for exclusive offers and early access to limited collections." },
      { keywords: ['material', 'quality'], response: "We source only the highest quality materials, ensuring each product meets our exacting standards for durability and performance." },
      { keywords: ['help', 'support', 'assist'], response: "I'm here to help with anything you need. From product recommendations to order assistance, just let me know what you're looking for." },
    ];
    
    // Find a matching response or use default
    const lowerMessage = userMessage.toLowerCase();
    const matchedResponse = responses.find(r => 
      r.keywords.some(keyword => lowerMessage.includes(keyword))
    );
    
    const botResponse = matchedResponse 
      ? matchedResponse.response 
      : "I appreciate your interest. Would you like to explore our featured products or learn more about our design philosophy?";
    
    // Add bot response with slight delay to simulate typing
    setIsTyping(false);
    
    setMessages(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      },
    ]);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      content: input,
      sender: 'user' as const,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Generate bot response
    await generateResponse(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat button */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleChat}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-accent text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Bot size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isMinimized 
              ? { opacity: 1, y: 0, scale: 0.95, height: 'auto' } 
              : { opacity: 1, y: 0, scale: 1, height: 'auto' }
            }
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-background rounded-lg shadow-2xl border border-border overflow-hidden"
          >
            {/* Chat header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mr-3">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">Arti</h3>
                  <p className="text-xs text-muted-foreground">Premium Assistant</p>
                </div>
              </div>
              <div className="flex space-x-1">
                {!isMinimized && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={minimizeChat}
                    aria-label="Minimize chat"
                  >
                    <Minimize2 size={16} />
                  </Button>
                )}
                {isMinimized && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={restoreChat}
                    aria-label="Restore chat"
                  >
                    <ArrowUp size={16} />
                  </Button>
                )}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleChat}
                  aria-label="Close chat"
                >
                  <X size={16} />
                </Button>
              </div>
            </div>
            
            {/* Chat body - conditionally render based on minimized state */}
            {!isMinimized && (
              <>
                <div className="p-4 h-80 overflow-y-auto">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] px-4 py-2 rounded-lg ${
                            message.sender === 'user'
                              ? 'bg-accent text-white rounded-br-none'
                              : 'bg-muted rounded-bl-none'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className="text-xs mt-1 opacity-70">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="max-w-[80%] px-4 py-2 rounded-lg bg-muted rounded-bl-none">
                          <div className="flex space-x-1">
                            <span className="loading-dot"></span>
                            <span className="loading-dot"></span>
                            <span className="loading-dot"></span>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </div>

                {/* Chat input */}
                <div className="p-4 border-t border-border">
                  <div className="flex space-x-2">
                    <Input
                      ref={inputRef}
                      type="text"
                      placeholder="Type a message..."
                      value={input}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      className="flex-grow"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!input.trim()}
                      aria-label="Send message"
                    >
                      <Send size={16} />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;

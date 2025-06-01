import React, { useState } from 'react';
import { Menu, X, MessageSquare, Phone, ChevronDown,  Facebook,  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,   
   } from 'lucide-react';
import { ContactModal } from './ContactModal';
import { FeedbackModal } from './FeedbackModal';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
  <div className="container mx-auto px-4 py-2 md:py-2.5">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
            {/* <a href="/" className="text-blue-600 font-bold text-xl md:text-2xl"> */}
           
                
            {/* </a> */}
          </div>

          {/* Desktop Navigation */}
         
           {/*  <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Accueil
            </a>
            <a href="/products" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Produits
            </a> */}
             <div className="space-y-4">
           
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 text-blue-400 hover:bg-blue-600 hover:text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 text-blue-400 hover:bg-blue-500 hover:text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 text-pink-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 text-red-400 hover:bg-red-600 hover:text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
            
          </div>
           <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsContactModalOpen(true)}
              >
                <span>Contact/Contribuer</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            
            {/* <button 
              onClick={() => setIsFeedbackModalOpen(true)}
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <MessageSquare className="mr-1 h-4 w-4" />
              <span>Feedback</span>
            </button> */}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 pt-2 border-t border-gray-100 animate-fadeIn">
            <ul className="space-y-3">
              <li>
                <a 
                  href="/" 
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </a>
              </li>
              <li>
                <a 
                  href="/products" 
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Produits
                </a>
              </li>
              <li>
                <button 
                  className="flex items-center w-full py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  <span>Contact</span>
                </button>
              </li>
              <li>
                <button 
                  className="flex items-center w-full py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => {
                    setIsFeedbackModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Feedback</span>
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* Modals */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <FeedbackModal isOpen={isFeedbackModalOpen} onClose={() => setIsFeedbackModalOpen(false)} />
    </header>
  );
};
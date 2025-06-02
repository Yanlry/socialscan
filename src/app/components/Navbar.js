// /src/app/components/Navbar.js - VERSION TEST SIMPLIFIÉE
"use client";
import React, { useState, useCallback, useEffect } from 'react';
import { NAV_ITEMS } from '../../constants';

export default function Navbar({ 
  items = NAV_ITEMS, 
  onMenuItemClick 
}) {
  const [activeItem, setActiveItem] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = useCallback((item) => {
    setActiveItem(item.id);
    onMenuItemClick?.(item);
  }, [onMenuItemClick]);

  return (
    <nav className="fixed top-0 w-full z-50 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-morphism rounded-full px-8 py-4">
          <div className="flex justify-between items-center">
            
            {/* Logo simplifié pour test */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h1 className="text-2xl font-black text-white">
                TrendScope
              </h1>
              <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full font-semibold">
                LIVE
              </span>
            </div>

            {/* Navigation simplifiée */}
            <ul className="hidden md:flex items-center space-x-2">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleItemClick(item)}
                    className={`
                      px-6 py-3 rounded-full font-medium
                      flex items-center space-x-2 transition-all duration-300
                      ${activeItem === item.id 
                        ? 'bg-purple-500 text-white' 
                        : 'text-white hover:bg-white/20'
                      }
                    `}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA simplifié */}
            <button className="hidden lg:block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-all duration-300">
              🚀 Essayer Gratuit
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
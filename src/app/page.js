// /src/app/page.js
"use client";
import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';

/**
 * Main Page Component: Combines Navbar and HeroBanner
 * Demonstrates complete integration with clean architecture
 */
export default function HomePage() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('');

  const handleMenuItemClick = useCallback((item) => {
    setSelectedMenuItem(item.label);
    console.log(`Navigation vers: ${item.label}`);
    // Ici vous pourriez ajouter la logique de navigation
  }, []);

  const handleCTAClick = useCallback(() => {
    console.log('CTA clicked - Starting analysis demo');
    // Ici vous pourriez rediriger vers la page d'analyse ou ouvrir une modal
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar onMenuItemClick={handleMenuItemClick} />
      <HeroBanner onCTAClick={handleCTAClick} />
      
      {/* Debug info - à supprimer en production */}
      {selectedMenuItem && (
        <div className="fixed bottom-4 right-4 p-3 bg-black/80 text-white rounded-lg text-sm z-50">
          Dernier clic: {selectedMenuItem}
        </div>
      )}
    </div>
  );
}
"use client";
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';

export default function HomePage() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('');
  const [showDemo, setShowDemo] = useState(false);

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item.label);
    console.log(`Navigation vers: ${item.label}`);
    
    // Ici tu pourras ajouter la logique de navigation
    // Par exemple, faire défiler vers une section ou changer de page
  };

  const handleCTAClick = () => {
    console.log('Démarrage de l\'analyse...');
    setShowDemo(true);
    
    // Ici tu pourras ajouter la logique pour démarrer l'analyse
    // Par exemple, ouvrir une modal ou rediriger vers une autre page
    
    // Masque la démo après 3 secondes (pour l'exemple)
    setTimeout(() => {
      setShowDemo(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Barre de navigation */}
      <Navbar onMenuItemClick={handleMenuItemClick} />
      
      {/* Section héro principale */}
      <HeroBanner onCTAClick={handleCTAClick} />
      
      {/* Notification de démo (s'affiche temporairement) */}
      {showDemo && (
        <div className="fixed bottom-8 right-8 p-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl shadow-2xl z-50 animate-bounce">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">✨</span>
            <div>
              <div className="font-bold text-lg">Analyse en cours...</div>
              <div className="text-sm opacity-90">Traitement des données en temps réel</div>
            </div>
          </div>
        </div>
      )}
      
      {/* Indicateur de debug (à retirer en production) */}
      {selectedMenuItem && (
        <div className="fixed bottom-4 left-4 p-3 bg-black/80 backdrop-blur-sm text-white rounded-lg text-sm z-50">
          <span className="text-gray-400">Debug:</span> {selectedMenuItem}
        </div>
      )}
    </div>
  );
}
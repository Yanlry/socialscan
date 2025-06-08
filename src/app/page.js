"use client";
import React, { useState } from 'react';
import { Navbar, HeroBanner, Trends, Analytics, Reports, Contact } from './components';

export default function HomePage() {
  // ✅ État pour gérer quelle section afficher
  const [activeSection, setActiveSection] = useState('home');
  const [showDemo, setShowDemo] = useState(false);

  // ✅ Fonction pour gérer la navigation SPA
  const handleMenuItemClick = (item) => {
    console.log(`🚀 Changement de section: ${item.label} (${item.section})`);
    setActiveSection(item.section);
  };

  const handleCTAClick = () => {
    console.log('Démarrage de l\'analyse...');
    setShowDemo(true);
    
    setTimeout(() => {
      setShowDemo(false);
    }, 3000);
  };

  // ✅ Fonction pour rendre le bon composant selon la section active
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'trends':
        return <Trends />;
      case 'analytics':
        return <Analytics />;
      case 'reports':
        return <Reports />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return <HeroBanner onCTAClick={handleCTAClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* ✅ Navbar avec section active et callback */}
      <Navbar 
        onMenuItemClick={handleMenuItemClick} 
        activeSection={activeSection}
      />
      
      {/* ✅ Rendu conditionnel du contenu */}
      {renderActiveSection()}

      {/* Notification de démo */}
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
      
      {/* Indicateur de debug */}
      <div className="fixed bottom-4 left-4 p-3 bg-black/80 backdrop-blur-sm text-white rounded-lg text-sm z-50">
        <span className="text-gray-400">Section active:</span> {activeSection}
      </div>
    </div>
  );
}
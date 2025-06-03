// /src/app/components/FloatingOrb.js
"use client";
import React from 'react';

export default function FloatingOrb({ platform, delay, size }) {
  // Pour l'instant, on retourne null pour éviter tout problème
  // Cela désactive temporairement les orbes flottants
  return null;
}

/* Version alternative si vous voulez garder les orbes (décommentez si nécessaire) :

export default function FloatingOrb({ platform, delay, size }) {
  // Tailles en pixels directs
  const sizes = {
    sm: 96,  // 24 * 4
    md: 128, // 32 * 4
    lg: 160  // 40 * 4
  };

  const orbSize = sizes[size] || sizes.md;
  
  // Position aléatoire
  const randomTop = Math.random() * 70 + 10;
  const randomLeft = Math.random() * 70 + 10;

  const orbStyle = {
    position: 'absolute',
    width: `${orbSize}px`,
    height: `${orbSize}px`,
    borderRadius: '50%',
    backgroundColor: platform.color,
    opacity: 0.2,
    filter: 'blur(48px)',
    top: `${randomTop}%`,
    left: `${randomLeft}%`,
    pointerEvents: 'none'
  };

  return <div style={orbStyle}></div>;
}

*/
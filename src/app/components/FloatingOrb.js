// /src/app/components/FloatingOrb.js
"use client";
import React from 'react';

/**
 * FloatingOrb: Animated background element for visual appeal
 * Creates dynamic floating orbs with social media platform colors
 */
export default function FloatingOrb({ platform, delay, size }) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24', 
    lg: 'w-32 h-32'
  };

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      
      <div 
        className={`
          absolute rounded-full opacity-20 blur-sm
          ${sizeClasses[size]}
          animate-float
        `}
        style={{
          backgroundColor: platform.color,
          animationDelay: `${delay}s`,
          animationDuration: `${4 + Math.random() * 2}s`,
          top: `${Math.random() * 80}%`,
          left: `${Math.random() * 80}%`
        }}
      />
    </>
  );
}
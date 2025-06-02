// /src/app/components/HeroBanner.js
"use client";
import React, { useState, useCallback, useEffect } from 'react';
import FloatingOrb from './FloatingOrb';
import { SOCIAL_PLATFORMS, HERO_STATS } from '../../constants';

/**
 * HeroBanner: Dynamic hero section with animated elements
 * Features floating social media elements and interactive CTAs
 */
export default function HeroBanner({ 
  platforms = SOCIAL_PLATFORMS, 
  onCTAClick 
}) {
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Animated platform rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlatformIndex((prev) => (prev + 1) % platforms.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [platforms.length]);

  // Mouse tracking for interactive effects
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  }, []);

  const currentPlatform = platforms[currentPlatformIndex];

  return (
    <>
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(139, 92, 246, 0.5); }
          50% { text-shadow: 0 0 40px rgba(236, 72, 153, 0.8); }
        }

        @keyframes card-float {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          50% { transform: translateY(-10px) rotateY(5deg); }
        }

        .blob-animation {
          animation: blob 7s infinite;
        }

        .text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }

        .card-float {
          animation: card-float 4s ease-in-out infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>

      <section 
        className="relative min-h-screen overflow-hidden"
        onMouseMove={handleMouseMove}
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(139, 92, 246, 0.3) 0%, 
            rgba(236, 72, 153, 0.2) 25%, 
            rgba(59, 130, 246, 0.1) 50%, 
            transparent 70%),
            linear-gradient(135deg, 
            #667eea 0%, 
            #764ba2 25%, 
            #f093fb 50%, 
            #f5576c 75%, 
            #4facfe 100%)
          `
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {platforms.map((platform, index) => (
            <FloatingOrb 
              key={platform.name}
              platform={platform}
              delay={index * 0.5}
              size={index % 3 === 0 ? 'lg' : index % 2 === 0 ? 'md' : 'sm'}
            />
          ))}
          
          {/* Geometric shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 blob-animation"></div>
          <div className="absolute bottom-32 right-16 w-16 h-16 bg-pink-500 opacity-30" 
               style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
          <div className="absolute top-1/2 right-10 w-24 h-24 bg-blue-400 opacity-25 rotate-45"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left column - Text content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm font-semibold rounded-full animate-pulse">
                    🔥 Trending Now
                  </span>
                  <span className="text-white/80 font-medium">
                    +{Math.floor(Math.random() * 1000)}K analyses today
                  </span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                  <span className="text-glow">Découvre</span>
                  <br />
                  <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    les tendances
                  </span>
                  <br />
                  <span className="text-white">virales</span>
                </h1>
                
                <p className="text-xl text-white/90 font-medium max-w-2xl">
                  Intelligence artificielle pour analyser et prédire les tendances 
                  sur <span className="font-bold text-yellow-300">tous les réseaux sociaux</span> en temps réel
                </p>
              </div>

              {/* Platform indicator */}
              <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-500"
                  style={{ backgroundColor: currentPlatform.color }}
                >
                  {currentPlatform.icon}
                </div>
                <div>
                  <p className="text-white font-semibold">Analysant maintenant</p>
                  <p className="text-white/80">{currentPlatform.name}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onCTAClick}
                  className="group px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white font-bold rounded-2xl text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <span>🚀</span>
                    <span>Analyser maintenant</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  <span className="flex items-center justify-center space-x-3">
                    <span>📊</span>
                    <span>Voir la démo</span>
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {HERO_STATS.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-black text-white">{stat.value}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Visual elements */}
            <div className="perspective-1000">
              <div className="preserve-3d">
                
                {/* Social media cards */}
                <div className="space-y-6">
                  {platforms.slice(0, 3).map((platform, index) => (
                    <div 
                      key={platform.name}
                      className={`
                        card-float p-6 bg-white/95 backdrop-blur-sm rounded-3xl 
                        shadow-2xl border border-white/20 hover:shadow-purple-500/20
                        transition-all duration-500 hover:scale-105
                        ${index === 1 ? 'ml-12' : index === 2 ? 'mr-12' : ''}
                      `}
                      style={{ 
                        animationDelay: `${index * 0.5}s`,
                        transform: `rotateY(${index * 2}deg)`
                      }}
                    >
                      <div className="flex items-center space-x-4">
                        <div 
                          className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                          style={{ backgroundColor: platform.color }}
                        >
                          {platform.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800">{platform.name}</h3>
                          <p className="text-gray-600">+{Math.floor(Math.random() * 50)}% cette semaine</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-black text-gray-800">
                            {Math.floor(Math.random() * 100)}M
                          </div>
                          <div className="text-sm text-gray-500">vues</div>
                        </div>
                      </div>
                      
                      {/* Mini chart simulation */}
                      <div className="mt-4 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl relative overflow-hidden">
                        <div 
                          className="absolute bottom-0 left-0 h-full bg-gradient-to-r opacity-60 rounded-xl transition-all duration-1000"
                          style={{ 
                            backgroundColor: platform.color,
                            width: `${30 + Math.random() * 60}%`
                          }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs font-semibold text-gray-600">
                            Tendance ↗️ +{Math.floor(Math.random() * 30)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating notification */}
                <div className="absolute -top-4 -right-4 p-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl shadow-lg animate-bounce">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">🎯</span>
                    <div>
                      <div className="font-bold text-sm">Tendance détectée!</div>
                      <div className="text-xs opacity-90">#AI trending +2000%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
}
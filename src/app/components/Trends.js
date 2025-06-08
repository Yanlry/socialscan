"use client";
import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, Eye, Users, Clock, Brain, Play, Hash, Star, Globe, 
  BarChart3, Flame, Monitor, Youtube, Instagram, Twitter, 
  Music, Zap, ShoppingBag, Smile, Move, Crown, Award, Activity,
  Heart, MessageCircle, Share2, Sparkles, ChevronRight, Filter
} from 'lucide-react';

export default function TrendsPage() {
  // États pour les animations et interactions
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedNetwork, setSelectedNetwork] = useState('tiktok');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [particlePositions, setParticlePositions] = useState([]);
  const [waveAnimation, setWaveAnimation] = useState(0);
  const [matrixRain, setMatrixRain] = useState([]);
  // ✅ NOUVEAU : État pour éviter l'erreur d'hydratation
  const [isClient, setIsClient] = useState(false);

  // Données des réseaux sociaux avec TOP 10 tendances
  const socialNetworks = [
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: Monitor,
      color: '#fe2c55',
      gradient: 'linear-gradient(135deg, #fe2c55, #ff6b9d)',
      users: '1.1B',
      growth: '+27%',
      engagement: '5.8%',
      trends: [
        { rank: 1, type: 'dance', title: 'Danse des Mains Magiques', views: '145M', icon: Move, hot: true, growth: '+340%', creator: '@danceking23' },
        { rank: 2, type: 'music', title: 'Beat Viral "Cosmic Dreams"', views: '89M', icon: Music, hot: true, growth: '+210%', creator: '@musicprod_fr' },
        { rank: 3, type: 'trend', title: 'Challenge Téléportation', views: '76M', icon: Zap, hot: true, growth: '+280%', creator: '@tech_magic' },
        { rank: 4, type: 'product', title: 'Gadget LED Holographique', views: '67M', icon: ShoppingBag, hot: false, growth: '+156%', creator: '@gadget_review' },
        { rank: 5, type: 'joke', title: 'Blague du Chat Ninja', views: '45M', icon: Smile, hot: false, growth: '+89%', creator: '@humor_daily' },
        { rank: 6, type: 'dance', title: 'Pas de Robot 2025', views: '34M', icon: Move, hot: false, growth: '+67%', creator: '@robot_dance' },
        { rank: 7, type: 'music', title: 'Remix Viral du Moment', views: '28M', icon: Music, hot: false, growth: '+45%', creator: '@remix_master' },
        { rank: 8, type: 'trend', title: 'Transformation Express', views: '23M', icon: Zap, hot: false, growth: '+34%', creator: '@quick_change' },
        { rank: 9, type: 'product', title: 'Accessoire Tendance', views: '18M', icon: ShoppingBag, hot: false, growth: '+28%', creator: '@fashion_tech' },
        { rank: 10, type: 'joke', title: 'Meme Animal Rigolo', views: '15M', icon: Smile, hot: false, growth: '+21%', creator: '@animal_fun' }
      ]
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: Instagram,
      color: '#e4405f',
      gradient: 'linear-gradient(135deg, #e4405f, #f77a52, #fccc63)',
      users: '2.0B',
      growth: '+18%',
      engagement: '3.9%',
      trends: [
        { rank: 1, type: 'trend', title: 'Transformation Cyber', views: '203M', icon: Zap, hot: true, growth: '+420%', creator: '@cyber_style' },
        { rank: 2, type: 'product', title: 'Sneakers Holographiques', views: '145M', icon: ShoppingBag, hot: true, growth: '+356%', creator: '@sneaker_head' },
        { rank: 3, type: 'music', title: 'Synthwave Revival Mix', views: '92M', icon: Music, hot: true, growth: '+298%', creator: '@retro_beats' },
        { rank: 4, type: 'dance', title: 'Flow Futuriste 2025', views: '78M', icon: Move, hot: false, growth: '+234%', creator: '@future_flow' },
        { rank: 5, type: 'joke', title: 'Meme IA vs Humains', views: '56M', icon: Smile, hot: false, growth: '+187%', creator: '@ai_humor' },
        { rank: 6, type: 'trend', title: 'Aesthetic Minimaliste', views: '41M', icon: Zap, hot: false, growth: '+156%', creator: '@minimal_life' },
        { rank: 7, type: 'product', title: 'Bijoux Lumineux', views: '35M', icon: ShoppingBag, hot: false, growth: '+123%', creator: '@glow_jewelry' },
        { rank: 8, type: 'music', title: 'Playlist Chill Vibes', views: '29M', icon: Music, hot: false, growth: '+98%', creator: '@chill_music' },
        { rank: 9, type: 'dance', title: 'Chorégraphie Douce', views: '22M', icon: Move, hot: false, growth: '+76%', creator: '@soft_moves' },
        { rank: 10, type: 'joke', title: 'Stories Drôles', views: '16M', icon: Smile, hot: false, growth: '+54%', creator: '@story_funny' }
      ]
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: Youtube,
      color: '#ff0000',
      gradient: 'linear-gradient(135deg, #ff0000, #ff4545)',
      users: '2.7B',
      growth: '+42%',
      engagement: '6.2%',
      trends: [
        { rank: 1, type: 'trend', title: 'Tuto Hacking Éthique', views: '876M', icon: Zap, hot: true, growth: '+567%', creator: '@ethical_hacker' },
        { rank: 2, type: 'music', title: 'Album "Digital Dreams"', views: '567M', icon: Music, hot: true, growth: '+445%', creator: '@digital_artist' },
        { rank: 3, type: 'product', title: 'Casque VR Nouvelle Génération', views: '432M', icon: ShoppingBag, hot: true, growth: '+378%', creator: '@vr_reviews' },
        { rank: 4, type: 'dance', title: 'Chorégraphie Matrix Style', views: '234M', icon: Move, hot: false, growth: '+289%', creator: '@matrix_dancer' },
        { rank: 5, type: 'joke', title: 'Parodie Robot Maladroit', views: '156M', icon: Smile, hot: false, growth: '+234%', creator: '@robot_comedy' },
        { rank: 6, type: 'trend', title: 'Guide Tech 2025', views: '123M', icon: Zap, hot: false, growth: '+198%', creator: '@tech_guide' },
        { rank: 7, type: 'music', title: 'Covers Acoustiques', views: '98M', icon: Music, hot: false, growth: '+167%', creator: '@acoustic_covers' },
        { rank: 8, type: 'product', title: 'Setup Gaming Ultimate', views: '87M', icon: ShoppingBag, hot: false, growth: '+145%', creator: '@gaming_setup' },
        { rank: 9, type: 'dance', title: 'Tutorial Breakdance', views: '65M', icon: Move, hot: false, growth: '+123%', creator: '@break_master' },
        { rank: 10, type: 'joke', title: 'Compilation Fails', views: '43M', icon: Smile, hot: false, growth: '+98%', creator: '@fail_compilation' }
      ]
    }
  ];

  // Types de tendances avec couleurs et icônes
  const trendTypes = {
    all: { color: '#667eea', label: 'Toutes les tendances', icon: BarChart3, bg: 'rgba(102, 126, 234, 0.2)' },
    dance: { color: '#8b5cf6', label: 'Danses', icon: Move, bg: 'rgba(139, 92, 246, 0.2)' },
    music: { color: '#06b6d4', label: 'Musiques', icon: Music, bg: 'rgba(6, 182, 212, 0.2)' },
    joke: { color: '#f59e0b', label: 'Humour', icon: Smile, bg: 'rgba(245, 158, 11, 0.2)' },
    product: { color: '#10b981', label: 'Produits', icon: ShoppingBag, bg: 'rgba(16, 185, 129, 0.2)' },
    trend: { color: '#ef4444', label: 'Trends', icon: Zap, bg: 'rgba(239, 68, 68, 0.2)' }
  };

  // ✅ CORRECTION : useEffect pour détecter le côté client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ✅ CORRECTION : Effets d'animation seulement côté client
  useEffect(() => {
    if (!isClient) return; // Ne pas exécuter côté serveur

    // Horloge temps réel
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Particules animées avec valeurs fixes pour éviter l'hydratation
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: (i * 5) % 100, // ✅ Valeur déterministe au lieu de Math.random()
      y: (i * 7) % 100, // ✅ Valeur déterministe
      size: 2 + (i % 4), // ✅ Valeur déterministe
      speed: 0.2 + (i % 3) * 0.1, // ✅ Valeur déterministe
      opacity: 0.3 + (i % 5) * 0.1, // ✅ Valeur déterministe
    }));
    setParticlePositions(particles);

    // Matrix rain avec valeurs déterministes
    const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const rainDrops = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: (i * 3.33) % 100,
      characters: Array.from({ length: 10 }, (_, j) =>
        matrixChars[(i + j) % matrixChars.length] // ✅ Valeur déterministe
      ),
      speed: 1 + (i % 3), // ✅ Valeur déterministe
    }));
    setMatrixRain(rainDrops);

    // Animation des particules
    const particleInterval = setInterval(() => {
      setParticlePositions(prev =>
        prev.map(particle => ({
          ...particle,
          y: (particle.y + particle.speed) % 100,
          opacity: 0.3 + Math.sin(Date.now() * 0.001 + particle.id) * 0.3,
        }))
      );
    }, 50);

    // Animation wave
    const waveInterval = setInterval(() => {
      setWaveAnimation(prev => (prev + 1) % 360);
    }, 50);

    // Animation matrix
    const matrixInterval = setInterval(() => {
      setMatrixRain(prev =>
        prev.map(column => ({
          ...column,
          characters: column.characters.map((char, index) =>
            Math.random() > 0.95
              ? matrixChars[Math.floor(Math.random() * matrixChars.length)]
              : char
          ),
        }))
      );
    }, 150);

    return () => {
      clearInterval(timeInterval);
      clearInterval(particleInterval);
      clearInterval(waveInterval);
      clearInterval(matrixInterval);
    };
  }, [isClient]); // ✅ Dépendance isClient

  const formatTime = (date) => {
    return date.toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  };

  // Trouver le réseau sélectionné
  const currentNetwork = socialNetworks.find(network => network.id === selectedNetwork);

  // Filtrer les tendances selon le type sélectionné
  const getFilteredTrends = () => {
    if (selectedFilter === 'all') {
      return currentNetwork.trends;
    }
    return currentNetwork.trends.filter(trend => trend.type === selectedFilter);
  };

  const filteredTrends = getFilteredTrends();

  // ✅ CORRECTION : Affichage conditionnel côté client
  if (!isClient) {
    return (
      <div style={styles.pageContainer}>
        <div style={styles.loadingContainer}>
          <div style={styles.loadingSpinner}>Chargement...</div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.pageContainer}>
      {/* Effets d'arrière-plan comme HeroBanner */}
      
      {/* Particules animées */}
      <div style={styles.particleBackground}>
        {particlePositions.map(particle => (
          <div
            key={particle.id}
            style={{
              ...styles.particle,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>

      {/* Matrix Rain */}
      <div style={styles.matrixBackground}>
        {matrixRain.map(column => (
          <div
            key={column.id}
            style={{
              ...styles.matrixColumn,
              left: `${column.x}%`,
              animationDuration: `${column.speed}s`,
            }}
          >
            {column.characters.map((char, i) => (
              <span key={i} style={styles.matrixChar}>
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Éléments flottants décoratifs */}
      <div style={styles.floatingElements}>
        <div style={{...styles.floatingElement, ...styles.floatingElement1}}></div>
        <div style={{...styles.floatingElement, ...styles.floatingElement2}}></div>
        <div style={{...styles.floatingElement, ...styles.floatingElement3}}></div>
      </div>

      {/* Header avec style HeroBanner */}
      <header style={styles.heroHeader}>
        <div style={styles.container}>
          {/* Badge moderne avec glassmorphism */}
          <div style={styles.badgeContainer}>
            <div style={styles.badge}>
              <Flame size={16} style={styles.badgeIcon} />
              <span>🔥 Tendances en temps réel - {formatTime(currentTime)}</span>
            </div>
          </div>

          {/* Titre avec dégradé moderne */}
          <h1 style={styles.title}>
            <span>Toutes les Tendances</span>
            <span style={styles.titleHighlight}>Par Thème</span>
          </h1>

          {/* Description moderne */}
          <p style={styles.description}>
            Découvrez toutes les tendances virales organisées par catégorie. 
            Filtrez par type de contenu pour trouver exactement ce que vous cherchez ⚡
          </p>
        </div>
      </header>

      {/* Contenu principal */}
      <main style={styles.mainContent}>
        <div style={styles.container}>
          
          {/* Layout principal avec réseaux à gauche et tendances à droite */}
          <div style={styles.mainLayout}>
            
            {/* COLONNE GAUCHE - Sélecteur de réseaux VERTICAL */}
            <aside style={styles.networkSidebar}>
              <div style={styles.sidebarHeader}>
                <div style={styles.sidebarIconContainer}>
                  <Globe size={24} style={styles.sidebarIcon} />
                </div>
                <h3 style={styles.sidebarTitle}>Réseaux Sociaux</h3>
              </div>

              {/* Réseaux empilés verticalement */}
              <div style={styles.networkList}>
                {socialNetworks.map((network) => {
                  const isActive = selectedNetwork === network.id;
                  return (
                    <div
                      key={network.id}
                      style={{
                        ...styles.networkItem,
                        ...(isActive ? {
                          transform: 'translateX(10px)',
                          boxShadow: `0 10px 30px ${network.color}40`,
                          borderColor: network.color,
                          background: `${network.color}15`,
                        } : {})
                      }}
                      onClick={() => setSelectedNetwork(network.id)}
                    >
                      <div style={{
                        ...styles.networkItemIcon,
                        background: network.gradient,
                      }}>
                        <network.icon size={24} style={{ color: 'white' }} />
                      </div>

                      <div style={styles.networkItemInfo}>
                        <h4 style={styles.networkItemName}>{network.name}</h4>
                        <div style={styles.networkItemStats}>
                          <span style={styles.networkItemUsers}>{network.users} utilisateurs</span>
                          <span style={styles.networkItemGrowth}>{network.growth}</span>
                        </div>
                      </div>

                      {isActive && (
                        <div style={styles.activeIndicator}>
                          <div style={styles.activeDot}></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </aside>

            {/* COLONNE DROITE - Toutes les tendances par thème */}
            <section style={styles.trendsMainSection}>
              
              {/* Header des tendances avec infos du réseau */}
              <div style={styles.trendsHeader}>
                <div style={styles.trendsHeaderLeft}>
                  <div style={styles.trendsIconContainer}>
                    <Crown size={32} style={{...styles.trendsIcon, color: '#fbbf24'}} />
                    <div style={{...styles.trendsIconPulse, borderColor: '#fbbf24'}}></div>
                  </div>
                  <div>
                    <h2 style={styles.trendsTitle}>
                      Tendances - <span style={styles.titleGradient}>{currentNetwork.name}</span>
                    </h2>
                    <p style={styles.trendsSubtitle}>
                      {currentNetwork.trends.length} tendances • {currentNetwork.users} utilisateurs • {currentNetwork.engagement} engagement
                    </p>
                  </div>
                </div>
                
                <div style={{
                  ...styles.networkBadge,
                  backgroundColor: `${currentNetwork.color}20`,
                  borderColor: currentNetwork.color,
                  color: currentNetwork.color,
                }}>
                  <currentNetwork.icon size={20} />
                  <span>Live {currentNetwork.growth}</span>
                </div>
              </div>

              {/* NOUVEAUTÉ : Boutons de filtre par type */}
              <div style={styles.filterSection}>
                <div style={styles.filterHeader}>
                  <Filter size={20} style={styles.filterIcon} />
                  <h3 style={styles.filterTitle}>Filtrer par type :</h3>
                </div>
                
                <div style={styles.filterButtons}>
                  {Object.entries(trendTypes).map(([type, config]) => {
                    const isActive = selectedFilter === type;
                    const Icon = config.icon;
                    return (
                      <button
                        key={type}
                        style={{
                          ...styles.filterButton,
                          ...(isActive ? {
                            background: config.bg,
                            borderColor: config.color,
                            color: config.color,
                            transform: 'translateY(-2px)',
                            boxShadow: `0 8px 20px ${config.color}40`,
                          } : {})
                        }}
                        onClick={() => setSelectedFilter(type)}
                      >
                        <Icon size={18} />
                        <span>{config.label}</span>
                        {type !== 'all' && (
                          <span style={styles.filterCount}>
                            {currentNetwork.trends.filter(trend => trend.type === type).length}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* GROS CONTAINER avec toutes les tendances filtrées */}
              <div style={styles.trendsContainer}>
                <div style={styles.trendsGrid}>
                  {filteredTrends.map((trend, index) => {
                    const angle = index * 36 + waveAnimation * 0.5;
                    return (
                      <div
                        key={`${trend.rank}-${trend.type}`}
                        style={{
                          ...styles.trendCard,
                          borderLeftColor: trendTypes[trend.type].color,
                          transform: `translateY(${Math.sin(angle * 0.02) * 3}px)`,
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                          e.currentTarget.style.boxShadow = `0 20px 40px ${trendTypes[trend.type].color}40`;
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = `translateY(${Math.sin(angle * 0.02) * 3}px) scale(1)`;
                          e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                        }}
                      >
                        {/* Effet holographique */}
                        <div style={styles.trendHologram}></div>

                        <div style={styles.trendContent}>
                          {/* Rang avec médaille */}
                          <div style={styles.rankSection}>
                            <div style={{
                              ...styles.rankBadge,
                              background: trend.rank <= 3 
                                ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' 
                                : 'linear-gradient(135deg, #6b7280, #4b5563)',
                            }}>
                              {trend.rank <= 3 ? (
                                <Award size={20} style={{color: 'white'}} />
                              ) : (
                                <span style={{color: 'white', fontWeight: '700'}}>{trend.rank}</span>
                              )}
                            </div>
                            {trend.rank <= 3 && (
                              <div style={styles.medalText}>#{trend.rank}</div>
                            )}
                          </div>

                          {/* Contenu principal */}
                          <div style={styles.trendInfo}>
                            <div style={styles.trendHeader}>
                              <h3 style={styles.trendTitle}>{trend.title}</h3>
                              {trend.hot && (
                                <div style={styles.hotBadge}>
                                  <Flame size={14} />
                                  <span>HOT</span>
                                </div>
                              )}
                            </div>

                            {/* Créateur */}
                            <div style={styles.creatorInfo}>
                              <Users size={14} />
                              <span>{trend.creator}</span>
                            </div>

                            <div style={styles.trendMeta}>
                              <div style={{
                                ...styles.trendType,
                                backgroundColor: trendTypes[trend.type].bg,
                                color: trendTypes[trend.type].color,
                              }}>
                                <trend.icon size={16} />
                                <span>{trendTypes[trend.type].label}</span>
                              </div>
                              
                              <div style={styles.trendViews}>
                                <Eye size={16} />
                                <span>{trend.views} vues</span>
                              </div>

                              <div style={styles.trendGrowth}>
                                <TrendingUp size={16} />
                                <span>{trend.growth}</span>
                              </div>
                            </div>
                          </div>

                          {/* Graphique miniature futuriste */}
                          <div style={styles.futuristicChart}>
                            {Array.from({ length: 5 }, (_, i) => (
                              <div
                                key={i}
                                style={{
                                  width: '6px',
                                  height: `${15 + Math.sin(waveAnimation * 0.1 + i) * 10}px`,
                                  background: `linear-gradient(180deg, ${trendTypes[trend.type].color}, ${trendTypes[trend.type].color}80)`,
                                  borderRadius: '3px',
                                  boxShadow: `0 0 8px ${trendTypes[trend.type].color}`,
                                  animation: 'chartPulse 2s ease-in-out infinite',
                                  animationDelay: `${i * 0.1}s`,
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Effet de scan */}
                        <div style={{
                          ...styles.scanLine,
                          transform: `translateY(${Math.sin(waveAnimation * 0.1) * 100}%)`,
                        }}></div>
                      </div>
                    );
                  })}
                </div>

                {/* Message si aucune tendance trouvée */}
                {filteredTrends.length === 0 && (
                  <div style={styles.noResults}>
                    <div style={styles.noResultsIcon}>
                      <Sparkles size={48} style={{color: '#6b7280'}} />
                    </div>
                    <h3 style={styles.noResultsTitle}>Aucune tendance trouvée</h3>
                    <p style={styles.noResultsText}>
                      Essayez de sélectionner un autre type de contenu ou un autre réseau social.
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes matrixRain {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }

        @keyframes holographicScan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes iconPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }

        @keyframes chartPulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }

        @keyframes scanLineMove {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        @keyframes filterGlow {
          0%, 100% { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); }
          50% { box-shadow: 0 8px 20px var(--glow-color); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  // ===== CONTAINER GLOBAL =====
  pageContainer: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8b5cf6 100%)',
    minHeight: '100vh',
    color: '#f8f9fa',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    position: 'relative',
    overflow: 'hidden',
  },

  // ✅ NOUVEAU : Écran de chargement pour éviter l'hydratation
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
  },

  loadingSpinner: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
    animation: 'spin 1s linear infinite',
  },

  // ===== EFFETS D'ARRIÈRE-PLAN (identiques) =====
  particleBackground: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1,
  },

  particle: {
    position: 'absolute',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6), transparent)',
    borderRadius: '50%',
    animation: 'float 6s ease-in-out infinite',
    filter: 'blur(1px)',
  },

  matrixBackground: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    opacity: 0.1,
    pointerEvents: 'none',
    zIndex: 2,
  },

  matrixColumn: {
    position: 'absolute',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'monospace',
    animation: 'matrixRain linear infinite',
    textShadow: '0 0 5px #ffffff',
  },

  matrixChar: {
    display: 'block',
    lineHeight: '20px',
    opacity: Math.random(),
  },

  floatingElements: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 3,
  },

  floatingElement: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(248, 249, 250, 0.1))',
    filter: 'blur(2px)',
    animation: 'float 8s ease-in-out infinite',
  },

  floatingElement1: {
    width: '200px',
    height: '200px',
    top: '10%',
    right: '10%',
    animationDelay: '0s',
  },

  floatingElement2: {
    width: '150px',
    height: '150px',
    bottom: '20%',
    left: '5%',
    animationDelay: '3s',
  },

  floatingElement3: {
    width: '100px',
    height: '100px',
    top: '60%',
    right: '30%',
    animationDelay: '6s',
  },

  // ===== HEADER HERO =====
  heroHeader: {
    padding: '80px 0 40px',
    textAlign: 'center',
    position: 'relative',
    zIndex: 10,
  },

  container: {
    maxWidth: '1600px',
    margin: '0 auto',
    padding: '0 32px',
    position: 'relative',
  },

  badgeContainer: {
    marginBottom: '32px',
  },

  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '30px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#f8f9fa',
    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
  },

  badgeIcon: {
    color: '#f59e0b',
  },

  title: {
    fontSize: '4rem',
    fontWeight: '900',
    lineHeight: '1.1',
    marginBottom: '24px',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    letterSpacing: '-0.02em',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  },

  titleHighlight: {
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #ffffff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },

  description: {
    fontSize: '1.25rem',
    lineHeight: '1.7',
    color: '#f1f3f4',
    marginBottom: '48px',
    maxWidth: '700px',
    margin: '0 auto 48px',
    fontWeight: '400',
    textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
  },

  // ===== CONTENU PRINCIPAL =====
  mainContent: {
    position: 'relative',
    zIndex: 10,
    paddingBottom: '80px',
  },

  mainLayout: {
    display: 'flex',
    gap: '40px',
    alignItems: 'flex-start',
  },

  // ===== SIDEBAR RÉSEAUX (COLONNE GAUCHE) =====
  networkSidebar: {
    width: '320px',
    flexShrink: 0,
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(25px)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '24px',
    padding: '24px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  },

  sidebarHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '24px',
    paddingBottom: '16px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  },

  sidebarIconContainer: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sidebarIcon: {
    color: 'white',
  },

  sidebarTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0,
  },

  networkList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  networkItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  networkItemIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  networkItemInfo: {
    flex: 1,
  },

  networkItemName: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0 0 4px 0',
  },

  networkItemStats: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },

  networkItemUsers: {
    fontSize: '12px',
    color: '#e9ecef',
  },

  networkItemGrowth: {
    fontSize: '12px',
    color: '#10b981',
    fontWeight: '600',
  },

  activeIndicator: {
    display: 'flex',
    alignItems: 'center',
  },

  activeDot: {
    width: '8px',
    height: '8px',
    background: '#10b981',
    borderRadius: '50%',
    animation: 'iconPulse 2s ease-in-out infinite',
    boxShadow: '0 0 10px #10b981',
  },

  // ===== SECTION TENDANCES (COLONNE DROITE) =====
  trendsMainSection: {
    flex: 1,
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(25px)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '24px',
    padding: '32px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  },

  trendsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px',
    flexWrap: 'wrap',
    gap: '16px',
  },

  trendsHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },

  trendsIconContainer: {
    position: 'relative',
    width: '60px',
    height: '60px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  trendsIcon: {
    filter: 'drop-shadow(0 0 10px #fbbf24)',
  },

  trendsIconPulse: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '2px solid',
    borderRadius: '16px',
    animation: 'iconPulse 2s ease-in-out infinite',
  },

  trendsTitle: {
    fontSize: '2rem',
    fontWeight: '900',
    color: '#ffffff',
    margin: 0,
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  },

  titleGradient: {
    background: 'linear-gradient(90deg, #f8f9fa, #e9ecef, #ffffff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },

  trendsSubtitle: {
    fontSize: '14px',
    color: '#e9ecef',
    margin: '4px 0 0 0',
    fontWeight: '500',
  },

  networkBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
    border: '1px solid',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
  },

  // ===== NOUVEAUTÉ : SECTION FILTRES =====
  filterSection: {
    marginBottom: '32px',
    padding: '24px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },

  filterHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '20px',
  },

  filterIcon: {
    color: '#667eea',
  },

  filterTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0,
  },

  filterButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
  },

  filterButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    color: '#e9ecef',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(10px)',
  },

  filterCount: {
    padding: '2px 8px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '700',
    marginLeft: '4px',
  },

  // ===== CONTAINER ET GRILLE DES TENDANCES =====
  trendsContainer: {
    position: 'relative',
  },

  trendsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
    gap: '24px',
    marginBottom: '40px',
  },

  // ===== CARTES DE TENDANCES =====
  trendCard: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '28px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    borderLeft: '4px solid',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
    cursor: 'pointer',
    height: 'fit-content',
  },

  trendHologram: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.05), transparent)',
    borderRadius: '20px',
    animation: 'holographicScan 4s ease-in-out infinite',
  },

  trendContent: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
  },

  rankSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    justifyContent: 'center',
  },

  rankBadge: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: '700',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  },

  medalText: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#fbbf24',
  },

  trendInfo: {
    flex: 1,
    textAlign: 'center',
  },

  trendHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px',
  },

  trendTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0,
    textAlign: 'center',
    lineHeight: '1.3',
    textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
  },

  hotBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '4px 8px',
    background: 'rgba(239, 68, 68, 0.2)',
    color: '#ef4444',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '600',
    border: '1px solid rgba(239, 68, 68, 0.3)',
  },

  // NOUVEAU : Info créateur
  creatorInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    fontSize: '14px',
    color: '#e9ecef',
    marginBottom: '8px',
  },

  trendMeta: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },

  trendType: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
    border: '1px solid currentColor',
  },

  trendViews: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
    color: '#e9ecef',
    fontWeight: '500',
  },

  trendGrowth: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '14px',
    color: '#10b981',
    fontWeight: '600',
  },

  futuristicChart: {
    display: 'flex',
    alignItems: 'end',
    gap: '3px',
    height: '30px',
    justifyContent: 'center',
  },

  scanLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
    animation: 'scanLineMove 3s ease-in-out infinite',
    top: '50%',
  },

  // ===== MESSAGE AUCUN RÉSULTAT =====
  noResults: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px',
    textAlign: 'center',
  },

  noResultsIcon: {
    marginBottom: '20px',
    opacity: 0.5,
  },

  noResultsTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '12px',
  },

  noResultsText: {
    fontSize: '16px',
    color: '#e9ecef',
    maxWidth: '400px',
    lineHeight: '1.5',
  },
};
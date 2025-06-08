"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  TrendingUp,
  Eye,
  Users,
  Clock,
  Brain,
  Play,
  Hash,
  Star,
  Activity,
  Heart,
  Globe,
  MessageCircle,
  Share2,
  BarChart3,
  Zap,
  Target,
  Sparkles,
  Flame,
  ChevronRight,
  Monitor,
  Smartphone,
  Youtube,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";

export default function HeroBanner({ onCTAClick }) {
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);
  const [currentTrendingVideo, setCurrentTrendingVideo] = useState(0);
  const [currentHashtag, setCurrentHashtag] = useState(0);
  const [liveMetrics, setLiveMetrics] = useState({});
  const [currentInfluencer, setCurrentInfluencer] = useState(0);
  const [particlePositions, setParticlePositions] = useState([]);
  const [waveAnimation, setWaveAnimation] = useState(0);
  const [hologramEffect, setHologramEffect] = useState(0);
  const [matrixRain, setMatrixRain] = useState([]);
  const [opacities, setOpacities] = useState([]);

  const hoveredCardIndex = useRef(null);

  // Modifiez votre effet d'animation pour prendre en compte le survol
  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredCardIndex.current === null) {
        setWaveAnimation((prev) => (prev + 1) % 360);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);
  const platforms = [
    {
      name: "Facebook",
      color: "#1877f2",
      icon: Facebook,
      growth: "+15%",
      users: "2.9B",
      engagement: "4.2%",
    },
    {
      name: "TikTok",
      color: "#fe2c55",
      icon: Monitor,
      growth: "+27%",
      users: "1.1B",
      engagement: "5.8%",
    },
    {
      name: "Instagram",
      color: "#e4405f",
      icon: Instagram,
      growth: "+18%",
      users: "2.0B",
      engagement: "3.9%",
    },
    {
      name: "Twitter",
      color: "#1da1f2",
      icon: Twitter,
      growth: "+31%",
      users: "450M",
      engagement: "2.1%",
    },
    {
      name: "YouTube",
      color: "#ff0000",
      icon: Youtube,
      growth: "+42%",
      users: "2.7B",
      engagement: "6.2%",
    },
    {
      name: "LinkedIn",
      color: "#0077b5",
      icon: Linkedin,
      growth: "+15%",
      users: "900M",
      engagement: "3.4%",
    },
  ];

  const stats = [
    { value: "10M+", label: "Posts analysés", icon: BarChart3 },
    { value: "50+", label: "Réseaux suivis", icon: Globe },
    { value: "99.9%", label: "Précision IA", icon: Brain },
  ];

  const trendingVideos = [
    {
      title: "Danse TikTok #VirtualVibes",
      platform: "TikTok",
      views: "2.8M",
      growth: "+340%",
      icon: Play,
      creator: "@danceking23",
      score: 95,
      category: "Entertainment",
    },
    {
      title: "Recette 5min Pasta",
      platform: "Instagram",
      views: "1.2M",
      growth: "+210%",
      icon: Heart,
      creator: "@chef_rapide",
      score: 88,
      category: "Food",
    },
    {
      title: "Life Hack Productivité",
      platform: "YouTube",
      views: "890K",
      growth: "+156%",
      icon: Zap,
      creator: "@productivity_guru",
      score: 92,
      category: "Education",
    },
    {
      title: "Workout Challenge",
      platform: "Instagram",
      views: "1.5M",
      growth: "+280%",
      icon: Activity,
      creator: "@fitnessguru",
      score: 90,
      category: "Fitness",
    },
  ];

  const trendingHashtags = [
    {
      tag: "#IA2024",
      count: "1.2M",
      platform: "Twitter",
      growth: "+89%",
      icon: Brain,
      sentiment: "positive",
      reach: "45M",
    },
    {
      tag: "#EcoFriendly",
      count: "890K",
      platform: "Instagram",
      growth: "+67%",
      icon: Globe,
      sentiment: "positive",
      reach: "32M",
    },
    {
      tag: "#WorkFromHome",
      count: "2.1M",
      platform: "LinkedIn",
      growth: "+45%",
      icon: Monitor,
      sentiment: "neutral",
      reach: "78M",
    },
    {
      tag: "#TechInnovation",
      count: "650K",
      platform: "Twitter",
      growth: "+125%",
      icon: Zap,
      sentiment: "positive",
      reach: "28M",
    },
  ];

  const topInfluencers = [
    {
      name: "Emma Watson",
      followers: "58.2M",
      engagement: "4.2%",
      platform: "Instagram",
      icon: Star,
      tier: "Mega",
      category: "Lifestyle",
    },
    {
      name: "Tech Review Pro",
      followers: "12.8M",
      engagement: "8.1%",
      platform: "YouTube",
      icon: Monitor,
      tier: "Macro",
      category: "Technology",
    },
    {
      name: "FoodieQueen",
      followers: "3.4M",
      engagement: "12.5%",
      platform: "TikTok",
      icon: Heart,
      tier: "Macro",
      category: "Food",
    },
    {
      name: "Gaming Master",
      followers: "8.9M",
      engagement: "15.2%",
      platform: "YouTube",
      icon: Play,
      tier: "Macro",
      category: "Gaming",
    },
  ];

  const liveMetricsData = [
    { label: "Posts/seconde", value: "2,847", icon: Activity, trend: "+12%" },
    { label: "Engagement moyen", value: "4.2%", icon: Heart, trend: "+8%" },
    { label: "Portée globale", value: "47M", icon: Globe, trend: "+23%" },
    {
      label: "Interactions/min",
      value: "156K",
      icon: MessageCircle,
      trend: "+15%",
    },
  ];

  useEffect(() => {
    setOpacities(Array.from({ length: 25 }, () => Math.random()));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlatformIndex((prev) => (prev + 1) % platforms.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [platforms.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrendingVideo((prev) => (prev + 1) % trendingVideos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [trendingVideos.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHashtag((prev) => (prev + 1) % trendingHashtags.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [trendingHashtags.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInfluencer((prev) => (prev + 1) % topInfluencers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [topInfluencers.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics({
        posts: Math.floor(Math.random() * 1000 + 2000),
        mentions: Math.floor(Math.random() * 50 + 100),
        engagement: (Math.random() * 2 + 3).toFixed(1),
        reach: Math.floor(Math.random() * 20 + 40),
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setParticlePositions(particles);

    const interval = setInterval(() => {
      setParticlePositions((prev) =>
        prev.map((particle) => ({
          ...particle,
          y: (particle.y + particle.speed) % 100,
          opacity: 0.3 + Math.sin(Date.now() * 0.001 + particle.id) * 0.3,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveAnimation((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHologramEffect((prev) => (prev + 2) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const matrix = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: (i * 3.33) % 100,
      characters: Array.from({ length: 10 }, () =>
        String.fromCharCode(0x30a0 + Math.random() * 96)
      ),
      speed: Math.random() * 2 + 1,
    }));
    setMatrixRain(matrix);

    const interval = setInterval(() => {
      setMatrixRain((prev) =>
        prev.map((column) => ({
          ...column,
          characters: column.characters.map(() =>
            Math.random() > 0.95
              ? String.fromCharCode(0x30a0 + Math.random() * 96)
              : column.characters[0]
          ),
        }))
      );
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const currentPlatform = platforms[currentPlatformIndex];
  const currentVideo = trendingVideos[currentTrendingVideo];
  const currentInfluencerData = topInfluencers[currentInfluencer];

  return (
    <div style={styles.pageContainer}>
      {/* ===== SECTION HERO MODERNE ===== */}
      <section style={styles.heroSection}>
        {/* Fond avec dégradé moderne */}
        <div style={styles.heroBackground}></div>

        {/* Éléments flottants décoratifs */}
        <div style={styles.floatingElements}>
          <div
            style={{ ...styles.floatingElement, ...styles.floatingElement1 }}
          ></div>
          <div
            style={{ ...styles.floatingElement, ...styles.floatingElement2 }}
          ></div>
          <div
            style={{ ...styles.floatingElement, ...styles.floatingElement3 }}
          ></div>
        </div>

        <div style={styles.container}>
          <div style={styles.heroContent}>
            {/* Badge moderne avec glassmorphism */}
            <div style={styles.badgeContainer}>
              <div style={styles.badge}>
                <Flame size={16} style={styles.badgeIcon} />
                <span>922K analyses aujourdhui</span>
              </div>
            </div>

            {/* Titre avec dégradé moderne */}
            <h1 style={styles.title}>
              <span>Découvre les tendances</span>
              <span style={styles.titleHighlight}>qui font vibrer le web</span>
            </h1>

            {/* Description moderne */}
            <p style={styles.description}>
              Intelligence artificielle nouvelle génération pour décrypter et
              prédire les tendances virales sur tous les réseaux sociaux ⚡
            </p>

            {/* Indicateur de plateforme moderne */}
            <div style={styles.platformIndicator}>
              <div style={styles.platformIconContainer}>
                <currentPlatform.icon
                  size={24}
                  style={{
                    ...styles.platformIconSvg,
                    color: currentPlatform.color,
                  }}
                />
              </div>
              <div style={styles.platformDetails}>
                <span style={styles.platformLabel}>En cours danalyse</span>
                <span style={styles.platformName}>{currentPlatform.name}</span>
              </div>
              <div style={styles.platformGrowthBadge}>
                <TrendingUp size={16} />
                <span>{currentPlatform.growth}</span>
              </div>
            </div>

            {/* Boutons modernes avec effets */}
            <div style={styles.heroActions}>
              <button
                onClick={onCTAClick}
                style={styles.primaryAction}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-3px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(139, 92, 246, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(139, 92, 246, 0.3)";
                }}
              >
                <Sparkles size={18} />
                <span>Analyser maintenant</span>
                <ChevronRight size={18} />
              </button>

              <button
                style={styles.secondaryAction}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                }}
              >
                <Play size={18} />
                <span>Voir la démo</span>
              </button>
            </div>

            {/* Statistiques modernes */}
            <div style={styles.heroStats}>
              {stats.map((stat, index) => (
                <div key={index} style={styles.heroStat}>
                  <div style={styles.statIconContainer}>
                    <stat.icon size={20} style={styles.statIcon} />
                  </div>
                  <div style={styles.statContent}>
                    <div style={styles.statValue}>{stat.value}</div>
                    <div style={styles.statLabel}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION PLATEFORMES RÉVOLUTIONNAIRE ===== */}
      <section style={styles.revolutionaryPlatformsSection}>
        {/* Arrière-plan avec particules animées */}
        <div style={styles.revolutionaryBackground}>
          {particlePositions.map((particle) => (
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

        <div style={styles.container}>
          <div style={styles.revolutionarySectionHeader}>
            <div style={styles.revolutionaryHeaderBackground}></div>
            <div style={styles.revolutionaryIconContainer}>
              <Monitor size={32} style={styles.revolutionaryIcon} />
              <div style={styles.iconPulse}></div>
            </div>
            <h2 style={styles.revolutionaryTitle}>
              Social
              <span style={styles.titleGradient}>Performer</span>
            </h2>
            <p style={styles.revolutionarySubtitle}>
              Scanner multi-plateforme • Analyse des performances • Récupération
              des tendances
            </p>
          </div>

          {/* Grid en hexagone révolutionnaire */}
          <div style={styles.hexagonalGrid}>
            {platforms.map((platform, index) => {
              const isActive = index === currentPlatformIndex;
              return (
                <div
                  key={platform.name}
                  style={{
                    ...styles.hexagonCard,
                    transform: isActive
                      ? "scale(1.1) rotate(5deg)"
                      : "scale(1) rotate(0deg)",
                    zIndex: isActive ? 10 : 1,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1.2) rotate(10deg) translateY(-20px)";
                    e.currentTarget.style.boxShadow = `0 40px 80px ${platform.color}40`;
                  }}
                  onMouseOut={(e) => {
                    const active = index === currentPlatformIndex;
                    e.currentTarget.style.transform = active
                      ? "scale(1.1) rotate(5deg)"
                      : "scale(1) rotate(0deg)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(0, 0, 0, 0.3)";
                  }}
                >
                  {/* Effet hologramme */}
                  <div
                    style={{
                      ...styles.hologramEffect,
                      background: `linear-gradient(45deg, ${platform.color}20, transparent, ${platform.color}10)`,
                      transform: `translateX(${
                        Math.sin(hologramEffect * 0.1) * 10
                      }px)`,
                    }}
                  ></div>

                  {/* Contenu de la carte */}
                  <div style={styles.hexagonContent}>
                    <div
                      style={{
                        ...styles.platformMegaIcon,
                        background: `linear-gradient(135deg, ${platform.color}, ${platform.color}cc)`,
                      }}
                    >
                      <platform.icon size={36} style={{ color: "white" }} />
                      <div style={styles.iconGlow}></div>
                    </div>

                    <h3 style={styles.platformMegaTitle}>{platform.name}</h3>

                    <div style={styles.platformMetrics}>
                      <div style={styles.metricItem}>
                        <span style={styles.metricLabel}>Utilisateurs</span>
                        <span style={styles.metricValue}>{platform.users}</span>
                      </div>
                      <div style={styles.metricItem}>
                        <span style={styles.metricLabel}>Engagement</span>
                        <span style={styles.metricValue}>
                          {platform.engagement}
                        </span>
                      </div>
                    </div>

                    <div style={styles.platformProgress}>
                      <div style={styles.progressBar}>
                        <div
                          style={{
                            ...styles.progressFill,
                            width: `${parseFloat(platform.engagement) * 20}%`,
                            background: `linear-gradient(90deg, ${platform.color}, ${platform.color}80)`,
                          }}
                        ></div>
                      </div>
                      <span style={styles.growthBadge}>{platform.growth}</span>
                    </div>

                    {/* Mini graphique futuriste */}
                    <div style={styles.futuristicChart}>
                      {Array.from({ length: 8 }, (_, i) => (
                        <div
                          key={i}
                          style={{
                            ...styles.chartColumn,
                            height: `${
                              30 + Math.sin(waveAnimation * 0.05 + i) * 20
                            }%`,
                            background: `linear-gradient(180deg, ${platform.color}, ${platform.color}60)`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bordure néon */}
                  <div
                    style={{
                      ...styles.neonBorder,
                      boxShadow: `inset 0 0 20px ${platform.color}40, 0 0 20px ${platform.color}20`,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Panneau de contrôle central */}
          <div style={styles.centralControlPanel}>
            <div style={styles.controlPanelGlow}></div>
            <div style={styles.controlPanelContent}>
              <h4 style={styles.controlPanelTitle}>Centre de Contrôle IA</h4>
              <div style={styles.controlMetrics}>
                <div style={styles.controlMetric}>
                  <Activity size={24} />
                  <span>Analyse en temps réel</span>
                  <div style={styles.statusDot}></div>
                </div>
                <div style={styles.controlMetric}>
                  <Brain size={24} />
                  <span>IA Prédictive Active</span>
                  <div style={styles.statusDot}></div>
                </div>
                <div style={styles.controlMetric}>
                  <Globe size={24} />
                  <span>Couverture Globale</span>
                  <div style={styles.statusDot}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION MÉTRIQUES LIVE RÉVOLUTIONNAIRE ===== */}
      <section style={styles.revolutionaryLiveSection}>
        {/* Effet Matrix Rain */}
        <div style={styles.matrixBackground}>
          {matrixRain.map((column) => (
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

        <div style={styles.container}>
          <div style={styles.revolutionarySectionHeader}>
            <div style={styles.revolutionaryHeaderBackground}></div>
            <div style={styles.revolutionaryIconContainer}>
              <Activity size={32} style={styles.revolutionaryIcon} />
              <div style={styles.iconPulse}></div>
            </div>
            <h2 style={styles.revolutionaryTitle}>
              Live
              <span style={styles.titleGradient}>Quantum</span>
            </h2>
            <p style={styles.revolutionarySubtitle}>
              Données en temps réel • Prédictions IA
            </p>
          </div>

          {/* Grid de métriques en vortex - Version améliorée */}
          <div style={styles.vortexGrid}>
            {liveMetricsData.map((metric, index) => {
              const angle = index * 90 + waveAnimation;
              const isHovered = hoveredCardIndex.current === index;

              return (
                <div
                  key={index}
                  style={{
                    ...styles.vortexCard,
                    transform: isHovered
                      ? "scale(1.2) rotate(0deg) translateZ(50px)"
                      : `rotate(${angle}deg) translateY(${
                          Math.sin(angle * 0.02) * 10
                        }px)`,
                    transition: "transform 0.5s ease-out",
                    zIndex: isHovered ? 10 : 1,
                    boxShadow: isHovered
                      ? "0 50px 100px rgba(0, 255, 255, 0.4)"
                      : "0 25px 50px rgba(0, 0, 0, 0.3)",
                  }}
                  onMouseEnter={() => {
                    hoveredCardIndex.current = index;
                  }}
                  onMouseLeave={() => {
                    hoveredCardIndex.current = null;
                  }}
                >
                  {/* Fond holographique */}
                  <div style={styles.holographicBackground}></div>

                  {/* Cercles concentriques */}
                  <div style={styles.concentricCircles}>
                    <div style={styles.circle1}></div>
                    <div style={styles.circle2}></div>
                    <div style={styles.circle3}></div>
                  </div>

                  <div style={styles.vortexCardContent}>
                    <div style={styles.metricIconQuantum}>
                      <metric.icon size={32} style={styles.quantumIcon} />
                      <div style={styles.quantumPulse}></div>
                    </div>

                    <div style={styles.metricDataQuantum}>
                      <span style={styles.quantumLabel}>{metric.label}</span>
                      <span style={styles.quantumValue}>
                        {liveMetrics[Object.keys(liveMetrics)[index]] ||
                          metric.value}
                      </span>
                      <div style={styles.quantumTrend}>
                        <TrendingUp size={16} />
                        <span>{metric.trend}</span>
                      </div>
                    </div>

                    {/* Visualisation de données */}
                    <div style={styles.dataVisualization}>
                      {Array.from({ length: 12 }, (_, i) => (
                        <div
                          key={i}
                          style={{
                            ...styles.dataPoint,
                            height: `${
                              20 +
                              Math.sin(
                                (hoveredCardIndex.current === null
                                  ? waveAnimation
                                  : 0) *
                                  0.1 +
                                  i
                              ) *
                                30
                            }%`,
                            background: `hsl(${180 + i * 15}, 70%, 60%)`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Effet de scan */}
                  <div
                    style={{
                      ...styles.scanLine,
                      transform: `translateY(${
                        Math.sin(
                          (hoveredCardIndex.current === null
                            ? waveAnimation
                            : 0) * 0.1
                        ) * 100
                      }%)`,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Terminal de commandement */}
          <div style={styles.commandTerminal}>
            <div style={styles.terminalHeader}>
              <div style={styles.terminalButtons}>
                <div style={styles.terminalButton}></div>
                <div style={styles.terminalButton}></div>
                <div style={styles.terminalButton}></div>
              </div>
              <span style={styles.terminalTitle}>
                🖥️ Resultat des analyses IA
              </span>
            </div>
            <div style={styles.terminalContent}>
              <div style={styles.terminalLine}>
                <span style={styles.terminalPrompt}>trendScope@v1:~$</span>
                <span style={styles.terminalCommand}>
                  monitoring --liveQuantum --ai
                </span>
              </div>
              <div style={styles.terminalOutput}>
                <div>⚡ Taux de conversation moyen des résaux: 18%</div>
                <div>⚡ Nombre de post depuis 24h: 1487 posts</div>
                <div>⚡ Performance prévision IA: 94.8%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION CONTENU VIRAL RÉVOLUTIONNAIRE ===== */}
      <section style={styles.revolutionaryContentSection}>
        <div style={styles.container}>
          <div style={styles.revolutionarySectionHeader}>
            <div style={styles.revolutionaryHeaderBackground}></div>
            <div style={styles.revolutionaryIconContainer}>
              <Play size={32} style={styles.revolutionaryIcon} />
              <div style={styles.iconPulse}></div>
            </div>
            <h2 style={styles.revolutionaryTitle}>
              Contenu
              <span style={styles.titleGradient}>Viral</span>
            </h2>
            <p style={styles.revolutionarySubtitle}>
              Détection instantanée • Contenu viral • Analyse comportementale
            </p>
          </div>

          {/* Contenu principal en 3D */}
          <div style={styles.content3DContainer}>
            <div style={styles.content3DCard}>
              {/* Effet de profondeur */}
              <div style={styles.depthLayers}>
                <div style={styles.layer1}></div>
                <div style={styles.layer2}></div>
                <div style={styles.layer3}></div>
              </div>

              <div style={styles.content3DHeader}>
                <div style={styles.viralBadge}>
                  <Flame size={20} />
                  <span>VIRAL ALERT</span>
                  <div style={styles.badgePulse}></div>
                </div>
                <div style={styles.viralScore}>
                  <span style={styles.scoreLabel}>Score Viral</span>
                  <span style={styles.scoreValue}>
                    {currentVideo.score}/100
                  </span>
                  <div style={styles.scoreBar}>
                    <div
                      style={{
                        ...styles.scoreProgress,
                        width: `${currentVideo.score}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              <div style={styles.content3DBody}>
                <div style={styles.videoThumbnail}>
                  <currentVideo.icon size={48} style={styles.thumbnailIcon} />
                  <div style={styles.playOverlay}>
                    <Play size={24} />
                  </div>
                  <div style={styles.thumbnailGlow}></div>
                </div>

                <div style={styles.videoInfo}>
                  <h3 style={styles.videoTitle}>{currentVideo.title}</h3>
                  <div style={styles.videoMeta}>
                    <span style={styles.videoCreator}>
                      {currentVideo.creator}
                    </span>
                    <div style={styles.videoPlatform}>
                      {currentVideo.platform}
                    </div>
                    <div style={styles.videoCategory}>
                      {currentVideo.category}
                    </div>
                  </div>

                  <div style={styles.videoStats}>
                    <div style={styles.statItem}>
                      <Eye size={18} />
                      <span>{currentVideo.views}</span>
                    </div>
                    <div style={styles.statItem}>
                      <TrendingUp size={18} />
                      <span>{currentVideo.growth}</span>
                    </div>
                    <div style={styles.statItem}>
                      <Share2 size={18} />
                      <span>450K</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Graphique de croissance en temps réel */}
              <div style={styles.growthChart}>
                <h4 style={styles.chartTitle}>📈 Croissance Virale</h4>
                <div style={styles.chartContainer}>
                  {Array.from({ length: 20 }, (_, i) => (
                    <div
                      key={i}
                      style={{
                        ...styles.chartBar3D,
                        height: `${
                          20 +
                          Math.sin(waveAnimation * 0.1 + i * 0.3) * 40 +
                          i * 2
                        }%`,
                        background: `linear-gradient(180deg, 
                          hsl(${320 + i * 2}, 80%, 60%), 
                          hsl(${320 + i * 2}, 80%, 40%))`,
                        boxShadow: `0 0 10px hsl(${320 + i * 2}, 80%, 60%)`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Cartes satellites flottantes */}
            <div style={styles.satelliteCards}>
              {trendingVideos.slice(1, 4).map((video, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.satelliteCard,
                    transform: `translateY(${
                      Math.sin(waveAnimation * 0.05 + index) * 20
                    }px)`,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1.1) translateY(-10px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = `translateY(${
                      Math.sin(waveAnimation * 0.05 + index) * 20
                    }px)`;
                  }}
                >
                  <div style={styles.satelliteIcon}>
                    <video.icon size={24} />
                  </div>
                  <div style={styles.satelliteInfo}>
                    <h5 style={styles.satelliteTitle}>{video.title}</h5>
                    <div style={styles.satelliteStats}>
                      <span>{video.views}</span>
                      <span>{video.growth}</span>
                    </div>
                  </div>
                  <div style={styles.satelliteProgress}>
                    <div
                      style={{
                        ...styles.satelliteBar,
                        width: `${video.score}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Panneau de prédiction IA */}
          <div style={styles.predictionPanel}>
            <div style={styles.predictionHeader}>
              <Brain size={24} />
              <span> Prédictions IA</span>
            </div>
            <div style={styles.predictionContent}>
              <div style={styles.predictionItem}>
                <span style={styles.predictionLabel}>
                  Prochaine tendance virale
                </span>
                <span style={styles.predictionValue}>
                  Dance Challenge #TechVibes
                </span>
                <div style={styles.predictionConfidence}>Confiance: 94%</div>
              </div>
              <div style={styles.predictionItem}>
                <span style={styles.predictionLabel}>
                  Pic dengagement estimé
                </span>
                <span style={styles.predictionValue}>18:30 - 21:00 CET</span>
                <div style={styles.predictionConfidence}>Confiance: 89%</div>
              </div>
              <div style={styles.predictionItem}>
                <span style={styles.predictionLabel}>Plateforme optimale</span>
                <span style={styles.predictionValue}>TikTok + Instagram</span>
                <div style={styles.predictionConfidence}>Confiance: 97%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION HASHTAGS RÉVOLUTIONNAIRE ===== */}
      <section style={styles.revolutionaryHashtagSection}>
        <div style={styles.container}>
          <div style={styles.revolutionarySectionHeader}>
            <div style={styles.revolutionaryHeaderBackground}></div>
            <div style={styles.revolutionaryIconContainer}>
              <Hash size={32} style={styles.revolutionaryIcon} />
              <div style={styles.iconPulse}></div>
            </div>
            <h2 style={styles.revolutionaryTitle}>
              Hashtags
              <span style={styles.titleGradient}>Trending</span>
            </h2>
            <p style={styles.revolutionarySubtitle}>
              Analyse sémantique • Détection émergente • Prédiction des futurs
              hashtags
            </p>
          </div>

          {/* Cloud de hashtags en 3D */}
          <div style={styles.hashtagCloud3D}>
            {trendingHashtags.map((hashtag, index) => {
              const isActive = index === currentHashtag;
              const radius = 200;
              const angle =
                index * (360 / trendingHashtags.length) + waveAnimation;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={index}
                  style={{
                    ...styles.hashtagSphere,
                    transform: `translate3d(${x}px, ${y}px, ${
                      isActive ? 50 : 0
                    }px) scale(${isActive ? 1.3 : 1})`,
                    zIndex: isActive ? 10 : 1,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = `translate3d(${x}px, ${y}px, 100px) scale(1.5)`;
                    e.currentTarget.style.filter =
                      "drop-shadow(0 20px 40px rgba(0, 255, 255, 0.5))";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = `translate3d(${x}px, ${y}px, ${
                      isActive ? 50 : 0
                    }px) scale(${isActive ? 1.3 : 1})`;
                    e.currentTarget.style.filter = "none";
                  }}
                >
                  {/* Sphère holographique */}
                  <div style={styles.sphereHologram}></div>

                  <div style={styles.sphereContent}>
                    <div style={styles.hashtagIcon}>
                      <hashtag.icon size={24} />
                    </div>
                    <h4 style={styles.hashtagText}>{hashtag.tag}</h4>
                    <div style={styles.hashtagMetrics}>
                      <span style={styles.hashtagCount}>{hashtag.count}</span>
                      <span style={styles.hashtagGrowth}>{hashtag.growth}</span>
                    </div>
                    <div style={styles.hashtagReach}>
                      Portée: {hashtag.reach}
                    </div>

                    {/* Indicateur de sentiment */}
                    <div
                      style={{
                        ...styles.sentimentIndicator,
                        background:
                          hashtag.sentiment === "positive"
                            ? "#10b981"
                            : hashtag.sentiment === "negative"
                            ? "#ef4444"
                            : "#f59e0b",
                      }}
                    >
                      {hashtag.sentiment === "positive"
                        ? "😊"
                        : hashtag.sentiment === "negative"
                        ? "😞"
                        : "😐"}
                    </div>
                  </div>

                  {/* Orbites autour du hashtag */}
                  <div style={styles.hashtagOrbits}>
                    <div style={styles.orbit1}></div>
                    <div style={styles.orbit2}></div>
                    <div style={styles.orbit3}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION INFLUENCEURS RÉVOLUTIONNAIRE ===== */}
      <section style={styles.revolutionaryInfluencerSection}>
        <div style={styles.container}>
          <div style={styles.revolutionarySectionHeader}>
            <div style={styles.revolutionaryHeaderBackground}></div>
            <div style={styles.revolutionaryIconContainer}>
              <Star size={32} style={styles.revolutionaryIcon} />
              <div style={styles.iconPulse}></div>
            </div>
            <h2 style={styles.revolutionaryTitle}>
              Influcence
              <span style={styles.titleGradient}>Galaxy</span>
            </h2>
            <p style={styles.revolutionarySubtitle}>
              Mapping des influenceur populaires • Analyse de réseau • Détection
              des secteur émergents
            </p>
          </div>

          {/* Galaxie d'influenceurs */}
          <div style={styles.influencerGalaxy}>
            {/* Influenceur central (étoile principale) */}
            <div style={styles.centralStar}>
              <div style={styles.starCore}>
                <currentInfluencerData.icon size={48} style={styles.starIcon} />
                <div style={styles.starPulse}></div>
              </div>
              <div style={styles.starInfo}>
                <h3 style={styles.starName}>{currentInfluencerData.name}</h3>
                <div style={styles.starTier}>
                  {currentInfluencerData.tier} Influencer
                </div>
                <div style={styles.starStats}>
                  <span>{currentInfluencerData.followers}</span>
                  <span>{currentInfluencerData.engagement}</span>
                </div>
              </div>
              <div style={styles.starAura}></div>
            </div>

            {/* Influenceurs satellites */}
            {topInfluencers.map((influencer, index) => {
              if (index === currentInfluencer) return null;

              const orbitRadius = 150 + index * 30;
              const angle = index * 60 + waveAnimation * 0.5;
              const x = Math.cos((angle * Math.PI) / 180) * orbitRadius;
              const y = Math.sin((angle * Math.PI) / 180) * orbitRadius;

              return (
                <div
                  key={index}
                  style={{
                    ...styles.satelliteInfluencer,
                    transform: `translate3d(${x}px, ${y}px, 0)`,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = `translate3d(${x}px, ${y}px, 50px) scale(1.2)`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1)`;
                  }}
                >
                  <div style={styles.satelliteCore}>
                    <influencer.icon size={28} />
                    <div style={styles.satellitePulse}></div>
                  </div>
                  <div style={styles.satelliteTrail}></div>

                  {/* Tooltip au survol */}
                  <div style={styles.influencerTooltip}>
                    <h5>{influencer.name}</h5>
                    <div>{influencer.category}</div>
                    <div>{influencer.followers}</div>
                  </div>
                </div>
              );
            })}

            {/* Orbites visibles */}
            {[150, 180, 210, 240].map((radius, index) => (
              <div
                key={index}
                style={{
                  ...styles.orbit,
                  width: `${radius * 2}px`,
                  height: `${radius * 2}px`,
                  animationDuration: `${20 + index * 5}s`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION ANALYTICS RÉVOLUTIONNAIRE ===== */}
      <section style={styles.revolutionaryAnalyticsSection}>
        <div style={styles.container}>
          <div style={styles.revolutionarySectionHeader}>
            <div style={styles.revolutionaryHeaderBackground}></div>
            <div style={styles.revolutionaryIconContainer}>
              <Brain size={32} style={styles.revolutionaryIcon} />
              <div style={styles.iconPulse}></div>
            </div>
            <h2 style={styles.revolutionaryTitle}>
              Intel
              <span style={styles.titleGradient}>Scanner</span>
            </h2>
            <p style={styles.revolutionarySubtitle}>
              Prédictions IA • Résumé des données • Prévisions de tendances
              virales
            </p>
          </div>

          {/* Modules d'analyse en orbite */}
          <div style={styles.analyticsModules}>
            {[
              { title: "Tendances", icon: Target, color: "#00ff88" },
              { title: "Sentiment social", icon: Heart, color: "#ff0080" },
              { title: "Top musiques", icon: Activity, color: "#0088ff" },
              { title: "Ventes", icon: BarChart3, color: "#ff8800" },
            ].map((module, index) => {
              const orbitRadius = 250;
              const angle = index * 90 + waveAnimation;
              const x = Math.cos((angle * Math.PI) / 180) * orbitRadius;
              const y = Math.sin((angle * Math.PI) / 180) * orbitRadius;

              return (
                <div
                  key={index}
                  style={{
                    ...styles.analyticsModule,
                    transform: `translate3d(${x}px, ${y}px, 0)`,
                    borderColor: module.color,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = `translate3d(${x}px, ${y}px, 50px) scale(1.2)`;
                    e.currentTarget.style.boxShadow = `0 20px 40px ${module.color}40`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1)`;
                    e.currentTarget.style.boxShadow =
                      "0 10px 20px rgba(0, 0, 0, 0.3)";
                  }}
                >
                  <div
                    style={{
                      ...styles.moduleIcon,
                      background: `linear-gradient(135deg, ${module.color}, ${module.color}80)`,
                    }}
                  >
                    <module.icon size={28} style={{ color: "white" }} />
                  </div>
                  <h4 style={styles.moduleTitle}>{module.title}</h4>

                  {/* Visualisation de données pour chaque module */}
                  <div style={styles.moduleVisualization}>
                    {index === 0 && ( // Prédiction Trends
                      <div style={styles.trendLines}>
                        {Array.from({ length: 5 }, (_, i) => (
                          <div
                            key={i}
                            style={{
                              ...styles.trendLine,
                              height: `${
                                20 + Math.sin(waveAnimation * 0.1 + i) * 30
                              }%`,
                              background: module.color,
                            }}
                          />
                        ))}
                      </div>
                    )}

                    {index === 1 && (
                      <div style={styles.sentimentWheel}>
                        <div style={styles.sentimentPositive}>😊 67%</div>
                        <div style={styles.sentimentNeutral}>😐 23%</div>
                        <div style={styles.sentimentNegative}>😞 10%</div>
                      </div>
                    )}

                    {index === 2 && (
                      <div style={styles.behaviorHeatmap}>
                        {opacities.map((opacity, i) => (
                          <div
                            key={i}
                            style={{
                              ...styles.heatmapCell,
                              opacity,
                              background: module.color,
                            }}
                          />
                        ))}
                      </div>
                    )}

                    {index === 3 && (
                      <div style={styles.marketRadar}>
                        <div style={styles.radarGrid}>
                          {Array.from({ length: 3 }, (_, i) => (
                            <div
                              key={i}
                              style={{
                                ...styles.radarRing,
                                width: `${30 + i * 25}%`,
                                height: `${30 + i * 25}%`,
                              }}
                            />
                          ))}
                        </div>
                        <div style={styles.radarSweep}></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dashboard quantique amélioré */}
          <div
            style={{
              ...styles.quantumDashboard,
              background:
                "linear-gradient(135deg, rgba(11,15,41,0.8) 0%, rgba(21,25,61,0.9) 100%)",
              borderRadius: "24px",
              padding: "32px",
              boxShadow: "0 30px 60px rgba(0,255,255,0.15)",
              border: "1px solid rgba(0, 255, 255, 0.2)",
              backdropFilter: "blur(12px)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Effet de particules quantiques en arrière-plan */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(circle at 20% 30%, 
      rgba(0, 255, 255, 0.15) 0%, 
      transparent 40%)`,
                zIndex: 0,
              }}
            ></div>

            <h3
              style={{
                ...styles.quantumTitle,
                fontSize: "28px",
                fontWeight: 600,
                background: "linear-gradient(90deg, #00ffff 0%, #00ffaa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: "center",
                marginBottom: "32px",
                position: "relative",
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontFamily: '"Rajdhani", sans-serif',
              }}
            >
              QUANTUM ANALYTICS DASHBOARD
            </h3>

            <div
              style={{
                ...styles.quantumGrid,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
                position: "relative",
              }}
            >
              {/* Carte des prédictions futures */}
              <div
                style={{
                  ...styles.quantumCard,
                  background: "rgba(16, 22, 56, 0.7)",
                  borderRadius: "16px",
                  padding: "24px",
                  border: "1px solid rgba(0, 255, 255, 0.2)",
                  boxShadow: "0 10px 30px rgba(0, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                  ":hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 15px 35px rgba(0, 255, 255, 0.2)",
                  },
                }}
              >
                <h4
                  style={{
                    fontSize: "20px",
                    color: "#00ffff",
                    marginBottom: "20px",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#00ffff",
                      boxShadow: "0 0 10px #00ffff",
                    }}
                  ></span>
                  PRÉDICTIONS FUTURES
                </h4>

                <div
                  style={{
                    ...styles.quantumVisualization,
                    height: "200px",
                    position: "relative",
                    marginBottom: "24px",
                  }}
                >
                  <div
                    style={{
                      ...styles.quantumSphere,
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "150px",
                      height: "150px",
                    }}
                  >
                    <div
                      style={{
                        ...styles.sphereRings,
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          style={{
                            ...styles.sphereRing,
                            position: "absolute",
                            width: `${100 - i * 15}%`,
                            height: `${100 - i * 15}%`,
                            border: `1px solid rgba(0, 255, 255, ${
                              0.3 + i * 0.1
                            })`,
                            borderRadius: "50%",
                            animation: `pulse 3s infinite ${i * 0.2}s`,
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        />
                      ))}
                    </div>
                    <div
                      style={{
                        ...styles.quantumCore,
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "40px",
                        filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.7))",
                      }}
                    >
                      ⚛️
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    ...styles.quantumData,
                    color: "#e0e0e0",
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                >
                  <div>
                    <span style={{ color: "#00ffff" }}>›</span> Prochaine
                    viralité:
                    <span style={{ color: "#00ffaa", fontWeight: 500 }}>
                      {" "}
                      94% probable
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "#00ffff" }}>›</span> Temps estimé:
                    <span style={{ color: "#ffffff", fontWeight: 500 }}>
                      {" "}
                      2h 34min
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "#00ffff" }}>›</span> Plateforme
                    cible:
                    <span style={{ color: "#ff00aa", fontWeight: 500 }}>
                      {" "}
                      TikTok
                    </span>
                  </div>
                </div>
              </div>

              {/* Carte ADN Viral */}
              <div
                style={{
                  ...styles.quantumCard,
                  background: "rgba(16, 22, 56, 0.7)",
                  borderRadius: "16px",
                  padding: "24px",
                  border: "1px solid rgba(255, 0, 255, 0.2)",
                  boxShadow: "0 10px 30px rgba(255, 0, 255, 0.1)",
                  transition: "all 0.3s ease",
                  ":hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 15px 35px rgba(255, 0, 255, 0.2)",
                  },
                }}
              >
                <h4
                  style={{
                    fontSize: "20px",
                    color: "#ff00ff",
                    marginBottom: "20px",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#ff00ff",
                      boxShadow: "0 0 10px #ff00ff",
                    }}
                  ></span>
                  🧬 ADN VIRAL
                </h4>

                <div
                  style={{
                    ...styles.dnaVisualization,
                    height: "200px",
                    position: "relative",
                    marginBottom: "24px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      ...styles.dnaHelix,
                      position: "relative",
                      width: "120px",
                      height: "120px",
                    }}
                  >
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        style={{
                          ...styles.dnaSegment,
                          position: "absolute",
                          width: "4px",
                          height: "40px",
                          background:
                            "linear-gradient(180deg, #ff00ff, #00ffff)",
                          left: "50%",
                          top: "50%",
                          transformOrigin: "center",
                          transform: `rotateZ(${i * 36}deg) rotateY(${
                            waveAnimation * 2
                          }deg)`,
                          borderRadius: "4px",
                          boxShadow: "0 0 10px rgba(255, 0, 255, 0.7)",
                          animation: "glow 2s infinite alternate",
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    ...styles.quantumData,
                    color: "#e0e0e0",
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                >
                  <div>
                    <span style={{ color: "#ff00ff" }}>›</span> Séquences
                    analysées:
                    <span style={{ color: "#ffffff", fontWeight: 500 }}>
                      {" "}
                      2.3M
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "#ff00ff" }}>›</span> Patterns
                    détectés:
                    <span style={{ color: "#00ffaa", fontWeight: 500 }}>
                      {" "}
                      47
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "#ff00ff" }}>›</span> Mutations
                    prédites:
                    <span style={{ color: "#ffff00", fontWeight: 500 }}>
                      {" "}
                      12
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER MODERNE (INCHANGÉ) ===== */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerContent}>
            <div style={styles.footerBrand}>
              <h3 style={styles.footerTitle}>TrendScope</h3>
              <p style={styles.footerDescription}>
                Plateforme dintelligence artificielle pour analyser les
                tendances des réseaux sociaux en temps réel. 🚀
              </p>
            </div>
            <div style={styles.footerLinks}>
              <div style={styles.footerColumn}>
                <h4 style={styles.footerColumnTitle}>Produit</h4>
                <a href="#" style={styles.footerLink}>
                  Analytics
                </a>
                <a href="#" style={styles.footerLink}>
                  Prédictions
                </a>
                <a href="#" style={styles.footerLink}>
                  API
                </a>
                <a href="#" style={styles.footerLink}>
                  Intégrations
                </a>
              </div>
              <div style={styles.footerColumn}>
                <h4 style={styles.footerColumnTitle}>Ressources</h4>
                <a href="#" style={styles.footerLink}>
                  Documentation
                </a>
                <a href="#" style={styles.footerLink}>
                  Guides
                </a>
                <a href="#" style={styles.footerLink}>
                  Blog
                </a>
                <a href="#" style={styles.footerLink}>
                  Status
                </a>
              </div>
              <div style={styles.footerColumn}>
                <h4 style={styles.footerColumnTitle}>Support</h4>
                <a href="#" style={styles.footerLink}>
                  Centre daide
                </a>
                <a href="#" style={styles.footerLink}>
                  Contact
                </a>
                <a href="#" style={styles.footerLink}>
                  Communauté
                </a>
                <a href="#" style={styles.footerLink}>
                  Feedback
                </a>
              </div>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p style={styles.footerCopyright}>
              © 2024 TrendScope. Powered by Advanced AI Technology. ✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  // ===== CONTAINER GLOBAL =====
  pageContainer: {
    width: "100%",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },

  // ===== HERO SECTION MODERNE =====
  heroSection: {
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    background:
      "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8b5cf6 100%)",
  },

  heroBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      linear-gradient(135deg, 
        rgba(102, 126, 234, 0.1) 0%, 
        rgba(118, 75, 162, 0.1) 25%,
        rgba(255, 255, 255, 0.95) 50%, 
        rgba(139, 92, 246, 0.1) 75%,
        rgba(217, 70, 239, 0.1) 100%
      )
    `,
    backdropFilter: "blur(10px)",
    zIndex: 1,
  },

  floatingElements: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
    zIndex: 2,
  },

  floatingElement: {
    position: "absolute",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(217, 70, 239, 0.3))",
    filter: "blur(1px)",
    animation: "float 6s ease-in-out infinite",
  },

  floatingElement1: {
    width: "300px",
    height: "300px",
    top: "10%",
    right: "10%",
    animationDelay: "0s",
  },

  floatingElement2: {
    width: "200px",
    height: "200px",
    bottom: "20%",
    left: "5%",
    animationDelay: "2s",
  },

  floatingElement3: {
    width: "150px",
    height: "150px",
    top: "60%",
    right: "30%",
    animationDelay: "4s",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 32px",
    position: "relative",
    zIndex: 10,
  },

  heroContent: {
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
    paddingTop: "120px",
    paddingBottom: "120px",
  },

  badgeContainer: {
    marginBottom: "32px",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 20px",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "30px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#1f2937",
    boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
  },

  badgeIcon: {
    color: "#f59e0b",
  },

  title: {
    fontSize: "4rem",
    fontWeight: "900",
    lineHeight: "1.1",
    marginBottom: "24px",
    color: "#111827",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    letterSpacing: "-0.02em",
  },

  titleHighlight: {
    background:
      "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8b5cf6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  description: {
    fontSize: "1.25rem",
    lineHeight: "1.7",
    color: "#4b5563",
    marginBottom: "48px",
    maxWidth: "600px",
    margin: "0 auto 48px",
    fontWeight: "400",
  },

  platformIndicator: {
    display: "inline-flex",
    alignItems: "center",
    gap: "16px",
    padding: "20px 28px",
    background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "20px",
    marginBottom: "48px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
  },

  platformIconContainer: {
    width: "48px",
    height: "48px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
  },

  platformIconSvg: {
    transition: "all 0.3s ease",
  },

  platformDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  platformLabel: {
    fontSize: "12px",
    color: "#6b7280",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },

  platformName: {
    fontSize: "18px",
    color: "#111827",
    fontWeight: "700",
    marginTop: "2px",
  },

  platformGrowthBadge: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "8px 12px",
    background: "linear-gradient(135deg, #dcfce7, #bbf7d0)",
    color: "#166534",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "700",
    border: "1px solid rgba(22, 101, 52, 0.2)",
  },

  heroActions: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginBottom: "64px",
    flexWrap: "wrap",
  },

  primaryAction: {
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    padding: "18px 36px",
    background:
      "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8b5cf6 100%)",
    color: "white",
    border: "none",
    borderRadius: "16px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
    position: "relative",
    overflow: "hidden",
  },

  secondaryAction: {
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    padding: "18px 36px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(20px)",
    color: "#374151",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "16px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },

  heroStats: {
    display: "flex",
    justifyContent: "center",
    gap: "64px",
    flexWrap: "wrap",
  },

  heroStat: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "16px 24px",
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(20px)",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",
  },

  statIconContainer: {
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  statIcon: {
    color: "white",
  },

  statContent: {
    display: "flex",
    flexDirection: "column",
  },

  statValue: {
    fontSize: "1.75rem",
    fontWeight: "800",
    color: "#111827",
    lineHeight: "1",
  },

  statLabel: {
    fontSize: "14px",
    color: "#6b7280",
    fontWeight: "600",
    marginTop: "2px",
  },

  // ===== SECTION PLATEFORMES =====
  revolutionaryPlatformsSection: {
    padding: "150px 0",
    position: "relative",
    overflow: "hidden",
    background:
      "linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)",
    perspective: "1000px",
  },

  revolutionaryBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
  },

  particle: {
    position: "absolute",
    background: "radial-gradient(circle, #00ffff, transparent)",
    borderRadius: "50%",
    animation: "particleFloat 3s ease-in-out infinite",
    pointerEvents: "none",
  },

  revolutionarySectionHeader: {
    textAlign: "center",
    marginBottom: "100px",
    position: "relative",
    zIndex: 10,
  },

  revolutionaryHeaderBackground: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "200px",
    height: "200px",
    background: "radial-gradient(circle, rgba(0, 255, 255, 0.1), transparent)",
    borderRadius: "50%",
    filter: "blur(20px)",
  },

  revolutionaryIconContainer: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
    height: "100px",
    background:
      "linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2))",
    backdropFilter: "blur(20px)",
    borderRadius: "30px",
    marginBottom: "40px",
    border: "2px solid rgba(0, 255, 255, 0.3)",
    boxShadow: "0 20px 40px rgba(0, 255, 255, 0.2)",
  },

  revolutionaryIcon: {
    color: "#00ffff",
    filter: "drop-shadow(0 0 10px #00ffff)",
  },

  iconPulse: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: "2px solid #00ffff",
    borderRadius: "30px",
    animation: "iconPulse 2s ease-in-out infinite",
  },

  revolutionaryTitle: {
    fontSize: "4rem",
    fontWeight: "900",
    color: "#ffffff",
    marginBottom: "20px",
    letterSpacing: "-0.02em",
    textShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
  },

  titleGradient: {
    background: "linear-gradient(90deg, #00ffff, #ff00ff, #ffff00)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    animation: "textShimmer 3s ease-in-out infinite",
  },

  revolutionarySubtitle: {
    fontSize: "1.4rem",
    color: "rgba(255, 255, 255, 0.8)",
    fontWeight: "500",
    textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
  },

  // Grid hexagonal
  hexagonalGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "60px",
    position: "relative",
    zIndex: 10,
    marginBottom: "100px",
  },

  hexagonCard: {
    position: "relative",
    background:
      "linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))",
    backdropFilter: "blur(25px)",
    border: "2px solid rgba(0, 255, 255, 0.3)",
    borderRadius: "30px",
    padding: "40px",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    transformStyle: "preserve-3d",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    overflow: "hidden",
  },

  hologramEffect: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "30px",
    opacity: 0.3,
    animation: "hologramScan 2s ease-in-out infinite",
  },

  hexagonContent: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
  },

  platformMegaIcon: {
    width: "80px",
    height: "80px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 30px",
    position: "relative",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
  },

  iconGlow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "20px",
    background: "inherit",
    filter: "blur(10px)",
    opacity: 0.7,
    animation: "iconGlow 2s ease-in-out infinite",
  },

  platformMegaTitle: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "30px",
    textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
  },

  platformMetrics: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
  },

  metricItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  metricLabel: {
    fontSize: "12px",
    color: "rgba(255, 255, 255, 0.7)",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    marginBottom: "8px",
  },

  metricValue: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#00ffff",
    textShadow: "0 0 10px #00ffff",
  },

  platformProgress: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "30px",
  },

  progressBar: {
    flex: 1,
    height: "8px",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "4px",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: "4px",
    animation: "progressFill 2s ease-in-out infinite",
  },

  growthBadge: {
    padding: "8px 12px",
    background: "rgba(0, 255, 255, 0.2)",
    color: "#00ffff",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "700",
    border: "1px solid rgba(0, 255, 255, 0.3)",
    textShadow: "0 0 10px #00ffff",
  },

  futuristicChart: {
    display: "flex",
    alignItems: "flex-end",
    height: "60px",
    gap: "4px",
    justifyContent: "center",
  },

  chartColumn: {
    width: "12px",
    borderRadius: "6px 6px 0 0",
    animation: "chartPulse 2s ease-in-out infinite",
    boxShadow: "0 0 10px currentColor",
  },

  neonBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "30px",
    border: "2px solid transparent",
    animation: "neonPulse 3s ease-in-out infinite",
  },

  centralControlPanel: {
    position: "relative",
    background:
      "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 255, 255, 0.1))",
    backdropFilter: "blur(30px)",
    border: "2px solid rgba(0, 255, 255, 0.3)",
    borderRadius: "30px",
    padding: "50px",
    textAlign: "center",
    boxShadow: "0 30px 60px rgba(0, 255, 255, 0.2)",
  },

  controlPanelGlow: {
    position: "absolute",
    top: "-2px",
    left: "-2px",
    right: "-2px",
    bottom: "-2px",
    background: "linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ffff)",
    borderRadius: "30px",
    opacity: 0.3,
    filter: "blur(10px)",
    animation: "panelGlow 4s linear infinite",
    zIndex: -1,
  },

  controlPanelContent: {
    position: "relative",
    zIndex: 2,
  },

  controlPanelTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "30px",
    textShadow: "0 0 15px rgba(0, 255, 255, 0.7)",
  },

  controlMetrics: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "30px",
  },

  controlMetric: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
  },

  statusDot: {
    width: "12px",
    height: "12px",
    background: "#00ff00",
    borderRadius: "50%",
    animation: "statusPulse 1.5s ease-in-out infinite",
    boxShadow: "0 0 10px #00ff00",
  },

  // ===== SECTION MÉTRIQUES LIVE =====
  revolutionaryLiveSection: {
    padding: "150px 0",
    position: "relative",
    overflow: "hidden",
    background:
      "linear-gradient(135deg, #000000 0%, #1a0033 50%, #330066 100%)",
  },

  matrixBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
    opacity: 0.3,
  },

  matrixColumn: {
    position: "absolute",
    color: "#00ff41",
    fontSize: "14px",
    fontFamily: "monospace",
    animation: "matrixRain linear infinite",
    textShadow: "0 0 5px #00ff41",
  },

  matrixChar: {
    display: "block",
    lineHeight: "20px",
    opacity: Math.random(),
  },

  vortexGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "80px",
    position: "relative",
    zIndex: 10,
    marginBottom: "100px",
  },

  vortexCard: {
    position: "relative",
    background:
      "linear-gradient(135deg, rgba(255, 0, 255, 0.1), rgba(0, 255, 255, 0.1))",
    backdropFilter: "blur(25px)",
    border: "2px solid rgba(0, 255, 255, 0.3)",
    borderRadius: "25px",
    padding: "40px",
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    transformStyle: "preserve-3d",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
    overflow: "hidden",
  },

  holographicBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.1), transparent)",
    borderRadius: "25px",
    animation: "holographicScan 3s ease-in-out infinite",
  },

  concentricCircles: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "200px",
    height: "200px",
  },

  circle1: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60px",
    height: "60px",
    border: "2px solid rgba(0, 255, 255, 0.3)",
    borderRadius: "50%",
    animation: "circleExpand 3s ease-in-out infinite",
  },

  circle2: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100px",
    height: "100px",
    border: "2px solid rgba(255, 0, 255, 0.3)",
    borderRadius: "50%",
    animation: "circleExpand 3s ease-in-out infinite 0.5s",
  },

  circle3: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "140px",
    height: "140px",
    border: "2px solid rgba(255, 255, 0, 0.3)",
    borderRadius: "50%",
    animation: "circleExpand 3s ease-in-out infinite 1s",
  },

  vortexCardContent: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
  },

  metricIconQuantum: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80px",
    height: "80px",
    background:
      "linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2))",
    borderRadius: "20px",
    marginBottom: "30px",
    border: "2px solid rgba(0, 255, 255, 0.4)",
  },

  quantumIcon: {
    color: "#00ffff",
    filter: "drop-shadow(0 0 10px #00ffff)",
  },

  quantumPulse: {
    position: "absolute",
    top: "-4px",
    left: "-4px",
    right: "-4px",
    bottom: "-4px",
    border: "2px solid #00ffff",
    borderRadius: "20px",
    animation: "quantumPulse 2s ease-in-out infinite",
  },

  metricDataQuantum: {
    marginBottom: "30px",
  },

  quantumLabel: {
    display: "block",
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.7)",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: "10px",
  },

  quantumValue: {
    display: "block",
    fontSize: "3rem",
    fontWeight: "900",
    color: "#ffffff",
    marginBottom: "15px",
    textShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
    lineHeight: "1",
  },

  quantumTrend: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    color: "#00ff88",
    fontSize: "16px",
    fontWeight: "700",
  },

  dataVisualization: {
    display: "flex",
    alignItems: "flex-end",
    height: "60px",
    gap: "3px",
    justifyContent: "center",
    marginBottom: "20px",
  },

  dataPoint: {
    width: "8px",
    borderRadius: "4px 4px 0 0",
    animation: "dataPointPulse 2s ease-in-out infinite",
    boxShadow: "0 0 8px currentColor",
  },

  scanLine: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "2px",
    background: "linear-gradient(90deg, transparent, #00ffff, transparent)",
    animation: "scanLineMove 2s ease-in-out infinite",
  },

  // Terminal de commandement
  commandTerminal: {
    marginTop: "150px",
    background:
      "linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 50, 0, 0.9))",
    backdropFilter: "blur(20px)",
    border: "2px solid rgba(0, 255, 0, 0.3)",
    borderRadius: "15px",
    overflow: "hidden",
    fontFamily: "monospace",
    boxShadow: "0 20px 40px rgba(0, 255, 0, 0.2)",
  },

  terminalHeader: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "15px 20px",
    background: "rgba(0, 0, 0, 0.5)",
    borderBottom: "1px solid rgba(0, 255, 0, 0.3)",
  },

  terminalButtons: {
    display: "flex",
    gap: "8px",
  },

  terminalButton: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: "#ff5f56",
  },

  terminalTitle: {
    color: "#00ff00",
    fontSize: "14px",
    fontWeight: "600",
  },

  terminalContent: {
    padding: "20px",
  },

  terminalLine: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },

  terminalPrompt: {
    color: "#00ff00",
    fontWeight: "600",
  },

  terminalCommand: {
    color: "#ffffff",
  },

  terminalOutput: {
    color: "#00ff88",
    lineHeight: "1.6",
  },

  // ===== SECTION CONTENU VIRAL =====
  revolutionaryContentSection: {
    padding: "150px 0",
    position: "relative",
    overflow: "hidden",
    background:
      "linear-gradient(135deg, #ff0080 0%, #ff8c00 25%, #ffd700 50%, #ff4500 75%, #dc143c 100%)",
  },

  content3DContainer: {
    position: "relative",
    marginBottom: "100px",
  },

  content3DCard: {
    position: "relative",
    background:
      "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.1))",
    backdropFilter: "blur(30px)",
    border: "3px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "30px",
    padding: "50px",
    transform: "perspective(1000px) rotateX(5deg)",
    boxShadow: "0 50px 100px rgba(0, 0, 0, 0.5)",
    overflow: "hidden",
  },

  depthLayers: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  layer1: {
    position: "absolute",
    top: "10px",
    left: "10px",
    right: "10px",
    bottom: "10px",
    background: "rgba(255, 0, 128, 0.1)",
    borderRadius: "25px",
    filter: "blur(5px)",
  },

  layer2: {
    position: "absolute",
    top: "20px",
    left: "20px",
    right: "20px",
    bottom: "20px",
    background: "rgba(255, 140, 0, 0.1)",
    borderRadius: "20px",
    filter: "blur(10px)",
  },

  layer3: {
    position: "absolute",
    top: "30px",
    left: "30px",
    right: "30px",
    bottom: "30px",
    background: "rgba(255, 215, 0, 0.1)",
    borderRadius: "15px",
    filter: "blur(15px)",
  },

  content3DHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
    position: "relative",
    zIndex: 2,
  },

  viralBadge: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "15px 25px",
    background: "linear-gradient(135deg, #ff0080, #ff4500)",
    color: "#ffffff",
    borderRadius: "25px",
    fontSize: "16px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 10px 20px rgba(255, 0, 128, 0.3)",
  },

  badgePulse: {
    position: "absolute",
    top: "-3px",
    left: "-3px",
    right: "-3px",
    bottom: "-3px",
    border: "2px solid #ff0080",
    borderRadius: "25px",
    animation: "badgePulse 2s ease-in-out infinite",
  },

  viralScore: {
    textAlign: "right",
  },

  scoreLabel: {
    display: "block",
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: "8px",
  },

  scoreValue: {
    display: "block",
    fontSize: "2.5rem",
    fontWeight: "900",
    color: "#ffffff",
    marginBottom: "15px",
    textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
  },

  scoreBar: {
    width: "200px",
    height: "8px",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "4px",
    overflow: "hidden",
  },

  scoreProgress: {
    height: "100%",
    background: "linear-gradient(90deg, #ff0080, #ff4500, #ffd700)",
    borderRadius: "4px",
    animation: "scoreProgress 3s ease-in-out infinite",
  },

  content3DBody: {
    display: "flex",
    gap: "50px",
    alignItems: "center",
    marginBottom: "50px",
    position: "relative",
    zIndex: 2,
  },

  videoThumbnail: {
    position: "relative",
    width: "200px",
    height: "200px",
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
    backdropFilter: "blur(20px)",
    border: "3px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  thumbnailIcon: {
    color: "#ffffff",
    filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))",
  },

  playOverlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60px",
    height: "60px",
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000000",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  thumbnailGlow: {
    position: "absolute",
    top: "-10px",
    left: "-10px",
    right: "-10px",
    bottom: "-10px",
    background: "linear-gradient(45deg, #ff0080, #ff4500, #ffd700)",
    borderRadius: "30px",
    opacity: 0.3,
    filter: "blur(15px)",
    animation: "thumbnailGlow 3s ease-in-out infinite",
    zIndex: -1,
  },

  videoInfo: {
    flex: 1,
  },

  videoTitle: {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: "20px",
    textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
  },

  videoMeta: {
    display: "flex",
    gap: "20px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },

  videoCreator: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "18px",
    fontWeight: "600",
  },

  videoPlatform: {
    padding: "8px 15px",
    background: "rgba(255, 255, 255, 0.2)",
    color: "#ffffff",
    borderRadius: "15px",
    fontSize: "14px",
    fontWeight: "600",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },

  videoCategory: {
    padding: "8px 15px",
    background: "linear-gradient(135deg, #ff0080, #ff4500)",
    color: "#ffffff",
    borderRadius: "15px",
    fontSize: "14px",
    fontWeight: "600",
  },

  videoStats: {
    display: "flex",
    gap: "30px",
  },

  statItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: "600",
  },

  growthChart: {
    position: "relative",
    zIndex: 2,
  },

  chartTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "20px",
    textAlign: "center",
  },

  chartContainer: {
    display: "flex",
    alignItems: "flex-end",
    height: "100px",
    gap: "5px",
    justifyContent: "center",
  },

  chartBar3D: {
    width: "15px",
    borderRadius: "8px 8px 0 0",
    transform: "perspective(100px) rotateX(45deg)",
    animation: "chartBar3D 2s ease-in-out infinite",
    transformOrigin: "bottom",
  },

  satelliteCards: {
    position: "absolute",
    top: "0",
    right: "-50px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  satelliteCard: {
    width: "250px",
    padding: "20px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(20px)",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "20px",
    transition: "all 0.3s ease",
  },

  satelliteIcon: {
    width: "40px",
    height: "40px",
    background: "linear-gradient(135deg, #ff0080, #ff4500)",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    marginBottom: "15px",
  },

  satelliteInfo: {
    marginBottom: "15px",
  },

  satelliteTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: "8px",
  },

  satelliteStats: {
    display: "flex",
    gap: "15px",
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.8)",
  },

  satelliteProgress: {
    height: "4px",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "2px",
    overflow: "hidden",
  },

  satelliteBar: {
    height: "100%",
    background: "linear-gradient(90deg, #ff0080, #ff4500)",
    borderRadius: "2px",
    transition: "width 0.3s ease",
  },

  predictionPanel: {
    background:
      "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.1))",
    backdropFilter: "blur(30px)",
    border: "3px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "25px",
    padding: "40px",
    boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)",
  },

  predictionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "30px",
    fontSize: "20px",
    fontWeight: "700",
    color: "#ffffff",
  },

  predictionContent: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },

  predictionItem: {
    padding: "25px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
  },

  predictionLabel: {
    display: "block",
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },

  predictionValue: {
    display: "block",
    fontSize: "18px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "10px",
  },

  predictionConfidence: {
    fontSize: "14px",
    color: "#00ff88",
    fontWeight: "600",
  },

  // ===== SECTION HASHTAGS =====
  revolutionaryHashtagSection: {
    padding: "150px 0",
    position: "relative",
    overflow: "hidden",
    background:
      "linear-gradient(135deg, #ffb347 0%, #ffcc5c 25%, #ffd700 50%, #ff8c69 75%, #ff7f50 100%)",
    perspective: "1000px",
  },

  hashtagCloud3D: {
    position: "relative",
    height: "600px",
    marginBottom: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  hashtagSphere: {
    position: "absolute",
    width: "200px",
    height: "200px",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    transformStyle: "preserve-3d",
    cursor: "pointer",
  },

  sphereHologram: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(45deg, rgba(255, 255, 255, 0.1), transparent, rgba(255, 255, 255, 0.1))",
    borderRadius: "50%",
    animation: "sphereHologram 3s ease-in-out infinite",
  },

  sphereContent: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.1))",
    backdropFilter: "blur(20px)",
    border: "3px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center",
  },

  hashtagIcon: {
    width: "40px",
    height: "40px",
    background: "linear-gradient(135deg, #ffd700, #ff8c69)",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    marginBottom: "10px",
  },

  hashtagText: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "8px",
    textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
  },

  hashtagMetrics: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    marginBottom: "8px",
  },

  hashtagCount: {
    fontSize: "12px",
    color: "#ffd700",
    fontWeight: "600",
  },

  hashtagGrowth: {
    fontSize: "12px",
    color: "#00ff88",
    fontWeight: "600",
  },

  hashtagReach: {
    fontSize: "10px",
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: "8px",
  },

  sentimentIndicator: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
  },

  hashtagOrbits: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  orbit1: {
    position: "absolute",
    width: "220px",
    height: "220px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "50%",
    animation: "orbitRotate 10s linear infinite",
  },

  orbit2: {
    position: "absolute",
    width: "260px",
    height: "260px",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    borderRadius: "50%",
    animation: "orbitRotate 15s linear infinite reverse",
  },

  orbit3: {
    position: "absolute",
    width: "300px",
    height: "300px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "50%",
    animation: "orbitRotate 20s linear infinite",
  },

  hashtagControlCenter: {
    background:
      "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.1))",
    backdropFilter: "blur(30px)",
    border: "3px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "25px",
    padding: "50px",
    marginBottom: "50px",
  },

  controlCenterHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
  },

  controlCenterTitle: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#ffffff",
    textShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
  },

  networkStatus: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#00ff88",
    fontSize: "16px",
    fontWeight: "600",
  },

  statusIndicator: {
    width: "12px",
    height: "12px",
    background: "#00ff88",
    borderRadius: "50%",
    animation: "statusPulse 1.5s ease-in-out infinite",
    boxShadow: "0 0 10px #00ff88",
  },

  networkVisualization: {
    position: "relative",
    height: "200px",
    marginBottom: "40px",
    background: "rgba(0, 0, 0, 0.3)",
    borderRadius: "15px",
    overflow: "hidden",
  },

  networkNodes: {
    position: "relative",
    width: "100%",
    height: "100%",
  },

  networkNode: {
    position: "absolute",
    width: "20px",
    height: "20px",
    transform: "translate(-50%, -50%)",
  },

  nodeCore: {
    width: "100%",
    height: "100%",
    background: "radial-gradient(circle, #00ffff, #0080ff)",
    borderRadius: "50%",
    boxShadow: "0 0 15px #00ffff",
  },

  nodePulse: {
    position: "absolute",
    top: "-5px",
    left: "-5px",
    right: "-5px",
    bottom: "-5px",
    border: "2px solid #00ffff",
    borderRadius: "50%",
    animation: "nodePulse 2s ease-in-out infinite",
  },

  networkSvg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  },

  networkConnection: {
    animation: "connectionPulse 3s ease-in-out infinite",
  },

  hashtagAnalytics: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "30px",
  },

  analyticsItem: {
    padding: "20px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "15px",
    textAlign: "center",
    border: "2px solid rgba(255, 255, 255, 0.2)",
  },

  analyticsLabel: {
    display: "block",
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },

  analyticsValue: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#ffffff",
    textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
  },

  // ===== SECTION INFLUENCEURS =====
  revolutionaryInfluencerSection: {
    padding: "150px 0",
    position: "relative",
    overflow: "hidden",
    background:
      "linear-gradient(135deg, #e91e63 0%, #9c27b0 25%, #673ab7 50%, #3f51b5 75%, #2196f3 100%)",
    perspective: "1000px",
  },

  influencerGalaxy: {
    position: "relative",
    height: "600px",
    marginBottom: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  centralStar: {
    position: "relative",
    zIndex: 10,
  },

  starCore: {
    position: "relative",
    width: "150px",
    height: "150px",
    background:
      "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.1))",
    backdropFilter: "blur(20px)",
    border: "3px solid rgba(255, 255, 255, 0.4)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 50px rgba(255, 255, 255, 0.3)",
  },

  starIcon: {
    color: "#ffffff",
    filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.7))",
  },

  starPulse: {
    position: "absolute",
    top: "-10px",
    left: "-10px",
    right: "-10px",
    bottom: "-10px",
    border: "3px solid rgba(255, 255, 255, 0.6)",
    borderRadius: "50%",
    animation: "starPulse 3s ease-in-out infinite",
  },

  starInfo: {
    position: "absolute",
    top: "170px",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    whiteSpace: "nowrap",
  },

  starName: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "8px",
    textShadow: "0 0 15px rgba(255, 255, 255, 0.7)",
  },

  starTier: {
    fontSize: "14px",
    color: "#ffd700",
    fontWeight: "600",
    marginBottom: "10px",
  },

  starStats: {
    display: "flex",
    gap: "15px",
    fontSize: "12px",
    color: "rgba(255, 255, 255, 0.8)",
  },

  starAura: {
    position: "absolute",
    top: "-30px",
    left: "-30px",
    right: "-30px",
    bottom: "-30px",
    background:
      "radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent)",
    borderRadius: "50%",
    animation: "starAura 4s ease-in-out infinite",
  },

  satelliteInfluencer: {
    position: "absolute",
    transition: "all 0.3s ease",
    transformStyle: "preserve-3d",
  },

  satelliteCore: {
    position: "relative",
    width: "60px",
    height: "60px",
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
    backdropFilter: "blur(15px)",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
  },

  satellitePulse: {
    position: "absolute",
    top: "-5px",
    left: "-5px",
    right: "-5px",
    bottom: "-5px",
    border: "2px solid rgba(255, 255, 255, 0.4)",
    borderRadius: "50%",
    animation: "satellitePulse 2s ease-in-out infinite",
  },

  satelliteTrail: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80px",
    height: "80px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "50%",
    animation: "satelliteTrail 4s linear infinite",
  },

  influencerTooltip: {
    position: "absolute",
    top: "70px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "10px 15px",
    background: "rgba(0, 0, 0, 0.8)",
    color: "#ffffff",
    borderRadius: "8px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    opacity: 0,
    transition: "opacity 0.3s ease",
    pointerEvents: "none",
  },

  orbit: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "50%",
    animation: "orbitRotate linear infinite",
  },

  influenceAnalysisPanel: {
    background:
      "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.1))",
    backdropFilter: "blur(30px)",
    border: "3px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "25px",
    padding: "50px",
    marginBottom: "50px",
  },

  analysisHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
  },

  analysisTitle: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#ffffff",
    textShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
  },

  analysisMode: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#00ff88",
    fontSize: "16px",
    fontWeight: "600",
  },

  modeIndicator: {
    width: "12px",
    height: "12px",
    background: "#00ff88",
    borderRadius: "50%",
    animation: "modeIndicatorPulse 1.5s ease-in-out infinite",
    boxShadow: "0 0 10px #00ff88",
  },

  influenceMetrics: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    marginBottom: "50px",
  },

  influenceMetric: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "25px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
  },

  metricIcon: {
    width: "50px",
    height: "50px",
    background: "linear-gradient(135deg, #e91e63, #9c27b0)",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
  },

  metricData: {
    flex: 1,
  },

  metricLabel: {
    display: "block",
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: "8px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },

  metricValue: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#ffffff",
    textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
  },

  metricProgress: {
    width: "40px",
    height: "40px",
    position: "relative",
  },

  progressIndicator: {
    width: "100%",
    height: "100%",
    border: "3px solid rgba(255, 255, 255, 0.3)",
    borderTop: "3px solid #00ff88",
    borderRadius: "50%",
    animation: "progressSpin 2s linear infinite",
  },

  categoryRadar: {
    textAlign: "center",
  },

  radarTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "30px",
  },

  radarContainer: {
    position: "relative",
    width: "200px",
    height: "200px",
    margin: "0 auto",
  },

  radarCategory: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  radarPoint: {
    width: "8px",
    height: "8px",
    background: "#00ff88",
    borderRadius: "50%",
    boxShadow: "0 0 10px #00ff88",
  },

  radarLabel: {
    fontSize: "12px",
    color: "#ffffff",
    fontWeight: "600",
    whiteSpace: "nowrap",
  },

  influenceTrendline: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(20px)",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "20px",
    padding: "30px",
  },

  trendlineTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "20px",
    textAlign: "center",
  },

  trendlineContainer: {
    display: "flex",
    alignItems: "flex-end",
    height: "100px",
    gap: "2px",
  },

  trendlineHour: {
    flex: 1,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  trendlineBar: {
    width: "100%",
    borderRadius: "4px 4px 0 0",
    animation: "trendlineBarPulse 3s ease-in-out infinite",
  },

  trendlineLabel: {
    fontSize: "10px",
    color: "rgba(255, 255, 255, 0.7)",
    marginTop: "5px",
  },

  // ===== SECTION ANALYTICS =====
  revolutionaryAnalyticsSection: {
    padding: "150px 0",
    position: "relative",
    overflow: "hidden",
    background:
      "linear-gradient(135deg, #1a0033 0%, #330066 25%, #4d0099 50%, #6600cc 75%, #7f00ff 100%)",
    perspective: "1000px",
  },

  aiBrainCenter: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "100px",
    height: "500px",
  },

  brainCore: {
    position: "relative",
    width: "300px",
    height: "300px",
  },

  brainSynapses: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "50%",
    overflow: "hidden",
  },

  synapse: {
    position: "absolute",
    width: "2px",
    height: "2px",
    background: "#00ffff",
    borderRadius: "50%",
    animation: "synapseFlash 3s ease-in-out infinite",
    boxShadow: "0 0 5px #00ffff",
  },

  brainVisualization: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "150px",
    height: "150px",
    background:
      "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(127, 0, 255, 0.3))",
    backdropFilter: "blur(20px)",
    border: "3px solid rgba(127, 0, 255, 0.5)",
    borderRadius: "50%",
    zIndex: 10,
  },

  brainIcon: {
    color: "#7f00ff",
    filter: "drop-shadow(0 0 20px #7f00ff)",
  },

  brainPulse: {
    position: "absolute",
    top: "-10px",
    left: "-10px",
    right: "-10px",
    bottom: "-10px",
    border: "3px solid #7f00ff",
    borderRadius: "50%",
    animation: "brainPulse 2s ease-in-out infinite",
  },

  neuralNetworks: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
  },

  neuralLayer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "2px",
    height: "150px",
    transformOrigin: "center",
    animation: "neuralRotate 20s linear infinite",
  },

  neuralNode: {
    position: "absolute",
    width: "6px",
    height: "6px",
    background: "#00ffff",
    borderRadius: "50%",
    boxShadow: "0 0 8px #00ffff",
    animation: "neuralNodePulse 2s ease-in-out infinite",
  },

  aiControlPanel: {
    position: "absolute",
    right: "50px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "300px",
    background:
      "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(127, 0, 255, 0.2))",
    backdropFilter: "blur(25px)",
    border: "2px solid rgba(127, 0, 255, 0.4)",
    borderRadius: "20px",
    padding: "30px",
  },

  aiPanelHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px",
  },

  aiPanelTitle: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#ffffff",
  },

  aiStatus: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#00ff88",
    fontSize: "14px",
    fontWeight: "600",
  },

  aiStatusDot: {
    width: "10px",
    height: "10px",
    background: "#00ff88",
    borderRadius: "50%",
    animation: "aiStatusPulse 1.5s ease-in-out infinite",
    boxShadow: "0 0 8px #00ff88",
  },

  aiMetrics: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  aiMetric: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 15px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },

  aiMetricLabel: {
    fontSize: "12px",
    color: "rgba(255, 255, 255, 0.7)",
  },

  aiMetricValue: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#7f00ff",
  },

  analyticsModules: {
    position: "relative",
    height: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "100px",
  },

  analyticsModule: {
    position: "absolute",
    width: "200px",
    height: "250px",
    background:
      "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.1))",
    backdropFilter: "blur(25px)",
    borderRadius: "20px",
    padding: "25px",
    textAlign: "center",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    transformStyle: "preserve-3d",
    border: "2px solid",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
  },

  moduleIcon: {
    width: "60px",
    height: "60px",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
  },

  moduleTitle: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "20px",
    textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
  },

  moduleVisualization: {
    height: "80px",
    marginBottom: "15px",
    position: "relative",
  },

  trendLines: {
    display: "flex",
    alignItems: "flex-end",
    height: "100%",
    gap: "3px",
    justifyContent: "center",
  },

  trendLine: {
    width: "8px",
    borderRadius: "4px 4px 0 0",
    animation: "trendLinePulse 2s ease-in-out infinite",
  },

  sentimentWheel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    gap: "5px",
    fontSize: "12px",
    color: "#ffffff",
  },

  sentimentPositive: {
    color: "#00ff88",
  },

  sentimentNeutral: {
    color: "#ffff00",
  },

  sentimentNegative: {
    color: "#ff4444",
  },

  behaviorHeatmap: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "2px",
    height: "100%",
  },

  heatmapCell: {
    borderRadius: "2px",
    animation: "heatmapCellPulse 3s ease-in-out infinite",
  },

  marketRadar: {
    position: "relative",
    width: "80px",
    height: "80px",
    margin: "0 auto",
    borderRadius: "50%",
    border: "2px solid rgba(255, 255, 255, 0.3)",
  },

  radarGrid: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  radarRing: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "50%",
  },

  radarSweep: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "2px",
    height: "40px",
    background: "linear-gradient(180deg, transparent, #00ff88)",
    transformOrigin: "bottom",
    animation: "radarSweep 3s linear infinite",
  },

  moduleStats: {
    fontSize: "12px",
    color: "#00ff88",
    fontWeight: "600",
  },

  quantumDashboard: {
    background:
      "linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(127, 0, 255, 0.2))",
    backdropFilter: "blur(30px)",
    border: "3px solid rgba(127, 0, 255, 0.4)",
    borderRadius: "25px",
    padding: "50px",
    boxShadow: "0 30px 60px rgba(127, 0, 255, 0.3)",
  },

  quantumTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: "40px",
    textShadow: "0 0 20px rgba(127, 0, 255, 0.7)",
  },

  quantumGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "40px",
  },

  quantumCard: {
    padding: "30px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(20px)",
    border: "2px solid rgba(127, 0, 255, 0.3)",
    borderRadius: "20px",
    textAlign: "center",
  },

  quantumVisualization: {
    height: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },

  quantumSphere: {
    position: "relative",
    width: "100px",
    height: "100px",
  },

  sphereRings: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  sphereRing: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid rgba(127, 0, 255, 0.4)",
    borderRadius: "50%",
    animation: "sphereRingExpand 3s ease-in-out infinite",
  },

  quantumCore: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "30px",
    animation: "quantumCoreRotate 5s linear infinite",
  },

  quantumData: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.8)",
  },

  dataStream: {
    height: "150px",
    overflow: "hidden",
    position: "relative",
    background: "rgba(0, 0, 0, 0.3)",
    borderRadius: "10px",
    marginBottom: "20px",
  },

  streamLine: {
    position: "absolute",
    width: "100%",
    height: "2px",
    animation: "streamFlow 2s linear infinite",
    boxShadow: "0 0 5px currentColor",
  },

  dnaVisualization: {
    height: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },

  dnaHelix: {
    position: "relative",
    width: "80px",
    height: "120px",
    transformStyle: "preserve-3d",
  },

  dnaSegment: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "4px",
    height: "20px",
    background: "linear-gradient(90deg, #00ffff, #ff00ff)",
    transformOrigin: "center",
    animation: "dnaSegmentRotate 4s linear infinite",
    boxShadow: "0 0 5px currentColor",
  },

  // ===== FOOTER MODERNE =====
  footer: {
    padding: "80px 0 40px",
    background:
      "linear-gradient(135deg, #111827 0%, #374151 50%, #4b5563 100%)",
    color: "#ffffff",
    position: "relative",
    overflow: "hidden",
  },

  footerContent: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
    gap: "64px",
    marginBottom: "64px",
  },

  footerBrand: {
    maxWidth: "360px",
  },

  footerTitle: {
    fontSize: "1.75rem",
    fontWeight: "800",
    marginBottom: "20px",
    color: "#ffffff",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  footerDescription: {
    color: "#d1d5db",
    lineHeight: "1.7",
    fontSize: "16px",
  },

  footerLinks: {
    display: "contents",
  },

  footerColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  footerColumnTitle: {
    fontWeight: "700",
    marginBottom: "12px",
    color: "#ffffff",
    fontSize: "16px",
  },

  footerLink: {
    color: "#d1d5db",
    textDecoration: "none",
    fontSize: "14px",
    transition: "all 0.3s ease",
    fontWeight: "500",
    "&:hover": {
      color: "#667eea",
    },
  },

  footerBottom: {
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    paddingTop: "32px",
    textAlign: "center",
  },

  footerCopyright: {
    color: "#d1d5db",
    fontSize: "14px",
    fontWeight: "500",
  },
};

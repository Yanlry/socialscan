// /src/app/components/HeroBanner.js
"use client";
import React, { useState, useEffect } from "react";
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
  Facebook
} from "lucide-react";

export default function HeroBanner({ onCTAClick }) {
  // ===== ÉTATS EXISTANTS =====
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);
  const [viewsCount, setViewsCount] = useState(null);
  const [chartHeights, setChartHeights] = useState([]);

  // ===== NOUVEAUX ÉTATS POUR LES NOUVELLES FONCTIONNALITÉS =====
  const [currentTrendingVideo, setCurrentTrendingVideo] = useState(0);
  const [currentHashtag, setCurrentHashtag] = useState(0);
  const [liveMetrics, setLiveMetrics] = useState({});
  const [currentInfluencer, setCurrentInfluencer] = useState(0);

  // ===== DONNÉES AVEC ICÔNES LUCIDE =====
  const platforms = [
    { name: "Facebook", color: "#1877f2", icon: Facebook, growth: "+15%" },
    { name: "TikTok", color: "#fe2c55", icon: Monitor, growth: "+27%" },
    { name: "Instagram", color: "#e4405f", icon: Instagram, growth: "+18%" },
    { name: "Twitter", color: "#1da1f2", icon: Twitter, growth: "+31%" },
    { name: "YouTube", color: "#ff0000", icon: Youtube, growth: "+42%" },
    { name: "LinkedIn", color: "#0077b5", icon: Linkedin, growth: "+15%" },
  ];

  const stats = [
    { value: "10M+", label: "Posts analysés", icon: BarChart3 },
    { value: "50+", label: "Réseaux suivis", icon: Globe },
    { value: "99.9%", label: "Précision IA", icon: Brain },
  ];

  // ===== NOUVELLES DONNÉES ÉPURÉES =====
  
  // Vidéos virales trending
  const trendingVideos = [
    { 
      title: "Danse TikTok #VirtualVibes", 
      platform: "TikTok", 
      views: "2.8M", 
      growth: "+340%",
      icon: Play,
      creator: "@danceking23"
    },
    { 
      title: "Recette 5min Pasta", 
      platform: "Instagram", 
      views: "1.2M", 
      growth: "+210%",
      icon: Heart,
      creator: "@chef_rapide"
    },
    { 
      title: "Life Hack Productivité", 
      platform: "YouTube", 
      views: "890K", 
      growth: "+156%",
      icon: Zap,
      creator: "@productivity_guru"
    }
  ];

  // Hashtags trending
  const trendingHashtags = [
    { tag: "#IA2024", count: "1.2M", platform: "Twitter", growth: "+89%", icon: Brain },
    { tag: "#EcoFriendly", count: "890K", platform: "Instagram", growth: "+67%", icon: Globe },
    { tag: "#WorkFromHome", count: "2.1M", platform: "LinkedIn", growth: "+45%", icon: Monitor },
  ];

  // Influenceurs top
  const topInfluencers = [
    { name: "Emma Watson", followers: "58.2M", engagement: "4.2%", platform: "Instagram", icon: Star },
    { name: "Tech Review Pro", followers: "12.8M", engagement: "8.1%", platform: "YouTube", icon: Monitor },
    { name: "FoodieQueen", followers: "3.4M", engagement: "12.5%", platform: "TikTok", icon: Heart }
  ];

  // Métriques live
  const liveMetricsData = [
    { label: "Posts/seconde", value: "2,847", icon: Activity },
    { label: "Engagement moyen", value: "4.2%", icon: Heart },
    { label: "Nombre de ventes", value: "47M", icon: Globe }
  ];

  // ===== EFFETS (IDENTIQUES) =====
  useEffect(() => {
    const value = Math.floor(Math.random() * 90 + 10);
    setViewsCount(value);
  }, [trendingVideos.length]);

  useEffect(() => {
    const heights = Array.from({ length: 7 }, () => 30 + Math.random() * 60);
    setChartHeights(heights);
  }, [trendingVideos.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlatformIndex((prev) => (prev + 1) % platforms.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [platforms.length]);

  // Rotation des vidéos trending
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrendingVideo((prev) => (prev + 1) % trendingVideos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Rotation des hashtags
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHashtag((prev) => (prev + 1) % trendingHashtags.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Rotation des influenceurs
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInfluencer((prev) => (prev + 1) % topInfluencers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Métriques live qui changent
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics({
        posts: Math.floor(Math.random() * 1000 + 2000),
        mentions: Math.floor(Math.random() * 50 + 100),
        engagement: (Math.random() * 2 + 3).toFixed(1),
        reach: Math.floor(Math.random() * 20 + 40)
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentPlatform = platforms[currentPlatformIndex];
  const currentVideo = trendingVideos[currentTrendingVideo];
  const currentHashtagData = trendingHashtags[currentHashtag];
  const currentInfluencerData = topInfluencers[currentInfluencer];

  return (
    <div style={styles.pageContainer}>
      {/* ===== SECTION HERO MODERNE ===== */}
      <section style={styles.heroSection}>
        {/* Fond avec dégradé moderne */}
        <div style={styles.heroBackground}></div>
        
        {/* Éléments flottants décoratifs */}
        <div style={styles.floatingElements}>
          <div style={{...styles.floatingElement, ...styles.floatingElement1}}></div>
          <div style={{...styles.floatingElement, ...styles.floatingElement2}}></div>
          <div style={{...styles.floatingElement, ...styles.floatingElement3}}></div>
        </div>
        
        <div style={styles.container}>
          <div style={styles.heroContent}>
            {/* Badge moderne avec glassmorphism */}
            <div style={styles.badgeContainer}>
              <div style={styles.badge}>
                <Flame size={16} style={styles.badgeIcon} />
                <span>🔥 922K analyses aujourdhui</span>
              </div>
            </div>

            {/* Titre avec dégradé moderne */}
            <h1 style={styles.title}>
              <span>Découvre les tendances</span>
              <span style={styles.titleHighlight}>qui font vibrer le web</span>
            </h1>

            {/* Description moderne */}
            <p style={styles.description}>
              Intelligence artificielle nouvelle génération pour décrypter et prédire 
              les tendances virales sur tous les réseaux sociaux ⚡
            </p>

            {/* Indicateur de plateforme moderne */}
            <div style={styles.platformIndicator}>
              <div style={styles.platformIconContainer}>
                <currentPlatform.icon 
                  size={24} 
                  style={{ ...styles.platformIconSvg, color: currentPlatform.color }} 
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
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(139, 92, 246, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(139, 92, 246, 0.3)";
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

      {/* ===== SECTION MÉTRIQUES LIVE REDESIGNÉE ===== */}
      <section style={styles.liveSection}>
        <div style={styles.liveSectionOverlay}></div>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionIconContainer}>
              <Activity size={28} style={styles.sectionIcon} />
            </div>
            <h2 style={styles.sectionTitle}>Métriques Live</h2>
            <p style={styles.sectionSubtitle}>✨ Données en temps réel • Mises à jour chaque seconde</p>
          </div>
          
          <div style={styles.metricsGrid}>
            {liveMetricsData.map((metric, index) => (
              <div 
                key={index} 
                style={styles.metricCard}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.25)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.15)";
                }}
              >
                <div style={styles.metricCardGlow}></div>
                <div style={styles.metricHeader}>
                  <div style={styles.metricIconContainer}>
                    <metric.icon size={24} style={styles.metricIcon} />
                  </div>
                  <span style={styles.metricLabel}>{metric.label}</span>
                  <div style={styles.metricPulse}></div>
                </div>
                <div style={styles.metricValue}>
                  {liveMetrics[Object.keys(liveMetrics)[index]] || metric.value}
                </div>
                <div style={styles.metricTrend}>📈 Trending</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION CONTENU VIRAL REDESIGNÉE ===== */}
      <section style={styles.contentSection}>
        <div style={styles.contentSectionOverlay}></div>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionIconContainer}>
              <Play size={28} style={styles.sectionIcon} />
            </div>
            <h2 style={styles.sectionTitle}>Contenu Viral</h2>
            <p style={styles.sectionSubtitle}>🚀 Ce qui explose en ce moment • Tendances chaudes</p>
          </div>

          {/* Vidéo principale redesignée */}
          <div style={styles.featuredContent}>
            <div style={styles.featuredContentGlow}></div>
            <div style={styles.featuredMedia}>
              <currentVideo.icon size={40} style={styles.featuredIcon} />
              <div style={styles.featuredPulse}></div>
            </div>
            <div style={styles.featuredInfo}>
              <h3 style={styles.featuredTitle}>{currentVideo.title}</h3>
              <div style={styles.featuredMeta}>
                <span style={styles.featuredCreator}>👤 {currentVideo.creator}</span>
                <div style={styles.featuredBadge}>{currentVideo.platform}</div>
              </div>
              <div style={styles.featuredStats}>
                <div style={styles.featuredStat}>
                  <Eye size={18} />
                  <span>{currentVideo.views} vues</span>
                </div>
                <div style={styles.featuredGrowth}>
                  <TrendingUp size={18} />
                  <span>{currentVideo.growth}</span>
                </div>
              </div>
            </div>
            <div style={styles.featuredBg}></div>
          </div>

          {/* Grid de contenu redesigné */}
          <div style={styles.contentGrid}>
            {trendingVideos.map((video, index) => (
              <div 
                key={index} 
                style={styles.contentCard}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-12px) scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 30px 60px rgba(0, 0, 0, 0.25)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.15)";
                }}
              >
                <div style={styles.contentCardGlow}></div>
                <div style={styles.contentCardMedia}>
                  <video.icon size={28} style={styles.contentCardIcon} />
                </div>
                <h4 style={styles.contentCardTitle}>{video.title}</h4>
                <div style={styles.contentCardCreator}>by {video.creator}</div>
                <div style={styles.contentCardStats}>
                  <span style={styles.contentCardViews}>👁️ {video.views}</span>
                  <span style={styles.contentCardGrowth}>📈 {video.growth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION HASHTAGS REDESIGNÉE ===== */}
      <section style={styles.hashtagSection}>
        <div style={styles.hashtagSectionOverlay}></div>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionIconContainer}>
              <Hash size={28} style={styles.sectionIcon} />
            </div>
            <h2 style={styles.sectionTitle}>Hashtags Trending</h2>
            <p style={styles.sectionSubtitle}>🔥 Mots-clés qui buzzent • #Tendances du moment</p>
          </div>

          {/* Hashtag principal redesigné */}
          <div style={styles.featuredHashtag}>
            <div style={styles.featuredHashtagGlow}></div>
            <div style={styles.hashtagIcon}>
              <currentHashtagData.icon size={40} />
              <div style={styles.hashtagPulse}></div>
            </div>
            <div style={styles.hashtagInfo}>
              <h3 style={styles.hashtagTitle}>{currentHashtagData.tag}</h3>
              <div style={styles.hashtagMeta}>
                <span style={styles.hashtagCount}>📊 {currentHashtagData.count} posts</span>
                <div style={styles.hashtagBadge}>{currentHashtagData.platform}</div>
              </div>
              <div style={styles.hashtagGrowth}>
                <TrendingUp size={18} />
                <span>{currentHashtagData.growth} croissance</span>
              </div>
            </div>
          </div>

          {/* Grid hashtags redesigné */}
          <div style={styles.hashtagGrid}>
            {trendingHashtags.map((hashtag, index) => (
              <div 
                key={index} 
                style={styles.hashtagCard}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div style={styles.hashtagCardGlow}></div>
                <div style={styles.hashtagCardHeader}>
                  <hashtag.icon size={24} style={styles.hashtagCardIcon} />
                  <span style={styles.hashtagCardTag}>{hashtag.tag}</span>
                </div>
                <div style={styles.hashtagCardStats}>
                  <span style={styles.hashtagCardCount}>📈 {hashtag.count}</span>
                  <span style={styles.hashtagCardGrowth}>⚡ {hashtag.growth}</span>
                </div>
                <div style={styles.hashtagCardPlatform}>{hashtag.platform}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION INFLUENCEURS REDESIGNÉE ===== */}
      <section style={styles.influencerSection}>
        <div style={styles.influencerSectionOverlay}></div>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionIconContainer}>
              <Star size={28} style={styles.sectionIcon} />
            </div>
            <h2 style={styles.sectionTitle}>Top Influenceurs</h2>
            <p style={styles.sectionSubtitle}>⭐ Leaders dopinion du moment • Créateurs tendance</p>
          </div>

          {/* Influenceur principal redesigné */}
          <div style={styles.featuredInfluencer}>
            <div style={styles.featuredInfluencerGlow}></div>
            <div style={styles.influencerAvatar}>
              <currentInfluencerData.icon size={40} />
              <div style={styles.influencerPulse}></div>
            </div>
            <div style={styles.influencerInfo}>
              <h3 style={styles.influencerName}>🌟 {currentInfluencerData.name}</h3>
              <div style={styles.influencerMeta}>
                <span style={styles.influencerFollowers}>👥 {currentInfluencerData.followers} followers</span>
                <div style={styles.influencerBadge}>{currentInfluencerData.platform}</div>
              </div>
              <div style={styles.influencerEngagement}>
                <Heart size={18} />
                <span>{currentInfluencerData.engagement} engagement</span>
              </div>
            </div>
          </div>

          {/* Grid influenceurs redesigné */}
          <div style={styles.influencersGrid}>
            {topInfluencers.map((influencer, index) => (
              <div 
                key={index} 
                style={styles.influencerCard}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-12px) scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.25)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(0, 0, 0, 0.15)";
                }}
              >
                <div style={styles.influencerCardGlow}></div>
                <div style={styles.influencerCardAvatar}>
                  <influencer.icon size={28} />
                </div>
                <h4 style={styles.influencerCardName}>⭐ {influencer.name}</h4>
                <div style={styles.influencerCardPlatform}>{influencer.platform}</div>
                <div style={styles.influencerCardStats}>
                  <span style={styles.influencerCardFollowers}>👥 {influencer.followers}</span>
                  <span style={styles.influencerCardEngagement}>💕 {influencer.engagement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION ANALYTICS REDESIGNÉE ===== */}
      <section style={styles.analyticsSection}>
  <div style={styles.analyticsSectionOverlay}></div>
  <div style={styles.container}>
    <div style={styles.sectionHeader}>
      <div style={styles.sectionIconContainer}>
        <Brain size={28} style={styles.sectionIcon} />
      </div>
      <h2 style={styles.sectionTitle}>Intelligence Artificielle</h2>
      <p style={styles.sectionSubtitle}>🧠 Insights et prédictions avancées • IA nouvelle génération</p>
    </div>

    <div style={styles.analyticsGrid}>
      {/* Prédiction IA redesignée */}
      <div style={styles.analyticsCard}>
        <div style={styles.analyticsCardGlow}></div>
        <div style={styles.analyticsCardHeader}>
          <Target size={24} />
          <span>🎯 Prédiction IA</span>
        </div>
        <div style={styles.predictionContent}>
          <p style={styles.predictionText}>
            Le contenu lifestyle va exploser dans les 48h prochaines
          </p>
          <div style={styles.confidenceContainer}>
            <div style={styles.confidenceBar}>
              <div style={styles.confidenceFill}></div>
            </div>
            <span style={styles.confidenceText}>✅ 94% de confiance</span>
          </div>
        </div>
      </div>

      {/* Sentiment Analysis redesignée */}
      <div style={styles.analyticsCard}>
        <div style={styles.analyticsCardGlow}></div>
        <div style={styles.analyticsCardHeader}>
          <Heart size={24} />
          <span>💝 Sentiment Global</span>
        </div>
        <div style={styles.sentimentContent}>
          <div style={styles.sentimentScore}>87%</div>
          <div style={styles.sentimentLabel}>😊 Très Positif</div>
          <div style={styles.sentimentBar}>
            <div style={styles.sentimentFill}></div>
          </div>
        </div>
      </div>

      {/* Top Categories redesignée */}
      <div style={styles.analyticsCard}>
        <div style={styles.analyticsCardGlow}></div>
        <div style={styles.analyticsCardHeader}>
          <BarChart3 size={24} />
          <span>📊 Top Catégories</span>
        </div>
        <div style={styles.categoriesContent}>
          {[
            { name: "🎮 Gaming", percentage: "23%" },
            { name: "🍕 Food", percentage: "18%" },
            { name: "💪 Fitness", percentage: "15%" }
          ].map((category, index) => (
            <div key={index} style={styles.categoryItem}>
              <span style={styles.categoryName}>{category.name}</span>
              <span style={styles.categoryPercentage}>{category.percentage}</span>
            </div>
          ))}
        </div>
      </div>

      {/* NOUVELLE 4ème Catégorie - Optimisation Horaire */}
      <div style={styles.analyticsCard}>
        <div style={styles.analyticsCardGlow}></div>
        <div style={styles.analyticsCardHeader}>
          <Clock size={24} />
          <span>⏰ Optimisation Horaire</span>
        </div>
        <div style={styles.timingContent}>
          <div style={styles.bestTimeContainer}>
            <div style={styles.bestTime}>18:30</div>
            <div style={styles.bestTimeLabel}>🔥 Meilleur créneau</div>
          </div>
          <div style={styles.timingStats}>
            {[
              { time: "9h-12h", engagement: "65%" },
              { time: "18h-21h", engagement: "89%" },
              { time: "21h-23h", engagement: "71%" }
            ].map((slot, index) => (
              <div key={index} style={styles.timeSlot}>
                <span style={styles.timeRange}>{slot.time}</span>
                <span style={styles.engagementRate}>{slot.engagement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ===== SECTION PLATEFORMES REDESIGNÉE ===== */}
      <section style={styles.platformsSection}>
        <div style={styles.platformsSectionOverlay}></div>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionIconContainer}>
              <Monitor size={28} style={styles.sectionIcon} />
            </div>
            <h2 style={styles.sectionTitle}>Analyse par Plateforme</h2>
            <p style={styles.sectionSubtitle}>📊 Performance détaillée en temps réel • Données cross-platform</p>
          </div>

          <div style={styles.platformsGrid}>
            {platforms.map((platform) => (
              <div
                key={platform.name}
                style={styles.platformCard}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 30px 60px rgba(0, 0, 0, 0.25)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.15)";
                }}
              >
                <div style={styles.platformCardGlow}></div>
                <div style={styles.platformCardHeader}>
                  <div style={styles.platformCardIcon}>
                    <platform.icon size={28} style={{ color: platform.color }} />
                  </div>
                  <div style={styles.platformCardInfo}>
                    <h4 style={styles.platformCardName}>📱 {platform.name}</h4>
                    <div style={styles.platformCardGrowth}>
                      <TrendingUp size={16} />
                      <span>{platform.growth}</span>
                    </div>
                  </div>
                  <div style={styles.platformCardViews}>
                    {viewsCount !== null && (
                      <>
                        <div style={styles.viewsNumber}>{viewsCount}M</div>
                        <div style={styles.viewsLabel}>👁️ vues</div>
                      </>
                    )}
                  </div>
                </div>

                {/* Mini graphique redesigné */}
                <div style={styles.miniChart}>
                  {chartHeights.map((height, i) => (
                    <div
                      key={i}
                      style={{
                        ...styles.chartBar,
                        background: `linear-gradient(180deg, ${platform.color}dd, ${platform.color}88, ${platform.color}44)`,
                        height: `${height}%`,
                        boxShadow: `0 4px 8px ${platform.color}44`,
                      }}
                    ></div>
                  ))}
                </div>
                <div style={styles.platformCardBadge}>🔥 Trending</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER MODERNE ===== */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerContent}>
            <div style={styles.footerBrand}>
              <h3 style={styles.footerTitle}>TrendScope</h3>
              <p style={styles.footerDescription}>
                Plateforme dintelligence artificielle pour analyser les tendances 
                des réseaux sociaux en temps réel. 🚀
              </p>
            </div>
            <div style={styles.footerLinks}>
              <div style={styles.footerColumn}>
                <h4 style={styles.footerColumnTitle}>Produit</h4>
                <a href="#" style={styles.footerLink}>Analytics</a>
                <a href="#" style={styles.footerLink}>Prédictions</a>
                <a href="#" style={styles.footerLink}>API</a>
                <a href="#" style={styles.footerLink}>Intégrations</a>
              </div>
              <div style={styles.footerColumn}>
                <h4 style={styles.footerColumnTitle}>Ressources</h4>
                <a href="#" style={styles.footerLink}>Documentation</a>
                <a href="#" style={styles.footerLink}>Guides</a>
                <a href="#" style={styles.footerLink}>Blog</a>
                <a href="#" style={styles.footerLink}>Status</a>
              </div>
              <div style={styles.footerColumn}>
                <h4 style={styles.footerColumnTitle}>Support</h4>
                <a href="#" style={styles.footerLink}>Centre daide</a>
                <a href="#" style={styles.footerLink}>Contact</a>
                <a href="#" style={styles.footerLink}>Communauté</a>
                <a href="#" style={styles.footerLink}>Feedback</a>
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

// ================================
// STYLES MODERNES REDESIGNÉS AVEC DÉGRADÉS PROFESSIONNELS
// ================================
const styles = {
  // ===== CONTAINER GLOBAL =====
  pageContainer: {
    width: "100%",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },

  // ===== HERO SECTION MODERNE (INCHANGÉE) =====
  heroSection: {
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8b5cf6 100%)",
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
    background: "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(217, 70, 239, 0.3))",
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
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8b5cf6 100%)",
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
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8b5cf6 100%)",
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

  // ===== SECTIONS REDESIGNÉES AVEC DÉGRADÉS PROFESSIONNELS =====

  // 🌊 SECTION MÉTRIQUES LIVE - Dégradé Bleu Océan Professionnel
  liveSection: {
    padding: "120px 0",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 25%, #0369a1 50%, #075985 75%, #0c4a6e 100%)",
  },

  liveSectionOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.3) 0%, transparent 50%),
      linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)
    `,
  },

  // 🔥 SECTION CONTENU VIRAL - Dégradé Orange/Rouge Dynamique
  contentSection: {
    padding: "120px 0",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(135deg, #f97316 0%, #ea580c 25%, #dc2626 50%, #b91c1c 75%, #991b1b 100%)",
  },

  contentSectionOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 30% 40%, rgba(251, 146, 60, 0.4) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(239, 68, 68, 0.4) 0%, transparent 50%),
      linear-gradient(225deg, rgba(0, 0, 0, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)
    `,
  },

  // 💛 SECTION HASHTAGS - Dégradé Doré/Ambre Luxueux
  hashtagSection: {
    padding: "120px 0",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 25%, #d97706 50%, #b45309 75%, #92400e 100%)",
  },

  hashtagSectionOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 25% 25%, rgba(252, 211, 77, 0.4) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.4) 0%, transparent 50%),
      linear-gradient(315deg, rgba(0, 0, 0, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)
    `,
  },

  // 💜 SECTION INFLUENCEURS - Dégradé Rose/Violet Élégant
  influencerSection: {
    padding: "120px 0",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(135deg, #ec4899 0%, #d946ef 25%, #c026d3 50%, #a21caf 75%, #86198f 100%)",
  },

  influencerSectionOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 40% 20%, rgba(244, 114, 182, 0.4) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(217, 70, 239, 0.4) 0%, transparent 50%),
      linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)
    `,
  },

  // 🧠 SECTION ANALYTICS - Dégradé Violet/Indigo Tech
  analyticsSection: {
    padding: "120px 0",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 25%, #6d28d9 50%, #5b21b6 75%, #4c1d95 100%)",
  },

  analyticsSectionOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 60% 40%, rgba(147, 51, 234, 0.4) 0%, transparent 50%),
      radial-gradient(circle at 20% 70%, rgba(124, 58, 237, 0.4) 0%, transparent 50%),
      linear-gradient(225deg, rgba(0, 0, 0, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)
    `,
  },


// Contenu principal de la carte Optimisation Horaire
timingContent: {
  textAlign: "center",
  position: "relative",
  zIndex: 2,
},

// Container du meilleur créneau
bestTimeContainer: {
  marginBottom: "32px",
  padding: "20px",
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "20px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
},

// Heure du meilleur créneau (gros chiffre)
bestTime: {
  fontSize: "3.5rem",
  fontWeight: "900",
  color: "#10b981",
  marginBottom: "8px",
  lineHeight: "1",
  textShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
},

// Label sous le meilleur créneau
bestTimeLabel: {
  fontSize: "1.2rem",
  color: "#10b981",
  fontWeight: "700",
  textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
},

// Container des créneaux horaires
timingStats: {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
},

// Chaque créneau horaire
timeSlot: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 20px",
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "16px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(10px)",
},

// Texte de la plage horaire (ex: "9h-12h")
timeRange: {
  color: "rgba(255, 255, 255, 0.95)",
  fontWeight: "600",
  fontSize: "16px",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
},

// Pourcentage d'engagement
engagementRate: {
  color: "#10b981",
  fontWeight: "700",
  fontSize: "16px",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
},

  // 💚 SECTION PLATEFORMES - Dégradé Vert/Teal Moderne
  platformsSection: {
    padding: "120px 0",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(135deg, #10b981 0%, #059669 25%, #047857 50%, #065f46 75%, #064e3b 100%)",
  },

  platformsSectionOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 30% 60%, rgba(52, 211, 153, 0.4) 0%, transparent 50%),
      radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.4) 0%, transparent 50%),
      linear-gradient(315deg, rgba(0, 0, 0, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)
    `,
  },

  // ===== HEADERS COMMUNS =====
  sectionHeader: {
    textAlign: "center",
    marginBottom: "80px",
    position: "relative",
    zIndex: 10,
  },

  sectionIconContainer: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80px",
    height: "80px",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(20px)",
    borderRadius: "24px",
    marginBottom: "32px",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
    border: "2px solid rgba(255, 255, 255, 0.3)",
  },

  sectionIcon: {
    color: "white",
    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))",
  },

  sectionTitle: {
    fontSize: "3.5rem",
    fontWeight: "900",
    color: "white",
    marginBottom: "16px",
    letterSpacing: "-0.02em",
    textShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
  },

  sectionSubtitle: {
    fontSize: "1.4rem",
    color: "rgba(255, 255, 255, 0.95)",
    fontWeight: "500",
    textShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },

  // ===== MÉTRIQUES LIVE REDESIGNÉES =====
  metricsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "40px",
    position: "relative",
    zIndex: 10,
  },

  metricCard: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(25px)",
    padding: "40px",
    borderRadius: "28px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.15)",
  },

  metricCardGlow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    borderRadius: "28px",
    opacity: 0,
    transition: "opacity 0.4s ease",
  },

  metricHeader: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "24px",
    position: "relative",
    zIndex: 2,
  },

  metricIconContainer: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
  },

  metricIcon: {
    color: "white",
    filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
  },

  metricLabel: {
    fontSize: "16px",
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  metricValue: {
    fontSize: "3rem",
    fontWeight: "900",
    color: "white",
    lineHeight: "1",
    textShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
    marginBottom: "12px",
    position: "relative",
    zIndex: 2,
  },

  metricTrend: {
    fontSize: "14px",
    color: "#10b981",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    position: "relative",
    zIndex: 2,
  },

  metricPulse: {
    position: "absolute",
    top: "8px",
    right: "8px",
    width: "16px",
    height: "16px",
    background: "#10b981",
    borderRadius: "50%",
    animation: "pulse 2s infinite",
    boxShadow: "0 0 0 0 rgba(16, 185, 129, 0.7)",
  },

  // ===== CONTENU VIRAL REDESIGNÉ =====
  featuredContent: {
    display: "flex",
    gap: "48px",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(25px)",
    padding: "48px",
    borderRadius: "32px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    marginBottom: "80px",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
    position: "relative",
    overflow: "hidden",
  },

  featuredContentGlow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    borderRadius: "32px",
  },

  featuredMedia: {
    width: "120px",
    height: "120px",
    borderRadius: "28px",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(15px)",
    border: "3px solid rgba(255, 255, 255, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
  },

  featuredIcon: {
    color: "white",
    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))",
  },

  featuredPulse: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    width: "24px",
    height: "24px",
    background: "#10b981",
    borderRadius: "50%",
    animation: "pulse 2s infinite",
    boxShadow: "0 0 0 0 rgba(16, 185, 129, 0.7)",
  },

  featuredInfo: {
    flex: 1,
    position: "relative",
    zIndex: 2,
  },

  featuredTitle: {
    fontSize: "2.25rem",
    fontWeight: "800",
    color: "white",
    marginBottom: "16px",
    lineHeight: "1.2",
    textShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
  },

  featuredMeta: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    marginBottom: "20px",
  },

  featuredCreator: {
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "600",
    fontSize: "18px",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  featuredBadge: {
    padding: "8px 16px",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    color: "white",
    borderRadius: "16px",
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  featuredStats: {
    display: "flex",
    gap: "40px",
  },

  featuredStat: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "18px",
    fontWeight: "600",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  featuredGrowth: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: "#10b981",
    fontSize: "18px",
    fontWeight: "700",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  featuredBg: {
    position: "absolute",
    top: "20px",
    right: "20px",
    width: "100px",
    height: "100px",
    background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
    borderRadius: "50%",
  },

  contentGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "40px",
    position: "relative",
    zIndex: 10,
  },

  contentCard: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(25px)",
    padding: "40px",
    borderRadius: "28px",
    textAlign: "center",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.15)",
    position: "relative",
    overflow: "hidden",
  },

  contentCardGlow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    borderRadius: "28px",
    opacity: 0,
    transition: "opacity 0.4s ease",
  },

  contentCardMedia: {
    width: "80px",
    height: "80px",
    borderRadius: "24px",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 24px",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
  },

  contentCardIcon: {
    color: "white",
    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))",
  },

  contentCardTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "white",
    marginBottom: "8px",
    lineHeight: "1.3",
    textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    position: "relative",
    zIndex: 2,
  },

  contentCardCreator: {
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: "20px",
    fontWeight: "500",
    position: "relative",
    zIndex: 2,
  },

  contentCardStats: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
  },

  contentCardViews: {
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "600",
    fontSize: "16px",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  contentCardGrowth: {
    color: "#10b981",
    fontWeight: "700",
    fontSize: "16px",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  // ===== HASHTAGS REDESIGNÉS =====
  featuredHashtag: {
    display: "flex",
    gap: "48px",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(25px)",
    padding: "48px",
    borderRadius: "32px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    marginBottom: "80px",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
    position: "relative",
    overflow: "hidden",
  },

  featuredHashtagGlow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    borderRadius: "32px",
  },

  hashtagIcon: {
    width: "120px",
    height: "120px",
    borderRadius: "28px",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(15px)",
    border: "3px solid rgba(255, 255, 255, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    position: "relative",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
  },

  hashtagPulse: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    width: "24px",
    height: "24px",
    background: "#10b981",
    borderRadius: "50%",
    animation: "pulse 2s infinite",
    boxShadow: "0 0 0 0 rgba(16, 185, 129, 0.7)",
  },

  hashtagInfo: {
    flex: 1,
    position: "relative",
    zIndex: 2,
  },

  hashtagTitle: {
    fontSize: "2.25rem",
    fontWeight: "800",
    color: "white",
    marginBottom: "16px",
    textShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
  },

  hashtagMeta: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    marginBottom: "20px",
  },

  hashtagCount: {
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "600",
    fontSize: "18px",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  hashtagBadge: {
    padding: "8px 16px",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    color: "white",
    borderRadius: "16px",
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  hashtagGrowth: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: "#10b981",
    fontSize: "18px",
    fontWeight: "700",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  hashtagGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "40px",
    position: "relative",
    zIndex: 10,
  },

  hashtagCard: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(25px)",
    padding: "32px",
    borderRadius: "28px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    position: "relative",
    overflow: "hidden",
  },

  hashtagCardGlow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    borderRadius: "28px",
    opacity: 0,
    transition: "opacity 0.4s ease",
  },

  hashtagCardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "24px",
    position: "relative",
    zIndex: 2,
  },

  hashtagCardIcon: {
    color: "white",
    filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
  },

  hashtagCardTag: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "white",
    textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  },

  hashtagCardStats: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
    position: "relative",
    zIndex: 2,
  },

  hashtagCardCount: {
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "600",
    fontSize: "16px",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  hashtagCardGrowth: {
    color: "#10b981",
    fontWeight: "700",
    fontSize: "16px",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  hashtagCardPlatform: {
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: "500",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },

  // ===== INFLUENCEURS REDESIGNÉS =====
  featuredInfluencer: {
    display: "flex",
    gap: "48px",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(25px)",
    padding: "48px",
    borderRadius: "32px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    marginBottom: "80px",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
    position: "relative",
    overflow: "hidden",
  },

  featuredInfluencerGlow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    borderRadius: "32px",
  },

  influencerAvatar: {
    width: "120px",
    height: "120px",
    borderRadius: "28px",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(15px)",
    border: "3px solid rgba(255, 255, 255, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    position: "relative",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
  },

  influencerPulse: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    width: "24px",
    height: "24px",
    background: "#10b981",
    borderRadius: "50%",
    animation: "pulse 2s infinite",
    boxShadow: "0 0 0 0 rgba(16, 185, 129, 0.7)",
  },

  influencerInfo: {
    flex: 1,
    position: "relative",
    zIndex: 2,
  },

  influencerName: {
    fontSize: "2.25rem",
    fontWeight: "800",
    color: "white",
    marginBottom: "16px",
    textShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
  },

  influencerMeta: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    marginBottom: "20px",
  },

  influencerFollowers: {
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "600",
    fontSize: "18px",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  influencerBadge: {
    padding: "8px 16px",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    color: "white",
    borderRadius: "16px",
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  influencerEngagement: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: "#10b981",
    fontSize: "18px",
    fontWeight: "700",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  influencersGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "40px",
    position: "relative",
    zIndex: 10,
  },

  influencerCard: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(25px)",
    padding: "40px",
    borderRadius: "28px",
    textAlign: "center",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
    position: "relative",
    overflow: "hidden",
  },

  influencerCardGlow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    borderRadius: "28px",
    opacity: 0,
    transition: "opacity 0.4s ease",
  },

  influencerCardAvatar: {
    width: "80px",
    height: "80px",
    borderRadius: "24px",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 24px",
    color: "white",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
  },

  influencerCardName: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "white",
    marginBottom: "8px",
    textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    position: "relative",
    zIndex: 2,
  },

  influencerCardPlatform: {
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: "20px",
    fontWeight: "500",
    position: "relative",
    zIndex: 2,
  },

  influencerCardStats: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
  },

  influencerCardFollowers: {
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "600",
    fontSize: "16px",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  influencerCardEngagement: {
    color: "#10b981",
    fontWeight: "700",
    fontSize: "16px",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  // ===== ANALYTICS REDESIGNÉS =====
  analyticsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "40px",
    position: "relative",
    zIndex: 10,
  },

  analyticsCard: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(25px)",
    padding: "40px",
    borderRadius: "28px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.15)",
    position: "relative",
    overflow: "hidden",
  },

  analyticsCardGlow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    borderRadius: "28px",
    opacity: 0,
    transition: "opacity 0.4s ease",
  },

  analyticsCardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "32px",
    color: "white",
    fontWeight: "700",
    fontSize: "18px",
    textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    position: "relative",
    zIndex: 2,
  },

  predictionContent: {
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },

  predictionText: {
    fontSize: "1.4rem",
    color: "rgba(255, 255, 255, 0.95)",
    fontStyle: "italic",
    marginBottom: "28px",
    lineHeight: "1.6",
    fontWeight: "500",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  confidenceContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  confidenceBar: {
    position: "relative",
    height: "16px",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },

  confidenceFill: {
    width: "94%",
    height: "100%",
    background: "linear-gradient(90deg, #10b981, #34d399, #6ee7b7)",
    borderRadius: "12px",
    position: "relative",
    boxShadow: "0 0 12px rgba(16, 185, 129, 0.5)",
  },

  confidenceText: {
    fontSize: "16px",
    color: "#10b981",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
  },

  sentimentContent: {
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },

  sentimentScore: {
    fontSize: "4rem",
    fontWeight: "900",
    color: "#10b981",
    marginBottom: "12px",
    lineHeight: "1",
    textShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
  },

  sentimentLabel: {
    fontSize: "1.5rem",
    color: "#10b981",
    fontWeight: "700",
    marginBottom: "24px",
    textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  },

  sentimentBar: {
    height: "16px",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },

  sentimentFill: {
    width: "87%",
    height: "100%",
    background: "linear-gradient(90deg, #10b981, #34d399)",
    borderRadius: "12px",
    boxShadow: "0 0 12px rgba(16, 185, 129, 0.5)",
  },

  categoriesContent: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    position: "relative",
    zIndex: 2,
  },

  categoryItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 20px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
  },

  categoryName: {
    color: "rgba(255, 255, 255, 0.95)",
    fontWeight: "600",
    fontSize: "18px",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  categoryPercentage: {
    color: "white",
    fontWeight: "700",
    fontSize: "18px",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  // ===== PLATEFORMES REDESIGNÉES =====
  platformsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
    gap: "40px",
    position: "relative",
    zIndex: 10,
  },

  platformCard: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(25px)",
    padding: "40px",
    borderRadius: "28px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.15)",
    position: "relative",
    overflow: "hidden",
  },

  platformCardGlow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    borderRadius: "28px",
    opacity: 0,
    transition: "opacity 0.4s ease",
  },

  platformCardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "32px",
    position: "relative",
    zIndex: 2,
  },

  platformCardIcon: {
    width: "72px",
    height: "72px",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
  },

  platformCardInfo: {
    flex: 1,
    marginLeft: "24px",
  },

  platformCardName: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "white",
    marginBottom: "8px",
    textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  },

  platformCardGrowth: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#10b981",
    fontSize: "16px",
    fontWeight: "700",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  platformCardViews: {
    textAlign: "right",
  },

  viewsNumber: {
    fontSize: "2rem",
    fontWeight: "800",
    color: "white",
    lineHeight: "1",
    textShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
  },

  viewsLabel: {
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    marginTop: "4px",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  miniChart: {
    display: "flex",
    alignItems: "flex-end",
    height: "64px",
    gap: "6px",
    marginBottom: "20px",
    position: "relative",
    zIndex: 2,
  },

  chartBar: {
    flex: 1,
    borderRadius: "6px 6px 0 0",
    opacity: 0.9,
    transition: "all 0.3s ease",
    minHeight: "25%",
  },

  platformCardBadge: {
    position: "absolute",
    top: "20px",
    right: "20px",
    padding: "6px 12px",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    color: "white",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "700",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    zIndex: 3,
  },

  // ===== FOOTER MODERNE =====
  footer: {
    padding: "80px 0 40px",
    background: "linear-gradient(135deg, #111827 0%, #374151 50%, #4b5563 100%)",
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
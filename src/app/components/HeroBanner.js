// /src/app/components/HeroBanner.js
"use client";
import React, { useState, useEffect } from "react";

export default function HeroBanner({ onCTAClick }) {
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);

  const platforms = [
    { name: "TikTok", color: "#FF0050", icon: "🎵", growth: "+27%" },
    { name: "Instagram", color: "#E4405F", icon: "📸", growth: "+18%" },
    { name: "Twitter", color: "#1DA1F2", icon: "🐦", growth: "+31%" },
    { name: "YouTube", color: "#FF0000", icon: "🎬", growth: "+42%" },
    { name: "LinkedIn", color: "#0077B5", icon: "💼", growth: "+15%" },
  ];

  const stats = [
    { value: "10M+", label: "Posts analysés" },
    { value: "50+", label: "Réseaux suivis" },
    { value: "99.9%", label: "Précision IA" },
  ];

  const [viewsCount, setViewsCount] = useState(null);

  
  useEffect(() => {
    const value = Math.floor(Math.random() * 90 + 10);
    setViewsCount(value);
  }, []);

  // Change la plateforme toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlatformIndex((prev) => (prev + 1) % platforms.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [platforms.length]);

  const currentPlatform = platforms[currentPlatformIndex];

  // Styles en ligne pour éviter les problèmes
  const sectionStyle = {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const containerStyle = {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    position: "relative",
    zIndex: 10,
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "40px",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "3.5rem",
    fontWeight: "900",
    color: "white",
    lineHeight: "1.2",
    marginBottom: "20px",
    textAlign: "center",
  };

  const gradientTextStyle = {
    background: "linear-gradient(to right, #fbbf24, #ec4899, #8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const descriptionStyle = {
    fontSize: "1.25rem",
    color: "rgba(255,255,255,0.9)",
    textAlign: "center",
    marginBottom: "30px",
    maxWidth: "600px",
    margin: "0 auto 30px",
  };

  const buttonStyle = {
    padding: "16px 32px",
    fontSize: "18px",
    fontWeight: "bold",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    transition: "transform 0.2s",
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    background: "linear-gradient(to right, #8b5cf6, #ec4899, #ef4444)",
    color: "white",
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    background: "rgba(255,255,255,0.2)",
    color: "white",
    border: "2px solid rgba(255,255,255,0.3)",
  };

  const cardStyle = {
    padding: "24px",
    background: "rgba(255,255,255,0.95)",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    marginBottom: "20px",
    transition: "transform 0.2s",
  };

  const platformBoxStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "16px",
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.2)",
    marginBottom: "30px",
    maxWidth: "400px",
    margin: "0 auto 30px",
  };

  return (
    <section style={sectionStyle}>
      {/* Orbes de fond simples */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: "200px",
          height: "200px",
          background: "#FF0050",
          borderRadius: "50%",
          opacity: "0.1",
          filter: "blur(80px)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "300px",
          height: "300px",
          background: "#1DA1F2",
          borderRadius: "50%",
          opacity: "0.1",
          filter: "blur(100px)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "250px",
          height: "250px",
          background: "#8b5cf6",
          borderRadius: "50%",
          opacity: "0.1",
          filter: "blur(90px)",
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      <div style={containerStyle}>
        <div style={{ paddingTop: "80px", paddingBottom: "80px" }} />
        <div style={gridStyle}>
          {/* Section principale */}
          <div>
            {/* Badge animé */}
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
              <span
                style={{
                  display: "inline-block",
                  padding: "8px 20px",
                  background: "rgba(16, 185, 129, 0.2)",
                  color: "#10b981",
                  borderRadius: "50px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                }}
              >
                🔥 +922K analyses aujourdhui
              </span>
            </div>

            {/* Titre */}
            <h1 style={titleStyle}>
              <div>Découvre</div>
              <div style={{ ...gradientTextStyle }}>les tendances</div>
              <div style={{ display: "block" }}>virales</div>
            </h1>

            {/* Description */}
            <p style={descriptionStyle}>
              Intelligence artificielle pour analyser et prédire les tendances
              sur{" "}
              <span style={{ fontWeight: "bold", color: "#fbbf24" }}>
                tous les réseaux sociaux
              </span>{" "}
              en temps réel
            </p>

            {/* Indicateur de plateforme */}
            <div style={platformBoxStyle}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  background: currentPlatform.color,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  transition: "all 0.5s",
                }}
              >
                {currentPlatform.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}
                >
                  Analysant maintenant
                </div>
                <div
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {currentPlatform.name}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: "#10b981", fontWeight: "bold" }}>
                  {currentPlatform.growth}
                </div>
                <div
                  style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}
                >
                  cette semaine
                </div>
              </div>
            </div>

            {/* Boutons */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                marginBottom: "40px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={onCTAClick}
                style={primaryButtonStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <span>🚀</span>
                <span>Analyser maintenant</span>
              </button>

              <button
                style={secondaryButtonStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <span>📊</span>
                <span>Voir la démo</span>
              </button>
            </div>

            {/* Statistiques */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
                marginBottom: "40px",
                maxWidth: "500px",
                margin: "0 auto 40px",
              }}
            >
              {stats.map((stat, index) => (
                <div key={index} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "900",
                      color: "white",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Cartes des plateformes */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
                maxWidth: "900px",
                margin: "0 auto",
              }}
            >
              {platforms.slice(0, 3).map((platform) => (
                <div
                  key={platform.name}
                  style={cardStyle}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "translateY(-5px)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          background: platform.color,
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "24px",
                        }}
                      >
                        {platform.icon}
                      </div>
                      <div>
                        <div
                          style={{
                            fontWeight: "bold",
                            color: "#1f2937",
                            fontSize: "16px",
                          }}
                        >
                          {platform.name}
                        </div>
                        <div style={{ color: "#6b7280", fontSize: "14px" }}>
                          <span style={{ color: "#10b981" }}>↗</span>{" "}
                          {platform.growth} cette semaine
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      {viewsCount !== null && (
                        <div
                          style={{
                            fontSize: "24px",
                            fontWeight: "900",
                            color: "#1f2937",
                          }}
                        >
                          {viewsCount}M
                        </div>
                      )}

                      <div style={{ fontSize: "12px", color: "#6b7280" }}>
                        vues
                      </div>
                    </div>
                  </div>

                  {/* Mini graphique */}
                  <div
                    style={{
                      height: "60px",
                      background: "#f3f4f6",
                      borderRadius: "8px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        display: "flex",
                        alignItems: "flex-end",
                        height: "100%",
                        padding: "4px",
                        gap: "4px",
                      }}
                    >
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          style={{
                            flex: 1,
                            background: platform.color,
                            height: `${30 + Math.random() * 60}%`,
                            opacity: 0.7,
                            borderRadius: "4px 4px 0 0",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            width: "30px",
            height: "50px",
            border: "2px solid rgba(255,255,255,0.3)",
            borderRadius: "25px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "10px",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "10px",
              background: "rgba(255,255,255,0.8)",
              borderRadius: "2px",
              animation: "bounce 2s infinite",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

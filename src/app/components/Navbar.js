"use client";
import React, { useState, useEffect } from "react";
import {
  Home,
  TrendingUp,
  BarChart2,
  FileBarChart,
  Rocket,
  Info,
} from "lucide-react";

export default function Navbar({ onMenuItemClick }) {
  const [activeItem, setActiveItem] = useState("home");
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLargeDesktop, setIsLargeDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth > 768);
      setIsLargeDesktop(window.innerWidth > 1024);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const isMobile = !isDesktop;

  const navItems = [
    { id: "home", label: "Accueil", icon: <Home size={18} /> },
    { id: "trends", label: "Tendances", icon: <TrendingUp size={18} /> },
    { id: "analytics", label: "Analytics", icon: <BarChart2 size={18} /> },
    { id: "reports", label: "Rapports", icon: <FileBarChart size={18} /> },
    { id: "contact", label: "Contact", icon: <Info size={18} /> },
  ];

  const handleItemClick = (item) => {
    setActiveItem(item.id);
    if (onMenuItemClick) {
      onMenuItemClick(item);
    }
  };

  const getMenuItemStyle = (isActive) => ({
    ...styles.menuItem,
    background: isActive
      ? "linear-gradient(to right, #8b5cf6, #ec4899)"
      : "transparent",
    color: isActive ? "white" : "rgba(255,255,255,0.8)",
    boxShadow: isActive ? "0 10px 20px rgba(139,92,246,0.3)" : "none",
    transform: isActive ? "scale(1.05)" : "scale(1)",
  });

  return (
    <nav style={styles.nav}>
      {/* Animation pulse pour le badge LIVE */}
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>

      <div style={styles.container}>
        <div style={styles.navBar}>
          <div style={styles.flexContainer}>
            {/* Logo et marque */}
            <div style={styles.logoContainer}>
              {/* Icône animée */}
              <div
                style={styles.logoIcon}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <BarChart2 size={24} className="text-white" />
                {/* Badge Live animé */}
                <div style={styles.liveBadge}></div>
              </div>

              {/* Nom de l'app */}
              <div style={styles.brandContainer}>
                <h1 style={styles.title}>TrendScope</h1>
                <span style={styles.liveText}>LIVE</span>
              </div>
            </div>

            {/* Menu de navigation - visible sur desktop uniquement */}
            {isDesktop && (
              <ul style={styles.menu}>
                {navItems.map((item) => (
                  <li key={item.id} style={styles.menuListItem}>
                    <button
                      onClick={() => handleItemClick(item)}
                      style={getMenuItemStyle(activeItem === item.id)}
                      onMouseOver={(e) => {
                        if (activeItem !== item.id) {
                          e.currentTarget.style.backgroundColor =
                            "rgba(255,255,255,0.2)";
                          e.currentTarget.style.color = "white";
                        }
                      }}
                      onMouseOut={(e) => {
                        if (activeItem !== item.id) {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                        }
                      }}
                    >
                      <span style={styles.menuIcon}>{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* Bouton CTA - visible sur desktop large uniquement */}
            {isLargeDesktop && (
              <button
                style={styles.ctaButton}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(59,130,246,0.25)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <Rocket size={18} />
                <span>Testez Gratuitement</span>
              </button>
            )}

            {/* Menu mobile - visible sur mobile uniquement */}
            {isMobile && (
              <button style={styles.mobileMenu}>
                <svg
                  style={styles.mobileMenuIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "absolute", // ← SOLUTION ! Absolute = monte avec la page + se superpose au dégradé
    top: "0", // ← Tout en haut de la page
    left: "0", // ← Commence à gauche
    right: "0", // ← Va jusqu'à droite
    width: "100%", // ← Prend toute la largeur
    zIndex: "100", // ← Au-dessus du contenu mais pas trop haut
    padding: "24px 0", // ← Espacement fixe
  },
  container: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "0 24px",
  },
  navBar: {
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: "50px",
    padding: "16px 32px",
    // APPARENCE FIXE qui ne change jamais
    backgroundColor: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "none",
    position: "relative",
    width: "100%",
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  logoIcon: {
    position: "relative",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: "linear-gradient(to right, #8b5cf6, #ec4899)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  liveBadge: {
    position: "absolute",
    top: "-4px",
    right: "-4px",
    width: "16px",
    height: "16px",
    backgroundColor: "#ef4444",
    borderRadius: "50%",
    animation: "pulse 2s infinite",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "900",
    color: "white",
    margin: 0,
  },
  liveText: {
    padding: "4px 12px",
    backgroundColor: "#ef4444",
    color: "white",
    fontSize: "12px",
    borderRadius: "50px",
    fontWeight: "600",
    animation: "pulse 2s infinite",
  },
  menu: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  menuListItem: {
    listStyle: "none",
  },
  menuItem: {
    padding: "12px 24px",
    borderRadius: "50px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.3s ease",
    border: "none",
    cursor: "pointer",
  },
  menuIcon: {
    fontSize: "18px",
  },
  ctaButton: {
    padding: "12px 24px",
    background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
    color: "white",
    fontWeight: "600",
    borderRadius: "50px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  mobileMenu: {
    display: "none",
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
  },
  mobileMenuIcon: {
    width: "24px",
    height: "24px",
  },
};
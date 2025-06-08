// 📁 src/app/components/Navbar.js (VERSION SPA)
"use client";
import React, { useState, useEffect } from "react";
import {
  Home,
  BarChart2,
  FileBarChart,
  Rocket,
  Info,
  Flame,
} from "lucide-react";

export default function Navbar({ onMenuItemClick, activeSection }) {
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

  // Configuration des éléments de navigation pour SPA
  const navItems = [
    { 
      id: "home", 
      label: "Accueil", 
      icon: <Home size={18} />, 
      section: "home"  // ← Utilise 'section' au lieu de 'href'
    },
    { 
      id: "trends", 
      label: "Tendances", 
      icon: <Flame size={18} />, 
      section: "trends",  // ← Nom de la section à afficher
      badge: "🔥",
      isHot: true
    },
    { 
      id: "analytics", 
      label: "Analytics", 
      icon: <BarChart2 size={18} />, 
      section: "analytics"
    },
    { 
      id: "reports", 
      label: "Rapports", 
      icon: <FileBarChart size={18} />, 
      section: "reports"
    },
    { 
      id: "contact", 
      label: "Contact", 
      icon: <Info size={18} />, 
      section: "contact"
    },
  ];

  // ✅ Fonction de navigation SPA (pas de router.push)
  const handleItemClick = (item) => {
    console.log(`🚀 Navigation SPA vers: ${item.label} (${item.section})`);
    
    // Appelle la fonction du parent pour changer la section active
    if (onMenuItemClick) {
      onMenuItemClick(item);
    }
  };

  // Styles pour les éléments de menu
  const getMenuItemStyle = (isActive, isHot = false) => ({
    ...styles.menuItem,
    background: isActive
      ? isHot
        ? "linear-gradient(135deg, #ef4444, #f97316, #ec4899)"
        : "linear-gradient(to right, #8b5cf6, #ec4899)"
      : "transparent",
    color: isActive ? "white" : "rgba(255,255,255,0.8)",
    boxShadow: isActive 
      ? isHot
        ? "0 10px 30px rgba(239, 68, 68, 0.4)"
        : "0 10px 20px rgba(139,92,246,0.3)"
      : "none",
    transform: isActive ? "scale(1.05)" : "scale(1)",
    position: "relative",
  });

  const isMobile = !isDesktop;

  return (
    <nav style={styles.nav}>
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        
        @keyframes fire {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1) rotate(0deg);
          }
          25% { 
            opacity: 0.8; 
            transform: scale(1.1) rotate(-2deg);
          }
          75% { 
            opacity: 0.9; 
            transform: scale(1.05) rotate(2deg);
          }
        }
        
        .fire-badge {
          animation: fire 2s infinite;
        }
      `}</style>

      <div style={styles.container}>
        <div style={styles.navBar}>
          <div style={styles.flexContainer}>
            {/* Logo */}
            <div 
              style={styles.logoContainer}
              onClick={() => handleItemClick({ section: "home", label: "Accueil" })}
            >
              <div style={styles.logoIcon}>
                <BarChart2 size={24} />
                <div style={styles.liveBadge}></div>
              </div>
              <div style={styles.brandContainer}>
                <h1 style={styles.title}>TrendScope</h1>
                <span style={styles.liveText}>LIVE</span>
              </div>
            </div>

            {/* Menu Desktop */}
            {isDesktop && (
              <ul style={styles.menu}>
                {navItems.map((item) => {
                  const isActive = activeSection === item.section;
                  return (
                    <li key={item.id} style={styles.menuListItem}>
                      <button
                        onClick={() => handleItemClick(item)}
                        style={getMenuItemStyle(isActive, item.isHot)}
                        className={item.isHot && isActive ? "fire-badge" : ""}
                      >
                        <span style={styles.menuIcon}>{item.icon}</span>
                        <span>{item.label}</span>
                        
                        {item.badge && (
                          <span 
                            className="fire-badge"
                            style={{
                              ...styles.itemBadge,
                              background: item.isHot 
                                ? "linear-gradient(135deg, #ef4444, #f97316)"
                                : "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                            }}
                          >
                            {item.badge}
                          </span>
                        )}
                        
                        {item.id === "trends" && (
                          <span style={styles.newIndicator}>NEW</span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}

            {/* CTA Button */}
            {isLargeDesktop && (
              <button style={styles.ctaButton}>
                <Rocket size={18} />
                <span>Testez Gratuitement</span>
              </button>
            )}

            {/* Menu Mobile */}
            {isMobile && (
              <div style={styles.mobileContainer}>
                <button 
                  onClick={() => handleItemClick(navItems.find(item => item.id === "trends"))}
                  style={styles.mobileTrendsButton}
                >
                  <Flame size={20} />
                  <span className="fire-badge" style={styles.mobileFireBadge}>🔥</span>
                </button>
                
                <button style={styles.mobileMenu}>
                  <svg style={styles.mobileMenuIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    width: "100%",
    zIndex: "100",
    padding: "24px 0",
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
    cursor: "pointer",
    color: "inherit",
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
    color: "white",
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
    position: "relative",
  },
  menuIcon: {
    fontSize: "18px",
  },
  itemBadge: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    padding: "2px 6px",
    borderRadius: "10px",
    fontSize: "10px",
    fontWeight: "700",
    color: "white",
    minWidth: "18px",
    height: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  newIndicator: {
    position: "absolute",
    top: "-12px",
    right: "-12px",
    padding: "2px 6px",
    background: "linear-gradient(135deg, #10b981, #059669)",
    color: "white",
    fontSize: "8px",
    fontWeight: "700",
    borderRadius: "8px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  ctaButton: {
    padding: "12px 24px",
    background: "linear-gradient(135deg, #ef4444, #f97316, #3b82f6)",
    color: "white",
    fontWeight: "600",
    borderRadius: "50px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    position: "relative",
    boxShadow: "0 10px 20px rgba(59,130,246,0.3)",
  },
  mobileContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  mobileTrendsButton: {
    position: "relative",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #ef4444, #f97316)",
    border: "none",
    color: "white",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)",
  },
  mobileFireBadge: {
    position: "absolute",
    top: "-4px",
    right: "-4px",
    fontSize: "12px",
  },
  mobileMenu: {
    display: "flex",
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: "12px",
    padding: "8px",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  mobileMenuIcon: {
    width: "24px",
    height: "24px",
  },
};

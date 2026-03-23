import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import wattchainImg1 from "../assets/p2p IoT.png";
import wattchainImg2 from "../assets/p2p website.png";
import amNexusCapitalImg from "../assets/AmNexusCapital.png";
import verydormImg from "../assets/verydorm.png";
import spamDetectorVideo from "../assets/sparm detector model.mp4";
import trexCollectionImg from "../assets/ecommerce site.jpg";
const PRIMARY = "#8c2bee";

const NAV_LINKS = [
   {label: "Home",      to: "/"           },
  { label: "Projects",   to: "/project"   },
  { label: "Experience", to: "/experience" },
];
const PROJECTS = [
   {tags: ["Python","PostgreSQL","NextJs","Flask","FastAPI","IoT"], title: "WATTCHAIN",badge: "Production",
    desc: "An IoT P2P Green Energy Marketplace connecting households with installed solar panels enabling them trade extra solar energy going into waste, built with IoT, Python, React, Tailwind CSS, and Flask.",
    images: [wattchainImg1, wattchainImg2]},
    { tags: ["React Js","Node.js","Firebase"], title: "AM NEXUS CAPITAL",badge: "Live",
    desc: "Full-stack boutique advisory firm connecting ambitious enterprises with institutional capital.",
    image: amNexusCapitalImg},
  { tags: ["React Js","Node.js","Firebase"], title: "VERYDORM",badge: "Live",
    desc: "property management with Verydorm where blockchain meets trust, security, and prosperity.",
    image: verydormImg },
  { tags: ["scikit-learn","Python","MongoDB","pandas","FastAPI"], title: "SPAM DETECTOR MODEL",badge: "Production",
    desc: "A machine learning model for detecting spam emails.",
    image: spamDetectorVideo,
    mediaType: "video" },
    { tags: ["Python","Django"], title:"Trex Collection", badge: "production",
    desc: "Django-based e-commerce platform with full shopping features",
    image: trexCollectionImg },
];

const FILTERS = ["All Projects","React Js","Python","Node.js","PostgreSQL","MongoDB","Firebase","FastAPI","Django","scikit-learn","Flask"];

export default function Projects() {
  const [filter, setFilter] = useState("All Projects");
  const [theme, setTheme]   = useState("dark");
  const [imageIndices, setImageIndices] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices(prevIndices => {
        const newIndices = { ...prevIndices };
        PROJECTS.forEach(project => {
          if (project.images && project.images.length > 1) {
            const currentIdx = newIndices[project.title] || 0;
            newIndices[project.title] = (currentIdx + 1) % project.images.length;
          }
        });
        return newIndices;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const dark    = theme === "dark";
  const bg      = dark ? "#0d0f14" : "#f7f6f8";
  const surface = dark ? "#13151b" : "#ffffff";
  const border  = dark ? "#1e2128" : "#e2e8f0";
  const text    = dark ? "#f1f5f9" : "#0f172a";
  const muted   = dark ? "#64748b" : "#64748b";

  const displayed = filter === "All Projects" ? PROJECTS : PROJECTS.filter(p => p.tags.includes(filter));

  return (
    <div style={{ fontFamily: "Inter, sans-serif", backgroundColor: bg, color: text, minHeight: "100vh", width: "100%" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined { font-family:'Material Symbols Outlined'; font-weight:normal; font-style:normal; font-size:24px; line-height:1; display:inline-block; white-space:nowrap; -webkit-font-smoothing:antialiased; }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { width: 100%; min-height: 100vh; }
        @keyframes ping { 75%,100%{transform:scale(2);opacity:0} }
        .proj-card { transition: transform 0.2s, border-color 0.2s; }
        .proj-card:hover { transform: translateY(-4px); border-color: ${PRIMARY} !important; }
        .proj-card:hover .card-title { color: ${PRIMARY}; }
        .filter-btn:hover { border-color: ${PRIMARY} !important; color: ${PRIMARY} !important; }
        .footer-a { text-decoration: none; transition: color 0.18s; }
        .footer-a:hover { color: ${PRIMARY} !important; }
      `}</style>

      <Navbar
        logo={{ text:"GIFTON ISIKA MWANGE", icon: "terminal" }}
        links={NAV_LINKS}
        ctaLabel="Ready to collaborate"
        ctaIcon="handshake"
        theme={theme}
        onThemeToggle={() => setTheme(t => t === "dark" ? "light" : "dark")}
      />

      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>

        {/* Header */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 44 }}>
          <div style={{ maxWidth: 600 }}>
            <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 12 }}>Featured Projects</h1>
            <p style={{ fontSize: 16, color: muted, lineHeight: 1.72 }}>Projects that reflect my passion for backend engineering, structured problem-solving, and building systems that align with real business needs.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: muted, backgroundColor: surface, padding: "8px 16px", borderRadius: 9999, border: `1px solid ${border}`, whiteSpace: "nowrap" }}>
            <span style={{ position: "relative", display: "inline-flex", width: 8, height: 8 }}>
              <span style={{ position: "absolute", inset: 0, borderRadius: "50%", backgroundColor: "#10b981", animation: "ping 1.4s infinite" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#10b981", display: "inline-block" }} />
            </span>
            Available for new opportunities
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
          {FILTERS.map(f => (
            <button key={f} className="filter-btn" onClick={() => setFilter(f)}
              style={{ padding: "7px 18px", fontSize: 13, fontWeight: 600, borderRadius: 8, border: `1px solid ${f === filter ? PRIMARY : border}`, backgroundColor: f === filter ? PRIMARY : surface, color: f === filter ? "#fff" : muted, cursor: "pointer", transition: "all 0.18s" }}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
          {displayed.map(({ tags, title, desc, image, images, badge, live, github, mediaType }) => {
            const hasMultipleImages = images && images.length > 1;
            const currentImageIndex = imageIndices[title] || 0;
            const currentImage = images ? images[currentImageIndex] : image;
            return (
            <div key={title} className="proj-card"
              style={{ display: "flex", flexDirection: "column", backgroundColor: surface, borderRadius: 12, border: `1px solid ${border}`, overflow: "hidden" }}>
              <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                {mediaType === "video" ? (
                  <video
                    src={image}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img src={currentImage} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                )}
                {badge && <span style={{ position: "absolute", top: 10, right: 10, backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)", color: "#fff", fontSize: 9, fontWeight: 700, padding: "4px 8px", borderRadius: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{badge}</span>}
                {hasMultipleImages && (
                  <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6 }}>
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setImageIndices({ ...imageIndices, [title]: idx })}
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          border: "none",
                          backgroundColor: idx === currentImageIndex ? PRIMARY : "rgba(255,255,255,0.5)",
                          cursor: "pointer",
                          transition: "all 0.2s"
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div style={{ padding: 22, flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                  {tags.map(t => <span key={t} style={{ fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 4, backgroundColor: "rgba(140,43,238,0.1)", color: PRIMARY, border: "1px solid rgba(140,43,238,0.2)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t}</span>)}
                </div>
                <h3 className="card-title" style={{ fontSize: 17, fontWeight: 700, color: text, marginBottom: 8, transition: "color 0.18s" }}>{title}</h3>
                <p style={{ fontSize: 13, color: muted, lineHeight: 1.7, flex: 1 }}>{desc}</p>
                <div style={{ marginTop: 18, paddingTop: 18, borderTop: `1px solid ${border}`, display: "flex", gap: 10 }}>
                  {live && (
    <a
      href={live}
      target="_blank"
      rel="noopener noreferrer"
      style={{ flex: 1, textDecoration: "none" }}
    >
      <button
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          fontSize: 13,
          fontWeight: 700,
          padding: "9px",
          borderRadius: 7,
          backgroundColor: PRIMARY,
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: 15 }}>
          open_in_new
        </span>
        Live Demo
      </button>
    </a>
  )}

  {github && (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <button
        style={{
          padding: "9px 11px",
          borderRadius: 7,
          border: `1px solid ${border}`,
          backgroundColor: "transparent",
          color: muted,
          cursor: "pointer",
          display: "flex",
          alignItems: "center"
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
          code
        </span>
      </button>
    </a>
  )}
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: 60, textAlign: "center" }}>
          <p style={{ color: muted, marginBottom: 18, fontSize: 15 }}>Want to see more technical explorations?</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a 
  href="https://github.com/isikagifton123456789" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{ textDecoration: "none" }}
>
  <button
    style={{
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "11px 26px",
      borderRadius: 8,
      border: `1px solid ${border}`,
      backgroundColor: surface,
      color: text,
      fontWeight: 700,
      cursor: "pointer",
      fontSize: 14
    }}
  >
    <span className="material-symbols-outlined">hub</span>
    Explore GitHub
  </button>
</a>
            <button onClick={() => navigate("/experience")}
              style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 26px", borderRadius: 8, backgroundColor: PRIMARY, color: "#fff", fontWeight: 700, border: "none", cursor: "pointer", fontSize: 14 }}>
              View Experience <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>

       <footer style={{ borderTop: `1px solid ${border}`, padding: "32px 40px", backgroundColor: dark ? "rgba(19,19,22,0.6)" : "#f1f5f9", position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <p style={{ fontSize: 13, color: muted }}>© 2026 Gifton Isika. All rights reserved.</p>
         <div style={{ display: "flex", gap: 24 }}>
  {[
    { 
      icon: "link", 
      label: "GitHub", 
      href: "https://github.com/isikagifton123456789" 
    },
    { 
      icon: "link", 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/giftonmwange/" 
    },
    { 
      icon: "mail", 
      label: "Email", 
      href: "mailto:mwangegifton@gmail.com" 
    }
  ].map(({ icon, label, href }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="footer-a"
      style={{
        color: muted,
        display: "flex",
        alignItems: "center",
        gap: 5,
        fontSize: 13,
        textDecoration: "none"
      }}
    >
      <span
        className="material-symbols-outlined"
        style={{ fontSize: 16 }}
      >
        {icon}
      </span>
      {label}
    </a>
  ))}
</div>
        </div>
      </footer>
    </div>
  );
}
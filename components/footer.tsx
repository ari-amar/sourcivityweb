import Image from "next/image"

const FOOTER_LINKS = [
  { title: "Product", links: ["Features", "How It Works", "Demo", "Pricing"] },
  { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
]

export function Footer() {
  return (
    <>
      <style>{`
        @keyframes footer-pulse { 0%,100% { opacity:1;} 50% { opacity:0.5;} }
        .footer-link { color: #6b7280; transition: color 0.2s; }
        .footer-link:hover { color: #f0f0f8; }
      `}</style>
      <footer
        style={{
          background: "#050508",
          borderTop: "1px solid #1e1e28",
          padding: "60px 24px 40px",
          color: "#f0f0f8",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr repeat(3, 1fr)",
              gap: 40,
              marginBottom: 60,
            }}
          >
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <Image
                  src="/sourcivity-logo.png"
                  alt="Sourcivity"
                  width={28}
                  height={28}
                  style={{ width: 28, height: 28, objectFit: "contain" }}
                />
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    backgroundImage: "linear-gradient(120deg, #fff 30%, #00b7eb)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  Sourcivity
                </span>
              </div>
              <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65, maxWidth: 220 }}>
                AI-powered supplier discovery for manufacturing and engineering teams.
              </p>
            </div>

            {FOOTER_LINKS.map((col) => (
              <div key={col.title}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#f0f0f8",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  {col.title}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer-link" style={{ fontSize: 13, textDecoration: "none" }}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            style={{
              borderTop: "1px solid #1e1e28",
              paddingTop: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <p style={{ fontSize: 13, color: "#4a4a5a" }}>© 2026 Sourcivity. All rights reserved.</p>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#10b981",
                  animation: "footer-pulse 2s infinite",
                }}
              />
              <span style={{ fontSize: 12, color: "#4a4a5a" }}>All systems operational</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

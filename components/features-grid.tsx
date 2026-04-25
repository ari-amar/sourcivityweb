"use client"

import { useState } from "react"

const SearchIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

const ChartIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 20V10M12 20V4M6 20v-6" />
  </svg>
)

const MailIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const BoltIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

const FEATURES = [
  {
    Icon: SearchIcon,
    label: "AI-Powered Search",
    desc: "Natural language queries understood like a senior engineer. Search by part number, spec, or plain description.",
    detail: "Semantic matching across 500+ supplier catalogues.",
  },
  {
    Icon: ChartIcon,
    label: "Smart Ranking",
    desc: "Results ranked by relevance, supplier reliability, stock, and lead time. Pro tips on every result.",
    detail: "Key considerations flagged automatically.",
  },
  {
    Icon: MailIcon,
    label: "Automated RFQ",
    desc: "Generate personalized, context-aware RFQ emails per supplier. Track replies and follow-ups in one inbox.",
    detail: "Never miss a supplier response again.",
  },
  {
    Icon: BoltIcon,
    label: "Agentic Workflow",
    desc: "An AI agent that handles your full procurement loop — finding, contacting, and following up with suppliers autonomously.",
    detail: "Focus on engineering, not emails.",
  },
]

export function FeaturesGrid() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <>
      <style>{`
        @keyframes features-shimmer { 0% { transform: translateX(-100%);} 100% { transform: translateX(200%);} }
      `}</style>
      <section
        id="features"
        style={{
          padding: "100px 24px",
          background: "#050508",
          position: "relative",
          color: "#f0f0f8",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 800,
            height: 300,
            background: "radial-gradient(ellipse, rgba(0,183,235,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div
              style={{
                display: "inline-block",
                padding: "5px 14px",
                borderRadius: 100,
                marginBottom: 16,
                background: "rgba(0,183,235,0.08)",
                border: "1px solid rgba(0,183,235,0.2)",
                fontSize: 12,
                fontWeight: 600,
                color: "#00b7eb",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Platform Capabilities
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                marginBottom: 16,
              }}
            >
              Everything you need to source faster
            </h2>
            <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 520, margin: "0 auto" }}>
              From first search to signed quote — one AI-powered platform.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {FEATURES.map((f, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: hovered === i ? "#16161e" : "#111118",
                  border: `1.5px solid ${hovered === i ? "rgba(0,183,235,0.35)" : "#1e1e28"}`,
                  borderRadius: 16,
                  padding: "28px 24px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  transform: hovered === i ? "translateY(-4px)" : "none",
                  boxShadow:
                    hovered === i
                      ? "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,183,235,0.1)"
                      : "none",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {hovered === i && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: 0.6,
                      background:
                        "linear-gradient(105deg, transparent 40%, rgba(0,183,235,0.04) 50%, transparent 60%)",
                      animation: "features-shimmer 1.5s infinite",
                      pointerEvents: "none",
                    }}
                  />
                )}
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    fontFamily: "'Space Mono', monospace",
                    color: "#4a4a5a",
                    marginBottom: 16,
                    letterSpacing: "0.1em",
                  }}
                >
                  0{i + 1}
                </div>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    marginBottom: 18,
                    background: hovered === i ? "rgba(0,183,235,0.2)" : "rgba(0,183,235,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#00b7eb",
                    transition: "background 0.3s",
                  }}
                >
                  <f.Icon size={20} />
                </div>
                <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.01em" }}>
                  {f.label}
                </div>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6, marginBottom: 12 }}>{f.desc}</p>
                <div
                  style={{
                    fontSize: 12,
                    color: hovered === i ? "#00b7eb" : "#4a4a5a",
                    fontWeight: 500,
                    transition: "color 0.3s",
                  }}
                >
                  {f.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

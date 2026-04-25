"use client"

import { useState } from "react"

const STEPS = [
  {
    n: 1,
    title: "Search by Component",
    desc: "Enter a part name, spec, or description. AI interprets your query like a senior engineer.",
  },
  {
    n: 2,
    title: "Review AI Matches",
    desc: "Results ranked by fit, reliability, and lead time. Each result includes pro tips and key considerations.",
  },
  {
    n: 3,
    title: "Browse Supplier Pages",
    desc: "Click through to live product pages with full technical specs and datasheets.",
  },
  {
    n: 4,
    title: "Build Your RFQ Cart",
    desc: "Add parts from multiple suppliers into a single consolidated cart.",
  },
  {
    n: 5,
    title: "Generate & Send RFQs",
    desc: "AI writes personalized emails per supplier. Review, edit if needed, and send from one place.",
  },
  {
    n: 6,
    title: "Track All Responses",
    desc: "See every reply, follow-up, and quote in your Messages Dashboard. AI helps you respond.",
  },
]

const ArrowRight = ({ size = 16 }: { size?: number }) => (
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
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

export function WorkflowSection() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section
      id="how-it-works"
      style={{
        padding: "100px 24px",
        background: "#0d0d12",
        position: "relative",
        color: "#f0f0f8",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
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
            User Journey
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              marginBottom: 16,
            }}
          >
            How Sourcivity Works
          </h2>
          <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 480, margin: "0 auto" }}>
            From search to signed quote in under 10 minutes.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 14,
          }}
        >
          {STEPS.map((s, i) => (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
                padding: "24px 22px",
                borderRadius: 14,
                border: `1.5px solid ${active === i ? "rgba(0,183,235,0.35)" : "#1e1e28"}`,
                background: active === i ? "rgba(0,183,235,0.04)" : "#111118",
                cursor: "default",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  flexShrink: 0,
                  background: active === i ? "#00b7eb" : "rgba(0,183,235,0.12)",
                  color: active === i ? "#000" : "#00b7eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 800,
                  transition: "all 0.3s",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                {s.n}
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6, letterSpacing: "-0.01em" }}>
                  {s.title}
                </div>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 44 }}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdK0ISylSaB5qQMRNj9Q2BLRHnGgh6cCZ0hcWuDnAd1SpyOAw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              borderRadius: 10,
              textDecoration: "none",
              background: "transparent",
              border: "1.5px solid rgba(0,183,235,0.3)",
              color: "#00b7eb",
              fontSize: 14,
              fontWeight: 600,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,183,235,0.1)"
              e.currentTarget.style.borderColor = "rgba(0,183,235,0.5)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent"
              e.currentTarget.style.borderColor = "rgba(0,183,235,0.3)"
            }}
          >
            Get Early Access <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

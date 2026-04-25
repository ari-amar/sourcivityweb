"use client"

import { useIsMobile } from "@/lib/use-mobile"

export function StatsBar() {
  const isMobile = useIsMobile()
  const stats = [
    { value: "500+", label: "Verified Suppliers" },
    { value: "10×", label: "Faster Sourcing" },
    { value: "< 60s", label: "First Results" },
    { value: "6 Steps", label: "Full Workflow" },
  ]

  return (
    <div
      style={{
        borderTop: "1px solid #1e1e28",
        borderBottom: "1px solid #1e1e28",
        background: "#0d0d12",
        padding: isMobile ? "20px 16px" : "28px 24px",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)",
          gap: isMobile ? 14 : 16,
          textAlign: "center",
        }}
      >
        {stats.map((s) => (
          <div key={s.label}>
            <div
              style={{
                fontSize: isMobile ? 22 : 28,
                fontWeight: 700,
                color: "#00b7eb",
                letterSpacing: "-0.02em",
                fontFamily: "'Space Mono', monospace",
              }}
            >
              {s.value}
            </div>
            <div style={{ fontSize: isMobile ? 11 : 13, color: "#6b7280", marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

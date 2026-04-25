"use client"

import { useEffect, useState } from "react"
import { useIsMobile } from "@/lib/use-mobile"

const SEARCH_QUERIES = [
  "precision linear bearing 12mm shaft",
  "pneumatic cylinder 50mm bore ISO 15552",
  "M8 stainless socket head cap screw",
  "brushless DC motor 24V 200W",
  'SMC solenoid valve 5/2 way 1/4"',
]

const MOCK_RESULTS = [
  {
    name: "Thomson Industries",
    product: "Linear Ball Bushing LM12UU",
    match: 97,
    country: "🇺🇸",
    type: "OEM",
    datasheet: true,
    bore: "12mm",
    load: "27N",
    price: "$4.20–$8.90",
  },
  {
    name: "SKF Group",
    product: "Linear Bearing Unit LBBR 12-2LS",
    match: 94,
    country: "🇸🇪",
    type: "OEM",
    datasheet: true,
    bore: "12mm",
    load: "32N",
    price: "$6.50–$12.00",
  },
  {
    name: "Misumi USA",
    product: "Linear Bushing Standard LMB12",
    match: 91,
    country: "🇯🇵",
    type: "Dist.",
    datasheet: true,
    bore: "12mm",
    load: "24N",
    price: "$3.80–$7.20",
  },
]

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

const SparkleIcon = ({ size = 20 }: { size?: number }) => (
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
    <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
  </svg>
)

export function HeroSection() {
  const [queryIdx, setQueryIdx] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const full = SEARCH_QUERIES[queryIdx]
    let timeout: ReturnType<typeof setTimeout>
    if (!isDeleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 45)
    } else if (!isDeleting && displayed.length === full.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 22)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setQueryIdx((queryIdx + 1) % SEARCH_QUERIES.length)
    }
    return () => clearTimeout(timeout!)
  }, [displayed, isDeleting, queryIdx])

  useEffect(() => {
    const t = setTimeout(() => setShowResults(true), 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <style>{`
        @keyframes hero-fadeUp { from { opacity:0; transform: translateY(24px);} to { opacity:1; transform: translateY(0);} }
        @keyframes hero-pulse { 0%,100% { opacity:1;} 50% { opacity:0.5;} }
        @keyframes hero-blink { 0%,100% { opacity:1;} 50% { opacity:0;} }
        @keyframes hero-glow { 0%,100% { box-shadow: 0 0 20px rgba(0,183,235,0.2);} 50% { box-shadow: 0 0 40px rgba(0,183,235,0.45);} }
        .hero-fade-up { animation: hero-fadeUp 0.6s ease both; }
        .hero-delay-1 { animation-delay: 0.1s; }
        .hero-delay-2 { animation-delay: 0.2s; }
        .hero-delay-3 { animation-delay: 0.3s; }
        .hero-delay-4 { animation-delay: 0.4s; }
      `}</style>
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: isMobile ? "96px 16px 64px" : "120px 24px 80px",
          position: "relative",
          overflow: "hidden",
          background: "#050508",
          color: "#f0f0f8",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.15,
            backgroundImage:
              "linear-gradient(rgba(0,183,235,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,183,235,0.12) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(0,183,235,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 800, width: "100%", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div
            className="hero-fade-up"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 100,
              marginBottom: 28,
              background: "rgba(0,183,235,0.08)",
              border: "1px solid rgba(0,183,235,0.2)",
              fontSize: 13,
              fontWeight: 500,
              color: "#00b7eb",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#10b981",
                display: "inline-block",
                animation: "hero-pulse 2s infinite",
              }}
            />
            Now in Early Access
          </div>

          <h1
            className="hero-fade-up hero-delay-1"
            style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: 24,
            }}
          >
            Find the right supplier
            <br />
            <span
              style={{
                backgroundImage:
                  "linear-gradient(120deg, #00b7eb 0%, #60d8ff 60%, #00b7eb 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              in seconds, not days.
            </span>
          </h1>

          <p
            className="hero-fade-up hero-delay-2"
            style={{
              fontSize: isMobile ? 16 : 20,
              color: "#6b7280",
              lineHeight: 1.6,
              maxWidth: 560,
              margin: isMobile ? "0 auto 32px" : "0 auto 44px",
            }}
          >
            AI-powered supplier discovery for engineering teams. Search by component name or spec — get verified
            matches instantly.
          </p>

          <div className="hero-fade-up hero-delay-3" style={{ maxWidth: 640, margin: "0 auto 16px" }}>
            <div
              style={{
                position: "relative",
                background: "#111118",
                border: "1.5px solid #2a2a38",
                borderRadius: 14,
                padding: isMobile ? "14px 12px 14px 44px" : "18px 20px 18px 52px",
                display: "flex",
                alignItems: "center",
                boxShadow: "0 0 0 1px rgba(0,183,235,0.1), 0 20px 60px rgba(0,0,0,0.5)",
                cursor: "pointer",
                transition: "border-color 0.3s, box-shadow 0.3s",
                animation: "hero-glow 3s ease-in-out infinite",
              }}
              onClick={() => window.open("https://demo.sourcivity.io/", "_blank")}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,183,235,0.5)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2a2a38"
              }}
            >
              <div style={{ position: "absolute", left: isMobile ? 14 : 18, color: "#6b7280" }}>
                <SearchIcon size={isMobile ? 18 : 20} />
              </div>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: isMobile ? 13 : 15,
                  color: "#f0f0f8",
                  flex: 1,
                  textAlign: "left",
                  minHeight: 22,
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {displayed}
                <span
                  style={{
                    display: "inline-block",
                    width: 2,
                    height: "1em",
                    background: "#00b7eb",
                    marginLeft: 2,
                    verticalAlign: "text-bottom",
                    animation: "hero-blink 1s step-end infinite",
                  }}
                />
              </span>
              <div
                style={{
                  padding: isMobile ? "6px 12px" : "8px 18px",
                  borderRadius: 8,
                  background: "#00b7eb",
                  color: "#000",
                  fontSize: isMobile ? 12 : 13,
                  fontWeight: 700,
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                  marginLeft: 8,
                }}
              >
                {isMobile ? "Go" : "Search"}
              </div>
            </div>
            <p style={{ fontSize: 12, color: "#4a4a5a", marginTop: 10 }}>Click to try the live demo →</p>
          </div>

          <div
            className="hero-fade-up hero-delay-4"
            style={{
              maxWidth: 640,
              margin: "32px auto 0",
              opacity: showResults ? 1 : 0,
              transform: showResults ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            <div
              style={{
                background: "#111118",
                border: "1px solid #1e1e28",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
              }}
            >
              <div
                style={{
                  padding: "12px 20px",
                  borderBottom: "1px solid #1e1e28",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#16161e",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13,
                    color: "#6b7280",
                  }}
                >
                  <SparkleIcon size={14} />{" "}
                  <span style={{ color: "#00b7eb", fontWeight: 600 }}>3 suppliers found</span> · precision linear
                  bearing 12mm
                </div>
                <div style={{ fontSize: 11, color: "#4a4a5a", fontFamily: "'Space Mono', monospace" }}>0.4s</div>
              </div>

              {!isMobile && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 28px 80px 60px 60px 64px 56px",
                    padding: "8px 16px",
                    borderBottom: "1px solid #1e1e28",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  {["Part / Supplier", "DS", "Bore", "Load", "Type", "Price", ""].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: "#4a4a5a",
                        letterSpacing: "0.07em",
                        textTransform: "uppercase",
                        textAlign: i > 1 ? "center" : "left",
                      }}
                    >
                      {h}
                    </div>
                  ))}
                </div>
              )}

              {MOCK_RESULTS.map((r, i) =>
                isMobile ? (
                  <div
                    key={i}
                    style={{
                      padding: "14px 14px",
                      borderBottom: i < 2 ? "1px solid #1e1e28" : "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                      <a
                        href="#"
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#00b7eb",
                          textDecoration: "none",
                          flex: 1,
                          minWidth: 0,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {r.product}
                      </a>
                      <button
                        style={{
                          padding: "4px 10px",
                          borderRadius: 5,
                          fontSize: 10,
                          fontWeight: 700,
                          background: "rgba(0,183,235,0.12)",
                          color: "#00b7eb",
                          border: "1px solid rgba(0,183,235,0.3)",
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}
                      >
                        + RFQ
                      </button>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 13 }}>{r.country}</span>
                      <span style={{ fontSize: 11, color: "#6b7280" }}>{r.name}</span>
                      <span
                        style={{
                          fontSize: 9,
                          fontWeight: 700,
                          padding: "1px 5px",
                          borderRadius: 3,
                          background: "rgba(0,183,235,0.1)",
                          color: "#00b7eb",
                          border: "1px solid rgba(0,183,235,0.2)",
                        }}
                      >
                        {r.type}
                      </span>
                      <span
                        style={{
                          fontSize: 9,
                          fontWeight: 700,
                          padding: "1px 5px",
                          borderRadius: 3,
                          background: "rgba(16,185,129,0.1)",
                          color: "#10b981",
                          border: "1px solid rgba(16,185,129,0.2)",
                        }}
                      >
                        {r.match}% match
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: 14,
                        fontSize: 11,
                        color: "#6b7280",
                        fontFamily: "'Space Mono', monospace",
                        flexWrap: "wrap",
                      }}
                    >
                      <span>
                        Bore <span style={{ color: "#f0f0f8" }}>{r.bore}</span>
                      </span>
                      <span>
                        Load <span style={{ color: "#f0f0f8" }}>{r.load}</span>
                      </span>
                      <span>{r.price}</span>
                      <span>{r.datasheet ? "📄" : "—"}</span>
                    </div>
                  </div>
                ) : (
                  <div
                    key={i}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 28px 80px 60px 60px 64px 56px",
                      padding: "12px 16px",
                      borderBottom: i < 2 ? "1px solid #1e1e28" : "none",
                      alignItems: "center",
                      transition: "background 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,183,235,0.04)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <div style={{ minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                        <a
                          href="#"
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: "#00b7eb",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {r.product}
                        </a>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                        <span style={{ fontSize: 14 }}>{r.country}</span>
                        <span style={{ fontSize: 11, color: "#6b7280" }}>{r.name}</span>
                        <span
                          style={{
                            fontSize: 9,
                            fontWeight: 700,
                            padding: "1px 5px",
                            borderRadius: 3,
                            background: "rgba(0,183,235,0.1)",
                            color: "#00b7eb",
                            border: "1px solid rgba(0,183,235,0.2)",
                          }}
                        >
                          {r.type}
                        </span>
                        <span
                          style={{
                            fontSize: 9,
                            fontWeight: 700,
                            padding: "1px 5px",
                            borderRadius: 3,
                            background: "rgba(16,185,129,0.1)",
                            color: "#10b981",
                            border: "1px solid rgba(16,185,129,0.2)",
                          }}
                        >
                          {r.match}% match
                        </span>
                      </div>
                    </div>
                    <div style={{ textAlign: "center", fontSize: 16 }}>{r.datasheet ? "📄" : "—"}</div>
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: 12,
                        color: "#f0f0f8",
                        fontFamily: "'Space Mono', monospace",
                      }}
                    >
                      {r.bore}
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: 12,
                        color: "#f0f0f8",
                        fontFamily: "'Space Mono', monospace",
                      }}
                    >
                      {r.load}
                    </div>
                    <div style={{ textAlign: "center", fontSize: 11, color: "#6b7280" }}>{r.type}</div>
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: 11,
                        color: "#6b7280",
                        fontFamily: "'Space Mono', monospace",
                      }}
                    >
                      {r.price}
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <button
                        style={{
                          padding: "4px 10px",
                          borderRadius: 5,
                          fontSize: 10,
                          fontWeight: 700,
                          background: "rgba(0,183,235,0.12)",
                          color: "#00b7eb",
                          border: "1px solid rgba(0,183,235,0.3)",
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                        }}
                      >
                        + RFQ
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

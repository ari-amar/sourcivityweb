"use client"

const SparkleIcon = ({ size = 13 }: { size?: number }) => (
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

export function CTASection() {
  return (
    <>
      <style>{`
        @keyframes cta-glow { 0%,100% { box-shadow: 0 0 20px rgba(0,183,235,0.2);} 50% { box-shadow: 0 0 40px rgba(0,183,235,0.45);} }
      `}</style>
      <section
        style={{
          padding: "100px 24px",
          background: "#0d0d12",
          position: "relative",
          overflow: "hidden",
          color: "#f0f0f8",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(0,183,235,0.12) 1px, transparent 0)",
            backgroundSize: "40px 40px",
            opacity: 0.5,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 700,
            height: 400,
            background: "radial-gradient(ellipse, rgba(0,183,235,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <div
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
            <SparkleIcon size={13} /> Ready to Get Started?
          </div>

          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: 20,
            }}
          >
            Join the future of
            <br />
            <span
              style={{
                backgroundImage: "linear-gradient(120deg, #00b7eb, #60d8ff)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              parts sourcing.
            </span>
          </h2>

          <p style={{ fontSize: 18, color: "#6b7280", marginBottom: 44, lineHeight: 1.6 }}>
            Be among the first teams to experience AI-powered supplier discovery and procurement.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdK0ISylSaB5qQMRNj9Q2BLRHnGgh6cCZ0hcWuDnAd1SpyOAw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 36px",
              borderRadius: 12,
              textDecoration: "none",
              background: "#00b7eb",
              color: "#000",
              fontSize: 16,
              fontWeight: 700,
              boxShadow: "0 0 40px rgba(0,183,235,0.4)",
              transition: "all 0.3s",
              animation: "cta-glow 2.5s ease-in-out infinite",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#22ccff"
              e.currentTarget.style.transform = "translateY(-2px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#00b7eb"
              e.currentTarget.style.transform = "none"
            }}
          >
            <SparkleIcon size={18} /> Request Early Access <ArrowRight size={16} />
          </a>

          <p style={{ marginTop: 20, fontSize: 13, color: "#4a4a5a" }}>
            No credit card required · Free for early users
          </p>
        </div>
      </section>
    </>
  )
}

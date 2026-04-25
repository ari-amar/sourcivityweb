"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useIsMobile } from "@/lib/use-mobile"

const navLinks = ["Features", "How It Works", "Dashboard"]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(5,5,8,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid #1e1e28" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: isMobile ? "0 16px" : "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: isMobile ? 56 : 64,
        }}
      >
        <a
          href="#home"
          style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
        >
          <Image
            src="/sourcivity-logo.png"
            alt="Sourcivity"
            width={32}
            height={32}
            priority
            style={{ width: 32, height: 32, objectFit: "contain" }}
          />
          <span
            style={{
              fontSize: 20,
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
        </a>

        <div
          style={{
            display: isMobile ? "none" : "flex",
            alignItems: "center",
            gap: 32,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              style={{
                color: "#6b7280",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            >
              {link}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="https://demo.sourcivity.io/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: isMobile ? "7px 14px" : "8px 20px",
              borderRadius: 8,
              fontSize: isMobile ? 13 : 14,
              fontWeight: 600,
              color: "#050508",
              background: "#00b7eb",
              textDecoration: "none",
              transition: "all 0.2s",
              boxShadow: "0 0 20px rgba(0,183,235,0.3)",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#22ccff"
              e.currentTarget.style.boxShadow = "0 0 30px rgba(0,183,235,0.5)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#00b7eb"
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0,183,235,0.3)"
            }}
          >
            Try Demo →
          </a>
        </div>
      </div>
    </nav>
  )
}

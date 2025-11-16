"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Check } from "lucide-react"

export function CTASection() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-blue-500/20"></div>
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 183, 235, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 animate-pulse" />
            Ready to Get Started?
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Join the Future of
            <br />
            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
              Parts Sourcing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Be among the first to experience AI-powered supplier discovery and procurement
          </p>

          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 text-lg px-12 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 group"
            asChild
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdK0ISylSaB5qQMRNj9Q2BLRHnGgh6cCZ0hcWuDnAd1SpyOAw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
              <Sparkles className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              Request Early Access
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "10,000+", label: "Components" },
              { value: "500+", label: "Suppliers" },
              { value: "50%", label: "Time Saved" },
              { value: "24/7", label: "AI Support" },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group cursor-pointer transition-all duration-300 ${
                  hoveredStat === idx ? 'scale-110' : ''
                }`}
                onMouseEnter={() => setHoveredStat(idx)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className={`text-2xl md:text-3xl font-bold mb-1 transition-colors duration-300 ${
                  hoveredStat === idx ? 'text-primary' : 'text-foreground'
                }`}>
                  {item.value}
                </div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

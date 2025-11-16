"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section id="home" className="relative pt-32 sm:pt-40 pb-12 flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-background to-background"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 leading-[1.75]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2300b7eb' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="gradient-text">Streamline Supplier Discovery</span>
            <br />
            <span className="text-foreground">with AI-Powered Sourcivity</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Revolutionize Your Parts Sourcing & Procurement
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-1">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 animate-glow text-lg px-8 py-4"
              asChild
            >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdK0ISylSaB5qQMRNj9Q2BLRHnGgh6cCZ0hcWuDnAd1SpyOAw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                Coming Soon!
              </a>
            </Button>
          </div>

          {/* Demo search bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              ></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-primary/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 border border-primary/10 rounded-full animate-pulse delay-500"></div>
    </section>
  )
}

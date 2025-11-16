"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, Upload, Sparkles } from "lucide-react"

export function HeroSection() {
  const handleSearchInteraction = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdK0ISylSaB5qQMRNj9Q2BLRHnGgh6cCZ0hcWuDnAd1SpyOAw/viewform?usp=dialog', '_blank')
  }

  return (
    <section id="home" className="relative pt-32 sm:pt-40 pb-24 md:pb-32 flex items-center justify-center overflow-hidden min-h-[85vh]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-background to-background"></div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 183, 235, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 183, 235, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-primary">
              Intelligent Parts Search
            </span>
            <br />
            <span className="text-foreground">Powered by AI</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty leading-relaxed">
            Search by component name, specification, or upload a photo—get instant matches with datasheets and suppliers
          </p>

          {/* Interactive demo search bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-blue-500/50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div
                onClick={handleSearchInteraction}
                className="relative bg-background/95 backdrop-blur-sm border-2 border-border rounded-xl shadow-xl flex items-center overflow-hidden group-hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <Search className="absolute left-4 text-muted-foreground h-5 w-5 group-hover:text-primary transition-colors pointer-events-none" />
                <input
                  type="text"
                  placeholder="Try: precision linear bearing, pneumatic cylinder..."
                  readOnly
                  onClick={handleSearchInteraction}
                  onFocus={handleSearchInteraction}
                  className="w-full pl-12 pr-32 py-5 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none cursor-pointer"
                />
                <button
                  type="button"
                  onClick={handleSearchInteraction}
                  className="absolute right-2 p-2.5 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all duration-200 group/upload"
                >
                  <Upload className="h-5 w-5 text-primary group-hover/upload:scale-110 transition-transform" />
                </button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-3 flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Click or type to get early access
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 border-2 border-primary/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-primary/5 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}

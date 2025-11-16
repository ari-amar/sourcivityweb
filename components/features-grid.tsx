"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const features = [
    {
      icon: () => (
        <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      title: "AI-Powered Search",
      description: "Search by text or photo. AI analyzes images and queries to find matching components, datasheets, and suppliers instantly.",
    },
    {
      icon: () => (
        <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Smart Recommendations",
      description: "AI ranks results by relevance, supplier reliability, and specs. Get key considerations and pro tips for each search.",
    },
    {
      icon: () => (
        <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Automated RFQ Management",
      description: "Generate AI-personalized RFQ emails, track responses, and manage follow-ups with automated reminders and messaging dashboard.",
    },
    {
      icon: () => (
        <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      title: "Messages Dashboard",
      description: "Centralized communication hub with supplier replies, follow-up tracking, and AI-generated response templates.",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            Platform Capabilities
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Key Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI-powered tools to streamline your entire supplier discovery and procurement process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardHeader className="relative z-10">
                <div className="flex flex-col items-start space-y-4">
                  <div className={`p-3 bg-primary/10 rounded-xl transition-all duration-300 ${
                    hoveredIndex === index ? 'bg-primary/20 scale-110 rotate-3' : ''
                  }`}>
                    {feature.icon()}
                  </div>
                  <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-muted-foreground leading-relaxed text-left">
                  {feature.description}
                </CardDescription>
              </CardContent>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

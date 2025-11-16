"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Bell, TrendingUp, Zap, ChevronRight } from "lucide-react"

export function MessagesDashboardSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [activeStatus, setActiveStatus] = useState<number | null>(null)
  const features = [
    {
      icon: MessageSquare,
      title: "Unified Communication Hub",
      description: "All supplier conversations in one organized dashboard",
      details: [
        "View all RFQ conversations",
        "Track response status (Sent, Opened, Responded, etc.)",
        "See complete message history",
        "Quick access to supplier details",
      ],
    },
    {
      icon: Zap,
      title: "AI-Powered Responses",
      description: "Generate professional replies with one click",
      details: [
        "AI analyzes conversation context",
        "Creates personalized response templates",
        "Request clarifications or revised pricing",
        "Negotiate terms intelligently",
      ],
    },
    {
      icon: Bell,
      title: "Smart Follow-up Automation",
      description: "Never miss a supplier response or deadline",
      details: [
        "Automated follow-up reminders",
        "Track days since last contact",
        "Follow-up priority indicators",
        "Overdue notification system",
      ],
    },
    {
      icon: TrendingUp,
      title: "Performance Metrics",
      description: "Data-driven insights to optimize your sourcing",
      details: [
        "Response rate tracking",
        "Average response time",
        "RFQ status breakdown",
        "Supplier performance analytics",
      ],
    },
  ]

  const statuses = [
    { label: "Sent", color: "blue", icon: "📨" },
    { label: "Follow-up", color: "yellow", icon: "🔔" },
    { label: "Overdue", color: "red", icon: "⚠️" },
    { label: "Responded", color: "green", icon: "✅" },
    { label: "Quote Received", color: "emerald", icon: "📄" },
  ]

  return (
    <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            <MessageSquare className="h-4 w-4" />
            Communication Hub
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Messages Dashboard: Your Command Center
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track every RFQ, manage supplier communications, and never miss a follow-up with intelligent automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className={`group relative bg-card/50 backdrop-blur-sm border-2 transition-all duration-500 cursor-pointer overflow-hidden ${
                  activeCard === index
                    ? 'border-primary shadow-2xl shadow-primary/20 scale-[1.02]'
                    : 'border-border hover:border-primary/30 hover:shadow-lg'
                }`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      activeCard === index ? 'bg-primary/20 scale-110' : 'bg-primary/10'
                    }`}>
                      <Icon className={`h-7 w-7 text-primary transition-transform duration-300 ${
                        activeCard === index ? 'rotate-12' : ''
                      }`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className={`text-xl mb-2 transition-colors duration-300 ${
                        activeCard === index ? 'text-primary' : 'text-card-foreground'
                      }`}>
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {feature.description}
                      </CardDescription>
                    </div>
                    <ChevronRight className={`h-5 w-5 text-primary transition-transform duration-300 ${
                      activeCard === index ? 'translate-x-1' : ''
                    }`} />
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground group/item">
                        <span className="text-primary mr-2 font-bold text-lg group-hover/item:scale-125 transition-transform inline-block">
                          ✓
                        </span>
                        <span className="group-hover/item:text-foreground transition-colors">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border-2 border-primary/20 backdrop-blur-sm relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(0, 183, 235, 0.3) 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
              }}
            ></div>
          </div>

          <div className="text-center relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Real-Time Status Tracking
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Monitor RFQ progress with detailed status badges throughout the entire lifecycle
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {statuses.map((status, idx) => (
                <button
                  key={idx}
                  onMouseEnter={() => setActiveStatus(idx)}
                  onMouseLeave={() => setActiveStatus(null)}
                  className={`group px-6 py-3 rounded-full text-sm font-medium border-2 transition-all duration-300 ${
                    activeStatus === idx
                      ? `bg-${status.color}-500/20 text-${status.color}-600 dark:text-${status.color}-400 border-${status.color}-500/50 scale-110 shadow-lg`
                      : `bg-${status.color}-500/10 text-${status.color}-600 dark:text-${status.color}-400 border-${status.color}-500/20 hover:scale-105`
                  }`}
                >
                  <span className="mr-2 text-base group-hover:scale-125 inline-block transition-transform">
                    {status.icon}
                  </span>
                  {status.label}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                {statuses.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeStatus !== null && idx <= activeStatus ? 'bg-primary' : 'bg-muted'
                    }`}
                  ></div>
                ))}
              </div>
              <span>Hover to see progress flow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

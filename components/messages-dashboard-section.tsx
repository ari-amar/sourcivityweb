"use client"

import { useState } from "react"

export function MessagesDashboardSection() {
  const [activeStatus, setActiveStatus] = useState<number | null>(null)

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

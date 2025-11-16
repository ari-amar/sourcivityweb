"use client"

import type React from "react"

import { useState } from "react"

export function CTASection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <section className="py-24 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Streamline Your Sourcing?</h2>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4"></div>
        </form>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">30-50%</div>
            <div className="text-muted-foreground">Time Savings</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">5-20%</div>
            <div className="text-muted-foreground">Cost Reduction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">AI Assistant</div>
          </div>
        </div>
      </div>
    </section>
  )
}

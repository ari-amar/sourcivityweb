"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export function WorkflowSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const steps = [
    {
      step: 1,
      title: "Search with Text or Photo",
      description: "Enter a component name, specification, or upload a photo. AI's text-and-vision quickly finds matching components and datasheets.",
      id: "intelligent-search",
    },
    {
      step: 2,
      title: "Review AI Recommendations",
      description: "AI ranks results by relevance, supplier reliability, and specs. Click any component to view the supplier's product page or datasheet.",
      id: "ai-recommendations",
    },
    {
      step: 3,
      title: "Browse Suppliers & Datasheets",
      description: "View detailed product information and technical data on supplier websites. Access engineering specifications, performance data, and dimensions.",
      id: "browse-datasheets",
    },
    {
      step: 4,
      title: "Add to RFQ Cart",
      description: "Click RFQ to add parts to your cart. Review, consolidate, and prepare a unified request with quantity, timeline, and requirements.",
      id: "rfq-cart",
    },
    {
      step: 5,
      title: "Generate & Send RFQs",
      description: "AI generates personalized email templates for each supplier. Review, customize if needed, and send directly from the platform.",
      id: "send-rfqs",
    },
    {
      step: 6,
      title: "Track in Messages Dashboard",
      description: "Monitor all supplier replies and follow-ups in one place. Use AI to generate responses, request clarifications, or negotiate terms with smart follow-up automation.",
      id: "messages-dashboard",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            User Journey
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">How Sourcivity Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A streamlined 6-step workflow that transforms how engineering teams discover and procure suppliers
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden md:block rounded-full"></div>

          <div className="space-y-10">
            {steps.map((step, index) => (
              <div
                key={index}
                id={step.id}
                className="relative flex items-start space-x-6 md:space-x-8 group"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Step number with pulse effect */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl z-10 transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50 scale-110'
                    : 'bg-primary/90 text-primary-foreground'
                }`}>
                  <span className={`transition-all duration-300 ${activeStep === index ? 'scale-110' : ''}`}>
                    {step.step}
                  </span>
                  {activeStep === index && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
                  )}
                </div>

                {/* Content card */}
                <div className={`flex-1 bg-card/50 backdrop-blur-sm border-2 rounded-2xl p-6 md:p-8 transition-all duration-500 cursor-pointer ${
                  activeStep === index
                    ? 'border-primary shadow-2xl shadow-primary/20 scale-[1.02] bg-card'
                    : 'border-border hover:border-primary/30 hover:shadow-lg'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                      activeStep === index ? 'text-primary' : 'text-card-foreground'
                    }`}>
                      {step.title}
                    </h3>
                    {activeStep === index && (
                      <Check className="h-6 w-6 text-primary animate-bounce" />
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    {step.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-6 flex items-center gap-2">
                    <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-primary transition-all duration-500 ${
                          activeStep === index ? 'w-full' : 'w-0'
                        }`}
                      ></div>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">
                      Step {step.step}/6
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all duration-300 cursor-pointer group">
            <span className="text-sm font-medium text-primary">Complete workflow in under 10 minutes</span>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, FileText, ShoppingCart, Mail, MessageSquare, BarChart } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      icon: Search,
      title: "Start with Intelligent Search",
      description: "Enter a component like 'precision linear bearing'",
      features: [
        "AI analyzes text queries",
        "Get key specs to consider",
        "Common applications listed",
        "Pro tips for faster sourcing",
      ],
    },
    {
      icon: BarChart,
      title: "Review Smart Rankings",
      description: "AI ranks results by relevance, supplier reliability, and specifications",
      features: [
        "Supplier type indicators (OEM/Distributor/EM)",
        "Country of origin flags",
        "Rating and verification badges",
        "Direct links to supplier pages",
      ],
    },
    {
      icon: FileText,
      title: "Access Product Details Instantly",
      description: "View detailed product information and technical specifications",
      features: [
        "Engineering specifications",
        "Performance data",
        "Dimensions and tolerances",
        "Product configurations",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Build Your RFQ Cart",
      description: "Add parts and consolidate requests with detailed requirements",
      features: [
        "Multiple parts in one RFQ",
        "Specify quantity and timeline",
        "Add custom requirements",
        "Review before sending",
      ],
    },
    {
      icon: Mail,
      title: "Send AI-Personalized RFQs",
      description: "Generate and send customized email templates to suppliers",
      features: [
        "AI drafts personalized emails",
        "Include all part details",
        "One-click sending",
        "Track delivery status",
      ],
    },
    {
      icon: MessageSquare,
      title: "Manage All Communications",
      description: "Track replies, follow-ups, and negotiations in one dashboard",
      features: [
        "Conversation history",
        "AI-generated responses",
        "Automated follow-up reminders",
        "Performance metrics",
      ],
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Complete Sourcing Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every step of your parts sourcing journey, streamlined and intelligent
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className="p-3 bg-primary/10 rounded-lg mt-1">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-card-foreground mb-2">{exp.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">{exp.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

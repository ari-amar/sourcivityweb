import { ArrowRight } from "lucide-react"

export function WorkflowSection() {
  const steps = [
    {
      step: 1,
      title: "Natural Language Search",
      description: "Engineer uses natural language search; smart suggestions refine the query automatically.",
      id: "natural-language-search",
    },
    {
      step: 2,
      title: "Cross-Supplier Integration",
      description: "System pulls data from multiple suppliers; real-time pricing for comparisons in US focus mode.",
      id: "cross-supplier-integration",
    },
    {
      step: 3,
      title: "Side-by-Side Comparisons",
      description: "Compare specifications side-by-side with visual highlights; AI assistant answers queries.",
      id: "side-by-side-comparisons",
    },
    {
      step: 4,
      title: "Automated RFQs",
      description: "Select suppliers and send automated RFQs with smart follow-ups and tracking.",
      id: "automated-rfqs",
    },
    {
      step: 5,
      title: "Messaging & Integration",
      description: "Messaging system logs replies; ERP integration syncs data to existing systems.",
      id: "messaging-integration",
    },
    {
      step: 6,
      title: "Dashboard Tracking",
      description: "Dashboards track progress; status updates notify teams on timelines and milestones.",
      id: "dashboard-tracking",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">How Sourcivity Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A streamlined workflow that transforms how engineering teams discover and procure suppliers
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} id={step.id} className="relative flex items-start space-x-8">
                {/* Step number */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                  {step.step}
                </div>

                {/* Content */}
                <div className="flex-1 bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-20">
                    <ArrowRight className="h-6 w-6 text-primary/50 transform rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"

export function SupplierProcessSection() {
  const processes = [
    {
      id: "identify",
      title: "Identify Requirements",
      solution: "Search by technical/vague queries with AI translation",
      values: [
        "Natural language processing",
        "Technical specification translation",
        "Requirements validation",
        "Automated categorization",
      ],
    },
    {
      id: "research",
      title: "Supplier Research",
      solution: "Search websites/databases with side-by-side specifications",
      values: [
        "Multi-source data aggregation",
        "Real-time supplier information",
        "Specification comparison tools",
        "Supplier rating systems",
      ],
    },
    {
      id: "rfq",
      title: "RFQ Process",
      solution: "Agent workflow for filling and sending automated RFQs",
      values: [
        "Template-based RFQ generation",
        "Multi-supplier distribution",
        "Response tracking",
        "Follow-up automation",
      ],
    },
    {
      id: "negotiation",
      title: "Negotiation",
      solution: "Template library for negotiation support",
      values: [
        "Negotiation templates",
        "Market pricing insights",
        "Contract term suggestions",
        "Best practice guidelines",
      ],
    },
  ]

  return (
    <section className="pt-8 pb-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Supplier Process Deep Dive</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive coverage of every stage in your supplier discovery and procurement journey
          </p>
        </div>

        <Tabs defaultValue="identify" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-4 mb-8 bg-muted">
            {processes.map((process) => (
              <TabsTrigger
                key={process.id}
                value={process.id}
                className="text-xs lg:text-sm bg-muted data-[state=active]:bg-muted data-[state=active]:border-2 data-[state=active]:border-primary"
              >
                {process.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {processes.map((process) => (
            <TabsContent key={process.id} value={process.id}>
              <Card className="bg-card border-border max-w-xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground">{process.title}</CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">{process.solution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="max-w-sm mx-auto">
                    <h4 className="text-lg font-semibold text-card-foreground mb-4 text-center">Key Capabilities</h4>
                    <div className="space-y-3 text-left pl-4">
                      {process.values.map((value, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

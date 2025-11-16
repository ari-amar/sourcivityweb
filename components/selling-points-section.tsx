import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, DollarSign, Target, Eye, TrendingUp, Users } from "lucide-react"

export function SellingPointsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Efficiency",
      description: "Reduce sourcing time by 30-50% with automation and AI-powered search capabilities.",
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Save 5-20% on procurement costs via comprehensive comparisons and US supplier focus.",
    },
    {
      icon: Target,
      title: "Accuracy",
      description: "Precise supplier selection with AI search algorithms and photo-to-part matching.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Complete visibility with dashboards for compliance tracking and audit trails.",
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Handle complex projects seamlessly with enterprise integrations and workflows.",
    },
    {
      icon: Users,
      title: "User Experience",
      description: "Intuitive interface designed for all team members, from engineers to procurement.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose Sourcivity</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proven benefits that transform your supplier discovery and procurement process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 text-center"
            >
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

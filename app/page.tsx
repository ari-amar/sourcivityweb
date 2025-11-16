import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/features-grid"
import { WorkflowSection } from "@/components/workflow-section"
import { MessagesDashboardSection } from "@/components/messages-dashboard-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <FeaturesGrid />
      <WorkflowSection />
      <MessagesDashboardSection />
      <CTASection />
      <Footer />
    </main>
  )
}

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatsBar } from "@/components/stats-bar"
import { FeaturesGrid } from "@/components/features-grid"
import { WorkflowSection } from "@/components/workflow-section"
import { MessagesDashboardSection } from "@/components/messages-dashboard-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsBar />
      <FeaturesGrid />
      <WorkflowSection />
      <MessagesDashboardSection />
      <CTASection />
      <Footer />
    </main>
  )
}

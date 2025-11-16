import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { FeaturesGrid } from "@/components/features-grid"
import { SupplierProcessSection } from "@/components/supplier-process-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <ProblemSolutionSection />
      <FeaturesGrid />
      <SupplierProcessSection />
      <CTASection />
      <Footer />
    </main>
  )
}

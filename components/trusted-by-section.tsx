export function TrustedBySection() {
  const companies = ["Tesla", "Boeing", "SpaceX", "Ford", "GM", "Lockheed Martin", "Raytheon", "Caterpillar"]

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Trusted by Innovative Teams</h2>
          <p className="text-lg text-muted-foreground">Join engineers reducing sourcing time by 30-50%</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {companies.map((company, index) => (
            <div
              key={company}
              className="flex items-center justify-center p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
            >
              <span className="text-sm font-medium text-card-foreground text-center">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Integrations", href: "#integrations" },
        { name: "API", href: "#api" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "#contact" },
        { name: "Blog", href: "#blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "Help Center", href: "#help" },
        { name: "Community", href: "#community" },
        { name: "Status", href: "#status" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
        { name: "GDPR", href: "#gdpr" },
      ],
    },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-bold gradient-text">Sourcivity</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              AI-powered supplier discovery platform for manufacturing and engineering teams.
            </p>
            
          </div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            null
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2026 Sourcivity. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            
            
          </div>
        </div>
      </div>
    </footer>
  )
}

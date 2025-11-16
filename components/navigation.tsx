"use client"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold gradient-text">Sourcivity</span>
          </div>

          {/* Social Icons and CTA */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary hover:scale-105 transition-all"></a>
              <a href="#" className="text-muted-foreground hover:text-primary hover:scale-105 transition-all"></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

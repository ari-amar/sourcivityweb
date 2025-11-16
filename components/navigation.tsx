"use client"

import Image from "next/image"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-2.5 group">
              {/* Logo Icon */}
              <div className="relative w-8 h-10 sm:w-9 sm:h-11 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/sourcivity-logo.png"
                  alt="Sourcivity Logo"
                  width={36}
                  height={44}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              {/* Text */}
              <span className="text-xl sm:text-2xl font-bold gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-cyan-400 animate-gradient bg-[length:200%_auto]">
                Sourcivity
              </span>
            </a>
          </div>

          {/* Empty space for future nav items */}
          <div className="flex items-center space-x-4">
          </div>
        </div>
      </div>
    </nav>
  )
}

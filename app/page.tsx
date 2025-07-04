"use client"

import { useEffect, useState } from "react"

export default function BengsLanding() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="h-screen bg-slate-900 text-white overflow-hidden relative">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="https://bawva.work/test/bengs/background.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Animated background elements - now on top of video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-30 container mx-auto px-6 flex items-center justify-center h-screen">
        <div className="text-center max-w-4xl">
          {/* Main Title with staggered animation */}
          <div
            className={`transition-all duration-1500 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-8xl md:text-9xl font-normal text-white mb-6 tracking-widest font-[family-name:var(--font-bebas-neue)] drop-shadow-2xl">
              BENGS
            </h1>
          </div>

          {/* Animated line */}
          <div
            className={`transition-all duration-1000 delay-700 ${isVisible ? "w-32 opacity-100" : "w-0 opacity-0"} h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8`}
          ></div>

          {/* Subtitle */}
          <div
            className={`transition-all duration-1500 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <p className="text-xl md:text-2xl font-light text-white/90 mb-4 drop-shadow-lg">Tervetuloa</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-30 container mx-auto px-6 py-8">
        <div
          className={`text-center text-white/60 text-sm transition-all duration-1500 delay-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="mb-2 drop-shadow-md">© Bengs Family</p>
          <p className="flex items-center justify-center gap-2 drop-shadow-md">
            <span>Made with</span>
            <span className="text-red-400 animate-pulse">♥</span>
            <span>in Finland</span>
          </p>
        </div>
      </footer>
    </div>
  )
}

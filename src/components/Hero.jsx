import { Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
              <Sparkles size={14} /> New: AI-assisted coding
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Build full apps with a single prompt
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              An AI-powered workspace that designs your UI, wires up APIs, and deploys previews — all in one flow.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 transition-colors">
                Get Started
              </a>
              <a href="#features" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-white text-gray-900 font-semibold border border-gray-200 hover:border-gray-300">
                Explore Features
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur rounded-lg shadow-lg p-4 md:p-6 max-w-sm">
                <div className="text-xs uppercase tracking-wider text-gray-500">Live Preview</div>
                <div className="mt-2 h-36 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
                  Your app preview appears here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

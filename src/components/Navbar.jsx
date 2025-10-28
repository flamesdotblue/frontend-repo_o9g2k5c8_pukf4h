import { useState } from 'react'
import { Rocket, Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 text-gray-900 font-semibold">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 text-white">
              <Rocket size={18} />
            </span>
            <span className="text-lg">Vibe</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#showcase" className="hover:text-gray-900 transition-colors">Showcase</a>
            <a href="#cta" className="hover:text-gray-900 transition-colors">Get Started</a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-3 space-y-2">
            <a href="#features" className="block py-2 text-gray-700" onClick={() => setOpen(false)}>Features</a>
            <a href="#showcase" className="block py-2 text-gray-700" onClick={() => setOpen(false)}>Showcase</a>
            <a href="#cta" className="block py-2 text-gray-700" onClick={() => setOpen(false)}>Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

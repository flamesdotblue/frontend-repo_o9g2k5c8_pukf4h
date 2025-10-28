function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Vibe. All rights reserved.</p>
        <div className="flex items-center gap-5 text-sm text-gray-600">
          <a className="hover:text-gray-900" href="#features">Features</a>
          <a className="hover:text-gray-900" href="#showcase">Showcase</a>
          <a className="hover:text-gray-900" href="#cta">Get Started</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

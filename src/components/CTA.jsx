function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Ready to build your next big idea?</h3>
              <p className="mt-2 text-blue-100">Start from a beautiful baseline and customize everything as you go.</p>
            </div>
            <div className="flex md:justify-end gap-3">
              <a href="#" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-white text-gray-900 font-semibold shadow-sm hover:bg-blue-50">
                Start Free
              </a>
              <a href="#features" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-white/10 text-white font-semibold border border-white/30 hover:bg-white/20">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

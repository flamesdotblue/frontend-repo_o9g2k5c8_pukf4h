function Showcase() {
  return (
    <section id="showcase" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ship better, faster</h2>
            <p className="mt-3 text-gray-600">
              Skip boilerplate. Generate a production-ready stack with a clean UI, routed APIs,
              and database wiring — then customize as you go.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-blue-600" />
                Live editing with instant feedback
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-blue-600" />
                Backend-first API development
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-blue-600" />
                Sensible, accessible components
              </li>
            </ul>
          </div>
          <div>
            <div className="rounded-xl border border-gray-200 p-4 bg-white shadow-sm">
              <div className="h-72 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                Drop in your 3D scene, charts, or product screenshots here
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase

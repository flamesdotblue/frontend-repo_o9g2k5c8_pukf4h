import { Code2, Database, Gauge, Globe } from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Frontend in minutes',
    desc: 'Clean components, Tailwind styling, and sensible defaults — generated instantly.'
  },
  {
    icon: Database,
    title: 'Built-in persistence',
    desc: 'MongoDB wired and ready for data you want to store and query.'
  },
  {
    icon: Gauge,
    title: 'Fast previews',
    desc: 'Auto-booted servers with live previews so you can iterate quickly.'
  },
  {
    icon: Globe,
    title: 'Full-stack by default',
    desc: 'APIs, models, and UI connected end-to-end with best practices.'
  }
]

function Features() {
  return (
    <section id="features" className="py-20 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything you need to ship</h2>
          <p className="mt-3 text-gray-600">Focus on your idea. We handle the scaffolding, wiring, and polish.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group h-full rounded-xl border border-gray-200 p-6 bg-white hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

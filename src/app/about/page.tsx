export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          US GTM Engine is operator-led. We combine AI-assisted research and synthesis with senior GTM
          judgment and partner-enabled execution — so teams can learn faster, make better calls, and avoid
          locking cost before the market is proven.
        </p>

        <h2 className="mt-12 text-2xl font-bold tracking-tight">Principles</h2>
        <ul className="mt-6 space-y-2 text-sm text-gray-600">
          <li><span className="font-medium text-gray-900">Truth over narrative:</span> evidence beats opinions.</li>
          <li><span className="font-medium text-gray-900">Speed with rigor:</span> compress cycles without losing quality.</li>
          <li><span className="font-medium text-gray-900">Systems, not heroics:</span> repeatable process wins.</li>
          <li><span className="font-medium text-gray-900">Measurable signals:</span> define outcomes and instrument them.</li>
          <li><span className="font-medium text-gray-900">Respectful collaboration:</span> we work like a team, not a vendor.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold tracking-tight">Partners</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            {
              name: "BizKonnect",
              desc: "Account mapping, sales intelligence, and ABM enablement to accelerate targeted outreach.",
            },
            {
              name: "LaunchAmerica",
              desc: "Execution support: pipeline motion, fractional leadership, and closing operations.",
            },
          ].map((p) => (
            <div key={p.name} className="rounded-2xl border border-gray-200 p-6">
              <div className="font-medium">{p.name}</div>
              <div className="mt-2 text-sm text-gray-600">{p.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition"
          >
            Get in touch
          </a>
        </div>
      </div>
    </main>
  );
}

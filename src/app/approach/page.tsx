export default function ApproachPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Approach</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          US GTM Engine bridges the validation gap between strategy and execution. We compress time by using
          AI-assisted research and synthesis, then apply senior operator judgment to turn insights into a
          signal-producing GTM loop.
        </p>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="text-sm font-semibold">Full-loop validation</div>
            <ol className="mt-4 space-y-3 text-sm text-gray-600 list-decimal list-inside">
              <li><span className="font-medium text-gray-900">Discover:</span> ICP, segmentation, category map, competitors.</li>
              <li><span className="font-medium text-gray-900">Validate:</span> PMF/JTBD scoring, messaging tests, decision gates.</li>
              <li><span className="font-medium text-gray-900">Execute:</span> account mapping, ABM launch, pipeline + closing motion.</li>
            </ol>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="text-sm font-semibold">Typical timeline</div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><span className="font-medium text-gray-900">3–6 weeks:</span> validation deliverables + initial signal tests</li>
              <li><span className="font-medium text-gray-900">8–12 weeks:</span> pipeline signal development (no guarantees)</li>
              <li><span className="font-medium text-gray-900">Ongoing:</span> iterate based on measured outcomes</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 p-6">
          <div className="text-sm font-semibold">System architecture (simple)</div>
          <div className="mt-4 grid md:grid-cols-5 gap-3 text-sm">
            {[
              { title: "Inputs", body: "Internal context + market data + target accounts" },
              { title: "Agent system", body: "Research, extraction, clustering, scoring" },
              { title: "Human review", body: "Operator governance and decision-making" },
              { title: "Outputs", body: "Deliverables + messaging + account plans" },
              { title: "Execution loop", body: "ABM + sales motion + measurement" },
            ].map((b) => (
              <div key={b.title} className="rounded-xl border border-gray-200 p-4">
                <div className="font-medium">{b.title}</div>
                <div className="mt-2 text-gray-600">{b.body}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight">FAQ</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How is AI used?",
                a: "AI compresses research and synthesis time. Outputs are reviewed and governed by experienced operators before decisions are made.",
              },
              {
                q: "What do you need from us?",
                a: "A clear objective, access to basic product context, and availability for short working sessions to confirm assumptions and prioritize decisions.",
              },
              {
                q: "Do you guarantee revenue?",
                a: "No. We focus on producing validated signals and measurable outcomes, and iterating fast based on what the market proves.",
              },
              {
                q: "How do you handle confidentiality?",
                a: "We operate under standard NDAs and minimize data exposure. We can tailor tooling and process based on your compliance needs.",
              },
              {
                q: "What does pricing look like?",
                a: "Typically fixed-scope packages tied to deliverables and timeboxed sprints (exact pricing depends on scope and market).",
              },
              {
                q: "What does success look like?",
                a: "Clear ICP/anti-ICP, validated messaging, prioritized accounts, and early pipeline signals you can build on with confidence.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-200 p-6">
                <div className="font-medium">{item.q}</div>
                <div className="mt-2 text-sm text-gray-600">{item.a}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition"
          >
            Book a call
          </a>
        </div>
      </div>
    </main>
  );
}
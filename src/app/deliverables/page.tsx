const deliverables = [
  { d: "ICP thesis + segmentation", w: "Who we’re targeting and why", e: "Focus and prioritization" },
  { d: "Anti-ICP definition", w: "Who we will not pursue", e: "Avoid wasted cycles" },
  { d: "Competitor + category map", w: "Positioning landscape and wedges", e: "Differentiation strategy" },
  { d: "PMF scorecard (JTBD)", w: "Outcome-driven assessment of fit", e: "What to fix vs. what to sell" },
  { d: "Messaging map + claims", w: "Core narrative + proof points", e: "Consistency across GTM" },
  { d: "Account universe + priority list", w: "Target accounts ranked by fit", e: "Where to spend effort" },
  { d: "ABM launch plan", w: "Themes, sequences, plays", e: "Time-to-first-signal" },
  { d: "Sales talk tracks + scripts", w: "First-call to close support", e: "Better conversion" },
  { d: "Pipeline instrumentation", w: "Stages, metrics, definitions", e: "Operate with clarity" },
  { d: "Decision gates + next steps", w: "What we learned and what to do", e: "Confident investment" },
];

export default function DeliverablesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Deliverables</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          We productize validation into timeboxed outputs. The goal is to produce measurable signals and
          decision-ready clarity — not just slides.
        </p>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="min-w-[900px] w-full text-sm">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="text-left p-4 font-semibold">Deliverable</th>
                <th className="text-left p-4 font-semibold">What it is</th>
                <th className="text-left p-4 font-semibold">Decision it enables</th>
              </tr>
            </thead>
            <tbody>
              {deliverables.map((row) => (
                <tr key={row.d} className="border-t border-gray-200">
                  <td className="p-4 font-medium">{row.d}</td>
                  <td className="p-4 text-gray-600">{row.w}</td>
                  <td className="p-4 text-gray-600">{row.e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 p-6">
          <div className="text-sm font-semibold">Signals we aim to produce (no guarantees)</div>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>Validated conversations with ICP-aligned buyers</li>
            <li>Message pull: replies, conversions, and objection patterns</li>
            <li>Early pipeline movement with clear stage definitions</li>
            <li>Decision-ready evidence for where to invest next</li>
          </ul>
        </div>

        <div className="mt-12">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition"
          >
            Talk to us
          </a>
        </div>
      </div>
    </main>
  );
}
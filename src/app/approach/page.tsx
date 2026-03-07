export default function ApproachPage() {
  const modules = [
    {
      title: "Intelligence Architecture",
      description:
        "Build a grounded view of the market and define what ‘signal’ should look like before outreach begins.",
      bullets: [
        "ICP scoring and segmentation map",
        "Competitor landscape and positioning deltas",
        "Pain-point clusters and buying triggers",
        "PMF hypotheses and desired outcome statements",
        "Market white space and wedge selection",
      ],
      output: "Outputs: decision-ready market hypotheses and a measurable signal definition.",
    },
    {
      title: "Instrumented Market Testing",
      description:
        "Translate insights into testable hypotheses and iterate fast across channels with explicit success criteria.",
      bullets: [
        "Messaging variants and value prop proof points",
        "Channel experiments (LinkedIn, email, calling)",
        "Segment targeting and offer testing",
        "Signal scoring (reply quality, conversion, objections)",
        "Iteration loop: learn → refine → retest",
      ],
      output: "Outputs: validated messaging + channel/segment signals that can be scaled.",
    },
    {
      title: "Live Field Execution",
      description:
        "Run real US sales motion with operator oversight — capturing evidence in CRM, not just opinions.",
      bullets: [
        "Feet-on-the-ground sales execution",
        "Real conversations and objection capture",
        "CRM instrumentation and activity tracking",
        "Pipeline signal quality and conversion patterns",
        "Handoff-ready motion for scaling",
      ],
      output: "Outputs: real pipeline behavior and the beginnings of a repeatable motion.",
    },
  ];

  const sprintSegments = [
    "Intelligence",
    "Market Testing",
    "Field Execution",
    "Decision Gate",
  ];

  const decisionGate = [
    {
      title: "Go",
      body: "Scale with confidence: hiring and investment follow validated signal.",
    },
    {
      title: "Refine",
      body: "Adjust ICP, message, or motion — then re-run targeted tests before scaling.",
    },
    {
      title: "Stop",
      body: "Avoid sunk cost: pause investment when signal is weak or the thesis breaks.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* DARK: Hero */}
      <section className="relative bg-gray-950 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Approach
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            The US GTM Engine Model.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            A validation-first operating model for US expansion.
          </p>

          <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-gray-400">
            Designed as a disciplined 90–120 day sprint that produces decision-ready market evidence
            before fixed cost is deployed.
          </p>
        </div>
      </section>

      {/* LIGHT: How it works */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            How the model works
          </h2>

          <p className="mt-5 max-w-3xl text-base md:text-lg text-gray-600 leading-relaxed">
            US GTM Engine integrates market intelligence, hypothesis testing, and live sales execution into a
            single closed-loop operating system. Each module is instrumented. Each sprint ends in a governed
            decision gate.
          </p>
        </div>
      </section>

      {/* DARK: Modules */}
      <section className="bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            The operating modules
          </h2>

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {modules.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm font-semibold text-white">{m.title}</div>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                  {m.description}
                </p>

                <ul className="mt-6 space-y-2 text-sm text-gray-300">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm text-gray-400">
                  {m.output}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHT: Sprint visual (narrow + minimal) */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">
            The 90–120 day operating sprint
          </h2>

          <p className="mt-4 text-center text-sm md:text-base text-gray-600">
            A contained, time-bound system for market validation before capital deployment.
          </p>

          <div className="mt-10 mx-auto max-w-4xl">
            <div className="grid grid-cols-4 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
              {sprintSegments.map((label) => (
                <div
                  key={label}
                  className="px-4 py-6 text-center border-r last:border-r-0 border-gray-200"
                >
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-gray-700">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DARK: Decision gate */}
      <section className="bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Decision gate: go, refine, or stop
          </h2>

          <p className="mt-5 max-w-3xl text-base md:text-lg text-gray-300 leading-relaxed">
            The sprint ends with a governed decision based on measurable evidence — ICP clarity, message resonance,
            conversion performance, and early pipeline signal quality.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {decisionGate.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm font-semibold text-white">{d.title}</div>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHT: Capital risk compression subsection */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
            Capital risk compression
          </h2>

          <p className="mt-5 max-w-3xl text-base md:text-lg text-gray-600 leading-relaxed">
            The US GTM Engine Model compresses market uncertainty into a disciplined, time-bound sprint.
            Instead of committing fixed cost based on assumption, capital follows validated signal.
          </p>

          <p className="mt-4 max-w-3xl text-sm md:text-base text-gray-600 leading-relaxed">
            The outcome is decision-ready evidence — generated through instrumented testing and real sales motion —
            so expansion decisions are made with governance, not optimism.
          </p>
        </div>
      </section>
    </main>
  );
}
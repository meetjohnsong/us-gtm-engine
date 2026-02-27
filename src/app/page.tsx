export default function Home() {
  return (
    <main className="min-h-screen">
  
<section className="relative overflow-hidden">
  <div className="absolute inset-0 -z-10">
    <div className="absolute -top-24 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-200/40 via-indigo-200/30 to-sky-200/40 blur-3xl" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)] [background-size:24px_24px]" />
  </div>

  <div className="max-w-6xl mx-auto px-6 py-20">
    <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-600 shadow-sm">
      <span className="font-medium text-gray-900">AI-assisted</span>
      <span>•</span>
      <span>Operator-led</span>
      <span>•</span>
      <span>Weeks, not quarters</span>
    </div>

    <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
      Full-loop US market validation and GTM execution —
      <span className="text-blue-700"> compressed into weeks, not quarters.</span>
    </h1>

    <p className="mt-6 text-xl text-gray-600 max-w-3xl">
      US GTM Engine bridges the validation gap between strategy and hiring.
      We combine AI-powered market intelligence with senior operator oversight to
      produce measurable pipeline signals before you lock in cost.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row gap-3">
  <a
    href="/contact"
    className="rounded-xl bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition shadow-sm text-center"
  >
    Book a call
  </a>
  <a
    href="/approach"
    className="rounded-xl border border-gray-300 bg-white/70 px-6 py-3 hover:bg-white transition shadow-sm text-center"
  >
    See the system
  </a>
</div>

    <div className="mt-14 grid md:grid-cols-3 gap-6">
      {[
        {
          title: "Discover",
          bullets: ["ICP & segmentation thesis", "Category + competitor map", "Anti-ICP clarity"],
        },
        {
          title: "Validate",
          bullets: ["JTBD / PMF scoring", "Messaging & proof tests", "Signal-driven decision gates"],
        },
        {
          title: "Execute",
          bullets: ["Account mapping & ABM launch", "Pipeline motion + scripts", "Closing support + metrics"],
        },
      ].map((s) => (
        <div
          key={s.title}
          className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm hover:shadow-md transition"
        >
          <div className="text-sm font-semibold">{s.title}</div>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            {s.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="max-w-6xl mx-auto px-6 py-20">
  <div className="text-center">
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
      The Validation Gap
    </h2>
    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
      Most US expansion efforts fail because companies lock in cost before
      validating demand. Strategy stops early. Execution starts too soon.
    </p>
  </div>

  <div className="mt-14 grid md:grid-cols-2 gap-8">
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h3 className="text-lg font-semibold">Common Approaches</h3>

      <ul className="mt-6 space-y-6 text-sm text-gray-600">
        <li>
          <div className="font-medium text-gray-900">Strategy Firms</div>
          <div>Research and decks → hire team → hope demand materializes.</div>
        </li>

        <li>
          <div className="font-medium text-gray-900">Lead Gen / Agencies</div>
          <div>Meetings and activity → unclear validation logic.</div>
        </li>

        <li>
          <div className="font-medium text-gray-900">Fractional CRO</div>
          <div>Executive advice → execution outsourced → limited instrumentation.</div>
        </li>
      </ul>
    </div>

    <div className="rounded-2xl border border-gray-900 bg-gray-900 text-white p-8 shadow-sm">
      <h3 className="text-lg font-semibold">US GTM Engine</h3>

      <ul className="mt-6 space-y-6 text-sm text-gray-300">
        <li>
          <div className="font-medium text-white">Full-loop validation</div>
          <div>ICP thesis → PMF scoring → messaging tests → measurable signals.</div>
        </li>

        <li>
          <div className="font-medium text-white">AI-assisted compression</div>
          <div>Weeks of research condensed into structured outputs.</div>
        </li>

        <li>
          <div className="font-medium text-white">Operator oversight</div>
          <div>Senior GTM judgment layered over automation and execution.</div>
        </li>

        <li>
          <div className="font-medium text-white">Decision-ready evidence</div>
          <div>Clear go / no-go signals before hiring and scaling cost.</div>
        </li>
      </ul>
    </div>
  </div>
  <div className="mt-14 rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-sm">
  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
    <div>
      <div className="text-sm font-semibold text-gray-900">Decision-Gate Flow</div>
      <p className="mt-2 text-sm text-gray-600 max-w-2xl">
        A measurable loop designed to produce validated signals before major hiring and spend.
      </p>
    </div>
    <a
      href="/contact"
      className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-2.5 hover:bg-gray-800 transition shadow-sm text-sm"
    >
      Run this with us
    </a>
  </div>

  <div className="mt-8">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {[
        {
          title: "Inputs",
          body: "Product context + hypotheses + target constraints",
        },
        {
          title: "Discover",
          body: "ICP + segmentation + competitor map",
        },
        {
          title: "Validate",
          body: "JTBD/PMF scoring + messaging tests",
        },
        {
          title: "Execute",
          body: "Account mapping + ABM + pipeline motion",
        },
        {
          title: "Decision Gate",
          body: "Go / refine / stop based on measured signals",
          highlight: true,
        },
      ].map((s, idx) => (
        <div key={s.title} className="relative">
          <div
            className={[
              "rounded-2xl border p-5 h-full",
              s.highlight
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-gray-200 bg-white",
            ].join(" ")}
          >
            <div className={s.highlight ? "text-sm font-semibold" : "text-sm font-semibold text-gray-900"}>
              {s.title}
            </div>
            <div className={s.highlight ? "mt-2 text-sm text-gray-300" : "mt-2 text-sm text-gray-600"}>
              {s.body}
            </div>
          </div>

          {/* Arrow to next card (desktop only) */}
          {idx < 4 && (
            <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-gray-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Loop caption */}
    <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <div className="text-xs text-gray-500">
        The loop repeats until signals are strong enough to justify scaling cost.
      </div>
      <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600">
        <span className="font-medium text-gray-900">Output:</span>
        validated signals → prioritized accounts → decision-ready next steps
      </div>
    </div>
  </div>
</div>
<section className="max-w-6xl mx-auto px-6 py-20">
  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
    <div>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Who this is for</h2>
      <p className="mt-4 text-lg text-gray-600 max-w-3xl">
        US GTM Engine is designed for teams that want decision-ready evidence before scaling cost.
      </p>
    </div>
    <a
      href="/contact"
      className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-2.5 hover:bg-gray-800 transition shadow-sm text-sm"
    >
      Ask if you fit
    </a>
  </div>

  <div className="mt-12 grid lg:grid-cols-2 gap-8">
    <div className="rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-sm">
      <div className="text-sm font-semibold text-gray-900">Good fit</div>
      <ul className="mt-6 space-y-4 text-sm text-gray-600">
        <li className="flex gap-3">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-green-600/80" />
          <div>
            <div className="font-medium text-gray-900">International or non-US companies entering the US</div>
            <div>Need a repeatable validation loop before hiring US headcount.</div>
          </div>
        </li>

        <li className="flex gap-3">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-green-600/80" />
          <div>
            <div className="font-medium text-gray-900">PE / portfolio teams driving US expansion</div>
            <div>Want faster signal production and disciplined go/no-go decisions.</div>
          </div>
        </li>

        <li className="flex gap-3">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-green-600/80" />
          <div>
            <div className="font-medium text-gray-900">Founders with a real product and a clear hypothesis</div>
            <div>Need ICP clarity, PMF scoring, and a pipeline-ready motion.</div>
          </div>
        </li>

        <li className="flex gap-3">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-green-600/80" />
          <div>
            <div className="font-medium text-gray-900">Teams who value instrumented execution</div>
            <div>Care about measurable signals and repeatable operating cadence.</div>
          </div>
        </li>
      </ul>
    </div>

    <div className="rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-sm">
      <div className="text-sm font-semibold text-gray-900">Not a fit</div>
      <ul className="mt-6 space-y-4 text-sm text-gray-600">
        <li className="flex gap-3">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-red-600/80" />
          <div>
            <div className="font-medium text-gray-900">“Just get me meetings” engagement</div>
            <div>If you want volume activity without a validation system, we’re not the best choice.</div>
          </div>
        </li>

        <li className="flex gap-3">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-red-600/80" />
          <div>
            <div className="font-medium text-gray-900">No focus or no willingness to choose</div>
            <div>We require prioritization—ICP clarity beats “sell to everyone.”</div>
          </div>
        </li>

        <li className="flex gap-3">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-red-600/80" />
          <div>
            <div className="font-medium text-gray-900">Pure advisory expectations</div>
            <div>We deliver outputs and a measurable loop, not just opinions and decks.</div>
          </div>
        </li>

        <li className="flex gap-3">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-red-600/80" />
          <div>
            <div className="font-medium text-gray-900">No access to basic context</div>
            <div>If you can’t share enough to validate, we can’t produce meaningful signals.</div>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div className="mt-10 rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm">
    <div className="text-sm font-semibold text-gray-900">A simple way to decide</div>
    <p className="mt-2 text-sm text-gray-600 max-w-4xl">
      If you’re considering hiring a US sales leader, signing an agency, or scaling spend — but you don’t yet
      have validated demand signals — you’re likely a fit.
    </p>
  </div>
</section>
</section>
    </main>
  );
}
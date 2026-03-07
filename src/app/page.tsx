export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1557683316-973673baf926"
            alt=""
            className="h-full w-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            A different way to enter the US market.
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
            Hiring before validation is guessing with capital.
          </h1>

          <p className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-gray-300">
            US GTM Engine compresses US market validation and GTM execution into a
            disciplined 90–120 day sprint — so fixed cost follows signal, not assumption.
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
        </div>
      </section>

      {/* VALIDATION GAP */}
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
          <div className="rounded-2xl border border-gray-200 bg-gray-100 p-8 shadow-sm">
            <h3 className="text-lg font-semibold">Common Approaches</h3>

            <ul className="mt-6 space-y-6 text-sm text-gray-600">
              <li>
                <div className="font-medium text-gray-900">Hire Local Sales Executive</div>
                <div>Immediate fixed cost → demand assumed → validation happens after capital is committed.</div>
              </li>
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
                <div>Months of research condensed into structured outputs.</div>
              </li>
              <li>
                <div className="font-medium text-white">Operator oversight</div>
                <div>Senior GTM judgment layered over automation and execution.</div>
              </li>
              <li>
                <div className="font-medium text-white">Decision-ready evidence</div>
                <div>Clear signals before hiring and scaling cost.</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition shadow-sm text-sm"
          >
            Discuss your US expansion
          </a>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            How US GTM Engine Works
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            US GTM Engine compresses US market validation and early pipeline
            creation into a disciplined operating sprint.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-4xl">
          <div className="grid grid-cols-4 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <div className="px-4 py-6 text-center border-r border-gray-200">
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-gray-700">
                Intelligence
              </div>
            </div>
            <div className="px-4 py-6 text-center border-r border-gray-200">
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-gray-700">
                Market Testing
              </div>
            </div>
            <div className="px-4 py-6 text-center border-r border-gray-200">
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-gray-700">
                Field Execution
              </div>
            </div>
            <div className="px-4 py-6 text-center">
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-gray-700">
                Decision Gate
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/approach"
            className="text-sm font-medium text-gray-900 hover:underline"
          >
            See how the system works →
          </a>
        </div>
      </section>

      {/* BUILT BY OPERATORS */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Built by operators
          </h2>

          <p className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed">
            US GTM Engine was designed by founders and go-to-market operators who
            have spent decades launching and scaling B2B technology companies in
            the United States.
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Who this is for
            </h2>
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
                  <div className="font-medium text-gray-900">International companies entering the US</div>
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
    </main>
  );
}
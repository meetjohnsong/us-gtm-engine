export default function AboutPage() {
  const principles = [
    {
      title: "Validate before you scale",
      text: "Successful market entry begins with evidence, not assumptions.",
    },
    {
      title: "Focus on real buyer problems",
      text: "Go-to-market strategy must be grounded in the outcomes customers care about most.",
    },
    {
      title: "Compress time to signal",
      text: "Companies should quickly determine whether their market thesis is working.",
    },
    {
      title: "Combine technology with experience",
      text: "AI accelerates insight, but expert judgment is essential to interpreting the signals.",
    },
  ];

  const stats = [
    {
      value: "25+",
      label: "Years Experience",
      text: "Enterprise GTM leadership",
    },
    {
      value: "100+",
      label: "Global Team",
      text: "Research and execution infrastructure",
    },
    {
      value: "3",
      label: "Integrated Capabilities",
      text: "Strategy • Intelligence • Execution",
    },
    {
      value: "90–120",
      label: "Day Sprint",
      text: "Structured validation and launch",
    },
  ];

  const founders = [
    {
      name: "John Song",
      capability: "GTM Strategy & Market Architecture",
      credential:
        "Technology entrepreneur with 25+ years building B2B technology companies and leading enterprise go-to-market initiatives across software, data platforms, and AI-driven ventures.",
      image: "/images/about/john_headshot_square.jpg",
      linkedin: "https://linkedin.com/in/johnsong",
    },
    {
      name: "Bo Wandell",
      capability: "US Market Entry & Execution",
      credential:
        "Founder of LaunchAmerica and long-time advisor to international technology companies establishing operations and enterprise sales traction in the United States.",
      image: "/images/about/bo_headshot_square.jpg",
      linkedin: "https://linkedin.com/in/bo-wandell",
    },
    {
      name: "Milind Prabhudesai",
      capability: "Market Intelligence & Data Platforms",
      credential:
        "Co-founder of BizKonnect and leader in AI-driven market intelligence and account intelligence platforms used by global enterprise sales organizations.",
      image: "/images/about/milind_headshot_square.jpg",
      linkedin: "https://linkedin.com/in/milind-prabhudesai-2953181",
    },
    {
      name: "Partap Roy",
      capability: "Global Research & Intelligence Operations",
      credential:
        "Co-founder of BizKonnect and architect of global research and intelligence operations supporting enterprise go-to-market initiatives.",
      image: "/images/about/partap_headshot_square.jpg",
      linkedin: "https://linkedin.com/in/partap-roy-6a727b8",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
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
            About
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-gray-950">
            The team behind the system.
          </h1>

          <p className="mt-6 max-w-4xl text-lg md:text-xl text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-950">
              US GTM Engine is the operating system for validating and launching
              B2B technology companies in the United States.
            </span>
          </p>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="border-t border-gray-200 pt-8">
            <p className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Principles
            </p>

            <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
              Our principles
            </h2>

            <p className="mt-5 max-w-3xl text-base md:text-lg text-gray-600 leading-relaxed">
              A disciplined operating model for producing signal before scaling cost.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {principles.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-gray-900">
                  {item.title}
                </div>
                <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="border-t border-gray-200 pt-8">
            <p className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Scale
            </p>

            <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
              Institutional depth
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
              >
                <div className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-semibold text-gray-900">
                  {stat.label}
                </div>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Leadership
          </p>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
            Founding partners
          </h2>

          <p className="mt-5 max-w-3xl text-base md:text-lg text-gray-300 leading-relaxed">
            Leadership across strategy, intelligence, and execution.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {founders.map((founder) => (
              <a
                key={founder.name}
                href={founder.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-lg">
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="absolute inset-0 h-full w-full object-cover object-top grayscale-[12%] group-hover:grayscale-0 group-hover:scale-[1.04] transition duration-500 ease-out"
                    />
                  </div>

                  <div className="p-6">
                    <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-gray-400 leading-5 min-h-[3rem]">
                      {founder.capability}
                    </div>

                    <div className="mt-5 border-t border-white/10 pt-4" />

                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {founder.name}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-gray-300">
                      {founder.credential}
                    </p>

                    <div className="mt-5 text-sm font-medium text-white">
                      View LinkedIn →
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold text-white">
              Extended Operating Team
            </div>
            <p className="mt-2 text-sm text-gray-300 max-w-4xl leading-relaxed">
              US GTM Engine is supported by a global operating team of more than 100
              professionals across market intelligence, research, and go-to-market
              execution.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
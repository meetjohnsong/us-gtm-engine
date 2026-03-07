// app/deliverables/page.tsx (or /pages/deliverables.tsx)
// Assumes TailwindCSS is set up and lucide-react is installed: npm i lucide-react

import React from "react";
import { Compass, BadgeCheck, LineChart } from "lucide-react";

type Phase = {
  key: "discovery" | "validation" | "execution";
  title: string;
  weeks: string;
  purpose: string;
  icon: React.ReactNode;
  outputs: string[];
};

const phases: Phase[] = [
  {
    key: "discovery",
    title: "Discovery Sprint",
    weeks: "Weeks 1–4",
    purpose:
      "Define the most promising entry point into the US market and establish the foundation for validation.",
    icon: <Compass className="h-6 w-6" aria-hidden="true" />,
    outputs: [
      "Ideal Customer Profile (ICP) Model",
      "Market & Competitive Landscape Analysis",
      "Customer Pain Pattern Synthesis",
      "Category Positioning Hypothesis",
      "US Market Entry Thesis",
    ],
  },
  {
    key: "validation",
    title: "Validation Sprint",
    weeks: "Weeks 4–8",
    purpose:
      "Pressure test product-market fit and validate messaging through real market signals.",
    icon: <BadgeCheck className="h-6 w-6" aria-hidden="true" />,
    outputs: [
      "PMF Scoring (JTBD frameworks)",
      "Messaging & Narrative Framework",
      "Market Response Experiments",
      "Signal-Based Decision Gates",
      "Validated GTM Hypothesis",
    ],
  },
  {
    key: "execution",
    title: "Execution Sprint",
    weeks: "Weeks 8–16",
    purpose:
      "Convert validated strategy into early US pipeline and customer engagement.",
    icon: <LineChart className="h-6 w-6" aria-hidden="true" />,
    outputs: [
      "Account Intelligence Maps",
      "Target Account Prioritization",
      "ABM Launch Framework",
      "Sales Messaging & Outreach Scripts",
      "Pipeline Development Motion",
    ],
  },
];

type MatrixRow = {
  label: string;
  discovery: string[];
  validation: string[];
  execution: string[];
};

const matrixRows: MatrixRow[] = [
  {
    label: "Market Intelligence",
    discovery: ["ICP Model", "Market Landscape"],
    validation: ["PMF Scoring", "Market Signal Analysis"],
    execution: ["Target Account Prioritization", "Account Intelligence Maps"],
  },
  {
    label: "Market Positioning",
    discovery: ["Pain Pattern Analysis", "Positioning"],
    validation: ["Messaging Tests", "Narrative Refinement"],
    execution: ["Sales Messaging Framework", "Outreach Scripts"],
  },
  {
    label: "Revenue Activation",
    discovery: ["Market Entry Thesis", "GTM Hypothesis"],
    validation: ["Market Experiments", "Decision Gates"],
    execution: ["ABM Launch Framework", "Pipeline Development Motion"],
  },
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <div className="text-xs font-medium uppercase tracking-[0.2] text-blue-400">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-loose text-neutral-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
      {children}
    </span>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="group rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      {children}
    </div>
  );
}

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-neutral-900 text-white hover:bg-neutral-800"
      : "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50";

  return (
    <a className={`${base} ${styles}`} href={href}>
      {children}
    </a>
  );
}

export default function DeliverablesPage() {
  return (
    <main className="bg-white">
            {/* HERO */}
      <div className="border-b border-neutral-100">
        <Container>
          <div className="py-14 md:py-20">
            <p className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              Deliverables
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Pill>90–120 Day Operating Sprint</Pill>
              <Pill>20–30 Outputs</Pill>
            </div>

            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
              What You Receive from the US GTM Engine
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-600 md:text-lg">
              A structured set of outputs delivered across a <strong>90–120 day</strong>{" "}
              sprint—designed to move from <strong>market hypothesis</strong> to{" "}
              <strong>validated US pipeline</strong>.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/approach" variant="secondary">
                Explore the Approach
              </Button>
              <Button href="/contact" variant="primary">
                Schedule a Strategy Conversation
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* SPRINT TIMELINE */}
      <Container>
        <div className="py-14 md:py-20">
          <SectionHeading
            eyebrow="Sprint Timeline"
            title="A structured operating sprint"
            description="Each phase builds on the previous one—moving from market understanding to validated demand signals to pipeline creation."
          />

          <div className="mt-10">
  <Card>
    <div className="p-8">

      <div className="text-sm font-semibold text-neutral-500 tracking-wide">
        US GTM ENGINE OPERATING SPRINT
      </div>

      <div className="relative mt-10">

        {/* pipeline line */}
        <div className="absolute top-6 left-0 right-0 h-px bg-neutral-200" />

        <div className="relative grid grid-cols-3 gap-8">

          {phases.map((p) => (
            <div key={p.key} className="text-center">

              {/* node */}
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-sm">
                {p.icon}
              </div>

              {/* label */}
              <div className="mt-4 text-sm font-semibold text-neutral-900">
                {p.title.replace(" Sprint","")}
              </div>

              {/* weeks */}
              <div className="mt-1 text-xs text-neutral-500">
                {p.weeks}
              </div>

            </div>
          ))}

        </div>

      </div>

      <div className="mt-10 text-center text-sm text-neutral-600">
        Market Thesis
        <span className="mx-2 text-neutral-400">→</span>
        PMF Evidence
        <span className="mx-2 text-neutral-400">→</span>
        Pipeline Launch
      </div>

    </div>
  </Card>
</div>
</div>
</Container>
  
         

      {/* DELIVERABLES MATRIX */}
      <div className="bg-neutral-50">
        <Container>
          <div className="py-14 md:py-20">
            <SectionHeading
              eyebrow="Outputs Produced Across the Operating Sprint"
              title="Deliverables Matrix"
              description="A productized view of how the engine generates outputs across market intelligence, positioning, and revenue activation—at every phase of the sprint."
            />

            <div className="mt-10">
              <Card>
                <div className="overflow-hidden">
                  {/* Desktop matrix */}
                  <div className="hidden md:block">
                    <div className="grid grid-cols-4 border-b border-neutral-200 bg-neutral-100">
  <div className="p-6 text-xs font-semibold uppercase tracking-wude text-neutral-900">
    Output Areas
  </div>

  <div className="p-6 text-sm font-semibold text-neutral-900">
    Discovery
    <span className="ml-2 text-neutral-400 font-medium">
      (Weeks 1–4)
    </span>
  </div>

  <div className="p-6 text-sm font-semibold text-neutral-900">
    Validation
    <span className="ml-2 text-neutral-400 font-medium">
      (Weeks 4–8)
    </span>
  </div>

  <div className="p-6 text-sm font-semibold text-neutral-900">
    Execution
    <span className="ml-2 text-neutral-400 font-medium">
      (Weeks 8–16)
    </span>
  </div>
</div>

                    {matrixRows.map((row, idx) => (
      <div
  key={row.label}
  className={`grid grid-cols-4 ${
    idx !== matrixRows.length - 1 ? "border-b border-neutral-200" : ""
  } ${idx % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}
>
                        <div className="p-5">
                          <div className="text-sm font-semibold text-neutral-900">
                            {row.label}
                          </div>
                        </div>

                        <div className="p-6 align-top">
  <ul className="space-y-2.5">
                            {row.discovery.map((item) => (
                              <li key={item} className="flex gap-2 text-sm leading-relaxed text-neutral-700">
  <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-neutral-300" />
  <span>{item}</span>
</li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-5">
                          <ul className="space-y-2">
                            {row.validation.map((item) => (
                              <li key={item} className="text-sm text-neutral-700">
                                <span className="text-neutral-400">•</span>{" "}
                                <span className="ml-2">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-5">
                          <ul className="space-y-2">
                            {row.execution.map((item) => (
                              <li key={item} className="text-sm text-neutral-700">
                                <span className="text-neutral-400">•</span>{" "}
                                <span className="ml-2">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile matrix (stacked) */}
                  <div className="md:hidden">
                    <div className="p-6">
                      <div className="grid gap-4">
                        <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                          <div className="text-sm font-semibold text-neutral-900">
                            Discovery <span className="text-neutral-500">(Weeks 1–4)</span>
                          </div>
                          <div className="mt-3 space-y-4">
                            {matrixRows.map((row) => (
                              <div key={row.label}>
                                <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                                  {row.label}
                                </div>
                                <ul className="mt-2 space-y-1">
                                  {row.discovery.map((item) => (
                                    <li key={item} className="text-sm text-neutral-700">
                                      <span className="text-neutral-400">•</span>{" "}
                                      <span className="ml-2">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                          <div className="text-sm font-semibold text-neutral-900">
                            Validation <span className="text-neutral-500">(Weeks 4–8)</span>
                          </div>
                          <div className="mt-3 space-y-4">
                            {matrixRows.map((row) => (
                              <div key={row.label}>
                                <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                                  {row.label}
                                </div>
                                <ul className="mt-2 space-y-1">
                                  {row.validation.map((item) => (
                                    <li key={item} className="text-sm text-neutral-700">
                                      <span className="text-neutral-400">•</span>{" "}
                                      <span className="ml-2">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                          <div className="text-sm font-semibold text-neutral-900">
                            Execution <span className="text-neutral-500">(Weeks 8–16)</span>
                          </div>
                          <div className="mt-3 space-y-4">
                            {matrixRows.map((row) => (
                              <div key={row.label}>
                                <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                                  {row.label}
                                </div>
                                <ul className="mt-2 space-y-1">
                                  {row.execution.map((item) => (
                                    <li key={item} className="text-sm text-neutral-700">
                                      <span className="text-neutral-400">•</span>{" "}
                                      <span className="ml-2">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end mobile */}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>

      {/* MODULE CARDS (HORIZONTAL SYSTEM) */}
      <Container>
        <div className="py-14 md:py-20">
          <SectionHeading
            eyebrow="Sprint Modules"
            title="Productized phases with representative outputs"
            description="Balanced detail, optimized for scanning. The bullet lists are representative—additional analysis and supporting outputs are generated as market signals emerge."
          />

          <div className="group relative mt-10 grid gap-6 md:grid-cols-3 items-stretch">
            <div className="hidden md:block absolute left-0 right-0 top-10 h-px bg-neutral-200 overflow-visible">
  <div className="absolute left-1/2 top-1/2 -translate-y-1/2 text-neutral-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    →
  </div>
</div>
            {phases.map((p) => (
              <Card key={p.key}>
                <div className="flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                        {p.weeks}
                      </div>
                      <div className="mt-2 text-lg font-semibold text-neutral-900">
                        {p.title}
                      </div>
                    </div>
                    <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-2 text-neutral-800">
                      {p.icon}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-neutral-600 md:min-h-[72px]">
                    {p.purpose}
                  </p>

                  <div className="mt-5 flex-1">
                    <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                      Representative Outputs
                    </div>
                    <ul className="mt-3 space-y-2">
                      {p.outputs.map((o) => (
                        <li key={o} className="text-sm text-neutral-700">
                          <span className="text-neutral-400">•</span>{" "}
                          <span className="ml-2">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>

      {/* CLOSING / CTA */}
      <div className="border-t border-neutral-200 bg-neutral-50">
        <Container>
          <div className="py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                  From Market Insight to Pipeline Creation
                </h3>
                <p className="mt-4 text-base leading-relaxed text-neutral-600">
                  The US GTM Engine integrates <strong>market intelligence</strong>,{" "}
                  <strong>market positioning</strong>, and <strong>revenue activation</strong>{" "}
                  into a single operating system—delivered in a structured 90–120 day sprint.
                </p>
              </div>

              <div className="md:col-span-4 md:flex md:justify-end">
                <div className="flex w-full flex-col gap-3 md:w-auto">
                  <Button href="/contact" variant="primary">
                    Schedule a Strategy Conversation
                  </Button>
                  <Button href="/approach" variant="secondary">
                    Explore the Approach
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
"use client";
const CALENDLY_URL = "https://calendly.com/your-link-here";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Contact</h1>
        <p className="mt-4 text-lg text-gray-600">
          Share a little context and we’ll respond quickly. If you prefer, book time directly.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition text-center"
          >
            Book a call
          </a>
          <a
            href="mailto:hello@usgtmengine.com?subject=US%20GTM%20Engine%20Inquiry"
            className="rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-50 transition text-center"
          >
            Email us
          </a>
        </div>

        <form
          className="mt-10 space-y-4 rounded-2xl border border-gray-200 p-6"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const data = new FormData(form);

            const name = String(data.get("name") || "");
            const email = String(data.get("email") || "");
            const company = String(data.get("company") || "");
            const website = String(data.get("website") || "");
            const goal = String(data.get("goal") || "");
            const timeline = String(data.get("timeline") || "");

            if (!name || !email || !goal) {
              alert("Please fill in Name, Email, and What you're trying to achieve.");
              return;
            }

            const body = encodeURIComponent(
              `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nWebsite: ${website}\n\nGoal:\n${goal}\n\nTimeline:\n${timeline}\n`
            );

            window.location.href =
              `mailto:hello@usgtmengine.com?subject=${encodeURIComponent("US GTM Engine Inquiry")}&body=${body}`;
          }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Name *</label>
              <input
                name="name"
                className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email *</label>
              <input
                name="email"
                type="email"
                className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Company</label>
              <input
                name="company"
                className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="Company"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Website</label>
              <input
                name="website"
                className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="https://"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">What you’re trying to achieve *</label>
            <textarea
              name="goal"
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 min-h-[120px]"
              placeholder="A few sentences about your product, target market, and what you want validated."
            />
          </div>

          <div>
            <label className="text-sm font-medium">Timeline</label>
            <input
              name="timeline"
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2"
              placeholder="e.g., want to start in 2–4 weeks"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition"
          >
            Send (opens email)
          </button>

          <p className="text-xs text-gray-500">
            This form opens your email client (no server yet). We can wire this to a form service later.
          </p>
        </form>
      </div>
    </main>
  );
}
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative bg-gray-950 text-white overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <p className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Contact
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
            Start the conversation.
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            If you’re evaluating US market entry or validating go-to-market before scaling, we should talk.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-lg mx-auto px-6 py-20">
          {sent ? (
            <div className="text-center py-12">
              <div className="text-green-600 text-3xl mb-4">✓</div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Message received.
              </h2>
              <p className="mt-4 text-gray-600">
                Thank you for reaching out. We’ll respond shortly.
              </p>
            </div>
          ) : (
            <form
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);

                const data = {
                  name: formData.get("name"),
                  email: formData.get("email"),
                  company: formData.get("company"),
                  message: formData.get("message"),
                };

                form.reset();
                setLoading(true);

                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                  });

                  setLoading(false);

                  if (res.ok) {
                    setSent(true);
                  } else {
                    const errorText = await res.text();
                    console.error("Contact form failed:", errorText);
                    alert("The message could not be sent. Please try again.");
                  }
                } catch (error) {
                  setLoading(false);
                  console.error("Contact form error:", error);
                  alert("The message could not be sent. Please try again.");
                }
              }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  disabled={loading}
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-900 disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  disabled={loading}
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-900 disabled:opacity-50"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Company
                </label>
                <input
                  name="company"
                  type="text"
                  disabled={loading}
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-900 disabled:opacity-50"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  disabled={loading}
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-900 disabled:opacity-50"
                  placeholder="Briefly describe your situation."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gray-900 text-white py-3 hover:bg-gray-800 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Start the conversation"}
              </button>

              <p className="text-xs text-gray-500 text-center">
                We typically respond within one business day.
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
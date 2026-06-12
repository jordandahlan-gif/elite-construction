export default function HowItWorks() {
  return (
    <section className="bg-slate-50 px-6 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-amber-600">
          How It Works
        </p>

        <h2 className="text-4xl font-bold">
          A simple process from first call to final walkthrough.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            ["01", "Free Consultation", "We discuss your goals, timeline, and project needs."],
            ["02", "Planning & Estimate", "We prepare a clear scope of work and project estimate."],
            ["03", "Construction", "Our team completes the work with clean, professional execution."],
            ["04", "Final Walkthrough", "We review the finished project and make sure everything is right."],
          ].map(([number, title, text]) => (
            <div key={title} className="rounded-2xl border p-6 shadow-sm">
              <p className="text-3xl font-bold text-amber-600">{number}</p>
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
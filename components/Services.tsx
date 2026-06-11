export default function Services() {
  return (
    <section id="services" className="bg-white px-6 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-amber-600">
          Our Services
        </p>

        <h2 className="text-4xl font-bold">
          Construction and renovation services built around your needs.
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          From complete home renovations to custom construction projects,
          we deliver quality craftsmanship, transparent communication,
          and reliable results across Toronto and the GTA.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border p-6 shadow-sm transition hover:shadow-lg">
            <div className="mb-4 text-4xl">🏠</div>

            <h3 className="text-xl font-bold">
              Home Renovations
            </h3>

            <p className="mt-3 text-slate-600">
              Complete interior and exterior renovations designed to
              modernize and increase the value of your home.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm transition hover:shadow-lg">
            <div className="mb-4 text-4xl">🛁</div>

            <h3 className="text-xl font-bold">
              Kitchen & Bathroom Remodeling
            </h3>

            <p className="mt-3 text-slate-600">
              Transform outdated spaces with custom layouts,
              modern finishes, and professional installation.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm transition hover:shadow-lg">
            <div className="mb-4 text-4xl">🔨</div>

            <h3 className="text-xl font-bold">
              Basement Finishing
            </h3>

            <p className="mt-3 text-slate-600">
              Turn unused basement space into a comfortable and
              functional extension of your home.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm transition hover:shadow-lg">
            <div className="mb-4 text-4xl">🏢</div>

            <h3 className="text-xl font-bold">
              Commercial Renovations
            </h3>

            <p className="mt-3 text-slate-600">
              Professional renovation services for offices,
              retail spaces, and commercial properties.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm transition hover:shadow-lg">
            <div className="mb-4 text-4xl">🪵</div>

            <h3 className="text-xl font-bold">
              Decks & Outdoor Structures
            </h3>

            <p className="mt-3 text-slate-600">
              Custom decks, fences, pergolas, and outdoor living
              spaces built to last.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm transition hover:shadow-lg">
            <div className="mb-4 text-4xl">📐</div>

            <h3 className="text-xl font-bold">
              Custom Construction Projects
            </h3>

            <p className="mt-3 text-slate-600">
              From planning to completion, we help bring your
              vision to life with expert craftsmanship.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
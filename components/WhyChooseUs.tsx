export default function WhyChooseUs() {
  return (
    <section className="bg-slate-100 px-6 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center">
          Why Choose Elite Construction?
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">✓</div>
            <h3 className="mt-4 font-bold">Licensed & Insured</h3>
            <p className="mt-2 text-slate-600">
              Fully certified professionals for every job.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">⚡</div>
            <h3 className="mt-4 font-bold">Same Day Service</h3>
            <p className="mt-2 text-slate-600">
              Fast response times when you need help.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">💲</div>
            <h3 className="mt-4 font-bold">Upfront Pricing</h3>
            <p className="mt-2 text-slate-600">
              No surprises and no hidden fees.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">🏆</div>
            <h3 className="mt-4 font-bold">15+ Years Experience</h3>
            <p className="mt-2 text-slate-600">
              Trusted by homeowners across Toronto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-20 text-slate-900">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
            About Elite Construction
          </p>

          <h2 className="text-4xl font-bold">
            Building quality spaces across Toronto and the GTA.
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            At Elite Construction, we specialize in residential and commercial renovation projects that combine quality craftsmanship with exceptional customer service. From kitchen and bathroom remodels to complete home renovations and custom construction projects, our team is committed to delivering results that exceed expectations.

We believe every project deserves careful planning, transparent communication, and attention to detail. Whether you're renovating a single room or transforming an entire property, we work closely with you from concept to completion to bring your vision to life.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-100 p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-3xl font-bold text-blue-600">15+</p>
              <p className="mt-2 text-slate-600">Years Experience</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-3xl font-bold text-blue-600">500+</p>
              <p className="mt-2 text-slate-600">Projects Completed</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-3xl font-bold text-blue-600">100%</p>
              <p className="mt-2 text-slate-600">Client Focused</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-3xl font-bold text-blue-600">Toronto</p>
              <p className="mt-2 text-slate-600">& GTA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
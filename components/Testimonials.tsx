export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "Elite Construction completely transformed our kitchen and main floor. The team was professional, organized, and delivered exactly what was promised.",
    },
    {
      name: "David R.",
      text: "We hired Elite Construction for a basement renovation and couldn't be happier with the results. The workmanship was excellent and the project stayed on schedule.",
    },
    {
      name: "Jennifer L.",
      text: "From planning to completion, communication was outstanding. Our bathroom remodel looks incredible and the entire process was stress free.",
    },
  ];

  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-amber-600">
          Testimonials
        </p>

        <h2 className="text-4xl font-bold text-slate-900">
          Trusted by homeowners and businesses across the GTA.
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          We take pride in delivering high quality construction and renovation
          services that exceed expectations.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="mb-4 text-amber-500">★★★★★</div>

              <p className="text-slate-600">
                "{testimonial.text}"
              </p>

              <p className="mt-6 font-semibold text-slate-900">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
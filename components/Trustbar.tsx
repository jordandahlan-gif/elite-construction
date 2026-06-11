export default function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-white/5 px-6 py-8">
      <div className="mx-auto grid max-w-6xl gap-6 text-center md:grid-cols-4">
        <div>
          <p className="text-2xl font-bold">4.9★</p>
          <p className="mt-1 text-slate-300">Client Satisfaction</p>
        </div>

        <div>
          <p className="text-2xl font-bold">Licensed</p>
          <p className="mt-1 text-slate-300">& Insured</p>
        </div>

        <div>
          <p className="text-2xl font-bold">On-Time</p>
          <p className="mt-1 text-slate-300">Project Delivery</p>
        </div>

        <div>
          <p className="text-2xl font-bold">Free</p>
          <p className="mt-1 text-slate-300">Estimates</p>
        </div>
      </div>
    </section>
  );
}
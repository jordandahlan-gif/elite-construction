export default function TrustStrip() {
  return (
    <section className="bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto grid max-w-6xl gap-6 text-center md:grid-cols-4">
        <div>
          <p className="text-2xl font-bold">4.9★</p>
          <p className="mt-1 text-slate-300">Customer Rating</p>
        </div>

        <div>
          <p className="text-2xl font-bold">Licensed</p>
          <p className="mt-1 text-slate-300">& Insured</p>
        </div>

        <div>
          <p className="text-2xl font-bold">Free</p>
          <p className="mt-1 text-slate-300">Estimates</p>
        </div>

        <div>
          <p className="text-2xl font-bold">Dedicated</p>
          <p className="mt-1 text-slate-300">Project Manager</p>
        </div>
      </div>
    </section>
  );
}
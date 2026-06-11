import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-300">
              Toronto Construction & Renovation
            </p>

            <h1 className="text-6xl font-bold leading-tight">
              Reliable construction services built to last.
            </h1>

            <p className="mt-6 text-xl text-slate-300">
              From complete home renovations to commercial construction projects, we deliver quality craftsmanship and dependable service across Toronto and the GTA.            
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-blue-500 px-6 py-3 font-semibold"
              >
                Get a Free Quote
              </a>

              <button className="rounded-lg border border-white/20 px-6 py-3">
                Call Now
              </button>
            </div>
          </div>

          <div className="relative h-[500px] w-full">
            <Image
              src="/reno.jpg"
              alt="Construction project"
              fill
              className="rounded-3xl object-cover"
              priority
            />
          </div>
        </div>
      </section>
  );
}
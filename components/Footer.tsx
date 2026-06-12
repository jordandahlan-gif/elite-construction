export default function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-bold">Elite Construction</h2>
          <p className="mt-3 text-slate-400">
            Reliable construction and renovation services across Toronto and the GTA.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <div className="mt-3 flex flex-col gap-2 text-slate-400">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Contact</h3>
          <div className="mt-3 space-y-2 text-slate-400">
            <p>📞 (416) 555-0199</p>
            <p>✉️ info@eliteconstruction.ca</p>
            <p>📍 Toronto & GTA</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-sm text-slate-500">
        © 2026 Elite Construction. All rights reserved.
      </div>
    </footer>
  );
}
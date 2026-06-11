export default function ServiceArea() {
  return (
    <section className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-300">
            Service Area
          </p>

          <h2 className="text-4xl font-bold">
            Serving Toronto and the surrounding GTA.
          </h2>

          <p className="mt-5 text-lg text-slate-300">
            From residential renovations to commercial construction projects, our team proudly serves homeowners and businesses throughout Toronto and surrounding communities.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Toronto", "North York", "Scarborough", "Etobicoke", "Mississauga", "Vaughan"].map((area) => (
              <div key={area} className="rounded-xl bg-white/10 px-4 py-3">
                ✓ {area}
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-xl">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.9809472350603!2d-79.39294008692583!3d43.66936607098089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34afe649332f%3A0xe519b46b971b2973!2sCOS!5e0!3m2!1sen!2sca!4v1781107161955!5m2!1sen!2sca"
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </div>
    </section>
  );
}
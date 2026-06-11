"use client";
import { useState } from "react";

export default function QuoteForm() {
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus("Thanks! Your request has been sent.");
      console.log("setting isSubmitting false");
      form.reset();
      setIsSubmitting(false);
    } else {
      setStatus("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-white px-6 py-20 text-slate-900">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Request a Quote
          </p>

          <h2 className="text-4xl font-bold">
            Need help with a construction project? Tell us what you’re planning.
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Fill out the form and our team will get back to you as soon as possible.
          </p>

          <div className="mt-8 space-y-3 text-slate-700">
            <p>📞 (416) 555-0199</p>
            <p>✉️ info@eliteconstruction.ca</p>
            <p>📍 Serving Toronto and the GTA</p>
          </div>
        </div>

        <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl"
        >
          <div className="grid gap-4">
            <input
              name="name"
              className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 outline-none"
              placeholder="Your name"
            />

            <input
              name="email"
              className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 outline-none"
              placeholder="Email address"
            />

            <input
              name="phone"
              className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 outline-none"
              placeholder="Phone number"
            />

            <textarea
              name="message"
              className="min-h-32 rounded-lg border border-white/10 bg-white/10 px-4 py-3 outline-none"
              placeholder="Describe the issue"
            />

            <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white disabled:opacity-50"
                >
                {isSubmitting ? "Sending..." : "Submit Request"}
            </button>
            {status && <p className="mt-3 text-sm text-slate-300">{status}</p>}

          </div>
        </form>
      </div>
    </section>
  );
}
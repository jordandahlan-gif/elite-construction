export default function FAQ() {
  const faqs = [
    {
      question: "Do you provide free estimates?",
      answer:
        "Yes. We provide free estimates for renovation and construction projects so you can understand the scope, timeline, and budget before moving forward.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes. Our team is fully licensed and insured, giving homeowners and businesses peace of mind throughout the project.",
    },
    {
      question: "What types of projects do you handle?",
      answer:
        "We handle home renovations, basement finishing, kitchen and bathroom remodels, decks, outdoor structures, and commercial improvement projects.",
    },
    {
      question: "Do you help with planning and design?",
      answer:
        "Yes. We work with clients from the planning stage through completion, helping with layout ideas, materials, timelines, and project coordination.",
    },
  ];

  return (
    <section className="bg-slate-100 px-6 py-20 text-slate-900">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-wide text-amber-600">
          FAQ
        </p>

        <h2 className="text-center text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="mt-3 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
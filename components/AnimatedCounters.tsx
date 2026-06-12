"use client";

import { useEffect, useState } from "react";

export default function AnimatedCounters() {
  const [projects, setProjects] = useState(0);
  const [years, setYears] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjects((prev) => (prev < 500 ? prev + 10 : 500));
      setYears((prev) => (prev < 15 ? prev + 1 : 15));
      setRating((prev) => (prev < 4.9 ? Number((prev + 0.1).toFixed(1)) : 4.9));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-slate-950 px-6 py-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 text-center md:grid-cols-3">
        <div>
          <p className="text-5xl font-bold text-blue-400">{years}+</p>
          <p className="mt-2 text-slate-300">Years Experience</p>
        </div>

        <div>
          <p className="text-5xl font-bold text-blue-400">{projects}+</p>
          <p className="mt-2 text-slate-300">Projects Completed</p>
        </div>

        <div>
          <p className="text-5xl font-bold text-blue-400">{rating.toFixed(1)}★</p>
          <p className="mt-2 text-slate-300">Client Rating</p>
        </div>
      </div>
    </section>
  );
}
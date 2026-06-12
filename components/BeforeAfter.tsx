"use client";

import { useState } from "react";
import Image from "next/image";

export default function BeforeAfter() {
  const [slider, setSlider] = useState(50);

  return (
    <section className="bg-white px-6 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-amber-600">
          Before & After
        </p>

        <h2 className="text-4xl font-bold">See the transformation.</h2>

        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          See how we transform unfinished spaces into beautiful, functional
          living areas built with care and attention to detail.
        </p>

        <div className="mt-12 rounded-[2rem] bg-slate-100 p-3 shadow-2xl">
          <div className="relative h-[520px] w-full overflow-hidden rounded-[1.5rem] cursor-ew-resize">
            <Image
              src="/before.png"
              alt="Before renovation"
              fill
              className="object-cover"
            />

            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${slider}%` }}
            >
              <div className="relative h-full w-[1200px]">
                <Image
                  src="/after.png"
                  alt="After renovation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute left-6 top-6 rounded-full bg-black/50 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              AFTER
            </div>

            <div className="absolute right-6 top-6 rounded-full bg-black/50 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              BEFORE
            </div>

            <div
              className="absolute top-0 h-full w-1 bg-white shadow-lg"
              style={{ left: `${slider}%` }}
            >
              <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl">
                <span className="text-xl font-bold text-slate-900">↔</span>
              </div>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={slider}
              onChange={(e) => setSlider(Number(e.target.value))}
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
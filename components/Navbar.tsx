"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <h1 className="text-xl font-bold">Elite Construction</h1>

        <div className="hidden gap-6 md:flex">
          <a href="#services" className="hover:text-blue-300">Services</a>
          <a href="#about" className="hover:text-blue-300">About</a>
          <a href="#faq" className="hover:text-blue-300">FAQ</a>
          <a href="#contact" className="hover:text-blue-300">Contact</a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
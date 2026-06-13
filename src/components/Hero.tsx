"use client";

import { useMessages } from "@/hooks/useMessages";
export default function Hero() {
  const messages = useMessages();
  return (
    <section className="relative overflow-x-clip bg-zinc-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.25),transparent)]" />
        <div className="absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-violet-600/10 blur-3xl sm:-right-32 sm:h-96 sm:w-96" />
        <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl sm:-left-32 sm:h-72 sm:w-72" />
      </div>

      <div className="relative mx-auto min-w-0 max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <div className="grid min-w-0 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0 max-w-xl lg:max-w-none">
            <p className="mb-4 inline-block max-w-full rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-sm sm:px-4 sm:text-sm">
            {messages.hero.badge}
            </p>

            <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {messages.hero.title1}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {messages.hero.title2}
              </span>{" "}
                {messages.hero.title3}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400 sm:text-xl">
              {messages.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#contacto"
                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3.5 text-base font-semibold text-zinc-950 transition hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:px-7"
              >
                {messages.hero.primaryButton}
              </a>
              <a
                href="#servicios"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:px-7"
              >
                {messages.hero.secondaryButton}
              </a>
            </div>
          </div>

          <div className="relative mx-auto min-w-0 w-full max-w-lg lg:max-w-none">
            <div
              aria-hidden
              className="absolute inset-0 overflow-hidden rounded-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/20 blur-2xl" />
            </div>
            <div className="relative aspect-square w-full max-w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/80 p-4 shadow-2xl shadow-violet-950/50 backdrop-blur-sm sm:p-6 md:p-8">
              <TechIllustration />
              <p className="absolute bottom-4 left-0 right-0 text-center text-xs font-medium uppercase tracking-widest text-zinc-500">
                Ilustración tecnológica
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full max-w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="hero-grad-violet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="hero-grad-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="200" r="120" stroke="url(#hero-grad-violet)" strokeWidth="1" strokeOpacity="0.2" />
      <circle cx="200" cy="200" r="80" stroke="url(#hero-grad-violet)" strokeWidth="1" strokeOpacity="0.15" />
      <circle cx="200" cy="200" r="40" stroke="url(#hero-grad-violet)" strokeWidth="1" strokeOpacity="0.25" />

      <rect x="155" y="155" width="90" height="90" rx="16" fill="#18181b" stroke="url(#hero-grad-violet)" strokeWidth="1.5" />
      <path
        d="M175 195 L195 215 L235 175"
        stroke="url(#hero-grad-violet)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="200" cy="200" r="6" fill="#a78bfa" />

      <g opacity="0.9">
        <rect x="60" y="80" width="72" height="48" rx="8" fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
        <rect x="72" y="96" width="32" height="4" rx="2" fill="#52525b" />
        <rect x="72" y="108" width="48" height="4" rx="2" fill="#3f3f46" />

        <rect x="268" y="72" width="72" height="56" rx="8" fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
        <circle cx="284" cy="100" r="8" fill="#8b5cf6" fillOpacity="0.4" />
        <rect x="300" y="94" width="28" height="4" rx="2" fill="#52525b" />
        <rect x="300" y="106" width="20" height="4" rx="2" fill="#3f3f46" />

        <rect x="52" y="268" width="80" height="56" rx="8" fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
        <path d="M68 296 H116 M68 306 H100" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />

        <rect x="272" y="272" width="76" height="52" rx="8" fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
        <rect x="284" y="288" width="12" height="20" rx="2" fill="#a78bfa" fillOpacity="0.6" />
        <rect x="300" y="296" width="12" height="12" rx="2" fill="#22d3ee" fillOpacity="0.6" />
        <rect x="316" y="292" width="12" height="16" rx="2" fill="#8b5cf6" fillOpacity="0.6" />
      </g>

      <path d="M132 104 Q166 140 155 200" stroke="url(#hero-grad-line)" strokeWidth="1.5" strokeDasharray="4 6" />
      <path d="M268 100 Q234 150 245 200" stroke="url(#hero-grad-line)" strokeWidth="1.5" strokeDasharray="4 6" />
      <path d="M92 296 Q140 260 160 245" stroke="url(#hero-grad-line)" strokeWidth="1.5" strokeDasharray="4 6" />
      <path d="M310 298 Q260 260 240 245" stroke="url(#hero-grad-line)" strokeWidth="1.5" strokeDasharray="4 6" />

      <circle cx="132" cy="104" r="5" fill="#a78bfa" />
      <circle cx="268" cy="100" r="5" fill="#22d3ee" />
      <circle cx="92" cy="296" r="5" fill="#22d3ee" />
      <circle cx="310" cy="298" r="5" fill="#a78bfa" />
    </svg>
  );
}

type Step = {
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Descubrimiento",
    description:
      "Analizamos objetivos, necesidades y oportunidades.",
  },
  {
    number: "02",
    title: "Planificación",
    description:
      "Diseñamos la estrategia técnica y funcional.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Construimos la solución utilizando tecnologías modernas.",
  },
  {
    number: "04",
    title: "Optimización",
    description:
      "Medimos resultados y mejoramos continuamente.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-x-clip bg-zinc-950 py-16 text-white sm:py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(120,119,198,0.15),transparent)]" />
        <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl sm:h-64 sm:w-64" />
      </div>

      <div className="relative mx-auto min-w-0 max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-400">
            Cómo trabajamos
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Nuestro proceso
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Un método claro para transformar ideas en resultados.
          </p>
        </div>

        <div className="relative mt-12 min-w-0 sm:mt-16 lg:mt-24">
          <div
            aria-hidden
            className="absolute left-0 top-12 hidden h-px w-full bg-gradient-to-r from-violet-500/50 via-cyan-500/30 to-violet-500/50 lg:block"
          />

          <ol className="grid min-w-0 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
              <li
                key={step.number}
                className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] gap-4 lg:block"
              >
                <div className="relative flex flex-col items-center lg:hidden">
                  <div
                    aria-hidden
                    className="mt-6 h-3 w-3 shrink-0 rounded-full border-2 border-violet-400 bg-zinc-950"
                  />
                  {index < steps.length - 1 && (
                    <div
                      aria-hidden
                      className="my-2 w-px flex-1 min-h-8 bg-gradient-to-b from-violet-500/40 to-cyan-500/20"
                    />
                  )}
                </div>

                <article className="group relative min-w-0 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-violet-950/50 sm:p-6 lg:pt-14">
                  <div
                    aria-hidden
                    className="absolute left-1/2 top-0 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-violet-400 bg-zinc-950 lg:block"
                  />

                  <span className="block bg-gradient-to-r from-violet-400/20 to-cyan-400/20 bg-clip-text text-4xl font-bold leading-none tracking-tighter text-transparent transition duration-300 group-hover:from-violet-400 group-hover:to-cyan-400 sm:text-5xl lg:text-6xl">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-zinc-400 transition duration-300 group-hover:text-zinc-300">
                    {step.description}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

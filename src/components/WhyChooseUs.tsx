type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const benefits: Benefit[] = [
  {
    title: "Soluciones Personalizadas",
    description:
      "Cada proyecto se diseña según las necesidades específicas de tu negocio.",
    icon: <CustomSolutionsIcon />,
  },
  {
    title: "Automatización Inteligente",
    description:
      "Reducimos tareas manuales para que tu equipo se enfoque en actividades estratégicas.",
    icon: <SmartAutomationIcon />,
  },
  {
    title: "Tecnología Moderna",
    description:
      "Utilizamos herramientas actuales, seguras y escalables.",
    icon: <ModernTechIcon />,
  },
  {
    title: "Acompañamiento Continuo",
    description:
      "No solo desarrollamos, también apoyamos el crecimiento de tu empresa.",
    icon: <ContinuousSupportIcon />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="overflow-x-clip bg-zinc-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-600">
            Nuestra propuesta de valor
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            ¿Por qué elegir Vertex Digital?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600 sm:text-xl">
            Nos enfocamos en resultados reales, eficiencia operativa y
            crecimiento sostenible para nuestros clientes.
          </p>
        </div>

        <div className="mt-12 grid min-w-0 gap-6 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group min-w-0 rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-md hover:shadow-violet-100/40 sm:p-8"
            >
              <div className="mb-6 inline-flex rounded-xl bg-zinc-50 p-3 text-violet-600 ring-1 ring-zinc-100 transition duration-300 group-hover:bg-gradient-to-br group-hover:from-violet-50 group-hover:to-cyan-50 group-hover:ring-violet-100">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-zinc-900">
                {benefit.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomSolutionsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden
    >
      <path d="M12 3l2 4 4.5.7-3.2 3.2.8 4.5L12 13.5 7.9 15.4l.8-4.5L5.5 7.7 10 7z" />
      <path d="M19 14l1.5 3 3.5.5-2.5 2.5.5 3.5L19 21l-3 1.5.5-3.5-2.5-2.5 3.5-.5L19 14z" />
    </svg>
  );
}

function SmartAutomationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function ModernTechIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ContinuousSupportIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      <path d="M19 8v6" />
      <path d="M16 11h6" />
    </svg>
  );
}

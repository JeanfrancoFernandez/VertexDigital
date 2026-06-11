type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Desarrollo Web",
    description:
      "Sitios corporativos, landing pages, ecommerce y plataformas web de alto rendimiento.",
    icon: <WebDevIcon />,
  },
  {
    title: "Automatización",
    description:
      "Automatizamos tareas repetitivas, integraciones y flujos de trabajo para ahorrar tiempo y costos.",
    icon: <AutomationIcon />,
  },
  {
    title: "Inteligencia Artificial",
    description:
      "Chatbots, asistentes inteligentes, análisis de datos y soluciones basadas en IA.",
    icon: <AIIcon />,
  },
  {
    title: "Software a Medida",
    description:
      "Sistemas internos, paneles de administración y herramientas adaptadas a tu negocio.",
    icon: <CustomSoftwareIcon />,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="overflow-x-clip bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-600">
            Nuestros servicios
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            Soluciones que impulsan tu crecimiento
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600 sm:text-xl">
            Ayudamos a empresas a optimizar procesos, aumentar productividad y
            escalar mediante desarrollo de software, automatización e
            inteligencia artificial.
          </p>
        </div>

        <div className="mt-12 grid min-w-0 gap-6 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative min-w-0 rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-100 hover:shadow-lg hover:shadow-violet-100/50 sm:p-8"
            >
              <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-violet-50 to-cyan-50 p-3 text-violet-600 transition duration-300 group-hover:from-violet-100 group-hover:to-cyan-100 group-hover:text-violet-700">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-zinc-900">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WebDevIcon() {
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
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 8h2" />
      <path d="M7 11h6" />
    </svg>
  );
}

function AutomationIcon() {
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
      <path d="M12 3v3" />
      <path d="M12 18v3" />
      <path d="M3 12h3" />
      <path d="M18 12h3" />
      <circle cx="12" cy="12" r="4" />
      <path d="M7.5 7.5l2.1 2.1" />
      <path d="M14.4 14.4l2.1 2.1" />
      <path d="M16.5 7.5l-2.1 2.1" />
      <path d="M9.6 14.4l-2.1 2.1" />
    </svg>
  );
}

function AIIcon() {
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
      <path d="M12 2a4 4 0 0 1 4 4v1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3v1a4 4 0 0 1-8 0v-1a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3V6a4 4 0 0 1 4-4z" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path d="M9.5 15a2.5 2.5 0 0 0 5 0" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
    </svg>
  );
}

function CustomSoftwareIcon() {
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
      <path d="M16 18l6-6-6-6" />
      <path d="M8 6l-6 6 6 6" />
      <path d="M14 4l-4 16" />
    </svg>
  );
}

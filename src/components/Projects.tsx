type Project = {
    title: string;
    description: string;
    technologies: string[];
  };
  
  const projects: Project[] = [
    {
      title: "Sistema de Gestión Empresarial",
      description:
        "Plataforma web diseñada para centralizar operaciones internas, gestionar clientes, controlar inventario y mejorar la productividad del equipo.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    },
    {
      title: "Automatización de Procesos",
      description:
        "Implementación de flujos automatizados para eliminar tareas repetitivas, reducir errores y optimizar tiempos operativos.",
      technologies: ["Make", "Zapier", "APIs"],
    },
    {
      title: "Asistente IA para Atención al Cliente",
      description:
        "Chatbot inteligente capaz de responder consultas, capturar leads y brindar soporte automatizado las 24 horas.",
      technologies: ["OpenAI", "Node.js", "WhatsApp API"],
    },
  ];
  
  export default function Projects() {
    return (
      <section
        id="proyectos"
        className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
      >
        {/* Decoración */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(120,119,198,0.08),transparent)]"
        />
  
        <div className="relative mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-600">
              Portfolio
            </p>
  
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
              Proyectos Destacados
            </h2>
  
            <p className="mt-5 text-lg leading-relaxed text-zinc-600 sm:text-xl">
              Algunos ejemplos de soluciones que desarrollamos para ayudar a
              empresas a crecer.
            </p>
          </div>
  
          {/* Grid */}
          <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50"
              >
                <h3 className="text-2xl font-semibold text-zinc-900">
                  {project.title}
                </h3>
  
                <p className="mt-4 flex-grow leading-relaxed text-zinc-600">
                  {project.description}
                </p>
  
                {/* Tecnologías */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gradient-to-r from-violet-50 to-cyan-50 px-3 py-1 text-sm font-medium text-violet-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
  
                {/* Botón */}
                <button
                  className="mt-8 rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
                >
                  Ver Proyecto
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
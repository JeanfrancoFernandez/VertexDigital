export default function Footer() {
    return (
      <footer className="relative overflow-hidden bg-zinc-950 text-white">
        {/* Efectos de fondo */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(120,119,198,0.12),transparent)]"
        />
  
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl"
        />
  
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          {/* Parte superior */}
          <div className="grid gap-12 md:grid-cols-3">
            {/* Marca */}
            <div>
              <h3 className="text-2xl font-bold">
                Vertex{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Digital
                </span>
              </h3>
  
              <p className="mt-4 max-w-sm text-zinc-400">
                Ayudamos a empresas a crecer mediante desarrollo de software,
                automatización de procesos e inteligencia artificial.
              </p>
            </div>
  
            {/* Navegación */}
            <div>
              <h4 className="text-lg font-semibold">Navegación</h4>
  
              <ul className="mt-4 space-y-3 text-zinc-400">
                <li>
                  <a
                    href="#"
                    className="transition hover:text-violet-400"
                  >
                    Inicio
                  </a>
                </li>
  
                <li>
                  <a
                    href="#servicios"
                    className="transition hover:text-violet-400"
                  >
                    Servicios
                  </a>
                </li>
  
                <li>
                  <a
                    href="#proceso"
                    className="transition hover:text-violet-400"
                  >
                    Proceso
                  </a>
                </li>
  
                <li>
                  <a
                    href="#contacto"
                    className="transition hover:text-violet-400"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contacto */}
            <div>
              <h4 className="text-lg font-semibold">Contacto</h4>
  
              <ul className="mt-4 space-y-3 text-zinc-400">
                <li>
                  <a
                    href="mailto:contacto@vertexdigital.cl"
                    className="transition hover:text-violet-400"
                  >
                    contacto@vertexdigital.cl
                  </a>
                </li>
  
                <li>
                  <a
                    href="https://wa.me/56959246898"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-emerald-400"
                  >
                    +56 9 5924 6898
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Línea divisora */}
          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
  
          {/* Parte inferior */}
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-zinc-500 md:flex-row">
            <p>
              © 2026 Vertex Digital. Todos los derechos reservados.
            </p>
  
            <p>
              Desarrollado con Next.js + TypeScript + Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    );
  }
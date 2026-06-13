"use client";

import { useLanguage } from "@/context/LanguageContext";
export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  return (
    <nav className="w-full overflow-x-clip border-b border-gray-200">
      <div className="mx-auto flex min-w-0 max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6">
        <div className="min-w-0">
          <h2 className="truncate text-lg font-bold sm:text-xl md:text-2xl">
            Vertex Digital
          </h2>
        </div>

        <ul className="hidden shrink-0 gap-8 md:flex">
          <li>Inicio</li>
          <li>Servicios</li>
          <li>Casos de Éxito</li>
          <li>Tecnologías</li>
          <li>Contacto</li>
        </ul>

        <a
          href="#contacto"
          className="shrink-0 rounded-lg bg-black px-3 py-2 text-xs font-semibold text-white sm:px-5 sm:text-sm"
        >
          <span className="sm:hidden">Cotizar</span>
          <span className="hidden sm:inline">Solicitar Cotización</span>
        </a>
        <div className="flex items-center gap-2 text-sm font-semibold">
  <button
    onClick={() => setLanguage("es")}
    className={
      language === "es"
        ? "text-violet-600"
        : "text-zinc-500"
    }
  >
    ES
  </button>

  <span className="text-zinc-300">|</span>

  <button
    onClick={() => setLanguage("en")}
    className={
      language === "en"
        ? "text-violet-600"
        : "text-zinc-500"
    }
  >
    EN
  </button>
</div>
      </div>
    </nav>
  );
}

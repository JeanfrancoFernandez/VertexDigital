const WHATSAPP_NUMBER = "56959246898";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function Contact() {
  return (
    <section id="contacto" className="overflow-x-clip bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6">
        <div className="grid min-w-0 items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="min-w-0">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-600">
              Contacto
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
              Hablemos de tu proyecto
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600 sm:text-xl">
              Cuéntanos qué necesitas y te ayudaremos a encontrar la mejor
              solución para tu negocio.
            </p>
            <p className="mt-6 text-base leading-relaxed text-zinc-500">
              Ya sea que busques automatizar procesos, desarrollar una
              plataforma web o integrar inteligencia artificial, nuestro equipo
              analiza tu caso y te propone un plan claro, sin compromiso.
            </p>

            <div className="mt-8 rounded-2xl border border-zinc-100 bg-zinc-50/80 p-5 shadow-sm sm:mt-10 sm:p-8">
              <h3 className="text-lg font-semibold text-zinc-900">
                Información de contacto
              </h3>
              <ul className="mt-6 space-y-5">
                <ContactItem
                  icon={<EmailIcon />}
                  label="Email"
                  href="mailto:contacto@vertexdigital.cl"
                >
                  contacto@vertexdigital.cl
                </ContactItem>
                <ContactItem
                  icon={<WhatsAppIcon />}
                  label="WhatsApp"
                  href={WHATSAPP_URL}
                  external
                >
                  +56 9 5924 6898
                </ContactItem>
                <ContactItem icon={<ClockIcon />} label="Tiempo de respuesta">
                  Menos de 24 horas
                </ContactItem>
              </ul>
            </div>
          </div>

          <div className="min-w-0 rounded-2xl border border-zinc-100 bg-white p-5 shadow-lg shadow-zinc-100/80 sm:p-8">
            <h3 className="text-xl font-semibold text-zinc-900">
              Solicita tu cotización
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Completa el formulario y nos pondremos en contacto contigo.
            </p>

            <form className="mt-8 space-y-5" action="#" method="post">
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Tu nombre completo"
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="empresa"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  Empresa
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  autoComplete="organization"
                  placeholder="Nombre de tu empresa"
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="correo"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="tu@empresa.com"
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  placeholder="Describe tu proyecto o necesidad..."
                  className={`${inputClassName} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-zinc-950 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                Solicitar Cotización
              </button>
            </form>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-base font-semibold text-zinc-900 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputClassName =
  "w-full min-w-0 max-w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 transition hover:border-zinc-300 focus:border-violet-400 focus:outline-none focus:ring-4 focus:ring-violet-100";

type ContactItemProps = {
  icon: React.ReactNode;
  label: string;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
};

function ContactItem({
  icon,
  label,
  href,
  external,
  children,
}: ContactItemProps) {
  const content = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-50 to-cyan-50 text-violet-600">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium text-zinc-500">{label}</p>
        <p className="mt-0.5 break-words text-base font-medium text-zinc-900">
          {children}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <li>
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="group flex min-w-0 items-center gap-4 rounded-xl p-2 transition hover:bg-white"
        >
          {content}
        </a>
      </li>
    );
  }

  return (
    <li className="flex min-w-0 items-center gap-4 rounded-xl p-2">{content}</li>
  );
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

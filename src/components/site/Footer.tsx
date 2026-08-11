import { img, social, wa } from "@/lib/site";
import { WhatsAppIcon } from "./ui-bits";

const footerNav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Endourología", href: "#endourologia" },
  { label: "Sobre el doctor", href: "#doctor" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy pb-10 pt-16 text-white">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,0.7fr)]">
          <div>
            <img
              src={img.logo}
              alt="Logotipo del Dr. Mario de la Peña"
              width={1379}
              height={1141}
              loading="lazy"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-6 font-display text-3xl leading-none text-white">
              Dr. Mario de la Peña
            </p>
            <p className="mt-3 text-sm text-stone">Cirujano Urólogo</p>
            <p className="text-sm text-stone">Alta especialidad en Endourología</p>
            <p className="mt-3 text-xs text-stone/70">Cédula de especialidad: 12227073</p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <p className="eyebrow text-stone">Navegación</p>
            <ul className="mt-5 space-y-3">
              {footerNav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-stone transition-colors duration-300 hover:text-champagne"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-stone">Redes</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-stone transition-colors duration-300 hover:text-champagne"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-stone transition-colors duration-300 hover:text-champagne"
                >
                  Facebook
                </a>
              </li>
            </ul>
            <p className="mt-6 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-stone/80">
              Zapopan, Jalisco
            </p>
          </div>
        </div>

        <p className="mt-14 max-w-2xl border-t border-white/10 pt-6 text-xs leading-relaxed text-stone/70">
          La información contenida en este sitio es informativa y no sustituye una consulta médica.
        </p>

        <div className="mt-6 flex flex-col gap-2 text-xs text-stone/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dr. Mario de la Peña. Todos los derechos reservados.</p>
          <p className="text-stone/40">Sitio creado por Mi Vitrina Digital</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={wa()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar cita por WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_6px_20px_rgba(15,28,46,0.18)] transition-transform duration-300 hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}


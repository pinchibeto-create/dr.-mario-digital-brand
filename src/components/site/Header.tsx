import { useEffect, useState } from "react";
import { img, navLinks, wa } from "@/lib/site";
import { WhatsAppIcon } from "./ui-bits";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 md:px-10 lg:py-4">
        <a href="#inicio" className="flex min-w-0 items-center" aria-label="Dr. Mario de la Peña — inicio">
          <img
            src={img.logo}
            alt="Logotipo del Dr. Mario de la Peña, cirujano urólogo"
            className="h-10 w-auto md:h-12"
            width={1379}
            height={1141}
          />
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-7 xl:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href={wa()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors duration-300 hover:bg-navy-soft"
          >
            Agendar cita
          </a>
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={wa()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar cita por WhatsApp"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground"
          >
            <WhatsAppIcon />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-md border border-border"
          >
            <span
              aria-hidden="true"
              className={`h-px w-5 bg-primary transition-transform duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              aria-hidden="true"
              className={`h-px w-5 bg-primary transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              aria-hidden="true"
              className={`h-px w-5 bg-primary transition-transform duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-movil"
          aria-label="Navegación móvil"
          className="border-t border-border bg-background px-5 pb-8 pt-4 xl:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href} className="border-b border-border/60 last:border-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center text-sm font-medium uppercase tracking-[0.14em] text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

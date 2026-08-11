import { img, wa } from "@/lib/site";
import { CtaOutline, CtaPrimary, WhatsAppIcon } from "./ui-bits";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-editorial pt-24 md:pt-28">
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="relative grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:gap-10">
          <div className="relative z-20 pt-6 lg:py-16">
            <Reveal>
              <p className="eyebrow">Urología · Endourología</p>
              <h1 className="mt-6 text-[clamp(2.9rem,12vw,7.25rem)] leading-[0.9] text-primary">
                Dr. Mario
                <br />
                de la Peña
                <span className="sr-only"> — Cirujano Urólogo y Endourólogo</span>
              </h1>
              <div className="mt-6 max-w-md border-l border-champagne pl-5">
                <p className="text-base font-semibold text-primary">Cirujano Urólogo</p>
                <p className="text-base text-muted-foreground">Alta especialidad en Endourología</p>
              </div>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                Atención especializada en enfermedades urológicas con enfoque en diagnóstico
                preciso, tratamientos actuales y técnicas de mínima invasión.
              </p>
              <p className="mt-5 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-primary">
                Zapopan, Jalisco
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaPrimary href={wa()} ariaLabel="Agendar cita por WhatsApp">
                  <WhatsAppIcon className="h-4 w-4" />
                  Agendar cita
                </CtaPrimary>
                <CtaOutline href="#doctor">Conocer al doctor</CtaOutline>
              </div>
            </Reveal>
          </div>

          <div className="relative flex items-end justify-center lg:justify-end">
            {/* Tipografía editorial de gran escala detrás de la fotografía */}
            <span
              aria-hidden="true"
              className="display-outline pointer-events-none absolute left-1/2 top-4 z-0 -translate-x-1/2 whitespace-nowrap text-[16vw] leading-none tracking-[0.02em] sm:text-[12vw] lg:left-auto lg:right-0 lg:top-10 lg:translate-x-0 lg:text-[7.5vw]"
            >
              Endourology
            </span>
            <img
              src={img.heroVertical}
              alt="Dr. Mario de la Peña, cirujano urólogo"
              width={1000}
              height={1500}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="relative z-10 h-[46vh] w-auto max-w-full object-contain object-bottom sm:h-[56vh] lg:h-[68vh] lg:max-h-[680px]"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <p className="editorial-rule border-t border-border py-5 text-[0.7rem] text-muted-foreground">
          Precisión · Innovación · Excelencia
        </p>
      </div>
    </section>
  );
}

const authority = [
  "Cirujano Urólogo",
  "Alta especialidad en Endourología",
  "Atención en Zapopan",
  "Cirugía de mínima invasión",
];

export function AuthorityStrip() {
  return (
    <section aria-label="Credenciales" className="border-y border-border bg-background">
      <div className="mx-auto flex max-w-[1440px] flex-col divide-y divide-border px-5 md:flex-row md:items-center md:justify-between md:divide-y-0 md:px-10">
        {authority.map((item, i) => (
          <div key={item} className="flex items-center gap-4 py-4 md:py-6">
            {i > 0 && <span aria-hidden="true" className="hidden h-3 w-px bg-champagne md:block" />}
            <span className="editorial-rule text-[0.68rem] text-muted-foreground">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Banda editorial full-bleed con la composición del doctor en quirófano. */
export function EditorialBand() {
  return (
    <section aria-label="Composición editorial" className="relative bg-editorial">
      <div className="relative">
        <img
          src={img.heroEditorial}
          alt="Dr. Mario de la Peña, cirujano urólogo, composición editorial"
          width={1920}
          height={712}
          loading="lazy"
          decoding="async"
          className="h-[42vh] w-full object-cover object-right md:h-auto md:aspect-[1920/712]"
        />
        <p className="editorial-rule absolute bottom-6 left-5 max-w-[45%] text-[0.62rem] text-primary sm:text-[0.7rem] md:bottom-10 md:left-10">
          Precisión clínica · Tecnología · Mínima invasión
        </p>
      </div>
    </section>
  );
}

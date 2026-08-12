import { img } from "@/lib/site";
import { Eyebrow } from "./ui-bits";
import { Reveal } from "./Reveal";

const formation = [
  { short: "UAS", full: "Universidad Autónoma de Sinaloa", desc: "Médico Cirujano" },
  { short: "UdeG", full: "Universidad de Guadalajara", desc: "Especialidad en Urología" },
  { short: "UNAM", full: "Universidad Nacional Autónoma de México", desc: "Alta Especialidad en Endourología" },
];

export function About() {
  return (
    <section id="doctor" className="bg-background py-20 md:py-32">
      <div className="mx-auto grid max-w-[1440px] items-start gap-12 px-5 md:px-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20">
        <Reveal className="relative lg:sticky lg:top-32">
          <span
            aria-hidden="true"
            className="absolute -left-2 -top-8 hidden font-display text-[7rem] leading-none text-stone lg:block"
          >
            01
          </span>
          <img
            src={img.retratoScrubs}
            alt="Dr. Mario de la Peña, cirujano urólogo, retrato profesional"
            width={1024}
            height={1536}
            loading="lazy"
            decoding="async"
            className="relative aspect-[3/4] w-full rounded-[12px] object-cover shadow-sm"
          />
          <div className="mt-8 hidden lg:block">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
              Certificación
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Certificado por el Consejo Nacional Mexicano de Urología.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Cédula de especialidad: <span className="font-semibold text-primary">12227073</span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>Sobre el especialista</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] text-primary">
            Dr. Mario de la Peña
          </h2>
          <p className="mt-2 text-lg font-medium text-champagne">
            Cirujano Urólogo | Alta Especialidad en Endourología
          </p>
          
          <div className="mt-8 max-w-xl space-y-6 text-base leading-relaxed text-muted-foreground">
            <p className="text-primary/90">
              Su práctica se enfoca en el diagnóstico y tratamiento de enfermedades urológicas, 
              con especial atención a la Endourología y a técnicas modernas y mínimamente 
              invasivas para el tratamiento de padecimientos de las vías urinarias.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
              Formación académica
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {formation.map((f, i) => (
                <div key={f.short} className="relative">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl text-champagne">{f.short}</span>
                    {i < formation.length - 1 && (
                      <span className="hidden h-px flex-1 bg-border sm:block" />
                    )}
                  </div>
                  <div className="mt-3">
                    <p className="text-[0.72rem] font-bold text-primary leading-tight">
                      {f.full}
                    </p>
                    <p className="mt-1 text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 lg:hidden">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
              Certificación
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Certificado por el Consejo Nacional Mexicano de Urología.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Cédula de especialidad: <span className="font-semibold text-primary">12227073</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

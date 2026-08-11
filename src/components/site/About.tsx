import { img } from "@/lib/site";
import { Eyebrow } from "./ui-bits";
import { Reveal } from "./Reveal";

const marks = ["Urología", "Endourología", "Mínima invasión", "Zapopan, Jalisco"];

export function About() {
  return (
    <section id="doctor" className="bg-background py-20 md:py-32">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:px-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20">
        <Reveal className="relative">
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
            className="relative aspect-[3/4] w-full rounded-[12px] object-cover"
          />
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>Sobre el especialista</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] text-primary">
            Experiencia enfocada
            <br />
            en tu salud urológica.
          </h2>
          <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              El Dr. Mario de la Peña es cirujano urólogo con alta especialidad en Endourología,
              enfocado en el diagnóstico y tratamiento de enfermedades de las vías urinarias y del
              sistema reproductor masculino.
            </p>
            <p>
              Su práctica integra evaluación especializada, técnicas quirúrgicas modernas y
              procedimientos de mínima invasión.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-2 border-t border-border">
            {marks.map((m) => (
              <li
                key={m}
                className="border-b border-r border-border px-4 py-5 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-primary last:border-r-0 even:border-r-0"
              >
                {m}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-xs text-muted-foreground">
            Cédula de especialidad: <span className="font-semibold text-primary">12227073</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

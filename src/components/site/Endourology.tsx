import { img } from "@/lib/site";
import { Eyebrow } from "./ui-bits";
import { Reveal } from "./Reveal";

const points = [
  "Procedimientos menos invasivos",
  "Tecnología especializada",
  "Tratamiento de cálculos urinarios",
  "Abordajes endoscópicos",
  "Planeación individualizada",
];

export function Endourology() {
  return (
    <section id="endourologia" className="relative overflow-hidden bg-navy py-20 text-white md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-20">
          <Reveal>
            <Eyebrow tone="light">Alta especialidad</Eyebrow>
            <h2 className="mt-6 text-[clamp(3.25rem,11vw,8rem)] leading-[0.88] text-white">
              Endourología
            </h2>
            <p className="mt-6 max-w-md text-base font-medium text-stone">
              Tecnología y precisión para procedimientos de mínima invasión.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-stone/85">
              La Endourología utiliza técnicas e instrumentos especializados para diagnosticar y
              tratar diferentes enfermedades del sistema urinario mediante procedimientos
              endoscópicos y abordajes de mínima invasión.
            </p>

            <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {points.map((p, i) => (
                <li key={p} className="flex items-baseline gap-5 py-4">
                  <span className="font-display text-base text-champagne">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-stone">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140} className="self-start">
            <img
              src={img.quirofanoVertical}
              alt="Dr. Mario de la Peña durante procedimiento de Endourología"
              width={1086}
              height={1448}
              loading="lazy"
              decoding="async"
              className="aspect-[3/4] w-full rounded-[12px] object-cover object-top"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section aria-label="Galería quirúrgica" className="bg-navy pb-20 md:pb-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          <Reveal as="figure" className="md:col-span-2">
            <img
              src={img.quirofanoRetrato}
              alt="Dr. Mario de la Peña en quirófano durante un procedimiento urológico"
              width={1498}
              height={1050}
              loading="lazy"
              decoding="async"
              className="aspect-[16/11] w-full rounded-[12px] object-cover"
            />
          </Reveal>
          <Reveal as="figure" delay={120}>
            <img
              src={img.equipoMedico}
              alt="Equipo médico durante procedimiento urológico"
              width={1093}
              height={1439}
              loading="lazy"
              decoding="async"
              className="h-full w-full rounded-[12px] object-cover md:aspect-auto"
            />
          </Reveal>
          <Reveal as="figure" delay={200} className="md:col-span-3">
            <img
              src={img.quirofanoPreparacion}
              alt="Preparación quirúrgica en quirófano"
              width={1502}
              height={1047}
              loading="lazy"
              decoding="async"
              className="aspect-[16/9] w-full rounded-[12px] object-cover md:aspect-[21/8]"
            />
          </Reveal>

        </div>
      </div>
    </section>
  );
}

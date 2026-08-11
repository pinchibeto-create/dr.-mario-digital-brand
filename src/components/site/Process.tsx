import { img } from "@/lib/site";
import { Eyebrow } from "./ui-bits";
import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Diagnóstico", d: "Historia clínica, exploración y estudios necesarios para entender el caso." },
  { n: "02", t: "Planeación", d: "Definición de alternativas diagnósticas o terapéuticas según cada paciente." },
  { n: "03", t: "Tratamiento", d: "Manejo médico o quirúrgico con preferencia por técnicas de mínima invasión." },
  { n: "04", t: "Seguimiento", d: "Revisión de la evolución y ajustes al plan cuando es necesario." },
];

export function Process() {
  return (
    <section id="proceso" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>Proceso de atención</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] text-primary">
            Precisión en cada procedimiento.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Cada caso requiere una evaluación individual y una estrategia de tratamiento basada en
            las necesidades particulares del paciente.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 90} className="border-b border-r border-border px-2 py-8 last:border-r-0 lg:px-6">
              <span className="font-display text-[3.5rem] leading-none text-champagne">{s.n}</span>
              <h3 className="mt-4 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-primary">
                {s.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Office() {
  return (
    <section id="consultorio" className="bg-editorial py-20 md:py-32">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
        <Reveal className="grid grid-cols-5 gap-4">
          <img
            src={img.consultorio}
            alt="Dr. Mario de la Peña con bata en su consultorio de urología"
            width={1482}
            height={1061}
            loading="lazy"
            decoding="async"
            className="col-span-3 aspect-[4/5] w-full rounded-[12px] object-cover"
          />
          <img
            src={img.consultorioModelo}
            alt="Dr. Mario de la Peña explicando con un modelo anatómico durante la consulta"
            width={1464}
            height={1075}
            loading="lazy"
            decoding="async"
            className="col-span-2 mt-10 aspect-[3/4] w-full rounded-[12px] object-cover"
          />
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>Consultorio</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.25rem,5.5vw,4rem)] text-primary">
            Consulta urológica especializada
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Un espacio para realizar una evaluación integral, resolver dudas y definir alternativas
            diagnósticas o terapéuticas adecuadas para cada caso.
          </p>
          <p className="mt-8 border-t border-border pt-6 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-primary">
            Zapopan, Jalisco
          </p>
        </Reveal>
      </div>
    </section>
  );
}

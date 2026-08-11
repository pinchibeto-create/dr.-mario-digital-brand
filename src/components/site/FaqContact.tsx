import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { social, wa } from "@/lib/site";
import { CtaPrimary, Eyebrow, WhatsAppIcon } from "./ui-bits";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "¿Cuándo debería acudir con un urólogo?",
    a: "Cuando existen molestias al orinar, cambios en la frecuencia urinaria, sangre en la orina, dolor lumbar o abdominal bajo, molestias genitales, o cuando se busca una valoración preventiva de próstata o de salud urológica masculina. También ante estudios de laboratorio o de imagen con hallazgos que requieren interpretación especializada.",
  },
  {
    q: "¿Qué problemas trata un urólogo?",
    a: "Enfermedades del riñón, los uréteres, la vejiga, la próstata y el aparato reproductor masculino: cálculos urinarios, infecciones, obstrucción urinaria, crecimiento prostático, varicocele, y padecimientos oncológicos urológicos, entre otros.",
  },
  {
    q: "¿Qué es la Endourología?",
    a: "Es una alta especialidad de la urología que utiliza instrumentos endoscópicos y técnicas de mínima invasión para diagnosticar y tratar enfermedades del sistema urinario, con frecuencia sin necesidad de incisiones amplias.",
  },
  {
    q: "¿Cuándo una piedra en el riñón requiere tratamiento?",
    a: "Depende del tamaño, la localización y los síntomas. Se valora tratamiento cuando el cálculo provoca dolor persistente, obstrucción, infección, deterioro de la función renal o cuando por sus características es poco probable que se elimine de forma espontánea. La decisión se toma después de una evaluación individual.",
  },
  {
    q: "¿En qué consiste una valoración de próstata?",
    a: "Incluye historia clínica dirigida a los síntomas urinarios, exploración física y, según el caso, estudios de laboratorio o de imagen que ayuden a definir el diagnóstico y las alternativas de tratamiento.",
  },
  {
    q: "¿Qué estudios debo llevar a mi primera consulta?",
    a: "Si cuenta con estudios previos, es útil llevarlos: análisis de orina, estudios de sangre, ultrasonidos, tomografías o reportes quirúrgicos. Si no tiene estudios, en la consulta se indican los que correspondan a su caso.",
  },
  {
    q: "¿La vasectomía requiere hospitalización?",
    a: "Es un procedimiento ambulatorio en la mayoría de los casos. Las condiciones específicas, la técnica y los cuidados posteriores se explican durante la valoración previa.",
  },
];

const pillars = [
  {
    t: "Explicación clara",
    d: "Cada diagnóstico se explica en lenguaje sencillo, con las alternativas disponibles y sus alcances.",
  },
  {
    t: "Trato discreto",
    d: "La consulta urológica se realiza en un entorno privado y respetuoso, con confidencialidad clínica.",
  },
  {
    t: "Seguimiento real",
    d: "Revisión de la evolución después del tratamiento y ajustes al plan cuando el caso lo requiere.",
  },
];

export function Testimonials() {
  return (
    <section id="opiniones" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20">
        <Reveal>
          <Eyebrow>Experiencias</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.25rem,5.5vw,4rem)] text-primary">
            Lo que dicen sus pacientes
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Las opiniones verificadas de pacientes pueden consultarse en el perfil profesional del
            Dr. Mario de la Peña en Doctoralia y en sus redes sociales.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary underline decoration-champagne decoration-1 underline-offset-8"
            >
              Instagram
            </a>
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary underline decoration-champagne decoration-1 underline-offset-8"
            >
              Facebook
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="divide-y divide-border border-y border-border">
          {pillars.map((p, i) => (
            <div key={p.t} className="grid gap-2 py-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-8">
              <span className="font-display text-base text-champagne">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-primary">
                  {p.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}


export function Faq() {
  return (
    <section id="faq" className="bg-editorial py-20 md:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:gap-20">
        <Reveal>
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.25rem,5.5vw,4rem)] text-primary">
            Información
            <br />
            para pacientes
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="gap-6 py-6 text-left text-base font-semibold text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-7 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
            La información contenida en este sitio es de carácter informativo y no sustituye una
            valoración médica.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contacto" className="bg-navy py-20 text-white md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal className="max-w-3xl">
          <Eyebrow tone="light">Contacto</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.75rem,8vw,6rem)] text-white">
            Agenda una valoración
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-stone/85">
            Si tienes síntomas, dudas sobre tu salud urológica o necesitas una segunda opinión,
            agenda una consulta.
          </p>
          <div className="mt-10">
            <CtaPrimary
              href={wa()}
              ariaLabel="Agendar cita por WhatsApp"
              className="bg-champagne text-primary hover:bg-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar por WhatsApp
            </CtaPrimary>
          </div>
          <p className="mt-10 border-t border-white/10 pt-6 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-stone">
            Zapopan, Jalisco
          </p>
        </Reveal>
      </div>
    </section>
  );
}

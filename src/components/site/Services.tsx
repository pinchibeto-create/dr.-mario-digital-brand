import { img, wa } from "@/lib/site";
import { CtaOutline, Eyebrow } from "./ui-bits";
import { Reveal } from "./Reveal";

type Service = {
  id: string;
  n: string;
  title: string;
  icon: string;
  alt: string;
  intro: string;
  items: string[];
  cta: string;
  msg: "prostata" | "rinon" | "masculina" | "cirugia";
  highlight?: string;
};

const services: Service[] = [
  {
    id: "prostata",
    n: "01",
    title: "Próstata",
    icon: img.iconProstata,
    alt: "Icono de próstata, atención urológica",
    intro:
      "Evaluación y tratamiento de alteraciones prostáticas que pueden afectar la función urinaria y la calidad de vida.",
    items: [
      "Crecimiento prostático",
      "Dificultad para orinar",
      "Evaluación prostática",
      "Cirugía de próstata",
      "Valoración de cáncer de próstata",
    ],
    cta: "Consultar por próstata",
    msg: "prostata",
  },
  {
    id: "rinon",
    n: "02",
    title: "Riñón y vías urinarias",
    icon: img.iconRinon,
    alt: "Icono de riñón y vías urinarias",
    intro:
      "Diagnóstico y tratamiento de padecimientos del riñón y de las vías urinarias, con especial atención a los cálculos.",
    items: [
      "Piedras en los riñones",
      "Cálculos urinarios",
      "Infecciones urinarias",
      "Obstrucción urinaria",
      "Enfermedades del riñón y vías urinarias",
    ],
    highlight: "Piedras en los riñones",
    cta: "Consultar por riñón o vías urinarias",
    msg: "rinon",
  },
  {
    id: "masculina",
    n: "03",
    title: "Salud urológica masculina",
    icon: img.iconMasculina,
    alt: "Icono de salud urológica masculina",
    intro:
      "Valoración discreta y especializada de padecimientos que afectan la salud urológica y sexual masculina.",
    items: [
      "Vasectomía",
      "Circuncisión",
      "Varicocele",
      "VPH",
      "Herpes",
      "Balanitis",
      "Salud sexual masculina",
    ],
    cta: "Solicitar valoración",
    msg: "masculina",
  },
  {
    id: "cirugia",
    n: "04",
    title: "Cirugía urológica",
    icon: img.iconCirugia,
    alt: "Icono de cirugía urológica",
    intro:
      "Procedimientos quirúrgicos planeados de forma individual, con preferencia por abordajes de mínima invasión.",
    items: [
      "Cirugía de próstata",
      "Cirugía de piedras renales",
      "Cirugía endoscópica",
      "Cirugía mínimamente invasiva",
      "Procedimientos especializados",
    ],
    cta: "Consultar procedimiento",
    msg: "cirugia",
  },
];

export function Services() {
  return (
    <section id="especialidades" className="bg-editorial py-20 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>Atención urológica</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] text-primary">
            ¿Qué podemos evaluar?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal
              key={s.id}
              as="article"
              delay={i * 80}
              className="group flex flex-col bg-background p-7 transition-colors duration-300 hover:bg-card md:p-10"
            >
              <div className="flex items-start justify-between gap-4">
                <img
                  src={s.icon}
                  alt={s.alt}
                  width={320}
                  height={325}
                  loading="lazy"
                  decoding="async"
                  className="h-20 w-20 shrink-0 object-contain md:h-28 md:w-28"
                />
                <span className="font-display text-3xl leading-none text-champagne">{s.n}</span>
              </div>

              <h3 className="mt-7 text-lg font-semibold text-primary md:text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.intro}</p>

              <ul className="mt-6 space-y-2 border-t border-border pt-5">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 text-sm ${
                      item === s.highlight
                        ? "font-semibold text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-champagne" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2">
                <CtaOutline href={wa(s.msg)} className="w-full sm:w-auto">
                  {s.cta}
                </CtaOutline>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

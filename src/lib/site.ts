export const img = {
  logo: "/images/dr_mario_web_assets_v2/01_branding/logo-dr-mario-de-la-pena.png",
  heroEditorial: "/images/dr_mario_web_assets_v2/02_hero/hero-doctor-editorial.webp",
  heroVertical: "/images/dr_mario_web_assets_v2/02_hero/doctor-scrubs-recorte-vertical.webp",
  retratoScrubs: "/images/dr_mario_web_assets_v2/03_retratos/doctor-scrubs-brazos-cruzados.webp",
  retratoTraje: "/images/dr_mario_web_assets_v2/03_retratos/doctor-traje-ejecutivo.webp",
  quirofanoPreparacion: "/images/dr_mario_web_assets_v2/04_quirofano/quirofano-preparacion.webp",
  quirofanoRetrato: "/images/dr_mario_web_assets_v2/04_quirofano/quirofano-retrato-horizontal.webp",
  quirofanoVertical: "/images/dr_mario_web_assets_v2/04_quirofano/quirofano-cirujano-vertical.webp",
  equipoMedico: "/images/dr_mario_web_assets_v2/04_quirofano/equipo-medico.webp",
  consultorio: "/images/dr_mario_web_assets_v2/06_consultorio/doctor-bata-consultorio.webp",
  consultorioModelo: "/images/dr_mario_web_assets_v2/06_consultorio/doctor-bata-modelo-anatomico.webp",
  iconProstata: "/images/dr_mario_web_assets_v2/05_iconos_servicios/icono_prostata.webp",
  iconRinon: "/images/dr_mario_web_assets_v2/05_iconos_servicios/icono_rinones.webp",
  iconMasculina: "/images/dr_mario_web_assets_v2/05_iconos_servicios/icono_salud_masculina.webp",
  iconCirugia: "/images/dr_mario_web_assets_v2/05_iconos_servicios/icono_procedimiento.webp",
};
/**
 * Número de WhatsApp del consultorio.
 * Vacío = el enlace abre WhatsApp con el mensaje listo y el paciente elige el contacto.
 * Colocar aquí el número con lada internacional (ej. "5213312345678") cuando esté confirmado.
 */
export const WHATSAPP_NUMBER = "523333918900";
export const PHONE_NUMBER = "3333918900";
export const PHONE_NUMBER_FORMATTED = "33 3391 8900";

export const waMessages = {
  general:
    "Hola, Dr. Mario de la Peña. Encontré su página web y me gustaría solicitar información para agendar una consulta.",
  prostata:
    "Hola, encontré la página del Dr. Mario de la Peña y quisiera solicitar una valoración relacionada con próstata.",
  rinon:
    "Hola, encontré la página del Dr. Mario de la Peña y quisiera solicitar una valoración por un problema de riñón o vías urinarias.",
  masculina:
    "Hola, encontré la página del Dr. Mario de la Peña y quisiera solicitar una valoración de salud urológica masculina.",
  cirugia:
    "Hola, encontré la página del Dr. Mario de la Peña y quisiera solicitar información sobre un procedimiento urológico.",
} as const;

export function wa(message: keyof typeof waMessages = "general") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessages[message])}`;
}

export const social = {
  instagram: "https://www.instagram.com/dr.mariodelapena/",
  facebook: "https://www.facebook.com/dr.mariodelapenia/",
};

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Dr. Mario", href: "#doctor" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Endourología", href: "#endourologia" },
  { label: "Experiencia", href: "#proceso" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Contacto", href: "#contacto" },
];

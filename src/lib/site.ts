import logoPng from "@/assets/logo-dr-mario-de-la-pena.png.asset.json";
import heroEditorial from "@/assets/hero-doctor-editorial.webp.asset.json";
import heroScrubsVertical from "@/assets/doctor-scrubs-recorte-vertical.webp.asset.json";
import retratoScrubs from "@/assets/doctor-scrubs-brazos-cruzados.webp.asset.json";
import retratoTraje from "@/assets/doctor-traje-ejecutivo.webp.asset.json";
import quirofanoPreparacion from "@/assets/quirofano-preparacion.webp.asset.json";
import quirofanoRetrato from "@/assets/quirofano-retrato-horizontal.webp.asset.json";
import quirofanoVertical from "@/assets/quirofano-cirujano-vertical.webp.asset.json";
import equipoMedico from "@/assets/equipo-medico.webp.asset.json";
import consultorio from "@/assets/doctor-bata-consultorio.webp.asset.json";
import consultorioModelo from "@/assets/doctor-bata-modelo-anatomico.webp.asset.json";
import iconProstata from "@/assets/prostata.webp.asset.json";
import iconRinon from "@/assets/rinon-vias-urinarias.webp.asset.json";
import iconMasculina from "@/assets/salud-urologica-masculina.webp.asset.json";
import iconCirugia from "@/assets/cirugia-urologica.webp.asset.json";

export const img = {
  logo: logoPng.url,
  heroEditorial: heroEditorial.url,
  heroVertical: heroScrubsVertical.url,
  retratoScrubs: retratoScrubs.url,
  retratoTraje: retratoTraje.url,
  quirofanoPreparacion: quirofanoPreparacion.url,
  quirofanoRetrato: quirofanoRetrato.url,
  quirofanoVertical: quirofanoVertical.url,
  equipoMedico: equipoMedico.url,
  consultorio: consultorio.url,
  consultorioModelo: consultorioModelo.url,
  iconProstata: iconProstata.url,
  iconRinon: iconRinon.url,
  iconMasculina: iconMasculina.url,
  iconCirugia: iconCirugia.url,
};

/**
 * Número de WhatsApp del consultorio.
 * Vacío = el enlace abre WhatsApp con el mensaje listo y el paciente elige el contacto.
 * Colocar aquí el número con lada internacional (ej. "5213312345678") cuando esté confirmado.
 */
export const WHATSAPP_NUMBER = "";

export const waMessages = {
  general:
    "Hola, encontré la página del Dr. Mario de la Peña y quisiera solicitar información para agendar una consulta urológica.",
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

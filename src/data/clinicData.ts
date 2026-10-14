/**
 * El Placer de Sonreír - datos del consultorio.
 * Fuente: ficha de Google Maps e Instagram @elplacerdesonreir.
 * Todo lo que se muestra en la web sale de acá: para otro consultorio alcanza con cambiar este archivo.
 */

export const CLINIC = {
  name: 'El Placer de Sonreír',
  initials: 'PS',
  // Frase para "En {name} te atiende ...". Se cambia por los nombres cuando el consultorio los confirme.
  professional: 'nuestro equipo de odontólogos',
  street: 'Av. Chiclana 4048',
  locality: 'Ciudad de Buenos Aires',
  province: 'Argentina',
  fullAddress: 'Av. Chiclana 4048, C1437JMO Ciudad Autónoma de Buenos Aires',
  phone: '011 2636-7902',
  // A CONFIRMAR: es el teléfono de la ficha de Google; se asume que atiende por WhatsApp.
  whatsappNumber: '5491126367902',
  whatsappDisplay: '011 2636-7902',
  instagramHandle: '@elplacerdesonreir',
  instagramUrl: 'https://www.instagram.com/elplacerdesonreir/',
  mapsUrl: 'https://maps.app.goo.gl/7zVTqwFWkfNMbgkq6',
  coordinates: { lat: -34.6409585, lng: -58.4202569 },
  // Calificación visible en la ficha de Google Maps.
  googleRating: '5.0',
  googleReviews: 358,
  // Foto del consultorio o de los profesionales (ruta dentro de /public). Sin foto, se muestra un recuadro reservado.
  photo: null as string | null,
  // Textos que se repiten en el inicio, el pie y la descripción para Google.
  servicesSummary:
    'consultas, limpieza, arreglos, tratamientos de conducto, ortodoncia, prótesis e implantes',
  // Medios de pago: su Instagram dice "diferentes medios de pago" sin detallar cuáles.
  paymentMethods: [] as string[],
  hoursSummary: 'Lunes a jueves de 9 a 18 hs',
  headline: 'El placer de',
  headlineHighlight: 'sonreír con tranquilidad',
  // Lo que se muestra debajo del nombre en el menú.
  locationLabel: 'Ciudad de Buenos Aires',
};

export interface Highlight {
  icon: 'star' | 'heart' | 'calendar' | 'users';
  title: string;
  text: string;
}

// Las tres cajitas debajo del inicio. Se pueden sumar otras que el consultorio confirme
// (por ejemplo "Clínica habilitada" o la cantidad de pacientes atendidos).
export const HIGHLIGHTS: Highlight[] = [
  // A CONFIRMAR con el consultorio: cifra de ejemplo para la demo.
  { icon: 'users', title: '+1.000 pacientes felices', text: 'Confían en nosotros para cuidar su sonrisa' },
  // Sale del Instagram del consultorio: "Obras sociales. Diferentes medios de pago".
  { icon: 'heart', title: 'Obras sociales y medios de pago', text: 'Consultanos por tu cobertura' },
  { icon: 'calendar', title: 'Turnos rápidos', text: 'Confirmación vía WhatsApp' },
];

export interface DentalService {
  id: string;
  name: string;
  description: string;
  icon: 'stethoscope' | 'sparkles' | 'layers' | 'shield' | 'activity' | 'smile' | 'crown' | 'anchor' | 'gem';
}

export interface TeamMember {
  role: string;
  /** Nombre y foto: quedan en null hasta que el consultorio los envíe. */
  name: string | null;
  photo: string | null;
  /** Texto breve opcional de la persona; si falta se usa uno neutro. */
  bio?: string;
}

// Equipo de trabajo del consultorio. Completar nombre y foto de cada integrante.
export const TEAM: TeamMember[] = [{ role: 'Equipo odontológico', name: null, photo: null }];

// A CONFIRMAR con el consultorio: lista de ejemplo para la demo; se quita lo que no realicen.
export const SERVICES: DentalService[] = [
  {
    id: 'estetica',
    name: 'Estética odontológica',
    description: 'Tratamientos para mejorar el color, la forma y la armonía de tu sonrisa.',
    icon: 'sparkles',
  },
  {
    id: 'integral',
    name: 'Odontología integral',
    description: 'Revisión y cuidado de tu salud bucal de forma completa, con un plan pensado para vos.',
    icon: 'stethoscope',
  },
  {
    id: 'limpieza',
    name: 'Limpieza dental',
    description: 'Remoción de sarro y placa para mantener tus encías y tus dientes sanos.',
    icon: 'smile',
  },
  {
    id: 'operatoria',
    name: 'Operatoria dental (caries)',
    description: 'Arreglo de caries y restauraciones para devolverle forma y función a tus dientes.',
    icon: 'stethoscope',
  },
  {
    id: 'conducto',
    name: 'Tratamiento de conducto',
    description: 'Endodoncia para conservar tu diente cuando el nervio está afectado.',
    icon: 'activity',
  },
  {
    id: 'exodoncia',
    name: 'Exodoncia',
    description: 'Extracción de piezas dentales cuando es necesaria, con indicaciones claras para el después.',
    icon: 'shield',
  },
  {
    id: 'ortodoncia',
    name: 'Ortodoncia y ortopedia',
    description: 'Corrección de la posición de los dientes y acompañamiento del desarrollo de los maxilares.',
    icon: 'sparkles',
  },
  {
    id: 'protesis',
    name: 'Prótesis',
    description: 'Reposición de piezas dentales, fijas o removibles, para recuperar la masticación y la sonrisa.',
    icon: 'layers',
  },
  {
    id: 'corona',
    name: 'Coronas, perno y poste',
    description: 'Reconstrucción y cobertura de piezas dentales para devolverles forma, tamaño y resistencia.',
    icon: 'crown',
  },
  {
    id: 'implantes',
    name: 'Implantes',
    description: 'Reposición de piezas dentales con implantes para recuperar la función y la estética.',
    icon: 'gem',
  },
  {
    id: 'urgencias',
    name: 'Urgencias',
    description: 'Si tenés dolor o una urgencia, escribinos por WhatsApp y vemos cómo atenderte.',
    icon: 'shield',
  },
];

export interface ScheduleDay {
  dayName: string;
  dayIndex: number; // 0 = domingo ... 6 = sábado
  open: string | null;
  close: string | null;
}

export const SCHEDULE: ScheduleDay[] = [
  { dayName: 'Lunes', dayIndex: 1, open: '09:00', close: '18:00' },
  { dayName: 'Martes', dayIndex: 2, open: '09:00', close: '18:00' },
  { dayName: 'Miércoles', dayIndex: 3, open: '09:00', close: '18:00' },
  { dayName: 'Jueves', dayIndex: 4, open: '09:00', close: '18:00' },
  { dayName: 'Viernes', dayIndex: 5, open: '09:00', close: '16:00' },
  { dayName: 'Sábado', dayIndex: 6, open: null, close: null },
  { dayName: 'Domingo', dayIndex: 0, open: null, close: null },
];

const TIME_ZONE = 'America/Argentina/Buenos_Aires';

export interface ClinicStatus {
  isOpen: boolean;
  badge: string;
  detail: string;
}

const toMinutes = (t: string) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};

export function getClinicStatus(now: Date = new Date()): ClinicStatus {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(now);

  const weekday = (parts.find((p) => p.type === 'weekday')?.value || '').toLowerCase().slice(0, 3);
  const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10) % 24;
  const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
  const dayMap: Record<string, number> = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
  const today = dayMap[weekday] ?? now.getDay();
  const minutes = hour * 60 + minute;

  const day = SCHEDULE.find((d) => d.dayIndex === today);
  if (day?.open && day.close) {
    if (minutes >= toMinutes(day.open) && minutes < toMinutes(day.close)) {
      return { isOpen: true, badge: 'Abierto ahora', detail: `Cierra a las ${day.close} hs` };
    }
    if (minutes < toMinutes(day.open)) {
      return { isOpen: false, badge: 'Cerrado ahora', detail: `Abre hoy a las ${day.open} hs` };
    }
  }

  for (let i = 1; i <= 7; i++) {
    const next = SCHEDULE.find((d) => d.dayIndex === (today + i) % 7);
    if (next?.open) {
      const cuando = i === 1 ? 'mañana' : `el ${next.dayName.toLowerCase()}`;
      return { isOpen: false, badge: 'Cerrado por hoy', detail: `Abre ${cuando} a las ${next.open} hs` };
    }
  }
  return { isOpen: false, badge: 'Cerrado ahora', detail: '' };
}

export function whatsappUrl(message: string): string {
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

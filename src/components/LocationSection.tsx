import React, { useState } from 'react';
import { Check, Clock, Copy, ExternalLink, MapPin, Navigation, Phone } from 'lucide-react';
import { BRANCHES, CLINIC, COVERAGES, SCHEDULE, getClinicStatus, whatsappUrl } from '../data/clinicData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [sedeActiva, setSedeActiva] = useState(0);
  const status = getClinicStatus();
  const todayIndex = new Date().getDay();
  const sede = BRANCHES[sedeActiva];

  const copiar = () => {
    navigator.clipboard?.writeText(sede.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const { lat, lng } = sede.coordinates;

  return (
    <section
      id="ubicacion"
      className="py-14 md:py-20 lg:py-24 bg-gradient-to-b from-white to-teal-50 border-b border-teal-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título con el mismo estilo que las demás secciones: grande, centrado y con degradado */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-500 bg-clip-text text-transparent">
              Dónde estamos
            </span>
          </h2>
          <div className="mx-auto mt-4 mb-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-1">
            Dos sedes en{' '}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
              {CLINIC.locality}
            </span>
          </h3>
          <p className="text-base sm:text-lg text-slate-600 mb-6">{CLINIC.streets}</p>

          {/* Selector de sede */}
          <div className="inline-flex flex-wrap justify-center gap-2" role="tablist" aria-label="Sedes">
            {BRANCHES.map((b, i) => (
              <button
                key={b.id}
                type="button"
                role="tab"
                aria-selected={sedeActiva === i}
                onClick={() => setSedeActiva(i)}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-bold border transition-colors cursor-pointer ${
                  sedeActiva === i
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-transparent shadow-md shadow-teal-500/25'
                    : 'bg-white text-teal-800 border-teal-200 hover:bg-teal-50'
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span>{b.label}</span>
              </button>
            ))}
          </div>

          {/* Obras sociales y prepagas */}
          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-3">
              Trabajamos con obras sociales y prepagas
            </p>
            <ul className="flex flex-wrap justify-center gap-2">
              {COVERAGES.map((c) => (
                <li
                  key={c}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-teal-200 text-teal-900 text-xs sm:text-sm font-semibold shadow-sm"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 rounded-3xl bg-white border border-teal-100 shadow-lg shadow-teal-900/5 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between gap-3 pb-5 border-b border-slate-100">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Clock className="w-4 h-4 text-teal-700" />
                <span>Horarios de atención</span>
              </div>
              {sede.showSchedule && (
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                    status.isOpen
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : 'bg-amber-50 text-amber-700 border-amber-200'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500' : 'bg-amber-400'}`} />
                  {status.badge}
                </span>
              )}
            </div>

            {sede.showSchedule ? (
              <>
                <div className="space-y-1.5 text-sm text-slate-700">
                  {SCHEDULE.map((d) => {
                    const hoy = d.dayIndex === todayIndex;
                    return (
                      <div
                        key={d.dayName}
                        className={`flex items-center justify-between py-1.5 px-3 rounded-lg ${
                          hoy ? 'bg-teal-50 font-semibold text-teal-900 border border-teal-100' : ''
                        }`}
                      >
                        <span>
                          {d.dayName}
                          {hoy && <span className="ml-2 text-[11px] text-teal-700">(hoy)</span>}
                        </span>
                        <span className="font-mono text-xs">
                          {d.open && d.close ? `${d.open} - ${d.close}` : 'Cerrado'}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {status.detail && <p className="text-xs text-slate-500">{status.detail}</p>}
              </>
            ) : (
              <div className="rounded-xl bg-teal-50 border border-teal-100 p-4 text-sm text-teal-900">
                <p className="mb-3">Consultá los días y horarios de esta sede por WhatsApp.</p>
                <a
                  href={whatsappUrl(`Hola! Quisiera consultar los horarios de la sede de ${sede.label} en ${CLINIC.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#16c55e] hover:bg-[#12a84f] text-white text-xs font-bold shadow-md transition-colors"
                >
                  <span>Consultar horarios</span>
                </a>
              </div>
            )}

            <div className="flex flex-wrap gap-2.5 pt-1">
              <a
                href={sede.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white text-xs font-bold shadow-md shadow-teal-500/25 transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Cómo llegar</span>
                <ExternalLink className="w-3 h-3 text-white/70" />
              </a>
              <button
                type="button"
                onClick={copiar}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-xs font-medium transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiada' : 'Copiar dirección'}</span>
              </button>
              {sede.phone && (
                <a
                  href={`tel:${sede.phone.replace(/\D/g, '')}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-xs font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{sede.phone}</span>
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-7 rounded-3xl border border-teal-100 shadow-lg shadow-teal-900/5 overflow-hidden h-[440px] relative">
            <iframe
              key={sede.id}
              title={`Ubicación de ${CLINIC.name}, ${sede.label}`}
              src={`https://www.google.com/maps?q=${lat},${lng}&z=17&hl=es&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 shadow-lg flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-teal-700 text-white flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">{CLINIC.name}</p>
                <p className="text-[11px] text-slate-600">{sede.fullAddress}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

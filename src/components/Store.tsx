import { MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';
import { Picture } from './ui/Picture';
import { Reveal } from './ui/Reveal';

export function Store() {
  return (
    <section
      id="loja"
      className="section relative overflow-hidden border-y border-white/5 bg-ink-900/40"
    >
      <div className="container-max container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">A loja</span>
          <h2 className="h-display text-4xl text-cream sm:text-5xl">
            Um centro técnico que parece showroom.
          </h2>
          <p className="mt-5 text-lg text-cream/70">
            Espaço moderno, organizado e pronto pra te receber. Conheça a iTV Centro
            Técnico de pertinho.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 lg:col-span-2 lg:aspect-auto">
            <Picture
              base="loja-fachada"
              widths={[640, 1024]}
              sizes="(min-width: 1024px) 800px, 100vw"
              alt="Fachada da iTV Centro Técnico em Manaus"
              width={1024}
              height={573}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-cream">
              <div className="text-xs font-medium uppercase tracking-widest text-forest-500">
                Fachada
              </div>
              <div className="mt-1 font-display text-xl font-semibold">
                Rua Visconde de Utinga, 628
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            <Reveal delay={100} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
              <Picture
                base="loja-balcao"
                widths={[640, 1024]}
                sizes="(min-width: 1024px) 400px, 50vw"
                alt="Balcão de atendimento da iTV"
                width={1024}
                height={578}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-xs font-medium uppercase tracking-widest text-forest-500">
                Atendimento
              </div>
            </Reveal>
            <Reveal delay={200} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
              <Picture
                base="loja-showroom"
                widths={[640, 1024]}
                sizes="(min-width: 1024px) 400px, 50vw"
                alt="Showroom da iTV com TVs em exposição"
                width={1024}
                height={572}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-xs font-medium uppercase tracking-widest text-forest-500">
                Showroom
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 lg:grid-cols-3 lg:p-10">
          <div className="lg:col-span-1">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest-500/10 text-forest-500">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-widest text-forest-500">
                  Endereço
                </div>
                <div className="mt-1 text-base font-medium text-cream">
                  {site.address.street}
                </div>
                <div className="text-sm text-cream/60">
                  {site.address.city}/{site.address.state} · CEP {site.address.zip}
                </div>
                <a
                  href={site.address.mapsQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-500 hover:text-forest-400"
                >
                  Abrir no Maps
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest-500/10 text-forest-500">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-widest text-forest-500">
                  Horário
                </div>
                <ul className="mt-2 space-y-1 text-sm text-cream/80">
                  <li>{site.hours.weekdays}</li>
                  <li>{site.hours.saturday}</li>
                  <li className="text-cream/50">{site.hours.sunday}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 lg:col-span-2">
            <iframe
              title="Mapa da iTV Centro Técnico"
              src={site.address.mapsEmbed}
              className="h-72 w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, filter: 'invert(0.92) hue-rotate(180deg)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

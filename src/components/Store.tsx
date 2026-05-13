'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';

export function Store() {
  return (
    <section
      id="loja"
      className="section relative overflow-hidden border-y border-white/5 bg-ink-900/40"
    >
      <div className="container-max container-px">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow mb-4">A loja</span>
          <h2 className="h-display text-4xl text-cream sm:text-5xl">
            Um centro técnico que parece showroom.
          </h2>
          <p className="mt-5 text-lg text-cream/70">
            Espaço moderno, organizado e pronto pra te receber. Conheça a iTV Centro
            Técnico de pertinho.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 lg:col-span-2 lg:aspect-auto"
          >
            <Image
              src="/images/loja-fachada.png"
              alt="Fachada da iTV Centro Técnico em Manaus"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 800px, 100vw"
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
          </motion.div>

          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src="/images/loja-balcao.png"
                alt="Balcão de atendimento da iTV"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 400px, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-xs font-medium uppercase tracking-widest text-forest-500">
                Atendimento
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src="/images/loja-showroom.png"
                alt="Showroom da iTV com TVs em exposição"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 400px, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-xs font-medium uppercase tracking-widest text-forest-500">
                Showroom
              </div>
            </motion.div>
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

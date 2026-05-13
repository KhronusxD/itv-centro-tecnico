'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Wendell S.',
    text:
      'Gostei muito do atendimento. Equipe treinada no atendimento da entrega em casa. Uma garantia de manutenção de 180 dias.',
    rating: 5,
  },
  {
    name: 'Lucas M.',
    text:
      'Atendimento excelente, os profissionais atenciosos, o serviço de qualidade e a entrega foi rápida e com garantia.',
    rating: 5,
  },
  {
    name: 'Fernando A.',
    text:
      'Ótimo atendimento. Profissionais de alto nível, além de ótimos preços. Visite a loja, não irá se arrepender.',
    rating: 5,
  },
  {
    name: 'Allyson M.',
    text:
      'Estou muito satisfeito com o serviço. Trabalho sério, preços justos, rapidez na entrega e instalação.',
    rating: 5,
  },
  {
    name: 'Patrícia R.',
    text:
      'Achei que minha Smart TV estava perdida. Orçamento honesto, consertaram em poucos dias e ainda buscaram e entregaram em casa.',
    rating: 5,
  },
  {
    name: 'Marcos T.',
    text:
      'Pediram fotos pelo WhatsApp, deram um pré-orçamento, buscaram em casa e devolveram funcionando perfeitamente. Profissionais honestos.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section relative" id="depoimentos">
      <div className="container-max container-px">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <span className="eyebrow mb-4">Depoimentos</span>
            <h2 className="h-display text-4xl text-cream sm:text-5xl">
              900+ avaliações 5★ no Google.
              <br />
              <span className="text-cream/60">Esses são alguns deles.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 lg:col-span-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-500/15 text-forest-500">
              <Star className="h-7 w-7 fill-forest-500" />
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-cream">5,0</div>
              <div className="text-xs text-cream/60">
                Mais de 900 avaliações reais no Google
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card card-hover relative flex h-full flex-col p-7"
            >
              <Quote className="h-8 w-8 text-forest-500/30" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-cream/80">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                <div>
                  <div className="font-semibold text-cream">{t.name}</div>
                  <div className="text-xs text-cream/50">Cliente verificado</div>
                </div>
                <div className="flex">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-forest-500 text-forest-500" />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

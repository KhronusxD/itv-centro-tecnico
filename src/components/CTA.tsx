'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { defaultWhatsapp, site } from '@/lib/site';

export function CTA() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-max container-px">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-forest-radial p-10 sm:p-14 lg:p-20"
        >
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-forest-500/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-forest-700/20 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="eyebrow mb-5">Vamos consertar isso?</span>
              <h2 className="h-display text-balance text-4xl text-cream sm:text-5xl lg:text-6xl">
                Sua TV de volta funcionando, com a tranquilidade de quem acertou na escolha.
              </h2>
              <p className="mt-6 max-w-xl text-lg text-cream/70">
                Manda uma mensagem agora. Em poucos minutos você recebe um pré-orçamento
                e marcamos a coleta sem custo.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={defaultWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group text-base"
                >
                  <MessageCircle className="h-5 w-5" />
                  Quero consertar minha TV
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href={`tel:+${site.phones.primary}`} className="btn-ghost text-base">
                  <Phone className="h-4 w-4" />
                  (92) 99237-3523
                </a>
              </div>
            </div>

            <div className="relative hidden lg:col-span-5 lg:block">
              <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-ink-950/40 backdrop-blur">
                <Image
                  src="/images/brand-mark.png"
                  alt="Marca iTV Centro Técnico"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

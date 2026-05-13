'use client';

import { motion } from 'framer-motion';

const brands = ['Samsung', 'LG', 'TCL', 'AOC', 'Philco', 'Sony', 'Philips', 'Hisense'];

export function SocialProof() {
  return (
    <section className="relative border-y border-white/5 bg-ink-900/40 py-12 sm:py-16">
      <div className="container-max container-px">
        <div className="flex flex-col items-center gap-8">
          <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-cream/50">
            Atendemos todas as marcas — de TVs comuns a Smart TVs e QLED de até 85"
          </p>
          <div className="grid w-full grid-cols-4 gap-x-6 gap-y-6 sm:grid-cols-8 sm:gap-x-10">
            {brands.map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center justify-center text-center font-display text-base font-semibold text-cream/40 transition-colors hover:text-forest-400 sm:text-lg"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

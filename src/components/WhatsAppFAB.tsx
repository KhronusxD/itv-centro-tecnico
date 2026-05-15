import { MessageCircle } from 'lucide-react';
import { defaultWhatsapp } from '@/lib/site';

export function WhatsAppFAB() {
  return (
    <a
      href={defaultWhatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      style={{ animationDelay: '1s' }}
      className="anim-fade-scale group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-forest-500 px-5 py-3.5 font-semibold text-ink-950 shadow-glow transition-transform hover:scale-105 hover:shadow-[0_0_80px_rgba(46,231,111,0.7)]"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-forest-500/40 blur-md animate-pulse-slow" />
      <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
      <span className="hidden text-sm sm:inline">Fale conosco</span>
    </a>
  );
}

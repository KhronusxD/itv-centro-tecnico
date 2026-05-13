import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Assistência Técnica de TVs em Manaus`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    'assistência técnica de TV em Manaus',
    'conserto de TV Manaus',
    'reparo Smart TV Manaus',
    'troca de display TV',
    'iTV Centro Técnico',
    'conserto TV Samsung Manaus',
    'conserto TV LG Manaus',
  ],
  authors: [{ name: 'iTV Centro Técnico' }],
  openGraph: {
    title: `${site.name} — Assistência Técnica de TVs em Manaus`,
    description: site.description,
    locale: 'pt_BR',
    type: 'website',
    siteName: site.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}

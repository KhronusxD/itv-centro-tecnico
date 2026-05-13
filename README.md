# iTV Centro Técnico — Landing Page

Landing page moderna da **iTV Centro Técnico**, assistência técnica especializada em TVs em Manaus/AM.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** + tokens customizados (paleta verde escuro)
- **Framer Motion** (microinterações e scroll reveal)
- **Lucide Icons**
- **TypeScript**

## Desenvolvimento

```bash
npm install
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

```
src/
├── app/
│   ├── globals.css      # Tema, scrollbar, utilities
│   ├── layout.tsx       # Metadata, fontes (Sora + Inter)
│   └── page.tsx         # Composição da home
├── components/          # 12 componentes da LP
└── lib/site.ts          # Config central (telefones, endereço, horário)

public/
├── logo/                # Variações da marca
└── images/              # Cenas da loja, técnico, brand mark
```

## Identidade visual

- **Cores principais:** verde escuro (`#043B21`), preto esverdeado (`#091A12`), verde neon (`#2EE76F`)
- **Tipografia:** Sora (display) + Inter (body)
- **Mood:** Tech premium escuro com gradientes verdes diagonais

## Cliente

iTV Centro Técnico — Rua Visconde de Utinga, 628, Manaus/AM

# Briefing — Criativos de chamada para conserto de TV (v1)

Cliente: **iTV Centro Técnico — Manaus/AM**
Objetivo: gerar 4 variações estáticas para teste de copy/ângulo em campanha de captação de leads para conserto de TV em Manaus.
Ferramenta de geração: **ChatGPT Image 2.0 (gpt-image-1)**.

---

## 1. Especificações técnicas

| Item | Valor |
|---|---|
| Formato | 4:5 retrato (Feed Instagram + Facebook) |
| Resolução | 1080 × 1350 px |
| Safe area | 80 px de margem em todos os lados (não colocar texto/logo fora dessa área) |
| Tipo | Estático (1 frame por peça) |
| Quantidade | 4 variações |
| CTA fixo | **Agende agora!** (botão verde neon) |

## 2. Sistema visual (ID da marca iTV)

- **Paleta**
  - Preto esverdeado de fundo: `#091A12`
  - Verde escuro (gradient base): `#043B21`
  - Verde neon (destaque, CTA): `#2EE76F`
  - Off-white / cream para texto principal: `#F5F2EA`
- **Tipografia**
  - Display/headline: **Sora** semibold/bold
  - Body/legal: **Inter** regular
- **Mood**
  - Tech premium escuro
  - Gradientes verdes diagonais (de #043B21 → #091A12)
  - Halo glow sutil verde neon ao redor do elemento principal
  - Acabamento limpo, minimalismo brutalista técnico
  - Texturas grade fina (grid) ao fundo, baixa opacidade

## 3. Elementos persistentes (presentes em todas as 4)

Layout vertical em 5 zonas (de cima para baixo):

1. **Topo (margem 80px):** logo "iTV CENTRO TÉCNICO" em branco, à esquerda
2. **Hero visual (centro alto):** elemento gráfico que diferencia a variação
3. **Headline (centro baixo):** copy principal em Sora bold cream
4. **CTA (rodapé alto):** botão pill verde neon `#2EE76F` com texto preto **"Agende agora!"**
5. **Rodapé fino (margem 80px):** WhatsApp `(92) 99237-3523` + endereço `Rua Visconde de Utinga, 628 · Manaus/AM` em Inter cream/60, pequeno, alinhado ao centro

**Regra de respiração:** no máximo 12 palavras de copy total na peça (headline + subline). Sem poluição. Sem disclaimers, sem ofertas inventadas, sem cupons.

## 4. As 4 variações

### V1 — Sintoma (apela à dor do cliente)

- **Headline:** Sua TV liga, mas a tela ficou apagada?
- **Hero visual:** TV moderna grande de frente, tela 100% preta, ambiente escuro tech, halo verde neon sutil contornando a TV
- **Tom:** identificação imediata com o problema

### V2 — Coleta grátis (apela à conveniência)

- **Headline:** A gente busca sua TV em casa. De graça.
- **Hero visual:** ícone/render moderno de uma TV sendo carregada em uma van/caixa estilizada com gradient verde, traços limpos, ar de delivery premium
- **Tom:** zero atrito, tudo facilitado

### V3 — Prazo + garantia (apela à confiança)

- **Headline:** Sua TV de volta em 48h. Com garantia de 6 meses.
- **Hero visual:** TV moderna ligada exibindo um gráfico abstrato verde neon, badge circular verde "180d" ou ícone de escudo `✓` ao lado, gradient diagonal verde
- **Tom:** profissionalismo e tranquilidade

### V4 — Prova social (apela à autoridade)

- **Headline:** 1.250+ avaliações 5★. A mais bem avaliada de Manaus.
- **Hero visual:** cinco estrelas grandes verde neon preenchidas, levemente em perspectiva, halo glow forte; número "1.250+" em Sora black por cima, tratado como número-herói
- **Tom:** validação social, autoridade local

## 5. Notas para o gerador

- Texto em **português brasileiro**, com acentuação correta (essencial revisar — modelos generativos costumam errar acentos).
- Se a renderização vier com texto deformado, **repete o prompt mantendo composição**, ou edita o texto manualmente na peça final (Photoshop/Figma).
- Não inserir números/preços/cupons que não estejam neste briefing.
- O logo "iTV CENTRO TÉCNICO" deve aparecer estilizado em letras maiúsculas com a perna do "i" tendo um gradiente verde neon — se o modelo não acertar, deixa só o tipo "ITV CENTRO TÉCNICO" em branco e a equipe coloca o logo real depois em edição.

---

## 6. Prompts prontos para colar no ChatGPT Image 2.0

> **Como usar:** abra o ChatGPT, ative o Image 2.0, e cole cada prompt abaixo individualmente. Aspect ratio: 4:5 (1080×1350).

---

### Prompt V1 — Sintoma

```
Vertical 4:5 social ad for "iTV Centro Técnico", a TV repair shop in Manaus, Brazil.

Style: dark tech premium, brutalist-clean, minimal. Background: deep dark green-black (#091A12) with a subtle diagonal gradient blending into darker forest green (#043B21). Faint fine grid texture in the background at very low opacity.

Composition (top to bottom):
- Top-left: small white wordmark "iTV CENTRO TÉCNICO" in a modern geometric uppercase sans (Sora), the letter "i" has a vertical neon green gradient stripe.
- Middle hero: a modern flat-screen TV, front view, screen completely black/off, sitting in a dim minimalist environment. A soft neon green (#2EE76F) glow halo behind the TV, hinting that something is wrong.
- Lower third: bold headline in cream/off-white Sora semibold, two lines:
  "Sua TV liga, mas a tela ficou apagada?"
- Below the headline, a pill button in neon green (#2EE76F) with black text "Agende agora!" in semibold sans.
- Bottom margin (small, centered, light cream low opacity Inter): "WhatsApp (92) 99237-3523 · Rua Visconde de Utinga, 628 · Manaus/AM"

Keep 80px safe margin on all sides. No extra text. Lots of breathing room. Premium tech mood. Brazilian Portuguese text, accents correct.
```

---

### Prompt V2 — Coleta grátis

```
Vertical 4:5 social ad for "iTV Centro Técnico", a TV repair shop in Manaus, Brazil.

Style: dark tech premium, brutalist-clean, minimal. Background: deep dark green-black (#091A12) with a subtle diagonal gradient blending into darker forest green (#043B21). Faint fine grid texture at very low opacity.

Composition (top to bottom):
- Top-left: small white wordmark "iTV CENTRO TÉCNICO" in a modern geometric uppercase sans (Sora), the letter "i" has a vertical neon green gradient stripe.
- Middle hero: stylized isometric illustration of a friendly delivery van or branded box gently carrying a flat-screen TV. Clean line work, neon green (#2EE76F) accents, dark glassy surfaces. Premium courier feel, no clutter.
- Lower third: bold cream/off-white Sora semibold headline, two lines:
  "A gente busca sua TV em casa. De graça."
- Below: pill button in neon green (#2EE76F) with black text "Agende agora!".
- Bottom margin (small, centered, light cream low opacity Inter): "WhatsApp (92) 99237-3523 · Rua Visconde de Utinga, 628 · Manaus/AM"

Keep 80px safe margin on all sides. No extra text. Lots of breathing room. Brazilian Portuguese text, accents correct.
```

---

### Prompt V3 — Prazo + garantia

```
Vertical 4:5 social ad for "iTV Centro Técnico", a TV repair shop in Manaus, Brazil.

Style: dark tech premium, brutalist-clean, minimal. Background: deep dark green-black (#091A12) with a strong diagonal gradient into forest green (#043B21). Faint fine grid texture at very low opacity.

Composition (top to bottom):
- Top-left: small white wordmark "iTV CENTRO TÉCNICO" in a modern geometric uppercase sans (Sora), the letter "i" has a vertical neon green gradient stripe.
- Middle hero: a modern flat-screen TV, front view, screen ON showing an abstract data/graph visualization in neon green on black, with a small floating circular shield icon "✓" in neon green at the top-right of the TV indicating warranty/quality.
- Lower third: bold cream/off-white Sora semibold headline, two lines:
  "Sua TV de volta em 48h. Garantia de 6 meses."
- Below: pill button in neon green (#2EE76F) with black text "Agende agora!".
- Bottom margin (small, centered, light cream low opacity Inter): "WhatsApp (92) 99237-3523 · Rua Visconde de Utinga, 628 · Manaus/AM"

Keep 80px safe margin on all sides. No extra text. Premium, trustworthy. Brazilian Portuguese text, accents correct.
```

---

### Prompt V4 — Prova social

```
Vertical 4:5 social ad for "iTV Centro Técnico", a TV repair shop in Manaus, Brazil.

Style: dark tech premium, brutalist-clean, minimal. Background: deep dark green-black (#091A12) with a diagonal gradient into forest green (#043B21). Faint fine grid texture at very low opacity.

Composition (top to bottom):
- Top-left: small white wordmark "iTV CENTRO TÉCNICO" in a modern geometric uppercase sans (Sora), the letter "i" has a vertical neon green gradient stripe.
- Middle hero: five large neon green (#2EE76F) five-pointed stars in a horizontal row, slightly tilted in subtle 3D perspective, with a strong neon glow halo. Overlaid in front, very large bold cream Sora black numeral: "1.250+" — treated as the hero number.
- Lower third: cream Sora semibold headline, two lines:
  "Avaliações 5 estrelas. A mais bem avaliada de Manaus."
- Below: pill button in neon green (#2EE76F) with black text "Agende agora!".
- Bottom margin (small, centered, light cream low opacity Inter): "WhatsApp (92) 99237-3523 · Rua Visconde de Utinga, 628 · Manaus/AM"

Keep 80px safe margin on all sides. No extra text. Premium, authoritative. Brazilian Portuguese text, accents correct.
```

---

## 7. Próximos passos após gerar

1. Gerar as 4 peças no ChatGPT Image 2.0.
2. Conferir tipografia em português (acentos `ç` `ã` `é`) — se vier errado, regerar ou ajustar em Figma/Photoshop.
3. Substituir o lettering "iTV CENTRO TÉCNICO" pelo logo oficial em vetor, garantindo que a perna do "i" mantenha o gradiente verde neon original da marca.
4. Validar legibilidade em mobile (preview a 50% do tamanho real — deve continuar legível).
5. Subir como criativos separados no Ads Manager para teste A/B/C/D de ângulo.

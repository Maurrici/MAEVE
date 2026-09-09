# MAEVE Casamento

Site de casamento em React, criado para ser leve, estatico e facil de publicar no GitHub Pages.

## Stack

- React
- TypeScript
- Vite

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Estrutura Inicial

- `src/data/siteContent.ts`: textos, links, dados do casamento, blocos da historia e Pix.
- `src/components`: componentes reutilizaveis.
- `src/sections`: secoes principais do site.
- `src/styles`: estilos globais, tokens e utilitarios visuais.
- `public/photos`: fotos acessadas por caminho publico, como `/photos/nome-da-foto.jpg`.
- `docs/identidade-visual.md`: direcao visual, paleta e decisoes de identidade.
- `PLANEJAMENTO.md`: plano de execucao por Tasks.

## GitHub Pages

O Vite esta configurado com `base: './'` para gerar assets relativos no build estatico. Isso facilita a publicacao em GitHub Pages mesmo quando o site fica em uma subpasta do dominio.

A publicacao final ainda nao foi configurada. Quando chegar a etapa de deploy, podemos escolher entre GitHub Actions ou publicacao manual da pasta `dist`.

## Observacao Sobre Node

O projeto compila com Node `18.14.2`, mas algumas dependencias de lint instaladas pelo template atual recomendam Node `18.18+`. Se o lint reclamar no futuro, a solucao mais simples sera atualizar o Node.

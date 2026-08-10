# Casusa Oliveira — Portfólio

Portfólio editorial desenvolvido em Next.js. A versão oficial está em `src/app`.

## Visualização local

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`. Não abra um arquivo HTML diretamente.

## Produção

```bash
npm run build
npm run start
```

Para gerar também a entrada estática usada por visualizadores simples:

```bash
npm run build:preview
```

A implementação estática anterior está preservada apenas como referência em
`legacy-static/` e não deve ser usada na publicação.

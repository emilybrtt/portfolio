# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Portfolio React

Aplicação React criada com Vite e TypeScript para recriar o portfolio da Emily Britto com páginas para apresentação principal e marketing.

## Scripts

- `npm run dev`: inicia o servidor de desenvolvimento na porta 5173
- `npm run build`: gera a build de produção na pasta `dist`
- `npm run preview`: pré-visualiza a build de produção
- `npm run lint`: executa o ESLint

## Estrutura

- `src/App.tsx`: layout principal com navegação e roteamento
- `src/routes/Home.tsx`: página inicial com hero, formação, projetos e contato
- `src/routes/Marketing.tsx`: página de marketing com galerias de posts e materiais
- `src/components/`: componentes reutilizáveis das seções
- `src/data/`: dados estáticos usados para popular o conteúdo
- `src/styles/global.css`: estilos globais baseados no layout original
- `public/`: imagens e PDFs do portfolio original

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173` no navegador.
        tsconfigRootDir: import.meta.dirname,

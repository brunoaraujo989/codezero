# CodeZero — Aprenda. Pratique. Evolua.

Plataforma front-end de estudos de programação, com conteúdo local/static, navegação por trilhas, gamificação e laboratório de terminal simulado.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Wouter para rotas client-side
- Lucide React para ícones
- Sonner para feedbacks e toasts

## Instalação

```bash
npm install
```

ou, usando pnpm:

```bash
pnpm install
```

## Desenvolvimento local

```bash
npm run dev
```

O Vite inicia o app em `http://localhost:3000`.

## Build

```bash
npm run build
```

Para validar os tipos:

```bash
npm run check
```

## Produção

```bash
npm run start
```

## Deploy na Vercel

1. Importe o repositório na Vercel.
2. Use `npm run build` como build command.
3. O projeto é uma SPA: configure fallback para `index.html` se o provedor não fizer isso automaticamente.
4. Publique.

## Variáveis de ambiente

O MVP não exige variáveis de ambiente. O catálogo é local e o Termux Lab trabalha exclusivamente com resultados simulados — nenhum comando é executado no servidor.

Quando login, banco de dados, sincronização, ranking, favoritos, comentários, notificações ou IA tutor forem adicionados, documente as variáveis correspondentes aqui e mova o conteúdo sensível para um backend.

## Estrutura principal

```text
client/src/
  components/AppShell.tsx  # sidebar, topbar e busca global
  data/content.ts          # catálogo local separado da interface
  pages/Landing.tsx        # home pública
  pages/Platform.tsx       # páginas da plataforma
  App.tsx                  # roteamento client-side
  index.css                # tokens e estética Neon Observatory
```

## Rotas

- `/` — Home pública
- `/app/dashboard` — Dashboard
- `/app/courses` — Cursos
- `/app/tracks` — Trilhas
- `/app/exercises` — Exercícios
- `/app/quizzes` — Quizzes
- `/app/projects` — Projetos
- `/app/videos` — Vídeos
- `/app/lab` — Termux Lab
- `/app/github` — GitHub
- `/app/progress` — Progresso
- `/app/profile` — Perfil
- `/app/settings` — Configurações

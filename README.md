# CodeZero — Aprenda. Pratique. Evolua.

Plataforma prática de estudos de programação com trilhas, cursos, gamificação e laboratório de terminal simulado.

## Modo convidado

O CodeZero funciona sem cadastro, senha ou login externo. Na entrada, a pessoa escolhe entre dois perfis:

- **Cookie**
- **Pê**

A escolha é salva no `localStorage` do próprio navegador. Assim, a pessoa pode sair pelo menu **Sair do convidado** e entrar novamente escolhendo o mesmo perfil.

> Este é um modo local simples: o progresso fica salvo neste navegador e não sincroniza entre dispositivos.

## Stack

- React 19 + TypeScript
- Vite + Tailwind CSS 4
- Wouter para rotas client-side
- Lucide React e Sonner
- SQLite/libSQL mantido no projeto para evolução futura, mas o deploy atual é estático

## Desenvolvimento local

```bash
pnpm install
pnpm dev
```

O app inicia em `http://localhost:3000`.

## Build e validação

```bash
pnpm run check
pnpm test
pnpm run build
pnpm run preview
```

O build final fica em `dist/`.

## Deploy na Vercel

1. Importe o repositório na Vercel.
2. Framework: **Vite** ou **Other**.
3. Build Command: `pnpm run build`.
4. Output Directory: `dist`.
5. A configuração `vercel.json` mantém as rotas client-side funcionando ao abrir links diretamente.

Não são necessárias variáveis de ambiente para o modo convidado.

## Rotas principais

- `/` — Home pública
- `/guest` — Escolha Cookie ou Pê
- `/app/dashboard` — Dashboard
- `/app/courses` — Cursos
- `/app/tracks` — Trilhas
- `/app/exercises` — Exercícios
- `/app/quizzes` — Quizzes
- `/app/projects` — Projetos
- `/app/videos` — Vídeos
- `/app/lab` — Termux Lab
- `/app/progress` — Progresso
- `/app/profile` — Perfil
- `/app/settings` — Configurações

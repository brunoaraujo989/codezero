# CodeZero — Aprenda. Pratique. Evolua.

Plataforma prática de estudos de programação com trilhas, cursos, gamificação, laboratório de terminal simulado e autenticação segura.

## Stack

- React 19 + TypeScript
- Vite + Express + tRPC
- Tailwind CSS 4
- Drizzle ORM
- SQLite/libSQL (`@libsql/client`)
- Manus OAuth — sem senhas armazenadas pela aplicação
- Wouter, Lucide React e Sonner

## Desenvolvimento local

```bash
pnpm install
DATABASE_URL=file:./data/codezero.db pnpm db:push
pnpm dev
```

O app inicia em `http://localhost:3000`.

## Validação

```bash
pnpm run check
pnpm test
pnpm run build
```

## Autenticação

As rotas `/auth`, `/auth/login` e `/auth/signup` usam o OAuth oficial do Manus. O primeiro acesso cria o usuário automaticamente na tabela `users`; não existe formulário de senha nem senha salva no navegador ou no banco do CodeZero.

As rotas `/app/*` exigem uma sessão autenticada. O logout invalida o cookie de sessão e limpa o estado local.

## Banco SQLite/libSQL

Por padrão, o desenvolvimento local usa:

```text
file:./data/codezero.db
```

O arquivo local é ignorado pelo Git. Para deploy na Vercel, o filesystem de uma função é efêmero; portanto, SQLite em arquivo local **não é persistente entre deploys/requisições**. Para produção, use um banco compatível com SQLite/libSQL, como Turso, e configure a `DATABASE_URL` correspondente na Vercel.

## Deploy na Vercel

1. Importe este repositório público na Vercel.
2. Use `pnpm run build` como Build Command.
3. Configure as variáveis do runtime no painel da Vercel:
   - `DATABASE_URL`
   - `JWT_SECRET`
   - `VITE_APP_ID`
   - `VITE_OAUTH_PORTAL_URL`
   - `OAUTH_SERVER_URL`
   - `OWNER_OPEN_ID` (opcional)
   - `BUILT_IN_FORGE_API_URL` e `BUILT_IN_FORGE_API_KEY` quando os recursos Manus forem usados.
4. Aponte o callback OAuth para `/api/oauth/callback` no domínio publicado.
5. Use um banco libSQL/Turso persistente em vez de `file:./data/codezero.db` no ambiente de produção.

> Nunca envie `.env`, tokens, `JWT_SECRET` ou credenciais para o repositório público.

## Rotas principais

- `/` — Home pública
- `/auth` — Entrar
- `/auth/signup` e `/criar-conta` — Criar perfil
- `/app/dashboard` — Dashboard protegido
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

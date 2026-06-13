# Cellar Notes

A personal wine memory journal for logging bottles, ratings, tasting notes, photos, and the story around each wine.

## Local Setup

Use Node 20 or newer.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Useful scripts:

```bash
npm run build
npm run lint
```

## Supabase Setup

Use the Supabase Free plan for v1. A Supabase account is required, but do not
enable paid add-ons or upgrade the project for v1.

Copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Create the `wine_entries` table with the SQL in [supabase/schema.sql](supabase/schema.sql).
See [docs/supabase-setup.md](docs/supabase-setup.md) for brief setup notes.

## Current Goal

Build a finished v1 in one month.

## Project Docs

- [v1 spec](docs/spec.md)
- [Supabase setup](docs/supabase-setup.md)
- [Future ideas](docs/future.md)
- [UI/UX inspiration](docs/ui-ux-inspiration.md)

## Next Iteration TODOs

- Build the real add wine form with working state and validation.
- Add edit and delete behavior for wine entries.
- Add search and filters to the wine list.
- Replace mock label art with a real label or bottle photo upload flow.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Vercel
- Supabase

## Development Rule

Keep v1 small. Anything not listed in the v1 spec goes into future ideas.

# Supabase Setup

Cellar Notes v1 uses one simple `wine_entries` table. It does not add auth,
social features, OCR, AI, or a complex wine database.

Use the Supabase Free plan for v1. A Supabase account is required to create the
project, but do not enable paid add-ons or upgrade the project for v1.

## Environment Variables

Create `.env.local` from `.env.example` and set:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Use the anon key only. Do not add a service role key to the browser app.

## SQL Setup

Run the committed SQL in [supabase/schema.sql](../supabase/schema.sql) in the
Supabase SQL editor.

For the unauthenticated personal v1, keep access intentionally simple while
developing. If Row Level Security is enabled before auth exists, the app will
need temporary policies for the anon key to read and write `wine_entries`.
Tighten that when auth is deliberately added in a later story.

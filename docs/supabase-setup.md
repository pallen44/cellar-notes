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

The setup SQL enables Row Level Security on `public.wine_entries` and temporarily
allows anon inserts for Story 3. Read, update, and delete policies are
intentionally deferred until their stories define the right access model. This
is not the final production privacy model.

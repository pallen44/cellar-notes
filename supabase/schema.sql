create table if not exists public.wine_entries (
  id uuid primary key default gen_random_uuid(),
  winery text not null,
  wine_name text not null,
  vintage integer,
  grape text,
  region text,
  country text,
  price numeric(10, 2),
  location text,
  people text,
  food_pairing text,
  occasion text,
  notes text,
  rating integer not null check (rating between 1 and 100),
  photo_path text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_wine_entries_updated_at on public.wine_entries;

create trigger set_wine_entries_updated_at
before update on public.wine_entries
for each row
execute function public.set_updated_at();
